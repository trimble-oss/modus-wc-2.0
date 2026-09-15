#!/usr/bin/env python3
"""Follow up when QA stops without a verdict after visual-related work."""

import json
import re
import sys
from pathlib import Path

STATE_DIR = Path(".cursor/hooks/state")
GRAPH_SLICE = STATE_DIR / "graph_slice.json"
QA_CONTEXT_RE = re.compile(r"modus-qa-automation|Modus WC 2\.0 QA agent", re.IGNORECASE)
VERDICT_RE = re.compile(
    r"^## QA (PASSED|FAILED|BLOCKED|SKIPPED|PASSED WITH CONCERNS)",
    re.MULTILINE,
)
STORYBOOK_RE = re.compile(r"storybook|SMOKE:|screenshot|/opt/cursor/artifacts", re.IGNORECASE)


def session_state_dir(payload: dict) -> Path:
    session_id = str(
        payload.get("conversation_id")
        or payload.get("session_id")
        or payload.get("parent_conversation_id")
        or "default"
    )
    safe_id = re.sub(r"[^A-Za-z0-9._-]", "_", session_id)
    return STATE_DIR / safe_id


def visual_scope() -> bool:
    if not GRAPH_SLICE.is_file():
        return False
    try:
        data = json.loads(GRAPH_SLICE.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return False
    changed = data.get("changedTags") or []
    return bool(changed)


def main() -> None:
    try:
        payload = json.loads(sys.stdin.read() or "{}")
    except json.JSONDecodeError:
        sys.exit(0)

    status = payload.get("status")
    loop_count = int(payload.get("loop_count") or 0)
    state_dir = session_state_dir(payload)
    response_file = state_dir / "last_agent_response.txt"

    if loop_count >= 1:
        sys.exit(0)

    if status != "completed":
        sys.exit(0)

    response = ""
    if response_file.is_file():
        response = response_file.read_text(encoding="utf-8")

    if not QA_CONTEXT_RE.search(response):
        sys.exit(0)

    if VERDICT_RE.search(response):
        sys.exit(0)

    if not (visual_scope() or STORYBOOK_RE.search(response)):
        sys.exit(0)

    if STORYBOOK_RE.search(response):
        followup = (
            "Stop hook: post exactly one PR conversation comment with a ## QA * "
            "verdict header (PASSED, FAILED — visual/functional, BLOCKED, or SKIPPED). "
            "Include gate/tests/visual/coverage dimensions and per-scenario evidence."
        )
    else:
        followup = (
            "Stop hook: visual files changed but no Storybook evidence or QA verdict. "
            "Run graph-impact then storybook-smoke, then post one ## QA * verdict comment."
        )

    print(json.dumps({"followup_message": followup}))


if __name__ == "__main__":
    main()
