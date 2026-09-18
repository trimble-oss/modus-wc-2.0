#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

function parseArgs(argv) {
  const options = { check: false, repoRoot: process.cwd(), output: 'designer-context.json' };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === '--check') options.check = true;
    if (value === '--repo-root') options.repoRoot = path.resolve(argv[++index]);
    if (value === '--output') options.output = argv[++index];
  }
  return options;
}

function readText(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return '';
  }
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function gitValue(repoRoot, args, fallback) {
  try {
    return execFileSync('git', ['-C', repoRoot, ...args], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim() || fallback;
  } catch {
    return fallback;
  }
}

function generatedAt(repoRoot) {
  if (process.env.SOURCE_DATE_EPOCH) {
    return new Date(Number(process.env.SOURCE_DATE_EPOCH) * 1000).toISOString();
  }
  return gitValue(repoRoot, ['show', '-s', '--format=%cI', 'HEAD'], new Date(0).toISOString());
}

function tagFor(declaration) {
  return declaration.tagName || declaration.tag || '';
}

function propertiesFor(declaration) {
  const values = [
    ...(declaration.members || []),
    ...(declaration.properties || []),
    ...(declaration.attributes || []),
  ];
  const seen = new Set();
  return values.filter((property) => {
    if (!property?.name || property.kind === 'method' || seen.has(property.name)) return false;
    seen.add(property.name);
    return true;
  });
}

function sourcePointer(moduleIndex, declarationIndex) {
  return `src/custom-elements.json#/modules/${moduleIndex}/declarations/${declarationIndex}`;
}

function relativeIfExists(repoRoot, relativePath) {
  return fs.existsSync(path.join(repoRoot, relativePath)) ? relativePath : null;
}

function readmeImpact(repoRoot, tag) {
  const readme = readText(path.join(repoRoot, 'src/components', tag, 'readme.md'));
  const usedBy = [];
  const dependsOn = [];
  let section = '';
  for (const line of readme.split(/\r?\n/)) {
    if (/^### Used by/i.test(line)) section = 'usedBy';
    else if (/^### Depends on/i.test(line)) section = 'dependsOn';
    else if (/^### /i.test(line)) section = '';
    const match = line.match(/-\s+\[([^\]]+)\]\(/);
    if (match && section === 'usedBy') usedBy.push(match[1]);
    if (match && section === 'dependsOn') dependsOn.push(match[1]);
  }
  return { usedBy, dependsOn, source: readme ? `src/components/${tag}/readme.md` : null };
}

function graphImpact(repoRoot, tag) {
  const graphPath = path.join(repoRoot, 'docs/component-graph/component-graph.json');
  if (!fs.existsSync(graphPath)) return null;
  try {
    const graph = readJson(graphPath);
    const reverseImpact =
      graph.reverseImpact?.[tag] ??
      graph.components?.[tag]?.reverseImpact ??
      graph.nodes?.[tag]?.reverseImpact ??
      null;
    return { reverseImpact: reverseImpact || [], source: 'docs/component-graph/component-graph.json' };
  } catch {
    return { reverseImpact: [], source: 'docs/component-graph/component-graph.json', error: 'parse-failed' };
  }
}

function tokenHints(repoRoot, tag) {
  const files = [
    `src/components/${tag}/${tag}.scss`,
    `src/components/${tag}/${tag}.tailwind.ts`,
    'src/styles/variables.scss',
  ];
  const tokens = new Set();
  files.forEach((relativePath) => {
    const text = readText(path.join(repoRoot, relativePath));
    for (const match of text.matchAll(/--modus-wc-[a-z0-9_-]+/gi)) tokens.add(match[0]);
  });
  return [...tokens].sort();
}

function storyStates(repoRoot, tag) {
  const stories = readText(path.join(repoRoot, `src/components/${tag}/${tag}.stories.ts`));
  return [...stories.matchAll(/export const ([A-Z][A-Za-z0-9_]*)\s*:/g)].map((match) => ({
    name: match[1],
    source: `src/components/${tag}/${tag}.stories.ts`,
  }));
}

function sharedTypes(repoRoot) {
  const text = readText(path.join(repoRoot, 'src/components/types.ts'));
  const result = {};
  for (const match of text.matchAll(/export type ([A-Za-z0-9_]+)\s*=\s*([^;]+);/g)) {
    const values = [...match[2].matchAll(/'([^']+)'/g)].map((value) => value[1]);
    if (values.length) result[match[1]] = values;
  }
  return result;
}

function componentContext(repoRoot, declaration, moduleIndex, declarationIndex, types) {
  const tag = tagFor(declaration);
  const base = `src/components/${tag}`;
  const docs = {
    readme: relativeIfExists(repoRoot, `${base}/readme.md`),
    source: relativeIfExists(repoRoot, `${base}/${tag}.tsx`),
    styles: relativeIfExists(repoRoot, `${base}/${tag}.scss`),
    spec: relativeIfExists(repoRoot, `${base}/${tag}.spec.ts`),
    stories: relativeIfExists(repoRoot, `${base}/${tag}.stories.ts`),
  };
  const impact = graphImpact(repoRoot, tag);
  const readme = readmeImpact(repoRoot, tag);
  return {
    tag,
    description: declaration.description || '',
    manifestSource: sourcePointer(moduleIndex, declarationIndex),
    properties: propertiesFor(declaration).map((property) => ({
      name: property.name,
      type: property.type || null,
      description: property.description || '',
      default: property.default ?? property.defaultValue ?? null,
    })),
    events: (declaration.events || []).map((event) => event.name || event.eventName).filter(Boolean),
    slots: (declaration.slots || []).map((slot) => slot.name).filter(Boolean),
    methods: (declaration.methods || []).map((method) => method.name).filter(Boolean),
    docs,
    stateMatrix: storyStates(repoRoot, tag),
    tokenHints: tokenHints(repoRoot, tag),
    precedent: {
      sharedTypes: types,
      source: relativeIfExists(repoRoot, 'src/components/types.ts'),
    },
    impact: impact || {
      usedBy: readme.usedBy,
      dependsOn: readme.dependsOn,
      source: readme.source,
      sourceKind: 'readme',
    },
  };
}

function buildContext(repoRoot) {
  const manifestPath = path.join(repoRoot, 'src/custom-elements.json');
  const manifest = readJson(manifestPath);
  const components = {};
  const warnings = [];
  (manifest.modules || []).forEach((module, moduleIndex) => {
    (module.declarations || []).forEach((declaration, declarationIndex) => {
      const tag = tagFor(declaration);
      if (!tag) {
        warnings.push(`Declaration at ${sourcePointer(moduleIndex, declarationIndex)} has no tag.`);
        return;
      }
      components[tag] = componentContext(
        repoRoot,
        declaration,
        moduleIndex,
        declarationIndex,
        sharedTypes(repoRoot),
      );
    });
  });
  return {
    schemaVersion: '1.0',
    sourceManifest: 'src/custom-elements.json',
    sourceCommit: process.env.SOURCE_COMMIT || gitValue(repoRoot, ['rev-parse', 'HEAD'], 'unknown'),
    generatedAt: generatedAt(repoRoot),
    components,
    sharedTypes: sharedTypes(repoRoot),
    warnings,
  };
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const outputPath = path.resolve(options.repoRoot, options.output);
  const context = buildContext(options.repoRoot);
  const serialized = `${JSON.stringify(context, null, 2)}\n`;
  if (options.check) {
    const existing = readText(outputPath);
    if (existing !== serialized) {
      console.error(`Designer context is stale: ${path.relative(options.repoRoot, outputPath)}`);
      process.exitCode = 1;
      return;
    }
    console.log(`Designer context is current: ${path.relative(options.repoRoot, outputPath)}`);
    return;
  }
  fs.writeFileSync(outputPath, serialized);
  console.log(`Wrote ${path.relative(options.repoRoot, outputPath)}`);
}

main();
