# Mapper

Basegraph's Mapper will look into your db schema and return an object containing

- `db`: a Database abstraction layer from [@Databases](https://www.atdatabases.org/)
- `sql`: The SQL builder from [@Databases](https://www.atdatabases.org/)
- `entities` and object containing a key for each table found in the schema, with basic CRUD operations. See [entity.md](./entity.md) for details.

It exports a function that accepts following parameters

- `connectionString`: The Database connection string
- `log`: A logger object (like [Pino](https://getpino.io))
- `onDatabaseLoad`: An async function that is called after the connection is established. It will receive `db` and `sql` as parameter.  
- `ignore`: Object used to ignore some tables from building entities. (i.e. `{ 'versions': true }` will ignore `versions` table)
- `autoTimestamp`: Generate timestamp automatically when inserting/updating records.
- `hooks`: For each entity name (like `Page`) you can customize any of the entity API function. Your custom function will receive the original function as first parameter, and then all the other parameters passed to it.

## Code samples

```javascript
const { pino } = require('pino')

const logger = pino()

async function onDatabaseLoad (db, sql) {
  await db.query(sql`CREATE TABLE pages (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
  );`)
}
const connectionString =
  'postgres://postgres:postgres@localhost:5432/postgres'
const mapper = await connect({
  connectionString,
  log: logger,
  onDatabaseLoad,
  ignore: {},
  hooks: {
    Page: {
      find: async function(_find, opts) {
        console.log('hook called');
        return await _find(opts)
      }
    }
  }
})
const pageEntity = mapper.entities.page

await mapper.db.query(mapper.sql`SELECT * FROM pages`)
await mapper.db.find('option1', 'option2')
...

```