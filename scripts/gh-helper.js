'use strict'
const github = require('octonode')

const token = process.env.GH_API_TOKEN
const client = github.client(token)
class NoReleasesFoundError extends Error {
  constructor() {
    super('No releases found.')
    this.code = 'ENORELEASES'
  }
}
async function getAllReleases () {
  const repo = client.repo(process.env.TARGET_REPO)

  const result = await repo.releasesAsync()
  return result
}

async function getLatestRelease() {
  const releases = await getAllReleases()
  if (releases[0].length === 0) {
    throw new NoReleasesFoundError()
  }
  return releases[0][0]
}

module.exports = {
  getLatestRelease,
  getAllReleases
}