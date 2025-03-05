import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../types';

interface CheckboxArgs {
  'custom-class'?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  name?: string;
  required?: boolean;
  size?: DaisySize;
  value: boolean;
}

const meta: Meta<CheckboxArgs> = {
  title: 'Components/Forms/Checkbox',
  component: 'modus-wc-checkbox',
  args: {
    'custom-class': '',
    disabled: false,
    indeterminate: false,
    label: 'Label',
    name: '',
    required: false,
    size: 'md',
    value: true,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
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

type Story = StoryObj<CheckboxArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-checkbox
        aria-label="Checkbox"
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        .indeterminate=${args.indeterminate}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        label=${ifDefined(args.label)}
        name=${ifDefined(args.name)}
        ?required=${args.required}
        size=${ifDefined(args.size)}
        .value=${args.value}
      ></modus-wc-checkbox>
    `;
  },
};
