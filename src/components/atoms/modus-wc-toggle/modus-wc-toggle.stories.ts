import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../../types';

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
  size?: DaisySize;
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

// prettier-ignore
export const ToggleWithLabel: Story = {
  render: () => {
    return html`
<style>
  .form-control {
    display: flex;
  }
  modus-wc-toggle {
    padding-inline-end: 8px;
  }
  modus-wc-input-label {
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 400;
  }
  [data-theme='modus-classic-light'] .modus-wc-input-label{
      color: #464B52;
  }
  [data-theme='modus-classic-dark'] .modus-wc-input-label{
      color: #B7B9C3;
  }

</style>
<form action="" method="get">
  <div class="form-control">
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
    `;
  },
};
