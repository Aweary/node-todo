import fs from 'fs'
import bugger from 'debug'
import { log } from './util.js'

const debug = bugger('todo:write')

/**
* Save the updated task list back to the
* database file.
* @param  {[type]} tasks [description]
* @return {[type]}       [description]
*/

export default function write(tasks) {

  debug('Writing tasks %o', tasks)
  let source = tasks.path
  let data   = tasks.list
  let task   = tasks.current

  let stream = fs.createWriteStream(source)
  let json   = JSON.stringify(data)

  stream.end(json)

}
