import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ToggleArgs {
  'aria-describedby'?: string;
  'aria-label': string;
  'aria-labelledby'?: string;
  'custom-class'?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  'input-dir'?: 'ltr' | 'rtl' | 'auto';
  'input-id'?: string;
  'input-tab-index'?: number;
  name?: string;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  value: boolean;
}

const meta: Meta<ToggleArgs> = {
  title: 'Components/Forms/Toggle',
  component: 'modus-wc-toggle',
  args: {
    'aria-label': 'Toggle',
    'custom-class': '',
    disabled: false,
    indeterminate: false,
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

type Story = StoryObj<ToggleArgs>;

export const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-toggle
        aria-describedby=${ifDefined(args['aria-describedby'])}
        aria-label=${args['aria-label']}
        aria-labelledby=${ifDefined(args['aria-labelledby'])}
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        .indeterminate=${args.indeterminate}
        input-dir=${ifDefined(args['input-dir'])}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        name=${ifDefined(args.name)}
        ?required=${args.required}
        size=${ifDefined(args.size)}
        .value=${args.value}
      ></modus-wc-toggle>
    `;
  },
};

export const ToggleWithLabel: Story = {
  render: () => {
    return html`
      <form action="" class="form-example" method="get">
        <div class="form-example">
          <modus-wc-toggle
            aria-label="Example toggle"
            input-id="toggle-input"
            name="example-toggle"
          ></modus-wc-toggle>
          <modus-wc-input-label
            for-id="toggle-input"
            label-text="Example toggle"
          ></modus-wc-input-label>
        </div>
      </form>
      <style>
        .form-example {
          display: flex;
        }
        modus-wc-toggle {
          padding-inline-end: 8px;
        }
      </style>
    `;
  },
};
