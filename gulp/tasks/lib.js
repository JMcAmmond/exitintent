var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var paths = require('./../paths.js');
var utils = require('./utils');

/**
 * Concat and minify JS vendor files
 */
gulp.task('lib:dev', function() {

    //Concat and minify vendor scripts
    gulp.src(paths.libJS)
        .pipe(plugins.concat('libs.min.js'))
        .pipe(plugins.uglify({mangle: false}))
        .pipe(gulp.dest(paths.jsBuildPath))
        .pipe(plugins.notify(
            function(file) {
                utils.taskComplete({
                    'title': 'Task: lib:dev',
                    'message': 'Library JS compiled to - ' + paths.jsBuildPath + '/' + file.relative
                })
            }
        ));
});