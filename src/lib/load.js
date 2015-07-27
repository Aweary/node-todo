import fs from 'fs'
import path from 'path'

export default function(source) {

  let data = []
  let exists = true

  const windows = process.platform == 'win32'
  const home = windows ? process.env.USERPROFILE
                       : process.env.HOME

  const target = path.join(home, source)

  try { fs.lstatSync(target) }
  catch (err) { exists = false }

  if (!exists) data = fs.readFileSync(target)

  const result = !exists ? JSON.parse(data) : data
  return result

}
