import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../../types';

interface TextAreaArgs {
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'input-aria-invalid'?: 'grammar' | 'spelling' | 'true' | 'false';
  'input-id'?: string;
  'input-spellcheck'?: boolean;
  'input-tab-index'?: number;
  label?: string;
  'max-length'?: number;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  size?: DaisySize;
  value: string;
}

const meta: Meta<TextAreaArgs> = {
  title: 'Components/Forms/Textarea',
  component: 'modus-wc-textarea',
  args: {
    bordered: true,
    'custom-class': '',
    disabled: false,
    label: 'Label',
    readonly: false,
    required: false,
    size: 'md',
    value: '',
  },
  argTypes: {
    'input-aria-invalid': {
      control: {
        type: 'select',
      },
      options: ['grammar', 'spelling', 'true', 'false'],
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

type Story = StoryObj<TextAreaArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-textarea
        aria-label="Textarea input"
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
        input-id=${ifDefined(args['input-id'])}
        ?input-spellcheck=${args['input-spellcheck']}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        label=${ifDefined(args.label)}
        max-length=${ifDefined(args['max-length'])}
        name=${ifDefined(args.name)}
        placeholder=${ifDefined(args.placeholder)}
        ?readonly=${args.readonly}
        ?required=${args.required}
        rows=${ifDefined(args.rows)}
        size=${ifDefined(args.size)}
        .value=${args.value}
      ></modus-wc-textarea>
    `;
  },
};
