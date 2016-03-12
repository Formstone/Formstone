/*global module:false*/

// No Less

module.exports = function(grunt) {

	var cssFiles = {
		'dist/css/grid.css'          : [ 'src/less/grid.less' ],
		'dist/css/grid.ie.css'       : [ 'src/less/grid.ie.less' ],
		'dist/css/background.css'    : [ 'src/less/background.less' ],
		'dist/css/carousel.css'      : [ 'src/less/carousel.less' ],
		'dist/css/checkbox.css'      : [ 'src/less/checkbox.less' ],
		'dist/css/dropdown.css'      : [ 'src/less/dropdown.less' ],
		'dist/css/lightbox.css'      : [ 'src/less/lightbox.less' ],
		'dist/css/navigation.css'    : [ 'src/less/navigation.less' ],
		'dist/css/number.css'        : [ 'src/less/number.less' ],
		'dist/css/pagination.css'    : [ 'src/less/pagination.less' ],
		'dist/css/range.css'         : [ 'src/less/range.less' ],
		'dist/css/scrollbar.css'     : [ 'src/less/scrollbar.less' ],
		'dist/css/tabs.css'          : [ 'src/less/tabs.less' ],
		'dist/css/tooltip.css'       : [ 'src/less/tooltip.less' ],
		'dist/css/upload.css'        : [ 'src/less/upload.less' ],

		'dist/css/themes/light.css'  : [ 'src/less/themes/light.less' ]
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*! <%= pkg.name %> v<%= pkg.version %> [{{ local_name }}] <%= grunt.template.today("yyyy-mm-dd") %> |' +
					' <%= pkg.license %> License | <%= pkg.homepage_short %> */\n'
		},
		// Watcher - Dev Only
		watch: {
			scripts: {
				files: [
					'src/**/*.js'
				],
				tasks: [
					'newer:jshint:library',
					'newer:uglify:library'
				]
			},
			styles: {
				files: [
					'src/**/*.less'
				],
				tasks: [
					'newer:less:library',
					'newer:postcss'
				]
			},
			demoscripts: {
				files: [
					'demo/js/src/*.js'
				],
				tasks: [
					'newer:jshint:demo',
					'newer:uglify:demo'
				]
			},
			demostyles: {
				files: [
					'demo/css/src/*.less'
				],
				tasks: [
					'newer:less:demo',
					'newer:postcss',
					'newer:stripmq:target'
				]
			},
			demo: {
				files: [
					'demo/_src/pages/**/*.md',
					'demo/_src/templates/**/*.html'
				],
				tasks: [
					'zetzer'
				]
			},
			images: {
				files: [
					'demo/images/src/**/*.{png,jpg,jpeg,gif,svg}'
				],
				tasks: [
					'newer:imagemin:target',
					'newer:svgmin:target'
				]
			},
			config: {
				files: [
					'Gruntfile.js'
				],
				options: {
					reload: true
				}
			}
		},
		// Newer - Dev Only
		newer: {
			options: {
				override: function(details, include) {
					if (details.task === 'less') {
						checkForNewerImports(details.path, details.time, include);
					} else {
						include(false);
					}
				}
			}
		},
		// JS Hint
		jshint: {
			options: {
				ignores: '<%= pkg.site.js_ignores %>',
				globals: {
					'jQuery'    : true,
					'$'         : true,
					'Formstone' : true,
					'console'   : true,
					'Site'      : true
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
			library: 'src/js/*.js',
			demo: 'demo/js/src/**/*.js'
		},
		// Uglify
		uglify: {
			options: {
				report: 'min'
			},
			library: {
				files: [{
					expand: true,
					cwd:    'src/',
					src:    '**/*.js',
					dest:   'dist/'
				}]
			},
			demo: {
				options: {
					preserveComments: 'some'
				},
				files: '<%= pkg.site.js %>'
			}
		},
		// Copy
		copy: {
			library: {
				files: [{
					expand: true,
					cwd:    'src/',
					src:    '**/*.js',
					dest:   'dist/'
				}]
			}
		},
		// Concat
		concat: {
			demo: {
				files: '<%= pkg.site.js %>'
			}
		},
		// Replace
		includereplace: {
			library: {
				options: {
					prefix: '@',
					globals: {
						version: '<%= pkg.version %>'
					}
				},
				dest: 'dist/js/',
				src: '*.js',
				expand: true,
				cwd: 'dist/js/'
			},
			demo: {
				options: {
					prefix: '@',
					globals: '<%= pkg.site.vars %>'
				},
				dest: 'demo/js/',
				src: '*.js',
				expand: true,
				cwd: 'demo/js/'
			}
		},
		// LESS
		less: {
			options: {
				modifyVars: '<%= pkg.site.vars %>',
				plugins: [
					new (require('less-plugin-clean-css'))()
				]
			},
			library: {
				files: cssFiles
			},
			demo: {
				files: '<%= pkg.site.css %>'
			}
		},
		// Post CSS
		postcss: {
			options: {
				processors: [
					require('autoprefixer')({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie >= 8']})
				]
			},
			library: {
				src: 'dist/css/**/*.css'
			},
			demo: {
				src: 'demo/css/*.css'
			}
		},
		// Banner
		usebanner: {
			options: {
				position: 'top',
				// banner: '<%= meta.banner %>',
				process: function(filepath) {
					var parts = filepath.split('/'),
						filename = parts[ parts.length - 1 ];
					return grunt.config.get('meta').banner.replace('{{ local_name }}', filename);
				}
			},
			library: {
				files: {
					src: 'dist/**/*'
				}
			},
			demo: {
				files: {
					src: [
						'demo/css/*',
						'demo/js/*'
					]
				}
			}
		},
		// Bower sync
		sync: {
			all: {
				options: {
					sync: [ 'name', 'version', 'description', 'author', 'license', 'homepage', 'dependencies' ]
				}
			}
		},
		// Zetzer - Demo Site
		zetzer: {
			main: {
				options: {
					templates: 'demo/_src/templates/',
					partials: 'demo/_src/templates/partials/',
					env: {
						title: 'Formstone',
						version: '<%= pkg.version %>'
					}
				},
				files: [
					{
						expand: true,
						src: 'demo/_src/pages/*.md',
						dest: 'demo/',
						ext: '.html',
						flatten: true
					},
					{
						expand: true,
						src: 'demo/_src/pages/components/*.md',
						dest: 'demo/components/',
						ext: '.html',
						flatten: true
					},
					{
						expand: true,
						src: 'demo/_src/pages/themes/*.md',
						dest: 'demo/themes/',
						ext: '.html',
						flatten: true
					}
				]
			}
		},
		// HTML formatting
		prettify: {
			options: {
				condense: false,
				indent: 1,
				indent_char: '	',
				preserve_newlines: true,
				brace_style: 'end-expand',
				max_preserve_newlines: 4,
				unformatted: ['code', 'pre']
			},
			target: {
				expand: true,
				src: [
					'demo/index.html',
					'demo/components/*.html',
					'demo/themes/*.html'
				]
			}
		},
		// Strip MQ
		stripmq: {
			options: {
				width: 1024,
				type: 'screen'
			},
			target: {
				files: {
					'demo/css/site-ie8.css': 'demo/css/site-ie8.css'
				}
			}
		},
		// Custom Modernizr build
		modernizr: {
			target: {
				devFile: false,
				dest: 'demo/js/modernizr.js',
				options: [
					'setClasses'
				],
				files: {
					src: [
						'demo/js/*.js',
						'demo/css/*.css'
					]
				}
			}
		},
		// Optimize images (png, gif, jpg)
		imagemin: {
			target: {
				files: [
					{
						expand: true,
						cwd: 'demo/images/src',
						src: '**/*.{png,jpg,jpeg,gif}',
						dest: 'demo/images'
					}
				]
			}
		},
		// Optimize images (svg)
		svgmin: {
			options: {
				plugins: [
					{ removeViewBox: true }
				]
			},
			target: {
				files: [{
					expand: true,
					cwd: 'demo/images/src',
					src: '**/*.svg',
					dest: 'demo/images'
				}]
			}
		}
	});

	// Newer LESS Imports
	function checkForNewerImports(lessFile, mTime, include) {
		var fs = require('fs'),
			path = require('path');

		fs.readFile(lessFile, 'utf8', function(err, data) {
			var lessDir = path.dirname(lessFile),
				regex = /@import "(.+?)(\.less)?";/g,
				shouldInclude = false,
				match;

			while ((match = regex.exec(data)) !== null) {
				var importFile = lessDir + '/' + match[1] + '.less';
				if (fs.existsSync(importFile)) {
					var stat = fs.statSync(importFile);
					if (stat.mtime > mTime) {
						shouldInclude = true;
						break;
					}
				}
			}

			include(shouldInclude);
		});
	}

	// Load tasks

	require('load-grunt-tasks')(grunt);

	grunt.loadTasks('tasks');

	// Register Tasks

	grunt.registerTask('default', [ 'js', 'css', 'library', 'demoClean' ]);
	grunt.registerTask('dev', [ 'js', 'css', 'library' ]);

	grunt.registerTask('js', [ 'jshint:library', 'uglify:library', 'includereplace:library' ]);
	grunt.registerTask('css', [ 'less:library', 'postcss:library' ]);
	grunt.registerTask('img', [ 'imagemin', 'svgmin' ]);

	grunt.registerTask('library', [ 'usebanner:library', 'sync', 'buildLicense', 'buildDocs' ]);

	grunt.registerTask('demoClean', [ 'zetzer', 'prettify', 'jshint:demo', 'uglify:demo', 'less:demo', 'postcss:demo', 'usebanner:demo', 'modernizr', 'includereplace:demo', 'stripmq', 'img' ]);
	grunt.registerTask('demo', [ 'buildDocs', 'demoClean' ]);

};