import fs from 'fs'

export default function(source) {

  let data = fs.readFileSync(source)
  let result = JSON.parse(data)
  return result

}
