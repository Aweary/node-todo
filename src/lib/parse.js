import flags   from './flags.js'
import { log, format, err } from './util.js'

/**
*
* Takes the CLI arguments and the parsed database
* object and determines the appropiate action based
* on the invocation. Returns the
*  modified databse object
* which will then be written back to the specified
* database file path immediately afterwards
*
* @param  {Object} args  minimist arguments
* @param  {Array} tasks list of existing tasks
* @return {Object}      database object
*/

export default function parse(args, source) {

  let tasks = source.list
  let newGroup = false

  /* Output all registered tasks by group */
  if (args.list || args.l) {
    let list   = args.list || args.l
    let group  = list === true ? '_' : list
    let target = tasks[group]
    let output = target ? format.task(group, target)
                        : err.group(group)
    log(output)
    return source
  }
  /* Clear all tasks */
  if (args.c || args.clear) {
    log('Cleared all tasks')
    source.list = {}
    return source
  }

  /* If no registered flag is found, default to adding a task */

  let group = args.g || args.group || '_'
  let due   = args.d || args.due || null
  let task  = args._.join(' ')
  console.log('tasks...', tasks[group]);

  if (!tasks[group]) {
    console.log('This is a new task')
    newGroup = true
    tasks[group] = []
  }
  tasks[group].push({task, due})

  log(`${newGroup ? 'Create group' : 'Added'} ${task}`)
  return source
}
