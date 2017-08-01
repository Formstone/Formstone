/*jshint node:true*/
/*global describe, before, it, after*/

"use strict";

var fs = require("fs");
var path = require("path");
var colors = require("colors");
var cwd = process.cwd();

var expect = require("expect.js");
var nexpect = require("nexpect");

var tests = "adownload, ambientlight, animation, apng, appearance, applicationcache, audio, audioloop, audiopreload, backgroundblendmode, backgroundcliptext, backgroundsize, batteryapi, beacon, bgpositionshorthand, bgpositionxy, bgrepeatround, bgrepeatspace, bgsizecover, blobconstructor, bloburls, blobworkers, borderimage, borderradius, boxshadow, boxsizing, canvas, canvasblending, canvastext, canvaswinding, capture, checked, classlist, contains, contenteditable, contextmenu, cookies, cors, createelement-attrs, createelementattrs, cssall, cssanimations, csscalc, csschunit, csscolumns, cssescape, cssexunit, cssfilters, cssgradients, csshyphens, cssinvalid, cssmask, csspointerevents, csspositionsticky, csspseudoanimations, csspseudotransitions, cssreflections, cssremunit, cssresize, cssscrollbar, csstransforms, csstransforms3d, csstransitions, cssvalid, cssvhunit, cssvmaxunit, cssvminunit, cssvwunit, cubicbezierrange, customevent, customprotocolhandler, dart, datachannel, datalistelem, dataset, datauri, dataview, dataworkers, details, devicemotion, deviceorientation, directory, display-runin, displaytable, documentfragment, draganddrop, ellipsis, emoji, es5, es5array, es5date, es5function, es5object, es5string, es5syntax, es5undefined, es6array, es6math, es6number, es6object, es6string, eventlistener, eventsource, exiforientation, fileinput, filereader, filesystem, flash, flexbox, flexboxlegacy, flexboxtweener, flexwrap, fontface, formattribute, formvalidation, framed, fullscreen, gamepads, generatedcontent, generators, geolocation, getrandomvalues, getusermedia, hashchange, hidden, hiddenscroll, history, hsla, htmlimports, ie8compat, indexeddb, indexeddbblob, inlinesvg, input, inputformaction, inputformenctype, inputformmethod, inputformtarget, inputtypes, intl, jpegxr, json, lastchild, localizednumber, localstorage, lowbandwidth, lowbattery, matchmedia, mathml, mediaqueries, meter, microdata, multiplebgs, mutationobserver, notification, nthchild, objectfit, olreversed, oninput, opacity, outputelem, overflowscrolling, pagevisibility, peerconnection, performance, picture, placeholder, pointerevents, pointerlock, postmessage, preserve3d, progressbar, promises, proximity, queryselector, quotamanagement, regions, requestanimationframe, requestautocomplete, rgba, ruby, sandbox, scriptasync, scriptdefer, seamless, search, serviceworker, sessionstorage, shapes, sharedworkers, siblinggeneral, sizes, smil, softhyphens, softhyphensfind, speechrecognition, speechsynthesis, srcdoc, srcset, strictmode, stylescoped, subpixelfont, supports, svg, svgasimg, svgclippaths, svgfilters, svgforeignobject, target, template, templatestrings, textalignlast, textareamaxlength, textshadow, texttrackapi, time, todataurljpeg, todataurlpng, todataurlwebp, touchevents, track, transferables, typedarrays, unicode, unicoderange, unknownelements, urlparser, userdata, userselect, vibrate, video, videoautoplay, videoloop, videopreload, vml, webaudio, webgl, webglextensions, webintents, webp, webp-lossless, webpalpha, webpanimation, webplossless, websockets, websocketsbinary, websqldatabase, webworkers, willchange, wrapflow, xhr2, xhrresponsetype, xhrresponsetypearraybuffer, xhrresponsetypeblob, xhrresponsetypedocument, xhrresponsetypejson, xhrresponsetypetext";
var testArray = tests.split(", ");

var cli = path.join(cwd, "bin", "customizr");
var settingsPath = path.join(cwd, "test", "settings");

var settings = {
	cache: path.join(settingsPath, "cache-invalidate.json"),
	custom: path.join(settingsPath, "custom.json"),
	exclude: path.join(settingsPath, "exclude.json"),
	prefixed: path.join(settingsPath, "prefixed.json"),
	select: path.join(settingsPath, "select.json")
};

