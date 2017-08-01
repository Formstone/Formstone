"use strict";

var fs = require("fs"),
	assert = require("assert"),
	nexpect = require("nexpect"),
	modernizr = require("../");

describe("grunt-modernizr", function () {
	it("should generate a custom Modernizr file", function (done) {

		var savePath = "build/modernizr-custom.js";

		nexpect.spawn("grunt", ["modernizr"], {
			stripColors: true,
			verbose: true
		})
		.wait("Looking for Modernizr references")
		.wait(">> Success! Saved file to " + savePath)

		.run(function () {
			assert.equal(true, fs.existsSync(savePath));

			var contents = fs.readFileSync(savePath);
			assert.notEqual(-1, String(contents).indexOf("Modernizr"));

			done();
		});


	});
});
