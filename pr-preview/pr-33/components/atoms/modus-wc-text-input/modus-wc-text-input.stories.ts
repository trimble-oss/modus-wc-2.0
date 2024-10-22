import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Text Input',
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
    readonly: { control: 'boolean', table: { sort: 'alpha' } },
    required: { control: 'boolean', table: { sort: 'alpha' } },
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

type Story = StoryObj;

const Template: Story = {
  render: (args) => html`
    <div>
      <h1>Text Input</h1>
      <modus-wc-text-input
        aria-describedby=${ifDefined(args.ariaDescribedby)}
        aria-invalid=${ifDefined(args.ariaInvalid)}
        aria-label=${ifDefined(args.ariaLabel)}
        auto-capitalize=${ifDefined(args.autoCapitalize)}
        auto-complete=${ifDefined(args.autoComplete)}
        ?auto-focus=${args.autoFocus}
        custom-class=${ifDefined(args.customClass)}
        dir=${ifDefined(args.dir)}
        ?disabled=${args.disabled}
        id=${ifDefined(args.id)}
        input-mode=${ifDefined(args.inputMode)}
        max-length=${ifDefined(args.maxLength)}
        min-length=${ifDefined(args.minLength)}
        name=${ifDefined(args.name)}
        pattern=${ifDefined(args.pattern)}
        placeholder=${ifDefined(args.placeholder)}
        ?readonly=${args.readonly}
        ?required=${args.required}
        ?spellcheck=${args.spellcheck}
        tab-index=${ifDefined(args.tabIndex)}
        type=${ifDefined(args.type)}
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
    placeholder: 'Type your name here',
  },
};

export const Default: Story = { ...Template };
