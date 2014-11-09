/*global module:false*/

// No Less

module.exports = function(grunt) {

	var cssFiles = {
		'dist/widget/naver.css' :  [ 'src/widget/naver.less' ],
		'dist/widget/tipper.css' : [ 'src/widget/tipper.less' ]
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*! \n' +
					' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n' +
					' * <%= pkg.description %> \n' +
					' * <%= pkg.homepage %> \n' +
					' * \n' +
					' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; <%= pkg.license %> Licensed \n' +
					' */\n'
		},
		// JS Hint
		jshint: {
			options: {
				globals: {
					'jQuery'    : true,
					'$'         : true,
					'Formstone' : true
				},
				browser:   true,
				curly:     true,
				eqeqeq:    true,
				forin:     true,
				freeze:    true,
				immed:	   true,
				latedef:   true,
				newcap:    true,
				noarg:     true,
				nonew:     true,
				smarttabs: true,
				sub:       true,
				undef:     true,
				validthis: true
			},
			files: 'src/**/*.js',
		},
		// Uglify
		uglify: {
			options: {
				report: 'min'
			},
			target: {
				files: [{
					expand: true,
					cwd:    'src/',
					src:    '**/*.js',
					dest:   'dist/'
				}]
			}
		},
		// LESS
		less: {
			main: {
				options: {
					cleancss: true
				},
				files: cssFiles,
			}
		},
		// Auto Prefixer
		autoprefixer: {
			options: {
				browsers: [ '> 1%', 'last 5 versions', 'Firefox ESR', 'Opera 12.1', 'IE 8', 'IE 9' ]
			},
			no_dest: {
				 src: 'dist/**/*.css'
			}
		},
		// Banner
		usebanner: {
			options: {
				position: 'top',
				banner: '<%= meta.banner %>'
			},
			files: {
				src: 'dist/**/*'
			}
		},
		// Bower sync
		sync: {
			all: {
				options: {
					sync: [ 'name', 'version', 'description', 'author', 'license', 'homepage' ],
					overrides: {
						main: [
							'<%= pkg.codename %>.js',
							'<%= pkg.codename %>.css'
						]
					}
				}
			}
		},
		// Watcher - For dev only!!
		watch: {
			scripts: {
				files: [
					'src/**/*.js'
				],
				tasks: [
					'jshint',
					'copy'
				]
			},
			scripts: {
				files: [
					'src/**/*.css'
				],
				tasks: [
					'less',
					'autoprefixer'
				]
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-npm2bower-sync');

	// Readme
	grunt.registerTask('buildReadme', 'Build Formstone README.md file.', function () {
		var pkg = grunt.file.readJSON('package.json'),
			extra = grunt.file.exists('src/README.md') ? '\n\n---\n\n' + grunt.file.read('src/README.md') : '';
			destination = 'README.md',
			markdown = '<a href="http://gruntjs.com" target="_blank"><img src="https://cdn.gruntjs.com/builtwith.png" alt="Built with Grunt"></a> \n' +
					   '# ' + pkg.name + ' \n\n' +
					   pkg.description + ' \n\n' +
					   '- [Demo](' + pkg.demo + ') \n' +
					   '- [Documentation](' + pkg.homepage + ') \n\n' +
					   '#### Bower Support \n' +
					   '`bower install ' + pkg.name + '` ' +
					   extra;

		grunt.file.write(destination, markdown);
		grunt.log.writeln('File "' + destination + '" created.');
	});

	grunt.registerTask('buildLicense', 'Build Formstone LICENSE.md file.', function () {
		var pkg = grunt.file.readJSON('package.json'),
			destination = 'LICENSE.md',
			markdown = 'The MIT License (MIT) \n\n' +
					   'Copyright ' + grunt.template.today('yyyy') + ' ' + pkg.author.name + ' \n\n' +
					   'Permission is hereby granted, free of charge, to any person obtaining a copy \n' +
					   'of this software and associated documentation files (the "Software"), to deal \n' +
					   'in the Software without restriction, including without limitation the rights \n' +
					   'to use, copy, modify, merge, publish, distribute, sublicense, and/or sell \n' +
					   'copies of the Software, and to permit persons to whom the Software is \n' +
					   'furnished to do so, subject to the following conditions: \n\n' +
					   'The above copyright notice and this permission notice shall be included in \n' +
					   'all copies or substantial portions of the Software. \n\n' +
					   'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR \n' +
					   'IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, \n' +
					   'FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE \n' +
					   'AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER \n' +
					   'LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, \n' +
					   'OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN \n' +
					   'THE SOFTWARE.';

		grunt.file.write(destination, markdown);
		grunt.log.writeln('File "' + destination + '" created.');
	});

	grunt.registerTask('buildDocs', 'Build Formstone Docs.', function () {
		function parseContent(content) {
			var _return = {};
			var parts = content.split("\n");
			var keys = [
					"name",
					"description",
					"version",
					"example",
					"param",
					"event",
					"return"
				];

			for (var pi in parts) {
				var p = parts[pi];

				for (var ki in keys) {
					var key = keys[ki];

					if (p.indexOf(key) > -1) {
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

		grunt.file.expand("src/**/*.js").forEach(function(f) {
			var doc = {
				options: [],
				events: [],
				methods: []
			};

			var file = grunt.file.read(f);
			var destination = f.replace("src", "docs").replace(".js", ".json");
			var matches = file.match(/(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)/g);

			for (var i = 0, count = matches.length; i < count; i++) {
				var content = matches[i];

				if (content.indexOf("@options") > -1) {
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
					if (content.indexOf("private") > -1) {
						m.private = true;
					}
					if (content.indexOf("global") > -1) {
						m.global = true;
					}
					doc.methods.push(m);
				}
			}

			grunt.file.write(destination, JSON.stringify(doc));
			grunt.log.writeln('File "' + destination + '" created.');
		});
	});

	// Default task.
	grunt.registerTask('default', [ 'jshint', 'uglify', 'less', 'autoprefixer', 'usebanner', 'sync', 'buildReadme', 'buildLicense', 'buildDocs' ]);

};