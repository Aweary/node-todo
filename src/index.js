#! /usr/local/bin/node

import flags from './lib/flags.js'
import load from './lib/load.js'
import parse from './lib/parse.js'
import minimist from 'minimist'
import path from 'path'
import fs from 'fs'

const source  = process.env.TODO_DB || '.todo.json'
const args   = minimist(process.argv.slice(2))

const tasks  = load(source)
const result = parse(args, tasks)
