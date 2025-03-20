import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IModusWcSelectOption } from './modus-wc-select';
import { ModusSize } from '../types';

const options: IModusWcSelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

interface SelectArgs {
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'input-aria-invalid'?: 'true' | 'false';
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  name?: string;
  options: IModusWcSelectOption[];
  required?: boolean;
  size?: ModusSize;
  value: string;
}

const meta: Meta<SelectArgs> = {
  title: 'Components/Forms/Select',
  component: 'modus-wc-select',
  args: {
    bordered: true,
    disabled: false,
    label: 'Label',
    options,
    size: 'md',
    value: '',
  },
  argTypes: {
    'input-aria-invalid': {
      control: { type: 'select' },
      options: ['true', 'false'],
    },
    options: {
      description: 'Array of option objects for the select dropdown',
      table: {
        type: {
          detail: `
            Interface: IModusWcSelectOption
            Properties:
            - disabled (boolean, optional): Whether the option is disabled and cannot be selected
            - label (string): Display text for the option
            - value (string): The value of the option
          `,
        },
      },
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

type Story = StoryObj<SelectArgs>;

export const Default: Story = {
  render: (args) => html`
    <modus-wc-select
      aria-label="Select input"
      ?bordered=${args.bordered}
      custom-class=${ifDefined(args['custom-class'])}
      ?disabled=${args.disabled}
      input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
      input-id=${ifDefined(args['input-id'])}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      label=${ifDefined(args.label)}
      name=${ifDefined(args.name)}
      .options=${args.options}
      ?required=${args.required}
      size=${ifDefined(args.size)}
      .value=${args.value}
    ></modus-wc-select>
  `,
};

export const SelectWithLabel: Story = {
  render: () => {
    // prettier-ignore
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
      for-id="select-input"
      label-text="Example select"
    ></modus-wc-input-label>
    <modus-wc-select
      aria-label="Example select"
      input-id="select-input"
      name="example-select-input"
      .options=${options}
    ></modus-wc-select>
  </div>
</form>
    `;
  },
};
