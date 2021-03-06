'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _cliTable = require('cli-table');

var _cliTable2 = _interopRequireDefault(_cliTable);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var debug = (0, _debug2['default'])('todo:util');

/**
* Format console.log calls for readability and structure
* @param  {String} data message to be logged
*/

function log(data) {

  var time = (0, _moment2['default'])().format('MM/DD hh:mm:ss:SS');
  var prefix = _chalk2['default'].cyan('[ ' + time + ' ] - ');
  var content = _chalk2['default'].red(data);
  debug('Logging out content %o', data);
  console.log(content);
}

/**
 * A collection of utility functions for formatting
 * logged output.
 * @type {Object}
 */

var format = {

  task: function task(group, source) {

    return source.map(function (item) {
      return '@' + group + ' - ' + item.task;
    }).join('\n');
  }
};

/**
 * A collection of error templates
 * @type {Object}
 */

var err = {

  group: function group(_group, exists) {
    var output = _group == '_' ? 'general group' : _group;
    var message = exists ? 'No tasks found in ' + output : 'Group "' + output + '" doesn\'t exist';
    return message;
  }
};

exports.log = log;
exports.format = format;
exports.err = err;