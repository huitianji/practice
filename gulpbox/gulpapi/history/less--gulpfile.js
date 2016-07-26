var gulp = require("gulp");
//var less = require("gulp-less");
var $ = require('gulp-load-plugins')();

gulp.task('less',function(){
    gulp.src('app/less/**.less')
        .pipe($.less())
        .pipe(
            gulp.dest('dist/css')
        );
});
gulp.task('default',['less']);