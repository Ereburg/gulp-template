module.exports = function () {
    $.gulp.task('server', () => {
        $.bs.init({
            server: {
                baseDir: "./app/dist" // здесь будем собирать все файлы, поэтому отслеживаю эту папку
            },
            notify: false, // уведомления отключены
            port: 3000,
            browser: "google chrome" // можете задать любой браузер
        });
        $.gulp.watch('./app/source/markup/pug/**/*.pug', $.gulp.parallel('html')); // отслеживаем изменения, pug конвертирует, затем минифицируем и перебрасываем в dist
        $.gulp.watch('./app/source/styles/sass/**/*.sass', $.gulp.parallel('styles')); // стилевые изменения не релоадим, а стримим
        $.gulp.watch('./app/source/scripts/**/*.js', $.gulp.parallel('scripts')); 
        $.gulp.watch('./app/source/images/**/*.{png,jpg,jpeg,webp,raw}', $.gulp.parallel('img')); 
        $.gulp.watch([
            './app/dist/images/**/*.{png,jpg,jpeg,webp,raw}',
            './app/dist/**/*.html',
            './app/dist/scripts/**/*.js'
        ]).on('change', $.bs.reload);
    });
};