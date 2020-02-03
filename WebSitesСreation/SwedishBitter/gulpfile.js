let gulp          = require('gulp'),
    browserSync   = require('browser-sync'),
    scss 	  = require('gulp-sass'),
    gulpRename    = require('gulp-rename'),
    autoprefixer  = require('gulp-autoprefixer'),
    htmlmin 	  = require('gulp-htmlmin'),
    watch 	  = require('gulp-watch'),
    concat 	  = require('gulp-concat'),
    csso 	  = require('gulp-csso'),
    uglify 	  = require('gulp-uglify');


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
	});
    gulp.watch('src/*.html').on("change", browserSync.reload); 
});

gulp.task('scss', function() {
    return gulp.src('src/scss/**/*.scss')
		.pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
		.pipe(gulpRename({ prefix: "", suffix: ".min"}))
		.pipe(autoprefixer({cascade: false}))
		.pipe(csso({restructure: false, sourceMap: true, debug: true}))
		.pipe(gulp.dest("dist/css")) //dist
		.pipe(browserSync.stream())
});


gulp.task('htmlmin', function() {
	return gulp.src('src/*.html')
		.pipe(htmlmin({ 
			collapseWhitespace: true, 
			ignoreCustomComments: true, 
			removeComments: true })) 
		.pipe(gulp.dest('dist/'));
});

gulp.task('concat', function() {
	return gulp.src(['src/js/script.js', 'src/js/forms-list.js', 'src/js/forms-reviews.js', 'src/js/link-default.js']) 
		.pipe(concat({ path: 'script.js'}))
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream())
});

gulp.task('img', function() {
	return gulp.src('src/img/**/*')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
});


gulp.task('watch', function() {
	gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'))
    	gulp.watch('src/*.html').on("change", gulp.parallel('htmlmin'));
    	gulp.watch('src/js/**/*.js').on("change", gulp.parallel('concat'));
    	gulp.watch('src/img/**/*').on("change", gulp.parallel('img'));
    	gulp.watch('src/fonts/**/*').on("change", gulp.parallel('fonts'));
});
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'scss', 'htmlmin', 'concat','img', 'fonts'))
