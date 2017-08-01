'use strict';

var fs = require("fs"),
    CleanCss = require('clean-css'),
    stripMq = require('./lib/stripmq');

module.exports = function (grunt) {
    grunt.registerMultiTask("stripmq", "Strip media queries from stylesheets", function () {
        var options = this.options({
            cleanCss: true
        });

        // Iterate over all src-dest file pairs.
        this.files.forEach(function (f) {
            var src = f.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                }
                return true;
            });

            // try and strip the mq
            try {
                var input = fs.readFileSync(src[0], {encoding: 'utf-8'});
                var result = stripMq(input, options);

                if(options.cleanCss) {
                    result = new CleanCss().minify(result);
                }

                grunt.file.write(f.dest, result);
                grunt.log.writeln('File "' + f.dest + '" created.');
            }
            catch (e) {
                var err = new Error('Stripping media queries failed.');
                if (e.msg) {
                    err.message += ', ' + e.msg + '.';
                }
                err.origError = e;
                grunt.fail.warn(err);
            }
        });
    });

};
