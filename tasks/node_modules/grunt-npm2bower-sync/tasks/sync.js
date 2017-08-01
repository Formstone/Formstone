/**
 * grunt-sync-pkg
 * http://github.com/jonschlinkert/grunt-sync-pkg
 *
 * Copyright (c) 2013 Jon Schlinkert, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var _ = grunt.util._;

  function verifyPackage(pkg, overridesToSync) {
    if (!_.isObject(pkg)) {
      grunt.fail.warn('invalid package object');
    }
    if (!_.isString(pkg.name) && !overridesToSync.name) {
      grunt.fail.warn('package.json is missing name');
    }
    if (!_.isString(pkg.author) && !_.isObject(pkg.author) && !overridesToSync.authors) {
      grunt.fail.warn('package.json is missing author');
    }
    if (!_.isString(pkg.version) && !overridesToSync.version) {
      grunt.fail.warn('package.json is missing version');
    }
  }

  function sync(configValues) {
    configValues = configValues || {};
    /*jshint validthis:true */
    var sourceFilename = configValues.from || 'package.json';
    var destinationFilename = configValues.to || 'bower.json';
    var propertiesToSync = configValues.sync || [
      'name',
      'author',
      'version',
      'description',
      'private',
      'license',
      'homepage',
      'keywords'
    ];
    var overridesToSync = configValues.overrides || {};

    grunt.verbose.writeln('syncing', propertiesToSync, 'from', sourceFilename,
      'to', destinationFilename);

    var pkg = grunt.file.readJSON(sourceFilename);
    verifyPackage(pkg, overridesToSync);

    // If bower.json doesn't exist yet, add one.
    if (!grunt.file.exists(destinationFilename)) {
      grunt.file.write(destinationFilename, "{}");
    }

    var bower = grunt.file.readJSON(destinationFilename);

    var options = {};
    propertiesToSync.forEach(function (propertyToSync) {
      var value = pkg[propertyToSync] || configValues[propertyToSync];
      if (propertyToSync === 'author') {
        bower.authors = [value];
        delete bower.author;
      } else {
        options[propertyToSync] = value;
      }
    }, this);

    for (var overrideToSync in overridesToSync) {
      options[overrideToSync] = overridesToSync[overrideToSync];
      grunt.verbose.writeln(overrideToSync);
    }

    grunt.verbose.writeln('options added to bower', JSON.stringify(options, null, 2));

    bower = JSON.stringify(_.extend(bower, options), null, 2);
    grunt.file.write(destinationFilename, bower);
  }

  var name = 'sync';
  var description = 'Sync package.json -> bower.json';

  if (grunt.config.data[name]) {
      grunt.registerMultiTask(name, description, function() {
        // grab options using this.options() method provided by grunt
        sync(this.data.options);
      });
    } else {
      grunt.registerTask(name, description, function () {
        sync();
      });
    }
};
