import{w as N}from"./decorator-D4YmxizW.js";import{x as l}from"./lit-element-C8zulti1.js";import{o as n}from"./if-defined-yv6owfG8.js";import{c as I}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const M={title:"Components/Forms/Date",component:"modus-wc-date",args:{bordered:!0,"custom-class":"",disabled:!1,label:"Label","read-only":!1,required:!1,"show-week-numbers":!1,size:"md",value:"","week-start-day":"sunday"},argTypes:{feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]},format:{control:{type:"select"},options:["yyyy-mm-dd","dd-mm-yyyy","mm-dd-yyyy","MMM DD, YYYY","yyyy/mm/dd","dd/mm/yyyy","mm/dd/yyyy"]},"week-start-day":{control:{type:"select"},options:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]}},decorators:[N],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus","calendarMonthChange","calendarYearChange"]}}},k={render:e=>l`
      <style>
        div[id^='story--components-forms-date--default'] {
          min-height: 400px;
          width: 300px;
        }
      </style>
      <modus-wc-date
        aria-label="Date input"
        ?bordered=${e.bordered}
        custom-class=${n(e["custom-class"])}
        ?disabled=${e.disabled}
        .feedback=${e.feedback}
        format=${n(e.format)}
        input-id=${n(e["input-id"])}
        input-tab-index=${n(e["input-tab-index"])}
        label=${n(e.label)}
        max=${n(e.max)}
        min=${n(e.min)}
        name=${n(e.name)}
        placeholder=${n(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        ?show-week-numbers=${e["show-week-numbers"]}
        size=${n(e.size)}
        .value=${e.value}
        week-start-day=${n(e["week-start-day"])}
      ></modus-wc-date>
    `},t={...k},$={level:"error",message:"Value is required."},o={...k,args:{feedback:$,required:!0},parameters:{docs:{source:{transform:e=>`${e}
<script>
  const dateInputElement = document.querySelector('modus-wc-date');
  dateInputElement.feedback = {
    level: 'error',
    message: 'Value is required.'
  };
<\/script>`}}}},d={render:e=>{if(!customElements.get("date-shadow-host")){const E=I({componentTag:"modus-wc-date",propsMapper:(a,x)=>{const r=x;r.bordered=!!a.bordered,r.customClass=a["custom-class"]||"",r.disabled=!!a.disabled,r.format=a.format??"",r.inputId=a["input-id"]??"",r.inputTabIndex=a["input-tab-index"]??-1,r.label=a.label??"",r.max=a.max??"",r.min=a.min??"",r.name=a.name??"",r.placeholder=a.placeholder??"",r.readOnly=!!a["read-only"],r.required=!!a.required,r.showWeekNumbers=!!a["show-week-numbers"],r.size=a.size??"",r.value=a.value??"",r.weekStartDay=a["week-start-day"]??""}});customElements.define("date-shadow-host",E)}return l`<date-shadow-host .props=${{...e}}></date-shadow-host>`}},s={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
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
| format             | format           |                                         |
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>l`<div></div>`};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,v,f;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
            format: string;
            inputId: string;
            inputTabIndex: number;
            label: string;
            max: string;
            min: string;
            name: string;
            placeholder: string;
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
          dateEl.format = v.format ?? '';
          dateEl.inputId = v['input-id'] ?? '';
          dateEl.inputTabIndex = v['input-tab-index'] ?? -1;
          dateEl.label = v.label ?? '';
          dateEl.max = v.max ?? '';
          dateEl.min = v.min ?? '';
          dateEl.name = v.name ?? '';
          dateEl.placeholder = v.placeholder ?? '';
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
}`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,w,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\\\`medium\\\`, \\\`large\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

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
| format             | format           |                                         |
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
| value              | value            |                                         |

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
}`,...(g=(w=s.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};const T=["Default","WithErrorFeedback","ShadowDomParent","Migration"];export{t as Default,s as Migration,d as ShadowDomParent,o as WithErrorFeedback,T as __namedExportsOrder,M as default};
