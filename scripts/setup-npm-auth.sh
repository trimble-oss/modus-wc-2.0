#!/usr/bin/env bash
set -euo pipefail

MARKER_START='# >>> modus-wc-2.0 npm auth (managed by scripts/setup-npm-auth.sh) >>>'
MARKER_END='# <<< modus-wc-2.0 npm auth <<<'
NPMRC="${HOME}/.npmrc"

GITHUB_REGISTRY='@trimble-oss:registry=https://npm.pkg.github.com'
GITHUB_AUTH_LINE='//npm.pkg.github.com/:_authToken='

echo 'Modus WC — Blazor tools NPM auth setup'
echo 'Writes a GitHub Packages token to ~/.npmrc (never committed to git).'
echo 'Required only for npm run install:blazor-tools, not for the default npm ci.'
echo ''

resolve_github_token() {
  if command -v gh >/dev/null 2>&1; then
    if token="$(gh auth token 2>/dev/null)"; then
      if gh auth status -h github.com 2>&1 | grep -q "read:packages"; then
        echo "Using GitHub token from gh CLI ($(gh api user -q .login 2>/dev/null || echo 'logged-in user'))." >&2
        printf '%s' "$token"
        return 0
      fi
      echo 'gh is logged in but may lack read:packages. Run: gh auth refresh -s read:packages' >&2
    fi
  fi

  echo 'GitHub Packages token (classic PAT with read:packages; input hidden):' >&2
  read -r -s github_token
  echo '' >&2
  if [[ -z "$github_token" ]]; then
    echo 'ERROR: GitHub token is required.' >&2
    exit 1
  fi
  printf '%s' "$github_token"
}

write_npmrc_block() {
  local github_token="$1"
  local block_file tmp

  block_file="$(mktemp)"
  tmp="$(mktemp)"

  {
    echo "$MARKER_START"
    echo "$GITHUB_REGISTRY"
    echo "${GITHUB_AUTH_LINE}${github_token}"
    echo "$MARKER_END"
  } >"$block_file"

  touch "$NPMRC"
  if grep -qF "$MARKER_START" "$NPMRC"; then
    awk -v start="$MARKER_START" -v end="$MARKER_END" '
      $0 == start { skip=1; next }
      $0 == end { skip=0; next }
      !skip { print }
    ' "$NPMRC" >"$tmp"
    mv "$tmp" "$NPMRC"
  fi

  echo '' >>"$NPMRC"
  cat "$block_file" >>"$NPMRC"
  rm -f "$block_file" "$tmp"
}

verify_github_auth() {
  local github_token="$1"

  if GITHUB_AUTH_TOKEN="$github_token" npm view @trimble-oss/modus-stencil-razor-output-target version --registry=https://npm.pkg.github.com >/dev/null 2>&1; then
    echo 'GitHub Packages auth: OK'
    return 0
  fi
  echo 'WARNING: Could not verify GitHub Packages auth. Check token scope (read:packages) and trimble-oss org access.' >&2
  return 1
}

main() {
  github_token="$(resolve_github_token)"
  write_npmrc_block "$github_token"
  echo ''
  echo "Updated ${NPMRC}"
  echo ''
  verify_github_auth "$github_token" || true
  echo ''
  echo 'Next: export GITHUB_AUTH_TOKEN (or rely on ~/.npmrc) and run npm run install:blazor-tools'
  echo 'Docs: docs/npm-auth-setup.md'
}

main "$@"
