#!/usr/bin/env node

/***********************************************************************************************************************************************
 *  GULP NG SEED CLI
 ***********************************************************************************************************************************************
 * @description
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
var chalk = require('chalk');
var Liftoff = require('liftoff');
var interpret = require('interpret');
var v8flags = require('v8flags');
var replace = require('gulp-replace');
var sequence = require('run-sequence').use(gulp);
var argv = require('minimist')(process.argv.slice(2));
var OS = require('os');
var run = require('gulp-run');
var cwd = argv.cwd || process.cwd();

//
// SET UP
//------------------------------------------------------------------------------------------//
// @description
process.chdir(cwd);

//
// SEED CONFIG
//------------------------------------------------------------------------------------------//
// @description
var Seed = {
  name: 'gulpNgSeed', // Default name,
  paths: {src: __dirname+'/../', dest: cwd}
};

// Name
Seed.name = argv._[0] || Seed.name;
Seed.paths.separator = OS.platform().match('win')? '\\' : '/';
Seed.paths.src = Seed.paths.src + Seed.paths.separator + 'seed'+ Seed.paths.separator +'**' + Seed.paths.separator + '*';
Seed.paths.dest = Seed.paths.dest + Seed.paths.separator  +Seed.name;

//
// SEED TASKS
//------------------------------------------------------------------------------------------//
// @description
gulp.task('seed', function() {
  return gulp.src(Seed.paths.src)
    .pipe(replace(/APP_NAME/g, Seed.name))
    //.pipe(run('echo foo').exec())
    .pipe(gulp.dest(Seed.paths.dest));
});

//
// SEED SEQUENCE
//------------------------------------------------------------------------------------------//
// @description
sequence('seed');

