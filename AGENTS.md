# AGENTS.md

## Cursor Cloud specific instructions

Modus Web Components 2.0 is a framework-agnostic UI library built with **Stencil JS**.
The primary dev experience is **Storybook** (component playground/docs). There is no
runtime backend or database. Standard commands are documented in `README.md` and the
root `package.json` `scripts`; the notes below only cover non-obvious caveats.

### Private registry auth is required to install (most important)

`npm ci` / `npm install` pull three private packages and will fail without tokens:

- `@trimble-oss/modus-stencil-razor-output-target` — GitHub Packages (`trimble-oss` org);
  imported by `stencil.config.ts` (Blazor output target).
- `@trimble-oss/custom-elements-manifest-analyzer` — GitHub Packages; listed under
  `optionalDependencies` but is **effectively required**: it provides the
  `custom-elements-manifest` CLI used by the `build:cem-json` wireit step, so
  `npm run build` fails without it even though npm treats it as optional.
- `@trimble-agentic-external-npm-local/agentic-platform-sdk-iframe-typescript` — Trimble
  Artifactory; imported by the Storybook AI-chat addon (`.storybook/addons/ai-chat`).

`.npmrc` reads two tokens from the environment, so set them as secrets (no local
`~/.npmrc` needed here):

- `GITHUB_AUTH_TOKEN` — needs `read:packages` **and** `trimble-oss` org access with SSO
  authorized. The default Cursor `gh` installation token does NOT have package read on
  `trimble-oss` (installs 403 with "Permission installation not allowed to Read
  organization package").
- `TRIMBLE_AGENTIC_NPM_TOKEN` — Trimble Artifactory token.

Once both secrets are set, `npm ci` (the startup update script) installs cleanly.

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
  first (`npm run build`). Blazor/MAUI additionally require the .NET SDK.
