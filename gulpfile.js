var gulp         = require('gulp');
var header       = require('gulp-header');
var less         = require('gulp-less');
var cleanCSS     = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var modernizr    = require('gulp-modernizr');
var uglify       = require('gulp-uglify');
var include      = require('gulp-include');
var moment       = require('moment');

var pkg = require('./package.json');
var date = moment().format('YYYY-MM-DD');
var comment = '';
comment += '/*! <%= pkg.name %> v<%= pkg.version %> [<%= filename %>] <%= date %> |';
comment += ' <%= pkg.license %> License | <%= pkg.homepage_short %> */\n';

// Less
gulp.task('styles', function() {
  return gulp.src('./assets/less/*.less')
    .pipe(less())
    .pipe(autoprefixer({
    	browsers: ['last 2 versions']
    }))
    .pipe(cleanCSS({
    	compatibility: 'ie10'
    }))
    .pipe(gulp.dest('./public/css'));
});

// JS
gulp.task('scripts', function() {
  gulp.src('./src/js/*')
    .pipe(include())
    .pipe(uglify())
	.pipe(header(comment, {
		pkg:  pkg,
		date: date
	}))
    .pipe(gulp.dest('./dist/js'));
});

// Modernizr
gulp.task('modernizr', function () {
  return gulp.src(['public/js/*.js', 'public/css/*.css'])
    .pipe(modernizr({
      'tests': [
        'js',
        'touchevents'
      ],
      'options': [
        'setClasses',
        'addTest',
        'html5printshiv',
        'testProp',
        'fnBind'
      ]
    }))
    .pipe(uglify())
    .pipe(gulp.dest("public/js/"))
});

gulp.task('default', ['styles', 'scripts', 'modernizr']);
