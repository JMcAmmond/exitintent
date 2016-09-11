var gulp = require('gulp');

require('./gulp/tasks/less');
require('./gulp/tasks/script');
require('./gulp/tasks/livereload');
require('./gulp/tasks/lib');

/**
 * Default Gulp task
 */
gulp.task('default', ['script:dev', 'less:dev', 'lib:dev', 'livereload'], function(){
    console.log('Default Finished');
    console.log('Watching...');
});