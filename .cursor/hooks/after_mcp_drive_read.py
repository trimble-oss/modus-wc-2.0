#!/usr/bin/env python3
"""Record when Drive MCP reads a Google Doc (comparison source)."""

import json
import sys

from hook_state import COMPARISON_DOC_RE, session_state_dir


def main() -> None:
    try:
        payload = json.loads(sys.stdin.read() or "{}")
    except json.JSONDecodeError:
        sys.exit(0)

    server = str(payload.get("mcp_server_name") or "").lower()
    tool_name = str(payload.get("tool_name") or "").lower()
    if "drive" not in server and "drive" not in tool_name:
        sys.exit(0)

    tool_input_raw = str(payload.get("tool_input") or "")
    if not COMPARISON_DOC_RE.search(tool_input_raw):
        # Still count generic Drive reads during QA/Dev visual work.
        if "read" not in tool_name and "file" not in tool_name:
            sys.exit(0)

    state_dir = session_state_dir(payload)
    state_dir.mkdir(parents=True, exist_ok=True)
    (state_dir / "drive_source_read.flag").write_text(tool_name or "drive", encoding="utf-8")

    match = COMPARISON_DOC_RE.search(tool_input_raw)
    if match:
        (state_dir / "comparison_doc_url.txt").write_text(match.group(0), encoding="utf-8")

    sys.exit(0)


if __name__ == "__main__":
    main()
