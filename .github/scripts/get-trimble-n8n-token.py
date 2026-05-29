#!/usr/bin/env python3
"""Fetch Trimble OAuth token for n8n webhooks (local testing)."""

import base64
import os

import requests

CLIENT_ID = os.environ.get("TRIMBLE_N8N_CLIENT_ID")
CLIENT_SECRET = os.environ.get("TRIMBLE_N8N_CLIENT_SECRET")
TOKEN_URL = os.environ.get(
    "TRIMBLE_N8N_TOKEN_URL", "https://stage.id.trimblecloud.com/oauth/token"
)
SCOPE = os.environ.get("TRIMBLE_N8N_SCOPE", "Agentic-N8N-Webhook")


def get_access_token() -> str:
    if not CLIENT_ID or not CLIENT_SECRET:
        raise SystemExit(
            "Set TRIMBLE_N8N_CLIENT_ID and TRIMBLE_N8N_CLIENT_SECRET env vars."
        )

    auth = base64.b64encode(f"{CLIENT_ID}:{CLIENT_SECRET}".encode()).decode()
    response = requests.post(
        TOKEN_URL,
        headers={
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": f"Basic {auth}",
        },
        data={"grant_type": "client_credentials", "scope": SCOPE},
        timeout=30,
    )
    response.raise_for_status()
    token = response.json().get("access_token")
    if not token:
        raise SystemExit(f"No access_token in response: {response.text}")
    return token


if __name__ == "__main__":
    print(get_access_token())
