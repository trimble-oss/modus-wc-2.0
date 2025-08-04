import{w as f}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const v=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],S={title:"Components/Forms/Select",component:"modus-wc-select",args:{bordered:!0,disabled:!1,label:"Label",options:v,size:"md",value:""},argTypes:{feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"input-aria-invalid":{control:{type:"select"},options:["true","false"]},options:{description:"Array of option objects for the select dropdown",table:{type:{detail:`
            Interface: ISelectOption
            Properties:
            - disabled (boolean, optional): Whether the option is disabled and cannot be selected
            - label (string): Display text for the option
            - value (string): The value of the option
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[f],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>o`
    <modus-wc-select
      aria-label="Select input"
      ?bordered=${e.bordered}
      custom-class=${a(e["custom-class"])}
      ?disabled=${e.disabled}
      .feedback=${e.feedback}
      input-aria-invalid=${a(e["input-aria-invalid"])}
      input-id=${a(e["input-id"])}
      input-tab-index=${a(e["input-tab-index"])}
      label=${a(e.label)}
      name=${a(e.name)}
      .options=${e.options}
      ?required=${e.required}
      size=${a(e.size)}
      .value=${e.value}
    ></modus-wc-select>
  `},g={level:"error",message:"Value is required."},t={render:e=>o`
    <modus-wc-select
      aria-label="Select input"
      .feedback=${g}
      label=${a(e.label)}
      .options=${[]}
      ?required=${!0}
      .value=${e.value}
    ></modus-wc-select>
  `},r={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - The options format has changed to use a standardized \`ISelectOption\` object array.
  - Size values have changed from verbose names (\`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop              | 2.0 Prop            | Notes                                                |
|-----------------------|---------------------|------------------------------------------------------|
| aria-label            | aria-label          |                                                      |
| disabled              | disabled            |                                                      |
| error-text            | feedback.message    | Use \`feedback\` level                               |
| helper-text           |                     | Not carried over                                     |
| label                 | label               |                                                      |
| options               | options             | Format changed to require array of \`ISelectOption\` objects |
| options-display-prop  |                     | Not carried over                                     |
| placeholder           |                     | Not carried over                                     |
| required              | required            |                                                      |
| size                  | size                | \`medium\` → \`md\`, \`large\` → \`lg\`              |
| valid-text            | feedback.message    | Use \`feedback\` level                               |
| value                 | value               |                                                      |

#### Event Mapping

| 1.0 Event    | 2.0 Event   | Notes            |
|--------------|-------------|------------------|
| valueChange  | inputChange |                  |
| inputBlur    | inputBlur   |                  |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var i,s,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-select
      aria-label="Select input"
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      ?disabled=\${args.disabled}
      .feedback=\${args.feedback}
      input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
      input-id=\${ifDefined(args['input-id'])}
      input-tab-index=\${ifDefined(args['input-tab-index'])}
      label=\${ifDefined(args.label)}
      name=\${ifDefined(args.name)}
      .options=\${args.options}
      ?required=\${args.required}
      size=\${ifDefined(args.size)}
      .value=\${args.value}
    ></modus-wc-select>
  \`
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-select
      aria-label="Select input"
      .feedback=\${errorFeedback}
      label=\${ifDefined(args.label)}
      .options=\${[]}
      ?required=\${true}
      .value=\${args.value}
    ></modus-wc-select>
  \`
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - The options format has changed to use a standardized \\\`ISelectOption\\\` object array.
  - Size values have changed from verbose names (\\\`medium\\\`, \\\`large\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

#### Prop Mapping

| 1.0 Prop              | 2.0 Prop            | Notes                                                |
|-----------------------|---------------------|------------------------------------------------------|
| aria-label            | aria-label          |                                                      |
| disabled              | disabled            |                                                      |
| error-text            | feedback.message    | Use \\\`feedback\\\` level                               |
| helper-text           |                     | Not carried over                                     |
| label                 | label               |                                                      |
| options               | options             | Format changed to require array of \\\`ISelectOption\\\` objects |
| options-display-prop  |                     | Not carried over                                     |
| placeholder           |                     | Not carried over                                     |
| required              | required            |                                                      |
| size                  | size                | \\\`medium\\\` → \\\`md\\\`, \\\`large\\\` → \\\`lg\\\`              |
| valid-text            | feedback.message    | Use \\\`feedback\\\` level                               |
| value                 | value               |                                                      |

#### Event Mapping

| 1.0 Event    | 2.0 Event   | Notes            |
|--------------|-------------|------------------|
| valueChange  | inputChange |                  |
| inputBlur    | inputBlur   |                  |
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
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const x=["Default","WithErrorFeedback","Migration"];export{n as Default,r as Migration,t as WithErrorFeedback,x as __namedExportsOrder,S as default};
