import{w as m}from"./decorator-Dt3Huotz.js";import{k as c}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const v={title:"Components/Forms/Checkbox",component:"modus-wc-checkbox",args:{"custom-class":"",disabled:!1,indeterminate:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[m],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},a={render:e=>c`
      <modus-wc-checkbox
        aria-label="Checkbox"
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
      ></modus-wc-checkbox>
    `},i={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled\n  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for\n  additional info and examples.\n  - The `checked` prop is now `value` in 2.0.\n  - The `checkboxClick` event is now `inputChange` in 2.0.\n  - Size values have changed from verbose names (`small`, `medium`) to abbreviations (`xs`, `sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop         | 2.0 Prop      | Notes                                   |\n|------------------|---------------|-----------------------------------------|\n| aria-label       | aria-label    |                                         |\n| checked          | value         |                                         |\n| disabled         | disabled      |                                         |\n| indeterminate    | indeterminate |                                         |\n| label            | label         |                                         |\n| size             | size          | `small` → `sm`, `medium` → `md` |\n| stop-propagation |               | Not carried over                        |\n\n#### Event Mapping\n\n| 1.0 Event     | 2.0 Event   | Notes                                                 |\n|---------------|-------------|-------------------------------------------------------|\n| checkboxClick | inputChange | Event now emits `InputEvent` instead of `boolean` |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>c`<div></div>`};var t,o,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-checkbox
        aria-label="Checkbox"
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
      ></modus-wc-checkbox>
    \`;
  }
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var r,d,l;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - The \\\`checked\\\` prop is now \\\`value\\\` in 2.0.
  - The \\\`checkboxClick\\\` event is now \\\`inputChange\\\` in 2.0.
  - Size values have changed from verbose names (\\\`small\\\`, \\\`medium\\\`) to abbreviations (\\\`xs\\\`, \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

#### Prop Mapping

| 1.0 Prop         | 2.0 Prop      | Notes                                   |
|------------------|---------------|-----------------------------------------|
| aria-label       | aria-label    |                                         |
| checked          | value         |                                         |
| disabled         | disabled      |                                         |
| indeterminate    | indeterminate |                                         |
| label            | label         |                                         |
| size             | size          | \\\`small\\\` → \\\`sm\\\`, \\\`medium\\\` → \\\`md\\\` |
| stop-propagation |               | Not carried over                        |

#### Event Mapping

| 1.0 Event     | 2.0 Event   | Notes                                                 |
|---------------|-------------|-------------------------------------------------------|
| checkboxClick | inputChange | Event now emits \\\`InputEvent\\\` instead of \\\`boolean\\\` |
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
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const f=["Default","Migration"];export{a as Default,i as Migration,f as __namedExportsOrder,v as default};
