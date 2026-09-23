#!/usr/bin/env bash
set -euo pipefail

# Wait until all framework publish workflows dispatched by a parent run finish.
# Usage: wait-for-framework-publish-runs.sh <orchestrator_run_id> <version>
#
# Writes GITHUB_OUTPUT:
#   framework_status=success|failure
#   failed_framework_workflows=comma-separated labels (empty on success)

ORCHESTRATOR_RUN_ID="${1:?orchestrator run id required}"
VERSION="${2:?version required}"
REPO="${GITHUB_REPOSITORY:?GITHUB_REPOSITORY is required}"

POLL_SECONDS="${FRAMEWORK_PUBLISH_POLL_SECONDS:-20}"
TIMEOUT_SECONDS="${FRAMEWORK_PUBLISH_TIMEOUT_SECONDS:-5400}"

declare -a WORKFLOW_FILES=(
  'publish-angular.yml:Angular'
  'publish-react.yml:React'
  'publish-vue.yml:Vue'
  'publish-blazor.yml:Blazor'
)

marker="(orchestrator ${ORCHESTRATOR_RUN_ID})"
declare -A RUN_IDS=()

find_run_for_workflow() {
  local workflow_file="$1"
  gh run list \
    --repo "$REPO" \
    --workflow "$workflow_file" \
    --limit 30 \
    --json databaseId,status,conclusion,displayTitle,name,createdAt \
    --jq "[.[] | select(((.name // \"\") + \" \" + (.displayTitle // \"\")) | contains(\"${marker}\"))][0]"
}

echo "Waiting for framework publishes for version ${VERSION} (orchestrator ${ORCHESTRATOR_RUN_ID})..."

deadline=$((SECONDS + TIMEOUT_SECONDS))
pending=1

while [ "$SECONDS" -lt "$deadline" ]; do
  pending=0

  for entry in "${WORKFLOW_FILES[@]}"; do
    workflow_file="${entry%%:*}"
    label="${entry##*:}"
    run_json="$(find_run_for_workflow "$workflow_file")"

    if [ -z "$run_json" ] || [ "$run_json" = "null" ]; then
      echo "  ${label}: run not found yet (${workflow_file})"
      pending=$((pending + 1))
      continue
    fi

    run_id="$(echo "$run_json" | jq -r '.databaseId')"
    status="$(echo "$run_json" | jq -r '.status')"
    conclusion="$(echo "$run_json" | jq -r '.conclusion // ""')"

    RUN_IDS["$label"]="$run_id"

    if [ "$status" != "completed" ]; then
      echo "  ${label}: run ${run_id} in progress (status=${status})"
      pending=$((pending + 1))
      continue
    fi

    echo "  ${label}: run ${run_id} completed (${conclusion})"
  done

  if [ "$pending" -eq 0 ]; then
    break
  fi

  sleep "$POLL_SECONDS"
done

if [ "$pending" -ne 0 ]; then
  echo "Timed out after ${TIMEOUT_SECONDS}s waiting for framework publish workflows." >&2
  {
    echo "framework_status=failure"
    echo "failed_framework_workflows=timeout waiting for framework workflows"
  } >> "${GITHUB_OUTPUT:-/dev/null}"
  exit 1
fi

failed_labels=()
for entry in "${WORKFLOW_FILES[@]}"; do
  label="${entry##*:}"
  run_id="${RUN_IDS[$label]:-}"
  if [ -z "$run_id" ]; then
    failed_labels+=("$label")
    continue
  fi
  conclusion="$(gh run view "$run_id" --repo "$REPO" --json conclusion --jq '.conclusion // ""')"
  if [ "$conclusion" != "success" ]; then
    failed_labels+=("$label")
    echo "Framework publish failed: ${label} (run ${run_id}, conclusion=${conclusion})" >&2
    echo "  ${GITHUB_SERVER_URL}/${REPO}/actions/runs/${run_id}"
  fi
done

if [ "${#failed_labels[@]}" -gt 0 ]; then
  failed_csv="$(IFS=','; echo "${failed_labels[*]}")"
  {
    echo "framework_status=failure"
    echo "failed_framework_workflows=${failed_csv}"
  } >> "${GITHUB_OUTPUT:-/dev/null}"
  exit 1
fi

{
  echo "framework_status=success"
  echo "failed_framework_workflows="
} >> "${GITHUB_OUTPUT:-/dev/null}"

echo "All framework publish workflows succeeded."
