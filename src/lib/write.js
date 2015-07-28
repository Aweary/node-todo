import fs from 'fs'
import { log } from './util.js'

export default function write(tasks) {

  let source = tasks.path
  let data = tasks.list
  let task = tasks.current

  let stream = fs.createWriteStream(source)
  let json = JSON.stringify(data)

  stream.end(json)
  log(JSON.stringify(tasks))
}
