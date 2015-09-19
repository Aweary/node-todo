import bugger from 'debug'
import flags   from './flags.js'
import { log, format, err } from './util.js'
const debug = bugger('todo:parse')

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
  let clearGroup = args.c || args.clear
  debug('The clearGroup is %o', clearGroup)

  /* Output all registered tasks by group */
  if (args.list || args.l) {
    let list   = args.list || args.l
    let group  = list === true ? '_' : list
    let target = tasks[group]
    if (target !== undefined) {
      target.length
          ? log(format.task(group, target))
          : log(err.group(group, true))
    }
    else log(err.group(group))
    return source
  }
  /* Clear all tasks */
  if (clearGroup) {
    debug('Clearing group %o', clearGroup)
    clearGroup === true
        ? source.list = {}
        : source.list[clearGroup] = []
    return source
  }

  /* If no registered flag is found, default to adding a task */

  let group = args.g || args.group || '_'
  let due   = args.d || args.due || null
  let task  = args._.join(' ')

  if (group === true) group = '_'

  if (!tasks[group] || clearGroup) {
    debug('Re/creating group %o', group)
    newGroup = true
    tasks[group] = []
  }

  debug('Adding task %o to group %o', task, group)


  tasks[group].push({task, due})

  log(`Added task "${task}" to ${newGroup ? 'new ' : ''}group "${group}"`)
  return source
}
