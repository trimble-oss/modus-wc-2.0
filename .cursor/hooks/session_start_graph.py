#!/usr/bin/env python3
"""Inject a small component-graph slice at session start for Dev/QA automations."""

import json
import re
import subprocess
import sys
from pathlib import Path

GRAPH_PATH = Path("docs/component-graph/component-graph.json")
STATE_DIR = Path(".cursor/hooks/state")
RUNTIME_EDGE_TYPES = {"composes", "slot", "hosts"}
TAG_RE = re.compile(r"src/components/(modus-wc-[^/]+)/")


def emit(payload: dict) -> None:
    print(json.dumps(payload))
    sys.exit(0)


def tags_from_diff() -> list[str]:
    names: set[str] = set()
    commands = [
        ["git", "diff", "--name-only", "origin/main...HEAD"],
        ["git", "diff", "--name-only"],
        ["git", "diff", "--name-only", "--cached"],
        ["git", "diff", "--name-only", "HEAD~1..HEAD"],
    ]
    for cmd in commands:
        try:
            out = subprocess.check_output(cmd, stderr=subprocess.DEVNULL, text=True)
        except (subprocess.CalledProcessError, FileNotFoundError):
            continue
        names.update(line for line in out.splitlines() if line.strip())

    tags: list[str] = []
    seen: set[str] = set()
    for line in sorted(names):
        match = TAG_RE.search(line)
        if match and match.group(1) not in seen:
            seen.add(match.group(1))
            tags.append(match.group(1))
    return tags


def main() -> None:
    try:
        raw = sys.stdin.read()
        payload = json.loads(raw) if raw.strip() else {}
    except json.JSONDecodeError:
        payload = {}

    is_background = bool(payload.get("is_background_agent"))
    env: dict[str, str] = {"MODUS_HOOKS_ENABLED": "1"}
    if is_background:
        env["MODUS_CLOUD_AGENT"] = "1"

    if not GRAPH_PATH.is_file():
        emit({"env": env, "additional_context": "Component graph JSON missing; graph hooks fail open."})

    try:
        graph = json.loads(GRAPH_PATH.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        emit({"env": env, "additional_context": "Component graph unreadable; graph hooks fail open."})

    changed = tags_from_diff()
    reverse = graph.get("reverseImpact") or {}
    edges = graph.get("edges") or []

    slice_data: dict[str, object] = {"changedTags": changed}
    parents: dict[str, list[str]] = {}
    children: dict[str, list[str]] = {}

    for tag in changed:
        parents[tag] = list(reverse.get(tag) or [])
        child_tags: list[str] = []
        for edge in edges:
            if edge.get("source") != tag:
                continue
            if edge.get("type") not in RUNTIME_EDGE_TYPES:
                continue
            target = edge.get("target")
            if isinstance(target, str):
                child_tags.append(target)
        children[tag] = sorted(set(child_tags))

    slice_data["reverseImpact"] = parents
    slice_data["composeChildren"] = children

    STATE_DIR.mkdir(parents=True, exist_ok=True)
    (STATE_DIR / "graph_slice.json").write_text(
        json.dumps(slice_data, indent=2), encoding="utf-8"
    )

    context = (
        "Modus graph slice (sessionStart hook):\n"
        f"{json.dumps(slice_data, indent=2)}\n"
        "Use graph-impact + storybook-smoke subagents for Storybook targets. "
        "Checked-in reverseImpact is transitive; cap browser parents at 3."
    )
    emit({"env": env, "additional_context": context})


if __name__ == "__main__":
    main()
