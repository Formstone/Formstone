/*global module:false*/

// No Less

module.exports = function(grunt) {

	var cssFiles = {
		'dist/grid/grid.css'            : [ 'src/grid/grid.less' ],
		'dist/grid/grid.ie.css'         : [ 'src/grid/grid.ie.less' ],
		'dist/widget/lightbox.css'      : [ 'src/widget/lightbox.less' ],
		'dist/widget/navigation.css'    : [ 'src/widget/navigation.less' ],
		'dist/widget/tooltip.css'       : [ 'src/widget/tooltip.less' ],
		'dist/widget/upload.css'        : [ 'src/widget/upload.less' ]
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
		// Copy
		copy: {
			target: {
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
			target: {
				files: cssFiles
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
			target: {
				files: {
					src: 'dist/**/*'
				}
			}
		},
		// Bower sync
		sync: {
			options: {
				sync: [ 'name', 'version', 'description', 'author', 'license', 'homepage' ],
				overrides: {
					main: [
						'<%= pkg.codename %>.js',
						'<%= pkg.codename %>.css'
					]
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
		}
	});

	// Newer LESS Imports
	function checkForNewerImports(lessFile, mTime, include) {
		var fs = require('fs'),
			path = require('path');

		fs.readFile(lessFile, "utf8", function(err, data) {
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

	grunt.loadTasks('tasks');

	// Default task.
	grunt.registerTask('default', [ 'js', 'css', 'usebanner', 'sync', 'buildLicense', 'buildDocs' ]);

	grunt.registerTask('js', [ 'jshint', 'uglify' ]);

	grunt.registerTask('css', [ 'less', 'autoprefixer' ]);

};