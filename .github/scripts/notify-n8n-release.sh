#!/usr/bin/env bash
set -euo pipefail

# Notify n8n with release notes for summarization and Google Chat approval flow.
# Usage: notify-n8n-release.sh <version> [event]
#   version - SemVer being published (e.g. 1.6.0)
#   event   - Optional event type (default: publish)

VERSION="${1:?version is required}"
EVENT="${2:-publish}"
REPO="${GITHUB_REPOSITORY:?GITHUB_REPOSITORY is required}"
N8N_WEBHOOK_URL="${N8N_WEBHOOK_URL:-}"

if [ -z "$N8N_WEBHOOK_URL" ]; then
  echo "N8N_WEBHOOK_URL not configured, skipping n8n notification."
  exit 0
fi

TAG="moduswebcomponents-${VERSION}"
NAME="Modus Web Components ${VERSION}"

draft="$(gh api "repos/${REPO}/releases" --jq "[.[] | select(.draft == true and .tag_name == \"${TAG}\")][0]")"

if [ "$draft" = "null" ] || [ -z "$draft" ]; then
  draft="$(gh api "repos/${REPO}/releases" --jq '[.[] | select(.draft == true)][0]')"
fi

if [ "$draft" = "null" ] || [ -z "$draft" ]; then
  published="$(gh api "repos/${REPO}/releases/tags/${TAG}" 2>/dev/null || echo "null")"
  if [ "$published" != "null" ] && [ -n "$published" ]; then
    body="$(echo "$published" | jq -r '.body // ""')"
  else
    echo "No release notes found for ${TAG}, skipping n8n notification."
    exit 0
  fi
else
  body="$(echo "$draft" | jq -r '.body // ""')"
fi

if [ -z "$body" ]; then
  echo "Release notes body is empty for ${TAG}, skipping n8n notification."
  exit 0
fi

jq -n \
  --arg version "$VERSION" \
  --arg tag "$TAG" \
  --arg name "$NAME" \
  --arg body "$body" \
  --arg repo "$REPO" \
  --arg event "$EVENT" \
  '{version: $version, tag: $tag, name: $name, body: $body, repo: $repo, event: $event}' | \
  curl --fail-with-body -X POST "$N8N_WEBHOOK_URL" \
    -H "Content-Type: application/json" \
    -d @-

echo "Notified n8n for ${TAG} (${EVENT})."
