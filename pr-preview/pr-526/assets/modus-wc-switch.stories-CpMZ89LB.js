import{w as v}from"./decorator-D4YmxizW.js";import{x as r}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import{c as E}from"./shadow-host-helper-B2BwyiIi.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const B={title:"Components/Forms/Switch",component:"modus-wc-switch",args:{"custom-class":"",disabled:!1,indeterminate:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[v],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},t={render:e=>r`
      <modus-wc-switch
        aria-label="Toggle"
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        .indeterminate=${e.indeterminate}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        label=${a(e.label)}
        name=${a(e.name)}
        ?required=${e.required}
        size=${a(e.size)}
        .value=${e.value}
      ></modus-wc-switch>
    `},i={render:e=>{if(!customElements.get("switch-shadow-host")){const g=E({componentTag:"modus-wc-switch",propsMapper:(n,f)=>{const s=f;s.customClass=n["custom-class"]||"",s.disabled=!!n.disabled,s.indeterminate=!!n.indeterminate,s.inputId=n["input-id"]||"",s.inputTabIndex=n["input-tab-index"]||0,s.label=n.label||"",s.name=n.name||"",s.required=!!n.required,s.size=n.size||"md",s.value=!!n.value}});customElements.define("switch-shadow-host",g)}return r`<switch-shadow-host
      .props=${{...e}}
    ></switch-shadow-host>`}},o={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for switch component
    if (!customElements.get('switch-shadow-host')) {
      const SwitchShadowHost = createShadowHostClass<SwitchArgs>({
        componentTag: 'modus-wc-switch',
        propsMapper: (v: SwitchArgs, el: HTMLElement) => {
          const switchEl = el as unknown as {
            customClass: string;
            disabled: boolean;
            indeterminate: boolean;
            inputId: string;
            inputTabIndex: number;
            label: string;
            name: string;
            required: boolean;
            size: string;
            value: boolean;
          };
          switchEl.customClass = v['custom-class'] || '';
          switchEl.disabled = Boolean(v.disabled);
          switchEl.indeterminate = Boolean(v.indeterminate);
          switchEl.inputId = v['input-id'] || '';
          switchEl.inputTabIndex = v['input-tab-index'] || 0;
          switchEl.label = v.label || '';
          switchEl.name = v.name || '';
          switchEl.required = Boolean(v.required);
          switchEl.size = v.size || 'md';
          switchEl.value = Boolean(v.value);
        }
      });
      customElements.define('switch-shadow-host', SwitchShadowHost);
    }
    return html\`<switch-shadow-host
      .props=\${{
      ...args
    }}
    ></switch-shadow-host>\`;
  }
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,w,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const D=["Default","ShadowDomParent","Migration"];export{t as Default,o as Migration,i as ShadowDomParent,D as __namedExportsOrder,B as default};
