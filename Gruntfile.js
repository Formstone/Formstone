/*global module:false*/

// No Less

module.exports = function(grunt) {

	var cssFiles = {
		'dist/css/grid.css'          : [ 'src/less/grid.less' ],
		'dist/css/grid.ie.css'       : [ 'src/less/grid.ie.less' ],
		'dist/css/carousel.css'      : [ 'src/less/carousel.less' ],
		'dist/css/dropdown.css'      : [ 'src/less/dropdown.less' ],
		'dist/css/lightbox.css'      : [ 'src/less/lightbox.less' ],
		'dist/css/navigation.css'    : [ 'src/less/navigation.less' ],
		'dist/css/tooltip.css'       : [ 'src/less/tooltip.less' ],
		'dist/css/upload.css'        : [ 'src/less/upload.less' ]
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
					'newer:autoprefixer'
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
					'newer:autoprefixer'
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
					'console'   : true
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
		// LESS
		less: {
			options: {
				cleancss: true
			},
			library: {
				files: cssFiles
			},
			demo: {
				files: '<%= pkg.site.css %>'
			}
		},
		// Auto Prefixer
		autoprefixer: {
			options: {
				browsers: [ '> 1%', 'last 5 versions', 'Firefox ESR', 'Opera 12.1', 'IE 8', 'IE 9' ]
			},
			library: {
				 src: 'dist/**/*.css'
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
					var parts = filepath.split("/"),
						filename = parts[ parts.length - 1 ];
					return grunt.config.get("meta").banner.replace("{{ local_name }}", filename);
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
					templates: 'demo/templates/',
					partials: 'demo/templates/partials/',
					env: {
						title: 'Formstone'
					}
				},
				files: [
					{
						expand: true,
						src: 'demo/tmp/*.md',
						dest: 'demo/components/',
						ext: '.html',
						flatten: true
					}
				]
			}
		},
		// Clean
		clean: [
			'demo/tmp/'
		],
		// Strip MQ
		stripmq: {
			options: {
				width: 1024,
				type: 'screen'
			},
			all: {
				files: {
					'demo/css/site-ie8.css': [ 'demo/css/site-ie8.css' ]
				}
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

	grunt.registerTask('default', [ 'js', 'css', 'library' ]);
	grunt.registerTask('all', [ 'js', 'css', 'library', 'demoClean' ]);

	grunt.registerTask('js', [ 'jshint:library', 'uglify:library' ]);
	grunt.registerTask('css', [ 'less:library', 'autoprefixer:library' ]);

	grunt.registerTask('library', [ 'usebanner:library', 'sync', 'buildLicense', 'buildDocs' ]);

	grunt.registerTask('demoClean', [ 'zetzer', /* 'clean', */ 'jshint:demo', 'uglify:demo', 'less:demo', 'autoprefixer:demo', 'usebanner:demo', 'stripmq' ]);
	grunt.registerTask('demo', [ 'buildDocs', 'demoClean' ]);

};