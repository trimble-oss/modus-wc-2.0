import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { Orientation } from '../types';

interface StepperArgs {
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
  parameters: {
    docs: {
      source: {
        code: `
<modus-wc-stepper
  id="interactive-stepper"
  orientation="horizontal"
  interactive
></modus-wc-stepper>
<script>
  const activeIndex = 1;
  const steps = [
    { label: 'Scale' },
    { label: 'Belong' },
    { label: 'Grow' },
    { label: 'Innovate', content: '🚀' },
  ];

  const getSteps = (selectedIndex) =>
    steps.map((step, index) =>
      index <= selectedIndex ? { ...step, color: 'primary' } : { ...step }
    );

  const stepper = document.getElementById('interactive-stepper');
  stepper.steps = getSteps(activeIndex);

  stepper.addEventListener('stepClick', (event) => {
    stepper.steps = getSteps(event.detail.index);
  });
</script>
        `,
      },
    },
  },
  // prettier-ignore
  render: (args) => {
    const initialActiveIndex = 1;
    const interactiveSteps: IStepperItem[] = [
      { label: 'Scale' },
      { label: 'Belong' },
      { label: 'Grow' },
      { label: 'Innovate', content: '🚀' },
    ];

    const getInteractiveSteps = (activeIndex: number): IStepperItem[] =>
      interactiveSteps.map((step, index) =>
        index <= activeIndex ? { ...step, color: 'primary' } : { ...step }
      );

    const handleInteractiveStepClick = (
      event: CustomEvent<{ index: number }>,
    ) => {
      const stepper = event.target as HTMLElement & {
        steps: IStepperItem[];
      };
      stepper.steps = getInteractiveSteps(event.detail.index);
    };

    return html`
      <modus-wc-stepper
        id="interactive-stepper"
        orientation="horizontal"
        ?interactive="${args.interactive ?? false}"
        .steps="${getInteractiveSteps(initialActiveIndex)}"
        @stepClick=${handleInteractiveStepClick}
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
            customClass: string;
            interactive: boolean;
            orientation: string;
            steps: IStepperItem[];
          };
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
