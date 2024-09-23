// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const darkCodeTheme = themes.dracula;

const docsPath = "docs";
const sidebarPath = "./sidebars.json";

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

console.info(`Using docs folder ${docsPath}`);
console.info(`Using sidebars file ${sidebarPath}`);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Platformatic Open Source Software",
  url: "https://docs.platformatic.dev",
  baseUrl: process.env.BASE_URL || "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "platformatic",
  projectName: "oss",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [
    "https://app.posthog.com/static/array.js",
    {
      src: "/scripts/posthog.js",
      async: true,
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          path: docsPath,
          sidebarPath: require.resolve(sidebarPath), // Updated to load JSON file
          editUrl: ({ docPath, version, versionDocsDirPath }) => {
            if (version === "current") {
              return `https://github.com/platformatic/platformatic/edit/main/docs/${docPath}`;
            }
            return `https://github.com/platformatic/oss/edit/main/${versionDocsDirPath}/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/custom-dark.css"),
            require.resolve("./src/css/custom-light.css"),
          ],
        },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/docs/reference/cli",
            to: "/docs/cli",
          },
          {
            from: "/docs/next/reference/cli/",
            to: "/docs/cli",
          },
          {
            from: "/docs/category/packages/",
            to: "/docs/packages/sql-openapi/overview",
          },
          {
            from: "/docs/reference/sql-mapper/introduction/",
            to: "/docs/packages/sql-mapper/overview",
          },
          {
            from: "/docs/reference/service/programmatic/",
            to: "/docs/service/overview",
          },
          {
            from: "/docs/reference/composer/introduction/",
            to: "/docs/composer/overview",
          },
          {
            from: "/docs/reference/runtime/introduction/",
            to: "/docs/runtime/overview",
          },
          {
            from: "/docs/reference/db/introduction/",
            to: "/docs/db/overview",
          },
          {
            from: "/docs/reference/client",
            to: "/docs/client/overview",
          },
          {
            from: "/docs/reference/db/authorization/introduction",
            to: "/docs/db/authorization/overview",
          },
          {
            from: "/docs/reference/db/configuration",
            to: "/docs/db/configuration",
          },
          {
            from: "/docs/reference/sql-openapi/introduction",
            to: "/docs/packages/sql-openapi/overview",
          },
          {
            from: "/docs/reference/sql-graphql/queries",
            to: "/docs/packages/sql-graphql/queries",
          },
          {
            from: "/docs/reference/db/migrations",
            to: "/docs/db/migrations",
          },
          {
            from: "/docs/reference/composer/configuration",
            to: "/docs/composer/configuration",
          },
          {
            from: "/docs/reference/service/introduction",
            to: "/docs/service/overview",
          },
        ],
      },
    ],
    require.resolve("./plugins/custom-webpack"),
  ],

  themeConfig: {
    announcementBar: {
      id: "announcement",
      content: `
        Announcing our new feature: the Node.js application server is here! 
      <b> <a href="/docs/new-feature" style="color: black; text-decoration: underline;">  Read our founder’s announcement ->  </a></b>
       
      `,
      backgroundColor: "#fff",
      textColor: "#000",
      isCloseable: true,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    image: "img/plt-logo-docs.png",
    navbar: {
      title: "Platformatic",
      logo: {
        alt: "Platformatic Logo",
        src: "img/plt-logo.svg",
        srcDark: "img/plt-logo-inverted.svg",
      },
      items: [
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "Learn",
          label: "Learn",
        },

        {
          type: "dropdown",
          position: "left",
          label: "Features",
          items: [
            {
              to: "/service",
              label: "Service",
            },
            {
              to: "/database",
              label: "DB",
            },
            {
              to: "/composer",
              label: "Composer",
            },
            {
              to: "/runtime",
              label: "Runtime",
            },
            {
              to: "/aiwarp",
              label: "AI-Warp",
            },
            {
              to: "/stackables",
              label: "Stackables",
            },
            {
              to: "/meraki",
              label: "Shipyard",
            },
            {
              to: "/watt",
              label: "Watt",
            }
          ],
        },
        {
          type: "doc",
          docId: "Overview",
          position: "left",
          label: "Reference",
        },
        {
          type: "dropdown",
          position: "left",
          label: "Community",
          items: [
            {
              href: "https://platformatichq.com/events",
              label: "Events",
            },
          ],
        },
        // {
        //   href: "https://www.platformatic.dev",
        //   label: "About",
        //   position: "left",
        // },
        {
          type: "dropdown",
          position: "left",
          label: "Powered by",
          items: [
            {
              to: "/fastify",
              label: "Fastify",
            },
            {
              to: "/nodejs",
              label: "Node.js",
            },
          ],
        },
        {
          href: "https://blog.platformatic.dev",
          label: "Blog",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: "https://github.com/platformatic",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Get Started",
              to: "docs/getting-started/quick-start-guide",
            },
            {
              label: "Guides",
              to: "docs/guides/movie-quotes-app-tutorial",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/platformatic",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/platformatic",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://blog.platformatic.dev",
            },
            {
              label: "Main website",
              href: "https://www.platformatic.dev",
            },
            {
              label: "GitHub",
              href: "https://github.com/platformatic",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Platformatic, Inc.`,
    },
    prism: {
      darkTheme: darkCodeTheme,
      additionalLanguages: ["groovy", "bash", "diff", "json"],
    },
  },
};

module.exports = config;
