import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../../types';

interface RadioArgs {
  'aria-describedby'?: string;
  'aria-label': string;
  'aria-labelledby'?: string;
  'custom-class'?: string;
  disabled?: boolean;
  'input-dir'?: 'ltr' | 'rtl' | 'auto';
  'input-id'?: string;
  'input-tab-index'?: number;
  name?: string;
  required?: boolean;
  size?: ModusSize;
  value: boolean;
}

const meta: Meta<RadioArgs> = {
  title: 'Components/Forms/Radio',
  component: 'modus-wc-radio',
  args: {
    'aria-label': 'Radio',
    'custom-class': '',
    disabled: false,
    name: '',
    required: false,
    size: 'md',
    value: true,
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
      options: ['xs', 'sm', 'md', 'lg'],
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

type Story = StoryObj<RadioArgs>;

export const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-radio
        aria-describedby=${ifDefined(args['aria-describedby'])}
        aria-label=${args['aria-label']}
        aria-labelledby=${ifDefined(args['aria-labelledby'])}
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        input-dir=${ifDefined(args['input-dir'])}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        name=${ifDefined(args.name)}
        ?required=${args.required}
        size=${ifDefined(args.size)}
        .value=${args.value}
      ></modus-wc-radio>
    `;
  },
};

// prettier-ignore
export const RadioWithLabel: Story = {
  render: () => {
    return html`
<style>
  .form-control {
    display: flex;
  }
  modus-wc-radio {
    padding-inline-end: 8px;
  }
</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-radio
      aria-label="Example radio 1"
      input-id="radio-input-1"
      name="example-radio-group"
      value="true"
    ></modus-wc-radio>
    <modus-wc-input-label
      for-id="radio-input-1"
      label-text="Radio Item One"
    ></modus-wc-input-label>
  </div>
  <div class="form-control">
    <modus-wc-radio
      aria-label="Example radio 2"
      input-id="radio-input-2"
      name="example-radio-group"
    ></modus-wc-radio>
    <modus-wc-input-label
      for-id="radio-input-2"
      label-text="Radio Item Two"
    ></modus-wc-input-label>
  </div>
</form>
    `;
  },
};
