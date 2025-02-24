import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../../types';

interface TextInputArgs {
  'auto-capitalize'?:
    | 'off'
    | 'none'
    | 'on'
    | 'sentences'
    | 'words'
    | 'characters';
  'auto-complete'?: 'on' | 'off';
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'input-aria-invalid'?: 'grammar' | 'spelling' | 'true' | 'false';
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
  label?: string;
  'max-length': number;
  'min-length': number;
  name?: string;
  pattern?: string;
  placeholder?: string;
  'read-only'?: boolean;
  required?: boolean;
  size?: ModusSize;
  type?: 'email' | 'password' | 'search' | 'tel' | 'text' | 'url';
  value: string;
}

const meta: Meta<TextInputArgs> = {
  title: 'Components/Forms/Text Input',
  component: 'modus-wc-text-input',
  args: {
    bordered: true,
    disabled: false,
    'input-mode': 'text',
    'input-spellcheck': false,
    label: 'Label',
    size: 'md',
    type: 'text',
    value: '',
  },
  argTypes: {
    'auto-capitalize': {
      control: { type: 'select' },
      options: ['off', 'none', 'on', 'sentences', 'words', 'characters'],
    },
    'auto-complete': {
      control: { type: 'select' },
      options: ['on', 'off'],
    },
    'input-aria-invalid': {
      control: { type: 'select' },
      options: ['grammar', 'spelling', 'true', 'false'],
    },
    'input-mode': {
      control: { type: 'select' },
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
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'select' },
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

export const Default: Story = {
  render: (args) => html`
    <modus-wc-text-input
      aria-label="Text input"
      auto-capitalize=${ifDefined(args['auto-capitalize'])}
      auto-complete=${ifDefined(args['auto-complete'])}
      ?bordered=${args.bordered}
      custom-class=${ifDefined(args['custom-class'])}
      ?disabled=${args.disabled}
      input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
      input-id=${ifDefined(args['input-id'])}
      input-mode=${args['input-mode']}
      ?input-spellcheck=${args['input-spellcheck']}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      label=${ifDefined(args.label)}
      max-length=${ifDefined(args['max-length'])}
      min-length=${ifDefined(args['min-length'])}
      name=${ifDefined(args.name)}
      pattern=${ifDefined(args.pattern)}
      placeholder=${ifDefined(args.placeholder)}
      ?read-only=${args['read-only']}
      ?required=${args.required}
      size=${ifDefined(args.size)}
      type=${ifDefined(args.type)}
      .value=${args.value}
    ></modus-wc-text-input>
  `,
};
