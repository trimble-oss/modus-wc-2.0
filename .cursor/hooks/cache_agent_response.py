#!/usr/bin/env python3
"""Cache the latest assistant response for QA stop verdict checks."""

import json
import sys
from pathlib import Path

STATE_DIR = Path(".cursor/hooks/state")
RESPONSE_FILE = STATE_DIR / "last_agent_response.txt"


def main() -> None:
    try:
        payload = json.loads(sys.stdin.read() or "{}")
    except json.JSONDecodeError:
        return

    text = payload.get("text")
    if isinstance(text, str) and text.strip():
        STATE_DIR.mkdir(parents=True, exist_ok=True)
        RESPONSE_FILE.write_text(text, encoding="utf-8")

    sys.exit(0)


if __name__ == "__main__":
    main()
