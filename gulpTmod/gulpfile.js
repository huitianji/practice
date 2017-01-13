var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

gulp.task("default", function () {
    var stream = gulp.src("template/**/*.html")
                    .pipe(
                        $.tmod({
                            templateBase: "template"
                        })
                    )
                    .pipe(
                        gulp.dest("build")
                    );
    return stream;
});