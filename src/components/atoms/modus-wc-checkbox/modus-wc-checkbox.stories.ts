import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface CheckboxArgs {
  'aria-describedby'?: string;
  'aria-label': string;
  'aria-labelledby'?: string;
  'checkbox-dir'?: 'ltr' | 'rtl' | 'auto';
  'checkbox-id'?: string;
  'checkbox-tab-index'?: number;
  'custom-class'?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  name?: string;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  value: boolean;
}

const meta: Meta<CheckboxArgs> = {
  title: 'Components/Atoms/Checkbox',
  component: 'modus-wc-checkbox',
  args: {
    'aria-label': 'Checkbox',
    'custom-class': '',
    disabled: false,
    indeterminate: false,
    name: '',
    required: false,
    size: 'md',
    value: true,
  },
  argTypes: {
    'checkbox-dir': {
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
      handles: ['checkboxBlur', 'checkboxChange', 'checkboxFocus'],
    },
  },
};

export default meta;

type Story = StoryObj<CheckboxArgs>;

export const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-checkbox
        aria-describedby=${ifDefined(args['aria-describedby'])}
        aria-label=${args['aria-label']}
        aria-labelledby=${ifDefined(args['aria-labelledby'])}
        checkbox-dir=${ifDefined(args['checkbox-dir'])}
        checkbox-id=${ifDefined(args['checkbox-id'])}
        checkbox-tab-index=${ifDefined(args['checkbox-tab-index'])}
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        .indeterminate=${args.indeterminate}
        name=${ifDefined(args.name)}
        ?required=${args.required}
        size=${args.size}
        .value=${args.value}
      ></modus-wc-checkbox>
    `;
  },
};

export const CheckboxWithLabel: Story = {
  render: () => {
    return html`
      <form action="" class="form-example" method="get">
        <div class="form-example">
          <modus-wc-checkbox
            aria-label="Example checkbox"
            checkbox-id="checkbox-input"
            name="example-checkbox"
          ></modus-wc-checkbox>
          <modus-wc-input-label
            for-id="checkbox-input"
            label-text="Example checkbox"
          ></modus-wc-input-label>
        </div>
      </form>
      <style>
        .form-example {
          display: flex;
        }
        modus-wc-checkbox {
          padding-inline-end: 8px;
        }
      </style>
    `;
  },
};

// export const Default: Story = { ...Template};
