var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('hoofdmenu/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('hoofdmenu/**/*.scss',['styles']);
});