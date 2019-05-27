const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

const paths = {
  css: {
    src: ["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"],
    dest: ["src/css"]
  },
  js: {
    src: [
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/popper.js/dist/popper.min.js"
    ],
    dest: ["src/js"]
  }
};

// Compile sass into CSS & stream changes to browser
function style() {
  return (
    gulp
      .src(paths.css.src)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(paths.css.dest))
      // stream changes to all browser
      .pipe(browserSync.stream())
  );
}

// Move the javascript files into our /src/js folder
function js() {
  return gulp
    .src(paths.js.src)
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream());
}

// browserSync reload function
function reload() {
  browserSync.reload();
}

// Static Server + watching scss/html files
function watch() {
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });

  gulp.watch(paths.css.src, style);
  gulp.watch(paths.js.src, reload);
  gulp.watch("src/*.html", reload);
}

exports.style = style;
exports.js = js;
exports.watch = watch;
