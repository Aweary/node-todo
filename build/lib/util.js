'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _moment = require('moment');

/**
* Format console.log calls for readability and structure
* @param  {String} data message to be logged
*/

var _moment2 = _interopRequireDefault(_moment);

function log(data) {
  var time = (0, _moment2['default'])().format('MM/DD hh:mm:ss:SS');
  var prefix = _chalk2['default'].cyan('[ ' + time + ' ] - ');
  var content = _chalk2['default'].red(data);
  console.log(prefix + content);
}

exports.log = log;