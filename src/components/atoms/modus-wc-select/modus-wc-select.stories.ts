import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ISelectOption } from './modus-wc-select';
import { DaisySize } from '../../types';

const options: ISelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

interface SelectArgs {
  'a11y-describedby'?: string;
  'a11y-labelledby'?: string;
  'a11y-label': string;
  'auto-focus'?: boolean;
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'input-aria-invalid'?: 'true' | 'false';
  'input-dir'?: '' | 'ltr' | 'rtl' | 'auto';
  'input-id'?: string;
  'input-tab-index'?: number;
  name?: string;
  options: ISelectOption[];
  required?: boolean;
  size?: DaisySize;
  value: string;
}

const meta: Meta<SelectArgs> = {
  title: 'Components/Forms/Select',
  component: 'modus-wc-select',
  args: {
    'a11y-label': 'Select a range',
    bordered: true,
    disabled: false,
    options,
    size: 'md',
    value: '',
  },
  argTypes: {
    'input-aria-invalid': {
      control: { type: 'inline-radio' },
      options: ['true', 'false'],
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

type Story = StoryObj<SelectArgs>;

export const Template: Story = {
  render: (args) => html`
    <modus-wc-select
      a11y-describedby=${ifDefined(args['a11y-describedby'])}
      a11y-label=${args['a11y-label']}
      a11y-labelledby=${args['a11y-labelledby']}
      ?auto-focus=${args['auto-focus']}
      ?bordered=${args.bordered}
      custom-class=${ifDefined(args['custom-class'])}
      ?disabled=${args.disabled}
      input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
      input-dir=${ifDefined(args['input-dir'])}
      input-id=${ifDefined(args['input-id'])}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      name=${ifDefined(args.name)}
      .options=${args.options}
      ?required=${args.required}
      size=${ifDefined(args.size)}
      .value=${args.value}
    ></modus-wc-select>
  `,
};

// prettier-ignore
export const SelectWithLabel: Story = {
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
      for-id="select-input"
      label-text="Example select"
    ></modus-wc-input-label>
    <modus-wc-select
      a11y-label="Example select"
      input-id="select-input"
      name="example-select-input"
      .options=${options}
    ></modus-wc-select>
  </div>
</form>
    `;
  },
};
