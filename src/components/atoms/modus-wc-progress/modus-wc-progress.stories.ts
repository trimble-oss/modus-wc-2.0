import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Meta, StoryObj } from '@storybook/web-components';

interface ProgressArgs {
  'aria-label': string;
  'custom-class'?: string;
  indeterminate: boolean;
  max?: number;
  value: number;
}

const meta: Meta<ProgressArgs> = {
  title: 'Components/Progress',
  component: 'modus-wc-progress',
  args: {
    'aria-label': 'Example progress bar',
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
        aria-label="${args['aria-label']}"
        custom-class="${ifDefined(args['custom-class'])}"
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
