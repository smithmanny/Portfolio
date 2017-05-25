// Include gulp
var gulp = require('gulp');
// Define base folders
var src = 'src/';
var dest = 'build/';
// Include plugins
var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    bs = require('browser-sync'),
    reload = bs.reload,
    php = require('gulp-connect-php');

//Browser-Sync It's magic!!!
gulp.task('browser-sync', function() {
  php.server({}, function() {
    bs({
      proxy: 'portfolio.dev'
    });
  });
});

// Concatenate & Minify JS
gulp.task('js', function() {
    return gulp.src(src + 'js/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest(dest + 'js'))
        .pipe(bs.stream());
});

// Compile SASS into CSS
gulp.task('sass', function() {
    return gulp.src(src + 'scss/*.scss')
        .pipe(sass({
          outputStyle: 'compressed'
        }))
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest(dest + 'css'))
        .pipe(bs.stream());
});

gulp.task('watch', ['browser-sync'], function() {
  // Watch .js files
  gulp.watch(src + 'js/*.js', ['js']).on('change', reload);
  // Watch .scss files
  gulp.watch(src + 'scss/*.scss', ['sass']).on('change', reload);
  // Watch HTML files
  gulp.watch('*.php').on('change', reload);
});

gulp.task('default', ['browser-sync'], function() {
  // Watch .js files
  gulp.watch(src + 'js/*.js', ['js']).on('change', reload);
  // Watch .scss files
  gulp.watch(src + 'scss/*.scss', ['sass']).on('change', reload);
  // Watch HTML files
  gulp.watch('*.php').on('change', reload);
});
