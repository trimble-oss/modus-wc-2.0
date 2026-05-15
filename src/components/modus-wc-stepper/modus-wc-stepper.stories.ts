import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { Orientation } from '../types';

interface StepperArgs {
  'active-step'?: number;
  'custom-class'?: string;
  interactive?: boolean;
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
    'active-step': undefined,
    interactive: false,
    steps: [
      { label: 'Scale', color: 'primary' },
      { label: 'Belong', color: 'primary' },
      { label: 'Grow', color: 'warning' },
      { label: 'Innovate', content: '🚀' },
    ],
  },
  decorators: [withActions],
  argTypes: {
    'active-step': {
      control: 'number',
    },
    'custom-class': {
      control: 'text',
    },
    interactive: {
      control: 'boolean',
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
    actions: {
      handles: ['stepClick'],
    },
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<StepperArgs>;

const Template: Story = {
  // prettier-ignore
  render: (args) => html`
<modus-wc-stepper
  active-step="${ifDefined(args['active-step'])}"
  custom-class="${ifDefined(args['custom-class'])}"
  orientation="${ifDefined(args.orientation)}"
  ?interactive="${args.interactive ?? false}"
  .steps="${args.steps}"
>
</modus-wc-stepper>
<script>
// Adding this block to show how to set stepper steps via JS.    
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

export const Interactive: Story = {
  args: {
    interactive: true,
  },
  render: (args) => html`
    <modus-wc-stepper
      active-step="${ifDefined(args['active-step'])}"
      custom-class="${ifDefined(args['custom-class'])}"
      orientation="${ifDefined(args.orientation)}"
      ?interactive="${args.interactive ?? false}"
      .steps="${args.steps}"
    ></modus-wc-stepper>
  `,
};

export const ControlledActiveStep: Story = {
  name: 'Active step (controlled)',
  parameters: {
    docs: {
      source: {
        code: `
<modus-wc-stepper
  id="controlled-stepper"
  active-step="1"
  orientation="horizontal"
  interactive
></modus-wc-stepper>
<script>
  const baseSteps = [
    { label: 'Planning' },
    { label: 'Execution' },
    { label: 'Verification' },
    { label: 'Done' },
  ];

  const getColoredSteps = (activeIndex) =>
    baseSteps.map((step, index) => ({
      ...step,
      color: index <= activeIndex ? 'primary' : 'neutral',
    }));

  const stepper = document.getElementById('controlled-stepper');
  stepper.steps = getColoredSteps(1);

  stepper.addEventListener('stepClick', (event) => {
    const activeIndex = event.detail;
    stepper.activeStep = activeIndex;
    stepper.steps = getColoredSteps(activeIndex);
  });
</script>
        `,
      },
    },
  },
  // prettier-ignore
  render: () => {
    const initialActiveStep = 1;

    const baseSteps: IStepperItem[] = [
      { label: 'Planning' },
      { label: 'Execution' },
      { label: 'Verification' },
      { label: 'Done' },
    ];

    const getColoredSteps = (activeIndex: number): IStepperItem[] =>
      baseSteps.map((step, index) => ({
        ...step,
        color: index <= activeIndex ? 'primary' : 'neutral',
      }));

    const handleStepClick = (event: CustomEvent<number>) => {
      const stepper = event.target as HTMLElement & {
        activeStep: number;
        steps: IStepperItem[];
      };
      const nextActive = event.detail;
      stepper.activeStep = nextActive;
      stepper.steps = getColoredSteps(nextActive);
    };

    return html`
      <modus-wc-stepper
        id="controlled-stepper"
        active-step="${initialActiveStep}"
        orientation="horizontal"
        interactive
        .steps="${getColoredSteps(initialActiveStep)}"
        @stepClick=${handleStepClick}
      ></modus-wc-stepper>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('stepper-shadow-host')) {
      const StepperShadowHost = createShadowHostClass<StepperArgs>({
        componentTag: 'modus-wc-stepper',
        propsMapper: (v: StepperArgs, el: HTMLElement) => {
          const stepperEl = el as unknown as {
            activeStep: number | undefined;
            customClass: string;
            interactive: boolean;
            orientation: string;
            steps: IStepperItem[];
          };
          stepperEl.activeStep = v['active-step'];
          stepperEl.customClass = v['custom-class'] || '';
          stepperEl.interactive = v.interactive ?? false;
          stepperEl.orientation = v.orientation ?? 'horizontal';
          stepperEl.steps = v.steps ?? [];
        },
      });
      customElements.define('stepper-shadow-host', StepperShadowHost);
    }

    return html`<stepper-shadow-host
      .props=${{ ...args }}
    ></stepper-shadow-host>`;
  },
};
