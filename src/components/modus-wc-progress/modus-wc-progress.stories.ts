import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ProgressArgs {
  'custom-class'?: string;
  indeterminate: boolean;
  label?: string;
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

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="${ifDefined(args['custom-class'])}"
        ?indeterminate=${args.indeterminate}
        label=${ifDefined(args.label)}
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

export const SizeVariations: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .modus-wc-progress-container .size-small {
    height: 0.5rem;
  }
  .modus-wc-progress-container .size-compact {
    height: 0.25rem;
  }
</style>
<div>
  <div>
    Default size
    <modus-wc-progress value=${args.value}></modus-wc-progress>
  </div>
  <div>
    Small size
    <modus-wc-progress
      value=${args.value}
      custom-class="size-small"
    ></modus-wc-progress>
  </div>
  <div>
    Compact size
    <modus-wc-progress
      value=${args.value}
      custom-class="size-compact"
    ></modus-wc-progress>
  </div>
</div>
    `;
  },
};

export const LabelTextColor: Story = {
  args: {
    label: 'Loading...',
    value: 50,
  },
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .modus-wc-progress-label.custom-label-color {
    color: #f00;
  }
</style>
<modus-wc-progress
  value=${args.value}
  label=${ifDefined(args.label)}
  custom-class="custom-label-color"
></modus-wc-progress>
    `;
  },
};

export const CustomBarColor: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .modus-wc-progress.custom-bar-color::-webkit-progress-value {
    background-color: #f48;
  }
  .modus-wc-progress.custom-bar-color::-moz-progress-bar {
    background-color: #f48;
  }
</style>
<modus-wc-progress
  value=${args.value}
  custom-class="custom-bar-color"
></modus-wc-progress>
    `;
  },
};

export const CustomBackgroundColor: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .modus-wc-progress.custom-bg-color {
    background-color: #f00;
  }
</style>
<modus-wc-progress
  value=${args.value}
  custom-class="custom-bg-color"
></modus-wc-progress>
    `;
  },
};
