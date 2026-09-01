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
  'hour-format'?: '12h' | '24h';
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
  value: string;
}

const meta: Meta<TimeInputArgs> = {
  title: 'Components/Forms/Time Input',
  component: 'modus-wc-time-input',
  args: {
    bordered: true,
    disabled: false,
    'hour-format': '24h',
    label: 'Time',
    'read-only': false,
    required: false,
    'show-seconds': false,
    size: 'md',
    value: '09:45',
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
    'hour-format': {
      control: { type: 'select' },
      options: ['12h', '24h'],
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
      auto-complete=${ifDefined(args['auto-complete'])}
      ?bordered=${args.bordered}
      custom-class=${ifDefined(args['custom-class'])}
      ?disabled=${args.disabled}
      .feedback=${args.feedback}
      .hourFormat=${args['hour-format'] ?? '24h'}
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
      .datalistOptions=${args['datalist-options']}
      .value=${args.value}
    ></modus-wc-time-input>
  `,
};

export const Default: Story = { ...Template };

export const Format12Hour: Story = {
  ...Template,
  args: {
    'hour-format': '12h',
    value: '21:45',
  },
};

export const Datalist: Story = {
  ...Template,
  args: {
    value: '09:45',
    'datalist-options': ['09:15', '09:30', '09:45', '10:00', '10:15'],
  },
};

export const WithGeneratedIntervals: Story = {
  ...Template,
  args: {
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
            hourFormat: string;
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
          timeInputEl.hourFormat = v['hour-format'] ?? '24h';
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

  - The field is a custom segmented text input (native \`--:--\` skeleton) instead of the browser's \`<input type="time">\`.
  - Open the picker with the clock button or **Alt+ArrowDown** (plain Arrow keys edit segments).
  - \`value\` remains **24-hour** (\`HH:mm\` / \`HH:mm:ss\`) for storage and \`inputChange\`.
  - New \`hourFormat\` prop (\`hour-format\` attribute): \`24h\` (default) or \`12h\`.
    Controls display, Modus picker wheels / datalist labels.
  - Dropdown mode is inferred: picker wheels by default; suggestion list when
    \`datalistOptions\` (or deprecated \`datalistId\`) is set, or when \`interval-minutes\`
    is present for generated intervals.
  - \`datalistId\` is deprecated; prefer \`datalistOptions\`.
  - Size values use abbreviations (\`sm\`, \`md\`, \`lg\`).

#### New Behaviors

  - Native-style keyboard editing: Arrow Up/Down step segments, Arrow Left/Right move between segments, digits auto-advance, A/P sets AM/PM in 12h mode.
  - Clock button toggles the Modus dropdown; Escape / click-outside closes it.
  - Picker wheel clicks update the field immediately; datalist selection closes the menu.
  - Form submission uses a hidden input carrying the canonical 24h \`value\` when \`name\` is set.
        `,
      },
    },
  },
  render: () => html`
    <modus-wc-time-input
      label="Meeting time"
      hour-format="24h"
      value="09:45"
    ></modus-wc-time-input>
  `,
};
