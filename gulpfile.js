const { src, dest } = require('gulp');
var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-clean-css');
// const imagemin = require('gulp-imagemin')

const bundleCss = () => {
    return src('assets/css/*.css')
        .pipe(minifyCss())
        .pipe(dest('dist/css'))
}
exports.bundleCss = bundleCss;

function sassTask() {
    return gulp.src('assets/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
};
exports.sass = sassTask;

// function imageminTask() {

//     gulp.src('src/images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/images'))
// }

// exports.imagemin = imageminTask;

// function copyfonts() {
//     gulp.src('assets/fonts/')
//     .pipe(gulp.dest('fonts'));
// }
// exports.copyfonts = copyfonts;
