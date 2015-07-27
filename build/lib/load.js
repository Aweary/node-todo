'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

exports['default'] = function (source) {

  var data = [];
  var exists = true;

  var windows = process.platform == 'win32';
  var home = windows ? process.env.USERPROFILE : process.env.HOME;

  var target = _path2['default'].join(home, source);

  try {
    _fs2['default'].lstatSync(target);
  } catch (err) {
    exists = false;
  }

  if (!exists) data = _fs2['default'].readFileSync(target);

  var result = !exists ? JSON.parse(data) : data;
  return result;
};

module.exports = exports['default'];