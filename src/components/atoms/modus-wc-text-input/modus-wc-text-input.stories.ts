import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface TextInputArgs {
  'aria-describedby': string;
  'aria-label': string;
  'auto-capitalize':
    | 'off'
    | 'none'
    | 'on'
    | 'sentences'
    | 'words'
    | 'characters';
  'auto-complete': 'on' | 'off';
  autoFocus: boolean;
  bordered: boolean;
  'custom-class': string;
  disabled: boolean;
  'input-aria-invalid': 'grammar' | 'spelling' | 'true' | 'false';
  'input-dir': '' | 'ltr' | 'rtl' | 'auto';
  'input-id': string;
  'input-mode':
    | 'decimal'
    | 'email'
    | 'none'
    | 'numeric'
    | 'search'
    | 'tel'
    | 'text'
    | 'url';
  'input-spellcheck': boolean;
  'input-tab-index': number;
  'max-length': number;
  'min-length': number;
  name: string;
  pattern: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  size: 'sm' | 'md' | 'lg';
  type: 'email' | 'password' | 'search' | 'tel' | 'text' | 'url';
  value: string;
}

const meta: Meta<TextInputArgs> = {
  title: 'Components/Atoms/Text Input',
  component: 'modus-wc-text-input',
  argTypes: {
    'auto-capitalize': {
      control: { type: 'select' },
      options: ['off', 'none', 'on', 'sentences', 'words', 'characters'],
    },
    'auto-complete': {
      control: { type: 'select' },
      options: ['on', 'off'],
    },
    'input-dir': {
      control: { type: 'select' },
      options: ['ltr', 'rtl', 'auto'],
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

const Template: Story = {
  render: (args) => html`
    <modus-wc-text-input
      aria-describedby=${ifDefined(args['aria-describedby'])}
      aria-label=${args['aria-label']}
      ?auto-capitalize=${args['auto-capitalize']}
      ?auto-complete=${args['auto-complete']}
      ?auto-focus=${args.autoFocus}
      ?bordered=${args.bordered}
      ?custom-class=${args['custom-class']}
      ?input-dir=${args['input-dir']}
      ?disabled=${args.disabled}
      ?input-aria-invalid=${args['input-aria-invalid']}
      ?input-id=${args['input-id']}
      input-mode=${args['input-mode']}
      ?max-length=${args['max-length']}
      ?min-length=${args['min-length']}
      name=${args.name}
      ?pattern=${args.pattern}
      placeholder=${args.placeholder}
      ?read-only=${args.readOnly}
      ?required=${args.required}
      size=${args.size}
      ?input-spellcheck=${args['input-spellcheck']}
      ?tab-index=${args['input-tab-index']}
      type=${args.type}
      .value=${args.value}
      @inputBlur=${(e: FocusEvent) => {
        const target = e.target as HTMLInputElement;
        args.value = target.value;
      }}
      @inputChange=${(e: Event) => {
        const target = e.target as HTMLInputElement;
        args.value = target.value;
      }}
      @inputFocus=${(e: FocusEvent) => {
        const target = e.target as HTMLInputElement;
        args.value = target.value;
      }}
    ></modus-wc-text-input>
  `,
  args: {
    'aria-label': 'Enter your name',
    'input-mode': 'text',
    name: '',
    placeholder: 'Type your name here',
    size: 'md',
    type: 'text',
    value: '',
  },
};

export const Default: Story = { ...Template };
