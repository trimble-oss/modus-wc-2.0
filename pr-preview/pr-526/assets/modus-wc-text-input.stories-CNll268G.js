import{w as D}from"./decorator-D4YmxizW.js";import{x as r}from"./lit-element-C8zulti1.js";import{o as t}from"./if-defined-yv6owfG8.js";import{c as T}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var u=Object.freeze,q=Object.defineProperty,B=(e,s)=>u(q(e,"raw",{value:u(e.slice())})),p;const O={title:"Components/Forms/Text Input",component:"modus-wc-text-input",args:{bordered:!0,disabled:!1,"include-clear":!1,"include-search":!1,inputmode:"text",label:"Label",size:"md",spellcheck:!1,type:"text",value:""},argTypes:{"auto-capitalize":{options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"text"}},"auto-correct":{options:["on","off"]},enterkeyhint:{options:["enter","done","go","next","previous","search","send"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},inputmode:{control:{type:"select"},options:["decimal","email","none","numeric","search","tel","text","url"]},size:{options:["sm","md","lg"]},spellcheck:{description:"Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.",table:{category:"attributes",defaultValue:{summary:"false"}}},type:{options:["email","password","search","tel","text","url"]}},decorators:[D],parameters:{actions:{handles:["clearClick","inputBlur","inputChange","inputFocus"]}}},P={render:e=>r`
    <modus-wc-text-input
      aria-label="Text input"
      auto-capitalize=${t(e["auto-capitalize"])}
      auto-complete=${t(e["auto-complete"])}
      auto-correct=${t(e["auto-correct"])}
      ?bordered=${e.bordered}
      clear-aria-label=${t(e["clear-aria-label"])}
      custom-class=${t(e["custom-class"])}
      ?disabled=${e.disabled}
      enterkeyhint=${t(e.enterkeyhint)}
      .feedback=${e.feedback}
      include-clear=${t(e["include-clear"])}
      include-search=${t(e["include-search"])}
      input-aria-invalid=${t(e["input-aria-invalid"])}
      input-id=${t(e["input-id"])}
      inputmode=${t(e.inputmode)}
      input-tab-index=${t(e["input-tab-index"])}
      label=${t(e.label)}
      max-length=${t(e["max-length"])}
      min-length=${t(e["min-length"])}
      name=${t(e.name)}
      pattern=${t(e.pattern)}
      placeholder=${t(e.placeholder)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      size=${t(e.size)}
      spellcheck=${t(e.spellcheck)}
      type=${t(e.type)}
      .value=${e.value}
    ></modus-wc-text-input>
  `},o={...P},N={level:"error",message:"Value is required."},l={render:e=>r(p||(p=B([`
    <modus-wc-text-input
      aria-label="Text input with error feedback"
      .feedback=`,`
      id="error-input"
      label=`,`
      ?required=`,`
      .value=`,`
    ></modus-wc-text-input>
    <script>
      // Adding this block to show how to set feedback via JS
      //const input = document.getElementById('error-input');
      //input.feedback = { level: 'error', message: 'Value is required.' };
    <\/script>
  `])),N,t(e.label),!0,e.value)},i={render:e=>r`
<modus-wc-text-input
  aria-label="Text input with custom icon"
  auto-capitalize=${t(e["auto-capitalize"])}
  auto-complete=${t(e["auto-complete"])}
  auto-correct=${t(e["auto-correct"])}
  ?bordered=${e.bordered}
  clear-aria-label=${t(e["clear-aria-label"])}
  custom-class=${t(e["custom-class"])}
  ?disabled=${e.disabled}
  enterkeyhint=${t(e.enterkeyhint)}
  .feedback=${e.feedback}
  include-clear=${t(e["include-clear"])}
  include-search=${t(e["include-search"])}
  input-id=${t(e["input-id"])}
  inputmode=${t(e.inputmode)}
  input-tab-index=${t(e["input-tab-index"])}
  label=${t(e.label)}
  max-length=${t(e["max-length"])}
  min-length=${t(e["min-length"])}
  name=${t(e.name)}
  pattern=${t(e.pattern)}
  placeholder=${t(e.placeholder)}
  ?read-only=${e["read-only"]}
  ?required=${e.required}
  size=${t(e.size)}
  spellcheck=${t(e.spellcheck)}
  type=${t(e.type)}
  .value=${e.value}
>
  <modus-wc-icon slot="custom-icon" name="heart" size="sm"></modus-wc-icon>
</modus-wc-text-input>
  `,args:{placeholder:"Enter text here..."}},c={render:e=>{if(!customElements.get("text-input-shadow-host")){const s=T({componentTag:"modus-wc-text-input",propsMapper:(n,S)=>{const a=S;a.autoCapitalize=n["auto-capitalize"]||"",a.autoComplete=n["auto-complete"]||"",a.autoCorrect=n["auto-correct"]||"",a.bordered=!!n.bordered,a.clearAriaLabel=n["clear-aria-label"]||""||"Clear text",a.customClass=n["custom-class"]||"",a.disabled=!!n.disabled,a.enterkeyhint=n.enterkeyhint||"",a.includeClear=!!n["include-clear"],a.includeSearch=!!n["include-search"],a.inputId=n["input-id"]||"",a.inputTabIndex=n["input-tab-index"]||0,a.label=n.label||"",a.maxLength=n["max-length"],a.minLength=n["min-length"],a.name=n.name||"",a.pattern=n.pattern||"",a.placeholder=n.placeholder||"",a.readOnly=!!n["read-only"],a.required=!!n.required,a.size=n.size||"",a.type=n.type||"",a.value=n.value}});customElements.define("text-input-shadow-host",s)}return r`<text-input-shadow-host
      .props=${{...e}}
    ></text-input-shadow-host>`}},d={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\`small\`, \`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop                     | 2.0 Prop            | Notes                                                       |
|------------------------------|---------------------|-------------------------------------------------------------|
| aria-label                   | aria-label          |                                                             |
| autocapitalize               | auto-capitalize     |                                                             |
| autocorrect                  | auto-correct        |                                                             |
| autocomplete                 | autocomplete        |                                                             |
| auto-focus-input             | autofocus           |                                                             |
| clearable                    | include-clear       |                                                             |
| disabled                     | disabled            |                                                             |
| enter-key-hint               | enterkeyhint        |                                                             |
| error-text                   | feedback.message    | Use \`feedback\` level                                      |
| helper-text                  |                     | Not carried over                                            |
| include-error-icon           |                     | Not carried over                                            |
| include-search-icon          | include-search      |                                                             |
| include-password-text-toggle |                     | Not carried over                                            |
| inputmode                    | inputmode          |                                                             |
| label                        | label               |                                                             |
| max-length                   | max-length          |                                                             |
| pattern                      | pattern             |                                                             |
| placeholder                  | placeholder         |                                                             |
| read-only                    | read-only           |                                                             |
| required                     | required            |                                                             |
| size                         | size                | \`small\` → \`sm\`, \`medium\` → \`md\`, \`large\` → \`lg\` |
| spellcheck                   | spellcheck          |                                                             |
| text-align                   |                     | Not carried over, use CSS instead                           |
| type                         | type                |                                                             |
| valid-text                   | feedback.message    | Use \`feedback\` level                                      |
| value                        | value               |                                                             |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| valueChange | inputChange |                  |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var m,h,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,x,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  // prettier-ignore
  render: args => html\`
    <modus-wc-text-input
      aria-label="Text input with error feedback"
      .feedback=\${errorFeedback}
      id="error-input"
      label=\${ifDefined(args.label)}
      ?required=\${true}
      .value=\${args.value}
    ></modus-wc-text-input>
    <script>
      // Adding this block to show how to set feedback via JS
      //const input = document.getElementById('error-input');
      //input.feedback = { level: 'error', message: 'Value is required.' };
    <\/script>
  \`
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var $,v,k;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  // prettier-ignore
  render: args => html\`
<modus-wc-text-input
  aria-label="Text input with custom icon"
  auto-capitalize=\${ifDefined(args['auto-capitalize'])}
  auto-complete=\${ifDefined(args['auto-complete'])}
  auto-correct=\${ifDefined(args['auto-correct'])}
  ?bordered=\${args.bordered}
  clear-aria-label=\${ifDefined(args['clear-aria-label'])}
  custom-class=\${ifDefined(args['custom-class'])}
  ?disabled=\${args.disabled}
  enterkeyhint=\${ifDefined(args.enterkeyhint)}
  .feedback=\${args.feedback}
  include-clear=\${ifDefined(args['include-clear'])}
  include-search=\${ifDefined(args['include-search'])}
  input-id=\${ifDefined(args['input-id'])}
  inputmode=\${ifDefined(args.inputmode)}
  input-tab-index=\${ifDefined(args['input-tab-index'])}
  label=\${ifDefined(args.label)}
  max-length=\${ifDefined(args['max-length'])}
  min-length=\${ifDefined(args['min-length'])}
  name=\${ifDefined(args.name)}
  pattern=\${ifDefined(args.pattern)}
  placeholder=\${ifDefined(args.placeholder)}
  ?read-only=\${args['read-only']}
  ?required=\${args.required}
  size=\${ifDefined(args.size)}
  spellcheck=\${ifDefined(args.spellcheck)}
  type=\${ifDefined(args.type)}
  .value=\${args.value}
>
  <modus-wc-icon slot="custom-icon" name="heart" size="sm"></modus-wc-icon>
</modus-wc-text-input>
  \`,
  args: {
    placeholder: 'Enter text here...'
  }
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var y,w,I;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for text-input component
    if (!customElements.get('text-input-shadow-host')) {
      const TextInputShadowHost = createShadowHostClass<TextInputArgs>({
        componentTag: 'modus-wc-text-input',
        propsMapper: (v: TextInputArgs, el: HTMLElement) => {
          const textInputEl = el as unknown as {
            autoCapitalize: string;
            autoComplete: string;
            autoCorrect: string;
            bordered: boolean;
            clearAriaLabel: string;
            customClass: string;
            disabled: boolean;
            enterkeyhint: string;
            feedback: IInputFeedbackProp;
            includeClear: boolean;
            includeSearch: boolean;
            inputId: string;
            inputTabIndex: number;
            label: string;
            maxLength: number;
            minLength: number;
            name: string;
            pattern: string;
            placeholder: string;
            readOnly: boolean;
            required: boolean;
            size: string;
            type: string;
            value: string;
          };
          textInputEl.autoCapitalize = v['auto-capitalize'] || '';
          textInputEl.autoComplete = v['auto-complete'] || '';
          textInputEl.autoCorrect = v['auto-correct'] || '';
          textInputEl.bordered = Boolean(v.bordered);
          textInputEl.clearAriaLabel = v['clear-aria-label'] || '' || 'Clear text';
          textInputEl.customClass = v['custom-class'] || '';
          textInputEl.disabled = Boolean(v.disabled);
          textInputEl.enterkeyhint = v.enterkeyhint || '';
          textInputEl.includeClear = Boolean(v['include-clear']);
          textInputEl.includeSearch = Boolean(v['include-search']);
          textInputEl.inputId = v['input-id'] || '';
          textInputEl.inputTabIndex = v['input-tab-index'] || 0;
          textInputEl.label = v.label || '';
          textInputEl.maxLength = v['max-length'];
          textInputEl.minLength = v['min-length'];
          textInputEl.name = v.name || '';
          textInputEl.pattern = v.pattern || '';
          textInputEl.placeholder = v.placeholder || '';
          textInputEl.readOnly = Boolean(v['read-only']);
          textInputEl.required = Boolean(v.required);
          textInputEl.size = v.size || '';
          textInputEl.type = v.type || '';
          textInputEl.value = v.value;
        }
      });
      customElements.define('text-input-shadow-host', TextInputShadowHost);
    }
    return html\`<text-input-shadow-host
      .props=\${{
      ...args
    }}
    ></text-input-shadow-host>\`;
  }
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var E,z,C;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\\\`small\\\`, \\\`medium\\\`, \\\`large\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

#### Prop Mapping

| 1.0 Prop                     | 2.0 Prop            | Notes                                                       |
|------------------------------|---------------------|-------------------------------------------------------------|
| aria-label                   | aria-label          |                                                             |
| autocapitalize               | auto-capitalize     |                                                             |
| autocorrect                  | auto-correct        |                                                             |
| autocomplete                 | autocomplete        |                                                             |
| auto-focus-input             | autofocus           |                                                             |
| clearable                    | include-clear       |                                                             |
| disabled                     | disabled            |                                                             |
| enter-key-hint               | enterkeyhint        |                                                             |
| error-text                   | feedback.message    | Use \\\`feedback\\\` level                                      |
| helper-text                  |                     | Not carried over                                            |
| include-error-icon           |                     | Not carried over                                            |
| include-search-icon          | include-search      |                                                             |
| include-password-text-toggle |                     | Not carried over                                            |
| inputmode                    | inputmode          |                                                             |
| label                        | label               |                                                             |
| max-length                   | max-length          |                                                             |
| pattern                      | pattern             |                                                             |
| placeholder                  | placeholder         |                                                             |
| read-only                    | read-only           |                                                             |
| required                     | required            |                                                             |
| size                         | size                | \\\`small\\\` → \\\`sm\\\`, \\\`medium\\\` → \\\`md\\\`, \\\`large\\\` → \\\`lg\\\` |
| spellcheck                   | spellcheck          |                                                             |
| text-align                   |                     | Not carried over, use CSS instead                           |
| type                         | type                |                                                             |
| valid-text                   | feedback.message    | Use \\\`feedback\\\` level                                      |
| value                        | value               |                                                             |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| valueChange | inputChange |                  |
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
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const W=["Default","WithErrorFeedback","WithCustomIconSlot","ShadowDomParent","Migration"];export{o as Default,d as Migration,c as ShadowDomParent,i as WithCustomIconSlot,l as WithErrorFeedback,W as __namedExportsOrder,O as default};
