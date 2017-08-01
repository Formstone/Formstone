/*
 * grunt-banner
 * https://github.com/mattstyles/grunt-banner
 *
 * Copyright (c) 2015 Matt Styles
 * Licensed under the MIT license.
 */

'use strict';

var chalk = require ( 'chalk' );

module.exports = function ( grunt ) {

    /* @const */ var insertPositionMarker = '\uFFFD'; // Unicode REPLACEMENT CHARACTER -- http://www.fileformat.info/info/unicode/char/fffd/index.htm

    function defaultOldBannerRemover(fileContents, newBanner, insertPositionMarker /* , src, options */) {
        // Find a full-lines-spanning comment with the phrase `Copyright (c) <year/name/blah>` in it, case-insensitive and `(c)` being optional.
        // That will be our old banner and we kill the *entire* comment, it being C or C++ style, multiline or not.
        // 
        // We only accept comments which start at column 1, i.e. at the left edge. Anything else is considered a minor - and thus irrelevant - comment. 
        
        // Regex for the question: do we have one line in there which starts with `Copyright <blabla>`?
        // It's okay when it's preceded by some basic comment markers, but it MUST be followed by at *least*
        // one(1) character of 'bla bla', whatever that blurb actually may be.
        var copyright_re = /(^|\r\n|\n|\r)[\/*#|\s]*Copyright\s+[^\s\r\n]+/i;
        // Regex for the question: do we have a one-or-many lines covering C comment? 
        var c_comment_re   = /(^|\r\n|\n|\r)\/\*[^\0]*?\*\/\s*($|\r\n|\n|\r)/gi;
        // Regex for the question: do we have a single or a whole *consecutive* bunch of `//` prefixed C++ style comment lines?
        var cpp_comment_re = /(^|\r\n|\n|\r)(?:\/\/[^\n\r]*(?:\r\n|\n|\r))*\/\/[^\n\r]*($|\r\n|\n|\r)/gi;

        function check_n_replace(match, p1, p2) {
            if (copyright_re.test(match)) {
                // got one!
                return p1 + insertPositionMarker + p2;
            }
            // else: no dice! Do *not* alter:
            return match;
        }

        // We *do* expect the exceptional case of multiple old banners (and in different formats)
        // to sit in the input file: we want to kill/replace them *all*!
        // 
        // Hence we execute both regex replacements, irrespective of whether the first replace already
        // delivered a hit. 
        // 
        // To emphasize: we want *all* the banners in there and kill/replace them *all*!
        fileContents = fileContents.replace(c_comment_re, check_n_replace);
        fileContents = fileContents.replace(cpp_comment_re, check_n_replace);
        return fileContents;
    }

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask( 'usebanner', 'Adds a banner or a footer to a file', function () {
        // Set up defaults for the options hash
        var options = this.options({
            position: 'top',
            banner: '',
            linebreak: true,
            process: false,
            replace: false            // boolean (true/false), string, RegExp or function which will filter the content before applying the new banner
        });

        if ( options.position !== 'top' && options.position !== 'bottom' && options.position !== 'replace' ) {
            options.position = 'top';
        }

        // Verify that if user wishes to replace content with a banner, that they have correctly
        // supplied the content they wish to replace.
        if ( options.replace ) {
            switch ( typeof options.replace ) {
            case 'boolean':
            case 'string':
            case 'function':
                break;
                
            case 'object':
                if ( options.replace instanceof RegExp ) {
                    break;
                }    
                /* falls through */
            default:
                grunt.util.error('Detected option `replace` with invalid type - type must be Boolean, String, RegExp or filter Function.');
                return;
            }
        } else {
            options.replace = (options.position === 'replace');
        }

        var re = null;

        if ( options.pattern ) {
            re = new RegExp(options.pattern);
        }

        var linebreak = options.linebreak ? grunt.util.linefeed : '';

        // Iterate over the list of files and add the banner or footer
        this.files.forEach( function ( file ) {
            file.src.forEach( function ( src ) {
                if ( grunt.file.isFile( src ) ) {

                    var fileContents = grunt.file.read( src );

                    if ( re && !re.test( fileContents ) ) {
                        return;
                    }

                    if ( typeof options.process === 'function' ) {
                        options.banner = options.process( src );
                    }

                    var replacing_previous = false;
                    
                    if ( options.replace ) {
                        switch ( typeof options.replace ) {
                        case 'boolean':
                            fileContents = defaultOldBannerRemover(fileContents, options.banner, insertPositionMarker, src, options);
                            break;

                        case 'function':
                            fileContents = options.replace(fileContents, options.banner, insertPositionMarker, src, options);
                            break;
                            
                        case 'string':
                            // Treat a String-type replace spec as an implicit *global* RexExp, spanning at least one(1) entire line:
                            options.replace = new RegExp(options.replace, 'g');
                            /* falls through */
                        case 'object':
                            //assert( options.replace instanceof RegExp );
                            fileContents = fileContents.replace(options.replace, insertPositionMarker);
                            break;
                        }
                        
                        replacing_previous = (fileContents.indexOf(insertPositionMarker) >= 0);
                    }
                    
                    // - When `options.position === 'replace'` it is treated as 'top' when there's no banner to replace.
                    //
                    // - When `options.position` has another value (top|bottom) that setting will be adhered to 
                    //   and the existing banner(s) will be removed, while the new banner will be placed at the specified position.
                    var insertPositionMarker_re = new RegExp(insertPositionMarker, 'g');
                    grunt.file.write( src,
                        ( options.position === 'replace' && replacing_previous ) ?
                        fileContents.replace(insertPositionMarker_re, options.banner /* + linebreak */ ) :
                        options.position !== 'bottom' ?
                        options.banner + linebreak + fileContents.replace(insertPositionMarker_re, '') :
                        fileContents.replace(insertPositionMarker_re, '') + linebreak + options.banner
                    );

                    grunt.verbose.writeln( 'Banner added to file ' + chalk.cyan( src ) );
                }

            });
        });

        grunt.log.writeln( chalk.green( '\u221A' ) + ' grunt-banner completed successfully' );

    });

};
