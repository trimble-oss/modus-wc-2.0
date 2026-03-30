#!/usr/bin/env bash
# backfill.sh
#
# One-time script to generate versioned MCP documentation using the delta
# approach. 1.0.6 is the base version (full data in mcp/versions/base/).
# All other versions store only files that differ from base, plus
# _all_components.json and _all_docs.json which are always per-version.
#
# Uses git worktrees so it never disturbs the current working tree.
#
# Run from the repository root:
#   bash mcp/scripts/backfill.sh
#
# Prerequisites:
#   - Node.js and npm installed
#   - mcp/node_modules present (run `npm ci` inside mcp/ first)

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
MCP_DIR="$REPO_ROOT/mcp"
BASE_VERSION="1.0.6"
VERSIONS=("1.0.6" "1.0.7" "1.1.0" "1.1.1")
WORKTREE_BASE="$(mktemp -d)"
FULL_OUTPUT_BASE="$(mktemp -d)"

cleanup() {
  echo ""
  echo "Cleaning up worktrees..."
  for VERSION in "${VERSIONS[@]}"; do
    local wt="$WORKTREE_BASE/$VERSION"
    if git -C "$REPO_ROOT" worktree list --porcelain | grep -q "worktree $wt"; then
      git -C "$REPO_ROOT" worktree remove --force "$wt" 2>/dev/null || true
    fi
  done
  rm -rf "$WORKTREE_BASE" "$FULL_OUTPUT_BASE"
}
trap cleanup EXIT

echo "Repo root : $REPO_ROOT"
echo "Base ver  : $BASE_VERSION"
echo "Temp dirs : $WORKTREE_BASE (worktrees), $FULL_OUTPUT_BASE (full extractions)"

# --------------------------------------------------------------------------
# Phase 1: Extract full docs for every version into temp dirs
# --------------------------------------------------------------------------

for VERSION in "${VERSIONS[@]}"; do
  TAG="moduswebcomponents-${VERSION}"
  WORKTREE_DIR="$WORKTREE_BASE/$VERSION"
  FULL_OUT="$FULL_OUTPUT_BASE/$VERSION"

  echo ""
  echo "=== Extracting $VERSION (tag: $TAG) ==="

  git -C "$REPO_ROOT" worktree add --detach "$WORKTREE_DIR" "$TAG"

  mkdir -p "$FULL_OUT/component-docs"
  npx --prefix "$MCP_DIR" tsx "$MCP_DIR/scripts/extract-docs.ts" \
    --source-dir "$WORKTREE_DIR/src/components" \
    --output-dir "$FULL_OUT/component-docs"

  mkdir -p "$FULL_OUT/docs"
  if ls "$WORKTREE_DIR/src/stories/"*.mdx 1>/dev/null 2>&1; then
    cp "$WORKTREE_DIR/src/stories/"*.mdx "$FULL_OUT/docs/"
  fi
  if ls "$WORKTREE_DIR/src/stories/frameworks/"*.mdx 1>/dev/null 2>&1; then
    cp "$WORKTREE_DIR/src/stories/frameworks/"*.mdx "$FULL_OUT/docs/"
  fi
  node -e "const fs=require('fs');const p='$FULL_OUT/docs';const docs=fs.readdirSync(p).filter(f=>f.endsWith('.mdx')).map(f=>f.replace('.mdx','')).sort();fs.writeFileSync(p+'/_all_docs.json',JSON.stringify({total:docs.length,docs},null,2));"

  git -C "$REPO_ROOT" worktree remove --force "$WORKTREE_DIR"
  echo "  Extracted: $VERSION"
done

# --------------------------------------------------------------------------
# Phase 2: Create base/ from the base version
# --------------------------------------------------------------------------

echo ""
echo "=== Creating base/ from $BASE_VERSION ==="
DEST_BASE="$MCP_DIR/versions/base"
rm -rf "$DEST_BASE"
cp -r "$FULL_OUTPUT_BASE/$BASE_VERSION" "$DEST_BASE"
echo "  Base created: $(ls "$DEST_BASE/component-docs/" | wc -l) component files, $(ls "$DEST_BASE/docs/" | wc -l) doc files"

# --------------------------------------------------------------------------
# Phase 3: Create delta folders for other versions
# --------------------------------------------------------------------------

for VERSION in "${VERSIONS[@]}"; do
  [ "$VERSION" = "$BASE_VERSION" ] && continue

  echo ""
  echo "=== Creating delta for $VERSION ==="

  FULL_OUT="$FULL_OUTPUT_BASE/$VERSION"
  DEST_VER="$MCP_DIR/versions/$VERSION"
  rm -rf "$DEST_VER"
  mkdir -p "$DEST_VER/component-docs" "$DEST_VER/docs"

  # Always copy _all_components.json and _all_docs.json (gatekeepers)
  cp "$FULL_OUT/component-docs/_all_components.json" "$DEST_VER/component-docs/"
  cp "$FULL_OUT/docs/_all_docs.json" "$DEST_VER/docs/"

  # Copy only component files that differ from base
  KEPT=0
  SKIPPED=0
  for f in "$FULL_OUT/component-docs/"*.json; do
    fname=$(basename "$f")
    [ "$fname" = "_all_components.json" ] && continue
    basefile="$DEST_BASE/component-docs/$fname"
    if [ ! -f "$basefile" ] || ! diff -q "$f" "$basefile" >/dev/null 2>&1; then
      cp "$f" "$DEST_VER/component-docs/"
      KEPT=$((KEPT + 1))
    else
      SKIPPED=$((SKIPPED + 1))
    fi
  done
  echo "  Components: $KEPT kept (differ), $SKIPPED skipped (identical)"

  # Copy only doc files that differ from base
  KEPT=0
  SKIPPED=0
  for f in "$FULL_OUT/docs/"*.mdx; do
    [ ! -f "$f" ] && continue
    fname=$(basename "$f")
    basefile="$DEST_BASE/docs/$fname"
    if [ ! -f "$basefile" ] || ! diff -q "$f" "$basefile" >/dev/null 2>&1; then
      cp "$f" "$DEST_VER/docs/"
      KEPT=$((KEPT + 1))
    else
      SKIPPED=$((SKIPPED + 1))
    fi
  done
  echo "  Docs: $KEPT kept (differ), $SKIPPED skipped (identical)"
done

echo ""
echo "Backfill complete. Structure:"
for d in "$MCP_DIR/versions/"*/; do
  echo "  $(basename "$d")/: $(du -sh "$d" | cut -f1)"
done
echo "  Total: $(du -sh "$MCP_DIR/versions" | cut -f1)"
echo ""
echo "Next steps:"
echo "  1. Inspect the generated files"
echo "  2. git add mcp/versions/ && git commit -m 'chore: backfill MCP versioned docs (delta)'"
