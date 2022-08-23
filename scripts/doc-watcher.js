'use strict'

const argv = require('minimist')(process.argv.slice(2));
const { mkdir, rm, stat } = require('fs/promises')
const { join, resolve } = require('path')
const readline = require('readline/promises')
const syncDirectory = require('sync-directory')
const docsPath = join(__dirname, '..', 'docs')

async function main() {
  let sourcePath
  if (!argv.source) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const answer = await rl.question('Where is source docs directory? ');
    sourcePath = resolve(process.cwd(), answer)
    if (!await isDirectory(sourcePath)) {
      exit(`${sourcePath} is not a directory`)
    } 
  } else {
    sourcePath = resolve(process.cwd(), argv.source)
  }
  
  await clearDocsDirectory()
  const watcher = syncDirectory(sourcePath, docsPath, {
    watch: true
  })
}

async function isDirectory(target) {
  const stats = await stat(target)
  return stats.isDirectory()
}

async function clearDocsDirectory() {
  try {
    await rm(docsPath, { recursive: true })
  } catch (err) {
    if (err.code === 'ENOENT') {
      // do nothing, dir is already cleared
    } else {
      throw err
    }
  }
  await mkdir(docsPath)
}

function exit(message, code = 1) {
  console.log(message)
  process.exit(code)
}
main()

