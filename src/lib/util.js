import chalk from 'chalk'
import moment from 'moment'
import Table from 'cli-table'

/**
* Format console.log calls for readability and structure
* @param  {String} data message to be logged
*/

function log(data) {

  let time =  moment().format('MM/DD hh:mm:ss:SS')
  let prefix = chalk.cyan(`[ ${time} ] - `)
  let content = chalk.red(data)
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

  group: function(group) {
    return `No tasks found in group ${group}`
  }
}

export { log, format, err }
