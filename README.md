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

# Clone the OSS repository
git clone https://github.com/platformatic/oss.git
```

After cloning, your working directory (`/workdir`) should contain:

- `/platformatic`
- `/oss`

3. #### Install dependencies in both repositories

Navigate to each directory and run npm install:

```bash
# Install dependencies in the platformatic repository
cd platformatic
npm install
cd ..

# Install dependencies in the oss repository
cd oss
npm install
cd ..
```

4. #### Navigate to the OSS directory

```bash
cd oss
```

## Running the Development Server

Step 1: Setup the docs environment variable 

```bash
# This sets the DOCS variable to the docs directory within the cloned Platformatic repository
export DOCS=$PWD/../platformatic/docs
```

Step 2: Start the development server

```bash
npm run start
```

## Deploy

Deployment is managed automatically through GitHub Actions. Check the workflow configurations in the `.github` folder within the OSS directory for details.

## Generate docs for an old Platformatic version

We keep online only the last 5 versions of Platformatic backwards, plus one version per each older major versions (excluding version `0.x`).
Every time a new version is realeased, this repository is tagged with `vX.Y.Z`.

To generate the documentation for a specific version, checkout the related tag and run the development server.

## Known issues

### Deleting directories

Deleting directories within `./docs` may cause Docusaurus to crash. If this happens, stop the server (Ctrl+C) and restart it.
