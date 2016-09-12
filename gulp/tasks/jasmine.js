var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var paths = require('./../paths.js');
var Server = require('karma').Server;

/**
 * Jasmine tests
 */
gulp.task('script:test', ['script:dev'], function(done) {
    new Server({
        configFile: require('path').resolve('karma.conf.js'),
        singleRun: false
    }, done).start();
});