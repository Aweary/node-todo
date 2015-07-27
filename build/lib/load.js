'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

exports['default'] = function (source) {

  var data = _fs2['default'].readFileSync(source);
  var result = JSON.parse(data);
  return result;
};

module.exports = exports['default'];