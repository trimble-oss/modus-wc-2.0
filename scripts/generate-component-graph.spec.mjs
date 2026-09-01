/**
 * Unit tests for the component graph generator.
 * Run with: node --test scripts/generate-component-graph.spec.mjs
 * (kept out of the Stencil Jest run on purpose).
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  stripComments,
  extractChildTags,
  extractSlotTags,
  extractHostedTags,
  buildReverseImpact,
} from './generate-component-graph.mjs';

const KNOWN = new Set([
  'modus-wc-button',
  'modus-wc-icon',
  'modus-wc-collapse',
  'modus-wc-accordion',
]);

test('should extract child tags when rendered in JSX', () => {
  const source = `
    render() {
      return (
        <div class="modus-wc-accordion">
          <modus-wc-button size="sm">
            <modus-wc-icon name="close" />
          </modus-wc-button>
        </div>
      );
    }
  `;
  const children = extractChildTags(source, 'modus-wc-accordion', KNOWN);
  assert.deepEqual([...children].sort(), ['modus-wc-button', 'modus-wc-icon']);
});

test('should ignore tags that only appear in comments', () => {
  const source = `
    /**
     * Supports a slot for injecting <modus-wc-collapse> elements.
     */
    // renders a <modus-wc-icon> sometimes
    render() {
      return <slot />;
    }
  `;
  const children = extractChildTags(source, 'modus-wc-accordion', KNOWN);
  assert.equal(children.size, 0);
});

test('should extract slot tags from JSDoc that mentions a slot', () => {
  const source = `
    /**
     * The component supports a \`<slot>\` for injecting <modus-wc-collapse> elements.
     */
    render() {
      return <slot />;
    }
  `;
  const slots = extractSlotTags(source, 'modus-wc-accordion', KNOWN);
  assert.deepEqual([...slots], ['modus-wc-collapse']);
});

test('should ignore documented tags that are not slot composition', () => {
  const source = `
    /**
     * Pair this with modus-wc-button as the trigger.
     */
  `;
  const slots = extractSlotTags(source, 'modus-wc-tooltip', KNOWN);
  assert.equal(slots.size, 0);
});

test('should ignore self references and unknown tags', () => {
  const source = `
    render() {
      return (
        <modus-wc-accordion>
          <modus-wc-not-a-component />
          <div class="modus-wc-w-full" />
        </modus-wc-accordion>
      );
    }
  `;
  const children = extractChildTags(source, 'modus-wc-accordion', KNOWN);
  assert.equal(children.size, 0);
});

test('should strip block and line comments but keep code', () => {
  const stripped = stripComments(
    'const keep = "KEEP_ME"; /* gone */ // gone too\nconst x = 1;'
  );
  assert.ok(stripped.includes('KEEP_ME'));
  assert.ok(stripped.includes('const x = 1;'));
  assert.ok(!stripped.includes('gone'));
});

test('should extract hosted tags from querySelectorAll', () => {
  const source = `
    componentDidLoad() {
      this.buttonElements = this.el.querySelectorAll('modus-wc-button');
    }
  `;
  const hosted = extractHostedTags(source, 'modus-wc-button-group', KNOWN);
  assert.deepEqual([...hosted], ['modus-wc-button']);
});

test('should ignore self querySelectorAll tags', () => {
  const source = `
    const allItems = rootMenu.querySelectorAll('modus-wc-menu-item');
  `;
  const hosted = extractHostedTags(
    source,
    'modus-wc-menu-item',
    new Set(['modus-wc-menu-item', 'modus-wc-button'])
  );
  assert.equal(hosted.size, 0);
});

test('should compute transitive parents in reverse impact map', () => {
  const nodes = new Map(['a', 'b', 'c', 'd'].map((tag) => [tag, { tag }]));
  const edges = [
    { source: 'a', target: 'b', type: 'composes' },
    { source: 'b', target: 'c', type: 'composes' },
    { source: 'd', target: 'c', type: 'slot' },
  ];
  const impact = buildReverseImpact(nodes, edges);
  assert.deepEqual(impact.c, ['a', 'b', 'd']);
  assert.deepEqual(impact.b, ['a']);
  assert.deepEqual(impact.a, []);
});

test('should not loop forever when the graph has cycles', () => {
  const nodes = new Map(['a', 'b'].map((tag) => [tag, { tag }]));
  const edges = [
    { source: 'a', target: 'b', type: 'composes' },
    { source: 'b', target: 'a', type: 'composes' },
  ];
  const impact = buildReverseImpact(nodes, edges);
  assert.deepEqual(impact.a, ['a', 'b']);
  assert.deepEqual(impact.b, ['a', 'b']);
});
