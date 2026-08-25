import assert from 'node:assert/strict';
import test from 'node:test';
import {
  extractRules,
  normalizeColor,
  parseDecls,
  resolveValue,
  splitTopLevel,
} from './css-parse.js';

test('splitTopLevel respects nested parentheses', () => {
  const parts = splitTopLevel('var(--a, light-dark(#fff, #000)), b', ',');
  assert.equal(parts.length, 2);
  assert.match(parts[0], /light-dark/);
});

test('parseDecls handles light-dark values', () => {
  const decls = parseDecls(
    '--x: light-dark(\n    var(--a),\n    var(--b)\n  ); --y: #fff'
  );
  assert.equal(decls.length, 2);
  assert.equal(decls[0].prop, '--x');
  assert.match(decls[0].value, /light-dark/);
});

test('extractRules walks @supports into nested selectors', () => {
  const rules = extractRules(`
    @supports (color: oklch(0% 0 0)) {
      :root { --fallback-p: var(--modus-wc-color-primary); }
    }
  `);
  assert.equal(rules.length, 1);
  assert.equal(rules[0].selector, ':root');
  assert.match(rules[0].atRule, /@supports \(color: oklch/);
  assert.equal(rules[0].decls[0].prop, '--fallback-p');
});

test('resolveValue follows var chains and light-dark', () => {
  const map = new Map([
    ['--a', '#0063A3'],
    ['--b', '#019AEB'],
    ['--p', 'light-dark(var(--a), var(--b))'],
  ]);
  assert.equal(resolveValue('var(--p)', map, false), '#0063a3');
  assert.equal(resolveValue('var(--p)', map, true), '#019aeb');
});

test('normalizeColor expands short hex', () => {
  assert.equal(normalizeColor('#fff'), '#ffffff');
  assert.equal(normalizeColor('#000'), '#000000');
});
