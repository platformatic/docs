'use strict'
const { join } = require('node:path')
const { readFile, writeFile, readdir, unlink, rmdir, rm } = require('node:fs/promises') 
const { parseArgs } = require('node:util')

const parseArgsOptions = {
  'dry-run': {
    type: 'boolean',
    default: false
  },
  'keep': {
    type: 'string',
    default: '5'
  }
}

async function main() {
  const {
    values
  } = parseArgs({ options: parseArgsOptions })
  const versionsToKeep = await purgeVersionsJsonFile(values.keep, values['dry-run'])
  await purgeDirectories(versionsToKeep, values['dry-run'])
}

async function purgeVersionsJsonFile(numberOfOldVersionToKeep, dryRun) {
  const versionsFile = join(__dirname, '..', 'versions.json')
  const versionsArray = JSON.parse(await readFile(versionsFile, 'utf8'))
  const newVersions = versionsArray.slice(0, numberOfOldVersionToKeep)
  if (!dryRun) {
    await writeFile(versionsFile, JSON.stringify(newVersions, null, 2))
  } else {
    console.log(`Would keep only the following versions in versions.json file: ${newVersions.join(', ')}`)
  }
  return newVersions
}

async function purgeDirectories(versionsToKeep = [], dryRun) {
  const versionsFolder = join(__dirname, '..', 'versioned_docs')
  const sidebarsFolder = join(__dirname, '..', 'versioned_sidebars')
  const entries = await readdir(versionsFolder)

  for (const dir of entries) {
    const flat = versionsToKeep.join('|').replace(/\./g, '\\.')
    const re = new RegExp(`(${flat})`)
    if (!dir.match(re)) {
      if (dryRun) {
        console.log(`Would delete ${dir} directory`)
      } else {
        await rm(join(versionsFolder, dir), { recursive: true })
        await rm(join(sidebarsFolder, `${dir}-sidebars.json`))
      }
    }
  }
}

main()