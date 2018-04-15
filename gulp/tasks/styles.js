const gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
sourcemaps = require('gulp-sourcemaps'),
cssImport = require('postcss-import'),
plumber = require('gulp-plumber'),
notify = require('gulp-notify'),
mixins = require('postcss-mixins');

// Plumber will display errors and end the task so the watch doesnt exit, additionally notify will output a popup
const plumberOptions = {
  errorHandler: (err) => {
    notify.onError({
      title: "Gulp error in " + err.plugin,
      message:  err.toString()
    })(err);
  }
};


gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(plumber(plumberOptions))
    .pipe(sourcemaps.init())
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    // User Gulp Plumber instead.
    // .on('error', function(err) { 
    //   console.log(err.toString());
    //   this.emit('end');
    //   })
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/temp/styles/'));
});

