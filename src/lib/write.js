import fs from 'fs'
import { log } from './util.js'

/**
* Save the updated task list back to the
* database file.
* @param  {[type]} tasks [description]
* @return {[type]}       [description]
*/

export default function write(tasks) {

  console.log(tasks)
  let source = tasks.path
  let data   = tasks.list
  let task   = tasks.current

  let stream = fs.createWriteStream(source)
  let json   = JSON.stringify(data)

  stream.end(json)

}
