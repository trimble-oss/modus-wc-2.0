#!/usr/bin/env bash
set -euo pipefail

# Call Trimble n8n approve/reject webhooks with Bearer auth (for GitHub Actions).
# Usage: n8n-release-approval.sh <approve|reject> <approval_id>

ACTION="${1:?action is required (approve or reject)}"
APPROVAL_ID="${2:?approval_id is required}"
WEBHOOK_BASE="${N8N_WEBHOOK_BASE:-https://flows-webhook.stage.trimble-ai.com/agentic/workflows/v1/webhook}"
APPROVAL_KEY="${N8N_APPROVAL_KEY:-}"
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
N8N_WEBHOOK_TOKEN="$(bash "${script_dir}/resolve-trimble-n8n-token.sh")"

if [ -z "$APPROVAL_KEY" ]; then
  echo "N8N_APPROVAL_KEY secret is not configured." >&2
  exit 1
fi

if [ -z "$N8N_WEBHOOK_TOKEN" ]; then
  echo "Trimble n8n token is required. Set TRIMBLE_N8N_CLIENT_ID and TRIMBLE_N8N_CLIENT_SECRET, or N8N_WEBHOOK_TOKEN." >&2
  exit 1
fi

case "$ACTION" in
  approve)
    PATH_SUFFIX="modus-wc-release-approve"
    ;;
  reject)
    PATH_SUFFIX="modus-wc-release-reject"
    ;;
  *)
    echo "Invalid action: $ACTION (use approve or reject)" >&2
    exit 1
    ;;
esac

URL="${WEBHOOK_BASE}/${PATH_SUFFIX}?id=${APPROVAL_ID}&key=${APPROVAL_KEY}"

echo "Calling n8n ${ACTION} webhook for approval ID: ${APPROVAL_ID}"

curl --fail-with-body -X GET "$URL" \
  -H "Authorization: Bearer ${N8N_WEBHOOK_TOKEN}"

echo ""
echo "Done: ${ACTION} request sent to n8n."
