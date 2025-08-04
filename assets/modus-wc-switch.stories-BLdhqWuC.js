import{w as c}from"./decorator-D4YmxizW.js";import{x as m}from"./lit-element-C8zulti1.js";import{o as n}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const g={title:"Components/Forms/Switch",component:"modus-wc-switch",args:{"custom-class":"",disabled:!1,indeterminate:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[c],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},a={render:e=>m`
      <modus-wc-switch
        aria-label="Toggle"
        custom-class=${n(e["custom-class"])}
        ?disabled=${e.disabled}
        .indeterminate=${e.indeterminate}
        input-id=${n(e["input-id"])}
        input-tab-index=${n(e["input-tab-index"])}
        label=${n(e.label)}
        name=${n(e.name)}
        ?required=${e.required}
        size=${n(e.size)}
        .value=${e.value}
      ></modus-wc-switch>
    `},s={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs documentation for additional info and examples.
  - \`checked\` prop has been renamed to \`value\` to maintain consistency across form components.
  - Size values have changed from verbose names (\`small\`, \`medium\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop         | 2.0 Prop            | Notes                                                       |
|------------------|---------------------|-------------------------------------------------------------|
| aria-label       | aria-label          |                                                             |
| checked          | value               |                                                             |
| disabled         | disabled            |                                                             |
| label            | label               |                                                             |
| size             | size                | \`small\` → \`sm\`, \`medium\` → \`md\`                     |

#### Event Mapping

| 1.0 Event      | 2.0 Event      | Notes                                                 |
|----------------|----------------|-------------------------------------------------------|
| switchClick    | inputChange    |                                                       |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>m`<div></div>`};var i,t,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-switch
        aria-label="Toggle"
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        .indeterminate=\${args.indeterminate}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        label=\${ifDefined(args.label)}
        name=\${ifDefined(args.name)}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        .value=\${args.value}
      ></modus-wc-switch>
    \`;
  }
}`,...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var r,d,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs documentation for additional info and examples.
  - \\\`checked\\\` prop has been renamed to \\\`value\\\` to maintain consistency across form components.
  - Size values have changed from verbose names (\\\`small\\\`, \\\`medium\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

#### Prop Mapping

| 1.0 Prop         | 2.0 Prop            | Notes                                                       |
|------------------|---------------------|-------------------------------------------------------------|
| aria-label       | aria-label          |                                                             |
| checked          | value               |                                                             |
| disabled         | disabled            |                                                             |
| label            | label               |                                                             |
| size             | size                | \\\`small\\\` → \\\`sm\\\`, \\\`medium\\\` → \\\`md\\\`                     |

#### Event Mapping

| 1.0 Event      | 2.0 Event      | Notes                                                 |
|----------------|----------------|-------------------------------------------------------|
| switchClick    | inputChange    |                                                       |
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
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const v=["Default","Migration"];export{a as Default,s as Migration,v as __namedExportsOrder,g as default};
