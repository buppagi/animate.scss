"use stric";

var gulp = require('gulp'),
  util 	= require('gulp-util'),
	jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  minifyCss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
  ftp = require('vinyl-ftp'),
  buffer = require('vinyl-buffer'),
  spritesmith = require('gulp.spritesmith'),
	browserify = require('browserify'),
  bs = require('browser-sync').create(),
  reload = bs.reload;

var errorHandler = function (error) {
	console.error(error.message);
	this.emit('end');
};
var plumberOption = {
	errorHandler: errorHandler
};

gulp.task('server', ['scss', 'ui_js'], function() {
	bs.init({
		server: { baseDir: "./" },
		port:9080,
		ghostMode: { clicks: false, scroll: false}
	});
});

gulp.task('scss', function(){
 	return gulp.src( ['./animate.scss', './style.scss'] )
		.pipe( plumber(plumberOption))
 		.pipe( sourcemaps.init() )
		.pipe( sass( {outputStyle: 'compressed'} ).on('error', sass.logError) )
		.pipe( rename({suffix: '.min'}) )
		.pipe(sourcemaps.write( './maps' ))
		.pipe(gulp.dest('./dist/css/'))
		.pipe( bs.reload({stream: true}) );
});
gulp.task('ui_js', function(){
	return gulp.src('./ui.js')
		.pipe( jshint() )
		.pipe( sourcemaps.init() )
		.pipe( plumber(plumberOption) )
		.pipe( uglify( {mangle:{toplevel:true}} ) )
		.pipe( rename({suffix: '.min'}) )
		.pipe( sourcemaps.write('maps') )
		.pipe( gulp.dest('./dist/js/') )
		.pipe( bs.reload({stream: true}) )
});

gulp.task('watch', function() {
	gulp.watch( './**/*.scss', ['scss'] );
	gulp.watch( './ui.js', ['ui_js'] );

	gulp.watch('./dist/**/*.*').on('change', reload);
	gulp.watch('./index.html').on('change', reload);
});

gulp.task('default', ['server', 'watch'] );
