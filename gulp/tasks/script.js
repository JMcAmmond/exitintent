var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var paths = require('./../paths.js');
var utils = require('./utils');

/**
 * Concat and minify JS application files
 */
gulp.task('script:dev', function() {
    return gulp.src(paths.applicationJS)
        .pipe(gulp.dest('build'))
        .pipe(plugins.uglify()).on('error', utils.logError)
        .pipe(plugins.rename('exitintent.min.js'))
        .pipe(gulp.dest(paths.jsBuildPath))
        .pipe(plugins.notify(
            function(file) {
                utils.taskComplete({
                    'title': 'Task: script:dev',
                    'message': 'Application JS compiled to - ' + paths.jsBuildPath + '/' + file.relative
                })
            }
        ));
});