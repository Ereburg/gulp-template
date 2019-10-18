module.exports = function () {
    // Responsive Images
    var quality = 80; // Responsive images quality

    // Produce @1x images
    $.gulp.task('img-responsive-1x', async function () {
        return $.gulp.src('./app/source/images/**/*.{png,jpg,jpeg,webp,raw}')
            .pipe($.plugins.newer('./app/dist/images/@1x'))
            .pipe($.plugins.responsive({
                '**/*': { width: '50%', quality: quality }
            })).on('error', function (e) { console.log(e); })
            .pipe($.plugins.rename(function (path) { path.extname = path.extname.replace('jpeg', 'jpg'); }))
            .pipe($.gulp.dest('./app/dist/images/@1x'));
    });
    // Produce @2x images
    $.gulp.task('img-responsive-2x', async function () {
        return $.gulp.src('./app/source/images/**/*.{png,jpg,jpeg,webp,raw}')
            .pipe($.plugins.newer('./app/dist/images/@2x'))
            .pipe($.plugins.responsive({
                '**/*': { width: '100%', quality: quality }
            })).on('error', function (e) { console.log(e); })
            .pipe($.plugins.rename(function (path) { path.extname = path.extname.replace('jpeg', 'jpg'); }))
            .pipe($.gulp.dest('./app/dist/images/@2x'));
    });
    $.gulp.task('img', $.gulp.series('img-responsive-1x', 'img-responsive-2x'));
};