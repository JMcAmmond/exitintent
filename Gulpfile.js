var gulp = require('gulp');

require('./gulp/tasks/less');
require('./gulp/tasks/script');
require('./gulp/tasks/watch');
require('./gulp/tasks/lib');
require('./gulp/tasks/jasmine');

/**
 * Default Gulp task
 */
gulp.task('default', ['script:dev', 'script:test', 'less:dev', 'watch:dev'], function(){
    console.log('Default Finished');
    console.log('Watching...');
});

/**
 * Gulp task for Jasmine tests
 */
gulp.task('jasmine', ['script:test'], function(){});