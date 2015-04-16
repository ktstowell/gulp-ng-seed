'use strict';

/***********************************************************************************************************************************************
 * APP_NAME GULP FILE
 ***********************************************************************************************************************************************
 * @description
 */
var gulp = require('gulp');
var connect = require('gulp-connect');

//
// STYLE TASKS
//------------------------------------------------------------------------------------------//
// @description CSS precompilation, etc

//
// SCRIPT TASKS
//------------------------------------------------------------------------------------------//
// @description Linting, concatenation, etc.

//
// CONNECT TASKS
//------------------------------------------------------------------------------------------//
// @description

gulp.task('watch', function() {
  return gulp.watch(['app/app.js', 'app/index.html', 'app/modules/**/*'], function(event) {
    return gulp.src(event.path)
      .pipe(connect.reload());
  });
});

gulp.task('connect', function() {
  return connect.server({
    root: 'app',
    port: 'APP_PORT',
    livereload: true
  });
});

//
// SERVING
//------------------------------------------------------------------------------------------//
// @description Launches app.
gulp.task('serve', ['connect', 'watch']);