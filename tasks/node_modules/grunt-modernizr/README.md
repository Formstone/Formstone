# grunt-modernizr

[![Build Status](https://secure.travis-ci.org/Modernizr/grunt-modernizr.png?branch=master,develop)](https://travis-ci.org/Modernizr/grunt-modernizr)

[![NPM](https://nodei.co/npm/grunt-modernizr.png?compact=true)](https://nodei.co/npm/grunt-modernizr/)

A [Grunt](http://gruntjs.com/) wrapper for [Modernizr](https://github.com/doctyper/customizr).

## Usage
Install this grunt plugin next to your project's [Gruntfile.js][getting_started]:

When you're ready to build, `grunt-modernizr` will crawl your project for Modernizr test references and save out a minified, uglified, customized version using only the tests you've used in your JavaScript or (S)CSS.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with:

```bash
npm install grunt-modernizr --save-dev
```

Then add this line to your project's `Gruntfile.js`:

```javascript
grunt.loadNpmTasks("grunt-modernizr");
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation

### For Full Features & Configuration? → [See Customizr(https://github.com/modernizr/customizr#config-file

Run the task with `grunt modernizr:dist`.

### Config Options

Add a `modernizr` config object to your Gruntfile.js file. The task supports multiple targets:

```javascript
modernizr: {
  dist: {
    "dest" : "build/modernizr-custom.js",
    "parseFiles": true,
    "customTests": [],
    "devFile": "/PATH/TO/modernizr-dev.js",
    "outputFile": "/PATH/TO/modernizr-output.js",
    "tests": [
      // Tests
    ],
    "options": [
      "setClasses"
    ],
    "uglify": true
  }
}
```

You can also generate the configuration file online via the [modernizr build tool](https://modernizr.com/download).
Just configure your build, click the Build button, and download/copy the Grunt Config.

#### Available Settings
##### See the [customizr repository](https://github.com/doctyper/customizr#config-file) for valid settings.

## License
Copyright (c) 2016 Richard Herrera
Licensed under the MIT license.
