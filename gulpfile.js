var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('less', function () {
  return gulp.src('./src/App.less')
    .pipe(less())
    .pipe(concat('App.css'))
    .pipe(gulp.dest('./src/'));
});

gulp.task('watch', function() {
    return gulp.watch('./src/*', ['less'])
})

gulp.task('default', ['less']);