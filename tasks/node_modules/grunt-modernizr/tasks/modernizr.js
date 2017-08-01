/*
 * grunt-modernizr
 * https://github.com/Modernizr/grunt-modernizr
 *
 * Copyright (c) 2012 Richard Herrera
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {

	// ==========================================================================
	// TASKS
	// ==========================================================================

	grunt.registerMultiTask("modernizr", "Build out a lean, mean Modernizr machine.", function () {

		// Require a config object
		this.requiresConfig(this.name);

		// Async
		var done = this.async();

		// The target from our multi-task
		var target = this.target || null;

		// The magic
		var customizr = require("customizr");
		var _merge = require("lodash.merge");
		var settings = _merge(this.options(), this.data);

		// Go!
		return customizr(settings, done);
	});

};
