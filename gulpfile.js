var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('default', function() {
    // place code for your default task here
});
 
gulp.task('webserver', function() {
    connect.server({
          livereload: true
    });
});
 
gulp.task('default', ['webserver']);

