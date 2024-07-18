'use strict'
const { exit } = require('./utils')
const semverGt = require('semver/functions/gt')

const argv = require('minimist')(process.argv.slice(2))

if (!argv.from) {
  exit('Please provide "from" argument.')
}

if (!argv.to) {
  exit('Please provide "to" argument.')
}

if (semverGt(argv.to, argv.from)) {
  console.log('true')
} else {
  console.log('false')
}
