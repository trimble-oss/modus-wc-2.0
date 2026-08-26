import assert from 'node:assert/strict';
import test from 'node:test';
import {
  collectPublishedFallbackHex,
  diffPublishedSlots,
  formatDiffMarkdown,
} from './diff-published-slots.js';

const fixture = `
@supports not (color: oklch(0% 0 0)) {
  :root { --fallback-p: #491eff; --fallback-b3: #e5e6e6; }
  [data-theme='modus-modern-light'] {
    --fallback-p: #0063a3;
    --fallback-b3: #b7b9c3;
    --fallback-bc: #252a2e;
  }
}
`;

test('collectPublishedFallbackHex prefers theme hex over :root Daisy hex', () => {
  const hex = collectPublishedFallbackHex(fixture, 'modus-modern-light');
  assert.equal(hex.p, '#0063a3');
  assert.equal(hex.b3, '#b7b9c3');
  assert.equal(hex.bc, '#252a2e');
});

test('diffPublishedSlots lists only changed slots', () => {
  const variablesCss = `:root { --modus-wc-color-primary: #0063a3; --modus-wc-color-base-300: #cbcdd6; --modus-wc-color-base-content: #171c1e; }`;
  const globalCss = `[data-theme='modus-modern-light'] { --unused: 1; }`;
  const rows = diffPublishedSlots(fixture, variablesCss, globalCss).filter(
    (row) => row.theme === 'modus-modern-light'
  );
  const bySlot = Object.fromEntries(rows.map((r) => [r.slot, r]));
  assert.equal(bySlot.p, undefined);
  assert.equal(bySlot.b3.published, '#b7b9c3');
  assert.equal(bySlot.b3.branch, '#cbcdd6');
  assert.equal(bySlot.bc.published, '#252a2e');
  assert.equal(bySlot.bc.branch, '#171c1e');
});

test('formatDiffMarkdown is a table of diffs only', () => {
  const md = formatDiffMarkdown([
    {
      theme: 'modus-modern-light',
      slot: 'b3',
      token: '--modus-wc-color-base-300',
      published: '#b7b9c3',
      branch: '#cbcdd6',
    },
  ]);
  assert.match(md, /published v2/);
  assert.match(md, /#b7b9c3/);
  assert.match(md, /#cbcdd6/);
});
