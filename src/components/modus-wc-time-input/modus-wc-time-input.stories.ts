import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { IInputFeedbackProp, ModusSize } from '../types';

interface TimeInputArgs {
  bordered?: boolean;
  'custom-class'?: string;
  'datalist-options'?: string[];
  disabled?: boolean;
  feedback?: IInputFeedbackProp;
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  name?: string;
  'picker-type'?: 'picker' | 'datalist';
  'read-only'?: boolean;
  required?: boolean;
  'show-seconds'?: boolean;
  size?: ModusSize;
  'use-12-hour'?: boolean;
  value: string;
}

const meta: Meta<TimeInputArgs> = {
  title: 'Components/Forms/Time Input',
  component: 'modus-wc-time-input',
  args: {
    disabled: false,
    label: 'Time',
    'picker-type': 'picker',
    'use-12-hour': true,
    size: 'md',
    value: '09:45',
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
    'picker-type': {
      control: { type: 'select' },
      options: ['picker', 'datalist'],
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

const Template: Story = {
  render: (args) => html`
    <modus-wc-time-input
      aria-label="Time input"
      bordered=${ifDefined(args.bordered)}
      custom-class=${ifDefined(args['custom-class'])}
      ?disabled=${args.disabled}
      .feedback=${args.feedback}
      input-id=${ifDefined(args['input-id'])}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      label=${ifDefined(args.label)}
      name=${ifDefined(args.name)}
      picker-type=${ifDefined(args['picker-type'])}
      ?read-only=${args['read-only']}
      ?required=${args.required}
      ?show-seconds=${args['show-seconds']}
      size=${ifDefined(args.size)}
      ?use12-hour=${args['use-12-hour']}
      .datalistOptions=${args['datalist-options'] ?? []}
      .value=${args.value ?? ''}
    ></modus-wc-time-input>
  `,
};

export const Default: Story = { ...Template };

export const WithSeconds: Story = {
  ...Template,
  args: {
    'show-seconds': true,
    value: '09:45:00',
  },
};

export const WithPicker: Story = {
  ...Template,
  args: {
    'picker-type': 'picker',
    'use-12-hour': true,
    value: '09:45',
  },
};

export const WithPickerSeconds: Story = {
  ...Template,
  args: {
    'picker-type': 'picker',
    'use-12-hour': true,
    'show-seconds': true,
    value: '09:45:00',
  },
};

export const WithPickerDatalist: Story = {
  render: () => html`
    <modus-wc-time-input
      aria-label="Time datalist picker"
      label="Time"
      picker-type="datalist"
      .datalistOptions=${['9:15 AM', '9:30 AM', '9:45 AM', '10:00 AM', '10:15 AM']}
      .value=${'9:45 AM'}
    ></modus-wc-time-input>
  `,
};

const errorFeedback: IInputFeedbackProp = {
  level: 'error',
  message: 'Value is required.',
};

export const WithErrorFeedback: Story = {
  ...Template,
  args: { feedback: errorFeedback, required: true },
  parameters: {
    docs: {
      source: {
        transform: (src) => `${src}
<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
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
    // Create a unique shadow host for time-input component
    if (!customElements.get('time-input-shadow-host')) {
      const TimeInputShadowHost = createShadowHostClass<TimeInputArgs>({
        componentTag: 'modus-wc-time-input',
        propsMapper: (v: TimeInputArgs, el: HTMLElement) => {
          const timeInputEl = el as unknown as {
            bordered: boolean;
            customClass: string;
            datalistOptions: string[];
            disabled: boolean;
            feedback: IInputFeedbackProp;
            inputId: string;
            inputTabIndex: number;
            label: string;
            name: string;
            pickerType: string;
            readOnly: boolean;
            required: boolean;
            showSeconds: boolean;
            size: string;
            use12Hour: boolean;
            value: string;
          };
          timeInputEl.bordered = v['bordered'] ?? true;
          timeInputEl.customClass = v['custom-class'] || '';
          if (v['datalist-options']) {
            timeInputEl.datalistOptions = v['datalist-options'];
          }
          timeInputEl.disabled = Boolean(v.disabled);
          timeInputEl.inputId = v['input-id'] ?? '';
          timeInputEl.inputTabIndex = v['input-tab-index'] ?? 0;
          timeInputEl.label = v.label ?? '';
          timeInputEl.name = v.name ?? '';
          timeInputEl.pickerType = v['picker-type'] ?? 'picker';
          timeInputEl.readOnly = Boolean(v['read-only']);
          timeInputEl.required = Boolean(v.required);
          timeInputEl.showSeconds = Boolean(v['show-seconds']);
          timeInputEl.size = v.size ?? 'md';
          timeInputEl.use12Hour = Boolean(v['use-12-hour']);
          timeInputEl.value = v.value ?? '';
        },
      });
      customElements.define('time-input-shadow-host', TimeInputShadowHost);
    }

    return html`<time-input-shadow-host
      .props=${{ ...args }}
    ></time-input-shadow-host>`;
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

| 1.0 Prop                | 2.0 Prop            | Notes                                   |
|-------------------------|---------------------|-----------------------------------------|
| allowed-chars-regex     |                     | Not carried over                        |
| ampm                    | use12-hour          | Use \`picker-type="picker"\`            |
| aria-label              | aria-label          |                                         |
| auto-focus-input        | autofocus           |                                         |
| auto-format             |                     | Not carried over                        |
| disable-validation      |                     | Not carried over                        |
| disabled                | disabled            |                                         |
| error-text              | feedback.message    | Use \`feedback\` level                  |
| helper-text             |                     | Not carried over                        |
| label                   | label               |                                         |
| max                     |                     | Not carried over (custom picker)        |
| min                     |                     | Not carried over (custom picker)        |
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
