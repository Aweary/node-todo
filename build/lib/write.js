'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = write;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _utilJs = require('./util.js');

function write(tasks) {

  var source = tasks.path;
  var data = tasks.list;
  var task = tasks.current;

  var stream = _fs2['default'].createWriteStream(source);
  var json = JSON.stringify(data);

  stream.end(json);
  (0, _utilJs.log)(JSON.stringify(tasks));
}

module.exports = exports['default'];