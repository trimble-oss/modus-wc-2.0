#!/usr/bin/env python3
"""Deny git clone / npm install of modus-blueprint (use GitHub MCP get_file_contents)."""

import json
import re
import sys

DENY_RE = re.compile(
    r"(git(?:\s+-C\s+\S+)?\s+clone[^\n]*modus-blueprint|"
    r"(?:npm\s+(?:i|install)|pnpm\s+(?:add|install)|yarn\s+add)[^\n]*modus-blueprint|"
    r"curl[^\n]*modus\.trimble\.com|wget[^\n]*modus\.trimble\.com)",
    re.IGNORECASE,
)


def main() -> None:
    try:
        payload = json.loads(sys.stdin.read() or "{}")
    except json.JSONDecodeError:
        print(json.dumps({"permission": "allow"}))
        return

    command = str(payload.get("command") or "")
    if DENY_RE.search(command):
        print(
            json.dumps(
                {
                    "permission": "deny",
                    "user_message": "Blocked blueprint clone/scrape. Use GitHub MCP get_file_contents on trimble-oss/modus-blueprint only.",
                    "agent_message": (
                        "Do not clone modus-blueprint or scrape modus.trimble.com. "
                        "Read mapped files via GitHub MCP per modus-qa-source skill."
                    ),
                }
            )
        )
        return

    print(json.dumps({"permission": "allow"}))


if __name__ == "__main__":
    main()
