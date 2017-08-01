/* jshint node: true */
module.exports = function (modernizrPath) {
	"use strict";

	// Dependencies
	var fs = require("fs"),
		path = require("path"),
		glob = require("glob"),
		equal = require("deep-equal"),
		colors = require("colors"),
		mkdirp = require("mkdirp"),
		_ = require("underscore");

	// Lovingly lifted verbatim from Grunt: https://github.com/gruntjs/grunt/blob/master/lib/grunt/file.js
	//
	// Process specified wildcard glob patterns or filenames against a
	// callback, excluding and uniquing files in the result set.
	var processPatterns = function (patterns, fn) {
		// Filepaths to return.
		var result = [];

		// Iterate over flattened patterns array.
		_.flatten(patterns).forEach(function (pattern) {
			// If the first character is ! it should be omitted
			var exclusion = pattern.indexOf('!') === 0;

			// If the pattern is an exclusion, remove the !
			if (exclusion) {
				pattern = pattern.slice(1);
			}

			// Find all matching files for this pattern.
			var matches = fn(pattern);

			if (exclusion) {
				// If an exclusion, remove matching files.
				result = _.difference(result, matches);
			} else {
				// Otherwise add matching files.
				result = _.union(result, matches);
			}
		});

		return result;
	};

	return {
		_ : require("underscore"),

		file : {
			delete : function (filepath) {
				return fs.unlinkSync(filepath);
			},

			exists : function (filepath) {
				return fs.existsSync(filepath);
			},

			// Return an array of all file paths that match the given wildcard patterns.
			expand : function (options, patterns) {
				// Return all matching filepaths.
				var matches = processPatterns(patterns, function (pattern) {
					// Find all matching files for this pattern.
					return glob.sync(pattern, options);
				});

				// Filter result set?
				if (options.filter) {
					matches = matches.filter(function (filepath) {
						filepath = path.join(options.cwd || '', filepath);

						try {
							if (typeof options.filter === 'function') {
								return options.filter(filepath);
							} else {
								// If the file is of the right type and exists, this should work.
								return fs.statSync(filepath)[options.filter]();
							}
						} catch (e) {
							// Otherwise, it's probably not the right type.
							return false;
						}
					});
				}

				return matches;
			},

			mkdir : function (filepath) {
				return mkdirp.sync(path.dirname(filepath));
			},

			read : function (filepath) {
				return String(fs.readFileSync(filepath));
			},

			readJSON : function (filepath) {
				return JSON.parse(fs.readFileSync(filepath));
			},

			write : function (filepath, string, options) {
				mkdirp.sync(path.dirname(filepath));

				if (fs.existsSync(filepath)) {
					fs.unlinkSync(filepath);
				}

				return fs.writeFileSync(filepath, string, options);
			}
		},

		log : {
			ok : function (string) {
				if (string) {
					return process.stdout.write(">> ".green + string + "\n");
				}

				return process.stdout.write("OK".green + "\n");
			},

			subhead : function (string) {
				string = string || "";
				return process.stdout.write("\n" + string.bold + "\n");
			},

			write : function (string) {
				string = string || "";
				return process.stdout.write(string);
			},

			warn : function (string) {
				string = string || "";
				return process.stdout.write(("Warning: " + string + " \n").yellow);
			},

			writeln : function (string) {
				string = string || "";
				return process.stdout.write(string + "\n");
			}
		},

		checkCacheValidity : function (currentConfig, modernizrOptions) {
			var jsonPath = path.join(__dirname, "..", "package.json");
			var pkg = this.file.readJSON(jsonPath);

			// Check if a previous config exists
			var previous = this.getPreviousOptions();

			if (
				currentConfig.cache === true &&
				(currentConfig.dest && this.file.exists(currentConfig.dest)) &&
				pkg &&
				previous &&
				previous.version === pkg.version &&
				previous.modernizr === pkg.dependencies.modernizr &&
				equal(previous.options, modernizrOptions)
			) {
				return this.file.read(currentConfig.dest);
			}

			return false;
		},

		getSettings : function () {
			return this.settings || {};
		},

		storeSettings : function (settings) {
			var _defaults = this._.clone(this.getDefaults().defaults);

			settings = this._.extend(_defaults, settings);
			this.settings = settings;
			return settings;
		},

		getPreviousOptions : function () {
			var cacheDir = path.join(__dirname, "..", "cache");
			var optionsLocation = path.join(cacheDir, "options.json");

			// Check if cache directory doesn't exist
			if (!this.file.exists(optionsLocation)) {
				return false;
			}

			// Otherwise, return the options.
			return this.file.readJSON(optionsLocation);
		},

		saveOptions : function (options) {
			// If no options parameter, assume no further action.
			if (typeof options === "undefined") {
				return;
			}

			var cacheDir = path.join(__dirname, "..", "cache");
			var optionsLocation = path.join(cacheDir, "options.json");

			// Check if cache directory doesn't exist
			if (!this.file.exists(cacheDir)) {
				this.file.mkdir(cacheDir);
			}

			// Remove old options
			if (this.file.exists(optionsLocation)) {
				this.file.delete(optionsLocation);
			}

			var jsonPath = path.join(__dirname, "..", "package.json");
			var pkg = this.file.readJSON(jsonPath);

			// Stash options along with metadata
			var metadata = {
				version: pkg.version,
				modernizr: (pkg.dependencies || {}).modernizr,
				options: options
			};

			// Write new options
			this.file.write(optionsLocation, JSON.stringify(metadata, null, 2));
		},

		getDefaults : function () {
			this.defaults = this.defaults || this.file.readJSON(path.join(__dirname, "settings.json"));
			return this.defaults;
		}
	};
};
