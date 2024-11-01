import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

const meta: Meta = {
  title: 'Components/Atoms/Textarea',
  component: 'modus-wc-textarea',
  tags: ['autodocs'],
  argTypes: {
    ariaDescribedby: { control: 'text', table: { sort: 'alpha' } },
    ariaInvalid: { control: 'boolean', table: { sort: 'alpha' } },
    ariaLabel: { control: 'text', table: { sort: 'alpha' } },
    customClass: { control: 'text', table: { sort: 'alpha' } },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl', 'auto'],
      table: { sort: 'alpha' },
    },
    disabled: { control: 'boolean', table: { sort: 'alpha' } },
    id: { control: 'text', table: { sort: 'alpha' } },
    maxLength: { control: 'number', table: { sort: 'alpha' } },
    name: { control: 'text', table: { sort: 'alpha' } },
    placeholder: { control: 'text', table: { sort: 'alpha' } },
    readonly: { control: 'boolean', table: { sort: 'alpha' } },
    required: { control: 'boolean', table: { sort: 'alpha' } },
    rows: { control: 'number', table: { sort: 'alpha' } },
    tabIndex: { control: 'number', table: { sort: 'alpha' } },
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
  render: (args) => {
    return html`
      <modus-wc-textarea
        aria-describedby=${ifDefined(args.ariaDescribedby)}
        aria-invalid=${ifDefined(args.ariaInvalid)}
        aria-label=${ifDefined(args.ariaLabel)}
        custom-class=${ifDefined(args.customClass)}
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
        .value=${args.value}
        @input=${(e: Event) => {
          const target = e.target as HTMLTextAreaElement;
          args.value = target.value;
        }}
        @change=${(e: Event) => {
          const target = e.target as HTMLTextAreaElement;
          args.value = target.value;
        }}
      ></modus-wc-textarea>
    `;
  },
  args: {
    ariaLabel: 'Enter your comments',
    placeholder: 'Type your comments here',
  },
};

export const Default: Story = { ...Template };
