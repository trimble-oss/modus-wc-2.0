import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusWCMode, setModusWCMode } from '../../../utils/theme';

interface TextareaArgs {
  ariaDescribedby: string;
  ariaInvalid: boolean;
  ariaLabel: string;
  customClass: string;
  daisyClass: string;
  dir: 'ltr' | 'rtl' | 'auto';
  disabled: boolean;
  id: string;
  maxLength: number;
  mode: ModusWCMode;
  name: string;
  placeholder: string;
  readonly: boolean;
  required: boolean;
  rows: number;
  tabIndex: number;
  value: string;
}

const meta: Meta<TextareaArgs> = {
  title: 'Components/Textarea',
  component: 'modus-wc-textarea',
  argTypes: {
    ariaDescribedby: { control: 'text' },
    ariaInvalid: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    customClass: { control: 'text' },
    daisyClass: { control: 'text' },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl', 'auto'],
    },
    disabled: { control: 'boolean' },
    id: { control: 'text' },
    maxLength: { control: 'number' },
    mode: {
      control: { type: 'select' },
      options: ['default', 'dark', 'high-contrast'],
    },
    name: { control: 'text' },
    placeholder: { control: 'text' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
    rows: { control: 'number' },
    tabIndex: { control: 'number' },
    value: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<TextareaArgs>;

const Template: Story = {
  render: (args) => {
    setModusWCMode(args.mode);

    return html`
      <div>
        <h1>Textarea</h1>
        <modus-wc-textarea
          aria-describedby=${ifDefined(args.ariaDescribedby)}
          aria-invalid=${ifDefined(args.ariaInvalid)}
          aria-label=${args.ariaLabel}
          custom-class=${ifDefined(args.customClass)}
          daisy-class=${ifDefined(args.daisyClass)}
          dir=${ifDefined(args.dir)}
          ?disabled=${args.disabled}
          id=${ifDefined(args.id)}
          max-length=${ifDefined(args.maxLength)}
          name=${ifDefined(args.name)}
          placeholder=${ifDefined(args.placeholder)}
          ?readonly=${args.readonly}
          ?required=${args.required}
          rows=${ifDefined(args.rows)}
          tab-index=${ifDefined(args.tabIndex)}
          value=${ifDefined(args.value)}
          @blur=${(e: CustomEvent) => console.log('blur', e.detail)}
          @change=${(e: CustomEvent) => console.log('change', e)}
          @focus=${(e: CustomEvent) => console.log('focus', e.detail)}
        ></modus-wc-textarea>
        <stencil-docs component-name="modus-wc-textarea"></stencil-docs>
      </div>
    `;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    ariaDescribedby: 'description',
    ariaInvalid: false,
    ariaLabel: 'Enter your comments',
    customClass: '',
    daisyClass: '',
    dir: 'ltr',
    disabled: false,
    id: 'textarea-1',
    maxLength: undefined,
    mode: 'default',
    name: 'comments',
    placeholder: 'Type your comments here',
    readonly: false,
    required: false,
    rows: 4,
    tabIndex: 0,
    value: '',
  },
};
