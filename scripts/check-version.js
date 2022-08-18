'use srtict';

const argv = require('minimist')(process.argv.slice(2));
const { join, resolve } = require('path')
const { readFile } = require('fs/promises')
const { getLatestRelease } = require('./gh-helper')
const { exit } = require('./utils')
async function main() {
  if (!argv.type) {
    exit('Please provide type argument. Allowed values: docs | remote')
  }
  switch(argv.type) {
    case 'docs':
      const latestVersion = await getLatestVersion()
      console.log(latestVersion)
      break
    case 'remote':
      const latestRelease = await getLatestRelease()
      console.log(getSemver(latestRelease.tag_name))
      break
    default:
      exit(`Invalid type argument: ${argv.type}`)
  }
  
}
function getSemver(str) {
  const match = str.match(/([0-9]+)\.([0-9]+)\.([0-9]+)$/)
  if (match) {
    return match[0]
  }
  return false
}
async function getLatestVersion() {
  const versions = await getAvailableVersions()
  return versions[0]
}
async function getAvailableVersions() {
  const filePath = resolve(__dirname, '..', 'versions.json')
  const fileData = await(readFile(filePath))
  return JSON.parse(fileData)
}


main()