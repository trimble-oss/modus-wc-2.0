import { Meta, StoryObj } from '@storybook/web-components';
// import { action } from '@storybook/addon-actions';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

const meta: Meta = {
  title: 'Components/Atoms/Textarea',
  component: 'modus-wc-textarea',
  argTypes: {
    // ariaDescribedby: { control: 'text', table: { category: 'yeet' } },
    //   customClass: { control: 'text', table: { sort: 'alpha' } },
      // disabled: { control: 'boolean', table: { sort: 'alpha' } },
    //   maxLength: { control: 'number', table: { sort: 'alpha' } },
    //   name: { control: 'text', table: { sort: 'alpha' } },
    //   placeholder: { control: 'text', table: { sort: 'alpha' } },
    //   readonly: { control: 'boolean', table: { sort: 'alpha' } },
    //   required: { control: 'boolean', table: { sort: 'alpha' } },
    //   rows: { control: 'number', table: { sort: 'alpha' } },
      // textareaAriaInvalid: {
      //   control: { type: 'select' },
      //   options: ['grammar', 'spelling', 'true', 'false'],
      //   table: { sort: 'alpha' },
      // },
    maxLength: { control: 'number' },
    textareaDir: {
      type: {
        name: 'enum',
        value: ['ltr', 'rtl', 'auto'],
      },
    },
    textareaAriaInvalid: {
      type: {
        name: 'enum',
        value: ['grammar', 'spelling', 'true', 'false'],
      },
    },
    handleBlur: { table: { disable: true } },
    handleChange: { table: { disable: true } },
    handleFocus: { table: { disable: true } },
    //   textareaId: { control: 'text', table: { sort: 'alpha' } },
    //   textareaSpellcheck: { control: 'boolean', table: { sort: 'alpha' } },
    //   textareaTabIndex: { control: 'number', table: { sort: 'alpha' } },
    //   textareaBlur: { action: 'textarea-blur' },
    //   value: { control: 'text', table: { sort: 'alpha' } },
    // },
    // parameters: {
    //   actions: {
    //     handles: ['textarea-blur', 'textarea-change'],
    //   },
    //   controls: {
    //     sort: 'alpha',
    //   },
  },
};

export default meta;

type Story = StoryObj;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-textarea
        aria-describedby=${ifDefined(args.ariaDescribedby)}
        aria-label=${ifDefined(args.ariaLabel)}
        custom-class=${ifDefined(args.customClass)}
        ?disabled=${args.disabled}
        max-length=${ifDefined(args.maxLength)}
        name=${ifDefined(args.name)}
        placeholder=${ifDefined(args.placeholder)}
        ?readonly=${args.readonly}
        ?required=${args.required}
        rows=${ifDefined(args.rows)}
        textarea-aria-invalid=${ifDefined(args.textareaAriaInvalid)}
        textarea-dir=${ifDefined(args.textareaDir)}
        textarea-id=${ifDefined(args.textareaId)}
        textarea-spellcheck=${ifDefined(args.textareaSpellcheck)}
        textarea-tab-index=${ifDefined(args.textareaTabIndex)}
        .value=${args.value}
        @textarea-blur=${(e: Event) => {
          const target = e.target as HTMLTextAreaElement;
          args.value = target.value;
        }}
        @textarea-change=${(e: Event) => {
          const target = e.target as HTMLTextAreaElement;
          args.value = target.value;
        }}
      ></modus-wc-textarea>
    `;
  },
  args: {
    ariaLabel: 'Enter your comments',
    placeholder: 'Type your comments here',
    // maxLength: 100,
  },
};

export const Default: Story = { ...Template };
