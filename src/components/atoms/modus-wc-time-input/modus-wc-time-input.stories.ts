import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Size } from '../../types';

interface TimeInputArgs {
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
    | 'time'
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
  size?: Size;
  type?: 'email' | 'password' | 'search' | 'tel' | 'time' | 'url';
  value: string;
}

const meta: Meta<TimeInputArgs> = {
  title: 'Components/Forms/Time Input',
  component: 'modus-wc-time-input',
  args: {
    'aria-label': 'Enter your name',
    bordered: true,
    disabled: false,
    'input-mode': 'time',
    'input-spellcheck': false,
    placeholder: 'Type your name here',
    size: 'md',
    type: 'time',
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
        'time',
        'url',
      ],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'inline-radio' },
      options: ['email', 'password', 'search', 'tel', 'time', 'url'],
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

type Story = StoryObj<TimeInputArgs>;

// TODO: fix attributes
export const Template: Story = {
  render: (args) => html`
    <modus-wc-time-input
      aria-describedby=${ifDefined(args['aria-describedby'])}
      aria-label=${args['aria-label']}
      auto-capitalize=${ifDefined(args['auto-capitalize'])}
      auto-complete=${ifDefined(args['auto-complete'])}
      ?auto-focus=${args['auto-focus']}
      ?bordered=${args.bordered}
      custom-class=${ifDefined(args['custom-class'])}
      ?disabled=${args.disabled}
      input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
      input-dir=${ifDefined(args['input-dir'])}
      input-id=${ifDefined(args['input-id'])}
      input-mode=${args['input-mode']}
      ?input-spellcheck=${args['input-spellcheck']}
      input-tab-index=${ifDefined(args['input-tab-index'])}
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
    ></modus-wc-time-input>
  `,
};

export const TextInputWithLabel: Story = {
  render: () => {
    return html`
      <style>
        .form-control {
          display: flex;
          align-items: center;
        }
        .modus-wc-input-label {
          padding-inline-end: 8px;
        }
      </style>
      <form action="" method="get">
        <div class="form-control">
          <modus-wc-input-label
            for-id="time-input"
            label-time="Example time input"
          ></modus-wc-input-label>
          <modus-wc-time-input
            aria-label="Example time input"
            input-id="time-input"
            name="example-time-input"
          ></modus-wc-time-input>
        </div>
      </form>
    `;
  },
};
