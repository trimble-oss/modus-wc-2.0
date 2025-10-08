import{w as k}from"./decorator-D4YmxizW.js";import{x as r}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const C={title:"Components/Forms/Date",component:"modus-wc-date",args:{bordered:!0,"custom-class":"",disabled:!1,label:"Label","read-only":!1,required:!1,size:"md",value:""},argTypes:{feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]},format:{control:{type:"select"},options:["yyyy-mm-dd","dd-mm-yyyy","MMM DD, YYYY"]}},decorators:[k],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>r`
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
        size=${a(e.size)}
        .value=${e.value}
      ></modus-wc-date>
    `},F={level:"error",message:"Value is required."},t={render:e=>r`
    <modus-wc-date
      aria-label="Date input"
      .feedback=${F}
      label=${a(e.label)}
      ?required=${!0}
      .value=${e.value}
    ></modus-wc-date>
  `},o={render:()=>r`
    <modus-wc-date
      aria-label="Date input with DD-MM-YYYY format"
      label="Date (DD-MM-YYYY)"
      format="dd-mm-yyyy"
      value="15-10-2025"
    ></modus-wc-date>
  `},d={render:()=>r`
    <modus-wc-date
      aria-label="Date input with MMM DD, YYYY format"
      label="Date (MMM DD, YYYY)"
      format="MMM DD, YYYY"
      value="Oct 15, 2025"
    ></modus-wc-date>
  `},i={render:()=>r`
    <modus-wc-date
      aria-label="Date input with min/max"
      label="Select a date (Oct 10 - Oct 20, 2025)"
      min="2025-10-10"
      max="2025-10-20"
      value="2025-10-15"
    ></modus-wc-date>
  `},s={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Format handling is no longer supported. The component now uses the standard HTML date input format (ISO 8601 \`yyyy-mm-dd\`).
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
| format             |                  | Not carried over                        |
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var l,c,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return html\`
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
        size=\${ifDefined(args.size)}
        .value=\${args.value}
      ></modus-wc-date>
    \`;
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-date
      aria-label="Date input"
      .feedback=\${errorFeedback}
      label=\${ifDefined(args.label)}
      ?required=\${true}
      .value=\${args.value}
    ></modus-wc-date>
  \`
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,v,Y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <modus-wc-date
      aria-label="Date input with DD-MM-YYYY format"
      label="Date (DD-MM-YYYY)"
      format="dd-mm-yyyy"
      value="15-10-2025"
    ></modus-wc-date>
  \`
}`,...(Y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:Y.source}}};var D,g,h;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <modus-wc-date
      aria-label="Date input with MMM DD, YYYY format"
      label="Date (MMM DD, YYYY)"
      format="MMM DD, YYYY"
      value="Oct 15, 2025"
    ></modus-wc-date>
  \`
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var M,y,w;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    <modus-wc-date
      aria-label="Date input with min/max"
      label="Select a date (Oct 10 - Oct 20, 2025)"
      min="2025-10-10"
      max="2025-10-20"
      value="2025-10-15"
    ></modus-wc-date>
  \`
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var $,x,N;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Format handling is no longer supported. The component now uses the standard HTML date input format (ISO 8601 \\\`yyyy-mm-dd\\\`).
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
| format             |                  | Not carried over                        |
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
}`,...(N=(x=s.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const O=["Default","WithErrorFeedback","DDMMYYYYFormat","MMMDDYYYYFormat","WithMinMax","Migration"];export{o as DDMMYYYYFormat,n as Default,d as MMMDDYYYYFormat,s as Migration,t as WithErrorFeedback,i as WithMinMax,O as __namedExportsOrder,C as default};
