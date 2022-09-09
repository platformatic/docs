// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Platformatic OSS',
  // tagline: 'Dinosaurs are cool',
  url: 'https://oss.platformatic.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
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
            title: 'Docs',
            items: [
              {
                label: 'Docs homepage',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/channels/1011258196905689118/1011258204371554307',
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
      },
    }),
};

module.exports = config;
