var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');


gulp.task('task-a',function () {
   console.log("Automated task A using gulp");
});

gulp.task('sass',function () {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.task('js',function () {
    return gulp.src('app/js-local/test.js')
        .pipe(minify())
        .pipe(uglify())
        .pipe(gulp.dest('app/minified'));
});