# Entity

TBC

## addEntityHooks (entityName, hooks)

Wraps an entity with  all the hooks defined in hooks.

```js
app.platformatic.addEntityHooks(entityName, {
  async find (originalFind, { where, ctx, fields }) {
    // Do something...

    return originalFind({ where, ctx, fields })
  },

  async save (originalSave, { input, ctx, fields }) {
    // Do something...

    return originalSave({ input, ctx, fields })
  },

  async insert (originalInsert, { inputs, ctx, fields }) {
    // Do something...

    return originalInsert({ inputs, ctx, fields })
  },

  async delete (originalDelete, { where, ctx, fields }) {
    // Do something...

    return originalDelete({ where, ctx, fields })
  }
})
```

Note the use of `ctx`. This is defined inside [Mercurius](https://github.com/mercurius-js/mercurius/blob/master/docs/context.md).
and exposed with the same API also by `sql-openapi`.
