const gulp = require('gulp'),
imagemin = require('gulp-imagemin')
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'dist'
    },
    browser: ['chrome']
  });
});

gulp.task('deleteDist', () => {
  return del('./dist');
});

gulp.task('copyGeneralFiles', ['deleteDist'], () => {
  const pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]
  return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./dist'));
});

gulp.task('optimizeImages', ['deleteDist', 'icons'], ()=> {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true, // Optimize jpeg further
      interlaced: true, // Interlace GIFs
      multipass: true // SVG files
    }))
    .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin', ['deleteDist', 'styles', 'scripts'], () => {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [() => rev(), () => cssnano()],
      js: [() => rev(), () => uglify()]
    }))
    .pipe(gulp.dest('./dist'));
});


gulp.task('build', ['deleteDist', 'copyGeneralFiles', 'optimizeImages', 'usemin']);