import{w as M}from"./decorator-D4YmxizW.js";import{b as i}from"./lit-element-DgBvYnzn.js";import{o as a}from"./if-defined-BnVFTJ4o.js";import{c as I}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const O={title:"Components/Forms/Date",component:"modus-wc-date",args:{bordered:!0,"custom-class":"",disabled:!1,label:"Label","read-only":!1,required:!1,"show-week-numbers":!1,size:"md",value:"","week-start-day":"sunday"},argTypes:{feedback:{table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["single","range"]},format:{control:{type:"select"},options:[void 0,"yyyy-mm-dd","dd-mm-yyyy","mm-dd-yyyy","yyyy/mm/dd","dd/mm/yyyy","mm/dd/yyyy","MMM DD, YYYY"]},"week-start-day":{control:{type:"select"},options:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]}},decorators:[M],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus","calendarMonthChange","calendarYearChange","rangeChange"]}}},E={render:e=>i`
      <style>
        div[id^='story--components-forms-date--default'] {
          min-height: 400px;
          width: 300px;
        }
      </style>
      <modus-wc-date
        aria-label="Date input"
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        end-value=${a(e["end-value"])}
        .feedback=${e.feedback}
        format=${a(e.format)}
        ?hide-overflow-dates=${e["hide-overflow-dates"]}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        label=${a(e.label)}
        max=${a(e.max)}
        min=${a(e.min)}
        name=${a(e.name)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        ?show-week-numbers=${e["show-week-numbers"]}
        size=${a(e.size)}
        type=${a(e.type)}
        .value=${e.value}
        week-start-day=${a(e["week-start-day"])}
      ></modus-wc-date>
    `},r={...E},S={level:"error",message:"Value is required."},d={...E,args:{feedback:S,required:!0},parameters:{docs:{source:{transform:e=>`${e}
<script>
  const dateInputElement = document.querySelector('modus-wc-date');
  dateInputElement.feedback = {
    level: 'error',
    message: 'Value is required.'
  };
<\/script>`}}}},o={parameters:{layout:"fullscreen"},argTypes:{type:{control:!1,table:{disable:!0}}},render:e=>i`
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
            ?bordered=${e.bordered}
            custom-class=${a(e["custom-class"])}
            ?disabled=${e.disabled}
            end-value=${a(e["end-value"])}
            .feedback=${e.feedback}
            format=${a(e.format)}
            ?hide-overflow-dates=${e["hide-overflow-dates"]}
            input-id=${a(e["input-id"])}
            input-tab-index=${a(e["input-tab-index"])}
            label=${a(e.label)}
            max=${a(e.max)}
            min=${a(e.min)}
            name=${a(e.name)}
            ?read-only=${e["read-only"]}
            ?required=${e.required}
            ?show-week-numbers=${e["show-week-numbers"]}
            size=${a(e.size)}
            type="range"
            .value=${e.value}
            week-start-day=${a(e["week-start-day"])}
          ></modus-wc-date>
        </div>
      </div>
    `,args:{label:"Select Date",value:"2026-06-10","end-value":"2026-07-08"}},s={render:e=>{if(!customElements.get("date-shadow-host")){const Y=I({componentTag:"modus-wc-date",propsMapper:(n,N)=>{const t=N;t.bordered=!!n.bordered,t.customClass=n["custom-class"]||"",t.disabled=!!n.disabled,t.format=n.format,n["hide-overflow-dates"]!==void 0&&(t.hideOverflowDates=n["hide-overflow-dates"]),t.inputId=n["input-id"]??"",t.inputTabIndex=n["input-tab-index"]??-1,t.label=n.label??"",t.max=n.max??"",t.min=n.min??"",t.name=n.name??"",t.readOnly=!!n["read-only"],t.required=!!n.required,t.showWeekNumbers=!!n["show-week-numbers"],t.size=n.size??"",t.value=n.value??"",t.weekStartDay=n["week-start-day"]??""}});customElements.define("date-shadow-host",Y)}return i`<date-shadow-host .props=${{...e}}></date-shadow-host>`}},l={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled\n  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for\n  additional info and examples.\n  - Size values have changed from verbose names (`medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n  - The `value` prop now always outputs **ISO 8601 format** (`YYYY-MM-DD`), regardless of the display format.\n  Previously, `value` matched the display format (e.g. `dd-mm-yyyy`).\n  - The `format` prop is now automatically derived from the user's locale when not explicitly set.\n  Previously, it defaulted to `dd-mm-yyyy`. The accepted values remain the same fixed union\n  (`'yyyy-mm-dd'`, `'dd-mm-yyyy'`, `'mm-dd-yyyy'`, `'yyyy/mm/dd'`, `'dd/mm/yyyy'`, `'mm/dd/yyyy'`, `'MMM DD, YYYY'`).\n\n#### Prop Mapping\n\n| 1.0 Prop           | 2.0 Prop         | Notes                                   |\n|--------------------|------------------|-----------------------------------------|\n| allow-chars-regex  |                  | Not carried over                        |\n| alt-formats        |                  | Not carried over                        |\n| aria-label         | aria-label       |                                         |\n| auto-focus-input   |                  | Not carried over                        |\n| disabled           | disabled         |                                         |\n| disable-validation |                  | Not carried over                        |\n| error-text         | feedback.message | Use `feedback` level                  |\n| filler-date        |                  | Not carried over                        |\n| format             | format           | Auto-derived from locale when not set; union type unchanged |\n| helper-text        |                  | Not carried over                        |\n| label              | label            |                                         |\n| max                | max              |                                         |\n| min                | min              |                                         |\n| placeholder        |                  | Not carried over                        |\n| read-only          | read-only        |                                         |\n| required           | required         |                                         |\n| show-calendar-icon |                  | Not carried over                        |\n| size               | size             | `medium` → `md`, `large` → `lg` |\n| type               |                  | Not carried over                        |\n| valid-text         | feedback.message | Use `feedback` level                  |\n| value              | value            | Now outputs ISO 8601 (`YYYY-MM-DD`)   |\n\n#### Event Mapping\n\n| 1.0 Event           | 2.0 Event   | Notes            |\n|---------------------|-------------|------------------|\n| calendarIconClicked |             | Not carried over |\n| dateInputBlur       | inputBlur   |                  |\n| valueChange         | inputChange |                  |\n| valueError          |             | Not carried over |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>i`<div></div>`};var m,u,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var y,p,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  args: {
    feedback: errorFeedback,
    required: true
  },
  parameters: {
    docs: {
      source: {
        transform: src => \`\${src}
<script>
  const dateInputElement = document.querySelector('modus-wc-date');
  dateInputElement.feedback = {
    level: 'error',
    message: 'Value is required.'
  };
<\/script>\`
      }
    }
  }
}`,...(f=(p=d.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,v,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    type: {
      control: false,
      table: {
        disable: true
      }
    }
  },
  render: args => {
    return html\`
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
            ?bordered=\${args.bordered}
            custom-class=\${ifDefined(args['custom-class'])}
            ?disabled=\${args.disabled}
            end-value=\${ifDefined(args['end-value'])}
            .feedback=\${args.feedback}
            format=\${ifDefined(args.format)}
            ?hide-overflow-dates=\${args['hide-overflow-dates']}
            input-id=\${ifDefined(args['input-id'])}
            input-tab-index=\${ifDefined(args['input-tab-index'])}
            label=\${ifDefined(args.label)}
            max=\${ifDefined(args.max)}
            min=\${ifDefined(args.min)}
            name=\${ifDefined(args.name)}
            ?read-only=\${args['read-only']}
            ?required=\${args.required}
            ?show-week-numbers=\${args['show-week-numbers']}
            size=\${ifDefined(args.size)}
            type="range"
            .value=\${args.value}
            week-start-day=\${ifDefined(args['week-start-day'])}
          ></modus-wc-date>
        </div>
      </div>
    \`;
  },
  args: {
    label: 'Select Date',
    value: '2026-06-10',
    'end-value': '2026-07-08'
  }
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var w,g,$;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
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
            format?: 'yyyy-mm-dd' | 'dd-mm-yyyy' | 'mm-dd-yyyy' | 'yyyy/mm/dd' | 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'MMM DD, YYYY';
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
        }
      });
      customElements.define('date-shadow-host', DateShadowHost);
    }
    return html\`<date-shadow-host .props=\${{
      ...args
    }}></date-shadow-host>\`;
  }
}`,...($=(g=s.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var k,x,D;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\\\`medium\\\`, \\\`large\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).
  - The \\\`value\\\` prop now always outputs **ISO 8601 format** (\\\`YYYY-MM-DD\\\`), regardless of the display format.
  Previously, \\\`value\\\` matched the display format (e.g. \\\`dd-mm-yyyy\\\`).
  - The \\\`format\\\` prop is now automatically derived from the user's locale when not explicitly set.
  Previously, it defaulted to \\\`dd-mm-yyyy\\\`. The accepted values remain the same fixed union
  (\\\`'yyyy-mm-dd'\\\`, \\\`'dd-mm-yyyy'\\\`, \\\`'mm-dd-yyyy'\\\`, \\\`'yyyy/mm/dd'\\\`, \\\`'dd/mm/yyyy'\\\`, \\\`'mm/dd/yyyy'\\\`, \\\`'MMM DD, YYYY'\\\`).

#### Prop Mapping

| 1.0 Prop           | 2.0 Prop         | Notes                                   |
|--------------------|------------------|-----------------------------------------|
| allow-chars-regex  |                  | Not carried over                        |
| alt-formats        |                  | Not carried over                        |
| aria-label         | aria-label       |                                         |
| auto-focus-input   |                  | Not carried over                        |
| disabled           | disabled         |                                         |
| disable-validation |                  | Not carried over                        |
| error-text         | feedback.message | Use \\\`feedback\\\` level                  |
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
| size               | size             | \\\`medium\\\` → \\\`md\\\`, \\\`large\\\` → \\\`lg\\\` |
| type               |                  | Not carried over                        |
| valid-text         | feedback.message | Use \\\`feedback\\\` level                  |
| value              | value            | Now outputs ISO 8601 (\\\`YYYY-MM-DD\\\`)   |

#### Event Mapping

| 1.0 Event           | 2.0 Event   | Notes            |
|---------------------|-------------|------------------|
| calendarIconClicked |             | Not carried over |
| dateInputBlur       | inputBlur   |                  |
| valueChange         | inputChange |                  |
| valueError          |             | Not carried over |
        \`
      }
    },
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  render: () => html\`<div></div>\`
}`,...(D=(x=l.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const F=["Default","WithErrorFeedback","Range","ShadowDomParent","Migration"];export{r as Default,l as Migration,o as Range,s as ShadowDomParent,d as WithErrorFeedback,F as __namedExportsOrder,O as default};
