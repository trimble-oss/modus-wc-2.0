#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BUNDLED_DOCS_DIR = join(__dirname, '..', 'docs');
const STORIES_DIR = join(__dirname, '..', '..', 'src', 'stories');
const FRAMEWORKS_DIR = join(STORIES_DIR, 'frameworks');
const COMPONENT_DOCS_DIR = join(__dirname, '..', 'component-docs');

function findDoc(name: string): string | undefined {
  const candidates = [
    join(STORIES_DIR, `${name}.mdx`),
    join(FRAMEWORKS_DIR, `${name}.mdx`),
    join(BUNDLED_DOCS_DIR, `${name}.mdx`),
  ];
  return candidates.find((p) => existsSync(p));
}

function listAvailableDocs(): string[] {
  const dirs = [STORIES_DIR, FRAMEWORKS_DIR, BUNDLED_DOCS_DIR];
  const docs = new Set<string>();
  for (const dir of dirs) {
    if (existsSync(dir)) {
      readdirSync(dir)
        .filter((f: string) => f.endsWith('.mdx'))
        .forEach((f: string) => docs.add(f.replace('.mdx', '')));
    }
  }
  return [...docs];
}

const server = new McpServer({
  name: 'Modus Docs MCP Server',
  version: '1.0.0',
});

server.tool(
  'get_modus_implementation_data',
  `Looks up and parses documentation from the Modus documentation repository.

Retrieves framework integration guides, getting started guides, and general documentation.

Available documents:
- Framework Integration: "angular", "react", "vue"
- Guides: "getting-started", "accessibility", "form-inputs", "modus-icon-usage", "styling", "testing"`,
  {
    docs_name: z
      .string()
      .describe(
        "The name of the document to retrieve (without .mdx extension). Examples: 'angular', 'react', 'vue', 'getting-started'"
      ),
  },
  ({ docs_name }) => {
    const docPath = findDoc(docs_name);

    if (!docPath) {
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(
              {
                error: `Document '${docs_name}' not found`,
                available_documents: listAvailableDocs(),
                requested: docs_name,
              },
              null,
              2
            ),
          },
        ],
      };
    }

    const content = readFileSync(docPath, 'utf-8');
    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify(
            {
              document_name: docs_name,
              content,
              type: 'implementation_guide',
              format: 'mdx',
            },
            null,
            2
          ),
        },
      ],
    };
  }
);

server.tool(
  'get_modus_component_data',
  `Looks up and parses component documentation for Modus Web Components.

Retrieves component properties, events, methods, slots, usage examples, and story documentation.

Special component names:
- "_all_components" - Returns catalog of all available components

Component naming format: "modus-wc-{component-name}"
Examples: "modus-wc-table", "modus-wc-button", "modus-wc-alert"`,
  {
    component_name: z
      .string()
      .describe(
        "The name of the Modus component (e.g., 'modus-wc-table') or '_all_components' for the full catalog"
      ),
  },
  ({ component_name }) => {
    const fileName =
      component_name === '_all_components'
        ? '_all_components.json'
        : `${component_name}.json`;
    const docPath = join(COMPONENT_DOCS_DIR, fileName);

    if (!existsSync(docPath)) {
      const available = readdirSync(COMPONENT_DOCS_DIR)
        .filter((f: string) => f.endsWith('.json') && !f.startsWith('.'))
        .map((f: string) => f.replace('.json', ''));
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(
              {
                error: `Component '${component_name}' not found`,
                available_components: available,
                requested: component_name,
              },
              null,
              2
            ),
          },
        ],
      };
    }

    const content = JSON.parse(readFileSync(docPath, 'utf-8'));
    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify(
            {
              component_name,
              data: content,
              type: 'component_documentation',
              format: 'json',
            },
            null,
            2
          ),
        },
      ],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  process.stderr.write('Modus Docs MCP Server running on stdio\n');
}

main().catch((err) => {
  process.stderr.write(`Fatal error: ${err}\n`);
  process.exit(1);
});
