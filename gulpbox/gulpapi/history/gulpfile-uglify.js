var gulp = require("gulp");
//var less = require("gulp-less");
//var connect = require('gulp-connect');
var $ = require('gulp-load-plugins')();

gulp.task('uglify',function(){

    gulp.src(['app/*.js','!app/*.tmp.js'])
        .pipe($.concat('all.js'))//先合并
        .pipe($.uglify())//再压缩
        .pipe(
            gulp.dest('dist/js')
        );

});

gulp.task('watch',function(){
    gulp.watch(['app/**'],['copyhtml'])
});

gulp.task('server', function () {
    $.connect.server({
        root:'dist',
        port:8080,
        livereload:true//启动实时刷新功能
    });
});

gulp.task('default',['uglify']);//运行此任务的时候会在8080上