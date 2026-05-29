#!/usr/bin/env bash
set -euo pipefail

# Notify n8n with release notes for summarization and Google Chat approval flow.
# Usage: notify-n8n-release.sh [version] [event]
#   version - Optional SemVer hint to pick a draft/published release (e.g. 1.6.0).
#             When omitted, uses the latest GitHub draft release.
#   event   - Optional event type (default: publish)
#
# Version, tag, and name are always taken from the GitHub release record
# (draft or published), not reconstructed from the version argument.

VERSION_HINT="${1:-}"
EVENT="${2:-publish}"
REPO="${GITHUB_REPOSITORY:?GITHUB_REPOSITORY is required}"
N8N_WEBHOOK_URL="${N8N_WEBHOOK_URL:-}"
TAG_PREFIX="moduswebcomponents-"
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ -z "$N8N_WEBHOOK_URL" ]; then
  echo "N8N_WEBHOOK_URL not configured, skipping n8n notification."
  exit 0
fi

version_from_tag() {
  local tag="$1"
  tag="${tag#${TAG_PREFIX}}"
  tag="${tag#v}"
  echo "$tag"
}

version_from_name() {
  local name="$1"
  if [[ "$name" =~ Modus\ Web\ Components\ ([0-9]+\.[0-9]+\.[0-9]+.*)$ ]]; then
    echo "${BASH_REMATCH[1]}"
  fi
}

find_release() {
  local hint="$1"
  local release="null"

  if [ -n "$hint" ]; then
    local tag="${TAG_PREFIX}${hint}"
    release="$(gh api "repos/${REPO}/releases" --jq "[.[] | select(.tag_name == \"${tag}\")][0]")"
  fi

  if [ "$release" = "null" ] || [ -z "$release" ]; then
    release="$(gh api "repos/${REPO}/releases" --jq '[.[] | select(.draft == true)][0]')"
  fi

  echo "$release"
}

release="$(find_release "$VERSION_HINT")"

if [ "$release" = "null" ] || [ -z "$release" ]; then
  if [ -n "$VERSION_HINT" ]; then
    echo "No GitHub release found for ${TAG_PREFIX}${VERSION_HINT}, skipping n8n notification."
  else
    echo "No GitHub draft release found, skipping n8n notification."
  fi
  exit 0
fi

TAG="$(echo "$release" | jq -r '.tag_name // ""')"
NAME="$(echo "$release" | jq -r '.name // ""')"
body="$(echo "$release" | jq -r '.body // ""')"
VERSION="$(version_from_tag "$TAG")"

if [ -z "$VERSION" ]; then
  VERSION="$(version_from_name "$NAME")"
fi

if [ -z "$VERSION" ]; then
  echo "Could not determine version from release tag/name (${TAG}), skipping n8n notification."
  exit 0
fi

if [ -z "$NAME" ] || [ "$NAME" = "null" ]; then
  NAME="Modus Web Components ${VERSION}"
fi

if [ -z "$body" ]; then
  echo "Release notes body is empty for ${TAG}, skipping n8n notification."
  exit 0
fi

N8N_WEBHOOK_TOKEN="$(bash "${script_dir}/resolve-trimble-n8n-token.sh")"

if [[ "$N8N_WEBHOOK_URL" == *"trimble-ai.com"* ]] && [ -z "$N8N_WEBHOOK_TOKEN" ]; then
  echo "Trimble n8n token is required. Set TRIMBLE_N8N_CLIENT_ID and TRIMBLE_N8N_CLIENT_SECRET, or N8N_WEBHOOK_TOKEN." >&2
  exit 1
fi

curl_args=(
  --fail-with-body
  -X POST "$N8N_WEBHOOK_URL"
  -H "Content-Type: application/json"
)

if [ -n "$N8N_WEBHOOK_TOKEN" ]; then
  curl_args+=(-H "Authorization: Bearer ${N8N_WEBHOOK_TOKEN}")
fi

jq -n \
  --arg version "$VERSION" \
  --arg tag "$TAG" \
  --arg name "$NAME" \
  --arg body "$body" \
  --arg repo "$REPO" \
  --arg event "$EVENT" \
  '{version: $version, tag: $tag, name: $name, body: $body, repo: $repo, event: $event}' | \
  curl "${curl_args[@]}" -d @-

echo "Notified n8n for ${TAG} (${EVENT}, version ${VERSION} from GitHub release)."
