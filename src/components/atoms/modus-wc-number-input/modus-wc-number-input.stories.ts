import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface NumberInputArgs {
  'aria-describedby'?: string;
  'aria-label': string;
  'auto-complete'?: 'on' | 'off';
  'auto-focus'?: boolean;
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'input-aria-invalid'?: 'true' | 'false';
  'input-dir'?: '' | 'ltr' | 'rtl' | 'auto';
  'input-id'?: string;
  'input-mode': 'decimal' | 'none' | 'numeric';
  'input-tab-index'?: number;
  max?: number;
  min?: number;
  name?: string;
  placeholder?: string;
  'read-only'?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  step?: number;
  type?: 'number' | 'range';
  value: string;
}

const meta: Meta<NumberInputArgs> = {
  title: 'Components/Forms/Number Input',
  component: 'modus-wc-number-input',
  args: {
    'aria-label': 'Enter your age',
    bordered: true,
    disabled: false,
    'input-mode': 'numeric',
    placeholder: 'Type your age here',
    size: 'md',
    type: 'number',
    value: '',
  },
  argTypes: {
    'auto-complete': {
      control: { type: 'inline-radio' },
      options: ['on', 'off'],
    },
    'input-aria-invalid': {
      control: { type: 'inline-radio' },
      options: ['true', 'false'],
    },
    'input-dir': {
      control: { type: 'inline-radio' },
      options: ['ltr', 'rtl', 'auto'],
    },
    'input-mode': {
      control: { type: 'inline-radio' },
      options: ['decimal', 'none', 'numeric'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'inline-radio' },
      options: ['number', 'range'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['inputBlur', 'inputChange', 'inputFocus'],
    },
  },
};

export default meta;

type Story = StoryObj<NumberInputArgs>;

export const Template: Story = {
  render: (args) => html`
    <modus-wc-number-input
      aria-describedby=${ifDefined(args['aria-describedby'])}
      aria-label=${args['aria-label']}
      auto-complete=${ifDefined(args['auto-complete'])}
      ?auto-focus=${args['auto-focus']}
      ?bordered=${args.bordered}
      custom-class=${ifDefined(args['custom-class'])}
      ?disabled=${args.disabled}
      input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
      input-dir=${ifDefined(args['input-dir'])}
      input-id=${ifDefined(args['input-id'])}
      input-mode=${args['input-mode']}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      max=${ifDefined(args.max)}
      min=${ifDefined(args.min)}
      name=${ifDefined(args.name)}
      placeholder=${ifDefined(args.placeholder)}
      ?read-only=${args['read-only']}
      ?required=${args.required}
      size=${ifDefined(args.size)}
      step=${ifDefined(args.step)}
      type=${ifDefined(args.type)}
      .value=${args.value}
    ></modus-wc-number-input>
  `,
};

// prettier-ignore
export const NumberInputWithLabel: Story = {
  render: () => {
    return html`
<style>
  .form-control {
    display: flex;
    align-items: center;
  }
  .modus-wc-input-label {
    padding-inline-end: 8px;
  }
</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-input-label
      for-id="number-input"
      label-text="Example number input"
    ></modus-wc-input-label>
    <modus-wc-number-input
      aria-label="Example number input"
      input-id="number-input"
      name="example-number-input"
    ></modus-wc-number-input>
  </div>
</form>
    `;
  },
};
