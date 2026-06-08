# NPM authentication setup

## Purpose

Configure local npm auth so `npm ci` and `npm install` succeed in `modus-wc-2.0`.

This repo pulls private packages from:

- **GitHub Packages** — `@trimble-oss/modus-stencil-razor-output-target` (required)
- **Trimble Artifactory** — `@trimble-agentic-external-npm-local/agentic-platform-sdk-iframe-typescript` (optional dependency; skip unless you need agentic SDK work)

CI already works. This doc is for **local developer machines only**.

## Prerequisites

- Node.js >= 16 and npm >= 7
- [GitHub CLI](https://cli.github.com/) (`gh`) installed
- GitHub account with access to the **trimble-oss** organization
- Clone of this repository

## Setup steps

Run from the repository root:

```bash
gh auth login
gh auth refresh -s read:packages
npm run setup:auth
npm ci
```

### What each step does

1. **`gh auth login`** — Authenticate `gh` with your Trimble GitHub account.
2. **`gh auth refresh -s read:packages`** — Ensure the token can read GitHub Packages.
3. **`npm run setup:auth`** — Writes a managed auth block to `~/.npmrc`. Uses `gh auth token` automatically. Prompts for a Trimble Artifactory token only if you need the optional agentic SDK; press Enter to skip.
4. **`npm ci`** — Installs dependencies. Success means auth is configured correctly.

Tokens are stored in `~/.npmrc` only. Never commit tokens to this repository.

## Verify success

```bash
npm ci
```

Expected: install completes with no `401 Unauthorized` errors.

Optional check:

```bash
GITHUB_AUTH_TOKEN="$(gh auth token)" npm view @trimble-oss/modus-stencil-razor-output-target version
```

Expected output: `1.0.39` (or the current published version).

## If setup fails

### `401 Unauthorized` from `npm.pkg.github.com`

```bash
gh auth status
gh auth refresh -s read:packages
npm run setup:auth
npm ci
```

If it still fails, the GitHub user likely lacks package access. Ask a [modus-maintainers](https://github.com/orgs/trimble-oss/teams/modus-maintainers) admin to confirm **trimble-oss** org membership and authorize SSO for the token.

### `gh` not found

Install GitHub CLI from https://cli.github.com/ and rerun the setup steps.

### Artifactory `401` (optional package only)

Only required for agentic SDK work. Generate a token at https://artifactory.trimble.tools/ and rerun:

```bash
npm run setup:auth
```

Paste the Artifactory token when prompted.

### Stale npm cache

```bash
npm cache clean --force
npm ci
```

## CI reference

GitHub Actions does not use `~/.npmrc`. Workflows inject:

```yaml
env:
  GITHUB_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  TRIMBLE_AGENTIC_NPM_TOKEN: ${{ secrets.TRIMBLE_AGENTIC_NPM_TOKEN }}
```

No local setup is needed in CI.

## Security

- Keep tokens in `~/.npmrc` only.
- Use minimum scope: `read:packages` for GitHub.
- Revoke tokens when offboarding.

## Agent instructions

When a developer cannot run `npm ci` in this repo:

1. Confirm they are in the repo root.
2. Run the **Setup steps** block exactly as written.
3. Run **Verify success**.
4. On failure, apply the matching section under **If setup fails**.
5. Do not commit tokens or modify the repo `.npmrc` to include literal secrets.
