module.exports = function () {
    $.gulp.task('pug', () => {
        return $.gulp.src('./app/pug/*.pug') // отслеживаем
            .pipe($.plugins.pug({
                pretty: true
            }))
            .pipe($.plugins.htmlmin({ // сжимаем выходной файл
                collapseWhitespace: true
            }))
            .pipe($.gulp.dest('./build')); // кидаем
    });
}; 