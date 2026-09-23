#!/usr/bin/env bash
set -euo pipefail

# Run npm install with retries (registry propagation / transient failures).
# Usage: npm-install-with-retry.sh [npm install args...]
# Defaults to: npm install

MAX_ATTEMPTS="${NPM_INSTALL_MAX_ATTEMPTS:-3}"
SLEEP_SECONDS="${NPM_INSTALL_RETRY_SLEEP_SECONDS:-30}"

if [ "$#" -eq 0 ]; then
  set -- npm install
fi

attempt=1
while [ "$attempt" -le "$MAX_ATTEMPTS" ]; do
  echo "npm install attempt ${attempt}/${MAX_ATTEMPTS}: $*"
  if "$@"; then
    echo "npm install succeeded on attempt ${attempt}."
    exit 0
  fi
  if [ "$attempt" -eq "$MAX_ATTEMPTS" ]; then
    echo "npm install failed after ${MAX_ATTEMPTS} attempts." >&2
    exit 1
  fi
  echo "npm install failed; retrying in ${SLEEP_SECONDS}s..."
  sleep "$SLEEP_SECONDS"
  attempt=$((attempt + 1))
done
