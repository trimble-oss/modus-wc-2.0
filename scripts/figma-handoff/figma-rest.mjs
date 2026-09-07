/** Figma REST helpers — no MCP; reads/writes only inside Node. */

import fs from 'node:fs';

const API = 'https://api.figma.com/v1';

export function getToken() {
  const token = process.env.FIGMA_API_TOKEN ?? process.env.FIGMA_ACCESS_TOKEN;
  if (!token) {
    throw new Error(
      'Set FIGMA_API_TOKEN (Figma personal access token) — see scripts/figma-handoff/README.md',
    );
  }
  return token;
}

export async function figmaGet(path, token = getToken()) {
  const res = await fetch(`${API}${path}`, {
    headers: { 'X-Figma-Token': token },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Figma API ${res.status} ${path}: ${body.slice(0, 200)}`);
  }
  return res.json();
}

/** List variant symbols under a COMPONENT_SET or FRAME node. */
export async function listVariantSymbols(fileKey, variantSetId) {
  const data = await figmaGet(
    `/files/${fileKey}/nodes?ids=${encodeURIComponent(variantSetId)}`,
  );
  const root = data.nodes?.[variantSetId]?.document;
  if (!root) {
    throw new Error(`Variant set node not found: ${variantSetId}`);
  }

  const symbols = [];
  const walk = (node) => {
    if (!node) return;
    if (node.type === 'COMPONENT' || node.type === 'SYMBOL') {
      symbols.push({ nodeId: node.id, name: node.name });
    }
    for (const child of node.children ?? []) walk(child);
  };
  walk(root);
  return symbols;
}

export async function loadLocalVariables(fileKey) {
  try {
    const data = await figmaGet(`/files/${fileKey}/variables/local`);
    return {
      variables: data.meta?.variables ?? {},
      collections: data.meta?.variableCollections ?? {},
    };
  } catch (err) {
    if (String(err.message).includes('403')) {
      console.warn(
        'variables/local returned 403 — variable-defs will use bound styles only (Enterprise/scopes may be required)',
      );
      return { variables: {}, collections: {} };
    }
    throw err;
  }
}

function pickModeId(variable, collections) {
  const collection = collections[variable.variableCollectionId];
  if (collection?.defaultModeId) return collection.defaultModeId;
  const modes = collection?.modes ?? [];
  return modes[0]?.modeId ?? Object.keys(variable.valuesByMode ?? {})[0];
}

function resolveAlias(alias, variables, collections, seen = new Set()) {
  if (!alias?.id) return undefined;
  if (seen.has(alias.id)) return undefined;
  seen.add(alias.id);
  const variable = variables[alias.id];
  if (!variable) return undefined;
  const modeId = pickModeId(variable, collections);
  const raw = variable.valuesByMode?.[modeId];
  if (raw?.type === 'VARIABLE_ALIAS') {
    return resolveAlias(raw, variables, collections, seen);
  }
  return formatVariableValue(raw, variable.resolvedType);
}

function formatVariableValue(raw, resolvedType) {
  if (raw == null) return undefined;
  if (typeof raw === 'object' && raw.type === 'VARIABLE_ALIAS') return undefined;
  if (resolvedType === 'COLOR' && typeof raw === 'object' && 'r' in raw) {
    const toByte = (n) => Math.round((n ?? 0) * 255);
    const hex = (n) => toByte(n).toString(16).padStart(2, '0');
    return `#${hex(raw.r)}${hex(raw.g)}${hex(raw.b)}`;
  }
  if (resolvedType === 'FLOAT' || typeof raw === 'number') return String(raw);
  if (typeof raw === 'boolean') return String(raw);
  if (typeof raw === 'string') return raw;
  return JSON.stringify(raw);
}

function addBoundEntry(out, key, alias, variables, collections) {
  if (!alias?.id) return;
  const variable = variables[alias.id];
  if (!variable?.name) return;
  const value = resolveAlias(alias, variables, collections);
  if (value !== undefined) out[variable.name] = value;
}

function walkBoundVariables(node, variables, collections, out) {
  if (!node) return;
  const bv = node.boundVariables ?? {};
  for (const [prop, binding] of Object.entries(bv)) {
    if (Array.isArray(binding)) {
      binding.forEach((b, i) => addBoundEntry(out, `${prop}[${i}]`, b, variables, collections));
    } else {
      addBoundEntry(out, prop, binding, variables, collections);
    }
  }
  for (const child of node.children ?? []) {
    walkBoundVariables(child, variables, collections, out);
  }
}

/** Extract typography hints from TEXT nodes (supplements variable map). */
function walkTextStyles(node, out) {
  if (!node) return;
  if (node.type === 'TEXT' && node.style) {
    const s = node.style;
    if (s.fontSize != null) out['_text/fontSize'] = String(s.fontSize);
    if (s.lineHeightPx != null) out['_text/lineHeightPx'] = String(s.lineHeightPx);
    if (s.fontWeight != null) out['_text/fontWeight'] = String(s.fontWeight);
  }
  for (const child of node.children ?? []) walkTextStyles(child, out);
}

export async function fetchNodeDocuments(fileKey, nodeIds) {
  const chunkSize = 40;
  const docs = {};
  for (let i = 0; i < nodeIds.length; i += chunkSize) {
    const chunk = nodeIds.slice(i, i + chunkSize);
    const data = await figmaGet(
      `/files/${fileKey}/nodes?ids=${encodeURIComponent(chunk.join(','))}`,
    );
    Object.assign(docs, data.nodes ?? {});
  }
  return docs;
}

export async function fetchScreenshotUrls(fileKey, nodeIds, scale = 2) {
  const chunkSize = 40;
  const urls = {};
  for (let i = 0; i < nodeIds.length; i += chunkSize) {
    const chunk = nodeIds.slice(i, i + chunkSize);
    const data = await figmaGet(
      `/files/${fileKey}/images?ids=${encodeURIComponent(chunk.join(','))}&format=png&scale=${scale}`,
    );
    Object.assign(urls, data.images ?? {});
  }
  return urls;
}

export function buildVariableDefs(nodeDoc, fileKey, nodeId, variantName, variables, collections) {
  const root = nodeDoc?.document;
  const vars = {};
  walkBoundVariables(root, variables, collections, vars);
  walkTextStyles(root, vars);
  return {
    nodeId,
    fileKey,
    source: 'Figma REST API (variables/local + boundVariables)',
    variant: variantName,
    variables: vars,
  };
}

export async function downloadUrl(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buf);
}
