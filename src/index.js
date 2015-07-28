#! /usr/local/bin/node

import minimist from 'minimist'
import path from 'path'
import fs from 'fs'

import flags from './lib/flags.js'
import load from './lib/load.js'
import write from './lib/write.js'
import parse from './lib/parse.js'

const source  = process.env.TODO_DB || '.todo.json'
const args   = minimist(process.argv.slice(2))
const tasks  = load(source)

parse(args, tasks.list)
write(tasks)
