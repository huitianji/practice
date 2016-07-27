var gulp = require("gulp");
var path = require("path");
var fs = require("fs");
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
* 监控文件的变化
* */
gulp.task('copy-js',function(){
    gulp.src('app/**/*.js')
        .pipe(
            gulp.dest('dist')
        );
});

gulp.task('default',['copy-js'],function(){
    gulp.watch('app/**/*.js',function(event){
        //event.path   event.type
        console.log(event.path,event.type);
        console.log(path.resolve('app'));
        console.log(event.path.slice(path.resolve('app').length));
        console.log(path.join('dist',
            event.path.slice(path.resolve('app').length)
        ));
        switch(event.type){
            case 'added':
                /*
                fs.createReadStream(event.path).pipe(
                    fs.createWriteStream(
                        path.join('dist',
                            event.path.slice(path.resolve('app').length)
                        )
                    )
                );
                */
                fs.readFile(event.path,function(err,data){
                    fs.writeFile(path.join('dist',
                        event.path.slice(path.resolve('app').length)
                    ))
                });
                break;
            case 'changed':
                fs.createReadStream(event.path).pipe(
                    fs.createWriteStream(path.join('dist',
                        event.path.slice(path.resolve('app').length)
                    ))
                );
                break;
            case 'deleted':
                fs.unlink(path.join('dist',
                    event.path.slice(path.resolve('app').length)
                ));
                break;
            default:
                break;
        }
    });
});

