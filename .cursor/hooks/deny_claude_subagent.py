#!/usr/bin/env python3
"""Deny Task subagents that route to Claude; allow composer-2.5 and inherit."""

import json
import re
import sys

CLAUDE_RE = re.compile(r"claude", re.IGNORECASE)
ALLOWED = {"", "inherit", "composer-2.5", "composer-2.5-fast", "composer-2.5-fast-mode"}


def main() -> None:
    try:
        payload = json.loads(sys.stdin.read() or "{}")
    except json.JSONDecodeError:
        print(json.dumps({"permission": "allow"}))
        return

    subagent_type = str(payload.get("subagent_type") or "")
    model = str(payload.get("subagent_model") or "")

    if CLAUDE_RE.search(model):
        print(
            json.dumps(
                {
                    "permission": "deny",
                    "user_message": (
                        f"Blocked subagent on {model}. Use storybook-smoke or "
                        "graph-impact (Composer 2.5) instead of built-in Explore."
                    ),
                }
            )
        )
        return

    if subagent_type in {"storybook-smoke", "graph-impact"}:
        if model in ALLOWED or not model:
            print(json.dumps({"permission": "allow"}))
            return
        print(
            json.dumps(
                {
                    "permission": "deny",
                    "user_message": (
                        f"Blocked {subagent_type} on {model}. "
                        "Custom subagents must use Composer 2.5 (inherit or composer-2.5)."
                    ),
                }
            )
        )
        return

    if model in ALLOWED or not model:
        print(json.dumps({"permission": "allow"}))
        return

    if subagent_type in {"explore", "generalPurpose", "shell"} and model not in ALLOWED:
        print(
            json.dumps(
                {
                    "permission": "deny",
                    "user_message": (
                        f"Blocked {subagent_type} subagent ({model}). "
                        "Use storybook-smoke or graph-impact."
                    ),
                }
            )
        )
        return

    print(json.dumps({"permission": "allow"}))


if __name__ == "__main__":
    main()
