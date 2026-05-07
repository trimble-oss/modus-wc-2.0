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

IMPORTANT: Before calling this tool, check the user's project package.json for the
@trimble-oss/moduswebcomponents dependency version. Pass that version as the 'version'
parameter to receive documentation matching their installed version. If their version is
below 1.0.6 (minimum supported), advise them to update their dependency.

Available documents:
- Framework Integration: "angular", "react", "vue"
- Guides: "getting-started", "accessibility", "form-inputs", "modus-icon-usage", "styling", "testing"`,
  {
    docs_name: z.string().describe(
      "The name of the document to retrieve (without .mdx extension). Examples: 'angular', 'react', 'vue', 'getting-started'"
    ),
    version: z.string().optional().describe(
      "The version of @trimble-oss/moduswebcomponents installed in the user's project (e.g. '1.1.1'). " +
      "Check the user's package.json before calling. Defaults to the latest available version."
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

IMPORTANT: Before calling this tool, check the user's project package.json for the
@trimble-oss/moduswebcomponents dependency version. Pass that version as the 'version'
parameter to receive documentation matching their installed version. If their version is
below 1.0.6 (minimum supported), advise them to update their dependency.

Special component names:
- "_all_components" - Returns catalog of all available components

Component naming format: "modus-wc-{component-name}"
Examples: "modus-wc-table", "modus-wc-button", "modus-wc-alert"`,
  {
    component_name: z.string().describe(
      "The name of the Modus component (e.g., 'modus-wc-table') or '_all_components' for the full catalog"
    ),
    version: z.string().optional().describe(
      "The version of @trimble-oss/moduswebcomponents installed in the user's project (e.g. '1.1.1'). " +
      "Check the user's package.json before calling. Defaults to the latest available version."
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
