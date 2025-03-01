import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ProgressArgs {
  'custom-class'?: string;
  indeterminate: boolean;
  max?: number;
  value: number;
  variant?: 'default' | 'radial';
}

const meta: Meta<ProgressArgs> = {
  title: 'Components/Progress',
  component: 'modus-wc-progress',
  args: {
    indeterminate: false,
    max: 100,
    value: 70,
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'radial'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<ProgressArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="${ifDefined(args['custom-class'])}"
        ?indeterminate=${args.indeterminate}
        max=${ifDefined(args.max)}
        value=${args.value}
        variant=${ifDefined(args.variant)}
      ></modus-wc-progress>
    `;
  },
};

export const Indeterminate: Story = {
  render: () => {
    return html` <modus-wc-progress indeterminate="true"></modus-wc-progress> `;
  },
};
