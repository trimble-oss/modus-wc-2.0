#!/usr/bin/env python3
"""Follow up when QA PASSED visual work without reading comparison-doc source."""

import json
import sys

from hook_state import (
    COMPARISON_DOC_RE,
    QA_CONTEXT_RE,
    SOURCE_READ_RE,
    VERDICT_RE,
    session_state_dir,
)


def comparison_doc_required(text: str, state_dir) -> bool:
    if COMPARISON_DOC_RE.search(text):
        return True
    if "comparison-doc" in text.lower():
        return True
    url_file = state_dir / "comparison_doc_url.txt"
    return url_file.is_file()


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
    if not response_file.is_file():
        sys.exit(0)

    response = response_file.read_text(encoding="utf-8")
    if not QA_CONTEXT_RE.search(response):
        sys.exit(0)
    if not VERDICT_RE.search(response) or "## QA PASSED" not in response:
        sys.exit(0)
    if "visual" in response.lower() and "not-evaluated" in response.lower():
        sys.exit(0)
    if not comparison_doc_required(response, state_dir):
        sys.exit(0)

    drove_read = (state_dir / "drive_source_read.flag").is_file()
    cited_source = bool(SOURCE_READ_RE.search(response))

    if drove_read and cited_source:
        sys.exit(0)

    print(
        json.dumps(
            {
                "followup_message": (
                    "Stop hook: QA-source is a comparison Google Doc. Read it via "
                    "Drive MCP before ## QA PASSED. Compare Storybook screenshots to "
                    "doc images/tokens (e.g. dark header selects = gray-10, not white). "
                    "Post one PR conversation comment with cited expected values, or "
                    "## QA FAILED — visual if they mismatch."
                )
            }
        )
    )


if __name__ == "__main__":
    main()
