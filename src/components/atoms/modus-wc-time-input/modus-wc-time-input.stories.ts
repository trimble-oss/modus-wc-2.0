import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { ModusSize } from '../../types';

// const timeOptions = ['08:00', '12:00', '17:00'];

interface TimeInputArgs {
  'aria-describedby'?: string;
  'aria-label': string;
  'auto-complete'?: 'on' | 'off';
  bordered?: boolean;
  'custom-class'?: string;
  'datalist-id'?: string;
  'datalist-options'?: string[];
  disabled?: boolean;
  'input-dir'?: '' | 'ltr' | 'rtl' | 'auto';
  'input-id'?: string;
  'input-tab-index'?: number;
  max?: string;
  min?: string;
  name?: string;
  'read-only'?: boolean;
  required?: boolean;
  'show-seconds'?: boolean;
  size?: ModusSize;
  step?: number;
  value: string;
}

const meta: Meta<TimeInputArgs> = {
  title: 'Components/Forms/Time Input',
  component: 'modus-wc-time-input',
  args: {
    'aria-label': 'Time input',
    disabled: false,
    size: 'md',
  },
  argTypes: {
    'auto-complete': {
      control: { type: 'inline-radio' },
      options: ['on', 'off'],
    },
    'input-dir': {
      control: { type: 'inline-radio' },
      options: ['ltr', 'rtl', 'auto'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
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

type Story = StoryObj<TimeInputArgs>;

export const Template: Story = {
  render: (args) => html`
    <modus-wc-time-input
      aria-describedby=${ifDefined(args['aria-describedby'])}
      aria-label=${args['aria-label']}
      auto-complete=${ifDefined(args['auto-complete'])}
      bordered=${ifDefined(args.bordered)}
      custom-class=${ifDefined(args['custom-class'])}
      datalist-id=${ifDefined(args['datalist-id'])}
      ?disabled=${args.disabled}
      input-dir=${ifDefined(args['input-dir'])}
      input-id=${ifDefined(args['input-id'])}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      max=${ifDefined(args.max)}
      min=${ifDefined(args.min)}
      name=${ifDefined(args.name)}
      ?read-only=${args['read-only']}
      ?required=${args.required}
      show-seconds=${ifDefined(args['show-seconds'])}
      size=${ifDefined(args.size)}
      step=${ifDefined(args.step)}
      .datalistOptions=${args['datalist-options']}
      .value=${args.value}
    ></modus-wc-time-input>
  `,
};

// prettier-ignore
export const TimeInputWithLabel: Story = {
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
    for-id="time-input"
    label-text="Example time input"
  ></modus-wc-input-label>
  <modus-wc-time-input
    aria-label="Example time input"
    input-id="time-input"
    name="example-time-input"
  ></modus-wc-time-input>
</div>
</form>
    `;
  },
};

export const TimeInputWithSeconds: Story = {
  render: () => {
    return html`
      <modus-wc-time-input
        aria-label="Example time input"
        show-seconds="true"
      ></modus-wc-time-input>
    `;
  },
};

// prettier-ignore
export const TimeInputWithDatalist: Story = {
  render: () => {
    return html`
<modus-wc-time-input
  aria-label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    `;
  },
};

// prettier-ignore
export const TimeInputWithDatalistOptions: Story = {
  render: () => {
    return html`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Example of programmatically adding 'datalistOptions'
    const preferredTimes = ['09:30', '12:00', '17:30'];
    document.querySelector('#time-input-with-options').datalistOptions = preferredTimes;
  });
</script>
<modus-wc-time-input
  aria-label="Example time input"
  id="time-input-with-options"
></modus-wc-time-input>
    `;
  },
};
