# AGENTS.md

Docusaurus site for https://docs.platformatic.dev.

## Documentation prose is NOT authored in this repo

`docs/`, `versioned_docs/`, `versioned_sidebars/`, `sidebars.json` and `versions.json` are
committed to git but are **generated artifacts**. `scripts/build.mjs` wipes and re-extracts
them from release tags of the upstream `platformatic/platformatic` repo on every deploy.

- Editing a `.md` file under `docs/` or `versioned_docs/` is silently discarded on the next build.
- To change doc content, open a PR against `platformatic/platformatic` in its `docs/` directory.
- Only these are real source here: `docusaurus.config.js`, `sidebars` overrides in config,
  `src/`, `plugins/`, `static/`, `scripts/`, `util/`, and the root config files.

## Deploy pipeline

- Any push to `main` runs `.github/workflows/rebuild-and-deploy-docs.yml`, which rebuilds from
  upstream and pushes an `[automated commit] Bump docs to versions ...` plus a `vX.Y.Z-<run>` tag.
  Those commits dominate the history; ignore them when doing archaeology.
- `scripts/check.mjs` keeps one version per major, down to v2 (v0.x/v1.x are dropped), and skips
  the tags hardcoded in its `releasesToSkip` array.
- `TARGET_REPO` is a repository secret (`platformatic/platformatic`); it is never in the tree.

## Non-discoverable commands

- Local dev of doc content requires the upstream repo cloned as a sibling:
  `export DOCS=$(realpath $PWD/../platformatic/docs) && npm run sync-and-start`.
  Plain `npm start` serves whatever generated content is already committed.
- Reproduce a CI build locally: `TARGET_REPO=platformatic/platformatic node scripts/build.mjs main 3.63.0 2.75.2`.
  Needs the `unzip` binary on PATH, and destroys `versioned_docs/`, `versioned_sidebars/` and `tmp/`.
- Lint: `npx standard | npx snazzy`. There is no `npm run lint` script and CI does not lint,
  but `standard` config lives in `package.json`.
- `engines` says Node `^22`; CI actually builds on Node 20.

## Landmines

- `onBrokenLinks` and `onBrokenMarkdownLinks` are both `warn`. A broken navbar/footer/redirect
  target will build and deploy cleanly and only 404 in production — verify link targets against
  the files in `versioned_docs/version-<latest>/` by hand.
- Footer/redirect entries in `docusaurus.config.js` use version-less `/docs/...` paths, which
  resolve to the **latest released version**, not to `docs/` (which is served under `/docs/next`).
  A path that exists in `docs/` may not exist in the newest `versioned_docs/` directory.
