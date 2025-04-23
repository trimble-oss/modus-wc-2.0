import{w as c}from"./decorator-DFROgT0E.js";import{x as m}from"./lit-element-C8zulti1.js";import{o as n}from"./if-defined-yv6owfG8.js";import"./v4-CtRu48qb.js";const f={title:"Components/Forms/Toggle",component:"modus-wc-toggle",args:{"custom-class":"",disabled:!1,indeterminate:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[c],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},a={render:e=>m`
      <modus-wc-toggle
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
      ></modus-wc-toggle>
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>m`<div></div>`};var t,i,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-toggle
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
      ></modus-wc-toggle>
    \`;
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var r,l,d;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const v=["Default","Migration"];export{a as Default,s as Migration,v as __namedExportsOrder,f as default};
