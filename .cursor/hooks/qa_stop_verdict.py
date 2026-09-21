#!/usr/bin/env python3
"""Follow up when QA stops without a verdict after visual-related work."""

import json
import sys

from hook_state import QA_CONTEXT_RE, STORYBOOK_RE, VERDICT_RE, session_state_dir

GRAPH_SLICE = __import__("pathlib").Path(".cursor/hooks/state/graph_slice.json")


def visual_scope() -> bool:
    if not GRAPH_SLICE.is_file():
        return False
    try:
        data = json.loads(GRAPH_SLICE.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return False
    return bool(data.get("changedTags"))


def main() -> None:
    try:
        payload = json.loads(sys.stdin.read() or "{}")
    except json.JSONDecodeError:
        sys.exit(0)

    if int(payload.get("loop_count") or 0) >= 1:
        sys.exit(0)
    if payload.get("status") != "completed":
        sys.exit(0)

    state_dir = session_state_dir(payload)
    response_file = state_dir / "last_agent_response.txt"
    response = response_file.read_text(encoding="utf-8") if response_file.is_file() else ""

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
