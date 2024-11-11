import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface TextInputArgs {
  'aria-describedby'?: string;
  'aria-label': string;
  'auto-capitalize'?:
    | 'off'
    | 'none'
    | 'on'
    | 'sentences'
    | 'words'
    | 'characters';
  'auto-complete'?: 'on' | 'off';
  'auto-focus'?: boolean;
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'input-aria-invalid'?: 'grammar' | 'spelling' | 'true' | 'false';
  'input-dir'?: '' | 'ltr' | 'rtl' | 'auto';
  'input-id'?: string;
  'input-mode':
    | 'decimal'
    | 'email'
    | 'none'
    | 'numeric'
    | 'search'
    | 'tel'
    | 'text'
    | 'url';
  'input-spellcheck'?: boolean;
  'input-tab-index'?: number;
  'max-length': number;
  'min-length': number;
  name?: string;
  pattern?: string;
  placeholder?: string;
  'read-only'?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  type?: 'email' | 'password' | 'search' | 'tel' | 'text' | 'url';
  value: string;
}

const meta: Meta<TextInputArgs> = {
  title: 'Components/Atoms/Text Input',
  component: 'modus-wc-text-input',
  args: {
    'aria-label': 'Enter your name',
    bordered: true,
    disabled: false,
    'input-mode': 'text',
    'input-spellcheck': false,
    name: '',
    placeholder: 'Type your name here',
    size: 'md',
    type: 'text',
    value: '',
  },
  argTypes: {
    'auto-capitalize': {
      control: { type: 'inline-radio' },
      options: ['off', 'none', 'on', 'sentences', 'words', 'characters'],
    },
    'auto-complete': {
      control: { type: 'inline-radio' },
      options: ['on', 'off'],
    },
    'input-aria-invalid': {
      control: { type: 'inline-radio' },
      options: ['grammar', 'spelling', 'true', 'false'],
    },
    'input-dir': {
      control: { type: 'inline-radio' },
      options: ['ltr', 'rtl', 'auto'],
    },
    'input-mode': {
      control: { type: 'inline-radio' },
      options: [
        'decimal',
        'email',
        'none',
        'numeric',
        'search',
        'tel',
        'text',
        'url',
      ],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'inline-radio' },
      options: ['email', 'password', 'search', 'tel', 'text', 'url'],
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

type Story = StoryObj<TextInputArgs>;

const Template: Story = {
  render: (args) => html`
    <modus-wc-text-input
      aria-describedby=${ifDefined(args['aria-describedby'])}
      aria-label=${args['aria-label']}
      auto-capitalize=${ifDefined(args['auto-capitalize'])}
      auto-complete=${ifDefined(args['auto-complete'])}
      ?auto-focus=${args['auto-focus']}
      ?bordered=${args.bordered}
      custom-class=${args['custom-class']}
      ?disabled=${args.disabled}
      input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
      input-dir=${ifDefined(args['input-dir'])}
      input-id=${ifDefined(args['input-id'])}
      input-mode=${args['input-mode']}
      ?input-spellcheck=${args['input-spellcheck']}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      max-length=${ifDefined(args['max-length'])}
      min-length=${ifDefined(args['min-length'])}
      name=${args.name}
      pattern=${ifDefined(args.pattern)}
      placeholder=${args.placeholder}
      ?read-only=${args['read-only']}
      ?required=${args.required}
      size=${args.size}
      type=${args.type}
      .value=${args.value}
    ></modus-wc-text-input>
  `,
};

export const Default: Story = { ...Template };
