import{w as S}from"./decorator-D4YmxizW.js";import{x as l}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import{c as C}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const q={title:"Components/Forms/Radio",component:"modus-wc-radio",args:{"custom-class":"",disabled:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[S],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},s={render:e=>l`
      <modus-wc-radio
        aria-label="Radio"
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        label=${a(e.label)}
        name=${a(e.name)}
        ?required=${e.required}
        size=${a(e.size)}
        .value=${e.value}
      ></modus-wc-radio>
    `},d={render:e=>l`
<style>
  .radio-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .radio-group legend {
    margin-bottom: 0.5rem;
  }
</style>

<main role="main">
  <fieldset class="radio-group">
    <legend>Select an option:</legend>

    <modus-wc-radio
      label="Option 1"
      name="radio-group-demo"
      input-id="option1"
      ?disabled=${e.disabled}
      size=${a(e.size)}
      .value=${!0}
      @inputChange=${i=>{console.log("Selected:",i.target)}}
    ></modus-wc-radio>

    <modus-wc-radio
      label="Option 2"
      name="radio-group-demo"
      input-id="option2"
      ?disabled=${e.disabled}
      size=${a(e.size)}
      .value=${!1}
      @inputChange=${i=>{console.log("Selected:",i.target)}}
    ></modus-wc-radio>

    <modus-wc-radio
      label="Option 3"
      name="radio-group-demo"
      input-id="option3"
      ?disabled=${e.disabled}
      size=${a(e.size)}
      .value=${!1}
      @inputChange=${i=>{console.log("Selected:",i.target)}}
    ></modus-wc-radio>
  </fieldset>
</main>
    `},t={render:e=>{if(!customElements.get("radio-shadow-host")){const i=C({componentTag:"modus-wc-radio",propsMapper:(n,E)=>{const o=E;o.customClass=n["custom-class"]||"",o.disabled=!!n.disabled,o.inputId=n["input-id"]||"",o.inputTabIndex=n["input-tab-index"]||0,o.label=n.label||"",o.name=n.name||"",o.required=!!n.required,o.size=n.size||"md",o.value=!!n.value}});customElements.define("radio-shadow-host",i)}return l`<radio-shadow-host .props=${{...e}}></radio-shadow-host>`}},r={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>l`<div></div>`};var u,m,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,g,b;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  // prettier-ignore
  render: args => {
    return html\`
<style>
  .radio-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .radio-group legend {
    margin-bottom: 0.5rem;
  }
</style>

<main role="main">
  <fieldset class="radio-group">
    <legend>Select an option:</legend>

    <modus-wc-radio
      label="Option 1"
      name="radio-group-demo"
      input-id="option1"
      ?disabled=\${args.disabled}
      size=\${ifDefined(args.size)}
      .value=\${true}
      @inputChange=\${(e: CustomEvent) => {
      // In a real app, you would update your state management here
      console.log('Selected:', e.target);
    }}
    ></modus-wc-radio>

    <modus-wc-radio
      label="Option 2"
      name="radio-group-demo"
      input-id="option2"
      ?disabled=\${args.disabled}
      size=\${ifDefined(args.size)}
      .value=\${false}
      @inputChange=\${(e: CustomEvent) => {
      console.log('Selected:', e.target);
    }}
    ></modus-wc-radio>

    <modus-wc-radio
      label="Option 3"
      name="radio-group-demo"
      input-id="option3"
      ?disabled=\${args.disabled}
      size=\${ifDefined(args.size)}
      .value=\${false}
      @inputChange=\${(e: CustomEvent) => {
      console.log('Selected:', e.target);
    }}
    ></modus-wc-radio>
  </fieldset>
</main>
    \`;
  }
}`,...(b=(g=d.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,f,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for radio component
    if (!customElements.get('radio-shadow-host')) {
      const RadioShadowHost = createShadowHostClass<RadioArgs>({
        componentTag: 'modus-wc-radio',
        propsMapper: (v: RadioArgs, el: HTMLElement) => {
          const radioEl = el as unknown as {
            customClass: string;
            disabled: boolean;
            inputId: string;
            inputTabIndex: number;
            label: string;
            name: string;
            required: boolean;
            size: string;
            value: boolean;
          };
          radioEl.customClass = v['custom-class'] || '';
          radioEl.disabled = Boolean(v.disabled);
          radioEl.inputId = v['input-id'] || '';
          radioEl.inputTabIndex = v['input-tab-index'] || 0;
          radioEl.label = v.label || '';
          radioEl.name = v.name || '';
          radioEl.required = Boolean(v.required);
          radioEl.size = v.size || 'md';
          radioEl.value = Boolean(v.value);
        }
      });
      customElements.define('radio-shadow-host', RadioShadowHost);
    }
    return html\`<radio-shadow-host .props=\${{
      ...args
    }}></radio-shadow-host>\`;
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var w,$,z;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=($=r.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const R=["Default","RadioGroup","ShadowDomParent","Migration"];export{s as Default,r as Migration,d as RadioGroup,t as ShadowDomParent,R as __namedExportsOrder,q as default};
