#!/usr/bin/env python3
"""Follow up when QA stops without a verdict after visual-related work."""

import json
import re
import sys
from pathlib import Path

STATE_DIR = Path(".cursor/hooks/state")
RESPONSE_FILE = STATE_DIR / "last_agent_response.txt"
VISUAL_FLAG = STATE_DIR / "visual_edits.flag"

VERDICT_RE = re.compile(
    r"^## QA (PASSED|FAILED|BLOCKED|SKIPPED|PASSED WITH CONCERNS)",
    re.MULTILINE,
)
STORYBOOK_RE = re.compile(r"storybook|SMOKE:|screenshot|/opt/cursor/artifacts", re.IGNORECASE)


def main() -> None:
    try:
        payload = json.loads(sys.stdin.read() or "{}")
    except json.JSONDecodeError:
        sys.exit(0)

    status = payload.get("status")
    loop_count = int(payload.get("loop_count") or 0)

    if status != "completed" or loop_count >= 1:
        sys.exit(0)

    response = ""
    if RESPONSE_FILE.is_file():
        response = RESPONSE_FILE.read_text(encoding="utf-8")

    has_verdict = bool(VERDICT_RE.search(response))
    visual_work = VISUAL_FLAG.is_file()

    if has_verdict:
        if VISUAL_FLAG.is_file():
            VISUAL_FLAG.unlink(missing_ok=True)
        sys.exit(0)

    if not visual_work:
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
