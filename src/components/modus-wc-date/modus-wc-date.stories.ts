import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IInputFeedbackProp, ModusSize } from '../types';

interface DateArgs {
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  feedback?: IInputFeedbackProp;
  format?:
    | 'yyyy-mm-dd'
    | 'dd-mm-yyyy'
    | 'MMM DD, YYYY'
    | 'yyyy/mm/dd'
    | 'dd/mm/yyyy';
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  max?: string;
  min?: string;
  name?: string;
  placeholder?: string;
  'read-only'?: boolean;
  required?: boolean;
  size?: ModusSize;
  value: string;
}

const meta: Meta<DateArgs> = {
  title: 'Components/Forms/Date',
  component: 'modus-wc-date',
  args: {
    bordered: true,
    'custom-class': '',
    disabled: false,
    label: 'Label',
    'read-only': false,
    required: false,
    size: 'md',
    value: '',
  },
  argTypes: {
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
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    format: {
      control: { type: 'select' },
      options: [
        'yyyy-mm-dd',
        'dd-mm-yyyy',
        'MMM DD, YYYY',
        'yyyy/mm/dd',
        'dd/mm/yyyy',
      ],
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

type Story = StoryObj<DateArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-date
        aria-label="Date input"
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        .feedback=${args.feedback}
        format=${ifDefined(args.format)}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        label=${ifDefined(args.label)}
        max=${ifDefined(args.max)}
        min=${ifDefined(args.min)}
        name=${ifDefined(args.name)}
        placeholder=${ifDefined(args.placeholder)}
        ?read-only=${args['read-only']}
        ?required=${args.required}
        size=${ifDefined(args.size)}
        .value=${args.value}
      ></modus-wc-date>
    `;
  },
};

const errorFeedback: IInputFeedbackProp = {
  level: 'error',
  message: 'Value is required.',
};

export const WithErrorFeedback: Story = {
  render: (args) => html`
    <modus-wc-date
      aria-label="Date input"
      .feedback=${errorFeedback}
      label=${ifDefined(args.label)}
      ?required=${true}
      .value=${args.value}
    ></modus-wc-date>
  `,
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
  - Format handling is no longer supported. The component now uses the standard HTML date input format (ISO 8601 \`yyyy-mm-dd\`, \`dd-mm-yyyy\`, \`MMM DD, YYYY\`, \`yyyy/mm/dd\`, \`dd/mm/yyyy\`).
  - Size values have changed from verbose names (\`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop           | 2.0 Prop         | Notes                                   |
|--------------------|------------------|-----------------------------------------|
| allow-chars-regex  |                  | Not carried over                        |
| alt-formats        |                  | Not carried over                        |
| aria-label         | aria-label       |                                         |
| auto-focus-input   |                  | Not carried over                        |
| disabled           | disabled         |                                         |
| disable-validation |                  | Not carried over                        |
| error-text         | feedback.message | Use \`feedback\` level                  |
| filler-date        |                  | Not carried over                        |
| format             |                  | Not carried over                        |
| helper-text        |                  | Not carried over                        |
| label              | label            |                                         |
| max                | max              |                                         |
| min                | min              |                                         |
| placeholder        |                  | Not carried over                        |
| read-only          | read-only        |                                         |
| required           | required         |                                         |
| show-calendar-icon |                  | Not carried over                        |
| size               | size             | \`medium\` → \`md\`, \`large\` → \`lg\` |
| type               |                  | Not carried over                        |
| valid-text         | feedback.message | Use \`feedback\` level                  |
| value              | value            |                                         |

#### Event Mapping

| 1.0 Event           | 2.0 Event   | Notes            |
|---------------------|-------------|------------------|
| calendarIconClicked |             | Not carried over |
| dateInputBlur       | inputBlur   |                  |
| valueChange         | inputChange |                  |
| valueError          |             | Not carried over |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
