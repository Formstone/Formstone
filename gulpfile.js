let autoprefixer = require('gulp-autoprefixer');
let clean = require('gulp-clean');
let beautify = require('gulp-beautify');
var cleanCSS = require('gulp-clean-css');
let dayjs = require('dayjs');
// let esbuild = require('gulp-esbuild');
var fs = require('fs');
let gulp = require('gulp');
let header = require('gulp-header');
let less = require('gulp-less');
let lessToScss = require('gulp-less-to-scss');
let rename = require('gulp-rename');
let webpack = require('webpack-stream');

// Vars
let pkg = require('./package.json');
let date = dayjs().format('YYYY-MM-DD');
let banner = '/*! <%= pkg.name %> v<%= pkg.version %> [<%= filename %>] <%= date %> |' +
  ' <%= pkg.license %> License | <%= pkg.homepage_short %> */\n';

// Clean

gulp.task('clean', () => {
  return gulp.src(['dist/*', /*, 'docs/*',*/ 'src/css/*', 'src/scss/*' ], { read: false })
    .pipe(clean());
});

// Beutify Scripts
gulp.task('beautify-scripts', () => {
  return gulp.src(['./src/js/*'])
    .pipe(beautify({
      indent_size: 2,
    }))
    .pipe(gulp.dest('./src/js'));
});

// Beutify Styles
gulp.task('beautify-styles', () => {
  return gulp.src(['./src/less/*'])
    .pipe(beautify.css({
      indent_size: 2,
    }))
    .pipe(gulp.dest('./src/less'));
});

// Less
gulp.task('bundle-styles', () => {
  return gulp.src('./src/less/index.less')
    .pipe(less({
      // plugins: [ new lessImportNPM() ],
      // globalVars: pkg.src.vars
    }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({
      // compatibility: 'ie10'
    }))
    .pipe(header(banner, {
      pkg:  pkg,
      date: date
    }))
    .pipe(rename('formstone.css'))
    .pipe(gulp.dest('./dist/'));
});

// JS
gulp.task('bundle-scripts', () => {
  return gulp.src('./src/js/index.js')
    .pipe(webpack({
      // mode: 'production',
      mode: 'development',
      entry: './src/js/index.js',
      output: {
        path: __dirname + '/dist/js',
        filename: 'formstone.js',
        globalObject: 'window',
        library: {
          name: 'Formstone',
          type: 'umd'
        }
      }
    }))
    .pipe(header(banner, {
      pkg:  pkg,
      date: date
    }))
    .pipe(gulp.dest('./dist'));
});

// Convert Less to CSS
gulp.task('convert-css', () => {
  return gulp.src(['./src/less/**/*.less', '!./src/less/index.less'])
    .pipe(less({
      // plugins: [ new lessImportNPM() ],
      // globalVars: pkg.src.vars
    }))
    .pipe(beautify.css({
      indent_size: 2,
    }))
    .pipe(header(banner, {
      pkg:  pkg,
      date: date
    }))
    .pipe(gulp.dest('./src/css'));
});

// Convert Less to SCSS
gulp.task('convert-scss', () => {
  return gulp.src(['./src/less/**/*.less' /*, '!./src/less/index.less'*/])
    .pipe(lessToScss())
    .pipe(beautify.css({
      indent_size: 2,
    }))
    .pipe(header(banner, {
      pkg:  pkg,
      date: date
    }))
    .pipe(gulp.dest('./src/scss'));
});

// License
gulp.task('license', function(done) {
  return fs.readFile('tasks/gpl.txt', function(err, data) {
    let content = 'Formstone \n\n' +
      'Copyright ' + dayjs().format('YYYY') + ' ' + pkg.author.name + ' \n\n' +
      data;

    fs.writeFile('license.txt', content, function() {});

    done();
  });
});

// Tasks

gulp.task('default', gulp.series([
  'clean',
  'beautify-scripts',
  'beautify-styles',
  'bundle-scripts',
  'bundle-styles',
  'convert-css',
  'convert-scss',
  'license',
]));

gulp.task('dev', gulp.series(['default', (done) => {
  gulp.watch('./src/less/**/*.less', { cwd: './' }, gulp.series(['bundle-styles']));
  gulp.watch('./src/js/**/*.js', { cwd: './' }, gulp.series(['bundle-scripts']));
}]));