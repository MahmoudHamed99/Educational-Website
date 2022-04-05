var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify'),
    { parallel } = require('gulp');


gulp.task('html', function () {
    return gulp.src('./src/html/*.pug')
    .pipe(pug({
            pretty: true
        })
    )
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
});

gulp.task('css', function () {
    return gulp.src(['src/css/**/*.css', 'src/css/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
	.pipe(concat('main.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload());
});

gulp.task('js', function () {
    return gulp.src('src/js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(livereload());
});

gulp.task('watch', function () {
    require('./server.js');
    livereload.listen();
    gulp.watch('./src/html/*.pug', parallel(['html']));
    gulp.watch(['src/css/**/*.css', 'src/css/**/*.scss'], parallel(['css']));
    gulp.watch('src/js/*.js', parallel(['js']));
});