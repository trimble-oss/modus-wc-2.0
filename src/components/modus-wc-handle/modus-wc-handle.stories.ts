import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Orientation } from '../types';

interface HandleArgs {
  'custom-class'?: string;
  density?: 'compact' | 'comfortable' | 'relaxed';
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
    'custom-class': '',
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
    density: {
      control: { type: 'select' },
      options: ['compact', 'comfortable', 'relaxed'],
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

const HandleTemplate = (args?: HandleArgs) => html`
  <modus-wc-handle
    custom-class="${ifDefined(args?.['custom-class'])}"
    density="${args?.density}"
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
  style: string
) => html`
  <div
    id="${id}"
    style="${style}; background-color: var(--modus-wc-color-base-100); padding: 16px; overflow: auto;"
  >
    <h3>${title}</h3>
    <p>${content}</p>
  </div>
`;

const PanelWithKeyboardInfo = (
  id: string,
  title: string,
  content: string,
  keyboardInfo: string,
  style: string
) => html`
  <div
    id="${id}"
    style="${style}; background-color: var(--modus-wc-color-base-100); padding: 16px; overflow: auto;"
  >
    <h3>${title}</h3>
    <p>${content}</p>
    <p><strong>Keyboard:</strong> ${keyboardInfo}</p>
  </div>
`;

// Reusable render function for demos
const Template = (args?: HandleArgs) => {
  const orientation = args?.orientation ?? 'horizontal';
  const type = args?.type ?? 'bar';
  const isHorizontal = orientation === 'horizontal';
  const leftId = `panel-left-${type}`;
  const rightId = `panel-right-${type}`;

  return html`
    <div
      style="display: flex; ${isHorizontal
        ? ''
        : 'flex-direction: column;'} gap: 0; height: ${isHorizontal
        ? '300px'
        : '500px'};"
    >
      ${PanelWithKeyboardInfo(
        leftId,
        isHorizontal ? 'Left Panel' : 'Top Panel',
        'Drag the handle to resize this panel.',
        `Focus the handle and use ${isHorizontal ? 'Left/Right' : 'Up/Down'} arrow keys to resize (5px per press).`,
        isHorizontal ? 'width: 200px' : 'height: 200px'
      )}
      ${HandleTemplate({
        orientation: orientation,
        size: args?.size ?? 'default',
        density: args?.density ?? 'comfortable',
        type: type,
        'left-target': `#${leftId}`,
        'right-target': `#${rightId}`,
      })}
      ${PanelTemplate(
        rightId,
        isHorizontal ? 'Right Panel' : 'Bottom Panel',
        'This panel will resize automatically when you drag the handle.',
        'flex: 1'
      )}
    </div>
  `;
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
};
