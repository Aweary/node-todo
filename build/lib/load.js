'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = load;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function load(source) {

  var exists = true;
  var result = {};

  var windows = process.platform == 'win32';
  var home = windows ? process.env.USERPROFILE : process.env.HOME;

  var target = result.path = _path2['default'].join(home, source);

  try {
    var data = _fs2['default'].readFileSync(target);
    var list = JSON.parse(data);
    result.list = list;
  } catch (err) {
    console.log('todo.json database file unreadable or not found');
    result.list = [];
  }

  return result;
}

module.exports = exports['default'];