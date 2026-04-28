import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { IInputFeedbackProp, ModusSize } from '../types';

interface NumberInputArgs {
  'auto-complete'?: 'on' | 'off';
  bordered?: boolean;
  'currency-symbol'?: string;
  'custom-class'?: string;
  disabled?: boolean;
  feedback?: IInputFeedbackProp;
  'input-aria-invalid'?: 'true' | 'false';
  'input-id'?: string;
  inputmode?: 'decimal' | 'none' | 'numeric';
  'input-tab-index'?: number;
  label?: string;
  max?: number;
  min?: number;
  name?: string;
  placeholder?: string;
  'read-only'?: boolean;
  required?: boolean;
  size?: ModusSize;
  step?: number;
  type?: 'number' | 'range';
  value: string;
}

const meta: Meta<NumberInputArgs> = {
  title: 'Components/Forms/Number Input',
  component: 'modus-wc-number-input',
  args: {
    bordered: true,
    disabled: false,
    inputmode: 'numeric',
    label: 'Label',
    size: 'md',
    type: 'number',
    value: '',
  },
  argTypes: {
    'auto-complete': {
      control: { type: 'select' },
      options: ['on', 'off'],
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
      control: { type: 'select' },
      options: ['true', 'false'],
    },
    inputmode: {
      control: { type: 'select' },
      options: ['decimal', 'none', 'numeric'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'select' },
      options: ['number', 'range'],
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

type Story = StoryObj<NumberInputArgs>;

const Template: Story = {
  render: (args) => html`
    <modus-wc-number-input
      aria-label="Number input"
      auto-complete=${ifDefined(args['auto-complete'])}
      ?bordered=${args.bordered}
      currency-symbol=${ifDefined(args['currency-symbol'])}
      custom-class=${ifDefined(args['custom-class'])}
      ?disabled=${args.disabled}
      .feedback=${args.feedback}
      input-aria-invalid=${ifDefined(args['input-aria-invalid'])}
      input-id=${ifDefined(args['input-id'])}
      inputmode=${ifDefined(args.inputmode)}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      label=${ifDefined(args.label)}
      max=${ifDefined(args.max)}
      min=${ifDefined(args.min)}
      name=${ifDefined(args.name)}
      placeholder=${ifDefined(args.placeholder)}
      ?read-only=${args['read-only']}
      ?required=${args.required}
      size=${ifDefined(args.size)}
      step=${ifDefined(args.step)}
      type=${ifDefined(args.type)}
      .value=${args.value}
    ></modus-wc-number-input>
  `,
};

export const Default: Story = { ...Template };

const errorFeedback: IInputFeedbackProp = {
  level: 'error',
  message: 'Value is required.',
};

export const Currency: Story = {
  ...Template,
  args: { 'currency-symbol': '$' },
};

export const WithErrorFeedback: Story = {
  ...Template,
  args: { feedback: errorFeedback, required: true },
  parameters: {
    docs: {
      source: {
        transform: (src) => `${src}
<script>
  const numberInputElement = document.querySelector('modus-wc-number-input');
  numberInputElement.feedback = {
    level: 'error',
    message: 'Value is required.'
  };
</script>`,
      },
    },
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    // Create a unique shadow host for number-input component
    if (!customElements.get('number-input-shadow-host')) {
      const NumberInputShadowHost = createShadowHostClass<NumberInputArgs>({
        componentTag: 'modus-wc-number-input',
        propsMapper: (v: NumberInputArgs, el: HTMLElement) => {
          const numberInputEl = el as unknown as {
            autoComplete: string;
            bordered: boolean;
            currencySymbol: string;
            customClass: string;
            disabled: boolean;
            feedback: IInputFeedbackProp;
            inputId: string;
            inputTabIndex: number;
            label: string;
            max: number;
            min: number;
            name: string;
            placeholder: string;
            readOnly: boolean;
            required: boolean;
            size: string;
            step: number;
            type: string;
            value: string;
          };
          numberInputEl.autoComplete = v['auto-complete'] ?? '';
          numberInputEl.bordered = Boolean(v.bordered);
          numberInputEl.currencySymbol = v['currency-symbol'] ?? '';
          numberInputEl.customClass = v['custom-class'] || '';
          numberInputEl.disabled = Boolean(v.disabled);
          numberInputEl.inputId = v['input-id'] ?? '';
          numberInputEl.inputTabIndex = v['input-tab-index'] ?? 0;
          numberInputEl.label = v.label ?? '';
          numberInputEl.max = v.max ?? 0;
          numberInputEl.min = v.min ?? 0;
          numberInputEl.name = v.name ?? '';
          numberInputEl.placeholder = v.placeholder ?? '';
          numberInputEl.readOnly = Boolean(v['read-only']);
          numberInputEl.required = Boolean(v.required);
          numberInputEl.size = v.size ?? '';
          numberInputEl.step = v.step ?? 1;
          numberInputEl.type = v.type ?? '';
          numberInputEl.value = v.value;
        },
      });
      customElements.define('number-input-shadow-host', NumberInputShadowHost);
    }

    return html`<number-input-shadow-host
      style="width: 200px;display: block;"
      .props=${{ ...args }}
    ></number-input-shadow-host>`;
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
  - Instead of changing the internal input type for currency formatting, the component now always renders
  a number input and displays the currency symbol via the \`currency-symbol\` prop.
  - Size values have changed from verbose names (\`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop     | 2.0 Prop            | Notes                                   |
|--------------|---------------------|-----------------------------------------|
| aria-label   | aria-label          |                                         |
| currency     | currency-symbol     |                                         |
| disabled     | disabled            |                                         |
| error-text   | feedback.message    | Use \`feedback\` level                  |
| helper-text  |                     | Not carried over                        |
| label        | label               |                                         |
| locale       |                     | Not carried over                        |
| max-value    | max                 |                                         |
| min-value    | min                 |                                         |
| placeholder  | placeholder         |                                         |
| read-only    | read-only           |                                         |
| required     | required            |                                         |
| size         | size                | \`medium\` → \`md\`, \`large\` → \`lg\` |
| step         | step                |                                         |
| text-align   |                     | Not carried over, use CSS instead       |
| valid-text   | feedback.message    | Use \`feedback\` level                  |
| value        | value               |                                         |

#### Event Mapping

| 1.0 Event    | 2.0 Event    | Notes |
|--------------|--------------|-------|
| valueChange  | inputChange  |       |
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
