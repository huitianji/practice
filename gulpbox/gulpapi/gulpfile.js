var gulp = require("gulp");
var fs = require("fs");
var path = require("path");
//var $ = require('gulp-load-plugins')();
//console.log(path.join(path.resolve('../'),'package.json'));
//console.log(path.resolve('../','package.json'));
//console.log(fs.readFileSync('../package.json'));
//console.log(JSON.parse(fs.readFileSync(path.resolve('../','package.json'))).devDependencies);

var $ = load();
function load(){
    //var devDependencies = JSON.parse(fs.readFileSync('package.json').devDependencies);//同步
    var devDependencies = JSON.parse(//同步
        fs.readFileSync(
            path.resolve('../','package.json')
        )
    ).devDependencies;
    console.log(
        JSON.parse(
            fs.readFileSync(
                //path.resolve('../','package.json')
                 path.join(path.resolve('../'),'package.json')
                ,'utf8'
            )
        ).devDependencies
    );
    var $ = {};
    for(var attr in devDependencies){
        if(attr.indexOf('gulp-')==0){
            $[attr.slice(5)] = require(attr);
        }
    }
    return $;
}

gulp.task('default',function(){
    gulp.src('app/*.js')
        .pipe($.concat("all.js"))//合并
        .pipe(
            gulp.dest('dist')
        );
});





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


