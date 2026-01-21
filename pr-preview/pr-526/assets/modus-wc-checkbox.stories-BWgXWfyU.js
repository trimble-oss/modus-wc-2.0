import{w as v}from"./decorator-D4YmxizW.js";import{x as r}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import{c as f}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const I={title:"Components/Forms/Checkbox",component:"modus-wc-checkbox",args:{"custom-class":"",disabled:!1,indeterminate:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[v],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},t={render:e=>r`
      <modus-wc-checkbox
        aria-label="Checkbox"
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
      ></modus-wc-checkbox>
    `},s={render:e=>{if(!customElements.get("checkbox-shadow-host")){const k=f({componentTag:"modus-wc-checkbox",propsMapper:(n,g)=>{const o=g;o.customClass=n["custom-class"]||"",o.disabled=!!n.disabled,o.indeterminate=!!n.indeterminate,o.inputId=n["input-id"]??"",o.inputTabIndex=n["input-tab-index"]??0,o.label=n.label??"",o.name=n.name??"",o.required=!!n.required,o.size=n.size??"",o.value=!!n.value}});customElements.define("checkbox-shadow-host",k)}return r`<checkbox-shadow-host
      .props=${{...e}}
    ></checkbox-shadow-host>`}},i={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled\n  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for\n  additional info and examples.\n  - The `checked` prop is now `value` in 2.0.\n  - The `checkboxClick` event is now `inputChange` in 2.0.\n  - Size values have changed from verbose names (`small`, `medium`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop         | 2.0 Prop      | Notes                                   |\n|------------------|---------------|-----------------------------------------|\n| aria-label       | aria-label    |                                         |\n| checked          | value         |                                         |\n| disabled         | disabled      |                                         |\n| indeterminate    | indeterminate |                                         |\n| label            | label         |                                         |\n| size             | size          | `small` → `sm`, `medium` → `md` |\n| stop-propagation |               | Not carried over                        |\n\n#### Event Mapping\n\n| 1.0 Event     | 2.0 Event   | Notes                                                 |\n|---------------|-------------|-------------------------------------------------------|\n| checkboxClick | inputChange | Event now emits `InputEvent` instead of `boolean` |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for checkbox component
    if (!customElements.get('checkbox-shadow-host')) {
      const CheckboxShadowHost = createShadowHostClass<CheckboxArgs>({
        componentTag: 'modus-wc-checkbox',
        propsMapper: (v: CheckboxArgs, el: HTMLElement) => {
          const checkboxEl = el as unknown as {
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
          checkboxEl.customClass = v['custom-class'] || '';
          checkboxEl.disabled = Boolean(v.disabled);
          checkboxEl.indeterminate = Boolean(v.indeterminate);
          checkboxEl.inputId = v['input-id'] ?? '';
          checkboxEl.inputTabIndex = v['input-tab-index'] ?? 0;
          checkboxEl.label = v.label ?? '';
          checkboxEl.name = v.name ?? '';
          checkboxEl.required = Boolean(v.required);
          checkboxEl.size = v.size ?? '';
          checkboxEl.value = Boolean(v.value);
        }
      });
      customElements.define('checkbox-shadow-host', CheckboxShadowHost);
    }
    return html\`<checkbox-shadow-host
      .props=\${{
      ...args
    }}
    ></checkbox-shadow-host>\`;
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,h,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
  - Size values have changed from verbose names (\\\`small\\\`, \\\`medium\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

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
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const q=["Default","ShadowDomParent","Migration"];export{t as Default,i as Migration,s as ShadowDomParent,q as __namedExportsOrder,I as default};
