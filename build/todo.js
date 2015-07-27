#! /usr/local/bin/node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _libLoadJs = require('../lib/load.js');

var _libLoadJs2 = _interopRequireDefault(_libLoadJs);

console.log(_libLoadJs2['default']);

var local = process.env.TODO_DB || './db/todo.json';
var source = _path2['default'].resolve(local);
var args = process.argv.slice(2);
var flag = args[0].charAt(0) === '-' ? args[0] : null;
var task = flag ? args[1] : args[0];
var group = flag ? args[2] : args[1];

var tasks = [];

_fs2['default'].readFile(source, function (err, data) {
  tasks = err ? [] : tasks.concat(JSON.parse(data));
  if (flag === '-get') {
    console.log(tasks);
    return;
  }
  writeTask(tasks);
});

function writeTask(tasks) {

  tasks.push({ title: task, group: group });
  var result = flag === '-clear' ? '[]' : JSON.stringify(tasks);

  _fs2['default'].writeFile(source, result, function (err) {
    if (err) throw err;
  });
}

