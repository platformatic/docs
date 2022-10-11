/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: [
        'getting-started/quick-start-guide',
        'getting-started/movie-quotes-app-tutorial',
        'getting-started/architecture'
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index'
      },
      collapsed: true,
      items: [
        'guides/deployment/deployment',
        'guides/seed-a-database',
        {
          type: 'category',
          label: 'Add Custom Functionality',
          link: {
            type: 'doc',
            id: 'guides/add-custom-functionality/introduction'
          },
          collapsed: true,
          items: [
            'guides/add-custom-functionality/prerequisites',
            'guides/add-custom-functionality/extend-graphql',
            'guides/add-custom-functionality/extend-rest'
          ]
        },
        'guides/jwt-auth0',
        'guides/monitoring'
      ]
    },

    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: [
        'reference/cli',
        'reference/configuration',
        'reference/migrations',
        {
          type: 'category',
          label: 'SQL-to-REST',
          link: {
            type: 'doc',
            id: 'reference/sql-rest/introduction'
          },
          collapsed: true,
          items: [
            'reference/sql-rest/api'
          ]
        },
        {
          type: 'category',
          label: 'SQL-to-GraphQL',
          link: {
            type: 'doc',
            id: 'reference/sql-graphql/introduction'
          },
          collapsed: true,
          items: [
            'reference/sql-graphql/queries',
            'reference/sql-graphql/mutations'
          ]
        },

        {
          type: 'category',
          label: 'SQL-Mapper',
          link: {
            type: 'doc',
            id: 'reference/sql-mapper/introduction'
          },
          collapsed: true,
          items: [
            'reference/sql-mapper/fastify-plugin',
            {
              type: 'category',
              label: 'Entities',
              link: {
                type: 'doc',
                id: 'reference/sql-mapper/entities/introduction'
              },
              collapsed: true,
              items: [
                'reference/sql-mapper/entities/fields',
                'reference/sql-mapper/entities/api',
                'reference/sql-mapper/entities/example',
                'reference/sql-mapper/entities/hooks',
                'reference/sql-mapper/entities/relations'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Authorization & Authentication',
          link: {
            type: 'doc',
            id: 'reference/db-authorization/introduction'
          },
          collapsed: true,
          items: [
            'reference/db-authorization/programmatic-rules'
          ]
        },
        'reference/plugin'
      ]
    }
    // {
    //   type: 'category',
    //   label: 'Contributing',
    //   link: {
    //     type: 'doc',
    //     id: 'contributing/contributing'
    //   },
    //   collapsed: true,
    //   items: [
    //     'contributing/documentation-style-guide',
    //   ],
    // },
  ]
}

module.exports = sidebars
