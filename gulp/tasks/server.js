module.exports = function () {
    $.gulp.task('server', () => {
        $.bs.init({
            server: {
                baseDir: "./build" // отслеживаемая директория и старт сервера
            },
            notify: false, // уведомления отключены
            port: 3000,
            browser: "google chrome" // можешь задать любой браузер
        });
        $.gulp.watch('./app/**/*.pug', $.gulp.parallel('pug')); // отслеживаемые директории
        $.gulp.watch('./app/scss/**/*.{scss,sass}', $.gulp.parallel('styles'));
        $.gulp.watch('./app/scripts/**/*.js', $.gulp.parallel('scripts'));
        $.gulp.watch([
            './build/**/*.html',
            './build/scripts/**/*.js'
        ]).on('change', $.bs.reload); // перезагрузка страницы при изменениях в отслеживаемой директории сервера
    });
};