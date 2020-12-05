const gulp = require('gulp');
const browserSync = require('browser-sync');
const scss = require('gulp-sass');
const gulpRename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify-es').default;
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


/* -------- SCSS --------*/
gulp.task('scss', function () {
  //говорим откуда брать файлы для компаляции
  return gulp.src('src/scss/**/*.scss')
    //компилация происходит
    .pipe(scss({ outputStyle: 'expanded' }).on('error', scss.logError))
    .pipe(gulpRename({ prefix: "", suffix: "" /*dirname: "main/text/ciao", basename: "aloha", extname: ".md" */ }))
    .pipe(autoprefixer({ cascade: false }))

    //после чего файлы складываются по данному пути
    .pipe(gulp.dest("dist/css")) //dist
    .pipe(browserSync.stream())
});

/* -------- HTMLMIN --------*/
gulp.task('htmlmin', () => gulp.src('src/*.html')
  .pipe(gulp.dest('dist/'))
  .pipe(browserSync.stream())
);

/* -------- CSS --------*/
gulp.task('css', () => {
  gulp.src('./src/css/**/*.css')
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
});

gulp.task('js', () => {
  gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream())
});

/* -------- IMG --------*/
gulp.task('img', () => gulp.src('src/img/**/*')
  .pipe(gulp.dest('dist/img'))
  .pipe(browserSync.stream()));


/* -------- FONTS --------*/
gulp.task('fonts', () => gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
  .pipe(browserSync.stream()));


gulp.task('watch', () => {
  // следит за файлами по данной дериктории, и если в них происзошло изменение, запускаются нужные задачи
  gulp.watch('./src/*.html').on('change', gulp.parallel('htmlmin'));
  gulp.watch('./src/scss/**/*.scss').on('change', gulp.parallel('scss'));
  gulp.watch('./src/css/**/*.css').on('change', gulp.parallel('css'));
  gulp.watch('./src/js/**/*.js').on('change', gulp.parallel('js'));
  gulp.watch('./src/img/**/*').on('change', gulp.parallel('img'));
  gulp.watch('./src/fonts/**/*').on('change', gulp.parallel('fonts'));
});

// запускает паралельно несколько задач
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'scss', 'htmlmin', 'img', 'fonts', 'css', 'js'))
