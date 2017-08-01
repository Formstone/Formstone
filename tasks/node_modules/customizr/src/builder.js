/* jshint node: true */
module.exports = function (modernizrPath) {
	"use strict";

	var argv = require("optimist").argv;

	// Config object
	var _quiet = argv.quiet,
		_force = argv.force,
		_verbose = argv.verbose;

	// Dependencies
	var cp = require("child_process"),
		fs = require("fs"),
		path = require("path"),
		colors = require("colors"),
		cwd = process.cwd();

	// Deferreds
	var promise = require("promised-io/promise");

	// Cache utils
	var utils;

	return {
		writeCodeToFile : function (result, config) {
			utils.log.ok(("Success! Saved file to " + config.dest).grey);
			return utils.file.write(config.dest, result);
		},

		init : function (tests) {
			var deferred = new promise.Deferred(),
				_interval;

			// Cache utils
			utils = this.utils;

			// Store the current config
			var settings = utils.getSettings();

			// Check if we are minifying this build
			var minify = settings.uglify;

			// Store options
			var options = settings.options;

			var modernizrOptions = {
				"feature-detects": tests,
				"options": options,
				"minify": minify,
				"dest": settings.dest,
				"classPrefix" : settings.classPrefix
			};

			// Perform a series of checks to validify cache
			var useCachedVersion = false;

			if (!_force) {
				useCachedVersion = utils.checkCacheValidity(settings, modernizrOptions);
			}

			if (useCachedVersion) {
				utils.log.writeln();

				utils.log.writeln("No config or test changes detected".bold.white);
				utils.log.ok("The build step has been bypassed. Use `--force` to override.".grey);

				if (settings.dest) {
					utils.log.ok(("Your current file can be found in " + settings.dest).grey);
				}

				setTimeout(function () {
					return deferred.resolve({
						result: useCachedVersion,
						options: modernizrOptions
					});
				});

				return deferred.promise;
			}

			// Echo settings
			utils.log.writeln();
			utils.log.ok("Ready to build using these settings:");
			utils.log.ok(options.join(", ").grey);

			if (minify) {
				utils.log.ok("Your file will be minified with UglifyJS".grey);
			}

			utils.log.writeln();
			utils.log.write("Building your customized Modernizr".bold.white);

			if (!_verbose) {
				_interval = setInterval(function () {
					utils.log.write(".".grey);
				}.bind(this), 200);
			}

			var modernizr = require("modernizr");

			modernizr.build(modernizrOptions, function (result) {
				utils.log.write("...".grey);
				utils.log.ok();

				clearInterval(_interval);

				// Write code to file
				if (settings.dest) {
					this.builder.writeCodeToFile(result, settings);
				}

				return deferred.resolve({
					result: result,
					options: modernizrOptions
				});
			}.bind(this));

			return deferred.promise;
		}
	};
};
