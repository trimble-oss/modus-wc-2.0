/**
 * Generate the in-repo component dependency graph consumed by QA automations.
 *
 * Sources:
 * - src/custom-elements.json (CEM) → node metadata (props, events, methods).
 * - src/components/modus-wc-* JSX (.tsx) → typed "composes" edges (parent renders child).
 * - A curated map below → "slot" edges (documented light-DOM composition that
 *   is not visible in the parent's JSX).
 *
 * Outputs (all under docs/component-graph/, committed and validated by CI):
 * - component-graph.json  machine-readable graph + precomputed reverse-impact map
 * - component-graph.mmd   Mermaid flowchart of composes/slot edges
 * - index.html            self-contained interactive viewer (no external deps)
 *
 * Usage: node scripts/generate-component-graph.mjs
 * The output is deterministic (sorted keys, no timestamps) so CI can diff it.
 */

import {
  copyFileSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const COMPONENTS_DIR = join(ROOT, 'src', 'components');
const CEM_PATH = join(ROOT, 'src', 'custom-elements.json');
const OUT_DIR = join(ROOT, 'docs', 'component-graph');

/**
 * Documented light-DOM (slot) composition that never appears in the parent's
 * own JSX. Keep this map in sync with component JSDoc/slot documentation.
 */
const SLOT_EDGES = [
  { source: 'modus-wc-accordion', target: 'modus-wc-collapse' },
  { source: 'modus-wc-tree-menu', target: 'modus-wc-tree-item' },
];

// Stencil lifecycle/internal methods that are not part of a component's public API.
const INTERNAL_METHODS = new Set([
  'render',
  'connectedCallback',
  'disconnectedCallback',
  'componentWillLoad',
  'componentDidLoad',
  'componentShouldUpdate',
  'componentWillRender',
  'componentDidRender',
  'componentWillUpdate',
  'componentDidUpdate',
]);

const sortByName = (a, b) => a.name.localeCompare(b.name);

/** Read node metadata (tag, source file, props, events, methods) from the CEM. */
function readNodesFromCem() {
  const cem = JSON.parse(readFileSync(CEM_PATH, 'utf-8'));
  const nodes = new Map();

  for (const mod of cem.modules ?? []) {
    for (const decl of mod.declarations ?? []) {
      if (!decl.tagName || !decl.tagName.startsWith('modus-wc-')) {
        continue;
      }

      const props = (decl.attributes ?? [])
        .map((attr) => ({
          name: attr.fieldName ?? attr.name,
          attribute: attr.name,
          type: attr.type?.text ?? 'unknown',
          ...(attr.default !== undefined && { default: attr.default }),
          ...(attr.description && { description: attr.description }),
        }))
        .sort(sortByName);

      const events = (decl.events ?? [])
        .map((event) => ({
          name: event.name,
          type: event.type?.text ?? 'unknown',
          ...(event.description && { description: event.description }),
        }))
        .sort(sortByName);

      const methods = (decl.members ?? [])
        .filter(
          (member) =>
            member.kind === 'method' && !INTERNAL_METHODS.has(member.name)
        )
        .map((member) => member.name)
        .sort();

      nodes.set(decl.tagName, {
        tag: decl.tagName,
        sourceFile: mod.path,
        ...(decl.description && { description: decl.description }),
        props,
        events,
        methods,
      });
    }
  }

  return nodes;
}

/**
 * Remove block comments, line comments and JSDoc so tags that are only
 * mentioned in documentation (e.g. `<modus-wc-collapse>` in the accordion
 * JSDoc) are not counted as composes edges.
 */
export function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|\s)\/\/[^\n]*/g, '$1');
}

/**
 * Scan every component's .tsx files for `<modus-wc-*` JSX openings and build
 * directed composes edges (parent component dir → rendered child tag).
 */
export function extractChildTags(source, parentTag, knownTags) {
  const children = new Set();
  const matches = stripComments(source).matchAll(/<(modus-wc-[a-z0-9-]+)/g);
  for (const match of matches) {
    const childTag = match[1];
    if (childTag !== parentTag && knownTags.has(childTag)) {
      children.add(childTag);
    }
  }
  return children;
}

