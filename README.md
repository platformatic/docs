# Platformatic Documentation

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Where is the documentation?

The documentation is hosted in the [Platformatic](https://github.com/platformatic/platformatic/tree/main/docs) repository.

## Setting up the development environment

1. #### Create a working directory and navigate into it

```bash
mkdir /workdir
cd /workdir
```

2. #### Clone the Platformatic repositories

```bash
# Clone the main Platformatic repository
git clone https://github.com/platformatic/platformatic.git

# Clone the Docs repository
git clone https://github.com/platformatic/docs.git
```

After cloning, your working directory (`/workdir`) should contain:

- `/platformatic`
- `/docs`

3. #### Install dependencies in both repositories

Navigate to each directory and run npm install:

```bash
# Install dependencies in the platformatic repository
cd platformatic
npm install
cd ..

# Install dependencies in the docs repository
cd docs
npm install
cd ..
```

4. #### Navigate to the docs directory

```bash
cd docs
```

## Running the Development Server

Step 1: Setup the docs environment variable

```bash
# This sets the DOCS variable to the docs directory within the cloned Platformatic repository
export DOCS=`realpath $PWD/../platformatic/docs`
```

Step 2: Start the development server

```bash
npm run sync-and-start
```

## Build

If you want to manually build, and debug the CI build process this is the command you should run

```bash
TARGET_REPO=platformatic/platformatic node scripts/build.mjs 2.72.0
```

This will download the `v2.72.0` tag zip file of the `platformatic/platformatic` repo, unpack it and run the build process against the `docs` directory of the repo.

## Deploy

Deployment is managed automatically through GitHub Actions. Check the workflow configurations in the `.github` folder within the OSS directory for details.

## Generate docs for an old Platformatic version

We keep online only the last version of each Platformatic major version (excluding version `0.x`).
Every time a new version is released, this repository is tagged with `vX.Y.Z`.

To generate the documentation for a specific version, checkout the related tag and run the development server.

## Known issues

### Deleting directories

Deleting directories within `./docs` may cause Docusaurus to crash. If this happens, stop the server (Ctrl+C) and restart it.
