"""Shared session-scoped hook state paths."""

from __future__ import annotations

import re
from pathlib import Path

STATE_DIR = Path(".cursor/hooks/state")

DEV_CONTEXT_RE = re.compile(
    r"modus-dev-automation|Modus WC 2\.0 Dev agent", re.IGNORECASE
)
QA_CONTEXT_RE = re.compile(
    r"modus-qa-automation|Modus WC 2\.0 QA agent", re.IGNORECASE
)
COMPARISON_DOC_RE = re.compile(
    r"https://docs\.google\.com/document/d/[a-zA-Z0-9_-]+", re.IGNORECASE
)
VERDICT_RE = re.compile(
    r"^## QA (PASSED|FAILED|BLOCKED|SKIPPED|PASSED WITH CONCERNS)",
    re.MULTILINE,
)
STORYBOOK_RE = re.compile(r"storybook|SMOKE:|screenshot|/opt/cursor/artifacts", re.IGNORECASE)
SOURCE_READ_RE = re.compile(
    r"comparison-doc|Drive MCP|read.*doc|gray-10|gray_10|token table|QA-source-kind:",
    re.IGNORECASE,
)


def session_state_dir(payload: dict) -> Path:
    session_id = str(
        payload.get("conversation_id")
        or payload.get("session_id")
        or payload.get("parent_conversation_id")
        or "default"
    )
    safe_id = re.sub(r"[^A-Za-z0-9._-]", "_", session_id)
    return STATE_DIR / safe_id
