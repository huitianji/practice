var gulp = require("gulp");
//var less = require("gulp-less");
//var connect = require('gulp-connect');
var $ = require('gulp-load-plugins')();

gulp.task('server',function(){
    $.connect.server({
        root:'dist', // 服务器的根目录
        port:8080     //服务器地址，没有此配置项默认也是 8080
    });
});
gulp.task('default',['server']);//运行此任务的时候会在8080上