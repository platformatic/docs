# Platformatic Docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Where is the documentation?

Documentation lives in [Platformatic](https://github.com/platformatic/platformatic/tree/main/docs) repo.

The `scripts/doc-watcher.js` file helps you "import" those docs into `./docs` directory.

There are two ways to do this
  - run `./scripts/doc-watcher.js --source ../relative/path/to/plt/docs/directory` in one terminal and run `npx docusaurus start` on another
  - run `DOCS=path/to/platformatic/docs npm run start`.

The script will keep directories in sync. You should work on `platformatic/docs` directory and commit changes in that repo. On this repo `./docs` directory is git-ignored.

## Run development server

`npm run start`

## Setting up the development environment

On a unix system:

1. `mkdir /workdir` (chose your own directory)
1. `cd /workdir`
1. `git clone https://github.com/platformatic/platformatic.git` or use your own [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
1. `git clone https://github.com/platformatic/oss.git` or use your own [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
1. `cd /workdir/oss`
1. run `DOCS=/workdir/platformatic/docs npm run start` to start the development server

## Deploy

Deploy happens in Github Actions. Take a look at the workflow in `.github` folder.

## Known issues

### Deleting directories

Sometimes when you delete a directory in `./docs`, docusaurus will crash. Just stop it and restart.
