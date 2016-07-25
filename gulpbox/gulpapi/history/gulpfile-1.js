var gulp = require("gulp");

gulp.task('default',function(){
    gulp.src(['app/src.js','app/src2.js'])//获取文件的流api
         .pipe(gulp.dest('dist'));//写入文件的api
});

