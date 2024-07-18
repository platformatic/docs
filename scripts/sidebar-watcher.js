'use strict'

const fs = require('fs')
const path = require('path')

const platformaticDocsPath = path.resolve(__dirname, '..', '..', 'platformatic', 'docs', 'sidebars.js')

const ossSidebarPath = path.resolve(__dirname, '..', 'sidebars.js')

function copySidebarFile () {
  try {
    fs.copyFileSync(platformaticDocsPath, ossSidebarPath)
    console.log('sidebars.js has been copied from platformatic/docs to oss')
  } catch (err) {
    console.error('Failed to copy sidebars.js:', err)
  }
}

fs.watch(platformaticDocsPath, (eventType, filename) => {
  if (eventType === 'change') {
    console.log(`${filename} has been changed, updating the oss/sidebar.js`)
    copySidebarFile()
  }
})

console.log(`Watching for changes in ${platformaticDocsPath}`)
