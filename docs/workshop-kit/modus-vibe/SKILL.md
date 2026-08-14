---
name: modus-vibe
description: Implement a Figma frame or designer prompt as a Modus Web Components prototype with explicit UI state. Use when the user pastes a Figma URL, asks for Modus components, or wants a live Trimble-looking UI without custom CSS.
---

# Modus vibe (designer prototypes)

## Workflow

1. If a Figma URL is present, use Figma MCP / `analyze_figma` on that node. Prefer Modus 2.0 library instances.
2. Look up real APIs with Modus MCP (`get_modus_component_data`, `get_modus_implementation_data`) before guessing props.
3. Implement one screen. Encode variants as state (`open`, `query`, `loading`, `error`), not extra routes or HTML pages.
4. Use `@trimble-oss/moduswebcomponents` (and React wrappers if the app is React). No native form controls when a `modus-wc-*` exists. No custom CSS.
5. Theme: `modus-modern-light` unless asked otherwise.
6. For modals, use `modal-id` + `showModal()` / `close()`.
7. For inputs in React, controlled `value` + `onInputChange` (`e.detail.target.value`).
8. Stop when the flow is clickable. Do not add auth, APIs, or CI unless asked.
