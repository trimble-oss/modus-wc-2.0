import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';

interface TextInputArgs {
  ariaDescribedby: string;
  ariaInvalid: boolean;
  ariaLabel: string;
  autoCapitalize: string;
  autoComplete: string;
  autoFocus: boolean;
  bordered: boolean;
  customClass: string;
  dir: string;
  disabled: boolean;
  id: string;
  inputMode: string;
  maxLength: number;
  minLength: number;
  name: string;
  pattern: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  size: string;
  spellcheck: boolean;
  tabIndex: number;
  type: string;
  value: string;
}

const meta: Meta<TextInputArgs> = {
  title: 'Components/Atoms/Text Input',
  component: 'modus-wc-text-input',
  argTypes: {
    ariaDescribedby: { control: 'text', table: { sort: 'alpha' } },
    ariaInvalid: { control: 'boolean', table: { sort: 'alpha' } },
    ariaLabel: { control: 'text', table: { sort: 'alpha' } },
    autoCapitalize: {
      control: { type: 'select' },
      options: ['off', 'none', 'on', 'sentences', 'words', 'characters'],
      table: { sort: 'alpha' },
    },
    autoComplete: {
      control: { type: 'select' },
      options: ['on', 'off'],
      table: { sort: 'alpha' },
    },
    autoFocus: { control: 'boolean', table: { sort: 'alpha' } },
    bordered: { control: 'boolean', table: { sort: 'alpha' } },
    customClass: { control: 'text', table: { sort: 'alpha' } },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl', 'auto'],
      table: { sort: 'alpha' },
    },
    disabled: { control: 'boolean', table: { sort: 'alpha' } },
    id: { control: 'text', table: { sort: 'alpha' } },
    inputMode: {
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
      table: { sort: 'alpha' },
    },
    maxLength: { control: 'number', table: { sort: 'alpha' } },
    minLength: { control: 'number', table: { sort: 'alpha' } },
    name: { control: 'text', table: { sort: 'alpha' } },
    pattern: { control: 'text', table: { sort: 'alpha' } },
    placeholder: { control: 'text', table: { sort: 'alpha' } },
    readOnly: { control: 'boolean', table: { sort: 'alpha' } },
    required: { control: 'boolean', table: { sort: 'alpha' } },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    spellcheck: { control: 'boolean', table: { sort: 'alpha' } },
    tabIndex: { control: 'number', table: { sort: 'alpha' } },
    type: {
      control: { type: 'select' },
      options: ['email', 'password', 'search', 'tel', 'text', 'url'],
      table: { sort: 'alpha' },
    },
    value: { control: 'text', table: { sort: 'alpha' } },
  },
  parameters: {
    controls: {
      sort: 'alpha',
    },
  },
};

export default meta;

type Story = StoryObj<TextInputArgs>;

const Template: Story = {
  render: (args) => html`
    <div>
      <h1>Text Input</h1>
      <modus-wc-text-input
        aria-describedby=${args.ariaDescribedby}
        ?aria-invalid=${args.ariaInvalid}
        aria-label=${args.ariaLabel}
        auto-capitalize=${args.autoCapitalize}
        auto-complete=${args.autoComplete}
        ?auto-focus=${args.autoFocus}
        ?bordered=${args.bordered}
        custom-class=${args.customClass}
        dir=${args.dir}
        ?disabled=${args.disabled}
        id=${args.id}
        input-mode=${args.inputMode}
        max-length=${args.maxLength}
        min-length=${args.minLength}
        name=${args.name}
        pattern=${args.pattern}
        placeholder=${args.placeholder}
        ?read-only=${args.readOnly}
        ?required=${args.required}
        size=${args.size}
        ?spellcheck=${args.spellcheck}
        tab-index=${args.tabIndex}
        type=${args.type}
        .value=${args.value}
        @input=${(e: Event) => {
          const target = e.target as HTMLInputElement;
          args.value = target.value;
        }}
        @change=${(e: Event) => {
          const target = e.target as HTMLInputElement;
          args.value = target.value;
        }}
        @blur=${(e: FocusEvent) => console.log('Blur event:', e)}
        @focus=${(e: FocusEvent) => console.log('Focus event:', e)}
      ></modus-wc-text-input>
      <stencil-docs component-name="modus-wc-text-input"></stencil-docs>
    </div>
  `,
  args: {
    ariaLabel: 'Enter your name',
    ariaInvalid: false,
    bordered: true,
    customClass: '',
    disabled: false,
    name: '',
    placeholder: 'Type your name here',
    readOnly: false,
    required: false,
    size: 'md',
    value: '',
  },
};

export const Default: Story = { ...Template };
