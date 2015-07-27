#! /usr/local/bin/node --harmony
'use strict'

const fs = require('fs')
const path = require('path')
const local = [process.env.HOME, '.tasks', 'list.json']
const source = path.resolve(local.join('/'))

const args = process.argv.slice(2)
const flag = args[0].charAt(0) === '-' ? args[0] : null
const task = flag ? args[1] : args[0]
const group = flag ? args[2] : args[1]

var tasks = []

fs.readFile(source, (err, data) => {
  tasks = err ? [] : tasks.concat(JSON.parse(data))
	if (flag === '-get') {
		console.log(tasks)
		return
	}
  fs.mkdir(local.slice(0, -1).join('/'), (err) => {
    writeTask(tasks)
  })
})

function writeTask(tasks) {

  tasks.push({ title: task, group: group })
  const result = flag === '-clear' ? '[]' : JSON.stringify(tasks)

  fs.writeFile(source, result, (err) => {
    if (err) throw err
  })
}
