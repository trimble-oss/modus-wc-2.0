import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../../types';

interface ToggleArgs {
  'custom-class'?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  name?: string;
  required?: boolean;
  size?: ModusSize;
  value: boolean;
}

const meta: Meta<ToggleArgs> = {
  title: 'Components/Forms/Toggle',
  component: 'modus-wc-toggle',
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

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-toggle
        aria-label="Toggle"
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
      ></modus-wc-toggle>
    `;
  },
};
