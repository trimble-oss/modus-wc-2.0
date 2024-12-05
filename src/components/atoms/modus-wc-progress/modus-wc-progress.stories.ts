import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Meta, StoryObj } from '@storybook/web-components';

interface ProgressArgs {
  'custom-class': string;
  indeterminate: boolean;
  max?: number;
  value: number;
}

const meta: Meta<ProgressArgs> = {
  title: 'Components/Progress',
  component: 'modus-wc-progress',
  args: {
    indeterminate: false,
    max: 100,
    value: 70,
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<ProgressArgs>;

export const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-progress
        custom-class="${args['custom-class']}"
        ?indeterminate=${args.indeterminate}
        max=${ifDefined(args.max)}
        value=${args.value}
      ></modus-wc-progress>
    `;
  },
};

export const Indeterminate: Story = {
  render: () => {
    return html` <modus-wc-progress indeterminate="true"></modus-wc-progress> `;
  },
};
