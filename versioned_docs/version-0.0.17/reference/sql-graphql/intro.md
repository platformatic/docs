---
sidebar_position: 1
---
# GraphQL API

Platformatic DB GraphQL plugin automatically starts a GraphQL server (powered by [mercurius](https://mercurius.dev)) ready to run queries and mutations over your entities on the `/graphql` endpoint


## GraphiQL

[GraphiQL](https://github.com/graphql/graphiql) is already integrated into Platformatic DB.
To enable that you just need to pass it as an option to the `sql-graphql` plugin.

```js
...
app.register(graphqlPlugin, { graphiql: true })

```

GraphiQL interface will be available at `/graphiql` endpoint.