'use strict'
const github = require('octonode')

const token = process.env.GH_API_TOKEN
const client = github.client(token)

async function getAllReleases () {
  const repo = client.repo(process.env.TARGET_REPO)

  const result = await repo.releasesAsync()
  return result
}

async function getLatestRelease() {
  const releases = await getAllReleases()
  if (releases[0].length === 0) {
    throw new Error('No releases found.')
  }
  return releases[0][0]
}

module.exports = {
  getLatestRelease,
  getAllReleases
}