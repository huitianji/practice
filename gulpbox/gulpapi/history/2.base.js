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
gulp.task('default',function(){
    gulp.src(['app/bootstrap/*.js','!app/jquery/*.js'],{base:"app"})//有通配符开始出现的那部分路径为 '**/*.js'
         .pipe(gulp.dest('dist'));//最后生成的文件路径为 dist/**/*.js
    //如果 **/*。js 匹配到的文件为 jquery/jquery.js,则生成的文件路径为dist/jquery/jquery.js
});

