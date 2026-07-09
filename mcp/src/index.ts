#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { readFileSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { z } from "zod";

const __dirname = dirname(fileURLToPath(import.meta.url));
const VERSIONS_DIR = join(__dirname, "..", "versions");
const BASE_DIR = join(VERSIONS_DIR, "base");

// To change the base version (e.g. when dropping support for older versions):
// 1. Replace mcp/versions/base/ with the new base version's full data
// 2. Update BASE_VERSION below
// 3. Delete version folders older than the new base
// 4. Recompute deltas for remaining versions (diff each against new base,
//    keep only changed files + _all_components.json)
// 5. Update the minimum version in both tool description strings
// See mcp/scripts/backfill.sh for automation helpers.
const BASE_VERSION = "1.0.6";

const SAFE_NAME = /^[a-z0-9_-]+$/;
const SAFE_VERSION = /^\d+\.\d+\.\d+$/;

const pkg = JSON.parse(readFileSync(join(__dirname, "..", "package.json"), "utf-8"));

// ---------------------------------------------------------------------------
// Version resolution helpers
// ---------------------------------------------------------------------------

function compareSemver(a: string, b: string): number {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    if ((pa[i] ?? 0) !== (pb[i] ?? 0)) return (pa[i] ?? 0) - (pb[i] ?? 0);
  }
  return 0;
}

function getAvailableVersions(): string[] {
  if (!existsSync(VERSIONS_DIR)) return [];
  const versions = readdirSync(VERSIONS_DIR)
    .filter((d) => SAFE_VERSION.test(d))
    .sort(compareSemver);
  if (!versions.includes(BASE_VERSION) && existsSync(BASE_DIR)) {
    versions.push(BASE_VERSION);
    versions.sort(compareSemver);
  }
  return versions;
}

function getLatestVersion(): string | undefined {
  const versions = getAvailableVersions();
  return versions[versions.length - 1];
}

function resolveVersion(requested: string): { resolved: string; exact: boolean } | undefined {
  if (!SAFE_VERSION.test(requested)) return undefined;

  const available = getAvailableVersions();
  if (available.includes(requested)) {
    return { resolved: requested, exact: true };
  }

  // Auto-fallback: try the MINOR baseline (X.Y.0)
  const parts = requested.split(".");
  const minorBase = `${parts[0]}.${parts[1]}.0`;
  if (minorBase !== requested && available.includes(minorBase)) {
    return { resolved: minorBase, exact: false };
  }

  return undefined;
}

// ---------------------------------------------------------------------------
// Delta-based doc helpers (version folder -> base fallback)
// ---------------------------------------------------------------------------

function findDoc(name: string, version: string): string | undefined {
  if (!SAFE_NAME.test(name)) return undefined;

  // Gatekeeper: if this doc is not in the version's docs catalog, do not fall
  // back to base (prevents serving removed docs from older base data).
  const docsCatalog = getDocsCatalog(version);
  if (docsCatalog && !docsCatalog.docs.includes(name)) return undefined;

  if (version !== BASE_VERSION) {
    const versionPath = join(VERSIONS_DIR, version, "docs", `${name}.mdx`);
    if (existsSync(versionPath)) return versionPath;
  }
  const basePath = join(BASE_DIR, "docs", `${name}.mdx`);
  if (existsSync(basePath)) return basePath;
  return undefined;
}

function listAvailableDocs(version: string): string[] {
  const docsCatalog = getDocsCatalog(version);
  if (docsCatalog) return docsCatalog.docs;

  // Fallback for robustness if _all_docs.json is missing.
  const docs = new Set<string>();
  const baseDocsDir = join(BASE_DIR, "docs");
  if (existsSync(baseDocsDir)) {
    for (const f of readdirSync(baseDocsDir)) {
      if (f.endsWith(".mdx")) docs.add(f.replace(".mdx", ""));
    }
  }
  if (version !== BASE_VERSION) {
    const versionDocsDir = join(VERSIONS_DIR, version, "docs");
    if (existsSync(versionDocsDir)) {
      for (const f of readdirSync(versionDocsDir)) {
        if (f.endsWith(".mdx")) docs.add(f.replace(".mdx", ""));
      }
    }
  }
  return [...docs];
}

function getDocsCatalog(version: string): { docs: string[] } | null {
  const docsCatalogPath = version === BASE_VERSION
    ? join(BASE_DIR, "docs", "_all_docs.json")
    : join(VERSIONS_DIR, version, "docs", "_all_docs.json");
  if (!existsSync(docsCatalogPath)) return null;
  return JSON.parse(readFileSync(docsCatalogPath, "utf-8"));
}

