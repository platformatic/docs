# Platformatic DB Docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Link main documentation

Docusaurus will build the documentation part of the website from the `./docs` folder. 

To test the current version of docs, you should link that folder to the one living on `platformatic-private` repo.

```
ln -sf ../platformatic-private/docs ./docs
```

## Run development server

`npm run start`

## Deploy

Deploy happens in Github Actions. Take a look at the workflow in `.github` folder.