'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = parse;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _flagsJs = require('./flags.js');

var _flagsJs2 = _interopRequireDefault(_flagsJs);

var _utilJs = require('./util.js');

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
  if (args.c || args.clear) {
    (0, _utilJs.log)('Cleared all tasks');
    source.list = {};
    return source;
  }

  /* If no registered flag is found, default to adding a task */

  var group = args.g || args.group || '_';
  var due = args.d || args.due || null;
  var task = args._.join(' ');
  console.log('tasks...', tasks);

  if (!tasks[group]) {
    console.log('This is a new task');
    newGroup = true;
    tasks[group] = [];
  }
  tasks[group].push({ task: task, due: due });

  (0, _utilJs.log)((newGroup ? 'Create group' : 'Added') + ' ' + task);
  return source;
}

module.exports = exports['default'];