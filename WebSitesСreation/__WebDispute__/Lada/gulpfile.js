let gulp            = require('gulp'),
	browserSync     = require('browser-sync'),
	scss 			= require('gulp-sass'),
    gulpRename      = require('gulp-rename'),
    autoprefixer    = require('gulp-autoprefixer'),
	htmlmin 		= require('gulp-htmlmin'),
	watch 			= require('gulp-watch'),
	concat 			= require('gulp-concat'),
	csso 			= require('gulp-csso'),
	uglify 			= require('gulp-uglify-es').default;


/*-------- browserSync --------*/
//Запускает сервер
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
	});
    gulp.watch('src/*.html').on("change", browserSync.reload); //после изминения запускает задачу, страница перезагружается
});

/*-------- scss, gulpRename, autoprefixer, cleanCSS --------*/
//обращаемся к галпу и назначает задачу, называя её scss, после чего создаём функцию
gulp.task('scss', function() {
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


/*-------- htmlmin --------*/
gulp.task('htmlmin', function() {
	return gulp.src('src/*.html')
		.pipe(htmlmin({
			ignoreCustomComments: true,
			removeComments: true }))
		.pipe(gulp.dest('dist/'));
});

/*-------- scriptJS --------*/
gulp.task('concat', function() {
	return gulp.src(['src/js/preloader.js', 'src/js/libs/jquery.min.js', 'src/js/libs/vegas.min.js', 'src/js/gallery-bg.js', 'src/js/libs/slick.min.js', 'src/js/nav-animation.js', 'src/js/links.js', 'src/js/about-car-slider.js', 'src/js/full-page-click.js', 'src/js/hamburger.js', 'src/js/progress-bar.js', 'src/js/models-slider.js', 'src/js/popup.js'])
		.pipe(concat({ path: 'script.js'}))
		.pipe(gulp.dest('dist/js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream())
});

/*-------- img --------*/
gulp.task('img', function() {
	return gulp.src('src/img/**/*')
		.pipe(gulp.dest('dist/img'));
});

/*-------- fonts --------*/
gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
});


gulp.task('watch', function() {
	//следит за файлами по данной дериктории, и если в них происзошло изменение, запускается задача scss
	gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'))
    gulp.watch('src/*.html').on("change", gulp.parallel('htmlmin'));
    gulp.watch('src/js/**/*.js').on("change", gulp.parallel('concat'));
    gulp.watch('src/img/**/*').on("change", gulp.parallel('img'));
    gulp.watch('src/fonts/**/*').on("change", gulp.parallel('fonts'));
});

//запускает паралельно несколько задач
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'scss', 'htmlmin', 'concat', 'img', 'fonts'))
