var fs           = require('fs');
var moment       = require('moment');
var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var clean        = require('gulp-clean');
var cleanCSS     = require('gulp-clean-css');
var clip         = require('gulp-clip-empty-files');
var header       = require('gulp-header');
var include      = require('gulp-include');
var jshint       = require('gulp-jshint');
var less         = require('gulp-less');
var modernizr    = require('gulp-modernizr');
var syncBower    = require('gulp-sync-bower');
var uglify       = require('gulp-uglify');
var watch        = require('gulp-watch')

// Vars
var pkg = require('./package.json');
var date = moment().format('YYYY-MM-DD');
var comment = '/*! <%= pkg.name %> v<%= pkg.version %> [<%= filename %>] <%= date %> |' +
  ' <%= pkg.license %> License | <%= pkg.homepage_short %> */\n';

// Clean

gulp.task('clean', function () {
  return gulp.src('dist/*', { read: false })
    .pipe(clean());
});

// Less
gulp.task('styles', function() {
  return gulp.src(['./src/less/**/*.less', '!./src/less/imports/*'])
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie >= 10']
    }))
    .pipe(cleanCSS({
      compatibility: 'ie10'
    }))
    .pipe(clip())
    .pipe(header(comment, {
      pkg:  pkg,
      date: date
    }))
    .pipe(gulp.dest('./dist/css'));
});

// JS
gulp.task('scripts', function() {
  gulp.src('./src/js/*.js')
    .pipe(include())
    .pipe(jshint())
    .pipe(uglify())
    .pipe(header(comment, {
      pkg:  pkg,
      date: date
    }))
    .pipe(gulp.dest('./dist/js'));
});

// License
gulp.task('license', function() {
  fs.readFile('tasks/gpl.txt', function(err, data) {
    var content = 'Formstone \n\n' +
      'Copyright ' + moment().format('YYYY') + ' ' + pkg.author.name + ' \n\n' +
      data;

    fs.writeFile('license.txt', content, function() {});
  });
});

// Modernizr
gulp.task('modernizr', function () {
  // return gulp.src(['dist/js/*.js', 'dist/css/*.css'])
  //   .pipe(modernizr({
  //     'tests': [
  //       'js',
  //       'touchevents'
  //     ],
  //     'options': [
  //       'setClasses',
  //       'addTest',
  //       'html5printshiv',
  //       'testProp',
  //       'fnBind'
  //     ]
  //   }))
  //   .pipe(uglify())
  //   .pipe(gulp.dest("public/js/"))
});

// Clean

gulp.task('bower', function () {
  var p = {
    name:         pkg.name,
    version:      pkg.version,
    description:  pkg.description,
    license:      pkg.license,
    homepage:     pkg.homepage,
    dependencies: pkg.dependencies,
    main:         [ pkg.main ],
    ignore:       [
      "demo/",
      "docs/"
    ],
    authors:      [ pkg.author ]
  };

  return gulp.src('bower.json')
    .pipe(syncBower({
      pkg: p
    }))
    .pipe(gulp.dest('.'))
});

// Tasks

gulp.task('default', ['clean'], function() {
  gulp.start(['styles', 'scripts', 'modernizr', 'bower']);
});

gulp.task('dev', ['styles', 'scripts'], function() {
  gulp.watch('./src/less/**/*.less', ['styles']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
});
