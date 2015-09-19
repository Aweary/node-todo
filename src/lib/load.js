import fs from 'fs'
import path from 'path'

/**
 * Loads in the database file in a platform
 * agnostic way. If the file is unreadable
 * for some reason, it instantiates a new
 * list that will be passed to the write function
 * after saving all new tasks.
 *
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */

export default function load(source) {

  let result = {}

  /* Check platform for home folder location */
  const windows = process.platform === 'win32'
  const home = windows ? process.env.USERPROFILE
                       : process.env.HOME

  let target = result.path = path.join(home, source)

  /* Attempt to parse database JSON file */
  try {
    const data = fs.readFileSync(target)
    const list = JSON.parse(data)
    result.list = list
  }
  catch (err) {
    console.log('todo.json database file unreadable or not found')
    result.list = {}
  }

  return result

}
