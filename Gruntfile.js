/*global module:false*/

// No Less

module.exports = function(grunt) {

	var cssFiles = {
		'dist/grid/gridlock.css' : [ 'src/grid/gridlock.less' ],
		'dist/grid/gridlock.ie.css' : [ 'src/grid/gridlock.ie.less' ],
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

	grunt.loadTasks('tasks');

	// Default task.
	grunt.registerTask('default', [ 'jshint', 'uglify', 'less', 'autoprefixer', 'usebanner', 'sync', 'buildLicense', 'buildDocs' ]);

};