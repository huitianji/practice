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

/*
* 监控文件的变化s
* */
gulp.task('copy-js',function(){
    console.log("copy");
});


gulp.task('default',function(){
    gulp.watch('app/**/*.js',function(event){
        //event.path   event.type
        //console.log(event.path,event.type);
        switch(event.type){
            case 'added':

                break;
            case 'changed':
                break;
            case 'deleted':
                break;
            default:
                break;
        }
    });
});

