import { Meta, StoryObj } from '@storybook/web-components';
import { html, unsafeCSS } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { keyed } from 'lit/directives/keyed.js';
import { DaisySize, Orientation } from '../types';

// Shared styles for story demos
const storyStyles = unsafeCSS(`
  .handle-demo-container {
    display: flex;
    gap: 0;
  }

  .handle-demo-container.horizontal {
    height: 300px;
  }

  .handle-demo-container.vertical {
    flex-direction: column;
    height: 500px;
  }

  .handle-demo-panel {
    background-color: var(--modus-wc-color-base-100);
    overflow: auto;
  }

  .handle-demo-panel.initial-size-200 {
    width: 200px;
  }

  .handle-demo-panel.initial-height-200 {
    height: 200px;
  }

  .handle-demo-panel.initial-size-400 {
    width: 400px;
  }

  .handle-demo-panel.flex-fill {
    flex: 1;
  }

  .handle-demo-right-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`);

interface HandleArgs {
  'custom-class'?: string;
  'default-split'?: number;
  density?: 'compact' | 'comfortable' | 'relaxed';
  'button-color'?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  'button-size'?: DaisySize;
  'button-variant'?: 'borderless' | 'filled' | 'outlined';
  'left-target'?: string;
  orientation?: Orientation;
  'right-target'?: string;
  size?: 'default' | 'lg' | 'xl' | '2xl';
  type?: 'bar' | 'button';
}

const meta: Meta<HandleArgs> = {
  title: 'Components/Handle',
  component: 'modus-wc-handle',
  args: {
    'button-color': 'tertiary',
    'button-size': 'md',
    'button-variant': 'filled',
    'custom-class': '',
    'default-split': 50,
    density: 'comfortable',
    'left-target': '',
    orientation: 'vertical',
    'right-target': '',
    size: 'default',
    type: 'bar',
  },
  argTypes: {
    'custom-class': {
      control: 'text',
    },
    'default-split': {
      control: { type: 'range', min: 1, max: 100, step: 1 },
    },
    density: {
      control: { type: 'select' },
      options: ['compact', 'comfortable', 'relaxed'],
    },
    'button-size': {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    'button-color': {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
    'button-variant': {
      control: { type: 'select' },
      options: ['borderless', 'filled', 'outlined'],
    },
    'left-target': {
      control: 'text',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    'right-target': {
      control: 'text',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'lg', 'xl', '2xl'],
    },
    type: {
      control: { type: 'select' },
      options: ['bar', 'button'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<HandleArgs>;

const HandleTemplate = (args?: HandleArgs) =>
  // prettier-ignore
  html`
<modus-wc-handle
  custom-class="${ifDefined(args?.['custom-class'])}"
  default-split="${args?.['default-split']}"
  density="${args?.density}"
  button-size="${args?.['button-size']}"
  button-color="${args?.['button-color']}"
  button-variant="${args?.['button-variant']}"
  left-target="${ifDefined(args?.['left-target'])}"
  orientation="${ifDefined(args?.orientation)}"
  right-target="${ifDefined(args?.['right-target'])}"
  size="${args?.size}"
  type="${args?.type}"
></modus-wc-handle>
  `;

// Helper templates for panels
const PanelTemplate = (
  id: string,
  title: string,
  content: string,
  className: string = ''
) =>
  // prettier-ignore
  html`
<div id="${id}" class="handle-demo-panel ${className}">
  <h3>${title}</h3>
  <p>${content}</p>
</div>
`;

const PanelWithKeyboardInfo = (
  id: string,
  title: string,
  content: string,
  keyboardInfo: string,
  className: string = ''
) =>
  // prettier-ignore
  html`
<div id="${id}" class="handle-demo-panel ${className}">
  <h3>${title}</h3>
  <p>${content}</p>
  <p><strong>Keyboard:</strong> ${keyboardInfo}</p>
</div>
`;

// Generate unique ID for each render to avoid conflicts on docs page
const generateUniqueId = () => Math.random().toString(36).substring(2, 9);

// Reusable render function for demos
const Template = (args?: HandleArgs) => {
  const orientation = args?.orientation ?? 'horizontal';
  const type = args?.type ?? 'bar';
  const isHorizontal = orientation === 'horizontal';
  const uniqueId = generateUniqueId();
  const leftId = `panel-left-${uniqueId}`;
  const rightId = `panel-right-${uniqueId}`;
  // prettier-ignore
  return html`
<style>${storyStyles}</style>
${keyed(orientation, html`
<div class="handle-demo-container ${isHorizontal ? 'horizontal' : 'vertical'}">
  ${PanelWithKeyboardInfo(
    leftId,
    isHorizontal ? 'Left Panel' : 'Top Panel',
    'Drag the handle to resize this panel.',
    `Focus the handle and use ${isHorizontal ? 'Left/Right' : 'Up/Down'} arrow keys to resize (5px per press, 15px with Shift).`,
    isHorizontal ? 'initial-size-200' : 'initial-height-200'
  )}
  ${HandleTemplate({
    orientation: orientation,
    size: args?.size ?? 'default',
    density: args?.density ?? 'comfortable',
    type: type,
    'default-split': args?.['default-split'] ?? 50,
    'custom-class': args?.['custom-class'],
    'button-size': args?.['button-size'],
    'button-color': args?.['button-color'],
    'button-variant': args?.['button-variant'],
    'left-target': `#${leftId}`,
    'right-target': `#${rightId}`,
  })}
  ${PanelTemplate(
    rightId,
    isHorizontal ? 'Right Panel' : 'Bottom Panel',
    'This panel will resize automatically when you drag the handle.',
    'flex-fill'
  )}
</div>
`)}`;
};

export const Default: Story = {
  render: (args?: HandleArgs) => Template(args),
};

export const ButtonVariant: Story = {
  render: (args?: HandleArgs) => {
    return Template({
      ...args,
      orientation: args?.orientation ?? 'horizontal',
      size: args?.size ?? 'default',
      density: args?.density ?? 'comfortable',
      type: 'button',
    });
  },
  args: {
    type: 'button',
  },
  parameters: {
    docs: {
      description: {
        story: `
Button type handle with customizable button properties.

**Button Properties Available:**
- \`button-size\`: sm, md, lg
- \`button-color\`: primary, secondary, tertiary, warning, danger
- \`button-variant\`: borderless, filled, outlined

**Keyboard Navigation:**
- Arrow keys: Move 5px per press
- Shift + Arrow keys: Move 15px per press

The button handle provides a more prominent visual indicator compared to the bar type.
        `,
      },
    },
  },
};

export const MultipleHandlesNested: Story = {
  render: () => {
    // prettier-ignore
    return html`
<style>${storyStyles}</style>
<div class="handle-demo-container" style="height: 600px;">
  ${PanelTemplate('panel-one', 'One', 'Large left panel', 'initial-size-400')}
  ${HandleTemplate({
    orientation: 'horizontal',
    size: 'default',
    density: 'comfortable',
    type: 'bar',
    'left-target': '#panel-one',
    'right-target': '#right-container',
  })}
  <div id="right-container" class="handle-demo-right-container">
    ${PanelTemplate('panel-two', 'Two', 'Top right panel', 'initial-height-200')}
    ${HandleTemplate({
      orientation: 'vertical',
      size: 'default',
      density: 'comfortable',
      type: 'bar',
      'left-target': '#panel-two',
      'right-target': '#panel-three',
    })}
    ${PanelTemplate('panel-three', 'Three', 'Bottom right panel', 'flex-fill')}
  </div>
</div>
    `;
  },
};
