const gulp = require('gulp');
const browserSync = require('browser-sync');
const scss = require('gulp-sass');
const gulpRename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const csso = require('gulp-csso');
const webpack = require('webpack-stream');


/* -------- BROWSERSYNC --------*/
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });
  gulp.watch('src/*.html').on('change', browserSync.reload); // после изминения запускает задачу, страница перезагружается
});


/* -------- SCSS, GULPRENAME, AUTOPREFIXER, CLEANCSS --------*/
gulp.task('scss', () => gulp.src('src/scss/**/*.scss')
// Запуск пакетов
  .pipe(scss({ outputStyle: 'compressed' }).on('error', scss.logError))
  .pipe(gulpRename({ prefix: '', suffix: '.min' /* dirname: "main/text/ciao", basename: "aloha", extname: ".md" */ }))
  .pipe(autoprefixer({ cascade: false }))
  .pipe(csso({ restructure: false, sourceMap: true, debug: true }))
  .pipe(gulp.dest('dist/css')) // dist
  .pipe(browserSync.stream()));


/* -------- HTMLMIN --------*/
gulp.task('htmlmin', () => gulp.src('src/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true,
    ignoreCustomComments: true,
    removeComments: true,
  }))
  .pipe(gulp.dest('./dist/')));


gulp.task('npm-start-dev', () => gulp.src('./src/js/script.js')
  .pipe(webpack({
    mode: 'development',
    output: {
      filename: 'script.js',
    },
    watch: 'false',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: 'usage',
              }]],
            },
          },
        },
      ],
    },
  }))
  .pipe(gulp.dest('./dist/js'))
  .pipe(browserSync.stream()));


gulp.task('npm-build', () => gulp.src('./src/js/script.js')
  .pipe(webpack({
    mode: 'production',
    output: {
      filename: 'script.js',
    },
    devtool: 'none',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                corejs: 3,
                useBuiltIns: 'usage',
              }]],
            },
          },
        },
      ],
    },
  }))
  .pipe(gulp.dest('./dist/js')));


/* -------- IMG --------*/
gulp.task('img', () => gulp.src('src/img/**/*')
  .pipe(gulp.dest('dist/img')));

/* -------- FONTS --------*/
gulp.task('fonts', () => gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts')));


gulp.task('watch', () => {
  // следит за файлами по данной дериктории, и если в них происзошло изменение, запускаются нужные задачи

  gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('src/*.html').on('change', gulp.parallel('htmlmin'));
  // gulp.watch('src/js/**/*.js').on('change', gulp.parallel('concat'));
  gulp.watch('src/img/**/*').on('change', gulp.parallel('img'));
  gulp.watch('src/fonts/**/*').on('change', gulp.parallel('fonts'));
});

// запускает паралельно несколько задач
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'scss', 'htmlmin', 'npm-start-dev', 'img', 'fonts'));
