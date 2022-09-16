# Configuration

## File support

Platformatic DB supports JSON, JSON5, YAML and TOML file format. The format will be inferred by file extension (for YAML, both `.yml` and `.yaml` extension are supported).

We'll use JSON format in the following examples.

## Format

Following root object's properties are supported
  - [`authorization`](#authorization)
  - [`core`](#core) (**required**)
  - [`dashboard`](#dashboard)
  - [`metrics`](#metrics)
  - [`migrations`](#migrations)
  - [`plugin`](#plugin)
  - [`server`](#server) (**required**)

### `authorization`
  - `adminSecret` (string): if defined, it will be the password used to access the dashboard and the string to send within the `x-platformatic-admin-secret` header when performing GraphQL/REST API calls.
  - `rules` (array): authorization rules that describe which CRUD action every user can/can't perform. 
    
    The format of this array is TBD.

### `core`
  - `connectionString` (string) (**required**): This is the connection string used to connect to the database (i.e. `postgres://user:password@my-database:5432/db-name`). 

    Platformatic DB supports Mysql/MariaDB, Postgresql and SQLite.
  - `graphql` (boolean or object): enables the GraphQL support

    _Examples_

    Enables GraphQL support

    ```JSON
    {
      "core": {
        ...
        "graphql": true 
      }
    }
    ```

    Enables GraphQL support with GraphiQL

    ```JSON
    {
      "core": {
        ...
        "graphql": {
          "graphiql": true
        }
      }
    }
    ```
  - `openapi` (boolean or object): enables OpenAPI REST support. If the value is an object, all [OpenAPI v3](https://swagger.io/specification/) properties can be detailed. 

    Platformatic DB uses [`@fastify/swagger`](https://github.com/fastify/fastify-swagger) under the hood to manage this configuration.

    _Examples_

    Enables OpenAPI

    ```JSON
    {
      "core": {
        ...
        "openapi": true 
      }
    }
    ```

    Enables OpenAPI with options

    ```JSON
    {
      "core": {
        ...
        "openapi": {
          "info": {
            "title": "Platformatic DB",
            "description": "Exposing a SQL database as REST"
          }
        }
      }
    }
    ```
  - `ignore` (object): key/value object that define which tables should be ignored, meaning they are not entities.

    _Examples_

    ```JSON
    {
      "core": {
        ...
        "ignore": {
          "versions": true // "versions" table will be not mapped with GraphQL/REST APIs
        }
      }
    }
    ```

### `dashboard`
  - `rootPath` (boolean): Whether the dashboard will be available at `/` location. Default is `true`. 

### `metrics`
  Configuration for a [Prometheus](https://prometheus.io/) server that will export monitoring metrics for the current server instance. It uses [`fastify-metrics`](https://github.com/SkeLLLa/fastify-metrics) under the hodd.

  It can be a boolean or an object. If value is `true` this server will listen to `http://0.0.0.0:9090`
  
  - `hostname` (string): The hostname where Prometheus server will listen for connections.
  - `port` (number): The port where Prometheus server will listen for connections.
  - `auth` (object): Basic Auth configuration. `username` and `password` are required here.


### `migrations`
  Configures [Postgrator](https://github.com/rickbergfalk/postgrator) to run migrations over the database.

  - `dir` (string) (**required**): Relative path to the migrations directory.
  - `autoApply` (boolean): Whether to automatically apply migrations when running the migrate command. Default `true`

### `plugin`
  Defines a plugin that will be loaded with [`fastify-isolate`](https://github.com/mcollina/fastify-isolate).

  It is an object and all properties will be passed to `fastify-isolate`
  
  - `path` (string) (**required**): Relative path to plugin's entry point.

### `server`

  - `hostname` (string) (**required**): The hostname where Platformatic DB server will listen for connections.
  - `port` (number) (**required**): The port where Platformatic DB server will listen for connections.
  - `healthCheck` (boolean or object): Enables the Health Check. Powered by [`@fastify/under-pressure`](https://github.com/fastify/under-pressure). 
    The value can be an object, used to specify the interval between checks (default 5000ms)

    _Example_

    ```JSON
    {
      "server": {
        ...
        "healthCheck": {
          "interval": 2000
        }
      }
    }
    ```
  - `cors` (object): the value of this property will be passed to [`@fastify/cors`](https://github.com/fastify/fastify-cors) so all keys documented there are supported.

## Environment Variables

Each value can be replaced by an environment variable.

To avoid messing/exposing system's variables, only `PLT_` prefixed ones will be replaced.

All placeholders must be replaced.

_Examples_


```JSON
{
  "core": {
    "connectionString": "{PLT_CONNECTION_STRING}"
  },
  "server": {
    "port": "{MY_PORT}"
  }
}
```

Platformatic will look at the `PLT_CONNECTION_STRING` environment variable and will replace it in the config.

Anyway it will throw an error because it can't replace `{PORT}` because it's not prefixed with `PLT_`. The error message will suggest to use `PLT_PORT` instead.

Variables can be set via terminal (i.e. `PLT_PORT=4321 npx platformatic db --config db.json`) or via a `.env` file (loaded by [`dotenv`](https://github.com/motdotla/dotenv)).
The `.env` file can be located in the same folder of the config file or in the current working directory.

### Environment Variables Whitelist

Users can override default behavior, and use variables that are not prefixed with `PLT_`, using the `--allow-env` argument.

The value is a comma separated list of strings. `--allow-env=PORT,HOST` will allow `{PORT}` and `{HOST}` in the config file.

Default variables already supported are: `PORT`, `DATABASE_URL`. If the user pass `--allow-env` argument, it will replace the default list.
