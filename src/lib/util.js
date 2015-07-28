import chalk from 'chalk'
import moment from 'moment'

/**
* Format console.log calls for readability and structure
* @param  {String} data message to be logged
*/

function log(data) {
  let time =  moment().format('MM/DD hh:mm:ss:SS')
  let prefix = chalk.cyan(`[ ${time} ] - `)
  let content = chalk.red(data)
  console.log(prefix + content)
}

export { log }
