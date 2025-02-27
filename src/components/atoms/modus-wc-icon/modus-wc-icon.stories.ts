import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../../types';

interface IconArgs {
  'custom-class'?: string;
  decorative: boolean;
  name: string;
  size: DaisySize;
}

const meta: Meta<IconArgs> = {
  title: 'Components/Icon',
  component: 'modus-wc-icon',
  args: {
    'custom-class': '',
    decorative: false,
    name: 'alert',
    size: 'md',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<IconArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-icon
        aria-label="Alert icon"
        custom-class="${ifDefined(args['custom-class'])}"
        ?decorative="${ifDefined(args.decorative)}"
        name="${args.name}"
        size="${args.size}"
      >
      </modus-wc-icon>
    `;
  },
};

export const Default: Story = { ...Template };

export const CustomColor: Story = {
  render: (args) => {
    return html`
      <style>
        .red-icon {
          color: red;
        }
      </style>
      <modus-wc-icon
        aria-label="Red alert icon"
        custom-class="red-icon"
        name="alert"
        size="${args.size}"
      >
      </modus-wc-icon>
    `;
  },
};
