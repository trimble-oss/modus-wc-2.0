const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const test = require('node:test');
const assert = require('node:assert/strict');

const scriptPath = path.join(__dirname, 'generate-designer-context.cjs');

test('generates documented context without inferring impact', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'modus-designer-context-'));
  fs.mkdirSync(path.join(root, 'src/components/modus-wc-select'), { recursive: true });
  fs.mkdirSync(path.join(root, 'src/styles'), { recursive: true });
  fs.writeFileSync(
    path.join(root, 'src/custom-elements.json'),
    JSON.stringify({
      modules: [{
        declarations: [{
          tagName: 'modus-wc-select',
          description: 'Select control',
          attributes: [{ name: 'disabled', type: 'boolean' }],
        }],
      }],
    }),
  );
  fs.writeFileSync(
    path.join(root, 'src/components/modus-wc-select/readme.md'),
    [
      '### Used by',
      '',
      ' - [modus-wc-date](../modus-wc-date)',
      '',
      '### Depends on',
      '',
      ' - [modus-wc-input-label](../modus-wc-input-label)',
    ].join('\n'),
  );
  fs.writeFileSync(
    path.join(root, 'src/components/modus-wc-select/modus-wc-select.scss'),
    '.select { height: var(--modus-wc-input-height-md); }',
  );
  fs.writeFileSync(
    path.join(root, 'src/components/modus-wc-select/modus-wc-select.stories.ts'),
    'export const Default: Story = {}; export const WithError: Story = {};',
  );
  fs.writeFileSync(
    path.join(root, 'src/components/types.ts'),
    "export type DaisySize = 'xs' | 'sm' | 'md' | 'lg';",
  );

  execFileSync(process.execPath, [
    scriptPath,
    '--repo-root',
    root,
    '--output',
    'designer-context.json',
  ]);
  const context = JSON.parse(fs.readFileSync(path.join(root, 'designer-context.json'), 'utf8'));
  const component = context.components['modus-wc-select'];

  assert.equal(component.properties[0].name, 'disabled');
  assert.deepEqual(component.impact.usedBy, ['modus-wc-date']);
  assert.deepEqual(component.impact.dependsOn, ['modus-wc-input-label']);
  assert.deepEqual(component.tokenHints, ['--modus-wc-input-height-md']);
  assert.deepEqual(component.stateMatrix.map((state) => state.name), ['Default', 'WithError']);
  assert.deepEqual(context.sharedTypes.DaisySize, ['xs', 'sm', 'md', 'lg']);
});
