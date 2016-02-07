var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var compass     = require('gulp-compass');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');

var files = {
  scss: "app/sass/**/*.scss",
  js: "app/**/*.js",
  html: "./**/*.html"
};

gulp.task('serve', ['sass', 'js-watch'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(files.scss, ['sass']);
    gulp.watch(files.js, ['js-watch']);
    gulp.watch(files.html).on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src(files.scss)
        .pipe(compass({
          config_file: './config.rb',
          sass: 'app/sass',
          css: 'assets/css'
        }))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src(files.js)
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('js-watch', ['js'], function () {
  browserSync.reload();
});

gulp.task('default', ['serve']);
