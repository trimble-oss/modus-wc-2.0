import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../../types';

interface IconArgs {
  'aria-label': string;
  'custom-class'?: string;
  decorative: boolean;
  name: string;
  size: DaisySize;
  color?: string;
}

const meta: Meta<IconArgs> = {
  title: 'Components/Icon',
  component: 'modus-wc-icon',
  args: {
    'aria-label': 'Alert icon',
    'custom-class': '',
    decorative: false,
    name: 'alert',
    size: 'md',
    color: '',
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export default meta;

type Story = StoryObj<IconArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-icon
        aria-label="${ifDefined(args['aria-label'])}"
        custom-class="${ifDefined(args['custom-class'])}"
        ?decorative="${ifDefined(args.decorative)}"
        name="${args.name}"
        size="${args.size}"
        color="${ifDefined(args.color)}"
      >
      </modus-wc-icon>
    `;
  },
};

export const Default: Story = { ...Template };
