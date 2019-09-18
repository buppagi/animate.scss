"use stric";

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var fs = require('fs');
var bs = require('browser-sync').create();
var reload = bs.reload;

var pkg = JSON.parse(fs.readFileSync('package.json'));

// Task options
var opts = {
	destPath: './dist',
	mapPath: '../maps',

	autoprefixer: {
		cascade: false,
		remove: false
	},

	minRename: {
		suffix: '.min',
	},

	banner: [
		'/*!',
		' * <%= name %> - <%= homepage %>',
		' * Description - <%= description %>',
		' * Version - <%= version %>',
		' * Licensed under the MIT license - http://opensource.org/licenses/MIT',
		' *',
		' * Copyright (c) <%= new Date().getFullYear() %> <%= author.name %>',
		' */\n\n',
	].join('\n')
};

var errorHandler = function (error) {
	console.error(error.message);
	this.emit('end');
};
var plumberOption = {
	errorHandler: errorHandler
};

gulp.task('server', ['scss', 'js'], function () {
	bs.init({
		server: { baseDir: "./" },
		ghostMode: { clicks: false, scroll: false }
	});
});

gulp.task('scss', function () {
	return gulp.src(['./animate.scss', './style.scss'])
		.pipe(plumber(plumberOption))
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(rename(opts.minRename))
		.pipe(autoprefixer(opts.autoprefixer))
		.pipe(sourcemaps.write(opts.mapPath + '/css'))
		.pipe(header(opts.banner, pkg))
		.pipe(gulp.dest(opts.destPath + '/css'))
		.pipe(bs.reload({ stream: true }));
});
gulp.task('js', function () {
	return gulp.src('./animate.js')
		.pipe(jshint())
		.pipe(sourcemaps.init())
		.pipe(plumber(plumberOption))
		.pipe(uglify({ mangle: { toplevel: true } }))
		.pipe(rename(opts.minRename))
		.pipe(sourcemaps.write(opts.mapPath + '/js'))
		.pipe(header(opts.banner, pkg))
		.pipe(gulp.dest(opts.destPath + '/js'))
		.pipe(bs.reload({ stream: true }))
});

gulp.task('watch', function () {
	gulp.watch('./**/*.scss', ['scss']);
	gulp.watch('./animate.js', ['js']);

	gulp.watch('./dist/**/*.*').on('change', reload);
	gulp.watch('./index.html').on('change', reload);
});

gulp.task('default', ['server', 'watch']);
