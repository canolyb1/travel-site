const gulp = require('gulp'),
browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    },
    browser: ['chrome']
  });

  gulp.watch('./app/index.html', ['html']);
  gulp.watch('app/assets/styles/**/*.css', ['cssInject']);
});

// set up css inject, styles is a dependency that gets run first.
gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('html', () => {
  browserSync.reload();
});