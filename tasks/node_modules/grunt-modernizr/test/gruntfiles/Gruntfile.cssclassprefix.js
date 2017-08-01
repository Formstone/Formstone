module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*.js']
    },
    watch: {
      files: '<%= jshint.files %>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        globals: {}
      },
      files: [
        'Gruntfile.js',
        'tasks/**/*.js',
        'test/**/*.js'
      ]
    },
    modernizr: {
      dist: {
        "extensibility": {
          "cssclassprefix": "prefixed-"
        },
        "uglify": false,
        "files": {
          src: [
            "test/css/*.css"
          ]
        },
        "matchCommunityTests": true
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('default', [
    'jshint'//,
    //'nodeunit' // there is no test for now, nodeunit task break if there isn't
  ]);

};
