let gulp            = require('gulp'),
	browserSync     = require('browser-sync'),
	scss 			= require('gulp-sass'),
    gulpRename      = require('gulp-rename'),
    autoprefixer    = require('gulp-autoprefixer'),
	htmlmin 		= require('gulp-htmlmin'),
	concat 			= require('gulp-concat'),
	csso 			= require('gulp-csso'),
	uglify 			= require('gulp-uglify-es').default,
	pug 			= require('gulp-pug'),
	babel 			= require("gulp-babel");


/*-------- BROWSERSYNC --------*/
//Запускает сервер

gulp.task('browser-sync', () => {
	browserSync.init({
        server: {
			baseDir: "dist",
        }
	});
    gulp.watch('src/*.html').on("change", browserSync.reload); //после изминения запускает задачу, страница перезагружается
});


/*-------- SCSS, GULPRENAME, AUTOPREFIXER, CLEANCSS --------*/
gulp.task('scss', () => {
    //говорим откуда брать файлы для компаляции
    return gulp.src('src/scss/**/*.scss')
		//компилация происходит
		.pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
		.pipe(gulpRename({ prefix: "", suffix: ".min" /*dirname: "main/text/ciao", basename: "aloha", extname: ".md" */ }))
		.pipe(autoprefixer({cascade: false}))
		.pipe(csso({restructure: false, sourceMap: true, debug: true}))

		//после чего файлы складываются по данному пути
		.pipe(gulp.dest("dist/css")) //dist
		.pipe(browserSync.stream())
});

/*-------- HTMLMIN --------*/
// gulp.task('htmlmin', () => {
// 	return gulp.src('src/*.html')
// 		.pipe(htmlmin({ 
// 			collapseWhitespace: true, //убарает пробелы в минифицированном файле
// 			ignoreCustomComments: true, 
// 			removeComments: true })) 
// 		.pipe(gulp.dest('dist/'));
// });


/*-------- PUG --------*/
gulp.task('pug', () => {
	return gulp.src('src/*.pug')
	.pipe(pug(/*{pretty: true}*/))
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.stream())
});

/*-------- JAVASCRIPT --------*/
gulp.task('concat', () => {
	return gulp.src(['./src/js/polyfills/polyfill.js', './src/js/libs/jquery-3.4.1.min.js', './src/js/libs/tiny-slider.js', './src/js/hamburger.js']) /*Пример: 'src/js/preloader.js', 'src/js/popup.js' */
		.pipe(babel())
		.pipe(uglify())
		.pipe(concat({path: 'script.js'}))
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream())
});


/*-------- IMG --------*/
gulp.task('img', () => {
	return gulp.src('src/img/**/*')
		.pipe(gulp.dest('dist/img'));
});

/*-------- FONTS --------*/
gulp.task('fonts', () => {
	return gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
});


gulp.task('watch', () => {
	//следит за файлами по данной дериктории, и если в них происзошло изменение, запускаются нужные задачи 
	gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'))
    // gulp.watch('src/*.html').on("change", gulp.parallel('htmlmin'));
    gulp.watch('src/*.pug').on("change", gulp.parallel('pug'));
    gulp.watch('src/js/**/*.js').on("change", gulp.parallel('concat'));
    gulp.watch('src/img/**/*').on("change", gulp.parallel('img'));
    gulp.watch('src/fonts/**/*').on("change", gulp.parallel('fonts'));
});

//запускает паралельно несколько задач
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'scss', /*'htmlmin',*/ 'pug', 'concat', 'img', 'fonts'))
