import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IInputFeedbackProp, ModusSize } from '../types';

// const timeOptions = ['08:00', '12:00', '17:00'];

interface TimeInputArgs {
  'auto-complete'?: 'on' | 'off';
  bordered?: boolean;
  'custom-class'?: string;
  'datalist-id'?: string;
  'datalist-options'?: string[];
  disabled?: boolean;
  feedback?: IInputFeedbackProp;
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  max?: string;
  min?: string;
  name?: string;
  'read-only'?: boolean;
  required?: boolean;
  'show-seconds'?: boolean;
  size?: ModusSize;
  step?: number;
  value: string;
}

const meta: Meta<TimeInputArgs> = {
  title: 'Components/Forms/Time Input',
  component: 'modus-wc-time-input',
  args: {
    disabled: false,
    label: 'Label',
    size: 'md',
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
    size: {
      control: { type: 'select' },
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

type Story = StoryObj<TimeInputArgs>;

export const Template: Story = {
  render: (args) => html`
    <modus-wc-time-input
      aria-label="Time input"
      auto-complete=${ifDefined(args['auto-complete'])}
      bordered=${ifDefined(args.bordered)}
      custom-class=${ifDefined(args['custom-class'])}
      datalist-id=${ifDefined(args['datalist-id'])}
      ?disabled=${args.disabled}
      .feedback=${args.feedback}
      input-id=${ifDefined(args['input-id'])}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      label=${ifDefined(args.label)}
      max=${ifDefined(args.max)}
      min=${ifDefined(args.min)}
      name=${ifDefined(args.name)}
      ?read-only=${args['read-only']}
      ?required=${args.required}
      show-seconds=${ifDefined(args['show-seconds'])}
      size=${ifDefined(args.size)}
      step=${ifDefined(args.step)}
      .datalistOptions=${args['datalist-options']}
      .value=${args.value}
    ></modus-wc-time-input>
  `,
};

export const WithSeconds: Story = {
  render: () => {
    return html`
      <modus-wc-time-input
        aria-label="Example time input"
        show-seconds="true"
      ></modus-wc-time-input>
    `;
  },
};

export const WithDatalist: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-time-input
  aria-label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    `;
  },
};

export const WithDatalistOptions: Story = {
  render: () => {
    // prettier-ignore
    return html`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Example of programmatically adding 'datalistOptions'
    const preferredTimes = ['09:30', '12:00', '17:30'];
    document.querySelector('#time-input-with-options').datalistOptions = preferredTimes;
  });
</script>
<modus-wc-time-input
  aria-label="Example time input"
  id="time-input-with-options"
></modus-wc-time-input>
    `;
  },
};

const errorFeedback: IInputFeedbackProp = {
  level: 'error',
  message: 'Value is required.',
};

export const WithErrorFeedback: Story = {
  render: (args) => html`
    <modus-wc-time-input
      aria-label="Time input"
      .feedback=${errorFeedback}
      label=${ifDefined(args.label)}
      ?required=${true}
      .value=${args.value}
    ></modus-wc-time-input>
  `,
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

| 1.0 Prop                | 2.0 Prop            | Notes                                   |
|-------------------------|---------------------|-----------------------------------------|
| allowed-chars-regex     |                     | Not carried over                        |
| ampm                    |                     | Not carried over                        |
| aria-label              | aria-label          |                                         |
| auto-focus-input        | autofocus           |                                         |
| auto-format             |                     | Not carried over                        |
| disable-validation      |                     | Not carried over                        |
| disabled                | disabled            |                                         |
| error-text              | feedback.message    | Use \`feedback\` level                  |
| helper-text             |                     | Not carried over                        |
| label                   | label               |                                         |
| max                     | max                 |                                         |
| min                     | min                 |                                         |
| placeholder             |                     | Not carried over                        |
| read-only               | read-only           |                                         |
| required                | required            |                                         |
| size                    | size                | \`medium\` → \`md\`, \`large\` → \`lg\` |
| valid-text              | feedback.message    | Use \`feedback\` level                  |
| value                   | value               |                                         |

#### Event Mapping

| 1.0 Event      | 2.0 Event   | Notes                                                |
|----------------|-------------|------------------------------------------------------|
| timeInputBlur  | inputBlur   |                                                      |
| valueChange    | inputChange |                                                      |
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
