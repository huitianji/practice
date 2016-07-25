var gulp = require("gulp");
/*
*{
* app文件夹下全部都copy过来
* gulp.src('app\/**\/*.js')
* }
* {
* 仅仅要bootstrap\ jquery里面的js
* gulp.src(['app/bootstrap/*.js','app/jquery/*.js'],{base:"app"})
* }
* {
* 所有的js文件。。除了 jquery文件下的js文件
*gulp.src(['app\/**\/*.js','!app/jquery/*.js'],{base:"app"})
* }
* */
gulp.task('1',function(){
    console.log("1");
});
gulp.task('2',function(){
    console.log("2");
});

gulp.task('default',['1','2']);//依赖 1  2  3

