import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../../types';

interface DateArgs {
  'aria-describedby'?: string;
  'aria-label': string;
  'aria-labelledby'?: string;
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'input-dir'?: 'ltr' | 'rtl' | 'auto';
  'input-id'?: string;
  'input-tab-index'?: number;
  max?: string;
  min?: string;
  name?: string;
  placeholder?: string;
  'read-only'?: boolean;
  required?: boolean;
  size?: ModusSize;
  value: string;
}

const meta: Meta<DateArgs> = {
  title: 'Components/Forms/Date',
  component: 'modus-wc-date',
  args: {
    'aria-label': 'Date picker',
    bordered: true,
    'custom-class': '',
    disabled: false,
    'read-only': false,
    required: false,
    size: 'md',
    value: '',
  },
  argTypes: {
    'input-dir': {
      control: {
        type: 'inline-radio',
      },
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

type Story = StoryObj<DateArgs>;

export const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-date
        aria-describedby=${ifDefined(args['aria-describedby'])}
        aria-label=${args['aria-label']}
        aria-labelledby=${ifDefined(args['aria-labelledby'])}
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        input-dir=${ifDefined(args['input-dir'])}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        max=${ifDefined(args.max)}
        min=${ifDefined(args.min)}
        name=${ifDefined(args.name)}
        placeholder=${ifDefined(args.placeholder)}
        ?read-only=${args['read-only']}
        ?required=${args.required}
        size=${ifDefined(args.size)}
        .value=${args.value}
      ></modus-wc-date>
    `;
  },
};

// prettier-ignore
export const DateWithLabel: Story = {
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
      for-id="date-input"
      label-text="Example date"
    ></modus-wc-input-label>
    <modus-wc-date
      aria-label="Example date picker"
      input-id="date-input"
      name="example-date"
    ></modus-wc-date>
  </div>
</form>
    `;
  },
};
