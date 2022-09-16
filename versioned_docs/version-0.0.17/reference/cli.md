# Platformatic CLI

The following is a list of all the help commands part of the Platformatic CLI.

You can install the CLI with `npm install -g platformatic` or `yarn global add platformatic`.
You can then run `platformatic` to see the list of commands.

## Help


```
Welcome to Platformatic. Available commands are:

* help - Display this message
* help <command> - shows more information about a command.
* db - start Platformatic DB; type `platformatic db help` to know more.

```


## DB


  ### help
  Available commands:

* `help` - show this help message.
* `help <command>` - shows more information about a command.
* `start` - start the server.
* `migrate` - run migrations.
* `seed` - run a seed file.

  
  ### migrate
  Apply all configurated migrations to the database:

  $ platformatic db migrate

The migrations will be applied in the order they are specified in the
folder defined in the configuration file. If you want to apply a specific migration,
you can use the `--to` option:

  $ platformatic db migrate --to 001

Here is an example migration:

  CREATE TABLE graphs (
    id SERIAL PRIMARY KEY,
    name TEXT
  );

You can always rollback to a specific migration with:

  $ platformatic db migrate --to VERSION

Use 000 to reset to the initial state.

Options:

  * `-c, --config <path>`: Path to the configuration file.
  * `-t, --to <version>`: Migrate to a specific version.

If not specified, the configuration specified will be loaded from
`db.json`, `db.yml`, or `db.tml` in the current directory.
You can find more details about the configuration format at:
https://oss.platformatic.dev/docs/reference/configuration.

  
  ### schema
  Generate a schema from the database and prints it to standard output:

* `schema graphql` - generate the GraphQL schema
* `schema openapi` - generate the OpenAPI schema

Options:

  -c, --config FILE  Specify a configuration file to use

If not specified, the configuration specified will be loaded from
`db.json`, `db.yml`, or `db.tml` in the current directory.
You can find more details about the configuration format at:
https://oss.platformatic.dev/docs/reference/configuration.

  
  ### seed
  Load a seed into the database. This is a convenience method that loads
a JavaScript file and configure @platformatic/sql-mapper to connect to
the database specified in the configuration file.

Here is an example of a seed file:

  'use strict'

  module.exports = async function ({ entities, db, sql }) {
    await entities.graph.save({ input: { name: 'Hello' } })
    await db.query(sql`
      INSERT INTO graphs (name) VALUES ('Hello 2');
    `)
  }

You can run this using the `seed` command:

  $ platformatic db seed seed.js

Options:

  * `--config` - Path to the configuration file.

If not specified, the configuration specified will be loaded from
`db.json`, `db.yml`, or `db.tml` in the current directory.
You can find more details about the configuration format at:
https://oss.platformatic.dev/docs/reference/configuration.

  
  ### start
  Start the Platformatic DB server with the following command:

 $ platformatic db start

You will need a  configuration file. Here is an example to get you
started, save the following as `db.json`:

  {
    "server": {
      "hostname": "127.0.0.1",
      "port": 0,
      "logger": {
        "level": "info"
      }
    },
    "core": {
      "connectionString": "sqlite://./db"
    },
    "migrations": {
      "dir": "./migrations"
    }
  }


Remeber to create a migration, run the `db help migrate` command
to know more.

All outstanding migrations will be applied to the database
unless the `migrations.autoApply` configuration option is set to
false.

By sending the SIGUSR2 signal, the server can be reloaded.

Options:

  * `-c --config FILE`  Specify a configuration file to use
  * `-watch-ignore=FILE1,FILE2`  Specify which files should not be watched (and cause server restart)

If not specified, the configuration specified will be loaded from
`db.json`, `db.yml`, or `db.tml` in the current directory.
You can find more details about the configuration format at:
https://oss.platformatic.dev/docs/reference/configuration.


  