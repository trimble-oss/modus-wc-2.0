#!/usr/bin/env node
/**
 * extract-docs.ts
 *
 * Extracts Modus Web Component documentation from source files and writes
 * per-component JSON files plus an _all_components.json summary.
 *
 * Usage:
 *   npx tsx mcp/scripts/extract-docs.ts \
 *     --source-dir src/components \
 *     --output-dir mcp/versions/1.2.0/component-docs
 *
 * Both flags are required (no defaults so callers are always explicit).
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { get as httpsGet } from 'https';
import { get as httpGet } from 'http';

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

function parseArgs(): { sourceDir: string; outputDir: string } {
  const args = process.argv.slice(2);
  let sourceDir = '';
  let outputDir = '';
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--source-dir' && args[i + 1]) sourceDir = args[++i];
    else if (args[i] === '--output-dir' && args[i + 1]) outputDir = args[++i];
  }
  if (!sourceDir || !outputDir) {
    console.error('Usage: extract-docs.ts --source-dir <path> --output-dir <path>');
    process.exit(1);
  }
  return { sourceDir: resolve(sourceDir), outputDir: resolve(outputDir) };
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PropInfo {
  name: string;
  type: string;
  description: string;
  default: string | null;
  mutable: boolean;
  end_line: number;
}

interface EventInfo {
  name: string;
  detail: string;
  description: string;
  end_line: number;
}

interface MethodInfo {
  name: string;
  signature: string;
  parameters: string;
  returnType: string;
  description: string;
  end_line: number;
}

interface SlotInfo {
  name: string;
  description: string;
}

interface StoryExamples {
  basic: string | null;
  variations: unknown[];
  args: Record<string, string>;
  argTypes: Record<string, { control: string; options: string[] }>;
  usage: unknown[];
  events?: string[];
}

interface ComponentDoc {
  description: string;
  properties: PropInfo[];
  events: EventInfo[];
  methods: MethodInfo[];
  slots: SlotInfo[];
  examples: StoryExamples;
  tag: string;
  storyExample?: {
    template: string;
    args: Record<string, string>;
    argTypes: Record<string, unknown>;
    events: string[];
    fullContent: string;
  };
  availableIcons?: {
    total: number;
    variants: string[];
    note: string;
    source: string;
    iconNames: string[];
  };
}

// ---------------------------------------------------------------------------
// JSDoc helpers
// ---------------------------------------------------------------------------

function extractJsDocBefore(lines: string[], lineIndex: number): string {
  let j = lineIndex - 1;
  while (j >= 0 && lines[j].trim() === '') j--;
  if (j >= 0 && lines[j].trim().endsWith('*/')) {
    let k = j;
    while (k >= 0 && !lines[k].trim().startsWith('/**')) k--;
    if (k >= 0) {
      const clean: string[] = [];
      for (let l = k; l <= j; l++) {
        const c = lines[l].trim().replace(/^\/\*+/, '').replace(/\*+\/$/, '').replace(/^\*/, '').trim();
        if (c && !c.startsWith('@')) clean.push(c);
      }
      return clean.join(' ');
    }
  }
  return '';
}

function extractComponentDescription(lines: string[]): string {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('@Component')) {
      let j = i - 1;
      while (j >= 0 && lines[j].trim() === '') j--;
      if (j >= 0 && lines[j].trim().endsWith('*/')) {
        let k = j;
        while (k >= 0 && !lines[k].trim().startsWith('/**')) k--;
        if (k >= 0) {
          const clean: string[] = [];
          for (let l = k; l <= j; l++) {
            const c = lines[l].trim().replace(/^\/\*+/, '').replace(/\*+\/$/, '').replace(/^\*/, '').trim();
            if (c && !c.startsWith('@')) clean.push(c);
          }
          return clean.join(' ');
        }
      }
      break;
    }
  }
  return '';
}

// ---------------------------------------------------------------------------
// @Prop parser
// ---------------------------------------------------------------------------

