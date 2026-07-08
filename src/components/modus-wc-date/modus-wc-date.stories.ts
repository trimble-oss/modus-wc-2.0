import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { IInputFeedbackProp, ModusSize, WeekStartDay } from '../types';
import { dateRangeSourceCode } from './modus-wc-date.story-source';

interface DateArgs {
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'end-value'?: string;
  feedback?: IInputFeedbackProp;
  format?:
    | 'yyyy-mm-dd'
    | 'dd-mm-yyyy'
    | 'mm-dd-yyyy'
    | 'yyyy/mm/dd'
    | 'dd/mm/yyyy'
    | 'mm/dd/yyyy'
    | 'MMM DD, YYYY';
  'hide-overflow-dates'?: boolean;
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
  type?: 'single' | 'range';
  value: string;
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
    type: {
      control: { type: 'select' },
      options: ['single', 'range'],
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
        'endCalendarMonthChange',
        'endCalendarYearChange',
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
        end-value=${ifDefined(args['end-value'])}
        .feedback=${args.feedback}
        format=${ifDefined(args.format)}
        .hideOverflowDates=${args['hide-overflow-dates']}
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
        type=${ifDefined(args.type)}
        .value=${args.value}
        week-start-day=${ifDefined(args['week-start-day'])}
      ></modus-wc-date>
    `;
  },
};

export const Default: Story = { ...Template };

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

export const Range: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: { code: dateRangeSourceCode },
      description: {
        story: `
Range mode uses \`value\` as the **start date** and \`end-value\` as the **end date** (both ISO \`YYYY-MM-DD\`).

**Hover preview (anchor model):** After both dates are selected, the anchor defaults to the end date. Dashed hover preview only extends in the clickable direction — forward past the end requires clicking the start date to swap the anchor to \`start\`. Hovering inside the confirmed range shows no preview.

**IDs and names:** \`input-id\` and \`name\` apply to the start input only. In range mode the end input uses \`{input-id}-end\` and \`{name}-end\` (or \`{generated-id}-end\` when \`input-id\` is omitted). There are no separate props for the end input id or name.

**Events in range mode:** \`inputChange\`, \`inputFocus\`, and \`inputBlur\` include \`detail.field\` (\`'start'\` or \`'end'\`). End calendar navigation emits \`endCalendarMonthChange\` / \`endCalendarYearChange\`. Completing a range emits \`rangeChange\` with \`{ startDate, endDate }\`.
        `,
      },
    },
  },
  argTypes: {
    type: { control: false, table: { disable: true } },
  },
  render: (args) => {
    return html`
      <div class="modus-wc-date-range-story-layout">
        <style>
          .modus-wc-date-range-story-layout {
            align-items: flex-start;
            display: flex;
            justify-content: center;
            min-height: 450px;
            padding-top: var(--modus-wc-spacing-xl, 2rem);
            width: 100%;
          }

          .modus-wc-date-range-story {
            width: 780px;
          }

          .modus-wc-date-range-story modus-wc-date {
            display: block;
            width: 100%;
          }
        </style>
        <div class="modus-wc-date-range-story">
          <modus-wc-date
            aria-label="Date range input"
            ?bordered=${args.bordered}
            custom-class=${ifDefined(args['custom-class'])}
            ?disabled=${args.disabled}
            end-value=${ifDefined(args['end-value'])}
            .feedback=${args.feedback}
            format=${ifDefined(args.format)}
            .hideOverflowDates=${args['hide-overflow-dates']}
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
            type="range"
            .value=${args.value}
            week-start-day=${ifDefined(args['week-start-day'])}
          ></modus-wc-date>
        </div>
      </div>
    `;
  },
  args: {
    label: 'Select Date',
    value: '2026-06-10',
    'end-value': '2026-07-08',
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
            hideOverflowDates: boolean;
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
          if (v['hide-overflow-dates'] !== undefined) {
            dateEl.hideOverflowDates = v['hide-overflow-dates'];
          }
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
| type               |                  | Not carried over                        |
| valid-text         | feedback.message | Use \`feedback\` level                  |
| value              | value            | Now outputs ISO 8601 (\`YYYY-MM-DD\`); start date in range mode |
|                    | end-value        | End date in range mode (ISO \`YYYY-MM-DD\`) |
|                    | input-id (end)   | Range mode only: \`{input-id}-end\`; no separate prop |
|                    | name (end)       | Range mode only: \`{name}-end\`; no separate prop |
|                    | type             | \`'single'\` (default) or \`'range'\` |
|                    | hide-overflow-dates | Defaults to \`true\` in range mode |

#### Event Mapping

| 1.0 Event           | 2.0 Event   | Notes            |
|---------------------|-------------|------------------|
| calendarIconClicked |             | Not carried over |
| dateInputBlur       | inputBlur   | Range mode: \`detail.field\` is \`'start'\` or \`'end'\` |
| valueChange         | inputChange | Range mode: \`detail.field\` is \`'start'\` or \`'end'\` |
| valueError          |             | Not carried over |
|                     | rangeChange | Range mode only: \`{ startDate, endDate }\` |
|                     | endCalendarMonthChange | Range mode: end calendar month nav |
|                     | endCalendarYearChange  | Range mode: end calendar year nav |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
