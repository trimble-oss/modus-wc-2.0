import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface TextAreaArgs {
  'aria-describedby': string;
  'aria-label': string;
  'custom-class': string;
  disabled: boolean;
  'max-length': number;
  name: string;
  placeholder: string;
  readonly: boolean;
  required: boolean;
  rows: number;
  'textarea-aria-invalid': 'grammar' | 'spelling' | 'true' | 'false';
  'textarea-dir': 'ltr' | 'rtl' | 'auto';
  'textarea-id': string;
  'textarea-spellcheck': boolean;
  'textarea-tab-index': number;
  value: string;
}

const meta: Meta<TextAreaArgs> = {
  title: 'Components/Atoms/Textarea',
  component: 'modus-wc-textarea',
  args: {
    'aria-label': 'Enter your comments',
    placeholder: 'Type your comments here',
  },
  argTypes: {
    'textarea-aria-invalid': {
      control: {
        type: 'inline-radio',
      },
      options: ['grammar', 'spelling', 'true', 'false'],
    },
    'textarea-dir': {
      control: {
        type: 'inline-radio',
      },
      options: ['ltr', 'rtl', 'auto'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['textareaBlur', 'textareaChange', 'textareaFocus'],
    },
  },
};

export default meta;

type Story = StoryObj<TextAreaArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-textarea
        aria-describedby=${ifDefined(args['aria-describedby'])}
        aria-label=${ifDefined(args['aria-label'])}
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        max-length=${ifDefined(args['max-length'])}
        name=${ifDefined(args.name)}
        placeholder=${ifDefined(args.placeholder)}
        ?readonly=${args.readonly}
        ?required=${args.required}
        ?rows=${args.rows}
        ?textarea-aria-invalid=${args['textarea-aria-invalid']}
        textarea-dir=${args['textarea-dir']}
        ?textarea-id=${args['textarea-id']}
        ?textarea-spellcheck=${args['textarea-spellcheck']}
        ?textarea-tab-index=${args['textarea-tab-index']}
        .value=${args.value}
      ></modus-wc-textarea>
    `;
  },
};

export const Default: Story = { ...Template };
