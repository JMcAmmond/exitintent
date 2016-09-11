var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var paths = require('./../paths.js');
var utils = require('./utils');

/**
 * Compile LESS into CSS
 */
gulp.task('less:dev', function() {

    return gulp.src(paths.applicationLESS)
        .pipe(plugins.less()).on('error', utils.logError)
        .pipe(plugins.minifyCss({processImport: false}))
        .pipe(plugins.rename('build.min.css'))
        .pipe(gulp.dest(paths.cssBuildPath))
        .pipe(plugins.notify(
            function(file) {
                utils.taskComplete({
                    'title': 'Task: less:dev',
                    'message': 'Application LESS compiled to - ' + paths.cssBuildPath + '/' + file.relative
                })
            }
        ));

});