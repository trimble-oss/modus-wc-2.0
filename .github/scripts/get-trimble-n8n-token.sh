#!/usr/bin/env bash
set -euo pipefail

# Fetch a short-lived Trimble OAuth token for n8n webhooks.
# Requires TRIMBLE_N8N_CLIENT_ID and TRIMBLE_N8N_CLIENT_SECRET (GitHub secrets).

CLIENT_ID="${TRIMBLE_N8N_CLIENT_ID:?TRIMBLE_N8N_CLIENT_ID is required}"
CLIENT_SECRET="${TRIMBLE_N8N_CLIENT_SECRET:?TRIMBLE_N8N_CLIENT_SECRET is required}"
TOKEN_URL="${TRIMBLE_N8N_TOKEN_URL:-https://stage.id.trimblecloud.com/oauth/token}"
SCOPE="${TRIMBLE_N8N_SCOPE:-Agentic-N8N-Webhook}"

basic_auth="$(printf '%s:%s' "$CLIENT_ID" "$CLIENT_SECRET" | base64 | tr -d '\n')"

response="$(curl --fail-with-body -sS -X POST "$TOKEN_URL" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Authorization: Basic ${basic_auth}" \
  --data-urlencode "grant_type=client_credentials" \
  --data-urlencode "scope=${SCOPE}")"

token="$(echo "$response" | jq -r '.access_token // empty')"

if [ -z "$token" ]; then
  echo "Failed to obtain Trimble access token." >&2
  echo "$response" >&2
  exit 1
fi

echo "$token"
