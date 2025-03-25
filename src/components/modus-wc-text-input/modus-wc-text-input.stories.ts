import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { AutocompleteTypes, ModusSize } from '../types';

interface TextInputArgs {
  'auto-capitalize'?:
    | 'off'
    | 'none'
    | 'on'
    | 'sentences'
    | 'words'
    | 'characters';
  'auto-complete'?: AutocompleteTypes;
  'auto-correct'?: 'on' | 'off';
  bordered?: boolean;
  clearable?: boolean;
  'clear-aria-label'?: string;
  'custom-class'?: string;
  disabled?: boolean;
  enterkeyhint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send';
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
  'input-tab-index'?: number;
  label?: string;
  'max-length': number;
  'min-length': number;
  name?: string;
  pattern?: string;
  placeholder?: string;
  'read-only'?: boolean;
  required?: boolean;
  'include-search-icon'?: boolean;
  size?: ModusSize;
  spellcheck?: boolean;
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
    label: 'Label',
    size: 'md',
    spellcheck: false,
    type: 'text',
    value: '',
  },
  argTypes: {
    'auto-capitalize': {
      options: ['off', 'none', 'on', 'sentences', 'words', 'characters'],
    },
    'auto-complete': {
      control: { type: 'text' },
    },
    'auto-correct': {
      options: ['on', 'off'],
    },
    enterkeyhint: {
      options: ['enter', 'done', 'go', 'next', 'previous', 'search', 'send'],
    },
    'input-mode': {
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
      options: ['sm', 'md', 'lg'],
    },
    spellcheck: {
      description:
        'Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.',
      table: {
        category: 'attributes',
        defaultValue: { summary: 'false' },
      },
    },
    type: {
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
      auto-correct=${ifDefined(args['auto-correct'])}
      ?bordered=${args.bordered}
      clearable=${ifDefined(args.clearable)}
      clear-aria-label=${ifDefined(args['clear-aria-label'])}
      custom-class=${ifDefined(args['custom-class'])}
      ?disabled=${args.disabled}
      enterkeyhint=${ifDefined(args.enterkeyhint)}
      input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
      input-id=${ifDefined(args['input-id'])}
      input-mode=${args['input-mode']}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      label=${ifDefined(args.label)}
      max-length=${ifDefined(args['max-length'])}
      min-length=${ifDefined(args['min-length'])}
      name=${ifDefined(args.name)}
      pattern=${ifDefined(args.pattern)}
      placeholder=${ifDefined(args.placeholder)}
      ?read-only=${args['read-only']}
      ?required=${args.required}
      include-search-icon=${ifDefined(args['include-search-icon'])}
      size=${ifDefined(args.size)}
      spellcheck=${ifDefined(args.spellcheck)}
      type=${ifDefined(args.type)}
      .value=${args.value}
    ></modus-wc-text-input>
  `,
};
