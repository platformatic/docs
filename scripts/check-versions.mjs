import { deepStrictEqual } from 'node:assert'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { parse } from 'semver'
import { request } from 'undici'

async function getLocalReleases () {
  return JSON.parse(await readFile(resolve(import.meta.dirname, '..', 'versions.json'), 'utf-8'))
}

// See: https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api?apiVersion=2022-11-28
function parseLinks (header) {
  if (!header) {
    return {}
  }

  return Object.fromEntries(
    header
      .split(',')
      .map((link) => {
        const mo = link.trim().match(/^<(.+)>; rel="(.+)"$/)
        return mo ? [mo[2], mo[1]] : null
      })
      .filter((link) => link)
  )
}

async function listAllReleases () {
  const releases = []

  let url = `https://api.github.com/repos/${process.env.TARGET_REPO}/releases?per_page=100`

  // Repeat for all version
  while (url) {
    // Validate the environment variables
    if (!process.env.TARGET_REPO || !process.env.GH_API_TOKEN) {
      throw new Error(
        'Please set the TARGET_REPO and GH_API_TOKEN environment variables'
      )
    }

    // Perform the request
    const { statusCode, headers, body } = await request(url, {
      headers: {
        accept: 'application/vnd.github+json',
        authorization: `Bearer ${process.env.GH_API_TOKEN}`,
        'x-github-api-version': '2022-11-28',
        'user-agent': 'platformatic-docs/1.0.0'
      }
    })

    if (statusCode !== 200) {
      throw new Error(
        `GitHub API call failed: [HTTP ${statusCode}]\n\n${await body.text()}`
      )
    }

    url = parseLinks(headers.link).next
    releases.push(...(await body.json()))
  }

  return releases
}

async function getRemoteReleases (toKeep = 5) {
  const allRelease = await listAllReleases()
  const validReleases = allRelease
    .filter((r) => !r.draft && !r.prerelease)
    .map((r) => parse(r.tag_name.replace(/^v/, '')))

  // Keep one at last one version per major
  let previousMajor = validReleases[0].major - 1

  const previousReleases = []
  for (const release of validReleases) {
    // Ignore 0.x branch
    if(release.major === 0) {
      break
    }

    if (release.major === previousMajor) {
      previousReleases.push(release)
      previousMajor--
    }
  }

  return [...validReleases.slice(0, 5), ...previousReleases].map(r => r.version)
}

async function main () {
  // Check local releases
  const locals = await getLocalReleases()

  // Get remote releases
  const remotes = await getRemoteReleases()

  let needsUpdate = false

  try {
    deepStrictEqual(locals, remotes)
  } catch {
    needsUpdate = true
  }

  // Output
  console.log(`local-versions=${locals.join(', ')}`)
  console.log(`remote-versions=${remotes.join(', ')}`)
  console.log(`build-arg=${remotes.join(' ')}`)
  console.log(`tag=v${remotes.join('-')}`)
  console.log(`needs-update=${needsUpdate}`)
}

await main()
