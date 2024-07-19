// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { resolve } = require('node:path')
const { themes } = require('prism-react-renderer')
const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

let docsPath = 'docs'
let sidebarPath = require.resolve('./sidebars.json')

if (process.env.NODE_ENV === 'development') {
  let docsRelativePath = '../platformatic/docs'

  if (process.env.DOCS) {
    docsRelativePath = process.env.DOCS
  } else {
    console.warn('The DOCS environment variables has not been set. Falling back to "../platformatic/docs".')
  }

  docsPath = resolve(process.cwd(), docsRelativePath)
  sidebarPath = resolve(docsPath, 'sidebars.js')
}

console.info(`Using docs folder ${docsPath}`)
console.info(`Using sidebars file ${sidebarPath}`)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Platformatic Open Source Software',
  // tagline: '',
  url: 'https://docs.platformatic.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'platformatic', // Usually your GitHub org/user name.
  projectName: 'oss', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  scripts: [
    'https://app.posthog.com/static/array.js',
    {
      src: '/scripts/posthog.js',
      async: true
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: docsPath,
          sidebarPath,
          editUrl: ({ docPath, version, versionDocsDirPath }) => {
            if (version === 'current') {
              return `https://github.com/platformatic/platformatic/edit/main/docs/${docPath}`
            }
            return `https://github.com/platformatic/oss/edit/main/${versionDocsDirPath}/${docPath}`
          }
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/custom-dark.css'),
            require.resolve('./src/css/custom-light.css')
          ]
        }
      })
    ]
  ],

  plugins: [
    // The Orama plugin is temporarily disabled due to: https://github.com/askorama/orama/issues/728
    // The Orama plugin leaks memory if watch is enabled, let's just enable it in production
    // process.env.NODE_ENV !== 'development' ? '@orama/plugin-docusaurus-v3' : null,
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/reference/cli',
            to: '/docs/cli'
          },
          {
            from: '/docs/next/reference/cli/',
            to: '/docs/cli'
          },
          {
            from: '/docs/category/packages/',
            to: '/docs/packages/sql-openapi/overview'
          },
          {
            from: '/docs/reference/sql-mapper/introduction/',
            to: '/docs/packages/sql-mapper/overview'
          },
          {
            from: '/docs/reference/service/programmatic/',
            to: '/docs/service/overview'
          },
          {
            from: '/docs/reference/composer/introduction/',
            to: '/docs/composer/overview'
          },
          {
            from: '/docs/reference/runtime/introduction/',
            to: '/docs/runtime/overview'
          },
          {
            from: '/docs/reference/db/introduction/',
            to: '/docs/db/overview'
          },
          {
            from: '/docs/reference/client',
            to: '/docs/client/overview'
          },
          {
            from: '/docs/reference/db/authorization/introduction',
            to: '/docs/db/authorization/overview'
          },
          {
            from: '/docs/reference/db/configuration',
            to: '/docs/db/configuration'
          },
          {
            from: '/docs/reference/sql-openapi/introduction',
            to: '/docs/packages/sql-openapi/overview'
          },
          {
            from: '/docs/reference/sql-graphql/queries',
            to: '/docs/packages/sql-graphql/queries'
          },
          {
            from: '/docs/reference/db/migrations',
            to: '/docs/db/migrations'
          },
          {
            from: '/docs/reference/composer/configuration',
            to: '/docs/composer/configuration'
          },
          {
            from: '/docs/reference/service/introduction',
            to: '/docs/service/overview'
          }
        ]
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/plt-logo-docs.png',
      navbar: {
        title: 'Platformatic',
        logo: {
          alt: 'Platformatic Logo',
          src: 'img/plt-logo.svg',
          srcDark: 'img/plt-logo-inverted.svg'
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'Learn',
            label: 'Learn'
          },
          {
            type: 'doc',
            docId: 'Overview',
            position: 'left',
            label: 'Reference'
          },
          {
            href: 'https://blog.platformatic.dev',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://www.platformatic.dev',
            label: 'About',
            position: 'left'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right'
          },
          {
            href: 'https://github.com/platformatic',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Get Started',
                to: 'docs/getting-started/quick-start-guide'
              },
              {
                label: 'Guides',
                to: 'docs/guides/movie-quotes-app-tutorial'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/platformatic'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/platformatic'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.platformatic.dev'
              },
              {
                label: 'Main website',
                href: 'https://www.platformatic.dev'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/platformatic'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Platformatic, Inc.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['groovy', 'bash', 'diff', 'json']
      }
    })
}

module.exports = config
