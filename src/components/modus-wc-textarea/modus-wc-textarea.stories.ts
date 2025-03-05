import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../types';

interface TextAreaArgs {
  'auto-correct': 'on' | 'off';
  bordered?: boolean;
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
  'input-aria-invalid'?: 'grammar' | 'spelling' | 'true' | 'false';
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  'max-length'?: number;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  size?: DaisySize;
  spellcheck?: boolean;
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
    spellcheck: false,
    value: '',
  },
  argTypes: {
    'auto-correct': {
      options: ['on', 'off'],
    },
    enterkeyhint: {
      options: ['enter', 'done', 'go', 'next', 'previous', 'search', 'send'],
    },
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
    spellcheck: {
      description:
        'Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.',
      table: {
        category: 'attributes',
        defaultValue: { summary: 'false' },
      },
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
        auto-correct=${ifDefined(args['auto-correct'])}
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        enterkeyhint=${ifDefined(args.enterkeyhint)}
        ?disabled=${args.disabled}
        input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        label=${ifDefined(args.label)}
        max-length=${ifDefined(args['max-length'])}
        name=${ifDefined(args.name)}
        placeholder=${ifDefined(args.placeholder)}
        ?readonly=${args.readonly}
        ?required=${args.required}
        rows=${ifDefined(args.rows)}
        size=${ifDefined(args.size)}
        spellcheck=${ifDefined(args.spellcheck)}
        .value=${args.value}
      ></modus-wc-textarea>
    `;
  },
};
