var gulp         = require('gulp');
var header       = require('gulp-header');
var less         = require('gulp-less');
var clip         = require('gulp-clip-empty-files');
var cleanCSS     = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var modernizr    = require('gulp-modernizr');
var uglify       = require('gulp-uglify');
var include      = require('gulp-include');
var moment       = require('moment');
var fs           = require('fs');

var pkg = require('./package.json');
var date = moment().format('YYYY-MM-DD');
var comment = '';
comment += '/*! <%= pkg.name %> v<%= pkg.version %> [<%= filename %>] <%= date %> |';
comment += ' <%= pkg.license %> License | <%= pkg.homepage_short %> */\n';

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
    .pipe(uglify())
	.pipe(header(comment, {
		pkg:  pkg,
		date: date
	}))
    .pipe(gulp.dest('./dist/js'));
});

// License
gulp.task('license', function() {
	fs.readFile('tasks/license.txt', function(err, data) {
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

gulp.task('default', ['styles', 'scripts', 'modernizr']);
