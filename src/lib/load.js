import fs from 'fs'
import path from 'path'

export default function load(source) {

  let result = {}

  const windows = process.platform === 'win32'
  const home = windows ? process.env.USERPROFILE
                       : process.env.HOME

  let target = result.path = path.join(home, source)

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
