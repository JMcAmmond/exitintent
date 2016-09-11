var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('livereload', function() {
    //plugins.livereload.listen();
    gulp.watch([
        'client/js/**/*.js'
    ], ['script:dev']);
    gulp.watch('client/less/**/*.less', ['less:dev']);
});