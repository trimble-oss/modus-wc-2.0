import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { AutocompleteTypes, IInputFeedbackProp, ModusSize } from '../types';

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
  feedback?: IInputFeedbackProp;
  'include-clear'?: boolean;
  'include-search'?: boolean;
  'input-id'?: string;
  inputmode?:
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
    'include-clear': false,
    'include-search': false,
    inputmode: 'text',
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
    feedback: {
      description: 'Feedback prop for input components',
      table: {
        type: {
          detail: `
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `,
        },
      },
    },
    inputmode: {
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

const Template: Story = {
  render: (args) => html`
    <modus-wc-text-input
      aria-label="Text input"
      auto-capitalize=${ifDefined(args['auto-capitalize'])}
      auto-complete=${ifDefined(args['auto-complete'])}
      auto-correct=${ifDefined(args['auto-correct'])}
      ?bordered=${args.bordered}
      clear-aria-label=${ifDefined(args['clear-aria-label'])}
      custom-class=${ifDefined(args['custom-class'])}
      ?disabled=${args.disabled}
      enterkeyhint=${ifDefined(args.enterkeyhint)}
      .feedback=${args.feedback}
      include-clear=${ifDefined(args['include-clear'])}
      include-search=${ifDefined(args['include-search'])}
      input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
      input-id=${ifDefined(args['input-id'])}
      inputmode=${ifDefined(args.inputmode)}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      label=${ifDefined(args.label)}
      max-length=${ifDefined(args['max-length'])}
      min-length=${ifDefined(args['min-length'])}
      name=${ifDefined(args.name)}
      pattern=${ifDefined(args.pattern)}
      placeholder=${ifDefined(args.placeholder)}
      ?read-only=${args['read-only']}
      ?required=${args.required}
      size=${ifDefined(args.size)}
      spellcheck=${ifDefined(args.spellcheck)}
      type=${ifDefined(args.type)}
      .value=${args.value}
    ></modus-wc-text-input>
  `,
};

export const Default: Story = { ...Template };

const errorFeedback: IInputFeedbackProp = {
  level: 'error',
  message: 'Value is required.',
};

export const WithErrorFeedback: Story = {
  ...Template,
  args: { feedback: errorFeedback, required: true },
};

export const WithCustomIconSlot: Story = {
  // prettier-ignore
  render: (args) => html`
<modus-wc-text-input
  aria-label="Text input with custom icon"
  auto-capitalize=${ifDefined(args['auto-capitalize'])}
  auto-complete=${ifDefined(args['auto-complete'])}
  auto-correct=${ifDefined(args['auto-correct'])}
  ?bordered=${args.bordered}
  clear-aria-label=${ifDefined(args['clear-aria-label'])}
  custom-class=${ifDefined(args['custom-class'])}
  ?disabled=${args.disabled}
  enterkeyhint=${ifDefined(args.enterkeyhint)}
  .feedback=${args.feedback}
  include-clear=${ifDefined(args['include-clear'])}
  include-search=${ifDefined(args['include-search'])}
  input-id=${ifDefined(args['input-id'])}
  inputmode=${ifDefined(args.inputmode)}
  input-tab-index=${ifDefined(args['input-tab-index'])}
  label=${ifDefined(args.label)}
  max-length=${ifDefined(args['max-length'])}
  min-length=${ifDefined(args['min-length'])}
  name=${ifDefined(args.name)}
  pattern=${ifDefined(args.pattern)}
  placeholder=${ifDefined(args.placeholder)}
  ?read-only=${args['read-only']}
  ?required=${args.required}
  size=${ifDefined(args.size)}
  spellcheck=${ifDefined(args.spellcheck)}
  type=${ifDefined(args.type)}
  .value=${args.value}
>
  <modus-wc-icon slot="custom-icon" name="heart" size="sm"></modus-wc-icon>
</modus-wc-text-input>
  `,
  args: {
    placeholder: 'Enter text here...',
  },
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\`small\`, \`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop                     | 2.0 Prop            | Notes                                                       |
|------------------------------|---------------------|-------------------------------------------------------------|
| aria-label                   | aria-label          |                                                             |
| autocapitalize               | auto-capitalize     |                                                             |
| autocorrect                  | auto-correct        |                                                             |
| autocomplete                 | autocomplete        |                                                             |
| auto-focus-input             | autofocus           |                                                             |
| clearable                    | include-clear       |                                                             |
| disabled                     | disabled            |                                                             |
| enter-key-hint               | enterkeyhint        |                                                             |
| error-text                   | feedback.message    | Use \`feedback\` level                                      |
| helper-text                  |                     | Not carried over                                            |
| include-error-icon           |                     | Not carried over                                            |
| include-search-icon          | include-search      |                                                             |
| include-password-text-toggle |                     | Not carried over                                            |
| inputmode                    | inputmode          |                                                             |
| label                        | label               |                                                             |
| max-length                   | max-length          |                                                             |
| pattern                      | pattern             |                                                             |
| placeholder                  | placeholder         |                                                             |
| read-only                    | read-only           |                                                             |
| required                     | required            |                                                             |
| size                         | size                | \`small\` → \`sm\`, \`medium\` → \`md\`, \`large\` → \`lg\` |
| spellcheck                   | spellcheck          |                                                             |
| text-align                   |                     | Not carried over, use CSS instead                           |
| type                         | type                |                                                             |
| valid-text                   | feedback.message    | Use \`feedback\` level                                      |
| value                        | value               |                                                             |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| valueChange | inputChange |                  |
        `,
      },
    },
    // To hide the actual story rendering and only show docs:
    controls: { disable: true },
    canvas: { disable: true },
  },
  // Simple render function or leave it empty
  render: () => html`<div></div>`,
};
