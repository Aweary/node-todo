import chalk from 'chalk'
import moment from 'moment'
import Table from 'cli-table'
import bugger from 'debug'

const debug = bugger('todo:util')

/**
* Format console.log calls for readability and structure
* @param  {String} data message to be logged
*/

function log(data) {

  let time =  moment().format('MM/DD hh:mm:ss:SS')
  let prefix = chalk.cyan(`[ ${time} ] - `)
  let content = chalk.red(data)
  debug('Logging out content %o', data)
  console.log(content)

}

/**
 * A collection of utility functions for formatting
 * logged output.
 * @type {Object}
 */

const format = {

  task: function(group, source) {

    return source.map(item => {
      return `@${group} - ${item.task}`
    }).join('\n')
  }
}

/**
 * A collection of error templates
 * @type {Object}
 */

const err = {

  group: function(group, exists) {
    let output = group == '_'
        ? 'general group'
        : group
    let message = exists
        ? `No tasks found in ${output}`
        : `Group "${output}" doesn't exist`
    return message
  }
}

export { log, format, err }
