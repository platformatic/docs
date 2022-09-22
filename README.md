# Platformatic DB Docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Where is the documentation?

Documentation lives in [Platformatic DB](https://github.com/platformatic/platformatic/tree/main/docs) repo.

The `scripts/doc-watcher.js` file helps you "import" those docs into `./docs` directory.

There are two ways to do this
  - run `./scripts/doc-watcher.js --source ../relative/path/to/plt/docs/directory` in one terminal and run `npx docusaurus start` on another
  - run `DOCS=path/to/platformatic/docs npm run start`.

The script will keep directories in sync. You should work on `platformatic/docs` directory and commit changes in that repo. On this repo `./docs` directory is git-ignored.

## Run development server

`npm run start`

## Deploy

Deploy happens in Github Actions. Take a look at the workflow in `.github` folder.

## Known issues

### Deleting directories

Sometimes when you delete a directory in `./docs`, docusaurus will crash. Just stop it and restart.
