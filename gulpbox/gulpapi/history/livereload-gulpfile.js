var gulp = require("gulp");
//var less = require("gulp-less");
//var connect = require('gulp-connect');
var $ = require('gulp-load-plugins')();

gulp.task('copyhtml',function(){
    gulp.src(['app/*.html'])
        .pipe(
            gulp.dest('dist')
        )
        .pipe($.connect.reload());//通知浏览器重启

    gulp.src(['app/less/*.less','!app/less/_*.less'])
        .pipe($.less())
        .pipe(
            gulp.dest('dist/css')
        )
        .pipe($.connect.reload());//通知浏览器重启
});

gulp.task('watch',function(){
    gulp.watch(['app/*.html','app/less/*.less'],['copyhtml'])
});

gulp.task('server', function () {
    $.connect.server({
        root:'dist',
        port:8080,
        livereload:true//启动实时刷新功能
    });
});

gulp.task('default',['watch','server']);//运行此任务的时候会在8080上