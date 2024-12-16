import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../../types';

interface TextAreaArgs {
  'a11y-describedby'?: string;
  'a11y-label': string;
  'a11y-labelledby'?: string;
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'input-aria-invalid'?: 'grammar' | 'spelling' | 'true' | 'false';
  'input-dir'?: 'ltr' | 'rtl' | 'auto';
  'input-id'?: string;
  'input-spellcheck'?: boolean;
  'input-tab-index'?: number;
  'max-length'?: number;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  size?: DaisySize;
  value: string;
}

const meta: Meta<TextAreaArgs> = {
  title: 'Components/Forms/Textarea',
  component: 'modus-wc-textarea',
  args: {
    'a11y-label': 'Enter your comments',
    bordered: true,
    'custom-class': '',
    disabled: false,
    placeholder: 'Type your comments here',
    readonly: false,
    required: false,
    size: 'md',
    value: '',
  },
  argTypes: {
    'input-aria-invalid': {
      control: {
        type: 'inline-radio',
      },
      options: ['grammar', 'spelling', 'true', 'false'],
    },
    'input-dir': {
      control: {
        type: 'inline-radio',
      },
      options: ['ltr', 'rtl', 'auto'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
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

export const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-textarea
        a11y-describedby=${ifDefined(args['a11y-describedby'])}
        a11y-label=${args['a11y-label']}
        a11y-labelledby=${args['a11y-labelledby']}
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
        input-dir=${ifDefined(args['input-dir'])}
        input-id=${ifDefined(args['input-id'])}
        ?input-spellcheck=${args['input-spellcheck']}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        max-length=${ifDefined(args['max-length'])}
        name=${ifDefined(args.name)}
        placeholder=${ifDefined(args.placeholder)}
        ?readonly=${args.readonly}
        ?required=${args.required}
        rows=${ifDefined(args.rows)}
        size=${ifDefined(args.size)}
        .value=${args.value}
      ></modus-wc-textarea>
    `;
  },
};

// prettier-ignore
export const TextareaWithLabel: Story = {
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
      for-id="textarea-input"
      label-text="Example textarea"
    ></modus-wc-input-label>
    <modus-wc-textarea
      a11y-label="Example textarea"
      input-id="textarea-input"
      name="example-textarea"
    ></modus-wc-textarea>
  </div>
</form>
    `;
  },
};
