---
sidebar_position: 5
---

# Relations

When Platformatic DB is reading your database schema, it will pick up also relations between tables and put those info into a `relations` field in the entity object.

We do this by querying the database internal metadata

## Example

Giving this PostgreSQL schema:

```SQL
CREATE SEQUENCE IF NOT EXISTS categories_id_seq;

CREATE TABLE "categories" (
    "id" int4 NOT NULL DEFAULT nextval('categories_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    PRIMARY KEY ("id")
);

CREATE SEQUENCE IF NOT EXISTS pages_id_seq;

CREATE TABLE "pages" (
    "id" int4 NOT NULL DEFAULT nextval('pages_id_seq'::regclass),
    "title" varchar(255) NOT NULL,
    "body_content" text,
    "category_id" int4,
    PRIMARY KEY ("id")
);

ALTER TABLE "pages" ADD FOREIGN KEY ("category_id") REFERENCES "categories"("id");
```

And running this code
<!-- docs/reference/sql-mapper/examples/relations.js -->
```js
'use strict'
const { connect } = require('@platformatic/sql-mapper')
const { pino } = require('pino')
const pretty = require('pino-pretty')
const logger = pino(pretty())

async function main() {
  const pgConnectionString = 'postgres://postgres:postgres@127.0.0.1/postgres'
  const mapper = await connect({
    connectionString: pgConnectionString,
    log: logger,
  })
  const pageEntity = mapper.entities.page
  console.log(pageEntity.relations)
  await mapper.db.dispose()
}
main()
```

This will be the output 
```
[
  {
    constraint_catalog: 'postgres',
    constraint_schema: 'public',
    constraint_name: 'pages_category_id_fkey',
    table_catalog: 'postgres',
    table_schema: 'public',
    table_name: 'pages',
    constraint_type: 'FOREIGN KEY',
    is_deferrable: 'NO',
    initially_deferred: 'NO',
    enforced: 'YES',
    column_name: 'category_id',
    ordinal_position: 1,
    position_in_unique_constraint: 1,
    foreign_table_name: 'categories',
    foreign_column_name: 'id'
  }
]
```

Since Platformatic DB runs against many database engines, that object might be different in MySQL or PostgreSQL or SQLite.

There are, although, these fields that are common to all databases

- `column_name`: the column that stores the foreign key
- `foreign_table_name`: the table hosting the related row
- `foreign_column_name`: the column in foreign table that identifies the row


