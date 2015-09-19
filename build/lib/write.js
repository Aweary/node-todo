'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = write;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _utilJs = require('./util.js');

var debug = (0, _debug2['default'])('todo:write');

/**
* Save the updated task list back to the
* database file.
* @param  {[type]} tasks [description]
* @return {[type]}       [description]
*/

function write(tasks) {

  debug('Writing tasks %o', tasks);
  var source = tasks.path;
  var data = tasks.list;
  var task = tasks.current;

  var stream = _fs2['default'].createWriteStream(source);
  var json = JSON.stringify(data);

  stream.end(json);
}

module.exports = exports['default'];