function extractPropInfo(lines: string[], startIdx: number): PropInfo | null {
  const description = extractJsDocBefore(lines, startIdx);
  const propLines: string[] = [];
  let j = startIdx;
  while (j < lines.length) {
    propLines.push(lines[j]);
    if (lines[j].includes(';')) break;
    j++;
  }
  const propText = propLines.join(' ').trim();
  const mutable = propText.includes('mutable: true');

  // Pattern 1: @Prop(...) name?: Type = default;
  let m = propText.match(/@Prop\([^)]*\)\s*(\w+[?!]?)\s*(?::\s*([^=;]+?))?\s*=\s*([^;]+?);/s);
  if (!m) {
    // Pattern 2: @Prop(...) name?: Type;  (no default)
    m = propText.match(/@Prop\([^)]*\)\s*(\w+[?!]?)\s*:\s*([^=;]+?);/s);
  }

  if (m) {
    const rawName = m[1];
    const propName = rawName.replace(/[?!]$/, '');
    let propType: string;
    let propDefault: string | null;

    if (m.length === 4 && m[3] !== undefined) {
      // Has a default value
      propType = m[2] ? m[2].trim() : inferTypeFromDefault(m[3].trim());
      propDefault = m[3].trim();
    } else {
      propType = (m[2] || 'any').trim();
      propDefault = null;
    }

    return { name: propName, type: propType, description, default: propDefault, mutable, end_line: j };
  }
  return null;
}

function inferTypeFromDefault(value: string): string {
  if (value === 'true' || value === 'false') return 'boolean';
  if (value.startsWith("'") || value.startsWith('"')) return 'string';
  if (!isNaN(Number(value))) return 'number';
  return 'any';
}

// ---------------------------------------------------------------------------
// @Event / @StencilEvent parser
// ---------------------------------------------------------------------------

function extractEventInfo(lines: string[], startIdx: number): EventInfo | null {
  const description = extractJsDocBefore(lines, startIdx);
  const eventLines: string[] = [];
  let j = startIdx;
  while (j < lines.length) {
    eventLines.push(lines[j]);
    const t = lines[j].trim();
    if (t.endsWith('};') || t.endsWith('>;')) break;
    j++;
  }
  const eventText = eventLines.join(' ').trim();
  const nameMatch = eventText.match(/@(?:Event|StencilEvent)\(\)\s*(\w+)!?/);
  const emitterMatch = eventText.match(/EventEmitter<(.+?)>/s);

  if (nameMatch) {
    let detail = 'void';
    if (emitterMatch) {
      detail = emitterMatch[1].trim().replace(/\s+/g, ' ');
    }
    return { name: nameMatch[1], detail, description, end_line: j };
  }
  return null;
}

// ---------------------------------------------------------------------------
// @Method parser
// ---------------------------------------------------------------------------

