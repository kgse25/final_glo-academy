

// const { src, dest } = require('gulp');
// let cleanCSS = require('gulp-clean-css');

// exports.build = function() {
// 	return src('src/sass/*.css')
// 		.pipe(cleanCSS({
// 			compatibility: 'ie8'
// 		}))
// 		.pipe(dest('dist_final/css'));
// }

let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');

gulp.task('minify-css', () => {
	return gulp.src('sass/*.css')
		.pipe(cleanCSS({
			compatibility: 'ie8'
		}))
		.pipe(gulp.dest('dist_final'));
});

gulp.task('move-js', () => {
	return gulp.src('js/*.js')
		.pipe(gulp.dest('dist_final/js/'));
});

gulp.task('htmlmin', () => {
	return gulp.src('*.html')
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('dist_final/'));
});

gulp.task('fonts', () => {
	return gulp.src('fonts/**/*')
		.pipe(gulp.dest('dist_final/fonts'));
});

gulp.task('tinypng', function (done) {
	gulp.src('img/**/*.{png,jpg,jpeg}')
		.pipe(tinypng({
			key: 'ecwFitfUCAqZpTgHR96pvOXL2OE8mqKZ',
		}))
		.pipe(gulp.dest('dist_final/img'));
		done();
});

// function defaultTask(cb) {
	
// 	console.log('default function complete')
// 	cb();
// }

// exports.default = defaultTask;

gulp.task('default', gulp.parallel('minify-css', 'move-js', 'fonts', 'htmlmin', 'tinypng', function(done) {
	done();
}))