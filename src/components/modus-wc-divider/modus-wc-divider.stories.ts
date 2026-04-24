import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { Orientation } from '../types';

interface DividerArgs {
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger';
  content: string;
  'custom-class'?: string;
  orientation: Orientation;
  position: 'center' | 'end' | 'start';
  responsive: boolean;
}

const meta: Meta<DividerArgs> = {
  title: 'Components/Divider',
  component: 'modus-wc-divider',
  args: {
    color: 'tertiary',
    content: '',
    'custom-class': '',
    orientation: 'vertical',
    position: 'center',
    responsive: true,
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'high-contrast',
        'success',
        'warning',
        'danger',
      ],
    },
    content: {
      control: 'text',
    },
    'custom-class': {
      control: 'text',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    position: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
    },
    responsive: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<DividerArgs>;

const Template: Story = {
  render: (args) => html`
    <modus-wc-divider
      color="${args.color}"
      content="${args.content}"
      custom-class="${ifDefined(args['custom-class'])}"
      orientation="${args.orientation}"
      position="${args.position}"
      responsive="${args.responsive}"
      style="${args.orientation === 'horizontal'
        ? 'display: flex; height: 100px'
        : ''}"
    ></modus-wc-divider>
  `,
};

export const Default: Story = { ...Template };

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('divider-shadow-host')) {
      const DividerShadowHost = createShadowHostClass<DividerArgs>({
        componentTag: 'modus-wc-divider',
        propsMapper: (v: DividerArgs, el: HTMLElement) => {
          const dividerEl = el as unknown as {
            color: string;
            content: string;
            customClass: string;
            orientation: string;
            position: string;
            responsive: boolean;
          };
          dividerEl.color = v.color;
          dividerEl.content = v.content;
          dividerEl.customClass = v['custom-class'] || '';
          dividerEl.orientation = v.orientation;
          dividerEl.position = v.position;
          dividerEl.responsive = Boolean(v.responsive);
        },
      });
      customElements.define('divider-shadow-host', DividerShadowHost);
    }

    return html`<divider-shadow-host
      style=${args.orientation === 'horizontal'
        ? 'display: flex; height: 100px'
        : ''}
      .props=${{ ...args }}
    ></divider-shadow-host>`;
  },
};
