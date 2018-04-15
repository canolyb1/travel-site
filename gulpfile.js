const gulp = require('gulp');
//Styles Tasks
require('./gulp/tasks/styles');

// Watch Tasks
require('./gulp/tasks/watch');

gulp.task('default', ['styles', 'watch']);