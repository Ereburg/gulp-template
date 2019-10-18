module.exports = function () {
    $.gulp.task('pug', () => {
        return $.gulp.src('./app/source/markup/pug/*.pug')
            .pipe($.plugins.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('./app/source/markup/html'));
    });
    $.gulp.task('html-min', () => {
        return $.gulp.src('./app/source/markup/html/*.html')
            .pipe($.plugins.htmlmin({
                collapseWhitespace: true
            }))
            .pipe($.gulp.dest('./app/dist')); // .on('change', $.bs.reload);
    });
    $.gulp.task('html', $.gulp.series('pug', 'html-min'));
};