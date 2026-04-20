import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { IInputFeedbackProp, ModusSize } from '../types';

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
  feedback?: IInputFeedbackProp;
  'input-aria-invalid'?: 'grammar' | 'spelling' | 'true' | 'false';
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  'max-length'?: number;
  'min-length'?: number;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  size?: ModusSize;
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
        .feedback=${args.feedback}
        input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        label=${ifDefined(args.label)}
        max-length=${ifDefined(args['max-length'])}
        min-length=${ifDefined(args['min-length'])}
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

const errorFeedback: IInputFeedbackProp = {
  level: 'error',
  message: 'Value is required.',
};

export const WithErrorFeedback: Story = {
  render: (args) => html`
    <modus-wc-textarea
      aria-label="Textarea input"
      .feedback=${errorFeedback}
      id="error-input"
      label=${ifDefined(args.label)}
      ?required=${true}
      .value=${args.value}
    ></modus-wc-textarea>
    <script>
      // Adding this block to show how to set feedback via JS
      //const input = document.getElementById('error-input');
      //input.feedback = { level: 'error', message: 'Value is required.' };
    </script>
  `,
};

export const ShadowDomParent: Story = {
  render: (args) => {
    // Create a unique shadow host for textarea component
    if (!customElements.get('textarea-shadow-host')) {
      const TextareaShadowHost = createShadowHostClass<TextAreaArgs>({
        componentTag: 'modus-wc-textarea',
        propsMapper: (v: TextAreaArgs, el: HTMLElement) => {
          const textareaEl = el as unknown as {
            autoCorrect: string;
            bordered: boolean;
            customClass: string;
            disabled: boolean;
            enterkeyhint: string;
            feedback: IInputFeedbackProp;
            inputId: string;
            inputTabIndex: number;
            label: string;
            maxLength: number;
            minLength: number;
            name: string;
            placeholder: string;
            readonly: boolean;
            required: boolean;
            rows: number;
            size: string;
          };
          textareaEl.autoCorrect = v['auto-correct'];
          textareaEl.bordered = Boolean(v.bordered);
          textareaEl.customClass = v['custom-class'] || '';
          textareaEl.disabled = Boolean(v.disabled);
          textareaEl.enterkeyhint = v.enterkeyhint || '';

          textareaEl.inputId = v['input-id'] || '';
          textareaEl.inputTabIndex = v['input-tab-index'] || 0;
          textareaEl.label = v.label || '';
          textareaEl.maxLength = v['max-length'] || 100;
          textareaEl.minLength = v['min-length'] || 0;
          textareaEl.name = v.name || '';
          textareaEl.placeholder = v.placeholder || '';
          textareaEl.readonly = Boolean(v.readonly);
          textareaEl.required = Boolean(v.required);
          textareaEl.rows = typeof v.rows === 'number' ? v.rows : 2;
          textareaEl.size = v.size || '';
        },
      });
      customElements.define('textarea-shadow-host', TextareaShadowHost);
    }

    return html`<textarea-shadow-host
      .props=${{ ...args }}
    ></textarea-shadow-host>`;
  },
};
export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop                     | 2.0 Prop            | Notes                                                       |
|------------------------------|---------------------|-------------------------------------------------------------|
| aria-label                   | aria-label          |                                                             |
| autocorrect                  | auto-correct        |                                                             |
| auto-focus-input             |                     | Not carried over                                            |
| clearable                    |                     | Not carried over                                            |
| disabled                     | disabled            |                                                             |
| enterkeyhint                 | enterkeyhint        |                                                             |
| error-text                   | feedback.message    | Use \`feedback\` level                                      |
| helper-text                  |                     | Not carried over                                            |
| label                        | label               |                                                             |
| max-length                   | max-length          |                                                             |
| min-length                   | min-length          |                                                             |
| placeholder                  | placeholder         |                                                             |
| read-only                    | readonly            |                                                             |
| rows                         | rows                |                                                             |
| required                     | required            |                                                             |
| size                         | size                | \`medium\` → \`md\`, \`large\` → \`lg\`                     |
| spellcheck                   | spellcheck          |                                                             |
| text-align                   |                     | Not carried over, use CSS instead                           |
| valid-text                   | feedback.message    | Use \`feedback\` level                                      |
| value                        | value               |                                                             |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| valueChange | inputChange |                  |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
