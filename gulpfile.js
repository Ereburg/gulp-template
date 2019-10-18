global.$ = {
    gulp: require('gulp'),
    plugins: require('gulp-load-plugins')(), // плагин, позволяющий не прописывать переменные
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./app/gulp/config/tasks.js') // путь к конфигу, где прописаны пути задач
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.parallel('html', 'styles', 'scripts', 'img', 'server')); // команда по умолчанию