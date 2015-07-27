#! /usr/local/bin/node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libFlagsJs = require('./lib/flags.js');

var _libFlagsJs2 = _interopRequireDefault(_libFlagsJs);

var _libLoadJs = require('./lib/load.js');

var _libLoadJs2 = _interopRequireDefault(_libLoadJs);

var _libParseJs = require('./lib/parse.js');

var _libParseJs2 = _interopRequireDefault(_libParseJs);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var source = process.env.TODO_DB || '.todo.json';
var args = (0, _minimist2['default'])(process.argv.slice(2));

var tasks = (0, _libLoadJs2['default'])(source);
var result = (0, _libParseJs2['default'])(args, tasks);