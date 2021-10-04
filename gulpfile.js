var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var minifyCSS = require("gulp-minify-css");

const csspath = "src/assets/css/**/*/.css";

gulp.task("hello", async function () {
  console.log("Hello Zell");
});

gulp.task("sass", async function () {
  return gulp
    .src("SCSS/main.scss")
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest("CSS"));
});

gulp.task("minify-css", function () {
  return gulp
    .src("dist/main.css")
    .pipe(
      minifyCSS({
        keepBreaks: true,
      })
    )
    .pipe(gulp.dest("dist"));
});
