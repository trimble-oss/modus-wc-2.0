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

export const RadialWithSlottedContent: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  #radial-icon {
    justify-content: center;
  }
</style>
<modus-wc-progress
  aria-label="progress radial"
  ?indeterminate=${args.indeterminate}
  max=${ifDefined(args.max)}
  variant="radial"
  value=${args.value}
>
  <modus-wc-icon id="radial-icon" name="clipboard" size="md"></modus-wc-icon>
  ${args.value}%
</modus-wc-progress>
    `;
  },
  parameters: {
    layout: 'centered',
  },
};

export const RadialWithCustomSizeAndThickness: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .radial-progress--lg {
    --size: 12rem;
  }
  .radial-progress--thin {
    --thickness: 0.5rem;
  }
</style>
<modus-wc-progress
  aria-label="progress radial"
  custom-class="radial-progress--lg"
  ?indeterminate=${args.indeterminate}
  max=${ifDefined(args.max)}
  variant="radial"
  value=${args.value}
>
  ${args.value}%
</modus-wc-progress>
<modus-wc-progress
  aria-label="progress radial"
  custom-class="radial-progress--lg radial-progress--thin"
  ?indeterminate=${args.indeterminate}
  max=${ifDefined(args.max)}
  variant="radial"
  value=${args.value}
>
  ${args.value}%
</modus-wc-progress>
    `;
  },
  parameters: {
    layout: 'centered',
  },
};
