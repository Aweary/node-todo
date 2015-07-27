#! /usr/local/bin/node

import flags from './lib/flags.js'
import load from './lib/load.js'
import parse from './lib/parse.js'
import minimist from 'minimist'
import path from 'path'
import fs from 'fs'

const local  = process.env.TODO_DB || './db/todo.json'
const args   = minimist(process.argv.slice(2))
const source = path.resolve(local)

const tasks  = load(source)
const result = parse(args, tasks)
