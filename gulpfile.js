const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const gcmq = require('gulp-group-css-media-queries');

gulp.task('sass', function () {
  return gulp.src('./pages/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gcmq())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./pages/'))
})

gulp.task('watch', function () {
  gulp.watch('./pages/*.scss', gulp.series('sass'))
})
