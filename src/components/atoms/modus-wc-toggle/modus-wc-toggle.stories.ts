import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../../types';

interface ToggleArgs {
  'a11y-describedby'?: string;
  'a11y-label': string;
  'a11y-labelledby'?: string;
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
    'a11y-label': 'Toggle',
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
        a11y-describedby=${ifDefined(args['a11y-describedby'])}
        a11y-label=${args['a11y-label']}
        a11y-labelledby=${ifDefined(args['a11y-labelledby'])}
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
</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-toggle
      a11y-label="Example toggle"
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
