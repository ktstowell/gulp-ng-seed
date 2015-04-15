#!/usr/bin/env node

/***********************************************************************************************************************************************
 *  GULP NG SEED CLI
 ***********************************************************************************************************************************************
 * @description
 */

var gutil = require('gulp-util');
var chalk = require('chalk');
var Liftoff = require('liftoff');
var interpret = require('interpret');
var v8flags = require('v8flags');
var argv = require('minimist')(process.argv.slice(2));

// set env var for ORIGINAL cwd
// before anything touches it
process.env.INIT_CWD = process.cwd();

var cli = new Liftoff({
  name: 'gulp-ng-seed',
  extensions: interpret.jsVariants,
  v8flags: v8flags
});

cli.on('require', function (name) {
  gutil.log('Requiring external module', chalk.magenta(name));
});

cli.on('requireFail', function (name) {
  gutil.log(chalk.red('Failed to load external module'), chalk.magenta(name));
});

cli.on('respawn', function (flags, child) {
  var pid = chalk.magenta(child.pid);
  gutil.log('Respawned to PID:', pid);
});

cli.launch({
  cwd: argv.cwd,
  configPath: argv.gulpfile,
  require: argv.require,
  completion: argv.completion
}, log);

function log(env) {
  gutil.log('Env: ', env);
}