/* eslint-env node */

import { existsSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { tokenizeIllustrationSvg } from './tokenize-illustration-svg.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../../src/svg-assets/illustrations');
const TEMP = join(ROOT, '_figma-temp');

function readInner(svgPath) {
  const svg = readFileSync(svgPath, 'utf8');
  const match = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  if (!match) {
    throw new Error(`Could not parse SVG: ${svgPath}`);
  }
  return match[1].trim();
}

function parseViewBox(svgPath) {
  const svg = readFileSync(svgPath, 'utf8');
  const match = svg.match(/viewBox="([^"]+)"/i);
  if (!match) {
    throw new Error(`Missing viewBox: ${svgPath}`);
  }
  return match[1].split(/\s+/).map(Number);
}

function insetBox(canvas, top, right, bottom, left) {
  const x = canvas * left;
  const y = canvas * top;
  const width = canvas * (1 - left - right);
  const height = canvas * (1 - top - bottom);
  return { x, y, width, height };
}

function placePart(partPath, box) {
  const inner = readInner(partPath);
  const [vx, vy, vw, vh] = parseViewBox(partPath);
  const scale = Math.min(box.width / vw, box.height / vh);
  const tx = box.x + (box.width - vw * scale) / 2 - vx * scale;
  const ty = box.y + (box.height - vh * scale) / 2 - vy * scale;
  return `<g transform="translate(${tx} ${ty}) scale(${scale})">${inner}</g>`;
}

function insetBoxIn(parent, top, right, bottom, left) {
  const x = parent.x + parent.width * left;
  const y = parent.y + parent.height * top;
  const width = parent.width * (1 - left - right);
  const height = parent.height * (1 - top - bottom);
  return { x, y, width, height };
}

function composeCanvas(canvasSize, outerInset, layers) {
  const outer = insetBox(
    canvasSize,
    outerInset.top,
    outerInset.right,
    outerInset.bottom,
    outerInset.left
  );

  const body = layers
    .map(({ part, inset }) => {
      const box = insetBoxIn(
        outer,
        inset.top,
        inset.right,
        inset.bottom,
        inset.left
      );
      return placePart(part, box);
    })
    .join('\n');

  const svg = `<svg viewBox="0 0 ${canvasSize} ${canvasSize}" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="illustration">\n${body}\n</g>\n</svg>`;
  return tokenizeIllustrationSvg(svg);
}

function composeCanvasFlat(canvasSize, layers) {
  return composeCanvas(
    canvasSize,
    { top: 0, right: 0, bottom: 0, left: 0 },
    layers
  );
}

const cloudParts = join(TEMP, 'cloud');
const storeParts = join(TEMP, 'store');

if (existsSync(join(cloudParts, 'clouds-bg.svg'))) {
  const cloudAccessSvg = composeCanvasFlat(342, [
    {
      part: join(cloudParts, 'clouds-bg.svg'),
      inset: { top: 0.0848, right: 0, bottom: 0.0894, left: 0 },
    },
    {
      part: join(cloudParts, 'group10668.svg'),
      inset: { top: 0.2924, right: 0.272, bottom: 0.348, left: 0.4473 },
    },
    {
      part: join(cloudParts, 'group10717.svg'),
      inset: { top: 0.4737, right: 0.4852, bottom: 0.402, left: 0.231 },
    },
    {
      part: join(cloudParts, 'icon-x.svg'),
      inset: { top: 0.5234, right: 0.152, bottom: 0.3889, left: 0.7602 },
    },
  ]);
  writeFileSync(join(ROOT, 'clouds/cloud-access.svg'), cloudAccessSvg, 'utf8');
  console.log('Wrote clouds/cloud-access.svg');
}

// Store component (Figma node 46870:26455) — 342×342 with inner content inset.
if (existsSync(join(storeParts, 'vector864.svg'))) {
  const storeSettingsSvg = composeCanvas(
    342,
    { top: 0.0481, right: 0.1849, bottom: 0.0481, left: 0.1732 },
    [
      {
        part: join(storeParts, 'vector864.svg'),
        inset: { top: 0.1678, right: 0.4993, bottom: 0.5383, left: 0.4934 },
      },
      {
        part: join(storeParts, 'group10663.svg'),
        inset: { top: 0.3871, right: 0.1849, bottom: 0.0481, left: 0.1732 },
      },
      {
        part: join(storeParts, 'vector.svg'),
        inset: { top: 0.0481, right: 0.3085, bottom: 0.6975, left: 0.2968 },
      },
      {
        part: join(storeParts, 'vector-stroke.svg'),
        inset: { top: 0.0481, right: 0.3085, bottom: 0.6975, left: 0.2968 },
      },
      {
        part: join(storeParts, 'vector1.svg'),
        inset: { top: 0.0949, right: 0.364, bottom: 0.7062, left: 0.3319 },
      },
      {
        part: join(storeParts, 'subtract.svg'),
        inset: { top: 0.1943, right: 0.4269, bottom: 0.6502, left: 0.4211 },
      },
      {
        part: join(storeParts, 'subtract-stroke.svg'),
        inset: { top: 0.187, right: 0.4188, bottom: 0.6429, left: 0.413 },
      },
    ]
  );
  writeFileSync(
    join(ROOT, 'stores/store-settings.svg'),
    storeSettingsSvg,
    'utf8'
  );
  console.log('Wrote stores/store-settings.svg (Figma Store 46870:26455)');
}

// Error 404 (Figma Atomic DS Empty State 46868:17956 → _cloud 46971:24954) — 342×342.
const error404Parts = join(TEMP, 'error404');
if (existsSync(join(error404Parts, 'clouds-bg.svg'))) {
  const error404Svg = composeCanvasFlat(342, [
    {
      part: join(error404Parts, 'clouds-bg.svg'),
      inset: { top: 0.1053, right: 0.0029, bottom: 0.0972, left: 0 },
    },
    {
      part: join(error404Parts, 'magnifying-glass.svg'),
      inset: { top: 0.3747, right: 0.2959, bottom: 0.3087, left: 0.3797 },
    },
  ]);
  writeFileSync(join(ROOT, 'errors/error-404.svg'), error404Svg, 'utf8');
  console.log('Wrote errors/error-404.svg (Figma 46868:17956)');
}

// Error 404 page (Figma Read-only-states 46971:25042) — typographic 404 + cloud/shovel.
const error404PageParts = join(TEMP, 'error404page');
if (existsSync(join(error404PageParts, 'group26844.svg'))) {
  const error404PageSvg = composeCanvasFlat(342, [
    {
      part: join(error404PageParts, 'group26844.svg'),
      inset: { top: 0.1988, right: 0.1082, bottom: 0.2018, left: 0.1111 },
    },
  ]);
  writeFileSync(
    join(ROOT, 'errors/error-404-page.svg'),
    error404PageSvg,
    'utf8'
  );
  console.log('Wrote errors/error-404-page.svg (Figma 46971:25042)');
}
