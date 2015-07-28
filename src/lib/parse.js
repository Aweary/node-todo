import Task from './task.js'
import flags from './flags.js'

/**
* parse a todo instance from the arguments
* @param  {Object} args  minimist arguments
* @param  {Array} tasks list of existing tasks
* @return {Object}       todo instance
*/

export default function parse(args, tasks) {
  let content = args._
  tasks.current = content[0]
  console.log(tasks.current)
  tasks.push(content)

}
