var gulp = require('gulp'),
    rename = require('gulp-rename'),
    notify = require("gulp-notify"),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass');

/* scss */
var style_css = [
    './scss/*.scss',
    './scss/_menu.scss',
    './scss/_lists.scss',
    './scss/_select-style.scss',
    './scss/_input-radio-checkbox.scss',
    './scss/_pagination.scss',
    './scss/style.scss'
];
gulp.task('sass', function () {
    gulp.src(style_css)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sass())
        // .pipe(minifyCss())
        // .pipe(rename('style.css'))
        .pipe(autoprefixer({
            browsers: ['> 1%', 'last 15 versions'],
            cascade: false
        }))
        .pipe(plumber.stop())
        .pipe(notify("css success!"))
        .pipe(gulp.dest('./css/'));
});

/* js */
var core = [
    './js/modernizr.js',
    './js/jquery.js',
    './js/jquery-ui.js',
    './js/jquery-fancybox-pack.js',
    './js/jquery-formstyler-min.js',
    './js/jquery-rateit-min.js',
    './js/superfish.js',
    './js/script.js'
];


gulp.task('js-core', function () {
    gulp.src(core)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        // .pipe(uglify())
        .pipe(concat('core.js'))
        .pipe(plumber.stop())
        .pipe(notify("js-core success!"))
        .pipe(gulp.dest('./js/'));
});


/* watcher */
gulp.task('watch', function () {
    gulp.watch(core, ['js-core']);
    gulp.watch(style_css, ['sass']);
});


/* default task */
gulp.task('default', ['watch']);