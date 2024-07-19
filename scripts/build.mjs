import { execa } from 'execa'
import { mkdir, rename, rm, writeFile } from 'node:fs/promises'
import { basename, resolve } from 'node:path'
import { Agent, interceptors, request } from 'undici'

const rootDir = process.cwd()
const tmpDir = resolve(rootDir, 'tmp')

async function ensureEmptyDirectory (directory) {
  await rm(directory, { force: true, recursive: true })
  await mkdir(directory, { force: true, recursive: true })
}

async function execute (errorPrefix, cmd, ...args) {
  const { exitCode, all } = await execa(cmd, args, { all: true })

  if (exitCode !== 0) {
    throw new Error(
      `${errorPrefix}: Process exited with code ${exitCode}.\n\n--- Process stdout and stderr ---\n\n${all}`
    )
  }
}

async function downloadVersion (version) {
  console.log('  Downloading ...')

  const ref = version === 'main' ? 'heads/main' : `tags/v${version}`

  // Download the source
  const { statusCode, body } = await request(
    `https://github.com/${process.env.TARGET_REPO}/archive/refs/${ref}.zip`,
    {
      dispatcher: new Agent().compose(
        interceptors.redirect({ maxRedirections: 10 })
      )
    }
  )

  if (statusCode !== 200) {
    throw new Error(
      `Cannot download version ${version} from GitHub: [HTTP ${statusCode}]\n\n${await body.text()}`
    )
  }

  return Buffer.from(await body.arrayBuffer())
}

async function extractAndPrepareVersion (repo, destination, sidebarsDestination, version, buffer) {
  console.log('  Extracting ...')

  // Prepare some paths
  const archiveFile = resolve(tmpDir, `version-${version}.zip`)
  const sidebarsSource = resolve(destination, 'sidebars.js')
  const baseFolder = `${basename(repo)}-${version}`

  // Write the file to the tmp folder
  await writeFile(archiveFile, buffer)

  // Unzip
  await ensureEmptyDirectory(destination)
  await execute('Cannot extract archive', 'unzip', '-d', tmpDir, archiveFile)

  // Move to versioned_docs
  await rm(destination, { force: true, recursive: true })
  await rename(resolve(tmpDir, baseFolder, 'docs'), destination)

  // Move the sidebars.js file to a JSON file
  const sidebars = await import(sidebarsSource)
  await writeFile(sidebarsDestination, JSON.stringify(sidebars.default, null, 2), 'utf-8')
  await rm(sidebarsSource)
}

async function main () {
  if (!process.env.TARGET_REPO || !process.env.GH_API_TOKEN) {
    throw new Error(
      'Please set the TARGET_REPO and GH_API_TOKEN environment variables'
    )
  }

  if (process.argv.length === 2) {
    throw new Error('Please specify the version to build in the command line.')
  }

  await ensureEmptyDirectory(tmpDir)
  await ensureEmptyDirectory(resolve(rootDir, 'versioned_docs'))
  await ensureEmptyDirectory(resolve(rootDir, 'versioned_sidebars'))

  const versions = process.argv.slice(2)
  for (const version of versions) {
    console.log(`Creating version ${version} ...`)

    // Download the source
    const contents = await downloadVersion(version)
    const destination = resolve(rootDir, version === 'main' ? 'docs' : `versioned_docs/version-${version}`)
    const sidebarsDestination = resolve(rootDir, version === 'main' ? 'sidebars.json' : `versioned_sidebars/version-${version}-sidebars.json`)

    // Extract the contents
    await extractAndPrepareVersion(process.env.TARGET_REPO, destination, sidebarsDestination, version, contents)
  }

  // Create the versions file
  await writeFile(resolve(rootDir, 'versions.json'), JSON.stringify(versions.filter(v => v !== 'main'), null, 2), 'utf-8')

  // Build using docusaurus
  console.log('Building ...')
  await execute('Cannot build documentation', 'docusaurus', 'build')
}

try {
  await main()
} finally {
  await rm(tmpDir, { force: true, recursive: true })
}
