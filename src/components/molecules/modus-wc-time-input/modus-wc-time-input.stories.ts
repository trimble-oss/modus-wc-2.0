import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../../types';

// const timeOptions = ['08:00', '12:00', '17:00'];

interface TimeInputArgs {
  'auto-complete'?: 'on' | 'off';
  bordered?: boolean;
  'custom-class'?: string;
  'datalist-id'?: string;
  'datalist-options'?: string[];
  disabled?: boolean;
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
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
    disabled: false,
    label: 'Label',
    size: 'md',
  },
  argTypes: {
    'auto-complete': {
      control: { type: 'select' },
      options: ['on', 'off'],
    },
    size: {
      control: { type: 'select' },
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
      aria-label="Time input"
      auto-complete=${ifDefined(args['auto-complete'])}
      bordered=${ifDefined(args.bordered)}
      custom-class=${ifDefined(args['custom-class'])}
      datalist-id=${ifDefined(args['datalist-id'])}
      ?disabled=${args.disabled}
      input-id=${ifDefined(args['input-id'])}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      label=${ifDefined(args.label)}
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

export const TimeInputWithDatalist: Story = {
  render: () => {
    // prettier-ignore
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

export const TimeInputWithDatalistOptions: Story = {
  render: () => {
    // prettier-ignore
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
