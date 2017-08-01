/* jshint node: true */
module.exports = function (modernizrPath) {
	"use strict";

	var argv = require("optimist").argv;

	// Config object
	var _quiet = argv.quiet,
		_verbose = argv.verbose;

	// Dependencies
	var cp = require("child_process"),
		fs = require("fs"),
		cwd = process.cwd(),
		path = require("path");

	// Deferreds
	var promise = require("promised-io/promise");

	// Cache utils
	var utils, settings;

	return {
		matchedTestsInFile : {},
		stringMatches : {},

		filterTests : function (tests) {
			var i, j, obj = {},
				filteredTests = [];

			for (i = 0, j = tests.length; i < j; i++) {
				obj[tests[i]] = 0;
			}

			for (var key in obj) {
				filteredTests.push(key);
			}

			return filteredTests;
		},

		findStringMatches : function (type, file, data, testpath) {
			var match, regExp, prefix,
				basename = path.basename(file);

			// JS files
			if ((/\.js$/).test(basename)) {
				// Don't bother if we don't find a reference to Modernizr in the file...
				if (!(/Modernizr/im).test(data)) {
					return;
				}
				// Match usage such as: Modernizr.classname --or-- Modernizr['classname']
				regExp = new RegExp("(?:\\.|\\[(?:\"|'))(" + type + ")(?![\\w-])(?:(?:\"|')\\])?", "gm");
			}
			// If it's not JS, assume it's CSS (or similar, e.g.: LESS, SCSS) files
			else {
				prefix = settings.classPrefix || '';
				// When no prefix, match usage such as: .classname --or-- .no-classname
				// When prefix set, match usage such as: .<prefix>classname --or-- .<prefix>no-classname
				regExp = new RegExp("(?:\\." + prefix + ")(?:no-)?(" + type + ")(?![\\w-])", "gm");
			}
			match = (regExp).exec(data);

			this.matchedTestsInFile[file] = this.matchedTestsInFile[file] || [];

			while (match) {
				var test = match[1];

				if (test) {
					this.stringMatches[testpath] = this.stringMatches[testpath] || [];

					if (this.stringMatches[testpath].indexOf(file) === -1) {
						this.stringMatches[testpath].push(file);
					}

					if (this.matchedTestsInFile[file].indexOf(test) === -1) {
						this.matchedTestsInFile[file].push(test);
					}
				}

				match = (regExp).exec(data);
			}
		},

		parseData : function (file, data, metadata) {
			data = data.toString();
			var testpath, test, type, value, i, j;

			for (test in metadata) {
				for (type in metadata[test]) {
					if (type === "name" || type === "path") {
						continue;
					}

					value = metadata[test][type];
					testpath = metadata[test].path;

					if (Array.isArray(value)) {
						for (i = 0, j = value.length; i < j; i++) {
							this.findStringMatches(value[i], file, data, testpath);
						}
					} else {
						this.findStringMatches(value, file, data, testpath);
					}
				}
			}

			var matchedTests = this.matchedTestsInFile[file];

			if (!_quiet && matchedTests && matchedTests.length) {
				utils.log.writeln();

				var testCount = matchedTests.length;
				var testText = " match" + (testCount > 1 ? "es" : "") + " in ";

				utils.log.ok(testCount.toString().green + testText + file);
				utils.log.ok(matchedTests.sort().join(", ").grey);
			}
		},

		readFile : function (file, metadata, deferred) {
			var stream = fs.createReadStream(file);

			stream.on("data", function (data) {
				this.parseData(file, data, metadata);
			}.bind(this));

			stream.on("end", function () {
				if ((++this.currentFile) === this.totalFiles) {
					return deferred.resolve();
				}
			}.bind(this));
		},

		readFilesAsync : function (files, metadata) {
			var deferred = new promise.Deferred(),
				i, j, last;

			this.currentFile = 0;
			this.totalFiles = files.length;

			for (i = 0, j = files.length; i < j; i++) {
				this.readFile(files[i], metadata, deferred);
			}

			return deferred.promise;
		},

		parseCodeFromBuffers : function (buffers, metadata) {
			var i, j, file;

			for (i = 0, j = buffers.length; i < j; i++) {
				file = buffers[i];
				this.parseData(file.path, String(file.contents), metadata);
			}
		},

		init : function (metadata) {
			// Cache utils
			utils = this.utils;
			settings = utils.getSettings();

			var _private = utils.getDefaults().private;

			var deferred = new promise.Deferred(),
				buildPath = path.join(modernizrPath, "build"),
				files;

			var tests = settings.tests.map(function (test) {
				var data = metadata.filter(function (data) {
					return data.property === test;
				});

				return data[0] || {};
			}).filter(function (test) {
				return test.path;
			});

			if (!_quiet && tests && tests.length) {
				utils.log.writeln();
				utils.log.ok("Explicitly including these tests:");
				utils.log.ok(tests.map(function (test) {
					return test.property;
				}).sort().join(", ").grey);
			}

			var excludedTests = settings.excludeTests.map(function (test) {
				var data = metadata.filter(function (data) {
					return data.property === test;
				});

				return data[0] || {};
			}).filter(function (test) {
				return test.path;
			});

			if (!_quiet && excludedTests && excludedTests.length) {
				utils.log.writeln();
				utils.log.ok("Explicitly excluding these tests:");
				utils.log.ok(excludedTests.map(function (test) {
					return test.property;
				}).sort().join(", ").grey);
			}

			tests = tests.map(function (test) {
				return test.path;
			}).filter(function (test) {
				return excludedTests.map(function (test) {
					return test.path;
				}).indexOf(test) === -1;
			}).concat(settings.customTests.map(function (test) {
				return path.relative(buildPath, fs.realpathSync(test));
			}));

			metadata = metadata.filter(function (data) {
				return excludedTests.map(function (test) {
					return test.path;
				}).indexOf(data.path) === -1;
			});

			if (settings.crawl !== true && settings.useBuffers !== true) {
				tests = this.crawler.filterTests(tests);

				if (!_quiet) {
					utils.log.subhead("Skipping file traversal");
				}

				setTimeout(function () {
					return deferred.resolve(tests);
				}, 0);

				return deferred.promise;
			}

			if (!_quiet) {
				utils.log.subhead("Looking for Modernizr references");
			}

			// Support including code via string rather than reading a file.
			if (settings.useBuffers === true) {
				this.crawler.parseCodeFromBuffers(settings.files.src, metadata);

				for (var key in this.crawler.stringMatches) {
					tests.push(key);
				}

				tests = this.crawler.filterTests(tests);

				setTimeout(function () {
					return deferred.resolve(tests);
				});

				return deferred.promise;
			}

			// Exclude developer build
			if (settings.devFile !== "remote" && settings.devFile !== false) {
				if (!fs.existsSync(settings.devFile)) {
					utils.log.warn([
						"Can't find your Modernizr development build at " + settings.devFile,
						"this tool needs this path to avoid false positives",
						"",
						"Update your settings via the modernizr.devFile config option",
						"See %s#devfile-string for more details".replace("%s", _private.url.github),
						"",
						""
					].join("\n       ").replace(/\s$/, ""));
				} else {
					settings.files.src.push("!" + settings.devFile);
				}
			}

			// Exclude generated file
			if (settings.dest) {
				settings.files.src.push("!" + settings.dest);
			}

			// And exclude all files in this current directory
			settings.files.src.push("!" + path.join(__dirname.replace(cwd + path.sep, ""), "**", "*"));

			files = utils.file.expand({
				filter: "isFile"
			}, settings.files.src);

			this.crawler.readFilesAsync(files, metadata).then(function () {
				for (var key in this.crawler.stringMatches) {
					tests.push(key);
				}

				tests = this.crawler.filterTests(tests);
				return deferred.resolve(tests);
			}.bind(this));

			return deferred.promise;
		}
	};
};
