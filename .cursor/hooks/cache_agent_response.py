#!/usr/bin/env python3
"""Cache the latest assistant response for QA stop verdict checks."""

import json
import re
import sys
from pathlib import Path

STATE_DIR = Path(".cursor/hooks/state")


def session_state_dir(payload: dict) -> Path:
    session_id = str(
        payload.get("conversation_id")
        or payload.get("session_id")
        or payload.get("parent_conversation_id")
        or "default"
    )
    safe_id = re.sub(r"[^A-Za-z0-9._-]", "_", session_id)
    return STATE_DIR / safe_id


def main() -> None:
    try:
        payload = json.loads(sys.stdin.read() or "{}")
    except json.JSONDecodeError:
        return

    text = payload.get("text")
    if not isinstance(text, str) or not text.strip():
        sys.exit(0)

    state_dir = session_state_dir(payload)
    state_dir.mkdir(parents=True, exist_ok=True)
    (state_dir / "last_agent_response.txt").write_text(text, encoding="utf-8")

    sys.exit(0)


if __name__ == "__main__":
    main()
