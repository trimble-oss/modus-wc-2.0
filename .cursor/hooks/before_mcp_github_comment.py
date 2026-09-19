#!/usr/bin/env python3
"""Block PR comments that combine QA-rerun with Routing: qa-full (label stacking)."""

import json
import re
import sys

QA_RERUN_RE = re.compile(
    r"(^|[\s])QA-rerun:[\s]*add([\s]|$)", re.MULTILINE | re.IGNORECASE
)
QA_FULL_RE = re.compile(
    r"(^|[\s])Routing:[\s]*qa-full([\s]|$)", re.MULTILINE | re.IGNORECASE
)

COMMENT_TOOLS = {
    "add_issue_comment",
    "create_issue_comment",
    "add_pull_request_review",
    "pull_request_review_write",
}


def extract_body(tool_input_raw: str) -> str:
    try:
        tool_input = json.loads(tool_input_raw or "{}")
    except json.JSONDecodeError:
        return tool_input_raw or ""

    if isinstance(tool_input, dict):
        for key in ("body", "comment", "message", "text"):
            value = tool_input.get(key)
            if isinstance(value, str):
                return value
    return ""


def main() -> None:
    try:
        payload = json.loads(sys.stdin.read() or "{}")
    except json.JSONDecodeError:
        print(json.dumps({"permission": "allow"}))
        return

    tool_name = str(payload.get("tool_name") or "")
    if tool_name not in COMMENT_TOOLS and "comment" not in tool_name.lower():
        print(json.dumps({"permission": "allow"}))
        return

    body = extract_body(str(payload.get("tool_input") or ""))
    if not body:
        print(json.dumps({"permission": "allow"}))
        return

    if QA_RERUN_RE.search(body) and QA_FULL_RE.search(body):
        print(
            json.dumps(
                {
                    "permission": "deny",
                    "user_message": (
                        "Blocked comment: do not combine QA-rerun: add with "
                        "Routing: qa-full. Post QA-rerun: add only on refine/repair."
                    ),
                    "agent_message": (
                        "Split the routing signal: on /refine or qa-failed repair post "
                        "QA-rerun: add only (plus Fix applied / what changed). "
                        "Routing: qa-full belongs on Open PR only. Post again without "
                        "Routing: qa-full."
                    ),
                }
            )
        )
        return

    print(json.dumps({"permission": "allow"}))


if __name__ == "__main__":
    main()
