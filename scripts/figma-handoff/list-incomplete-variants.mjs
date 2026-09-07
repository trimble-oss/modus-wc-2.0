#!/usr/bin/env node
/**
 * List variants missing required capture files (respects capture tier / source).
 */
import fs from 'node:fs';
import path from 'node:path';
import {
  CAPTURE_TIERS,
  listVariantDirs,
  shouldCaptureVariant,
  variantFolderIdFromFigmaName,
} from './handoff-core.mjs';

const STAGING = process.argv[2] ?? 'scripts/figma-handoff/staging/issue-0-modus-wc-select';
const captureTier = process.argv[3] ?? 'sizes';
const captureSource = process.argv[4] ?? 'rest';

const ALL = [
  ['10806:13456', 'State=Default, Validation=Default, Size=XS'],
  ['48293:93867', 'State=Read only, Validation=Default, Size=XS'],
  ['10806:13470', 'State=Default, Validation=Valid, Size=XS'],
  ['10806:13499', 'State=Default, Validation=Invalid, Size=XS'],
  ['10806:13528', 'State=Default, Validation=Out of range, Size=XS'],
  ['10814:14033', 'State=Focused, Validation=Default, Size=XS'],
  ['10814:14423', 'State=Disabled, Validation=Default, Size=XS'],
  ['10814:14116', 'State=Active, Validation=Default, Size=XS'],
  ['12611:134207', 'State=Default, Validation=Default, Size=SM'],
  ['48294:94017', 'State=Read only, Validation=Default, Size=SM'],
  ['12611:134209', 'State=Default, Validation=Valid, Size=SM'],
  ['12611:134211', 'State=Default, Validation=Invalid, Size=SM'],
  ['12611:134213', 'State=Default, Validation=Out of range, Size=SM'],
  ['12611:134219', 'State=Focused, Validation=Default, Size=SM'],
  ['12611:134217', 'State=Disabled, Validation=Default, Size=SM'],
  ['12611:134215', 'State=Active, Validation=Default, Size=SM'],
  ['12611:134636', 'State=Default, Validation=Default, Size=MD'],
  ['48293:93907', 'State=Read only, Validation=Default, Size=MD'],
  ['12611:134638', 'State=Default, Validation=Valid, Size=MD'],
  ['12611:134640', 'State=Default, Validation=Invalid, Size=MD'],
  ['12611:134642', 'State=Default, Validation=Out of range, Size=MD'],
  ['12611:134648', 'State=Focused, Validation=Default, Size=MD'],
  ['12611:134646', 'State=Disabled, Validation=Default, Size=MD'],
  ['12611:134644', 'State=Active, Validation=Default, Size=MD'],
  ['12611:135065', 'State=Default, Validation=Default, Size=LG'],
  ['48294:94057', 'State=Read only, Validation=Default, Size=LG'],
  ['12611:135067', 'State=Default, Validation=Valid, Size=LG'],
  ['12611:135069', 'State=Default, Validation=Invalid, Size=LG'],
  ['12611:135071', 'State=Default, Validation=Out of range, Size=LG'],
  ['12611:135077', 'State=Focused, Validation=Default, Size=LG'],
  ['12611:135075', 'State=Disabled, Validation=Default, Size=LG'],
  ['12611:135073', 'State=Active, Validation=Default, Size=LG'],
  ['28769:100351', 'State=Default, Validation=Default, Size=XL'],
  ['48293:93947', 'State=Read only, Validation=Default, Size=XL'],
  ['28769:100353', 'State=Default, Validation=Valid, Size=XL'],
  ['28769:100359', 'State=Default, Validation=Invalid, Size=XL'],
  ['28769:100363', 'State=Default, Validation=Out of range, Size=XL'],
  ['28769:100357', 'State=Focused, Validation=Default, Size=XL'],
  ['28769:100361', 'State=Disabled, Validation=Default, Size=XL'],
  ['28769:100365', 'State=Active, Validation=Default, Size=XL'],
]
  .filter(([, name]) => shouldCaptureVariant(name, captureTier))
  .map(([nodeId, name]) => [nodeId, variantFolderIdFromFigmaName(name)]);

const requireDesignContext = captureSource !== 'rest';
const requiredFiles = [
  'variable-defs.json',
  'screenshot.png',
  'meta.json',
  ...(requireDesignContext ? ['design-context.md'] : []),
];

const incomplete = [];
for (const [nodeId, folderId] of ALL) {
  const dir = path.join(STAGING, 'variants', folderId);
  const missing = requiredFiles.filter((f) => !fs.existsSync(path.join(dir, f)));
  if (missing.length) incomplete.push({ nodeId, folderId, missing });
}

console.log(
  JSON.stringify(
    {
      captureTier,
      captureSource,
      expected: ALL.length,
      complete: ALL.length - incomplete.length,
      incomplete,
    },
    null,
    2,
  ),
);
