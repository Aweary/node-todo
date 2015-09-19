'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = load;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

/**
 * Loads in the database file in a platform
 * agnostic way. If the file is unreadable
 * for some reason, it instantiates a new
 * list that will be passed to the write function
 * after saving all new tasks.
 *
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */

var _path2 = _interopRequireDefault(_path);

function load(source) {

  var result = {};

  /* Check platform for home folder location */
  var windows = process.platform === 'win32';
  var home = windows ? process.env.USERPROFILE : process.env.HOME;

  var target = result.path = _path2['default'].join(home, source);

  /* Attempt to parse database JSON file */
  try {
    var data = _fs2['default'].readFileSync(target);
    var list = JSON.parse(data);
    result.list = list;
  } catch (err) {
    console.log('todo.json database file unreadable or not found');
    result.list = {};
  }

  return result;
}

module.exports = exports['default'];