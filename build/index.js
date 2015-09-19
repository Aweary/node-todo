#! /usr/local/bin/node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _libLoadJs = require('./lib/load.js');

var _libLoadJs2 = _interopRequireDefault(_libLoadJs);

var _libWriteJs = require('./lib/write.js');

var _libWriteJs2 = _interopRequireDefault(_libWriteJs);

var _libParseJs = require('./lib/parse.js');

var _libParseJs2 = _interopRequireDefault(_libParseJs);

var debug = (0, _debug2['default'])('todo:index');

var source = process.env.TODO_DB || '.todo.json';
var args = (0, _minimist2['default'])(process.argv.slice(2));
debug('Provided arguments: %o', args);
var tasks = (0, _libLoadJs2['default'])(source);
var result = (0, _libParseJs2['default'])(args, tasks);
(0, _libWriteJs2['default'])(result);