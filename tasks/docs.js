module.exports = function(grunt) {
	grunt.registerTask('buildDocs', 'Build Formstone Docs.', function () {
		function parseContent(content) {
			var _return = {};
			var parts = content.split("\n");
			var keys = [
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

					if (p.indexOf("@"+key) > -1) {
						var pset = p.split("@"+key);
						var part = pset[ pset.length - 1 ].trim();

						// Split down params, events and returns
						if ( ["param","event","return"].indexOf(key) > -1 ) {
							var parray = [];

							if (key != "return") {
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

						if (key == "param") {
							if (!_return.params) {
								_return["params"] = [];
							}
							_return["params"].push(part);
						} else if (key == "event") {
							if (!_return.params) {
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

		var widgetMethods = [],
			allDocs = {
				utility: [],
				widget: []
			};

		grunt.file.expand("src/**/*.js").forEach(function(f) {
			var doc = {
				options: [],
				events: [],
				methods: []
			};

			var file = grunt.file.read(f),
				destinationMD = f.replace("src", "docs").replace(".js", ".md").replace("utility/", "utility-").replace("widget/", "widget-"),
				destinationJSON = f.replace("src", "docs/json").replace(".js", ".json"),
				matches = file.match(/(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)/g);

			for (var i = 0, count = matches.length; i < count; i++) {
				var content = matches[i];

				if (content.indexOf("@plugin") > -1) {
					var plugin = parseContent(content);
					doc.name = plugin.name;
					doc.namespace = plugin.namespace;
					doc.type = plugin.type;
					doc.description = plugin.description;
				} else if (content.indexOf("@options") > -1) {
					var params = parseContent(content);
					doc.options = params["params"];
				} else if (content.indexOf("@events") > -1) {
					var events = parseContent(content);
					doc.events = events["events"];
				} else if (content.indexOf("@method") > -1) {
					if (!doc.methods) {
						doc.methods = [];
					}

					var m = parseContent(content);

					if (content.indexOf("private") < 0) {
						if (content.indexOf("@method widget") > -1) {
							widgetMethods.push(m);
						} else {
							doc.methods.push(m);
						}
					}
				}
			}

			var namespace = doc.name.toLowerCase();

			if (namespace !== "formstone") {
				for (var i in widgetMethods) {
					var m = JSON.parse(JSON.stringify(widgetMethods[i]));
					m.example = m.example.replace("{ns}", namespace);
					doc.methods.push(m);
				}
			}

			doc.methods.sort(function(a, b) {
				if (a.name < b.name) return -1;
			    if (a.name > b.name) return 1;
			    return 0;
			});

			var md = "";
			md += '# ' + doc.name;
			md += '\n\n';
			md += doc.description;
			md += '\n\n';

			if (doc.options && doc.options.length) {
				md += '## Options';
				md += '\n\n';
				if (doc.type == "widget") {
					md += 'Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-' + namespace + '-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.';
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
				md += 'Events are triggered on the target instance\'s element, unless otherwise stated.';
				md += '\n\n';
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
				md += 'Methods are publicly available to all active instances, unless otherwise stated.';
				md += '\n\n';
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

			grunt.file.write(destinationMD, md);
			grunt.file.write(destinationJSON, JSON.stringify(doc));
			grunt.log.writeln('File "' + destinationMD + '" created.');

			if (allDocs[doc.type]) {
				allDocs[doc.type].push(doc);
			}
		});

		var md = '';

		md += '# Documentation';
		md += '\n\n';
		md += '## Utility';
		md += '\n\n';
		for (var i in allDocs.utility) {
			var d = allDocs.utility[i];
			md += '* [' + d.name + '](widget-' + d.name.toLowerCase() + '.md)';
			md += '\n';
		}
		md += '\n';
		md += '## Widget';
		md += '\n\n';
		for (var i in allDocs.utility) {
			var d = allDocs.utility[i];
			md += '* [' + d.name + '](widget-' + d.name.toLowerCase() + '.md)';
			md += '\n';
		}

		grunt.file.write("docs/README.md", md);

		var pkg = grunt.file.readJSON('package.json'),
			destination = 'README.md',
			markdown = '<a href="http://gruntjs.com" target="_blank"><img src="https://cdn.gruntjs.com/builtwith.png" alt="Built with Grunt"></a> \n\n' +
					   '# ' + pkg.name + ' \n\n' +
					   pkg.description + ' \n\n' +
					   '#' + md.replace("##", "###");

		grunt.file.write(destination, markdown);
		grunt.log.writeln('File "' + destination + '" created.');
	});
}