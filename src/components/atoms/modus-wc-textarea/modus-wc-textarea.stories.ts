import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface TextAreaArgs {
  'aria-describedby'?: string;
  'aria-label': string;
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'full-width'?: boolean;
  'input-aria-invalid'?: 'grammar' | 'spelling' | 'true' | 'false';
  'input-dir'?: 'ltr' | 'rtl' | 'auto';
  'input-id'?: string;
  'input-spellcheck'?: boolean;
  'input-tab-index'?: number;
  'max-length'?: number;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  size?: 'sm' | 'md' | 'lg';
  value: string;
}

const meta: Meta<TextAreaArgs> = {
  title: 'Components/Atoms/Textarea',
  component: 'modus-wc-textarea',
  args: {
    'aria-label': 'Enter your comments',
    bordered: true,
    'custom-class': '',
    disabled: false,
    'full-width': true,
    name: '',
    placeholder: 'Type your comments here',
    readonly: false,
    required: false,
    size: 'md',
    value: '',
  },
  argTypes: {
    'input-aria-invalid': {
      control: {
        type: 'inline-radio',
      },
      options: ['grammar', 'spelling', 'true', 'false'],
    },
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

type Story = StoryObj<TextAreaArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-textarea
        aria-describedby=${ifDefined(args['aria-describedby'])}
        aria-label=${args['aria-label']}
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        ?full-width=${args['full-width']}
        input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
        input-dir=${ifDefined(args['input-dir'])}
        input-id=${ifDefined(args['input-id'])}
        ?input-spellcheck=${ifDefined(args['input-spellcheck'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
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

export const Default: Story = { ...Template };
