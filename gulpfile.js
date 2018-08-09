var gulp = require('gulp'),
    browserSync = require('browser-sync').create();
var SERVER_PORT = 4000;

var paths = [
  "./src/css/*.css",
  "./src/js/*.js",
  "./src/*.html"
];

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: './src',
      startPath: './src/index.html'
    },
    open: true,
    port: SERVER_PORT
  });
});

gulp.task('watch', function() {
  gulp.watch(paths).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);
