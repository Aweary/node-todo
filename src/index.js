#! /usr/local/bin/node

import minimist from 'minimist'
import path from 'path'
import fs from 'fs'

import load  from './lib/load.js'
import write from './lib/write.js'
import parse from './lib/parse.js'

const source = process.env.TODO_DB || '.todo.json'
const args   = minimist(process.argv.slice(2))

const tasks  = load(source)
const result = parse(args, tasks)
write(result)
