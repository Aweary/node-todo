'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = parse;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _taskJs = require('./task.js');

var _taskJs2 = _interopRequireDefault(_taskJs);

var _flagsJs = require('./flags.js');

/**
* parse a todo instance from the arguments
* @param  {Object} args  minimist arguments
* @param  {Array} tasks list of existing tasks
* @return {Object}       todo instance
*/

var _flagsJs2 = _interopRequireDefault(_flagsJs);

function parse(args, tasks) {
  var content = args._;
  tasks.current = content[0];
  console.log(tasks.current);
  tasks.push(content);
}

module.exports = exports['default'];