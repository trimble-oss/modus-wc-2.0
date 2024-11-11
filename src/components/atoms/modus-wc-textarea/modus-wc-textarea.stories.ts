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
  'max-length'?: number;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  size?: 'sm' | 'md' | 'lg';
  'textarea-aria-invalid'?: 'grammar' | 'spelling' | 'true' | 'false';
  'textarea-dir'?: 'ltr' | 'rtl' | 'auto';
  'textarea-id'?: string;
  'textarea-spellcheck'?: boolean;
  'textarea-tab-index'?: number;
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
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    'textarea-aria-invalid': {
      control: {
        type: 'inline-radio',
      },
      options: ['grammar', 'spelling', 'true', 'false'],
    },
    'textarea-dir': {
      control: {
        type: 'inline-radio',
      },
      options: ['ltr', 'rtl', 'auto'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['textareaBlur', 'textareaChange', 'textareaFocus'],
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
        max-length=${ifDefined(args['max-length'])}
        name=${ifDefined(args.name)}
        placeholder=${ifDefined(args.placeholder)}
        ?readonly=${args.readonly}
        ?required=${args.required}
        rows=${ifDefined(args.rows)}
        size=${ifDefined(args.size)}
        textarea-aria-invalid=${ifDefined(args['textarea-aria-invalid'])}
        textarea-dir=${ifDefined(args['textarea-dir'])}
        textarea-id=${ifDefined(args['textarea-id'])}
        ?textarea-spellcheck=${ifDefined(args['textarea-spellcheck'])}
        textarea-tab-index=${ifDefined(args['textarea-tab-index'])}
        .value=${args.value}
      ></modus-wc-textarea>
    `;
  },
};

export const Default: Story = { ...Template };
