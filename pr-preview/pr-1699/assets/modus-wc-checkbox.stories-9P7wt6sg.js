import{w as E}from"./decorator-Cv9na35H.js";import{b as c}from"./lit-element-DgBvYnzn.js";import{o as a}from"./if-defined-BnVFTJ4o.js";import{c as z}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const B={title:"Components/Forms/Checkbox",component:"modus-wc-checkbox",args:{"custom-class":"",disabled:!1,indeterminate:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[E],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},s={render:e=>c`
    <modus-wc-checkbox
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
  `},i={render:e=>c`
      <style>
        .checkbox-group {
          border: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin: 0;
          min-inline-size: 0;
          padding: 0;
        }

        .checkbox-group legend {
          margin-bottom: 0.5rem;
          padding: 0;
        }
      </style>
      <fieldset class="checkbox-group">
        <legend>Notification preferences</legend>
        <modus-wc-checkbox
          label="Email"
          name="notify"
          input-id="notify-email"
          ?disabled=${e.disabled}
          size=${a(e.size)}
          .value=${!0}
        ></modus-wc-checkbox>
        <modus-wc-checkbox
          label="SMS"
          name="notify"
          input-id="notify-sms"
          ?disabled=${e.disabled}
          size=${a(e.size)}
          .value=${!1}
        ></modus-wc-checkbox>
      </fieldset>
    `},t={render:e=>{if(!customElements.get("checkbox-shadow-host")){const w=z({componentTag:"modus-wc-checkbox",propsMapper:(n,$)=>{const o=$;o.customClass=n["custom-class"]||"",o.disabled=!!n.disabled,o.indeterminate=!!n.indeterminate,o.inputId=n["input-id"]??"",o.inputTabIndex=n["input-tab-index"]??0,o.label=n.label??"",o.name=n.name??"",o.required=!!n.required,o.size=n.size??"",o.value=!!n.value}});customElements.define("checkbox-shadow-host",w)}return c`<checkbox-shadow-host
      .props=${{...e}}
    ></checkbox-shadow-host>`}},r={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled\n  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for\n  additional info and examples.\n  - The `checked` prop is now `value` in 2.0.\n  - The `checkboxClick` event is now `inputChange` in 2.0.\n  - Size values have changed from verbose names (`small`, `medium`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop         | 2.0 Prop      | Notes                                   |\n|------------------|---------------|-----------------------------------------|\n| aria-label       | aria-label    |                                         |\n| checked          | value         |                                         |\n| disabled         | disabled      |                                         |\n| indeterminate    | indeterminate |                                         |\n| label            | label         |                                         |\n| size             | size          | `small` → `sm`, `medium` → `md` |\n| stop-propagation |               | Not carried over                        |\n\n#### Event Mapping\n\n| 1.0 Event     | 2.0 Event   | Notes                                                 |\n|---------------|-------------|-------------------------------------------------------|\n| checkboxClick | inputChange | Event now emits `InputEvent` instead of `boolean` |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>c`<div></div>`};var d,l,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-checkbox
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
  \`
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,p,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <style>
        .checkbox-group {
          border: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin: 0;
          min-inline-size: 0;
          padding: 0;
        }

        .checkbox-group legend {
          margin-bottom: 0.5rem;
          padding: 0;
        }
      </style>
      <fieldset class="checkbox-group">
        <legend>Notification preferences</legend>
        <modus-wc-checkbox
          label="Email"
          name="notify"
          input-id="notify-email"
          ?disabled=\${args.disabled}
          size=\${ifDefined(args.size)}
          .value=\${true}
        ></modus-wc-checkbox>
        <modus-wc-checkbox
          label="SMS"
          name="notify"
          input-id="notify-sms"
          ?disabled=\${args.disabled}
          size=\${ifDefined(args.size)}
          .value=\${false}
        ></modus-wc-checkbox>
      </fieldset>
    \`;
  }
}`,...(b=(p=i.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,g,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,k,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const M=["Default","CheckboxGroup","ShadowDomParent","Migration"];export{i as CheckboxGroup,s as Default,r as Migration,t as ShadowDomParent,M as __namedExportsOrder,B as default};
