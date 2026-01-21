import{w as q}from"./decorator-D4YmxizW.js";import{x as i}from"./lit-element-C8zulti1.js";import{o as t}from"./if-defined-yv6owfG8.js";import{c as N}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const D={title:"Components/Forms/Number Input",component:"modus-wc-number-input",args:{bordered:!0,disabled:!1,inputmode:"numeric",label:"Label",size:"md",type:"number",value:""},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"input-aria-invalid":{control:{type:"select"},options:["true","false"]},inputmode:{control:{type:"select"},options:["decimal","none","numeric"]},size:{control:{type:"select"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["number","range"]}},decorators:[q],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},d={render:e=>i`
    <modus-wc-number-input
      aria-label="Number input"
      auto-complete=${t(e["auto-complete"])}
      ?bordered=${e.bordered}
      currency-symbol=${t(e["currency-symbol"])}
      custom-class=${t(e["custom-class"])}
      ?disabled=${e.disabled}
      .feedback=${e.feedback}
      input-aria-invalid=${t(e["input-aria-invalid"])}
      input-id=${t(e["input-id"])}
      inputmode=${t(e.inputmode)}
      input-tab-index=${t(e["input-tab-index"])}
      label=${t(e.label)}
      max=${t(e.max)}
      min=${t(e.min)}
      name=${t(e.name)}
      placeholder=${t(e.placeholder)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      size=${t(e.size)}
      step=${t(e.step)}
      type=${t(e.type)}
      .value=${e.value}
    ></modus-wc-number-input>
  `},o={...d},z={level:"error",message:"Value is required."},a={...d,args:{"currency-symbol":"$"}},s={...d,args:{feedback:z,required:!0},parameters:{docs:{source:{transform:e=>`${e}
<script>
  const numberInputElement = document.querySelector('modus-wc-number-input');
  numberInputElement.feedback = {
    level: 'error',
    message: 'Value is required.'
  };
<\/script>`}}}},l={render:e=>{if(!customElements.get("number-input-shadow-host")){const S=N({componentTag:"modus-wc-number-input",propsMapper:(n,C)=>{const r=C;r.autoComplete=n["auto-complete"]??"",r.bordered=!!n.bordered,r.currencySymbol=n["currency-symbol"]??"",r.customClass=n["custom-class"]||"",r.disabled=!!n.disabled,r.inputId=n["input-id"]??"",r.inputTabIndex=n["input-tab-index"]??0,r.label=n.label??"",r.max=n.max??0,r.min=n.min??0,r.name=n.name??"",r.placeholder=n.placeholder??"",r.readOnly=!!n["read-only"],r.required=!!n.required,r.size=n.size??"",r.step=n.step??1,r.type=n.type??"",r.value=n.value}});customElements.define("number-input-shadow-host",S)}return i`<number-input-shadow-host
      style="width: 200px;display: block;"
      .props=${{...e}}
    ></number-input-shadow-host>`}},u={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>i`<div></div>`};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var b,y,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  args: {
    'currency-symbol': '$'
  }
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,g,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template,
  args: {
    feedback: errorFeedback,
    required: true
  },
  parameters: {
    docs: {
      source: {
        transform: src => \`\${src}
<script>
  const numberInputElement = document.querySelector('modus-wc-number-input');
  numberInputElement.feedback = {
    level: 'error',
    message: 'Value is required.'
  };
<\/script>\`
      }
    }
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var I,w,E;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for number-input component
    if (!customElements.get('number-input-shadow-host')) {
      const NumberInputShadowHost = createShadowHostClass<NumberInputArgs>({
        componentTag: 'modus-wc-number-input',
        propsMapper: (v: NumberInputArgs, el: HTMLElement) => {
          const numberInputEl = el as unknown as {
            autoComplete: string;
            bordered: boolean;
            currencySymbol: string;
            customClass: string;
            disabled: boolean;
            feedback: IInputFeedbackProp;
            inputId: string;
            inputTabIndex: number;
            label: string;
            max: number;
            min: number;
            name: string;
            placeholder: string;
            readOnly: boolean;
            required: boolean;
            size: string;
            step: number;
            type: string;
            value: string;
          };
          numberInputEl.autoComplete = v['auto-complete'] ?? '';
          numberInputEl.bordered = Boolean(v.bordered);
          numberInputEl.currencySymbol = v['currency-symbol'] ?? '';
          numberInputEl.customClass = v['custom-class'] || '';
          numberInputEl.disabled = Boolean(v.disabled);
          numberInputEl.inputId = v['input-id'] ?? '';
          numberInputEl.inputTabIndex = v['input-tab-index'] ?? 0;
          numberInputEl.label = v.label ?? '';
          numberInputEl.max = v.max ?? 0;
          numberInputEl.min = v.min ?? 0;
          numberInputEl.name = v.name ?? '';
          numberInputEl.placeholder = v.placeholder ?? '';
          numberInputEl.readOnly = Boolean(v['read-only']);
          numberInputEl.required = Boolean(v.required);
          numberInputEl.size = v.size ?? '';
          numberInputEl.step = v.step ?? 1;
          numberInputEl.type = v.type ?? '';
          numberInputEl.value = v.value;
        }
      });
      customElements.define('number-input-shadow-host', NumberInputShadowHost);
    }
    return html\`<number-input-shadow-host
      style="width: 200px;display: block;"
      .props=\${{
      ...args
    }}
    ></number-input-shadow-host>\`;
  }
}`,...(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var x,k,$;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...($=(k=u.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};const O=["Default","Currency","WithErrorFeedback","ShadowDomParent","Migration"];export{a as Currency,o as Default,u as Migration,l as ShadowDomParent,s as WithErrorFeedback,O as __namedExportsOrder,D as default};
