import{w as u}from"./decorator-DFROgT0E.js";import{k as m}from"./lit-element-HWJBnAmk.js";import{t as n}from"./if-defined-C-SyXhla.js";import"./v4-CtRu48qb.js";const f={title:"Components/Forms/Radio",component:"modus-wc-radio",args:{"custom-class":"",disabled:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[u],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},a={render:e=>m`
      <modus-wc-radio
        aria-label="Radio"
        custom-class=${n(e["custom-class"])}
        ?disabled=${e.disabled}
        input-id=${n(e["input-id"])}
        input-tab-index=${n(e["input-tab-index"])}
        label=${n(e.label)}
        name=${n(e.name)}
        ?required=${e.required}
        size=${n(e.size)}
        .value=${e.value}
      ></modus-wc-radio>
    `},o={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\`small\`, \`medium\`) to abbreviations (\`xs\`, \`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop            | 2.0 Prop    | Notes                                                |
|---------------------|-------------|----------------------------------------------------- |
| checked             | value       |                                                      |
| disabled            | disabled    |                                                      |
| handle-button-click |             | Not carried over                                     |
| handle-keydown      |             | Not carried over                                     |
| id                  | input-id    |                                                      |
| label               | label       |                                                      |
| name                | name        |                                                      |
| ref                 |             | Not carried over                                     |
| size                | size        | \`small\` → \`sm\`, \`medium\` → \`md\`              |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes                                               |
|-------------|-------------|-----------------------------------------------------|
| buttonClick | inputChange | Now emits an \`InputEvent\` instead of a \`string\` |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>m`<div></div>`};var t,i,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-radio
        aria-label="Radio"
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        label=\${ifDefined(args.label)}
        name=\${ifDefined(args.name)}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        .value=\${args.value}
      ></modus-wc-radio>
    \`;
  }
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var r,d,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\\\`small\\\`, \\\`medium\\\`) to abbreviations (\\\`xs\\\`, \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

#### Prop Mapping

| 1.0 Prop            | 2.0 Prop    | Notes                                                |
|---------------------|-------------|----------------------------------------------------- |
| checked             | value       |                                                      |
| disabled            | disabled    |                                                      |
| handle-button-click |             | Not carried over                                     |
| handle-keydown      |             | Not carried over                                     |
| id                  | input-id    |                                                      |
| label               | label       |                                                      |
| name                | name        |                                                      |
| ref                 |             | Not carried over                                     |
| size                | size        | \\\`small\\\` → \\\`sm\\\`, \\\`medium\\\` → \\\`md\\\`              |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes                                               |
|-------------|-------------|-----------------------------------------------------|
| buttonClick | inputChange | Now emits an \\\`InputEvent\\\` instead of a \\\`string\\\` |
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
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const g=["Default","Migration"];export{a as Default,o as Migration,g as __namedExportsOrder,f as default};
