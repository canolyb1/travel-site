const gulp = require('gulp');
//Styles Tasks
require('./gulp/tasks/styles');

// Watch Tasks
require('./gulp/tasks/watch');

// Sprite Tasks
require('./gulp/tasks/sprites');

// Scripts Tasks
require('./gulp/tasks/scripts');

gulp.task('default', ['styles', 'watch']);