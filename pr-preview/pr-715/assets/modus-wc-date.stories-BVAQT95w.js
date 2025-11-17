import{w as b}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const $={title:"Components/Forms/Date",component:"modus-wc-date",args:{bordered:!0,"custom-class":"",disabled:!1,label:"Label","read-only":!1,required:!1,"show-week-numbers":!1,size:"md",value:"","week-start-day":"sunday"},argTypes:{feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]},format:{control:{type:"select"},options:["yyyy-mm-dd","dd-mm-yyyy","MMM DD, YYYY","yyyy/mm/dd","dd/mm/yyyy"]},"week-start-day":{control:{type:"select"},options:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]}},decorators:[b],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus","calendarMonthChange","calendarYearChange"]}}},r={render:e=>o`
      <style>
        div[id^='story--components-forms-date--default'] {
          min-height: 400px;
        }
      </style>
      <modus-wc-date
        aria-label="Date input"
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        .feedback=${e.feedback}
        format=${a(e.format)}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        label=${a(e.label)}
        max=${a(e.max)}
        min=${a(e.min)}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        ?show-week-numbers=${e["show-week-numbers"]}
        size=${a(e.size)}
        .value=${e.value}
        week-start-day=${a(e["week-start-day"])}
      ></modus-wc-date>
    `},v={level:"error",message:"Value is required."},n={render:e=>o`
    <style>
      div[id^='story--components-forms-date--with-error-feedback'] {
        min-height: 400px;
      }
    </style>
    <modus-wc-date
      aria-label="Date input"
      .feedback=${v}
      label=${a(e.label)}
      ?required=${!0}
      ?show-week-numbers=${e["show-week-numbers"]}
      .value=${e.value}
      week-start-day=${a(e["week-start-day"])}
    ></modus-wc-date>
  `},t={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var d,s,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <style>
        div[id^='story--components-forms-date--default'] {
          min-height: 400px;
        }
      </style>
      <modus-wc-date
        aria-label="Date input"
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        .feedback=\${args.feedback}
        format=\${ifDefined(args.format)}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        label=\${ifDefined(args.label)}
        max=\${ifDefined(args.max)}
        min=\${ifDefined(args.min)}
        name=\${ifDefined(args.name)}
        placeholder=\${ifDefined(args.placeholder)}
        ?read-only=\${args['read-only']}
        ?required=\${args.required}
        ?show-week-numbers=\${args['show-week-numbers']}
        size=\${ifDefined(args.size)}
        .value=\${args.value}
        week-start-day=\${ifDefined(args['week-start-day'])}
      ></modus-wc-date>
    \`;
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,c,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => html\`
    <style>
      div[id^='story--components-forms-date--with-error-feedback'] {
        min-height: 400px;
      }
    </style>
    <modus-wc-date
      aria-label="Date input"
      .feedback=\${errorFeedback}
      label=\${ifDefined(args.label)}
      ?required=\${true}
      ?show-week-numbers=\${args['show-week-numbers']}
      .value=\${args.value}
      week-start-day=\${ifDefined(args['week-start-day'])}
    ></modus-wc-date>
  \`
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const x=["Default","WithErrorFeedback","Migration"];export{r as Default,t as Migration,n as WithErrorFeedback,x as __namedExportsOrder,$ as default};
