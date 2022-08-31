# Seeding a database

A database is as useful as the data that it contains: a fresh, empty database is not really useful.
While we can add a few rows using SQL within our migrations, we might need to use JavaScript from time to time.
Therefore, we can run `platformatic db seed myfile.js`, where `myfile.js` exports a `Function` that accepts an argument:
an instance of `@platformatic/sql-mapper`. Here is an example:

```js
'use strict'

module.exports = async function ({ entities, db, sql }) {
  await entities.graph.save({ input: { name: 'Hello' } })
  await db.query(sql`
    INSERT INTO graphs (name) VALUES ('Hello 2');
  `)
}
```