function getCatalog(version: string): { components: string[] } | null {
  const catalogPath = version === BASE_VERSION
    ? join(BASE_DIR, "component-docs", "_all_components.json")
    : join(VERSIONS_DIR, version, "component-docs", "_all_components.json");
  if (!existsSync(catalogPath)) return null;
  return JSON.parse(readFileSync(catalogPath, "utf-8"));
}

function findComponentDoc(componentName: string, version: string): string | null {
  if (componentName === "_all_components") {
    if (version !== BASE_VERSION) {
      const versionPath = join(VERSIONS_DIR, version, "component-docs", "_all_components.json");
      if (existsSync(versionPath)) return versionPath;
    }
    const basePath = join(BASE_DIR, "component-docs", "_all_components.json");
    if (existsSync(basePath)) return basePath;
    return null;
  }

  // Gatekeeper: only return data if the component exists in this version's catalog
  const catalog = getCatalog(version);
  if (catalog && !catalog.components.includes(componentName)) return null;

  if (version !== BASE_VERSION) {
    const versionPath = join(VERSIONS_DIR, version, "component-docs", `${componentName}.json`);
    if (existsSync(versionPath)) return versionPath;
  }

  const basePath = join(BASE_DIR, "component-docs", `${componentName}.json`);
  if (existsSync(basePath)) return basePath;
  return null;
}

// ---------------------------------------------------------------------------
// Shared version resolution logic for tool handlers
// ---------------------------------------------------------------------------

function resolveVersionOrError(
  requestedVersion: string | undefined,
): { version: string; warning?: string } | { error: string; available_versions: string[] } {
  const available = getAvailableVersions();

  if (!requestedVersion) {
    const latest = getLatestVersion();
    if (!latest) {
      return {
        error: "No versioned documentation is available yet.",
        available_versions: [],
      };
    }
    return { version: latest };
  }

  const result = resolveVersion(requestedVersion);
  if (!result) {
    return {
      error: `Version '${requestedVersion}' is not available. Minimum supported version is ${available[0] ?? "unknown"}.`,
      available_versions: available,
    };
  }

  const warning = result.exact
    ? undefined
    : `Exact version '${requestedVersion}' not found; using '${result.resolved}' (nearest MINOR baseline).`;

  return { version: result.resolved, warning };
}

function textJson(value: unknown) {
  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(value, null, 2),
      },
    ],
  };
}

const ACCESSIBILITY_RULES = {
  conformance_target: "WCAG 2.2 AA",
  rules: [
    {
      id: "text-contrast",
      requirement: "Text and images of text must have contrast ratio >= 4.5:1.",
      wcag: ["1.4.3 Contrast (Minimum)"],
    },
    {
      id: "non-text-contrast",
      requirement: "Controls, focus indicators, meaningful icons, chart marks, and visual boundaries must have contrast ratio >= 3:1 against adjacent colors.",
      wcag: ["1.4.11 Non-text Contrast"],
    },
    {
      id: "no-color-only-meaning",
      requirement: "Color must not be the only way to communicate status, risk, ranking, required action, or selection.",
      wcag: ["1.4.1 Use of Color"],
    },
    {
      id: "keyboard",
      requirement: "Interactive content must be operable with a keyboard, in a logical focus order, with no keyboard trap.",
      wcag: ["2.1.1 Keyboard", "2.1.2 No Keyboard Trap", "2.4.3 Focus Order"],
    },
    {
      id: "focus-visible",
      requirement: "Keyboard focus indicators must be visible and not fully obscured.",
      wcag: ["2.4.7 Focus Visible", "2.4.11 Focus Not Obscured (Minimum)"],
    },
    {
      id: "target-size",
      requirement: "Pointer targets should be at least 24 by 24 CSS pixels unless an allowed WCAG exception applies.",
      wcag: ["2.5.8 Target Size (Minimum)"],
    },
    {
      id: "name-role-value",
      requirement: "Controls and meaningful custom elements must expose programmatic name, role, value, and state.",
      wcag: ["4.1.2 Name, Role, Value"],
    },
    {
      id: "sortable-table-sort-state",
      requirement: "Sortable table column headers must expose their sort state with aria-sort: 'ascending' or 'descending' on the actively sorted column and 'none' on the other sortable columns so assistive tech announces sortability and the current order. Non-sortable columns omit aria-sort.",
      wcag: ["4.1.2 Name, Role, Value"],
    },
    {
      id: "status-messages",
      requirement: "Status changes that do not move focus should be exposed through status/live-region semantics.",
      wcag: ["4.1.3 Status Messages"],
    },
  ],
  modus_guidance: [
    "Prefer Modus semantic tokens over fixed hex values so light and dark themes remain legible.",
    "Use status variants and labels together; do not rely on status color alone.",
    "Use Modus components when they provide native keyboard and screen-reader behavior.",
    "For sortable modus-wc-table columns, keep the built-in sort affordance so each sortable header reports aria-sort (ascending/descending/none); do not suppress it or rebuild sortable headers as plain markup that drops the sort state.",
    "Honor prefers-reduced-motion for non-essential motion.",
  ],
};

