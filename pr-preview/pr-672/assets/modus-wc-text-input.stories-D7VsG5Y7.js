import{w as x}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-C8zulti1.js";import{o as t}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var l=Object.freeze,y=Object.defineProperty,w=(e,S)=>l(y(e,"raw",{value:l(e.slice())})),c;const T={title:"Components/Forms/Text Input",component:"modus-wc-text-input",args:{bordered:!0,disabled:!1,"include-clear":!1,"include-search":!1,inputmode:"text",label:"Label",size:"md",spellcheck:!1,type:"text",value:""},argTypes:{"auto-capitalize":{options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"text"}},"auto-correct":{options:["on","off"]},enterkeyhint:{options:["enter","done","go","next","previous","search","send"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},inputmode:{control:{type:"select"},options:["decimal","email","none","numeric","search","tel","text","url"]},size:{options:["sm","md","lg"]},spellcheck:{description:"Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.",table:{category:"attributes",defaultValue:{summary:"false"}}},type:{options:["email","password","search","tel","text","url"]}},decorators:[x],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},z={render:e=>o`
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
  `},n={...z},D={level:"error",message:"Value is required."},a={render:e=>o(c||(c=w([`
    <modus-wc-text-input
      aria-label="Text input with error feedback"
      .feedback=`,`
      id="error-input"
      label=`,`
      ?required=`,`
      .value=`,`
    ></modus-wc-text-input>
    <script>
      // Set feedback via JavaScript
      //const input = document.getElementById('error-input');
      //input.feedback = { level: 'error', message: 'Value is required.' };
    <\/script>
  `])),D,t(e.label),!0,e.value)},r={render:e=>o`
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
  `,args:{placeholder:"Enter text here..."}},i={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var d,s,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var p,m,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      // Set feedback via JavaScript
      //const input = document.getElementById('error-input');
      //input.feedback = { level: 'error', message: 'Value is required.' };
    <\/script>
  \`
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var b,f,$;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...($=(f=r.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var v,g,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(k=(g=i.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const F=["Default","WithErrorFeedback","WithCustomIconSlot","Migration"];export{n as Default,i as Migration,r as WithCustomIconSlot,a as WithErrorFeedback,F as __namedExportsOrder,T as default};
