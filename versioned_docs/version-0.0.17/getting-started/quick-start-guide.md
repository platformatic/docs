# Quick start guide

In this guide you'll learn how to create and run your first API with
Platformatic DB. Let's get started!

:::info

This guide uses [SQLite](https://www.sqlite.org/) for the database, but
Platformatic DB also supports [PostgreSQL](https://www.postgresql.org/),
[MySQL](https://www.mysql.com/) and [MariaDB](https://mariadb.org/) databases.

:::

## Requirements

Platformatic supports macOS, Linux and Windows ([WSL](https://docs.microsoft.com/windows/wsl/) recommended).

To follow along with this guide you'll need to have these things installed:

- [Node.js](https://nodejs.org/) v16 or v18 (latest of the series)
- [npm](https://docs.npmjs.com/cli/v8/) v7 or later
- A code editor, for example [Visual Studio Code](https://code.visualstudio.com/)
- Python and a compiler toolchain is recommended
  to experience the hot-reloading capabilities;
  Check the requirements for [Unix](https://github.com/nodejs/node-gyp#on-unix),
  [macOS](https://github.com/nodejs/node-gyp#on-macos) or
  [Windows](https://github.com/nodejs/node-gyp#on-windows))

In case the compiler toolchain is missing, there is a fallback that supports only commonjs modules.
ESM support is available only via the native addon.

## Create a new API project

Create a directory for your new API project:

```sh
mkdir quick-start

cd quick-start
```

Then create a `package.json` file with the npm default values:

```sh
npm init --yes
```

And install the [platformatic](https://www.npmjs.com/package/platformatic) CLI
as a project dependency:

```sh
npm install platformatic
```

## Add a database schema

In your project directory (`quick-start`), create a `migrations` directory to
store your database migration files:

```sh
mkdir migrations
```

Then create a new migration file named **`001.do.sql`** in the **`migrations`**
directory.

Copy and paste this SQL query into the migration file:

```sql
CREATE TABLE pages (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);
```

When it's run by Platformatic, this query will create a new database table
named `pages`.

:::tip

You can check syntax for SQL queries on the [Database.Guide SQL Reference](https://database.guide/sql-reference-for-beginners/).

:::

## Configure your API

In your project directory, create a new Platformatic configuration file named
**`db.json`**.

Copy and paste in this configuration:

```json
{
  "server": {
    "logger": {
      "level": "info"
    },
    "hostname": "127.0.0.1",
    "port": "3042"
  },
  "core": {
    "connectionString": "sqlite://pages.db",
    "graphiql": true
  },
  "migrations": {
    "dir": "./migrations"
  }
}
```

This configuration tells Platformatic to:

- Run an API server on `http://127.0.0.1:3042/`
- Configure the API server to log messages with an `info` level or above
- Connect to an SQLite database stored in a file named `pages.db`
- Enable the [GraphiQL](https://www.npmjs.com/package/graphiql) web UI
- Look for database migration files in the `migrations` directory

:::tip

The [Configuration reference](/reference/configuration.md) explains all of the
supported configuration options.

:::

## Start your API server

In your project directory, use the Platformatic CLI to start your API server:

```sh
npx platformatic db start
```

This will:

1. Run your SQL migration file and create a `pages` table in the SQLite database.
1. Automatically map your SQL database to REST and GraphQL API interfaces.
1. Start the Platformatic API server.

Your Platformatic API is now up and running!

:::tip

You can display human-readable logs in development by using
[`pino-pretty`](https://github.com/pinojs/pino-pretty):

```sh
npm install --save-dev pino-pretty

npx platformatic db start | npx pino-pretty
```

:::

## Next steps

### Use the REST API interface

You can use cURL to make requests to the REST interface of your API, for example:

#### Create a new page

```bash
curl -X POST -H "Content-Type: application/json" \
  -d "{ \"title\": \"Hello Platformatic DB\" }" \
	http://localhost:3042/pages
```

You should receive a response from your API like this:

```json
{"id":1,"title":"Hello Platformatic DB"}
```

#### Get all pages

```bash
curl http://localhost:3042/pages
```

You should receive a response from your API like this, with an array
containing all the pages in your database:

```json
[{"id":1,"title":"Hello Platformatic DB"}]
```

:::tip

Take a look at the [REST API reference](/reference/rest-api.md) for a complete
overview of the REST interface that your API provides.

:::

#### OpenAPI documentation

You can explore the OpenAPI documentation for your REST API at
[http://localhost:3042/documentation](http://localhost:3042/documentation)

### Use the GraphQL API interface

Open [http://localhost:3042/graphiql](http://localhost:3042/graphiql) in your
web browser to explore the GraphQL interface of your API.

Try out this GraphQL query to retrieve all pages from your API:

```graphql
{
  pages {
    id
    title
  }
}
```

:::tip

Learn more about your API's GraphQL interface in the
[GraphQL API reference](/reference/graphql-api.md).

:::