const MODUS_MODERN_TOKENS = {
  light: {
    primary: "#0063A3",
    primaryContent: "#FFFFFF",
    base100: "#FFFFFF",
    base200: "#CBCDD6",
    base300: "#B7B9C3",
    baseContent: "#252A2E",
    info: "#0063A3",
    infoContent: "#FFFFFF",
    success: "#1E8A44",
    successContent: "#FFFFFF",
    warning: "#E49325",
    warningContent: "#252A2E",
    error: "#DA212C",
    errorContent: "#FFFFFF",
  },
  dark: {
    primary: "#019AEB",
    primaryContent: "#000000",
    base100: "#171C1E",
    base200: "#353A40",
    base300: "#464B52",
    baseContent: "#FFFFFF",
    info: "#217CBB",
    infoContent: "#FFFFFF",
    success: "#4EA646",
    successContent: "#000000",
    warning: "#FEC157",
    warningContent: "#252A2E",
    error: "#E86363",
    errorContent: "#000000",
  },
};

const ICON_GUIDANCE = {
  component: "modus-wc-icon",
  usage: [
    "Load the Modus icon stylesheet once in the host application.",
    "Use real Modus icon names and variant=\"outlined\" or variant=\"solid\".",
    "Decorative icons should set decorative/aria-hidden semantics and must not be the only visible cue.",
    "Meaningful icons need visible text or an accessible name such as aria-label or title.",
    "For status icons, pair the icon with text and semantic status color.",
  ],
  examples: {
    decorative: '<modus-wc-icon decorative name="info" size="sm"></modus-wc-icon>',
    meaningful: '<modus-wc-icon name="warning" variant="solid" aria-label="Schedule risk"></modus-wc-icon><span>Schedule risk</span>',
  },
};

function validateMarkup(html: string) {
  const issues: Array<{ id: string; message: string }> = [];

  if (/<(?:Chart|Modus[A-Z][A-Za-z0-9]*)\b/.test(html)) {
    issues.push({
      id: "pseudo-component",
      message: "Use real HTML or real modus-wc-* elements, not JSX/pseudo-components.",
    });
  }
  if (/<script\b[^>]*\bsrc\s*=/.test(html)) {
    issues.push({
      id: "remote-script",
      message: "Do not load remote or external scripts inside response HTML.",
    });
  }
  if (/<modus-wc-icon\b(?![^>]*(?:decorative|aria-hidden|aria-label|title=))[^>]*><\/modus-wc-icon>/i.test(html)) {
    issues.push({
      id: "icon-name",
      message: "Meaningful icons need visible text or an accessible name; decorative icons need decorative/aria-hidden semantics.",
    });
  }
  if (/color\s*:\s*(?:red|green|#(?:f00|0f0|ff0000|00ff00)\b)/i.test(html)) {
    issues.push({
      id: "color-only-risk",
      message: "Avoid bare red/green color cues; pair semantic color with text or icons and verify contrast.",
    });
  }
  if (/<canvas\b/i.test(html) && !/(?:aria-label|aria-describedby|<figcaption|<caption|summary)/i.test(html)) {
    issues.push({
      id: "visual-summary",
      message: "Charts and primary visuals need an accessible text summary, caption, or label.",
    });
  }

  return {
    is_valid: issues.length === 0,
    issues,
  };
}

// ---------------------------------------------------------------------------
// MCP server
// ---------------------------------------------------------------------------

const server = new McpServer({
  name: "Modus Docs MCP Server",
  version: pkg.version,
});

// ---------------------------------------------------------------------------
// Tool: get_modus_implementation_data
// ---------------------------------------------------------------------------

server.tool(
  "get_modus_implementation_data",
  `Looks up and parses documentation from the Modus Web Components documentation repository.

Retrieves framework integration guides, getting started guides, and general documentation.

IMPORTANT: Before calling this tool, check the user's project for the installed package version:
- For JavaScript/TypeScript projects: check package.json for @trimble-oss/moduswebcomponents
- For Blazor / MAUI projects: check the .csproj for the ModusWebComponents.Blazor NuGet package version
Pass that version as the 'version' parameter to receive matching documentation. If their version is
below 1.0.6 (minimum supported), advise them to update their dependency.

Available documents:
- Framework Integration: "angular", "blazor", "react", "vue"
- Guides: "getting-started", "accessibility", "form-inputs", "modus-icon-usage", "styling", "testing"`,
  {
    docs_name: z.string().describe(
      "The name of the document to retrieve (without .mdx extension). Examples: 'angular', 'react', 'vue', 'getting-started'"
    ),
    version: z.string().optional().describe(
      "The version of @trimble-oss/moduswebcomponents (npm) or ModusWebComponents.Blazor (NuGet) " +
      "installed in the user's project (e.g. '1.1.1'). " +
      "Check the user's package.json or .csproj before calling. Defaults to the latest available version."
    ),
  },
  ({ docs_name, version }) => {
    const versionResult = resolveVersionOrError(version);
    if ("error" in versionResult) {
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(versionResult, null, 2),
          },
        ],
      };
    }

    const { version: resolvedVersion, warning } = versionResult;
    const docPath = findDoc(docs_name, resolvedVersion);

    if (!docPath) {
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify({
              error: `Document '${docs_name}' not found in version ${resolvedVersion}`,
              available_documents: listAvailableDocs(resolvedVersion),
              requested: docs_name,
              version: resolvedVersion,
              ...(warning ? { warning } : {}),
            }, null, 2),
          },
        ],
      };
    }

    const content = readFileSync(docPath, "utf-8");
    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify({
            document_name: docs_name,
            content,
            type: "implementation_guide",
            format: "mdx",
            version: resolvedVersion,
            ...(warning ? { warning } : {}),
          }, null, 2),
        },
      ],
    };
  }
);

