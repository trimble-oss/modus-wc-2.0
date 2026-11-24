import{w as A}from"./decorator-Cv9na35H.js";import{b as r}from"./lit-element-DgBvYnzn.js";import{o as t}from"./if-defined-BnVFTJ4o.js";import{c as F}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var p=Object.freeze,L=Object.defineProperty,N=(e,u)=>p(L(e,"raw",{value:p(e.slice())})),m;const j={title:"Components/Forms/Text Input",component:"modus-wc-text-input",args:{bordered:!0,disabled:!1,"include-clear":!1,"include-search":!1,inputmode:"text",label:"Label","show-character-count":!1,size:"md",spellcheck:!1,type:"text",value:""},argTypes:{"auto-capitalize":{options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"text"}},"auto-correct":{options:["on","off"]},enterkeyhint:{options:["enter","done","go","next","previous","search","send"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},inputmode:{control:{type:"select"},options:["decimal","email","none","numeric","search","tel","text","url"]},size:{options:["xs","sm","md","lg","xl"]},spellcheck:{description:"Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.",table:{category:"attributes",defaultValue:{summary:"false"}}},type:{options:["email","password","search","tel","text","url"]}},decorators:[A],parameters:{actions:{handles:["clearClick","inputBlur","inputChange","inputFocus"]}}},B={render:e=>r`
    <modus-wc-text-input
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
      ?show-character-count=${e["show-character-count"]}
      size=${t(e.size)}
      spellcheck=${t(e.spellcheck)}
      type=${t(e.type)}
      .value=${e.value}
    ></modus-wc-text-input>
  `},o={...B},M={level:"error",message:"Value is required."},i={render:e=>r(m||(m=N([`
    <modus-wc-text-input
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
  `])),M,t(e.label),!0,e.value)},l={...B,args:{label:"Display name","max-length":20,"show-character-count":!0},parameters:{docs:{description:{story:"Set `show-character-count` with `max-length` to show the current count and limit below the field. The count is linked to the input with `aria-describedby`, and screen readers announce once when the limit is reached."}}}},c={render:e=>r`
<modus-wc-text-input
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
  ?show-character-count=${e["show-character-count"]}
  size=${t(e.size)}
  spellcheck=${t(e.spellcheck)}
  type=${t(e.type)}
  .value=${e.value}
>
  <modus-wc-icon slot="custom-icon" name="heart" size="sm"></modus-wc-icon>
</modus-wc-text-input>
  `,args:{label:"Text input with custom icon",placeholder:"Enter text here..."}},s={render:e=>{if(!customElements.get("text-input-shadow-host")){const u=F({componentTag:"modus-wc-text-input",propsMapper:(n,P)=>{const a=P;a.autoCapitalize=n["auto-capitalize"]||"",a.autoComplete=n["auto-complete"]||"",a.autoCorrect=n["auto-correct"]||"",a.bordered=!!n.bordered,a.clearAriaLabel=n["clear-aria-label"]||""||"Clear text",a.customClass=n["custom-class"]||"",a.disabled=!!n.disabled,a.enterkeyhint=n.enterkeyhint||"",a.includeClear=!!n["include-clear"],a.includeSearch=!!n["include-search"],a.inputId=n["input-id"]||"",a.inputTabIndex=n["input-tab-index"]||0,a.label=n.label||"",a.maxLength=n["max-length"],a.minLength=n["min-length"],a.name=n.name||"",a.pattern=n.pattern||"",a.placeholder=n.placeholder||"",a.readOnly=!!n["read-only"],a.required=!!n.required,a.showCharacterCount=!!n["show-character-count"],a.size=n.size||"",a.type=n.type||"",a.value=n.value}});customElements.define("text-input-shadow-host",u)}return r`<text-input-shadow-host
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
| include-password-text-toggle | (built-in)          | Built-in when \`type="password"\` (key icon + visibility toggle)              |
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var h,b,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,g,$;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  // prettier-ignore
  render: args => html\`
    <modus-wc-text-input
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
}`,...($=(g=i.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var w,y,v;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Display name',
    'max-length': 20,
    'show-character-count': true
  },
  parameters: {
    docs: {
      description: {
        story: 'Set \`show-character-count\` with \`max-length\` to show the current count and limit below the field. The count is linked to the input with \`aria-describedby\`, and screen readers announce once when the limit is reached.'
      }
    }
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var k,I,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  // prettier-ignore
  render: args => html\`
<modus-wc-text-input
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
  ?show-character-count=\${args['show-character-count']}
  size=\${ifDefined(args.size)}
  spellcheck=\${ifDefined(args.spellcheck)}
  type=\${ifDefined(args.type)}
  .value=\${args.value}
>
  <modus-wc-icon slot="custom-icon" name="heart" size="sm"></modus-wc-icon>
</modus-wc-text-input>
  \`,
  args: {
    label: 'Text input with custom icon',
    placeholder: 'Enter text here...'
  }
}`,...(E=(I=c.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var C,z,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
            showCharacterCount: boolean;
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
          textInputEl.showCharacterCount = Boolean(v['show-character-count']);
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
}`,...(S=(z=s.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var D,T,q;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
| include-password-text-toggle | (built-in)          | Built-in when \\\`type="password"\\\` (key icon + visibility toggle)              |
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
}`,...(q=(T=d.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const J=["Default","WithErrorFeedback","WithCharacterCount","WithCustomIconSlot","ShadowDomParent","Migration"];export{o as Default,d as Migration,s as ShadowDomParent,l as WithCharacterCount,c as WithCustomIconSlot,i as WithErrorFeedback,J as __namedExportsOrder,j as default};
