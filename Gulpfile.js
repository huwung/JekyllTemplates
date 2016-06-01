var gulp = require("gulp"),
    minifyHTML = require("gulp-minify-html");

var config = {
  paths: {
    html: {
      src: ["src/**/*.html"],
      dest: "build"
    },
  }
};

gulp.task("html", function(){
  return gulp.src(config.paths.html.src)
    .pipe(minifyHTML())
    .pipe(gulp.dest(config.paths.html.dest));
});
