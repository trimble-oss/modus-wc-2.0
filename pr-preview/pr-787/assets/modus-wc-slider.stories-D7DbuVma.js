import{w as u}from"./decorator-D4YmxizW.js";import{x as m}from"./lit-element-CucEn6F2.js";import{o as n}from"./if-defined-BiZP-SBN.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const g={title:"Components/Forms/Slider",component:"modus-wc-slider",args:{"custom-class":"",disabled:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[u],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},a={render:e=>m`
      <modus-wc-slider
        aria-label="Slider"
        custom-class=${n(e["custom-class"])}
        ?disabled=${e.disabled}
        input-id=${n(e["input-id"])}
        input-tab-index=${n(e["input-tab-index"])}
        label=${n(e.label)}
        max=${n(e.max)}
        min=${n(e.min)}
        name=${n(e.name)}
        ?required=${e.required}
        size=${n(e.size)}
        step=${n(e.step)}
        .value=${e.value}
      ></modus-wc-slider>
    `},i={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for additional info and examples.
  - Property names have changed: \`max-value\` → \`max\`, \`min-value\` → \`min\`.

#### Prop Mapping

| 1.0 Prop    | 2.0 Prop     | Notes |
|-------------|--------------|-------|
| aria-label  | aria-label   |       |
| disabled    | disabled     |       |
| label       | label        |       |
| max-value   | max          |       |
| min-value   | min          |       |
| value       | value        |       |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| valueChange |             | Not carried over |
| valueInput  | inputChange |                  |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>m`<div></div>`};var t,r,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-slider
        aria-label="Slider"
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        label=\${ifDefined(args.label)}
        max=\${ifDefined(args.max)}
        min=\${ifDefined(args.min)}
        name=\${ifDefined(args.name)}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        step=\${ifDefined(args.step)}
        .value=\${args.value}
      ></modus-wc-slider>
    \`;
  }
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var o,l,d;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for additional info and examples.
  - Property names have changed: \\\`max-value\\\` → \\\`max\\\`, \\\`min-value\\\` → \\\`min\\\`.

#### Prop Mapping

| 1.0 Prop    | 2.0 Prop     | Notes |
|-------------|--------------|-------|
| aria-label  | aria-label   |       |
| disabled    | disabled     |       |
| label       | label        |       |
| max-value   | max          |       |
| min-value   | min          |       |
| value       | value        |       |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| valueChange |             | Not carried over |
| valueInput  | inputChange |                  |
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
}`,...(d=(l=i.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const $=["Default","Migration"];export{a as Default,i as Migration,$ as __namedExportsOrder,g as default};
