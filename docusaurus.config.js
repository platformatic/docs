// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

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
    locales: ['en'],
  },

  scripts: [
    'https://app.posthog.com/static/array.js',
    {
      src: '/scripts/posthog.js',
      async: true,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath, version, versionDocsDirPath }) => {
            if (version === 'current') {
              return `https://github.com/platformatic/platformatic/edit/main/docs/${docPath}`;
            }
            return `https://github.com/platformatic/oss/edit/main/${versionDocsDirPath}/${docPath}`;
          }
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  // the Orama plugin leaks memory if watch is enabled, let's just enable it in production
  plugins: [
    process.env.NODE_ENV !== 'development' ? '@orama/plugin-docusaurus-v3' : null
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Platformatic',
        logo: {
          alt: 'Platformatic Logo',
          src: 'img/plt-logo.svg',
          srcDark: 'img/plt-logo-inverted.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/quick-start-guide',
            position: 'left',
            label: 'Get Started',
          },
          {
            to: 'docs/category/reference',
            position: 'left',
            label: 'Reference',
          },
          {
            to: 'docs/category/guides',
            position: 'left',
            label: 'Guides',
          },
          // {
          //   to: 'docs/category/platformatic-cloud',
          //   position: 'left',
          //   label: 'Platformatic Cloud',
          // },
          { href: 'https://blog.platformatic.dev', label: 'Blog', position: 'left' },
          { href: 'https://www.platformatic.dev', label: 'About', position: 'left' },
          {
            type: 'docsVersionDropdown',
            position: 'right'
          },
          {
            href: 'https://github.com/platformatic',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Get Started',
                to: 'docs/getting-started/quick-start-guide',
              },
              {
                label: 'Guides',
                to: 'docs/category/guides',
              },
              {
                label: 'Reference',
                to: 'docs/category/reference',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/platformatic',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/platformatic',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.platformatic.dev',
              },
              {
                label: 'Main website',
                href: 'https://www.platformatic.dev',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/platformatic',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Platformatic, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['groovy', 'bash', 'diff', 'json'],
      },
    }),
};

module.exports = config;
