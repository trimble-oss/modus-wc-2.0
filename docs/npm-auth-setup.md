# NPM authentication setup (Blazor tools only)

## Purpose

The default repo install (`npm ci` at the root) uses the **public npm registry** only. You do not need GitHub Packages or Artifactory to run Storybook, tests, or the JavaScript Stencil build.

This doc is for people who generate the **Blazor Razor Class Library**. That path installs a private package from GitHub Packages:

- `@trimble-oss/modus-stencil-razor-output-target` (in `integrations/blazor/razor-output/`)

CI Blazor jobs already pass `GITHUB_TOKEN`. This file is for **local machines** only.

For help with Blazor, GitHub Packages, or any local setup, contact [elisha_sampeterprabhu@trimble.com](mailto:elisha_sampeterprabhu@trimble.com).

## Prerequisites

- Node.js >= 16 and npm >= 7
- [GitHub CLI](https://cli.github.com/) (`gh`) installed
- GitHub account with access to the **trimble-oss** organization (package read + SSO authorized on the token)
- Clone of this repository

## Setup steps

Run from the repository root:

```bash
gh auth login
gh auth refresh -s read:packages
export GITHUB_AUTH_TOKEN="$(gh auth token)"
npm run setup:auth
npm run install:blazor-tools
```

### What each step does

1. **`gh auth login`** — Authenticate `gh` with your Trimble GitHub account.
2. **`gh auth refresh -s read:packages`** — Ensure the token can read GitHub Packages.
3. **`export GITHUB_AUTH_TOKEN=...`** — `integrations/blazor/razor-output/.npmrc` reads this env var.
4. **`npm run setup:auth`** — Writes a managed GitHub Packages auth block to `~/.npmrc`.
5. **`npm run install:blazor-tools`** — `npm ci` in `integrations/blazor/razor-output` (not an npm workspace).

Tokens are stored in `~/.npmrc` and/or the environment. Never commit tokens to this repository.

Then generate the RCL:

```bash
npm run stencil:build:blazor
```

## Verify success

```bash
GITHUB_AUTH_TOKEN="$(gh auth token)" npm view @trimble-oss/modus-stencil-razor-output-target version --registry=https://npm.pkg.github.com
```

Expected output: `1.0.39` (or the current published version).

## If setup fails

### `401 Unauthorized` from `npm.pkg.github.com`

```bash
gh auth status
gh auth refresh -s read:packages
export GITHUB_AUTH_TOKEN="$(gh auth token)"
npm run setup:auth
npm run install:blazor-tools
```

If it still fails, the GitHub user likely lacks package access. Contact [elisha_sampeterprabhu@trimble.com](mailto:elisha_sampeterprabhu@trimble.com) for setup help, or ask a [modus-maintainers](https://github.com/orgs/trimble-oss/teams/modus-maintainers) admin to confirm **trimble-oss** org membership and authorize SSO for the token.

### `gh` not found

Install GitHub CLI from https://cli.github.com/ and rerun the setup steps.

### Stale npm cache

```bash
npm cache clean --force
npm run install:blazor-tools
```

## CI reference

GitHub Actions does not use `~/.npmrc` for the default install. Blazor workflows run root `npm ci` with no tokens, then:

```yaml
- run: npm run install:blazor-tools
  env:
    GITHUB_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
- run: npm run stencil:build:blazor
```

## Security

- Keep tokens in `~/.npmrc` / the environment only.
- Use minimum scope: `read:packages` for GitHub.
- Revoke tokens when offboarding.
