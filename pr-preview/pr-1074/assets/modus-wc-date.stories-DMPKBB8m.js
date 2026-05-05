import{w as Y}from"./decorator-D4YmxizW.js";import{x as l}from"./lit-element-CucEn6F2.js";import{o as r}from"./if-defined-BiZP-SBN.js";import{c as N}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const T={title:"Components/Forms/Date",component:"modus-wc-date",args:{bordered:!0,"custom-class":"",disabled:!1,label:"Label","read-only":!1,required:!1,"show-week-numbers":!1,size:"md",value:"","week-start-day":"sunday"},argTypes:{feedback:{table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]},format:{control:{type:"select"},options:[void 0,"yyyy-mm-dd","dd-mm-yyyy","mm-dd-yyyy","yyyy/mm/dd","dd/mm/yyyy","mm/dd/yyyy","MMM DD, YYYY"]},"week-start-day":{control:{type:"select"},options:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]}},decorators:[Y],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus","calendarMonthChange","calendarYearChange"]}}},k={render:e=>l`
      <style>
        div[id^='story--components-forms-date--default'] {
          min-height: 400px;
          width: 300px;
        }
      </style>
      <modus-wc-date
        aria-label="Date input"
        ?bordered=${e.bordered}
        custom-class=${r(e["custom-class"])}
        ?disabled=${e.disabled}
        .feedback=${e.feedback}
        format=${r(e.format)}
        input-id=${r(e["input-id"])}
        input-tab-index=${r(e["input-tab-index"])}
        label=${r(e.label)}
        max=${r(e.max)}
        min=${r(e.min)}
        name=${r(e.name)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        ?show-week-numbers=${e["show-week-numbers"]}
        size=${r(e.size)}
        .value=${e.value}
        week-start-day=${r(e["week-start-day"])}
      ></modus-wc-date>
    `},n={...k},D={level:"error",message:"Value is required."},o={...k,args:{feedback:D,required:!0},parameters:{docs:{source:{transform:e=>`${e}
<script>
  const dateInputElement = document.querySelector('modus-wc-date');
  dateInputElement.feedback = {
    level: 'error',
    message: 'Value is required.'
  };
<\/script>`}}}},d={render:e=>{if(!customElements.get("date-shadow-host")){const E=N({componentTag:"modus-wc-date",propsMapper:(a,x)=>{const t=x;t.bordered=!!a.bordered,t.customClass=a["custom-class"]||"",t.disabled=!!a.disabled,t.format=a.format,t.inputId=a["input-id"]??"",t.inputTabIndex=a["input-tab-index"]??-1,t.label=a.label??"",t.max=a.max??"",t.min=a.min??"",t.name=a.name??"",t.readOnly=!!a["read-only"],t.required=!!a.required,t.showWeekNumbers=!!a["show-week-numbers"],t.size=a.size??"",t.value=a.value??"",t.weekStartDay=a["week-start-day"]??""}});customElements.define("date-shadow-host",E)}return l`<date-shadow-host .props=${{...e}}></date-shadow-host>`}},s={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled\n  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for\n  additional info and examples.\n  - Size values have changed from verbose names (`medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n  - The `value` prop now always outputs **ISO 8601 format** (`YYYY-MM-DD`), regardless of the display format.\n  Previously, `value` matched the display format (e.g. `dd-mm-yyyy`).\n  - The `format` prop is now automatically derived from the user's locale when not explicitly set.\n  Previously, it defaulted to `dd-mm-yyyy`. The accepted values remain the same fixed union\n  (`'yyyy-mm-dd'`, `'dd-mm-yyyy'`, `'mm-dd-yyyy'`, `'yyyy/mm/dd'`, `'dd/mm/yyyy'`, `'mm/dd/yyyy'`, `'MMM DD, YYYY'`).\n\n#### Prop Mapping\n\n| 1.0 Prop           | 2.0 Prop         | Notes                                   |\n|--------------------|------------------|-----------------------------------------|\n| allow-chars-regex  |                  | Not carried over                        |\n| alt-formats        |                  | Not carried over                        |\n| aria-label         | aria-label       |                                         |\n| auto-focus-input   |                  | Not carried over                        |\n| disabled           | disabled         |                                         |\n| disable-validation |                  | Not carried over                        |\n| error-text         | feedback.message | Use `feedback` level                  |\n| filler-date        |                  | Not carried over                        |\n| format             | format           | Auto-derived from locale when not set; union type unchanged |\n| helper-text        |                  | Not carried over                        |\n| label              | label            |                                         |\n| max                | max              |                                         |\n| min                | min              |                                         |\n| placeholder        |                  | Not carried over                        |\n| read-only          | read-only        |                                         |\n| required           | required         |                                         |\n| show-calendar-icon |                  | Not carried over                        |\n| size               | size             | `medium` → `md`, `large` → `lg` |\n| type               |                  | Not carried over                        |\n| valid-text         | feedback.message | Use `feedback` level                  |\n| value              | value            | Now outputs ISO 8601 (`YYYY-MM-DD`)   |\n\n#### Event Mapping\n\n| 1.0 Event           | 2.0 Event   | Notes            |\n|---------------------|-------------|------------------|\n| calendarIconClicked |             | Not carried over |\n| dateInputBlur       | inputBlur   |                  |\n| valueChange         | inputChange |                  |\n| valueError          |             | Not carried over |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>l`<div></div>`};var i,m,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,y,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(y=o.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var b,h,v;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        }
      });
      customElements.define('date-shadow-host', DateShadowHost);
    }
    return html\`<date-shadow-host .props=\${{
      ...args
    }}></date-shadow-host>\`;
  }
}`,...(v=(h=d.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,w,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(w=s.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};const B=["Default","WithErrorFeedback","ShadowDomParent","Migration"];export{n as Default,s as Migration,d as ShadowDomParent,o as WithErrorFeedback,B as __namedExportsOrder,T as default};