describe("customizr", function () {
	var testsLength = testArray.length,
		existingBuild = path.join(cwd, "build", "modernizr-custom.js");

	it("should find all available tests in project", function (done) {
		process.stdout.write("\n\n");

		nexpect.spawn(cli, [
			"--config", settings.custom
		], {
			stripColors: true,
			verbose: true
		})
		.wait("Looking for Modernizr references")

		.wait(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> Ready to build using these settings:")

		.wait("Building your customized Modernizr").wait("OK")
		.expect(">> Success! Saved file to build/modernizr-custom.js")

		.run(function (err) {
			if (!err) {
				done();
			} else {
				throw err;
			}
		});
	});

	it("should avoid re-building a cached Modernizr build", function (done) {
		process.stdout.write("\n\n");

		nexpect.spawn(cli, [
			"--config", settings.custom
		], {
			stripColors: true,
			verbose: true
		})
		.wait("Looking for Modernizr references")

		.wait(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect("No config or test changes detected")
		.expect(">> The build step has been bypassed. Use `--force` to override.")
		.expect(">> Your current file can be found in build/modernizr-custom.js")

		.run(function (err) {
			if (!err) {
				done();
			} else {
				throw err;
			}
		});
	});

	it("should force re-building a cached Modernizr build", function (done) {
		process.stdout.write("\n\n");

		nexpect.spawn(cli, [
			"--config", settings.custom,
			"--force"
		], {
			stripColors: true,
			verbose: true
		})
		.wait("Looking for Modernizr references")

		.wait(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> Ready to build using these settings:")

		.wait("Building your customized Modernizr").wait("OK")
		.expect(">> Success! Saved file to build/modernizr-custom.js")

		.run(function (err) {
			if (!err) {
				done();
			} else {
				throw err;
			}
		});
	});

	it("should invalidate a cached Modernizr build", function (done) {
		process.stdout.write("\n\n");

		nexpect.spawn(cli, [
			"--config", settings.cache
		], {
			stripColors: true,
			verbose: true
		})
		.wait("Looking for Modernizr references")

		.wait(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> Ready to build using these settings:")

		.wait("Building your customized Modernizr").wait("OK")
		.expect(">> Success! Saved file to build/modernizr-custom.js")

		.run(function (err) {
			if (!err) {
				done();
			} else {
				throw err;
			}
		});
	});

	describe("should include all tests", function () {
		var contents;

		testArray.forEach(function (test) {
			it(test, function (done) {
				contents = contents || fs.readFileSync(existingBuild, "utf8");
				expect(contents.indexOf(test)).to.not.equal(-1);
				done();
			});
		});
	});
});

describe("custom builds", function () {
	describe("declared tests", function () {

		it("should only build declared tests", function (done) {
			process.stdout.write("\n\n");

			nexpect.spawn(cli, [
				"--config", settings.select
			], {
				stripColors: true,
				verbose: true
			})

			.wait(">> Explicitly including these tests:")
			.expect(">> siblinggeneral, svg, webintents")

			.expect("Skipping file traversal")

			.wait("Building your customized Modernizr").wait("OK")
			.expect(">> Success! Saved file to build/modernizr-select.js")

			.run(function (err) {
				if (!err) {
					done();
				} else {
					throw err;
				}
			});
		});

		describe("should only contain references to bundled tests", function () {

			var includedTestArray = [
				"webintents",
				"siblinggeneral",
				"svg"
			];

			var testsLength = includedTestArray.length;
			var includedTests = includedTestArray.join(" ");

			var contents;

			includedTestArray.forEach(function (test) {
				it(test, function (done) {
					contents = contents || fs.readFileSync(path.join(cwd, "build", "modernizr-select.js"), "utf8");
					expect(contents.indexOf(test)).to.not.equal(-1);
					done();
				});
			});

			describe("should not contain these references", function (done) {
				var excludedTestArray = testArray.filter(function (test) {
					return includedTestArray.indexOf(test) === -1;
				});

				excludedTestArray.forEach(function (test) {
					it(test, function (done) {
						contents = contents || fs.readFileSync(path.join(cwd, "build", "modernizr-select.js"), "utf8");

						var testPattern = "addTest('" + test.toLowerCase();
						expect(contents.indexOf(testPattern)).to.equal(-1);
						done();
					});
				});
			});
		});

	});

	describe("excluded tests", function () {

		it("should build without excluded tests", function (done) {
			process.stdout.write("\n\n");

			nexpect.spawn(cli, [
				"--config", settings.exclude
			], {
				stripColors: true,
				verbose: true
			})

			.wait(">> Explicitly excluding these tests:")
			.expect(">> applicationcache, emoji, notification")

			.wait("Building your customized Modernizr").wait("OK")
			.expect(">> Success! Saved file to build/modernizr-exclude.js")

			.run(function (err) {
				if (!err) {
					done();
				} else {
					throw err;
				}
			});
		});

		describe("should not contain references to excluded tests", function () {

			var excludedTestArray = [
				"applicationcache",
				"emoji",
				"notification"
			];

			var testsLength = excludedTestArray.length;
			var excludedTests = excludedTestArray.join(" ");

			var contents;

			excludedTestArray.forEach(function (test) {
				it(test, function (done) {
					contents = contents || fs.readFileSync(path.join(cwd, "build", "modernizr-exclude.js"), "utf8");
					expect(contents.indexOf(test)).to.equal(-1);
					done();
				});
			});
		});

	});

	describe("prefix test", function () {

		it("should honor the specified prefix", function (done) {
			process.stdout.write("\n\n");

			nexpect.spawn(cli, [
				"--config", settings.prefixed
			], {
				stripColors: true,
				verbose: true
			})

			.wait("Looking for Modernizr references")

			.expect(">> 3 matches in test/css/vanilla.css")
			.expect(">> cors, input, smil")

			.wait("Building your customized Modernizr").wait("OK")
			.expect(">> Success! Saved file to build/modernizr-prefixed.js")

			.run(function (err) {
				if (!err) {
					done();
				} else {
					throw err;
				}
			});
		});

		describe("should only contain references to bundled tests", function () {

			var includedTestArray = [
				"cors",
				"input",
				"smil"
			];

			var testsLength = includedTestArray.length;
			var includedTests = includedTestArray.join(" ");

			var contents;

			includedTestArray.forEach(function (test) {
				it(test, function (done) {
					contents = contents || fs.readFileSync(path.join(cwd, "build", "modernizr-prefixed.js"), "utf8");
					expect(contents.indexOf(test)).to.not.equal(-1);
					done();
				});
			});

			describe("should not contain these references", function (done) {
				var excludedTestArray = testArray.filter(function (test) {
					return includedTestArray.indexOf(test) === -1;
				});

				excludedTestArray.forEach(function (test) {
					it(test, function (done) {
						contents = contents || fs.readFileSync(path.join(cwd, "build", "modernizr-prefixed.js"), "utf8");

						var testPattern = "addTest('" + test.toLowerCase();
						expect(contents.indexOf(testPattern)).to.equal(-1);
						done();
					});
				});
			});
		});

	});
});