// ---------------------------------------------------------------------------
// Tool: get_modus_component_data
// ---------------------------------------------------------------------------

server.tool(
  "get_modus_component_data",
  `Looks up and parses component documentation for Modus Web Components.

Retrieves component properties, events, methods, slots, usage examples, and story documentation.
For Blazor / MAUI projects the response also includes a 'blazor' section with PascalCase
C# parameter names, csharpType, EventCallback event names, RenderFragment slot names,
the generated .razor template, and a ready-to-use Razor usage example.

IMPORTANT: Before calling this tool, check the user's project for the installed package version:
- For JavaScript/TypeScript projects: check package.json for @trimble-oss/moduswebcomponents
- For Blazor / MAUI projects: check the .csproj for the ModusWebComponents.Blazor NuGet package version
Pass that version as the 'version' parameter to receive documentation matching their installed version.
If their version is below 1.0.6 (minimum supported), advise them to update their dependency.

Special component names:
- "_all_components" - Returns catalog of all available components (includes blazor_components list)

Component naming format: "modus-wc-{component-name}"
Examples: "modus-wc-table", "modus-wc-button", "modus-wc-alert"`,
  {
    component_name: z.string().describe(
      "The name of the Modus component (e.g., 'modus-wc-table') or '_all_components' for the full catalog"
    ),
    version: z.string().optional().describe(
      "The version of @trimble-oss/moduswebcomponents (npm) or ModusWebComponents.Blazor (NuGet) " +
      "installed in the user's project (e.g. '1.1.1'). " +
      "Check the user's package.json or .csproj before calling. Defaults to the latest available version."
    ),
  },
  ({ component_name, version }) => {
    if (!SAFE_NAME.test(component_name)) {
      return {
        content: [{ type: "text" as const, text: JSON.stringify({ error: "Invalid component name" }, null, 2) }],
      };
    }

    const versionResult = resolveVersionOrError(version);
    if ("error" in versionResult) {
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(versionResult, null, 2),
          },
        ],
      };
    }

    const { version: resolvedVersion, warning } = versionResult;
    const docPath = findComponentDoc(component_name, resolvedVersion);

    if (!docPath) {
      const catalog = getCatalog(resolvedVersion);
      const available = catalog?.components ?? [];
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify({
              error: `Component '${component_name}' not found in version ${resolvedVersion}`,
              available_components: available,
              requested: component_name,
              version: resolvedVersion,
              ...(warning ? { warning } : {}),
            }, null, 2),
          },
        ],
      };
    }

    const content = JSON.parse(readFileSync(docPath, "utf-8"));
    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify({
            component_name,
            data: content,
            type: "component_documentation",
            format: "json",
            version: resolvedVersion,
            ...(warning ? { warning } : {}),
          }, null, 2),
        },
      ],
    };
  }
);

