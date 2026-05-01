import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { IInputFeedbackProp, ModusSize, WeekStartDay } from '../types';

interface DateArgs {
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  feedback?: IInputFeedbackProp;
  format?:
    | 'yyyy-mm-dd'
    | 'dd-mm-yyyy'
    | 'mm-dd-yyyy'
    | 'yyyy/mm/dd'
    | 'dd/mm/yyyy'
    | 'mm/dd/yyyy'
    | 'MMM DD, YYYY';
  'input-id'?: string;
  'input-tab-index'?: number;
  label?: string;
  max?: string;
  min?: string;
  name?: string;
  'read-only'?: boolean;
  required?: boolean;
  'show-week-numbers'?: boolean;
  size?: ModusSize;
  value: string;
  /** When `type="range"`, ISO start date (`YYYY-MM-DD`). */
  start?: string;
  /** When `type="range"`, ISO end date (`YYYY-MM-DD`). */
  end?: string;
  'week-start-day'?: WeekStartDay;
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
    'show-week-numbers': false,
    size: 'md',
    value: '',
    'week-start-day': 'sunday',
  },
  argTypes: {
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
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    format: {
      control: { type: 'select' },
      options: [
        undefined,
        'yyyy-mm-dd',
        'dd-mm-yyyy',
        'mm-dd-yyyy',
        'yyyy/mm/dd',
        'dd/mm/yyyy',
        'mm/dd/yyyy',
        'MMM DD, YYYY',
      ],
    },
    'week-start-day': {
      control: { type: 'select' },
      options: [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: [
        'inputBlur',
        'inputChange',
        'inputFocus',
        'calendarMonthChange',
        'calendarYearChange',
        'rangeChange',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<DateArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <style>
        div[id^='story--components-forms-date--default'] {
          min-height: 400px;
          width: 300px;
        }
      </style>
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
        ?read-only=${args['read-only']}
        ?required=${args.required}
        ?show-week-numbers=${args['show-week-numbers']}
        size=${ifDefined(args.size)}
        .value=${args.value}
        week-start-day=${ifDefined(args['week-start-day'])}
      ></modus-wc-date>
    `;
  },
};

export const Default: Story = { ...Template };

const RangeTemplate: Story = {
  render: (args) => html`
    <style>
      .date-range-storybook-wrap {
        align-content: flex-start;
        display: grid;
        max-width: 560px;
        min-height: 400px;
      }
    </style>
    <div class="date-range-storybook-wrap">
      <modus-wc-date
        aria-label="Select date range"
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        ?disabled=${args.disabled}
        .feedback=${args.feedback}
        end=${args.end ?? ''}
        format=${ifDefined(args.format)}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        label=${ifDefined(args.label)}
        max=${ifDefined(args.max)}
        min=${ifDefined(args.min)}
        name=${ifDefined(args.name)}
        ?read-only=${args['read-only']}
        ?required=${args.required}
        ?show-week-numbers=${args['show-week-numbers']}
        size=${ifDefined(args.size)}
        start=${args.start ?? ''}
        type="range"
        week-start-day=${ifDefined(args['week-start-day'])}
      ></modus-wc-date>
    </div>
  `,
};

export const DateRange: Story = {
  ...RangeTemplate,
  name: 'Date Range',
  args: {
    ...meta.args,
    bordered: true,
    disabled: false,
    end: '2025-09-15',
    format: 'MMM DD, YYYY',
    label: 'Select Date',
    'read-only': false,
    required: false,
    'show-week-numbers': false,
    size: 'md',
    start: '2025-09-10',
    value: '',
    'week-start-day': 'sunday',
  },
  parameters: {
    controls: {
      exclude: ['value', 'type'],
    },
  },
  argTypes: {
    start: { control: 'text' },
    end: { control: 'text' },
  },
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
  const dateInputElement = document.querySelector('modus-wc-date');
  dateInputElement.feedback = {
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
    // Create a unique shadow host for date component
    if (!customElements.get('date-shadow-host')) {
      const DateShadowHost = createShadowHostClass<DateArgs>({
        componentTag: 'modus-wc-date',
        propsMapper: (v: DateArgs, el: HTMLElement) => {
          const dateEl = el as unknown as {
            bordered: boolean;
            customClass: string;
            disabled: boolean;
            feedback: IInputFeedbackProp;
            format?:
              | 'yyyy-mm-dd'
              | 'dd-mm-yyyy'
              | 'mm-dd-yyyy'
              | 'yyyy/mm/dd'
              | 'dd/mm/yyyy'
              | 'mm/dd/yyyy'
              | 'MMM DD, YYYY';
            inputId: string;
            inputTabIndex: number;
            label: string;
            max: string;
            min: string;
            name: string;
            readOnly: boolean;
            required: boolean;
            showWeekNumbers: boolean;
            size: string;
            value: string;
            weekStartDay: string;
          };
          dateEl.bordered = Boolean(v.bordered);
          dateEl.customClass = v['custom-class'] || '';
          dateEl.disabled = Boolean(v.disabled);
          dateEl.format = v.format;
          dateEl.inputId = v['input-id'] ?? '';
          dateEl.inputTabIndex = v['input-tab-index'] ?? -1;
          dateEl.label = v.label ?? '';
          dateEl.max = v.max ?? '';
          dateEl.min = v.min ?? '';
          dateEl.name = v.name ?? '';
          dateEl.readOnly = Boolean(v['read-only']);
          dateEl.required = Boolean(v.required);
          dateEl.showWeekNumbers = Boolean(v['show-week-numbers']);
          dateEl.size = v.size ?? '';
          dateEl.value = v.value ?? '';
          dateEl.weekStartDay = v['week-start-day'] ?? '';
        },
      });
      customElements.define('date-shadow-host', DateShadowHost);
    }

    return html`<date-shadow-host .props=${{ ...args }}></date-shadow-host>`;
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
  - Size values have changed from verbose names (\`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).
  - The \`value\` prop now always outputs **ISO 8601 format** (\`YYYY-MM-DD\`), regardless of the display format.
  Previously, \`value\` matched the display format (e.g. \`dd-mm-yyyy\`).
  - The \`format\` prop is now automatically derived from the user's locale when not explicitly set.
  Previously, it defaulted to \`dd-mm-yyyy\`. The accepted values remain the same fixed union
  (\`'yyyy-mm-dd'\`, \`'dd-mm-yyyy'\`, \`'mm-dd-yyyy'\`, \`'yyyy/mm/dd'\`, \`'dd/mm/yyyy'\`, \`'mm/dd/yyyy'\`, \`'MMM DD, YYYY'\`).
  - **Date range:** set attribute \`type="range"\` (Stencil prop \`variant="range"\`) for two pickers with a shared label. Use \`start\` and \`end\` (both ISO \`YYYY-MM-DD\`), and listen for \`rangeChange\`.

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
| format             | format           | Auto-derived from locale when not set; union type unchanged |
| helper-text        |                  | Not carried over                        |
| label              | label            |                                         |
| max                | max              |                                         |
| min                | min              |                                         |
| placeholder        |                  | Not carried over                        |
| read-only          | read-only        |                                         |
| required           | required         |                                         |
| show-calendar-icon |                  | Not carried over                        |
| size               | size             | \`medium\` → \`md\`, \`large\` → \`lg\` |
| type               | type (\`variant\` in TS) | \`single\` (default) or \`range\`; range uses \`start\` + \`end\` and emits \`rangeChange\` |
| valid-text         | feedback.message | Use \`feedback\` level                  |
| value              | value            | Now outputs ISO 8601 (\`YYYY-MM-DD\`)   |
| (n/a)              | start            | Range start (ISO) when \`type\` is \`range\` |
| (n/a)              | end              | Range end (ISO) when \`type\` is \`range\` |

#### Event Mapping

| 1.0 Event           | 2.0 Event   | Notes            |
|---------------------|-------------|------------------|
| calendarIconClicked |             | Not carried over |
| dateInputBlur       | inputBlur   |                  |
| valueChange         | inputChange, \`rangeChange\` | \`rangeChange\` when \`type\` is \`range\` |
| valueError          |             | Not carried over |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
