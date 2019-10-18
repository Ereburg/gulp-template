module.exports = function () {
    $.gulp.task('scripts', () => {
        return $.gulp.src([ // Берем все необходимые библиотеки
            './app/source/scripts/**/*.js',
            './app/source/scripts/lib/_lazy-loading.js',
            './app/source/scripts/main.js'
            ])
            .pipe($.plugins.sourcemaps.init())
            .pipe($.plugins.concat('scripts.min.js')) // Собираем их в кучу в новом файле
            .pipe($.plugins.terser()) // Сжимаем JS файл
            .pipe($.plugins.sourcemaps.write('./')) 
            .pipe($.gulp.dest('./app/dist/scripts'));
    });
};