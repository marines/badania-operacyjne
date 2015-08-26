var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');

gulp.task('build', function () {
  return gulp.src('*.js', {read: false})
      .pipe(plumber())
      .pipe(shell('gitbook build'));
});

//gulp.task('serve', function () {
//  browserSync({server: './_book'});
//  gulp.watch('**/*.md', ['build']);
//  gulp.watch(["**/*.html"]).on('change', browserSync.reload);
//});
//
//gulp.task('default', ['build', 'serve']);