var gutil = require('gulp-util');
var notifier = require('node-notifier');

module.exports = {
    logError: function(error) {
        var errorMessage = gutil.colors.red(error.stack);
        gutil.log(errorMessage);
        notifier.notify({
            title: 'Error',
            message: error.filename
        });
        this.emit('end');
    },
    taskComplete: function(options) {
        var str = gutil.colors.blue('[' + options.title + '] ') +
            gutil.colors.green(options.message);

        gutil.log(str);
    }
};