'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = parse;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _flagsJs = require('./flags.js');

var _flagsJs2 = _interopRequireDefault(_flagsJs);

var _utilJs = require('./util.js');

var debug = (0, _debug2['default'])('todo:parse');

/**
*
* Takes the CLI arguments and the parsed database
* object and determines the appropiate action based
* on the invocation. Returns the
*  modified databse object
* which will then be written back to the specified
* database file path immediately afterwards
*
* @param  {Object} args  minimist arguments
* @param  {Array} tasks list of existing tasks
* @return {Object}      database object
*/

function parse(args, source) {

  var tasks = source.list;
  var newGroup = false;
  var clearGroup = args.c || args.clear;
  debug('The clearGroup is %o', clearGroup);

  /* Output all registered tasks by group */
  if (args.list || args.l) {
    var list = args.list || args.l;
    var _group = list === true ? '_' : list;
    var target = tasks[_group];
    var output = target ? _utilJs.format.task(_group, target) : _utilJs.err.group(_group);
    (0, _utilJs.log)(output);
    return source;
  }
  /* Clear all tasks */
  if (clearGroup) {
    clearGroup === true ? source.list = {} : source.list[clearGroup] = [];
    return source;
  }

  /* If no registered flag is found, default to adding a task */

  var group = args.g || args.group || '_';
  var due = args.d || args.due || null;
  var task = args._.join(' ');

  if (group === true) group = '_';

  if (!tasks[group] || clearGroup) {
    debug('Re/creating group %o', group);
    newGroup = true;
    tasks[group] = [];
  }

  debug('Adding task %o to group %o', task, group);

  tasks[group].push({ task: task, due: due });

  (0, _utilJs.log)((newGroup ? 'Created group' : 'Added') + ' ' + task);
  return source;
}

module.exports = exports['default'];