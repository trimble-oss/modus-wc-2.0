import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../../types';

interface IconArgs {
  'aria-label': string;
  'custom-class'?: string;
  decorative: boolean;
  name: string;
  size: DaisySize;
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
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
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
        aria-label="${ifDefined(args['aria-label'])}"
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
