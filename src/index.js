#! /usr/local/bin/node

import minimist from 'minimist'
import bugger from 'debug'
import path from 'path'
import fs from 'fs'

import load  from './lib/load.js'
import write from './lib/write.js'
import parse from './lib/parse.js'

const debug = bugger('todo:index')

const source = process.env.TODO_DB || '.todo.json'
const args   = minimist(process.argv.slice(2))
debug('Provided arguments: %o', args)
const tasks  = load(source)
const result = parse(args, tasks)
write(result)
