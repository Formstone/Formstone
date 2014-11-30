module.exports = function(grunt) {
	grunt.registerTask('buildDocs', 'Build Formstone Docs.', function () {

		var widgetMethods = [],
			utilityMethods = [],
			allDocs = {
				grid: [],
				utility: [],
				widget: []
			};


		function parseJavascript(content) {
			var _return = {},
				parts = content.split("\n"),
				keys = [
					"name",
					"namespace",
					"type",
					"description",
					"example",
					"param",
					"event",
					"return"
				];

			for (var pi in parts) {
				var p = parts[pi];

				for (var ki in keys) {
					var key = keys[ki];

					if (p.indexOf("@"+key) > -1 && p.indexOf("@events") < 0) {
						var pset = p.split("@"+key),
						part = pset[ pset.length - 1 ].trim();

						// Split down params, events and returns
						if ( ["param","event","return"].indexOf(key) > -1 ) {
							var parray = [];

							if (key !== "return") {
								parray = part.split(" ", 1);
								parray.push( part.replace(parray[0]+" ", "") );
								part = {
									"name": parray[0].trim()
								};
							} else {
								parray[0] = ''
								parray[1] = part;
								part = {};
							}

							if (parray[1]) {
								// 0 - all
								// 1 - type
								// 2 - default
								// 3 - description

								// Patterns: \[([^\]]*)\]|\<([^\]]*)\>|\"([^\]]*)\"
								var matches = parray[1].match(/\[([^\]]*)\]|\<([^\]]*)\>|\"([^\]]*)\"/g);

								for (var mi in matches) {
									var match = matches[mi];

									if (match.indexOf("[") === 0) {
										part.type = match.replace("[", "").replace("]", "");
									}
									if (match.indexOf("<") === 0) {
										part.default = match.replace("<", "").replace(">", "");
									}
									if (match.indexOf('"') === 0) {
										part.description = match.replace('"', "").replace('"', "");
									}
								}
							}
						}

						if (key === "param") {
							if (!_return.params) {
								_return["params"] = [];
							}
							_return["params"].push(part);
						} else if (key === "event") {
							if (!_return.events) {
								_return["events"] = [];
							}
							_return["events"].push(part);
						} else {
							_return[key] = part;
						}
					}
				}
			}

			return _return;
		}


		function parseCSS(content) {
			var _return = {},
				parts = content.split("\n"),
				keys = [
					"name",
					"description",
					"type"
				];

			for (var pi in parts) {
				var p = parts[pi];

				for (var ki in keys) {
					var key = keys[ki];

					if (p.indexOf("@"+key) > -1) {
						var pset = p.split("@"+key),
						part = pset[ pset.length - 1 ].trim();

						_return[key] = part;
					}
				}
			}
			return _return;
		}


		function parseFiles(f) {
			var doc = {};

			var jsFile = grunt.file.read(f),
				cssFile = grunt.file.exists( f.replace(/js/g, "less") ) ? grunt.file.read( f.replace(/js/g, "less") ) : false,
				destinationMD = f.replace("src", "docs").replace(".js", ".md").replace("js/", ""),
				destinationJSON = f.replace("src", "docs/json").replace(".js", ".json").replace("js/", "");

			// JS
			if (jsFile) {
				var jsMatches = jsFile.match(/(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)/g)

				doc.options = [];
				doc.events = [];
				doc.methods = [];

				if (jsMatches) {
					for (var i = 0, count = jsMatches.length; i < count; i++) {
						var content = jsMatches[i];

						if (content.indexOf("@use") > -1) {
							var open = content.indexOf("@use") + 4,
								close = content.indexOf("*/") - content.indexOf("@use") - 6
								use = content.substr(open, close).trim();
							doc.use = use;
						} else if (content.indexOf("@demo") > -1) {
							var open = content.indexOf("@demo") + 5,
								close = content.indexOf("*/") - content.indexOf("@demo") - 7
								demo = content.substr(open, close).trim();
							doc.demo = demo;
						} else if (content.indexOf("@plugin") > -1) {
							var plugin = parseJavascript(content);
							doc.name = plugin.name;
							doc.namespace = plugin.namespace;
							doc.type = plugin.type;
							doc.description = plugin.description;
						} else if (content.indexOf("@options") > -1) {
							var params = parseJavascript(content);
							doc.options = params["params"];
						} else if (content.indexOf("@events") > -1) {
							var events = parseJavascript(content);
							doc.events = events["events"];
						} else if (content.indexOf("@method") > -1) {
							if (!doc.methods) {
								doc.methods = [];
							}

							var m = parseJavascript(content);

							if (content.indexOf("private") < 0) {
								if (content.indexOf("@method widget") > -1) {
									widgetMethods.push(m);
								} else if (content.indexOf("@method utility") > -1) {
									utilityMethods.push(m);
								} else {
									doc.methods.push(m);
								}
							}
						}
					}
				}
			}

			if (cssFile) {
				var cssMatches = cssFile.match(/(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)/g);
				doc.css = [];

				if (cssMatches) {
					// CSS
					for (var i = 0, count = cssMatches.length; i < count; i++) {
						var content = cssMatches[i];

						if (content.indexOf("@class") > -1) {
							var klass = parseCSS(content);
							if (klass.name) {
								doc.css.push(klass);
							}
						} else if (content.indexOf("@grid") > -1) {
							var grid = parseCSS(content);
							doc.name = grid.name;
							doc.namespace = grid.namespace;
							doc.type = "grid";
							doc.description = grid.description;

							destinationMD = f.replace("src", "docs").replace(".less", ".md").replace("less/", ""),
							destinationJSON = f.replace("src", "docs/json").replace(".less", ".json").replace("less/", "");
						}
					}
				}
			}

			if (doc.name) {
				var namespace = doc.name.toLowerCase();

				if (jsFile) {
					if (namespace !== "formstone" && namespace !== "grid") {
						if (doc.type === "widget") {
							for (var i in widgetMethods) {
								var m = JSON.parse(JSON.stringify(widgetMethods[i]));
								m.example = m.example.replace("{ns}", namespace);

								doc.methods.push(m);
							}
						}

						for (var i in utilityMethods) {
							var m = JSON.parse(JSON.stringify(utilityMethods[i]));
							m.example = m.example.replace("{ns}", namespace);

							doc.methods.push(m);
						}
					}

					doc.methods.sort(function(a, b) {
						if (a.name < b.name) return -1;
					    if (a.name > b.name) return 1;
					    return 0;
					});
				}

				var md = "";

				md += '# ' + doc.name;
				md += '\n\n';
				md += doc.description;
				md += '\n\n';

				if (doc.use) {
					md += "* [Use](#use)";
					md += '\n';
				}
				if (doc.options && doc.options.length) {
					md += "* [Options](#options)";
					md += '\n';
				}
				if (doc.events && doc.events.length) {
					md += "* [Events](#events)";
					md += '\n';
				}
				if (doc.methods && doc.methods.length) {
					md += "* [Methods](#methods)";
					md += '\n';
				}
				if (doc.css && doc.css.length) {
					md += "* [CSS](#css)";
					md += '\n';
				}

				md += '<br class="nav">';

				md += '\n';

				if (doc.use) {
					md += '\n';
					md += '## Use ';
					md += '\n';
					md += doc.use
					md += '\n\n';
				}

				if (doc.options && doc.options.length) {
					md += '## Options';
					md += '\n\n';
					if (doc.type === "widget") {
						md += 'Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-' + namespace + '-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.';
					}
					if (doc.type === "utility") {
						md += 'Set instance options by passing a valid object at initialization, or to the public `defaults` method.';
					}
					md += '\n\n';
					md += '| Name | Type | Default | Description |';
					md += '\n';
					md += '| --- | --- | --- | --- |';
					md += '\n';
					for (var i in doc.options) {
						var o = doc.options[i];
						md += '| ' + (o.name || "");
						md += ' | ' + (o.type || "");
						md += ' | ' + (o.default || "");
						md += ' | ' + (o.description || "");
						md += ' |\n';
					}
					md += '\n';
				}

				if (doc.events && doc.events.length) {
					md += '## Events';
					md += '\n\n';
					if (doc.type === "widget") {
						md += 'Events are triggered on the target instance\'s element, unless otherwise stated.';
						md += '\n\n';
					}
					if (doc.type === "utility") {
						md += 'Events are triggered on the `window`, unless otherwise stated.';
						md += '\n\n';
					}
					md += '| Event | Description |';
					md += '\n';
					md += '| --- | --- |';
					md += '\n';
					for (var i in doc.events) {
						var e = doc.events[i];
						md += '| ' + (e.name || "");
						md += ' | ' + (e.description || "");
						md += ' |\n';
					}
					md += '\n';
				}

				if (doc.methods && doc.methods.length) {
					md += '## Methods';
					md += '\n\n';
					if (doc.type === "widget") {
						md += 'Methods are publicly available to all active instances, unless otherwise stated.';
						md += '\n\n';
					}
					if (doc.type === "utility") {
						md += 'Methods are publicly available, unless otherwise stated.';
						md += '\n\n';
					}
					for (var i in doc.methods) {
						var m = doc.methods[i];
						md += '### ' + m.name;
						md += '\n\n';
						md += m.description;
						md += '\n\n';
						if (m.example) {
							md += '```';
							md += '\n';
							md += m.example;
							md += '\n';
							md += '```';
						}
						md += '\n\n';
						if (m.params && m.params.length) {
							md += '##### Parameters';
							md += '\n\n';
							md += '| Name | Type | Default | Description |';
							md += '\n';
							md += '| --- | --- | --- | --- |';
							md += '\n';
							for (var j in m.params) {
								var p = m.params[j];
								md += '| ' + (p.name || "");
								md += ' | ' + (p.type || "");
								md += ' | ' + (p.default || "");
								md += ' | ' + (p.description || "");
								md += ' |\n';
							}
							md += '\n';
						}
					}
				}

				if (doc.css && doc.css.length) {
					md += '## CSS';
					md += '\n\n';
					md += '| Class | Type | Description |';
					md += '\n';
					md += '| --- | --- | --- |';
					md += '\n';
					for (var i in doc.css) {
						var e = doc.css[i];
						md += '| ' + (e.name || "");
						md += ' | ' + (e.type || "");
						md += ' | ' + (e.description || "");
						md += ' |\n';
					}
					md += '\n';
				}

				var template = {
						template: "component.html",
						title: doc.name,
						demo: doc.demo ? doc.demo : ""
					},
					demoTitle = doc.demo ? "* [Demo](#demo)" + '\n <br class="nav">' : "";

				grunt.file.write(destinationMD, md);

				grunt.file.write(destinationMD.replace("docs/", "site/tmp/"), JSON.stringify(template) + '\n\n' + md.replace('<br class="nav">', demoTitle)); // site

				grunt.file.write(destinationJSON, JSON.stringify(doc));
				grunt.log.writeln('File "' + destinationMD + '" created.');

				if (allDocs[doc.type]) {
					allDocs[doc.type].push(doc);
				}
			}
		}

		// WORK

		grunt.file.expand("src/js/*.js").forEach(parseFiles);
		grunt.file.expand("src/less/*.less").forEach(parseFiles);

		var docsmd = '';

		docsmd += '## Core';
		docsmd += '\n\n';
		docsmd += '* [Formstone](core.md)';
		docsmd += '\n\n';
		docsmd += '## Grid';
		docsmd += '\n\n';
		for (var i in allDocs.grid) {
			var d = allDocs.grid[i];
			docsmd += '* [' + d.name + '](' + d.name.toLowerCase().replace(" ", "") + '.md)';
			docsmd += '\n';
		}
		docsmd += '\n';
		docsmd += '## Utility';
		docsmd += '\n\n';
		for (var i in allDocs.utility) {
			var d = allDocs.utility[i];
			docsmd += '* [' + d.name + '](' + d.name.toLowerCase().replace(" ", "") + '.md)';
			docsmd += '\n';
		}
		docsmd += '\n';
		docsmd += '## Widget';
		docsmd += '\n\n';
		for (var i in allDocs.widget) {
			var d = allDocs.widget[i];
			docsmd += '* [' + d.name + '](' + d.name.toLowerCase().replace(" ", "") + '.md)';
			docsmd += '\n';
		}

		grunt.file.write("docs/README.md", '# Documentation \n\n' + docsmd);
		grunt.file.write("site/templates/partials/navigation.md", docsmd.replace(/.md/g, ".html").replace(/##/g, "#####")); //site nav

		var pkg = grunt.file.readJSON('package.json'),
			destination = 'README.md',
			markdown = '<a href="http://gruntjs.com" target="_blank"><img src="https://cdn.gruntjs.com/builtwith.png" alt="Built with Grunt"></a> \n\n' +
					   '# ' + pkg.name + ' \n\n' +
					   pkg.description + ' \n\n' +
					   '[Documentation](docs/README.md)';

		grunt.file.write(destination, markdown);
		grunt.log.writeln('File "' + destination + '" created.');
	});
}