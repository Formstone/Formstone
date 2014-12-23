module.exports = function(grunt) {
	grunt.registerTask('buildDocs', 'Build Formstone Docs.', function () {

		var widgetMethods = [],
			utilityMethods = [],
			allDocs = {
				grid: [],
				utility: [],
				widget: []
			};

		// Parse Javascript

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
					"return",
					"dependency"
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
										part.description = match.replace(/"/g, "");
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
						} else if (key === "dependency") {
							if (!_return.dependencies) {
								_return["dependencies"] = [];
							}
							_return["dependencies"].push(part);
						} else {
							_return[key] = part;
						}
					}
				}
			}

			return _return;
		}

		// Parse CSS

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

		// Build JSON file

		function buildJSON(file) {
			var doc   = {
					main: []
				},
				jsf   = file,
				cssf  = file.replace(/js/g, "less"),
				usef  = file.replace('src/js', "src/docs").replace('src/less', "src/docs").replace(/js/g, "md").replace(/less/g, "md"),
				demof = file.replace('src/js', "src/docs").replace('src/less', "src/docs").replace(/js/g, "html").replace(/less/g, "html"),
				jsFile   = grunt.file.exists( jsf )  ? grunt.file.read( jsf )  : false,
				cssFile  = grunt.file.exists( cssf ) ? grunt.file.read( cssf ) : false,
				useFile  = grunt.file.exists( usef ) ? grunt.file.read( usef ) : false,
				demoFile = grunt.file.exists( demof ) ? grunt.file.read( demof ) : false,
				destination;

			if (cssFile) {
				destination = file.replace('src/less', "docs/json").replace('.less', ".json");
			}
			if (jsFile && cssf !== file) {
				destination = file.replace('src/js', "docs/json").replace('.js', ".json");
			}

			// JS
			if (jsFile) {
				var jsMatches = jsFile.match(/(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)/g)

				doc.options = [];
				doc.events = [];
				doc.methods = [];

				if (jsMatches) {
					for (var i = 0, count = jsMatches.length; i < count; i++) {
						var content = jsMatches[i];

						if (content.indexOf("@plugin") > -1) {
							var plugin = parseJavascript(content);
							doc.name = plugin.name;
							doc.namespace = plugin.namespace;
							doc.type = plugin.type;
							doc.description = plugin.description;
							doc.dependencies = plugin.dependencies;
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

				var parts = jsf.split("/"),
					p = parts[parts.length - 1];

				if (doc.main.indexOf(p) < 0) {
					doc.main.push(p);
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
						}
					}
				}

				var parts = cssf.split("/"),
					p = parts[parts.length - 1];

				if (doc.main.indexOf(p) < 0) {
					doc.main.push(p.replace("less", "css"));
				}
			}

			if (doc.name) {
				var namespace = doc.name.toLowerCase();

				if (jsFile) {
					if (namespace !== "formstone" && namespace !== "core" && namespace !== "grid") {
						if (doc.type === "widget") {
							for (var i in widgetMethods) {
								var m = JSON.parse(JSON.stringify(widgetMethods[i]));
								m.example = m.example.replace('{ns}', namespace);

								doc.methods.push(m);
							}
						}

						for (var i in utilityMethods) {
							var m = JSON.parse(JSON.stringify(utilityMethods[i]));
							m.example = m.example.replace('{ns}', namespace);

							doc.methods.push(m);
						}
					}

					doc.methods.sort(function(a, b) {
						if (a.name < b.name) return -1;
					    if (a.name > b.name) return 1;
					    return 0;
					});
				}

				if (useFile) {
					doc.use = useFile;
				}
				if (demoFile) {
					doc.demo = demoFile;
				}

				grunt.file.write(destination, JSON.stringify(doc));
				grunt.log.writeln('File "' + destination + '" created.');

				if (allDocs[doc.type]) {
					allDocs[doc.type].push(doc);
				}
			}
		}

		// build markdown

		function buildMarkdown(doc, heading, includeDemo) {
			var namespace = doc.name.toLowerCase(),
				md = "";

			md += heading + ' ' + doc.name;
			md += '\n\n';
			md += doc.description;
			md += '\n\n';

			// if demo
			if (includeDemo && doc.demo) {
				md += "* [Demo](#demo)";
				md += '\n';
			}

			md += "* [Use](#use)";
			md += '\n';

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

			if (includeDemo) {
				md += '<br class="split">\n';
			}

			md += '\n';
			md += heading + '# Use ';
			md += '\n\n';

			if (doc.main && doc.main.length) {
				md += heading + '### Main';
				md += '\n\n';
				md += '```markup';
				md += '\n';
				for (var i in doc.main) {
					md += doc.main[i];
					md += '\n';
				}
				md += '```';
				md += '\n\n';
			}

			if (doc.dependencies && doc.dependencies.length) {
				md += heading + '### Dependencies';
				md += '\n\n';
				md += '```markup';
				md += '\n';
				for (var i in doc.dependencies) {
					md += doc.dependencies[i];
					md += '\n';
				}
				md += '```';
				md += '\n\n';
			}

			if (doc.use) {
				md += doc.use
				md += '\n\n';
			}

			if (doc.options && doc.options.length) {
				md += heading + '# Options';
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
					md += '| ' + (o.name ? '`'+o.name+'`' : "&nbsp;");
					md += ' | ' + (o.type ? '`'+o.type+'`' : "&nbsp;");
					md += ' | ' + (o.default ? '`'+o.default+'`' : "&nbsp;");
					md += ' | ' + (o.description || "&nbsp;");
					md += ' |\n';
				}
				md += '\n';
			}

			if (doc.events && doc.events.length) {
				md += heading + '# Events';
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
					md += '| ' + (e.name ? '`'+e.name+'`' : "&nbsp;");
					md += ' | ' + (e.description || "&nbsp;");
					md += ' |\n';
				}
				md += '\n';
			}

			if (doc.methods && doc.methods.length) {
				md += heading + '# Methods';
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
					md += heading + '## ' + m.name;
					md += '\n\n';
					md += m.description;
					md += '\n\n';
					if (m.example) {
						md += '```javascript';
						md += '\n';
						md += m.example;
						md += '\n';
						md += '```';
					}
					md += '\n\n';
					if (m.params && m.params.length) {
						md += heading + '### Parameters';
						md += '\n\n';
						md += '| Name | Type | Default | Description |';
						md += '\n';
						md += '| --- | --- | --- | --- |';
						md += '\n';
						for (var j in m.params) {
							var p = m.params[j];
							md += '| ' + (p.name ? '`'+p.name+'`' : "&nbsp;");
							md += ' | ' + (p.type ? '`'+p.type+'`' : "&nbsp;");
							md += ' | ' + (p.default ? '`'+p.default+'`' : "&nbsp;");
							md += ' | ' + (p.description || "&nbsp;");
							md += ' |\n';
						}
						md += '\n';
					}
				}
			}

			if (doc.css && doc.css.length) {
				md += heading + '# CSS';
				md += '\n\n';
				md += '| Class | Type | Description |';
				md += '\n';
				md += '| --- | --- | --- |';
				md += '\n';
				for (var i in doc.css) {
					var c = doc.css[i];
					md += '| ' + (c.name ? '`'+c.name+'`' : "&nbsp;");
					md += ' | ' + (c.type ? '`'+c.type+'`' : "&nbsp;");
					md += ' | ' + (c.description || "&nbsp;");
					md += ' |\n';
				}
				md += '\n';
			}

			return md;
		}

		// Build Docs

		function buildDocs(file) {
			var doc = grunt.file.readJSON(file),
				destination = file.replace('/json', "").replace('.json', ".md"),
				md = buildMarkdown(doc, "#");

			grunt.file.write(destination, md, false);
			grunt.log.writeln('File "' + destination + '" created.');
		}

		// Build demo

		function buildDemo(file) {
			var doc = grunt.file.readJSON(file),
				destination = file.replace('docs/json', "demo/pages/components").replace('.json', ".md"),
				destinationBottom = destination.replace("demo/pages/components", "demo/templates/partials/components"),
				md = buildMarkdown(doc, "#", true),
				use = md.split('<br class="split">'),
				template = {
					template: "component.html",
					title: doc.name,
					demo: doc.demo,
					bottom: "components/" + doc.name.toLowerCase().replace(/ /g, ""),
					site_root: "../",
					asset_root: "../../",
					component_root: "../../components/",
				};

			grunt.file.write(destination, JSON.stringify(template) + '\n\n' + use[0]);
			grunt.file.write(destinationBottom, use[1]);

			grunt.log.writeln('File "' + destination + '" created.');
		}

		// Build Index

		function buildIndex() {
			var docsmd = '';

			docsmd += '## Library';
			docsmd += '\n\n';
			docsmd += '* [Core](core.md)';
			docsmd += '\n';
			for (var i in allDocs.grid) {
				var d = allDocs.grid[i];
				docsmd += '* [' + d.name + '](' + d.name.toLowerCase().replace(/ /g, "") + '.md)';
				docsmd += '\n';
			}
			docsmd += '\n';
			docsmd += '## Utility';
			docsmd += '\n\n';
			for (var i in allDocs.utility) {
				var d = allDocs.utility[i];
				docsmd += '* [' + d.name + '](' + d.name.toLowerCase().replace(/ /g, "") + '.md)';
				docsmd += '\n';
			}
			docsmd += '\n';
			docsmd += '## Widget';
			docsmd += '\n\n';
			for (var i in allDocs.widget) {
				var d = allDocs.widget[i];
				docsmd += '* [' + d.name + '](' + d.name.toLowerCase().replace(/ /g, "") + '.md)';
				docsmd += '\n';
			}

			grunt.file.write("docs/README.md", '# Documentation \n\n' + docsmd);
		}

		function buildNav() {
			var docshtml = '';

			docshtml += '<h5>About</h5>';
			docshtml += '<ul>';
			docshtml += '<li><a href="{{= it.site_root }}start.html">Getting Started</a></li>';
			docshtml += '<li><a href="{{= it.site_root }}upgrade.html">Upgrade Guide</a></li>';
			docshtml += '<li><a href="{{= it.site_root }}contribute.html">Contributing</a></li>';
			docshtml += '</ul>';

			docshtml += '<h5>Library</h5>';
			docshtml += '<ul>';
			docshtml += '<li><a href="{{= it.component_root }}core.html">Core</a></li>';
			for (var i in allDocs.grid) {
				var d = allDocs.grid[i];
				docshtml += '<li><a href="{{= it.component_root }}' + d.name.toLowerCase().replace(/ /g, "") + '.html">' + d.name + '</a></li>';
			}
			docshtml += '</ul>';
			docshtml += '<h5>Utility</h5>';
			docshtml += '<ul>';
			for (var i in allDocs.utility) {
				var d = allDocs.utility[i];
				docshtml += '<li><a href="{{= it.component_root }}' + d.name.toLowerCase().replace(/ /g, "") + '.html">' + d.name + '</a></li>';
			}
			docshtml += '</ul>';
			docshtml += '<h5>Widget</h5>';
			docshtml += '<ul>';
			for (var i in allDocs.widget) {
				var d = allDocs.widget[i];
				docshtml += '<li><a href="{{= it.component_root }}' + d.name.toLowerCase().replace(/ /g, "") + '.html">' + d.name + '</a></li>';
			}
			docshtml += '</ul>';

			grunt.file.write("demo/templates/partials/navigation.html", docshtml);
		}

		// WORK

		grunt.file.expand("src/js/*.js").forEach(buildJSON);
		grunt.file.expand("src/less/*.less").forEach(buildJSON);
		grunt.file.expand("docs/json/*.json").forEach(buildDocs);
		grunt.file.expand("docs/json/*.json").forEach(buildDemo);
		buildIndex();
		buildNav();

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