import{w as k}from"./decorator-DFROgT0E.js";import{k as g}from"./lit-element-HWJBnAmk.js";import{t as n}from"./if-defined-C-SyXhla.js";import"./v4-CtRu48qb.js";const N={title:"Components/Forms/Number Input",component:"modus-wc-number-input",args:{bordered:!0,disabled:!1,"input-mode":"numeric",label:"Label",size:"md",type:"number",value:""},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"input-aria-invalid":{control:{type:"select"},options:["true","false"]},"input-mode":{control:{type:"select"},options:["decimal","none","numeric"]},size:{control:{type:"select"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["number","range"]}},decorators:[k],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},s={render:e=>g`
    <modus-wc-number-input
      aria-label="Number input"
      auto-complete=${n(e["auto-complete"])}
      ?bordered=${e.bordered}
      currency-symbol=${n(e["currency-symbol"])}
      custom-class=${n(e["custom-class"])}
      ?disabled=${e.disabled}
      .feedback=${e.feedback}
      input-aria-invalid=${n(e["input-aria-invalid"])}
      input-id=${n(e["input-id"])}
      input-mode=${e["input-mode"]}
      input-tab-index=${n(e["input-tab-index"])}
      label=${n(e.label)}
      max=${n(e.max)}
      min=${n(e.min)}
      name=${n(e.name)}
      placeholder=${n(e.placeholder)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      size=${n(e.size)}
      step=${n(e.step)}
      type=${n(e.type)}
      .value=${e.value}
    ></modus-wc-number-input>
  `},r={...s},$={level:"error",message:"Value is required."},a={...s,args:{"currency-symbol":"$"}},o={...s,args:{feedback:$,required:!0}},t={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Instead of changing the internal input type for currency formatting, the component now always renders
  a number input and displays the currency symbol via the \`currency-symbol\` prop.
  - Size values have changed from verbose names (\`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop     | 2.0 Prop            | Notes                                   |
|--------------|---------------------|-----------------------------------------|
| aria-label   | aria-label          |                                         |
| currency     | currency-symbol     |                                         |
| disabled     | disabled            |                                         |
| error-text   | feedback.message    | Use \`feedback\` level                  |
| helper-text  |                     | Not carried over                        |
| label        | label               |                                         |
| locale       |                     | Not carried over                        |
| max-value    | max                 |                                         |
| min-value    | min                 |                                         |
| placeholder  | placeholder         |                                         |
| read-only    | read-only           |                                         |
| required     | required            |                                         |
| size         | size                | \`medium\` → \`md\`, \`large\` → \`lg\` |
| step         | step                |                                         |
| text-align   |                     | Not carried over, use CSS instead       |
| valid-text   | feedback.message    | Use \`feedback\` level                  |
| value        | value               |                                         |

#### Event Mapping

| 1.0 Event    | 2.0 Event    | Notes |
|--------------|--------------|-------|
| valueChange  | inputChange  |       |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>g`<div></div>`};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template,
  args: {
    'currency-symbol': '$'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,b,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template,
  args: {
    feedback: errorFeedback,
    required: true
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,f,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Instead of changing the internal input type for currency formatting, the component now always renders
  a number input and displays the currency symbol via the \\\`currency-symbol\\\` prop.
  - Size values have changed from verbose names (\\\`medium\\\`, \\\`large\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

#### Prop Mapping

| 1.0 Prop     | 2.0 Prop            | Notes                                   |
|--------------|---------------------|-----------------------------------------|
| aria-label   | aria-label          |                                         |
| currency     | currency-symbol     |                                         |
| disabled     | disabled            |                                         |
| error-text   | feedback.message    | Use \\\`feedback\\\` level                  |
| helper-text  |                     | Not carried over                        |
| label        | label               |                                         |
| locale       |                     | Not carried over                        |
| max-value    | max                 |                                         |
| min-value    | min                 |                                         |
| placeholder  | placeholder         |                                         |
| read-only    | read-only           |                                         |
| required     | required            |                                         |
| size         | size                | \\\`medium\\\` → \\\`md\\\`, \\\`large\\\` → \\\`lg\\\` |
| step         | step                |                                         |
| text-align   |                     | Not carried over, use CSS instead       |
| valid-text   | feedback.message    | Use \\\`feedback\\\` level                  |
| value        | value               |                                         |

#### Event Mapping

| 1.0 Event    | 2.0 Event    | Notes |
|--------------|--------------|-------|
| valueChange  | inputChange  |       |
        \`
      }
    },
    // To hide the actual story rendering and only show docs:
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  // Simple render function or leave it empty
  render: () => html\`<div></div>\`
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const z=["Default","Currency","WithErrorFeedback","Migration"];export{a as Currency,r as Default,t as Migration,o as WithErrorFeedback,z as __namedExportsOrder,N as default};
