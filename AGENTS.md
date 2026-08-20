# AGENTS.md

## Cursor Cloud specific instructions

Modus Web Components 2.0 is a framework-agnostic UI library built with **Stencil JS**.
The primary dev experience is **Storybook** (component playground/docs). There is no
runtime backend or database. Standard commands are documented in `README.md` and the
root `package.json` `scripts`; the notes below only cover non-obvious caveats.

### Default install is public npm (no tokens)

Root `npm ci` / `npm install` do **not** need GitHub Packages or Artifactory.
`@trimble-oss/custom-elements-manifest-analyzer` is on the public registry
(optionalDependency, but `build:cem-json` needs the `custom-elements-manifest` CLI).

### Blazor tools need GitHub Packages (optional)

Generating the Blazor RCL uses `@trimble-oss/modus-stencil-razor-output-target` from
GitHub Packages. It is **not** a root dependency. Install it with:

```bash
export GITHUB_AUTH_TOKEN="$(gh auth token)"   # read:packages + trimble-oss SSO
npm run install:blazor-tools
npm run stencil:build:blazor
```

`GITHUB_AUTH_TOKEN` is read by `integrations/blazor/razor-output/.npmrc`. The default
Cursor `gh` installation token does NOT have package read on `trimble-oss` (installs
403 with "Permission installation not allowed to Read organization package").

Blazor CI jobs set `GITHUB_AUTH_TOKEN` from `secrets.GITHUB_TOKEN` only for
`install:blazor-tools`. Do not inject that token into root `npm ci`.

### Wireit deletes build outputs before running (gotcha)

Wireit clears a step's declared `output` files before executing it. If `build:cem-json`
fails (e.g. missing `custom-elements-manifest` CLI), it will have already deleted the
tracked file `src/custom-elements.json`. Restore it with
`git checkout -- src/custom-elements.json`.

### Build regenerates tracked files

`stencil build --docs` (run by `npm run build`) regenerates tracked artifacts:
`src/components.d.ts`, every component `readme.md`, and `src/styles/modus-wc-variables.css`.
Don't commit these incidental regenerations unless the change is intentional.

### Environment / commands

- Node `>=20` (repo Volta-pins `20.19.2`); the toolchain also builds/tests fine on Node 22.
- `npm start` → Stencil watch + Storybook on port **6006** + lint (via wireit).
- `npm run build:ci` builds the Stencil library only (faster than full `npm run build`,
  which also builds Storybook).
- `npm test` runs `stencil test --spec` (Jest + Puppeteer headless Chromium; coverage
  threshold is 100%). `npm run lint` runs eslint + prettier + stylelint.
- Framework integrations (React/Angular/Vue/Blazor/MAUI) and the `mcp/` package are
  optional and each have their own install; they depend on the root `dist/` being built
  first. JS frameworks: `npm run build` / `npm run build:ci`. Blazor/MAUI additionally
  require `npm run install:blazor-tools`, `npm run stencil:build:blazor`, and the .NET SDK.
