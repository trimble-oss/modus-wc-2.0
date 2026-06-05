#!/usr/bin/env bash
set -euo pipefail

# Resolve N8N_WEBHOOK_TOKEN from env or fetch a fresh Trimble OAuth token.
# Usage: export N8N_WEBHOOK_TOKEN="$(bash resolve-trimble-n8n-token.sh)"

if [ -n "${N8N_WEBHOOK_TOKEN:-}" ]; then
  echo "$N8N_WEBHOOK_TOKEN"
  exit 0
fi

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
bash "${script_dir}/get-trimble-n8n-token.sh"
