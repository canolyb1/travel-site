const gulp = require('gulp');
//Styles Tasks
require('./gulp/tasks/styles');

// Watch Tasks
require('./gulp/tasks/watch');

// Sprite Tasks
require('./gulp/tasks/sprites');

// Scripts Tasks
require('./gulp/tasks/scripts');

// Modernizr Task
require('./gulp/tasks/modernizr');

// Add Build Tasks
require('./gulp/tasks/build');

gulp.task('default', ['styles', 'watch']);