/*global module:false*/

// No Less

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/* \n' +
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
					'jQuery': true,
					'$'     : true
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
			files: [
				'src/<%= pkg.codename %>.js'
			]
		},
		// Copy
		copy: {
			main: {
				files: [
					{
						src: 'src/<%= pkg.codename %>.js',
						dest: '<%= pkg.codename %>.js'
					}
				]
			}
		},
		// Uglify
		uglify: {
			options: {
				report: 'min'
			},
			target: {
				files: {
					'<%= pkg.codename %>.min.js': [ '<%= pkg.codename %>.js' ]
				}
			}
		},
		// jQuery Manifest
		jquerymanifest: {
			options: {
				source: grunt.file.readJSON('package.json'),
				overrides: {
					name:     '<%= pkg.id %>',
					keywords: '<%= pkg.keywords %>',
					homepage: '<%= pkg.homepage %>',
					docs: 	  '<%= pkg.homepage %>',
					demo: 	  '<%= pkg.homepage %>',
					download: '<%= pkg.repository.url %>',
					bugs: 	  '<%= pkg.repository.url %>/issues',
					dependencies: {
						jquery: '>=1.7'
					}
				}
			}
		},
		// Banner
		usebanner: {
			options: {
				position: 'top',
				banner: '<%= meta.banner %>'
			},
			files: {
				src: [
					'<%= pkg.codename %>.css',
					'<%= pkg.codename %>.js',
					'<%= pkg.codename %>.min.css',
					'<%= pkg.codename %>.min.js'
				]
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
						],
						ignore: [ "*.jquery.json" ]
					}
				}
			}
		},
		// Watcher - For dev only!!
		watch: {
			scripts: {
				files: [
					'src/**.js'
				],
				tasks: [
					'jshint',
					'copy'
				]
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jquerymanifest');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-npm2bower-sync');

	// Readme
	grunt.registerTask('buildReadme', 'Build Formstone README.md file.', function () {
		var pkg = grunt.file.readJSON('package.json'),
			extra = grunt.file.exists('src/README.md') ? '\n\n---\n\n' + grunt.file.read('src/README.md') : '';
			destination = "README.md",
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
			destination = "LICENSE.md",
			markdown = 'The MIT License (MIT) \n\n' +
					   'Copyright ' + grunt.template.today("yyyy") + ' ' + pkg.author.name + ' \n\n' +
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

	// Default task.
	grunt.registerTask('default', [ 'jshint', 'copy', 'uglify'/* , 'jquerymanifest', 'usebanner', 'sync', 'buildReadme', 'buildLicense' */ ]);

};