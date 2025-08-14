// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer')
const darkCodeTheme = themes.dracula

const docsPath = 'docs'
const sidebarPath = './sidebars.json'

// if (process.env.NODE_ENV === "development") {
//   let docsRelativePath = "../platformatic/docs";

//   if (process.env.DOCS) {
//     docsRelativePath = process.env.DOCS;
//   } else {
//     console.warn(
//       'The DOCS environment variables has not been set. Falling back to "../platformatic/docs".'
//     );
//   }

//   docsPath = resolve(process.cwd(), docsRelativePath);
//   sidebarPath = resolve(docsPath, "sidebars.js");
// }

console.info(`Using docs folder ${docsPath}`)
console.info(`Using sidebars file ${sidebarPath}`)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Platformatic Open Source Software',
  url: 'https://docs.platformatic.dev',
  baseUrl: process.env.BASE_URL || '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'platformatic',
  projectName: 'oss',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: docsPath,
          sidebarPath: require.resolve(sidebarPath), // Updated to load JSON file
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
      }
    ]
  ],

  plugins: [
    [
      'posthog-docusaurus',
      {
        apiKey: 'phc_erld9bkOOEawzcjlc0GovYRGCopzSibVHG4WKE4G5QX',
        appUrl: 'https://us.i.posthog.com', // optional, defaults to "https://us.i.posthog.com"
        enableInDevelopment: false // optional
      }
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/reference/cli',
            to: '/docs/next/reference/platformatic/cli'
          },
          {
            from: '/docs/next/reference/cli/',
            to: '/docs/next/reference/platformatic/cli'
          },
          {
            from: '/docs/category/packages/',
            to: '/docs/reference/sql-openapi/overview'
          },
          {
            from: '/docs/reference/sql-mapper/introduction/',
            to: '/docs/reference/sql-mapper/overview'
          },
          {
            from: '/docs/reference/composer/introduction/',
            to: '/docs/next/reference/composer/overview'
          },
          {
            from: '/docs/reference/runtime/introduction/',
            to: '/docs/next/reference/runtime/overview'
          },
          {
            from: '/docs/reference/db/introduction/',
            to: '/docs/next/reference/db/overview'
          },
          {
            from: '/docs/reference/client',
            to: '/docs/next/reference/client/overview'
          },
          {
            from: '/docs/reference/db/authorization/introduction',
            to: '/docs/next/reference/db/authorization/overview'
          },
          {
            from: '/docs/reference/sql-openapi/introduction',
            to: '/docs/reference/sql-openapi/overview'
          },
          {
            from: '/docs/reference/db/§tions',
            to: '/docs/next/reference/db/migrations'
          },
          {
            from: '/docs/reference/service/introduction',
            to: '/docs/next/reference/service/overview'
          }
        ]
      }
    ],
    require.resolve('./plugins/custom-webpack')
  ],

  themeConfig: {
    // announcementBar: {
    //   id: 'announcement',
    //   content: `
    //     Announcing our new feature: the Node.js application server is here!
    //   <b> <a href="https://blog.platformatic.dev/introducing-the-node-application-platform" style="color: black; text-decoration: underline;">  Read our founder’s announcement ->  </a></b>

    //   `,
    //   backgroundColor: '#fff',
    //   textColor: '#000',
    //   isCloseable: true
    // },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
    },
    image: 'img/platformatic-logo.svg',
    navbar: {
      title: 'Platformatic',
      logo: {
        alt: 'Platformatic Logo',
        src: 'img/platformatic-logo.svg',
        srcDark: 'img/platformatic-logo.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started/quick-start-watt',
          position: 'left',
          label: 'Getting Started'
        },
        {
          type: 'doc',
          docId: 'guides/build-modular-monolith',
          position: 'left',
          label: 'How-to Guides'
        },
        {
          type: 'doc',
          docId: 'Overview',
          position: 'left',
          label: 'Reference'
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'Community',
          items: [
            {
              href: 'https://platformatichq.com/events',
              label: 'Events'
            }
          ]
        },
        {
          href: 'https://platformatichq.com',
          label: 'For Teams',
          position: 'left'
        },
        {
          href: 'https://blog.platformatic.dev',
          label: 'Blog',
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
              label: 'X',
              href: 'https://x.com/platformatic'
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
      darkTheme: darkCodeTheme,
      additionalLanguages: ['groovy', 'bash', 'diff', 'json']
    }
  }
}

module.exports = config
