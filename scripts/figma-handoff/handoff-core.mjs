/** Shared helpers for modus-figma-staging-v2 (IDE capture → Drive). */

import fs from 'node:fs';

export const STAGING_FORMAT = 'modus-figma-staging-v2';

export const CAPTURE_TIERS = {
  /** All sizes, State=Default + Validation=Default only (5 variants). */
  sizes: ['default'],
  /** Default + interaction states (focused, disabled, active, read-only) per size. */
  standard: ['default', 'focused', 'disabled', 'active', 'readonly'],
  /** Every symbol in the variant set (includes valid / invalid / out-of-range). */
  full: [
    'default',
    'focused',
    'disabled',
    'active',
    'readonly',
    'valid',
    'invalid',
    'out-of-range',
  ],
};

const SIZE_ALIASES = new Set(['xs', 'sm', 'md', 'lg', 'xl']);
const STATE_ALIASES = {
  default: 'default',
  focused: 'focused',
  focus: 'focused',
  disabled: 'disabled',
  active: 'active',
  readonly: 'readonly',
  'read only': 'readonly',
  'read-only': 'readonly',
};
const VALIDATION_ALIASES = {
  default: 'default',
  valid: 'valid',
  invalid: 'invalid',
  'out of range': 'out-of-range',
  'out-of-range': 'out-of-range',
};

/** Parse `308-39905` or `308:39905` from a Figma design URL. */
export function parseFigmaUrl(url) {
  if (!url) return {};
  const fileKey = url.match(/figma\.com\/design\/([0-9a-zA-Z]{22,128})/)?.[1];
  const nodeRaw = url.match(/[?&]node-id=([\d-]+)/)?.[1];
  const pageNodeId = nodeRaw ? nodeRaw.replace(/-/g, ':') : undefined;
  return { fileKey, pageNodeId, url };
}

/** Parse `State=Default, Validation=Invalid, Size=MD` into props. */
export function parseVariantProps(name) {
  if (!name || !name.includes('=')) return undefined;
  const props = {};
  for (const part of name.split(',').map((s) => s.trim())) {
    const eq = part.indexOf('=');
    if (eq === -1) continue;
    const key = part.slice(0, eq).trim().replace(/\?$/, '').toLowerCase();
    props[key] = part.slice(eq + 1).trim();
  }
  return Object.keys(props).length ? props : undefined;
}

function normalizeState(raw) {
  return STATE_ALIASES[String(raw || 'default').toLowerCase()] ?? 'default';
}

function normalizeValidation(raw) {
  return VALIDATION_ALIASES[String(raw || 'default').toLowerCase()] ?? 'default';
}

function normalizeSize(raw) {
  const size = String(raw || '').toLowerCase();
  return SIZE_ALIASES.has(size) ? size : undefined;
}

/**
 * Stable folder id under variants/.
 * Examples: md-default, md-focused, md-invalid, md-out-of-range
 */
export function variantFolderIdFromProps(props) {
  if (!props) return undefined;
  const size = normalizeSize(props.size ?? props.Size);
  if (!size) return undefined;

  const state = normalizeState(props.state ?? props.State);
  const validation = normalizeValidation(props.validation ?? props.Validation);

  if (state !== 'default') {
    return `${size}-${state}`;
  }
  if (validation !== 'default') {
    return `${size}-${validation}`;
  }
  return `${size}-default`;
}

export function variantFolderIdFromFigmaName(name) {
  return variantFolderIdFromProps(parseVariantProps(name));
}

/** Parse `md-focused` back to { size, state, validation } for manifest props. */
export function parseVariantFolderId(id) {
  const parts = String(id || '')
    .split('-')
    .filter(Boolean);
  if (!parts.length) return {};

  const props = { state: 'default', validation: 'default' };
  let i = 0;

  if (SIZE_ALIASES.has(parts[0])) {
    props.size = parts[0];
    i = 1;
  }

  const tail = parts.slice(i).join('-');
  if (!tail || tail === 'default') return props;

  if (['valid', 'invalid', 'out-of-range'].includes(tail)) {
    props.validation = tail;
    return props;
  }

  props.state = STATE_ALIASES[tail] ?? tail;
  return props;
}

/** Whether a Figma variant name should be captured for the given tier. */
export function shouldCaptureVariant(figmaName, tier = 'full') {
  const allowed = CAPTURE_TIERS[tier] ?? CAPTURE_TIERS.full;
  const props = parseVariantProps(figmaName);
  if (!props?.Size && !props?.size) return false;

  const state = normalizeState(props.State ?? props.state);
  const validation = normalizeValidation(props.Validation ?? props.validation);

  if (state !== 'default') {
    return allowed.includes(state);
  }
  if (validation !== 'default') {
    return allowed.includes(validation);
  }
  return allowed.includes('default');
}

export function figmaNameFromProps(props) {
  const size = (props.size ?? 'md').toUpperCase();
  const stateRaw =
    props.state === 'readonly'
      ? 'Read only'
      : props.state
        ? props.state.charAt(0).toUpperCase() + props.state.slice(1)
        : 'Default';
  let validationRaw = 'Default';
  if (props.validation === 'valid') validationRaw = 'Valid';
  if (props.validation === 'invalid') validationRaw = 'Invalid';
  if (props.validation === 'out-of-range') validationRaw = 'Out of range';
  return `State=${stateRaw}, Validation=${validationRaw}, Size=${size}`;
}

export function listVariantDirs(stagingDir) {
  const root = `${stagingDir}/variants`;
  try {
    return fs
      .readdirSync(root, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
  } catch {
    return [];
  }
}

export function readJsonIfExists(filePath) {
  if (!fs.existsSync(filePath)) return undefined;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function variantManifestEntry(variantId, stagingDir) {
  const variantDir = `${stagingDir}/variants/${variantId}`;
  const meta = readJsonIfExists(`${variantDir}/meta.json`) ?? {};
  const variableDefs = readJsonIfExists(`${variantDir}/variable-defs.json`);
  const props = {
    ...parseVariantFolderId(variantId),
    ...(meta.props ?? {}),
  };

  return {
    id: variantId,
    nodeId: meta.nodeId ?? variableDefs?.nodeId,
    name: meta.name ?? figmaNameFromProps(props),
    props,
    files: {
      designContext: `variants/${variantId}/design-context.md`,
      variableDefs: `variants/${variantId}/variable-defs.json`,
      screenshot: `variants/${variantId}/screenshot.png`,
      meta: `variants/${variantId}/meta.json`,
    },
  };
}
