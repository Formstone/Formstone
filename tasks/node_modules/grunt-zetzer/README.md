# grunt-zetzer

Grunt plugin for [Zetzer][zetzer]. More documentation in the
[Zetzer][zetzer] repository.

After installing the module with npm, load the task with:

```js
grunt.loadNpmTasks('grunt-zetzer');
```

## Examples

In your project's Gruntfile, add a section named `zetzer` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  zetzer: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

All possible options are listed in the main [Zetzer][zetzer] project.

[Grunt's rules for defining target and destination
files](https://github.com/gruntjs/grunt/wiki/Configuring-tasks#files)
apply, but care needs to be taken to make sure each input page maps to
a single output file.

## Custom Options

In this example, doT's it object is used to specify the location of
script files and the main title of all pages; and the location of
partials and templates is given. All pages in `pages/` will be
compiled to `.html` files in `tmp`.

```js
grunt.initConfig({
  zetzer: {
    main: {
      options: {
        env: {
          title: "Zetzer",
        },
        partials: "content",
        templates: "templates"
      },
      files: [
        {
          expand: true,
          cwd: "src/pages/",
          src: "**/*.html",
          dest: "tmp",
          ext: ".html",
          flatten: true
        }
      ]
    },
  }
})
```

## Contributing

You can run the test suite with `npm test`.

Each new feature ough to have full test coverage. We usually start by
writing a fixture which is a pair of two files: the one to process
(the fixture) and it's expected output. Fixtures are html or md files
in `spec/fixtures`. Any partials and templates required by this
fixture should be stored in `spec/partials` and `spec/templates`,
respectively. The expected output of a fixture should be put in
`spec/expected`.

Actual features should be implemented in [zetzer] as this is just
Grunt "front-end".

[zetzer]: https://github.com/brainshave/zetzer