function extractMethodInfo(lines: string[], startIdx: number): MethodInfo | null {
  const description = extractJsDocBefore(lines, startIdx);
  const methodLines: string[] = [];
  let j = startIdx + 1;
  let parenCount = 0;
  let foundSig = false;

  while (j < lines.length) {
    const line = lines[j];
    methodLines.push(line);
    if (line.includes('(')) {
      foundSig = true;
      parenCount += (line.match(/\(/g) || []).length;
    }
    if (line.includes(')')) {
      parenCount -= (line.match(/\)/g) || []).length;
    }
    if (foundSig && parenCount === 0) break;
    j++;
  }

  const methodText = methodLines.join(' ').trim();
  const m = methodText.match(/(?:async\s+)?(\w+)\s*\(([^)]*)\)(?:\s*:\s*([^{]+?))?(?:\s*{)?/);
  if (m) {
    return {
      name: m[1],
      signature: `(${(m[2] || '').trim()})`,
      parameters: (m[2] || '').trim(),
      returnType: (m[3] || 'void').trim(),
      description,
      end_line: j,
    };
  }
  return null;
}

// ---------------------------------------------------------------------------
// Slot extractor
// ---------------------------------------------------------------------------

function extractSlots(lines: string[]): SlotInfo[] {
  const slots: SlotInfo[] = [];
  let inRender = false;

  for (const line of lines) {
    if (line.includes('render()')) inRender = true;
    if (inRender && (line.includes('</Host>') || (line.includes('return') && line.includes('}')))) {
      inRender = false;
    }
    if (inRender) {
      const matches = [...line.matchAll(/<slot\s*(?:name="([^"]*)")?/g)];
      for (const match of matches) {
        const slotName = match[1] || 'default';
        if (!slots.some((s) => s.name === slotName)) {
          slots.push({ name: slotName, description: `Slot for ${slotName} content` });
        }
      }
    }
  }
  return slots;
}

// ---------------------------------------------------------------------------
// Story examples extractor
// ---------------------------------------------------------------------------

function extractStoryExamples(storyContent: string): StoryExamples {
  const examples: StoryExamples = {
    basic: null,
    variations: [],
    args: {},
    argTypes: {},
    usage: [],
  };

  // Default args block -- uses depth tracking to extract only top-level
  // key/value pairs, skipping nested arrays/objects entirely.
  const argsStart = storyContent.match(/\bargs:\s*{/s);
  if (argsStart && argsStart.index !== undefined) {
    const startIdx = argsStart.index + argsStart[0].length;
    let depth = 0;
    let i = startIdx;
    while (i < storyContent.length) {
      const ch = storyContent[i];
      if (ch === '{' || ch === '[') { depth++; i++; continue; }
      if (ch === '}' || ch === ']') {
        if (depth === 0) break;
        depth--; i++; continue;
      }
      if (depth > 0) { i++; continue; }
      // At top level: try to match a key: simpleValue pair
      const kvMatch = storyContent.slice(i).match(/^'?([\w-]+)'?\s*:\s*([^,\n[{}\]]+)/);
      if (kvMatch) {
        const val = kvMatch[2].trim().replace(/,$/, '');
        if (val) examples.args[kvMatch[1]] = val;
        i += kvMatch[0].length;
      } else {
        i++;
      }
    }
  }

  // argTypes
  const argTypesMatch = storyContent.match(/argTypes:\s*{([^}]+)}/s);
  if (argTypesMatch) {
    const atMatches = [...argTypesMatch[1].matchAll(/(\w+):\s*{([^}]+)}/gs)];
    for (const [, key, value] of atMatches) {
      const ctrlMatch = value.match(/control:\s*{\s*type:\s*['"](\w+)['"]/);
      if (ctrlMatch) {
        const optMatch = value.match(/options:\s*\[([^\]]+)\]/);
        const options = optMatch
          ? optMatch[1].split(',').map((o) => o.trim().replace(/^['"]|['"]$/g, ''))
          : [];
        examples.argTypes[key] = { control: ctrlMatch[1], options };
      }
    }
  }

  // Template (first return html` ... `)
  const tplMatch = storyContent.match(/return html`([^`]+)`/s);
  if (tplMatch) examples.basic = tplMatch[1].trim();

  // Event handles
  const evtMatch = storyContent.match(/handles:\s*\[([^\]]+)\]/);
  if (evtMatch) {
    examples.events = evtMatch[1].split(',').map((e) => e.trim().replace(/^['"]|['"]$/g, ''));
  }

  return examples;
}

// ---------------------------------------------------------------------------
// Main component parser (single .tsx file)
// ---------------------------------------------------------------------------

function parseStencilComponent(
  componentName: string,
  sourceDir: string,
): ComponentDoc | null {
  const componentDir = join(sourceDir, componentName);
  const tsxFile = join(componentDir, `${componentName}.tsx`);
  if (!existsSync(tsxFile)) return null;

  const content = readFileSync(tsxFile, 'utf-8');
  const lines = content.split('\n');

  const description = extractComponentDescription(lines);
  const properties: PropInfo[] = [];
  const events: EventInfo[] = [];
  const methods: MethodInfo[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (line.startsWith('@Prop')) {
      const info = extractPropInfo(lines, i);
      if (info) { properties.push(info); i = info.end_line + 1; continue; }
    } else if (line.startsWith('@Event') || line.startsWith('@StencilEvent')) {
      const info = extractEventInfo(lines, i);
      if (info) { events.push(info); i = info.end_line + 1; continue; }
    } else if (line.startsWith('@Method')) {
      const info = extractMethodInfo(lines, i);
      if (info) { methods.push(info); i = info.end_line + 1; continue; }
    }
    i++;
  }

  const slots = extractSlots(lines);

  const doc: ComponentDoc = {
    description,
    properties,
    events,
    methods,
    slots,
    examples: { basic: null, variations: [], args: {}, argTypes: {}, usage: [] },
    tag: componentName,
  };

  const storyFile = join(componentDir, `${componentName}.stories.ts`);
  if (existsSync(storyFile)) {
    const storyContent = readFileSync(storyFile, 'utf-8');
    doc.examples = extractStoryExamples(storyContent);
    doc.storyExample = {
      template: doc.examples.basic ?? '',
      args: doc.examples.args,
      argTypes: doc.examples.argTypes,
      events: doc.examples.events ?? [],
      fullContent: storyContent,
    };
  }

  return doc;
}

// ---------------------------------------------------------------------------
// Icon fetcher
// ---------------------------------------------------------------------------

function fetchUrl(url: string): Promise<string> {
  return new Promise((res, rej) => {
    const getter = url.startsWith('https') ? httpsGet : httpGet;
    const request = getter(url, (resp) => {
      // Follow redirects (3xx)
      if (resp.statusCode && resp.statusCode >= 300 && resp.statusCode < 400 && resp.headers.location) {
        fetchUrl(resp.headers.location).then(res).catch(rej);
        return;
      }
      let data = '';
      resp.on('data', (chunk) => { data += chunk; });
      resp.on('end', () => res(data));
    });
    request.on('error', rej);
  });
}

async function resolveNpmLatestVersion(pkg: string): Promise<string | undefined> {
  try {
    const json = await fetchUrl(`https://registry.npmjs.org/${encodeURIComponent(pkg)}/latest`);
    const data = JSON.parse(json) as { version?: string };
    return data.version;
  } catch {
    return undefined;
  }
}

async function fetchIconNames(): Promise<string[]> {
  try {
    console.log('  Resolving latest @trimble-oss/modus-icons version...');
    const version = await resolveNpmLatestVersion('@trimble-oss/modus-icons');
    if (!version) {
      console.error('  Could not resolve latest modus-icons version');
      return [];
    }
    const url = `https://data.jsdelivr.com/v1/package/npm/@trimble-oss/modus-icons@${version}/flat`;
    console.log(`  Fetching icon list (v${version}) from jsDelivr...`);
    const json = await fetchUrl(url);
    const data = JSON.parse(json) as { files?: Array<{ name: string }> };
    const names = (data.files ?? [])
      .filter((f) => f.name.startsWith('/dist/modus-solid/svg/') && f.name.endsWith('.svg'))
      .map((f) => f.name.replace('/dist/modus-solid/svg/', '').replace('.svg', '').replace(/-/g, '_'))
      .sort();
    console.log(`  Found ${names.length} icons`);
    return names;
  } catch (err) {
    console.error(`  Error fetching icons: ${err}`);
    return [];
  }
}

function updateIconDocs(outputDir: string, iconNames: string[]): void {
  if (!iconNames.length) return;
  const iconPath = join(outputDir, 'modus-wc-icon.json');
  if (!existsSync(iconPath)) return;
  const data: ComponentDoc = JSON.parse(readFileSync(iconPath, 'utf-8'));
  data.availableIcons = {
    total: iconNames.length,
    variants: ['solid', 'outlined'],
    note: 'All icons are available in both solid and outlined variants.',
    source: 'https://modus-icons.trimble.com/',
    iconNames,
  };
  writeFileSync(iconPath, JSON.stringify(data, null, 2));
  console.log(`  Updated modus-wc-icon.json with ${iconNames.length} icons`);
}

// ---------------------------------------------------------------------------
// Orchestrator
// ---------------------------------------------------------------------------

async function main() {
  const { sourceDir, outputDir } = parseArgs();

  if (!existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    process.exit(1);
  }
  mkdirSync(outputDir, { recursive: true });

  console.log(`\nExtracting component docs`);
  console.log(`  source: ${sourceDir}`);
  console.log(`  output: ${outputDir}`);

  const componentDirs = readdirSync(sourceDir).filter(
    (d) => d.startsWith('modus-wc-') && statSync(join(sourceDir, d)).isDirectory(),
  );

  const allComponents: string[] = [];

  for (const componentName of componentDirs) {
    const tsxFile = join(sourceDir, componentName, `${componentName}.tsx`);
    if (!existsSync(tsxFile)) {
      console.log(`  Skipping ${componentName} (no .tsx file)`);
      continue;
    }
    console.log(`  Processing: ${componentName}`);
    const doc = parseStencilComponent(componentName, sourceDir);
    if (!doc) {
      console.log(`    Failed to parse: ${componentName}`);
      continue;
    }
    const outFile = join(outputDir, `${componentName}.json`);
    writeFileSync(outFile, JSON.stringify(doc, null, 2));
    allComponents.push(componentName);
    console.log(
      `    Props: ${doc.properties.length}, Events: ${doc.events.length}, Methods: ${doc.methods.length}`,
    );
  }

  // Write _all_components.json
  const summary = {
    total: allComponents.length,
    components: allComponents.sort(),
    last_updated: String(Date.now() / 1000),
  };
  writeFileSync(join(outputDir, '_all_components.json'), JSON.stringify(summary, null, 2));
  console.log(`\nWrote _all_components.json (${allComponents.length} components)`);

  // Fetch and inject icon names
  const iconNames = await fetchIconNames();
  if (iconNames.length) updateIconDocs(outputDir, iconNames);

  console.log('\nDone.');
}

main().catch((err) => {
  console.error(`Fatal: ${err}`);
  process.exit(1);
});
