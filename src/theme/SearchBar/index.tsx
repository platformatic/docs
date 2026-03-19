import React, { lazy } from 'react'
import { useLocation } from '@docusaurus/router'
import BrowserOnly from '@docusaurus/BrowserOnly'
import { useActiveVersion, useVersions } from '@docusaurus/plugin-content-docs/client'
import { usePluginData } from '@docusaurus/useGlobalData'
import { CollectionManager } from '@orama/core'

import useOrama from '@orama/plugin-docusaurus-v3/dist/theme/SearchBar/useOrama.js'
import { getColorMode, getPreferredVersion } from '@orama/plugin-docusaurus-v3/dist/theme/SearchBar/utils.js'

const OramaSearchButton = lazy(
  () =>
    import('@orama/react-components').then((module) => ({
      default: module.OramaSearchButton
    })) as Promise<{
      default: React.ComponentType<{
        children?: any
        colorScheme?: string
        className: string
      }>
    }>
)

const OramaSearchBox = lazy(
  () =>
    import('@orama/react-components').then((module) => ({
      default: module.OramaSearchBox
    })) as Promise<{
      default: React.ComponentType<{
        children?: any
        oramaCoreClientInstance?: CollectionManager
        colorScheme?: string
        searchParams: any
      }>
    }>
)

// Add `where` when collectionManager is provided
// Handles different query APIs
function formatSearchParams(versionName: string, collectionManager: CollectionManager | undefined) {
  if (collectionManager) {
    return {
      version: versionName
    }
  }

  return {
    version: { eq: versionName } as any
  }
}

type OramaData = {
  docsInstances?: string[]
}

export function OramaSearchNoDocs() {
  const colorMode = getColorMode()
  const {
    searchBoxConfig,
    searchBtnConfig = {
      text: 'Search'
    }
  } = useOrama()
  const collectionManager = searchBoxConfig.basic?.collectionManager

  return (
    <React.Fragment>
      <OramaSearchButton colorScheme={colorMode} className="DocSearch-Button" {...searchBtnConfig}>
        {searchBtnConfig?.text}
      </OramaSearchButton>
      <OramaSearchBox
        {...(collectionManager ? {} : searchBoxConfig.basic)}
        {...searchBoxConfig.custom}
        oramaCoreClientInstance={collectionManager}
        colorScheme={colorMode}
        searchParams={{
          where: formatSearchParams('current', collectionManager)
        }}
      />
    </React.Fragment>
  )
}

type VersionLike = string | { name?: string; versionName?: string } | null | undefined

function getVersionName(version: VersionLike): string | undefined {
  if (!version) {
    return undefined
  }

  if (typeof version === 'string') {
    return version
  }

  return version.versionName || version.name
}

export function OramaSearchWithDocs({ pluginId }: { pluginId: string }) {
  const colorMode = getColorMode()
  const { searchBoxConfig, searchBtnConfig } = useOrama()
  const collectionManager = searchBoxConfig.basic?.collectionManager
  const versions = useVersions(pluginId)
  const activeVersion = useActiveVersion(pluginId)
  const preferredVersion = getPreferredVersion(searchBoxConfig.basic.clientInstance)
  const currentVersion = getVersionName(activeVersion) || getVersionName(preferredVersion) || getVersionName(versions[0])

  const searchParams = currentVersion
    ? formatSearchParams(currentVersion, collectionManager)
    : undefined

  return (
    <React.Fragment>
      <OramaSearchButton colorScheme={colorMode} className="DocSearch-Button" {...searchBtnConfig}>
        {searchBtnConfig?.text || 'Search'}
      </OramaSearchButton>
      <OramaSearchBox
        {...(collectionManager ? {} : searchBoxConfig.basic)}
        {...searchBoxConfig.custom}
        oramaCoreClientInstance={collectionManager}
        colorScheme={colorMode}
        searchParams={searchParams ? { where: searchParams } : undefined}
      />
    </React.Fragment>
  )
}

export default function OramaSearchWrapper() {
  const { pathname } = useLocation()
  const { docsInstances }: OramaData = usePluginData('@orama/plugin-docusaurus-v3') as OramaData
  let pluginId: string | undefined = undefined

  if (docsInstances) {
    const matchesPath = docsInstances.find((id: string) => pathname.includes(id))
    if (matchesPath) {
      pluginId = matchesPath
    } else if (pathname.startsWith('/docs') && docsInstances.length === 1) {
      // In this site the docs route base is `/docs`, but plugin ids are internal
      // and may not match URL segments directly (e.g. `default`).
      pluginId = docsInstances[0]
    }
  }

  return (
    <BrowserOnly fallback={<div>Loading Search...</div>}>
      {() => {
        if (pluginId) {
          return <OramaSearchWithDocs pluginId={pluginId} />
        } else {
          return <OramaSearchNoDocs />
        }
      }}
    </BrowserOnly>
  )
}
