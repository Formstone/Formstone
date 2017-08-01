"use strict";

var fs = require("fs-extra");
var cwd = process.cwd();
var path = require("path");

var buildDir = path.join(cwd, "build");

if (fs.existsSync(buildDir)) {
	console.log("Removing old build folder...");
	fs.removeSync(buildDir);
	console.log("Done.");
}

var modernizr = require("modernizr");

modernizr.metadata(function (metadata) {
	var props = metadata.map(function (data) {
		return {
			name: data.name,
			path: data.amdPath.replace("test/", ""),
			property: data.property,
			cssclass: data.cssclass
		};
	});

	var jsProps = props.filter(function (data) {
		return data.property;
	});

	var jsTests = {};

	jsProps.forEach(function (prop) {
		var sections = prop.path.split("/");
		var maxLength = sections.length - 1;
		var current = jsTests;

		if (sections.length === 1) {
			current.standalone = current.standalone || {};
			current.standalone[sections[0]] = prop.property;
		} else {
			sections.forEach(function (sect, idx) {
				if (idx === maxLength) {
					current[sect] = prop.property;
				} else {
					current[sect] = current[sect] || {};
				}

				current = current[sect];
			});
		}
	});

	var string = JSON.stringify(jsTests, null, "\t");

	// Convert "foo": "bar" -> "foo": Modernizr.bar
	string = string.replace(/(\:(?:\s)?)\"(.*)\"/g, "$1Modernizr.$2");

	// Convert [ "foo": "bar" ] -> [ "foo": Modernizr["bar"] ]
	string = string.replace(/(\t{3})\"(.*)\"/g, "$1Modernizr[\"$2\"]");

	// Convert Modernizr.foo-bar -> Modernizr["foo-bar"]
	string = string.replace(/\.((?:[\w]+)?\-(?:[\w]+))/g, "[\"$1\"]");

	// Save test/js/vanilla.js
	(function () {
		var vanilla = [
			"/* jshint sub: true */",
			"var Modernizr = window.Modernizr;",
			"var tests = " + string + ";"
		].join("\n\n");

		fs.writeFileSync(path.join(cwd, "test", "js", "vanilla.js"), vanilla);
	}());

	// Save test/js/amd.js
	(function () {
		var amd = [
			"/* jshint sub: true */\n/* global define */",
			"define([\"Modernizr\"], function (M) {",
			"	var tests = " + string.replace(/\n/g, "\n\t").replace(/Modernizr/g, "M") + ";",
			"	return M;",
			"});"
		].join("\n\n");

		fs.writeFileSync(path.join(cwd, "test", "js", "amd.js"), amd);
	}());

	// Save test/css/vanilla.css
	(function () {
		var cssProps = props.filter(function (data) {
			return data.cssclass;
		}).map(function (data, idx) {
			var cssclass = Array.isArray(data.cssclass) ? data.cssclass : [data.cssclass];
			var negateclass = (idx % 2 ? "no-" : "");

			return "." + negateclass + cssclass.join(", .");
		});

		var css = [
			cssProps.join(",\n") + " {",
			"\tbackground: red;",
			"}\n\n"
		].join("\n");

		// Take a few classes and add a prefix for testing.
		var prefixed = [
			".prefixed-cors",
			".prefixed-input",
			".prefixed-no-smil"
		];

		css += [
			prefixed.join(",\n") + " {",
			"\tbackground: blue;",
			"}\n"
		].join("\n");

		fs.writeFileSync(path.join(cwd, "test", "css", "vanilla.css"), css);
	}());

	var missingData = props.filter(function (data) {
		return !data.property && !data.cssclass;
	}).map(function (data) {
		return data.path;
	});

	if (missingData.length) {
		console.log("\n");
		console.log("The following tests have no metadata:");
		console.log();
		console.log(missingData.join("\n"));
	}
});
