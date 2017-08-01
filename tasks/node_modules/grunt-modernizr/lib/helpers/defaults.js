(function () {
	"use strict";

	// ==========================================================================
	// DEFAULT CONFIG
	// ==========================================================================
	module.exports = {

		// Path to the build you're using for development.
		"devFile" : "lib/modernizr-dev.js",

		// Path to save out the built file
		"outputFile" : "build/modernizr-custom.js",

		// Based on default settings on http://modernizr.com/download/
		"extra" : {
			"shiv" : true,
			"printshiv" : false,
			"load" : true,
			"mq" : false,
			"cssclasses" : true
		},

		// Based on default settings on http://modernizr.com/download/
		"extensibility" : {
			"addtest" : false,
			"prefixed" : false,
			"teststyles" : false,
			"testprops" : false,
			"testallprops" : false,
			"hasevents" : false,
			"prefixes" : false,
			"domprefixes" : false
		},

		// By default, source is uglified before saving
		"uglify" : true,

		// Define any tests you want to impliticly include
		"tests" : [],

		// By default, will crawl your project for references to Modernizr tests
		// Set to false to disable
		"parseFiles" : true,

		// By default, this task will crawl all *.js, *.css files.
		"files" : {
			"src": [
				"*[^(g|G)runt(file)?].{js,css,scss,sass}",
				"**[^node_modules]/**/*.{js,css,scss,sass}",
				"!lib/cache/**/*",
				"!lib/gruntifier.js"
			]
		},

		// Set to true to attempt to match user-contributed tests
		"matchCommunityTests" : false,

		// Have custom Modernizr tests? Add them here.
		"customTests" : []
	};
}());
