'use strict'
const github = require('octonode')

const token = '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'
const client = github.client(token)

async function getAllReleases () {
  const repo = client.repo('platformatic/release-tester')

  const result = await repo.releasesAsync()
  return result
}

async function getLatestRelease() {
  const releases = await getAllReleases()
  return releases[0][0]
}

module.exports = {
  getLatestRelease,
  getAllReleases
}