import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Orientation } from '../types';

interface StepperArgs {
  'custom-class'?: string;
  orientation: Orientation;
  steps?: IStepperItem[];
}

interface IStepperItem {
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
    steps: {
      description: 'Array of step objects defining the steps to display',
      table: {
        type: {
          detail: `
            Interface: IStepperItem
            Properties:
            - color ('primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral', optional): The color theme of the step
            - content (string, optional): Custom content to display in the step indicator
            - customClass (string, optional): Custom CSS class to apply to the step
            - label (string, optional): Text label for the step
          `,
        },
      },
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
<script>
// Adding this block to show how to set stepper steps via JS
       
// const steps = [
//   { label: 'Scale', color: 'primary' },
//   { label: 'Belong', color: 'primary' },
//   { label: 'Grow', color: 'warning' },
//   { label: 'Innovate', content: '🚀' }
//   ];          
// const stepper = document.querySelector('modus-wc-stepper');  
// stepper.steps = steps;
</script>

  `,
};

export const Default: Story = { ...Template };
