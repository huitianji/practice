var gulp = require("gulp");
var $ = require('gulp-load-plugins')();

gulp.task('imagemin',function(){
     gulp.src('app/images/*.{jpg,png,gif}')
        .pipe($.imagemin())
        .pipe(
            gulp.dest('dist/images')
        );
});


gulp.task('default',['imagemin']);