const gulp = require('gulp');
const browserSync = require('browser-sync');
const scss = require('gulp-sass');
const gulpRename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify-es').default;
const pug = require('gulp-pug');
const babel = require('gulp-babel');


/* -------- BROWSERSYNC --------*/
// Запускает сервер

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: 'dist',
        },
    });
    gulp.watch('src/*.html').on('change', browserSync.reload); // после изминения запускает задачу, страница перезагружается
});


/* -------- SCSS, GULPRENAME, AUTOPREFIXER, CLEANCSS --------*/
gulp.task('scss', () =>
    // говорим откуда брать файлы для компаляции
    gulp.src('src/scss/**/*.scss')
    // компилация происходит
    .pipe(scss({
        outputStyle: 'compressed'
    }).on('error', scss.logError))
    .pipe(gulpRename({
        prefix: '',
        suffix: '.min' /* dirname: "main/text/ciao", basename: "aloha", extname: ".md" */
    }))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(csso({
        restructure: false,
        sourceMap: true,
        debug: true
    }))

    // после чего файлы складываются по данному пути
    .pipe(gulp.dest('dist/css')) // dist
    .pipe(browserSync.stream()));


/* -------- HTMLMIN --------*/
// gulp.task('htmlmin', () => gulp.src('src/*.html')
//     .pipe(htmlmin({
//         collapseWhitespace: true, // убарает пробелы в минифицированном файле
//         ignoreCustomComments: true,
//         removeComments: true,
//     }))
//     .pipe(gulp.dest('dist/')));



/* -------- PUG --------*/
gulp.task('pug', () => {
    return gulp.src('src/*.pug')
        .pipe(pug( /*{pretty: true}*/ ))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
});

/* -------- JAVASCRIPT --------*/
gulp.task('concat', () => gulp.src(['./src/js/polyfills/polyfill.js', './src/js/libs/jquery-3.4.1.min.js', './src/js/libs/tiny-slider.js', './src/js/hamburger.js', './src/js/change-address-video.js', './src/js/slider-reviews.js', './src/js/slider-gallery.js', './src/js/disable-basic-link-behavior.js'])
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat({
        path: 'script.js'
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream()));


/* -------- IMG --------*/
gulp.task('img', () => gulp.src('src/img/**/*')
    .pipe(gulp.dest('dist/img')));

/* -------- FONTS --------*/
gulp.task('fonts', () => gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts')));


gulp.task('watch', () => {
    // следит за файлами по данной дериктории, и если в них происзошло изменение, запускаются нужные задачи
    gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'))
    // gulp.watch('src/*.html').on('change', gulp.parallel('htmlmin'));
    gulp.watch('src/*.pug').on("change", gulp.parallel('pug'));
    gulp.watch('src/js/**/*.js').on('change', gulp.parallel('concat'));
    gulp.watch('src/img/**/*').on('change', gulp.parallel('img'));
    gulp.watch('src/fonts/**/*').on('change', gulp.parallel('fonts'));
});

// запускает паралельно несколько задач
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'scss', /*'htmlmin',*/ 'pug', 'concat', 'img', 'fonts'))