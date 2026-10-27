import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { IInputFeedbackProp, ModusSize } from '../types';

interface TimeInputArgs {
  'auto-complete'?: 'on' | 'off';
  bordered?: boolean;
  'custom-class'?: string;
  'datalist-options'?: string[];
  disabled?: boolean;
  feedback?: IInputFeedbackProp;
  format?: '12hrs' | '24hrs';
  'input-id'?: string;
  'input-tab-index'?: number;
  'interval-minutes'?: number;
  label?: string;
  max?: string;
  min?: string;
  name?: string;
  'read-only'?: boolean;
  required?: boolean;
  'show-seconds'?: boolean;
  size?: ModusSize;
  step?: number;
  variant?: 'datalist' | 'picker';
  value?: string;
}

const meta: Meta<TimeInputArgs> = {
  title: 'Components/Forms/Time Input',
  component: 'modus-wc-time-input',
  args: {
    bordered: true,
    disabled: false,
    label: 'Time',
    'read-only': false,
    required: false,
    'show-seconds': false,
    size: 'md',
  },
  argTypes: {
    'auto-complete': {
      control: { type: 'select' },
      options: ['on', 'off'],
    },
    feedback: {
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
    format: {
      control: { type: 'select' },
      options: ['12hrs', '24hrs'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['picker', 'datalist'],
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
      auto-complete=${ifDefined(args['auto-complete'])}
      ?bordered=${args.bordered}
      custom-class=${ifDefined(args['custom-class'])}
      ?disabled=${args.disabled}
      .feedback=${args.feedback}
      format=${ifDefined(args.format)}
      input-id=${ifDefined(args['input-id'])}
      input-tab-index=${ifDefined(args['input-tab-index'])}
      interval-minutes=${ifDefined(args['interval-minutes'])}
      label=${ifDefined(args.label)}
      max=${ifDefined(args.max)}
      min=${ifDefined(args.min)}
      name=${ifDefined(args.name)}
      ?read-only=${args['read-only']}
      ?required=${args.required}
      ?show-seconds=${args['show-seconds']}
      size=${ifDefined(args.size)}
      step=${ifDefined(args.step)}
      variant=${ifDefined(args.variant)}
      .datalistOptions=${args['datalist-options']}
      value=${ifDefined(args.value)}
    ></modus-wc-time-input>
  `,
};

export const Default: Story = { ...Template };

export const Format12Hour: Story = {
  ...Template,
  args: {
    format: '12hrs',
    value: '21:45',
  },
};

export const Datalist: Story = {
  ...Template,
  args: {
    variant: 'datalist',
    value: '09:45',
    'datalist-options': ['09:15', '09:30', '09:45', '10:00', '10:15'],
  },
  parameters: {
    docs: {
      source: {
        code: `
<modus-wc-time-input
  aria-label="Time input"
  label="Time"
  variant="datalist"
  value="09:45"
  bordered
></modus-wc-time-input>

<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.datalistOptions = [
    '09:15',
    '09:30',
    '09:45',
    '10:00',
    '10:15',
  ];
</script>
        `,
      },
    },
  },
};

export const WithGeneratedIntervals: Story = {
  ...Template,
  args: {
    variant: 'datalist',
    'interval-minutes': 15,
    min: '08:00',
    max: '12:00',
    value: '09:00',
  },
};

export const WithSeconds: Story = {
  ...Template,
  args: {
    'show-seconds': true,
    value: '09:45:00',
  },
};

export const WithDatalist: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-time-input
  label="Example time input"
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
  label="Example time input"
  id="time-input-with-options"
></modus-wc-time-input>
    `;
  },
};

const errorFeedback: IInputFeedbackProp = {
  level: 'error',
  message: 'Invalid time entered.',
};

export const WithErrorFeedback: Story = {
  ...Template,
  args: { feedback: errorFeedback, required: true, value: '' },
  parameters: {
    docs: {
      source: {
        transform: (src) => `${src}
<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
    level: 'error',
    message: 'Invalid time entered.'
  };
</script>`,
      },
    },
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('time-input-shadow-host')) {
      const TimeInputShadowHost = createShadowHostClass<TimeInputArgs>({
        componentTag: 'modus-wc-time-input',
        propsMapper: (v: TimeInputArgs, el: HTMLElement) => {
          const timeInputEl = el as unknown as {
            autoComplete: string;
            bordered: boolean;
            customClass: string;
            datalistOptions: string[];
            disabled: boolean;
            feedback: IInputFeedbackProp;
            format: string;
            inputId: string;
            inputTabIndex: number;
            intervalMinutes: number;
            label: string;
            max: string;
            min: string;
            name: string;
            readOnly: boolean;
            required: boolean;
            showSeconds: boolean;
            size: string;
            step: number;
            value: string;
          };
          timeInputEl.autoComplete = v['auto-complete'] ?? '';
          timeInputEl.bordered = v['bordered'] ?? true;
          timeInputEl.customClass = v['custom-class'] || '';
          if (v['datalist-options']) {
            timeInputEl.datalistOptions = v['datalist-options'];
          }
          timeInputEl.disabled = Boolean(v.disabled);
          if (v.format) {
            timeInputEl.format = v.format;
          }
          timeInputEl.inputId = v['input-id'] ?? '';
          timeInputEl.inputTabIndex = v['input-tab-index'] ?? 0;
          if (v['interval-minutes'] !== undefined) {
            timeInputEl.intervalMinutes = v['interval-minutes'];
            el.setAttribute('interval-minutes', String(v['interval-minutes']));
          }
          timeInputEl.label = v.label ?? '';
          timeInputEl.max = v.max ?? '';
          timeInputEl.min = v.min ?? '';
          timeInputEl.name = v.name ?? '';
          timeInputEl.readOnly = Boolean(v['read-only']);
          timeInputEl.required = Boolean(v.required);
          timeInputEl.showSeconds = Boolean(v['show-seconds']);
          timeInputEl.size = v.size ?? 'md';
          if (v.step !== undefined) {
            timeInputEl.step = v.step;
          }
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

#### Changes

  - The field is a custom segmented text input (native \`--:--\` skeleton) instead of the browser's \`<input type="time">\`.
  - \`value\` stays **24-hour** (\`HH:mm\` / \`HH:mm:ss\`) for storage and \`inputChange\`.
  - \`format\` is \`12hrs\` or \`24hrs\`. It controls the field display and the Modus picker wheels / datalist labels.
    When unset, the hour clock follows the user's locale and falls back to \`24hrs\` when the locale clock cannot be detected.
    Set \`format\` explicitly to pin it regardless of locale.
  - \`variant\` is \`picker\` (default) or \`datalist\` for an interval or option list.
  - Dropdown mode follows \`variant="datalist"\`, a non-empty \`datalistOptions\`, or deprecated \`datalistId\`.
    The bare \`interval-minutes\` attribute still opts into datalist for backward compatibility.
  - \`datalistId\` is deprecated. Prefer \`datalistOptions\` or \`variant="datalist"\`.
  - Keyboard editing: Arrow Up/Down step segments, Arrow Left/Right move between segments, digits auto-advance, and A/P sets AM/PM in \`12hrs\` mode.
  - A field click selects a segment. The clock button or **Alt+ArrowDown** opens the dropdown. Plain arrow keys edit segments.
  - Escape or a click outside closes the dropdown.
  - Picker wheel clicks update the field immediately. A datalist selection closes the menu.
  - Form submission uses a hidden input carrying the canonical 24-hour \`value\` when \`name\` is set.

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
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
