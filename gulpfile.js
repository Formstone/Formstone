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
  return gulp.src(['dist/*', /*, 'docs/*',*/ 'src/css/*' ], { read: false })
    .pipe(clean());
});

// Less
gulp.task('bundle-styles', () => {
  return gulp.src(['./src/less/**/*.less', '!./src/less/index.less'])
    .pipe(less({
      // plugins: [ new lessImportNPM() ],
      // globalVars: pkg.src.vars
    }))
    .pipe(header(banner, {
      pkg:  pkg,
      date: date
    }))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('convert-scss', () => {
  return gulp.src(['./src/less/**/*.less', '!./src/less/index.less'])
    .pipe(lessToScss())
    .pipe(header(banner, {
      pkg:  pkg,
      date: date
    }))
    .pipe(gulp.dest('./src/scss'));
});

// Less
gulp.task('styles', () => {
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

// // JS
// gulp.task('scripts', function() {
//   return gulp.src(['./src/js/**/*.js'])
//     // .pipe(header(banner, {
//     //   pkg:  pkg,
//     //   date: date
//     // }))
//     .pipe(gulp.dest('./src/js'));
// });

// JS
gulp.task('bundle-scripts', () => {
  return gulp.src('./src/js/index.js')
  // return gulp.src('./src/js/**/*.js')
    // .pipe(webpack(require('./webpack.config.js')))
    // .pipe(jshint())
    // .pipe(esbuild({
    //   // outdir: './',
    //   outfile: 'formstone-esbuild.js',
    //   bundle: true,
    //   minify: true,
    //   // format: 'iife',
    //   // drop: ['console'],
    //   // sourcemap: 'linked',
    //   platform: 'browser',
    //   // legalbanners: 'none'
    //   globalName: 'Formstone',
    //   // external: [
    //   //   './utils.js'
    //   // ]
    // }))
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
  return gulp.src(['./src/css/*'])
    .pipe(beautify.css({
      indent_size: 2,
    }))
    .pipe(gulp.dest('./src/css'));
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

gulp.task('build', gulp.series([
  'clean',
  // 'scripts',
  'styles',
  'bundle-scripts',
  'bundle-styles',
  'beautify-scripts',
  'beautify-styles',
  'license',
]));

gulp.task('default', gulp.series([
  // 'clean',
  'build'
]));

gulp.task('dev', gulp.series(['default', (done) => {
  gulp.watch('./src/less/**/*.less', { cwd: './' }, gulp.series(['styles', 'bundle-styles']));
  gulp.watch('./src/js/**/*.js', { cwd: './' }, gulp.series(['bundle-scripts']));
  // gulp.watch('./src/docs/**/*', ['buildDocs', 'zetzer']);

  // gulp.watch('./demo/css/src/**/*', ['demoStyles']);
  // gulp.watch('./demo/js/src/**/*', ['demoScripts']);
}]));