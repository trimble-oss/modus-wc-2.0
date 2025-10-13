import{w as k}from"./decorator-D4YmxizW.js";import{x as i}from"./lit-element-C8zulti1.js";import{o as t}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const q={title:"Components/Forms/Text Input",component:"modus-wc-text-input",args:{bordered:!0,disabled:!1,"include-clear":!1,"include-search":!1,inputmode:"text",label:"Label",size:"md",spellcheck:!1,type:"text",value:""},argTypes:{"auto-capitalize":{options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"text"}},"auto-correct":{options:["on","off"]},enterkeyhint:{options:["enter","done","go","next","previous","search","send"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},inputmode:{control:{type:"select"},options:["decimal","email","none","numeric","search","tel","text","url"]},size:{options:["sm","md","lg"]},spellcheck:{description:"Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.",table:{category:"attributes",defaultValue:{summary:"false"}}},type:{options:["email","password","search","tel","text","url"]}},decorators:[k],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},g={render:e=>i`
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
  `},n={...g},x={level:"error",message:"Value is required."},a={...g,args:{feedback:x,required:!0}},r={render:e=>i`
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
  `,args:{placeholder:"Enter text here..."}},o={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>i`<div></div>`};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var s,u,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template,
  args: {
    feedback: errorFeedback,
    required: true
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,h,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,$,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=($=o.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};const C=["Default","WithErrorFeedback","WithCustomIconSlot","Migration"];export{n as Default,o as Migration,r as WithCustomIconSlot,a as WithErrorFeedback,C as __namedExportsOrder,q as default};