// ---------------------------------------------------------------------------
// Tool: get_modus_accessibility_rules
// ---------------------------------------------------------------------------

server.tool(
  "get_modus_accessibility_rules",
  `Returns a compact, deterministic Modus + WCAG accessibility checklist for generated UI.

Use this instead of asking the model to infer accessibility requirements from prose documentation.
The rules target WCAG 2.2 AA and Modus theme-aware UI output.`,
  {
    version: z.string().optional().describe(
      "The version of @trimble-oss/moduswebcomponents installed in the user's project. Defaults to the latest available version."
    ),
  },
  ({ version }) => {
    const versionResult = resolveVersionOrError(version);
    if ("error" in versionResult) return textJson(versionResult);
    return textJson({
      type: "accessibility_rules",
      version: versionResult.version,
      ...(versionResult.warning ? { warning: versionResult.warning } : {}),
      ...ACCESSIBILITY_RULES,
    });
  }
);

// ---------------------------------------------------------------------------
// Tool: get_modus_design_tokens
// ---------------------------------------------------------------------------

server.tool(
  "get_modus_design_tokens",
  `Returns compact Modus semantic design tokens for theme-aware generated UI.

Use these tokens for accessible light/dark color choices instead of hard-coded one-theme values.`,
  {
    version: z.string().optional().describe(
      "The version of @trimble-oss/moduswebcomponents installed in the user's project. Defaults to the latest available version."
    ),
    theme: z.string().optional().describe("Theme name. Currently returns modus-modern semantic tokens."),
    mode: z.enum(["light", "dark", "both"]).optional().describe("Theme mode to return. Defaults to both."),
  },
  ({ version, theme, mode }) => {
    const versionResult = resolveVersionOrError(version);
    if ("error" in versionResult) return textJson(versionResult);
    const requestedMode = mode ?? "both";
    return textJson({
      type: "design_tokens",
      version: versionResult.version,
      ...(versionResult.warning ? { warning: versionResult.warning } : {}),
      theme: theme ?? "modus-modern",
      mode: requestedMode,
      tokens: requestedMode === "both"
        ? MODUS_MODERN_TOKENS
        : { [requestedMode]: MODUS_MODERN_TOKENS[requestedMode] },
      css_variables: {
        primary: "var(--modus-wc-color-primary)",
        primaryContent: "var(--modus-wc-color-primary-content)",
        base100: "var(--modus-wc-color-base-100)",
        base200: "var(--modus-wc-color-base-200)",
        base300: "var(--modus-wc-color-base-300)",
        baseContent: "var(--modus-wc-color-base-content)",
        info: "var(--modus-wc-color-info)",
        success: "var(--modus-wc-color-success)",
        warning: "var(--modus-wc-color-warning)",
        error: "var(--modus-wc-color-error)",
      },
    });
  }
);

// ---------------------------------------------------------------------------
// Tool: get_modus_icon_data
// ---------------------------------------------------------------------------

server.tool(
  "get_modus_icon_data",
  `Returns compact Modus icon usage and accessibility guidance for generated UI.

Use this when adding iconography so icons remain real Modus components and accessible.`,
  {
    version: z.string().optional().describe(
      "The version of @trimble-oss/moduswebcomponents installed in the user's project. Defaults to the latest available version."
    ),
  },
  ({ version }) => {
    const versionResult = resolveVersionOrError(version);
    if ("error" in versionResult) return textJson(versionResult);
    return textJson({
      type: "icon_guidance",
      version: versionResult.version,
      ...(versionResult.warning ? { warning: versionResult.warning } : {}),
      ...ICON_GUIDANCE,
    });
  }
);

// ---------------------------------------------------------------------------
// Tool: validate_modus_markup
// ---------------------------------------------------------------------------

server.tool(
  "validate_modus_markup",
  `Runs lightweight static checks over generated Modus/HTML markup.

This is not a full accessibility audit; it catches common AI-output mistakes before verifier retry.`,
  {
    html: z.string().describe("The generated response_html fragment to validate."),
  },
  ({ html }) => textJson({
    type: "markup_validation",
    ...validateMarkup(html),
  })
);

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  process.stderr.write("Modus Docs MCP Server running on stdio\n");
}

main().catch((err) => {
  process.stderr.write(`Fatal error: ${err}\n`);
  process.exit(1);
});
