const { src, dest } = require('gulp');
var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-clean-css');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
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

gulp.task('imagemin', function () {
    var imgSrc = 'assets/img/*.+(png|jpg|gif|svg)',
        imgDst = 'build/images';

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

exports.imagemin = imagemin;
