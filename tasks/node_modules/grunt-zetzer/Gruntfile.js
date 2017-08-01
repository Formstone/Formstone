"use strict";

var JASMINE_CMD = (process.platform === "win32"
                   ? "\"node_modules/.bin/jasmine-node.cmd\""
                   : "node_modules/.bin/jasmine-node");

module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-shell");

  grunt.loadTasks("tasks");

  grunt.registerTask("default", ["test", "jshint"]);
  grunt.registerTask("test", ["clean", "shell:jasmine"]);
  grunt.registerTask("testv", ["clean", "shell:jasmine_verbose"]);

  // Project configuration.
  grunt.initConfig({

    zetzer: {
      fixtures: {
        options: {
          partials: "spec/includes",
          templates: "spec/templates",
          dot_template_settings: {
            strip: true
          },
          env: {
            parameter: "value"
          }
        },
        files: [{
          expand: true,
          cwd: "spec/fixtures",
          src: "*.html",
          dest: "tmp",
          ext: ".html",
          flatten: true
        }]
      }
    },

    jshint: {
      all: [
        "Gruntfile.js",
        "tasks/*.js",
        "lib/*.js"
      ],
      options: {
        jshintrc: ".jshintrc",
      },
    },

    shell: {
      options: {
        stdout: true
      },
      jasmine: {
        command: JASMINE_CMD + " spec"
      },
      jasmine_verbose: {
        command: JASMINE_CMD + " --verbose spec"
      }
    },

    clean: {
      tmp: ["tmp"],
    }
  });
};
