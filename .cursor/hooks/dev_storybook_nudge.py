#!/usr/bin/env python3
"""Nudge Dev to run storybook-smoke after visual file edits."""

import json
import re
import sys
from pathlib import Path

STATE_DIR = Path(".cursor/hooks/state")
DEV_VISUAL_FLAG = STATE_DIR / "dev_visual_edits.flag"

VISUAL_RE = re.compile(
    r"(\.scss$|\.tailwind\.ts$|"
    r"/src/components/modus-wc-[^/]+/[^/]+\.tsx$|"
    r"\.stories\.tsx?$)"
)


def main() -> None:
    try:
        payload = json.loads(sys.stdin.read() or "{}")
    except json.JSONDecodeError:
        sys.exit(0)

    file_path = str(payload.get("file_path") or "")
    if not file_path:
        tool_input = payload.get("tool_input") or {}
        if isinstance(tool_input, dict):
            file_path = str(
                tool_input.get("path")
                or tool_input.get("file_path")
                or tool_input.get("target_file")
                or ""
            )
    normalized = file_path.replace("\\", "/")
    if not VISUAL_RE.search(normalized):
        sys.exit(0)

    STATE_DIR.mkdir(parents=True, exist_ok=True)
    DEV_VISUAL_FLAG.write_text(file_path, encoding="utf-8")

    print(
        json.dumps(
            {
                "additional_context": (
                    "Visual file edited. Before push or Open PR, invoke graph-impact "
                    "then storybook-smoke on the changed component and reverseImpact "
                    "default stories (max 3 parents)."
                )
            }
        )
    )


if __name__ == "__main__":
    main()
