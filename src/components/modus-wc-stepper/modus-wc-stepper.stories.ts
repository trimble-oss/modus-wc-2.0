import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Orientation } from '../types';

interface StepperArgs {
  'custom-class'?: string;
  orientation: Orientation;
  steps?: IModusWcStepperItem[];
}

interface IModusWcStepperItem {
  color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'neutral';
  content?: string;
  customClass?: string;
  label?: string;
}

const meta: Meta<StepperArgs> = {
  title: 'Components/Stepper',
  component: 'modus-wc-stepper',
  args: {
    steps: [
      { label: 'Scale', color: 'primary' },
      { label: 'Belong', color: 'primary' },
      { label: 'Grow', color: 'warning' },
      { label: 'Innovate', content: '🚀' },
    ],
  },
  argTypes: {
    'custom-class': {
      control: 'text',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<StepperArgs>;

const Template: Story = {
  // prettier-ignore
  render: (args) => html`
<modus-wc-stepper
  custom-class="${ifDefined(args['custom-class'])}"
  orientation="${ifDefined(args.orientation)}"
  .steps="${args.steps}"
>
</modus-wc-stepper>
  `,
};

export const Default: Story = { ...Template };
