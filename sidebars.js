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
    'Overview',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index'
      },
      collapsed: true,
      items: [
        'getting-started/quick-start-guide',
        {
          type: 'category',
          label: 'Movie App',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            'getting-started/movie-app/movie-quotes-app-tutorial'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index'
      },
      collapsed: true,
      items: [
        'reference/cli',
        {
          type: 'category',
          label: 'Platformatic Composer',
          link: {
            type: 'doc',
            id: 'reference/composer/introduction'
          },
          collapsed: true,
          items: [
            'reference/composer/configuration',
            'reference/composer/programmatic',
            'reference/composer/api-modification'
          ]
        },
        {
          type: 'category',
          label: 'Platformatic DB',
          link: {
            type: 'doc',
            id: 'reference/db/introduction'
          },
          collapsed: true,
          items: [
            'reference/db/configuration',
            'reference/db/migrations',
            {
              type: 'category',
              label: 'Authorization',
              link: {
                type: 'doc',
                id: 'reference/db/authorization/introduction'
              },
              collapsed: true,
              items: [
                'reference/db/authorization/strategies',
                'reference/db/authorization/user-roles-metadata',
                'reference/db/authorization/rules'
              ]
            },
            'reference/db/plugin',
            'reference/db/logging',
            'reference/db/programmatic',
            'reference/db/schema-support'
          ]
        },
        {
          type: 'category',
          label: 'Platformatic Runtime',
          link: {
            type: 'doc',
            id: 'reference/runtime/introduction'
          },
          collapsed: true,
          items: [
            'reference/runtime/configuration',
            'reference/runtime/programmatic'
          ]
        },
        {
          type: 'category',
          label: 'Platformatic Service',
          link: {
            type: 'doc',
            id: 'reference/service/introduction'
          },
          collapsed: true,
          items: [
            'reference/service/configuration',
            'reference/service/plugin',
            'reference/service/programmatic'
          ]
        },
        {
          type: 'category',
          label: 'Packages',
          link: {
            type: 'generated-index'
            // TODO: Add a description
          },
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Client',
              link: {
                type: 'doc',
                id: 'reference/client/introduction'
              },
              collapsed: true,
              items: [
                'reference/client/introduction',
                'reference/client/programmatic',
                'reference/client/frontend'
              ]
            },
            {
              type: 'category',
              label: 'SQL-to-OpenAPI',
              link: {
                type: 'doc',
                id: 'reference/sql-openapi/introduction'
              },
              collapsed: true,
              items: [
                'reference/sql-openapi/api',
                'reference/sql-openapi/ignore',
                'reference/sql-openapi/explicit-include'
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
                'reference/sql-graphql/mutations',
                'reference/sql-graphql/many-to-many',
                'reference/sql-graphql/ignore'
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
                    'reference/sql-mapper/entities/relations',
                    'reference/sql-mapper/entities/transactions'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'SQL-Events',
              link: {
                type: 'doc',
                id: 'reference/sql-events/introduction'
              },
              collapsed: true,
              items: [
                'reference/sql-events/fastify-plugin'
              ]
            }
          ]
        }
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
        {
          type: 'category',
          label: 'Deployment',
          link: {
            type: 'doc',
            id: 'guides/deployment/deployment'
          },
          collapsed: true,
          items: [
            'guides/deployment/deploy-to-fly-io-with-sqlite',
            'guides/deployment/advanced-fly-io-deployment'
          ]
        },
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
        'guides/securing-platformatic-db',
        'guides/jwt-auth0',
        'guides/monitoring',
        'guides/debug-platformatic-db',
        'guides/environment-variables',
        'guides/prisma',
        'guides/generate-frontend-code-to-consume-platformatic-rest-api',
        'guides/migrating-fastify-app-to-platformatic-service',
        'guides/migrating-express-app-to-platformatic-service',
        'guides/applications-with-stackables',
        'guides/telemetry',
        'guides/dockerize-platformatic-app',
        'guides/build-modular-monolith',
        'guides/logging-to-elasticsearch'
      ]
    },

    
    // {
    //   type: 'category',
    //   label: 'Platformatic Cloud',
    //   link: {
    //     type: 'generated-index'
    //   },
    //   collapsed: false,
    //   items: [
    //     'platformatic-cloud/quick-start-guide',
    //     'platformatic-cloud/deploy-database-neon',
    //     'platformatic-cloud/risk-engine'
    //   ]
    // }
  ]
}

module.exports = sidebars
