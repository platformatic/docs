---
sidebar_position: 2
---

# Queries

For each table (such as `pages`) a query is created, and all fields are mapped.

## Example

<!-- ./docs/sql-graphql/examples/query.js -->
```js
'use strict'

const Fastify = require('fastify')
const graphqlPlugin = require('@platformatic/sql-graphql')
const sqlMapper = require('@platformatic/sql-mapper')
async function main() {
  const app = Fastify({
    logger: {
      level: 'info'
    }
  })
  app.register(sqlMapper, {
    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres'
  }) 
  app.register(graphqlPlugin, {
    graphiql: true
  })
  const res = await app.inject({
    method: 'POST',
    url: '/graphql',
    body: {
      query: `
        query{
          pages{
            id,
            title
          }
        }
      `
    }
  })
  const result = await res.json()
  console.log(result.data)
  await app.close()
}
main()
```

## Advanced Queries

For each entity these other queries are created

### `get[ENTITY]by[PRIMARY_KEY]`

If you have a table `pages` with field `id` as primary key, you can run a query called `getPageById`

#### Example

```js
...
const res = await app.inject({
  method: 'POST',
  url: '/graphql',
  body: {
    query: `
      query{
        getPageById(id: 3) {
          id,
          title
        }
      }
    `
  }
})
const result = await res.json()
console.log(result.data) // { getPageById: { id: '3', title: 'A fiction' } }
```