var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('watch:dev', function() {
    gulp.watch([
        'client/js/**/*.js'
    ], ['script:dev', 'script:test']);
    gulp.watch('client/less/**/*.less', ['less:dev']);
});