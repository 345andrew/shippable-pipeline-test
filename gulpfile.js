var gulp = require('gulp');
var clean = require('gulp-clean');
var gzip = require('gulp-gzip');
var tar = require('gulp-tar');

gulp.task('clean', function() {
  gulp.src('out', {read: false})
  .pipe(clean());
});

gulp.task('zip-output', ['clean'], function() {
  var config = {
  };
  var filename = `app_${process.env.BRANCH}_${process.env.BUILD_NUMBER}.tar`;
  gulp.src('app/*.*')
  .pipe(tar(filename))
  .pipe(gzip(config))
  .pipe(gulp.dest('out'));
});