function scanComposesEdges(knownTags) {
  const edgeFiles = new Map();

  const componentDirs = readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter(
      (entry) => entry.isDirectory() && entry.name.startsWith('modus-wc-')
    )
    .map((entry) => entry.name)
    .sort();

  for (const dir of componentDirs) {
    const parentTag = dir;
    const dirPath = join(COMPONENTS_DIR, dir);
    const tsxFiles = readdirSync(dirPath)
      .filter((file) => file.endsWith('.tsx'))
      .sort();

    for (const file of tsxFiles) {
      const filePath = join(dirPath, file);
      const source = readFileSync(filePath, 'utf-8');
      const childTags = extractChildTags(source, parentTag, knownTags);

      for (const childTag of childTags) {
        const key = `${parentTag}→${childTag}`;
        if (!edgeFiles.has(key)) {
          edgeFiles.set(key, new Set());
        }
        edgeFiles.get(key).add(relative(ROOT, filePath).replace(/\\/g, '/'));
      }
    }
  }

  return [...edgeFiles.entries()]
    .map(([key, files]) => {
      const [source, target] = key.split('→');
      return { source, target, type: 'composes', files: [...files].sort() };
    })
    .sort(
      (a, b) =>
        a.source.localeCompare(b.source) || a.target.localeCompare(b.target)
    );
}

/**
 * Precompute, for every component, the set of all transitive parents so QA
 * automations can answer "component X changed, what needs re-testing?" with a
 * single lookup.
 */
export function buildReverseImpact(nodes, edges) {
  const directParents = new Map();
  for (const tag of nodes.keys()) {
    directParents.set(tag, new Set());
  }
  for (const edge of edges) {
    directParents.get(edge.target)?.add(edge.source);
  }

  const reverseImpact = {};
  for (const tag of [...nodes.keys()].sort()) {
    const impacted = new Set();
    const queue = [...(directParents.get(tag) ?? [])];
    while (queue.length > 0) {
      const parent = queue.pop();
      if (impacted.has(parent)) {
        continue;
      }
      impacted.add(parent);
      queue.push(...(directParents.get(parent) ?? []));
    }
    reverseImpact[tag] = [...impacted].sort();
  }

  return reverseImpact;
}

function toMermaid(edges) {
  const lines = [
    '%% Auto-generated by scripts/generate-component-graph.mjs — do not edit.',
    '%% Solid arrows: JSX composition. Dotted arrows: documented slot composition.',
    'flowchart LR',
  ];
  const id = (tag) => tag.replace(/^modus-wc-/, '').replace(/-/g, '_');
  for (const edge of edges) {
    const arrow = edge.type === 'slot' ? '-.->' : '-->';
    lines.push(
      `  ${id(edge.source)}["${edge.source}"] ${arrow} ${id(edge.target)}["${edge.target}"]`
    );
  }
  return lines.join('\n') + '\n';
}

function main() {
  const nodes = readNodesFromCem();
  const knownTags = new Set(nodes.keys());

  const composesEdges = scanComposesEdges(knownTags);
  const slotEdges = SLOT_EDGES.filter(
    (edge) => knownTags.has(edge.source) && knownTags.has(edge.target)
  ).map((edge) => ({ ...edge, type: 'slot' }));

  const edges = [...composesEdges, ...slotEdges].sort(
    (a, b) =>
      a.source.localeCompare(b.source) ||
      a.target.localeCompare(b.target) ||
      a.type.localeCompare(b.type)
  );

  const graph = {
    description:
      'Auto-generated component dependency graph for QA automations. ' +
      'Regenerate with `npm run build:graph`. Do not edit by hand.',
    nodes: [...nodes.values()].sort((a, b) => a.tag.localeCompare(b.tag)),
    edges,
    reverseImpact: buildReverseImpact(nodes, edges),
  };

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(
    join(OUT_DIR, 'component-graph.json'),
    JSON.stringify(graph, null, 2) + '\n'
  );
  writeFileSync(join(OUT_DIR, 'component-graph.mmd'), toMermaid(edges));
  copyFileSync(
    join(__dirname, 'component-graph-viewer.template.html'),
    join(OUT_DIR, 'index.html')
  );

  console.log(
    `component-graph: ${graph.nodes.length} nodes, ${edges.length} edges ` +
      `(${composesEdges.length} composes, ${slotEdges.length} slot) → ${relative(ROOT, OUT_DIR)}/`
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
