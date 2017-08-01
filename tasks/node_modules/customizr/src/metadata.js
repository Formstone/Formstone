/* jshint node: true */
module.exports = function (modernizrPath) {
	"use strict";

	// Dependencies
	var cp = require("child_process"),
		fs = require("fs"),
		path = require("path");

	// Deferreds
	var promise = require("promised-io/promise");

	return {
		init : function () {
			var deferred = new promise.Deferred();
			var modernizr = require("modernizr");

			modernizr.metadata(function (metadata) {
				var modRegExp = new RegExp(modernizrPath + "/?");

				var mappings = metadata.map(function (map) {
					var cleanname = map.name.replace(modRegExp, ""),
						testpath = map.amdPath.replace(modRegExp, "").replace("feature-detects", "test");

					return {
						"path": testpath.replace(".js", ""),
						"name": cleanname,
						"property": map.property,
						"cssclass": map.cssclass
					};
				});

				return deferred.resolve(mappings);
			});

			return deferred.promise;
		}
	};
};
