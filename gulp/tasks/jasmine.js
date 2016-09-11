var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var paths = require('./../paths.js');
var utils = require('./utils');

/**
 * Concat and minify JS application files
 */
gulp.task('script:test', function() {
    gulp.src(paths.testJS)
        .pipe(plugins.jasmine())

});