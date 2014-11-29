/*global module:false*/

// No Less

module.exports = function(grunt) {

	var cssFiles = {
		'dist/css/grid.css'          : [ 'src/less/grid.less' ],
		'dist/css/grid.ie.css'       : [ 'src/less/grid.ie.less' ],
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
		// JS Hint
		jshint: {
			options: {
				ignores: '<%= pkg.site.js_ignores %>',
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
			build: 'src/js/*.js',
			site: 'site/js/src/**/*.js'
		},
		// Uglify
		uglify: {
			options: {
				report: 'min'
			},
			build: {
				files: [{
					expand: true,
					cwd:    'src/',
					src:    '**/*.js',
					dest:   'dist/'
				}]
			},
			site: {
				options: {
					preserveComments: 'some'
				},
				files: '<%= pkg.site.js %>'
			}
		},
		// Copy
		copy: {
			build: {
				expand: true,
				cwd:    'src/',
				src:    '**/*.js',
				dest:   'dist/'
			}
		},
		// LESS
		less: {
			options: {
				cleancss: true
			},
			build: {
				files: cssFiles
			},
			site: {
				files: '<%= pkg.site.css %>'
			}
		},
		// Auto Prefixer
		autoprefixer: {
			options: {
				browsers: [ '> 1%', 'last 5 versions', 'Firefox ESR', 'Opera 12.1', 'IE 8', 'IE 9' ]
			},
			build: {
				 src: 'dist/**/*.css'
			},
			site: {
				 src: 'site/css/*.css'
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
			build: {
				files: {
					src: 'dist/**/*'
				}
			},
			site: {
				files: {
					src: [
						'site/css/*',
						'site/js/*'
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
		// Watcher - Dev Only
		watch: {
			scripts: {
				files: [
					'src/**/*.js'
				],
				tasks: [
					'newer:jshint',
					'newer:copy'
				]
			},
			styles: {
				files: [
					'src/**/*.less'
				],
				tasks: [
					'newer:less',
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
		// Zetzer - Site building
		zetzer: {
			main: {
				options: {
					templates: 'site/templates/',
					partials: 'site/templates/partials/',
					env: {
						title: 'Formstone'
					}
				},
				files: [
					{
						expand: true,
						src: 'site/tmp/*.md',
						dest: 'site/components/',
						ext: '.html',
						flatten: true
					}
				]
			}
		},
		// remove temp site files
		clean: [
			'site/tmp/'
		]
/*
		// Strip MQ
		stripmq: {
			options: {
				width: 1024,
				type: 'screen'
			},
			all: {
				files: {
					'css/site-ie8.css': [ 'css/site-ie8.css' ]
				}
			}
		}
*/
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
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-npm2bower-sync');
	grunt.loadNpmTasks('grunt-zetzer');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.loadTasks('tasks');

	// Default task.
	grunt.registerTask('default', [ 'js', 'css', 'build', 'site_clean' ]);

	grunt.registerTask('js', [ 'jshint:build', 'uglify:build' ]);
	grunt.registerTask('css', [ 'less:build', 'autoprefixer:build' ]);

	grunt.registerTask('build', [ 'usebanner:build', 'sync', 'buildLicense', 'buildDocs' ]);

	grunt.registerTask('site_clean', [ 'zetzer', 'clean', 'jshint:site', 'uglify:site', 'less:site', 'autoprefixer:site', 'usebanner:site' ]);
	grunt.registerTask('site', [ 'buildDocs', 'site_clean' ]);

};