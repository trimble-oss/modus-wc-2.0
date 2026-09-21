#!/usr/bin/env python3
"""Cache assistant responses and comparison-doc hints for stop hooks."""

import json
import sys

from hook_state import COMPARISON_DOC_RE, session_state_dir


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

    match = COMPARISON_DOC_RE.search(text)
    if match:
        (state_dir / "comparison_doc_url.txt").write_text(match.group(0), encoding="utf-8")

    sys.exit(0)


if __name__ == "__main__":
    main()
