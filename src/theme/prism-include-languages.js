// import siteConfig from '@generated/docusaurus.config'

// export default function prismIncludeLanguages (PrismObject) {
//   const {
//     themeConfig: { prism }
//   } = siteConfig
//   const { additionalLanguages } = prism
//   // Prism components work on the Prism instance on the window, while prism-
//   // react-renderer uses its own Prism instance. We temporarily mount the
//   // instance onto window, import components to enhance it, then remove it to
//   // avoid polluting global namespace.
//   // You can mutate PrismObject: registering plugins, deleting languages... As
//   // long as you don't re-assign it
//   globalThis.Prism = PrismObject
//   additionalLanguages.forEach((lang) => {
//     // eslint-disable-next-line global-require, import/no-dynamic-require
//     require(`prismjs/components/prism-${lang}`)
//   })

//   // TODO: This is a hack. This can be done properly if Astro agree to the
//   //       package exposing this entrypoint.
//   require('../../node_modules/@astrojs/prism/dist/plugin.js').addAstro(PrismObject)

//   delete globalThis.Prism
// }

import siteConfig from '@generated/docusaurus.config'

export default function prismIncludeLanguages (PrismObject) {
  const {
    themeConfig: { prism }
  } = siteConfig
  const { additionalLanguages } = prism

  // Use require.context to dynamically import Prism components
  const requireComponent = require.context(
    'prismjs/components',
    false,
    /^\.\/prism-.*\.js$/
  )

  globalThis.Prism = PrismObject

  additionalLanguages.forEach((lang) => {
    try {
      // Check if the language component exists
      const componentPath = `./prism-${lang}.js`
      if (requireComponent.keys().includes(componentPath)) {
        requireComponent(componentPath)
      } else {
        console.warn(`Prism language component for "${lang}" not found.`)
      }
    } catch (error) {
      console.error(
        `Failed to load Prism language component for "${lang}":`,
        error
      )
    }
  })

  // Include Astro language support if needed
  try {
    require('../../node_modules/@astrojs/prism/dist/plugin.js').addAstro(
      PrismObject
    )
  } catch (error) {
    console.error('Failed to include Astro language support:', error)
  }

  delete globalThis.Prism
}
