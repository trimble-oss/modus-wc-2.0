import{w as h}from"./decorator-Dt3Huotz.js";import{k as i}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const k={title:"Components/Forms/Text Input",component:"modus-wc-text-input",args:{bordered:!0,disabled:!1,"include-clear":!1,"include-search":!1,"input-mode":"text",label:"Label",size:"md",spellcheck:!1,type:"text",value:""},argTypes:{"auto-capitalize":{options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"text"}},"auto-correct":{options:["on","off"]},enterkeyhint:{options:["enter","done","go","next","previous","search","send"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"input-mode":{options:["decimal","email","none","numeric","search","tel","text","url"]},size:{options:["sm","md","lg"]},spellcheck:{description:"Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.",table:{category:"attributes",defaultValue:{summary:"false"}}},type:{options:["email","password","search","tel","text","url"]}},decorators:[h],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},t={render:e=>i`
    <modus-wc-text-input
      aria-label="Text input"
      auto-capitalize=${n(e["auto-capitalize"])}
      auto-complete=${n(e["auto-complete"])}
      auto-correct=${n(e["auto-correct"])}
      ?bordered=${e.bordered}
      clear-aria-label=${n(e["clear-aria-label"])}
      custom-class=${n(e["custom-class"])}
      ?disabled=${e.disabled}
      enterkeyhint=${n(e.enterkeyhint)}
      .feedback=${e.feedback}
      include-clear=${n(e["include-clear"])}
      include-search=${n(e["include-search"])}
      input-aria-invalid=${n(e["input-aria-invalid"])}
      input-id=${n(e["input-id"])}
      input-mode=${e["input-mode"]}
      input-tab-index=${n(e["input-tab-index"])}
      label=${n(e.label)}
      max-length=${n(e["max-length"])}
      min-length=${n(e["min-length"])}
      name=${n(e.name)}
      pattern=${n(e.pattern)}
      placeholder=${n(e.placeholder)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      size=${n(e.size)}
      spellcheck=${n(e.spellcheck)}
      type=${n(e.type)}
      .value=${e.value}
    ></modus-wc-text-input>
  `},b={level:"error",message:"Value is required."},a={render:e=>i`
    <modus-wc-text-input
      aria-label="Text input"
      .feedback=${b}
      label=${n(e.label)}
      ?required=${!0}
      .value=${e.value}
    ></modus-wc-text-input>
  `},r={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.

#### Prop Mapping

| 1.0 Prop                     | 2.0 Prop            | Notes                |
|------------------------------|---------------------|----------------------|
| aria-label                   | aria-label          |                      |
| autocapitalize               | auto-capitalize     |                      |
| autocorrect                  | auto-correct        |                      |
| autocomplete                 | autocomplete        |                      |
| auto-focus-input             | autofocus           |                      |
| clearable                    | include-clear       |                      |
| disabled                     | disabled            |                      |
| enter-key-hint               | enterkeyhint        |                      |
| error-text                   | feedback.message    | Use feedback level   |
| helper-text                  |                     | Not carried over     |
| include-error-icon           |                     | Not carried over     |
| include-search-icon          | include-search      |                      |
| include-password-text-toggle |                     | Not carried over     |
| inputmode                    | input-mode          |                      |
| label                        | label               |                      |
| max-length                   | max-length          |                      |
| pattern                      | pattern             |                      |
| placeholder                  | placeholder         |                      |
| read-only                    | read-only           |                      |
| required                     | required            |                      |
| size                         | size                |                      |
| spellcheck                   | spellcheck          |                      |
| text-align                   |                     | Not carried over     |
| type                         | type                |                      |
| valid-text                   |                     | Not carried over     |
| value                        | value               |                      |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| valueChange | inputChange |                  |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>i`<div></div>`};var o,l,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-text-input
      aria-label="Text input"
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
      input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
      input-id=\${ifDefined(args['input-id'])}
      input-mode=\${args['input-mode']}
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
    ></modus-wc-text-input>
  \`
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,s,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-text-input
      aria-label="Text input"
      .feedback=\${errorFeedback}
      label=\${ifDefined(args.label)}
      ?required=\${true}
      .value=\${args.value}
    ></modus-wc-text-input>
  \`
}`,...(u=(s=a.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var p,m,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.

#### Prop Mapping

| 1.0 Prop                     | 2.0 Prop            | Notes                |
|------------------------------|---------------------|----------------------|
| aria-label                   | aria-label          |                      |
| autocapitalize               | auto-capitalize     |                      |
| autocorrect                  | auto-correct        |                      |
| autocomplete                 | autocomplete        |                      |
| auto-focus-input             | autofocus           |                      |
| clearable                    | include-clear       |                      |
| disabled                     | disabled            |                      |
| enter-key-hint               | enterkeyhint        |                      |
| error-text                   | feedback.message    | Use feedback level   |
| helper-text                  |                     | Not carried over     |
| include-error-icon           |                     | Not carried over     |
| include-search-icon          | include-search      |                      |
| include-password-text-toggle |                     | Not carried over     |
| inputmode                    | input-mode          |                      |
| label                        | label               |                      |
| max-length                   | max-length          |                      |
| pattern                      | pattern             |                      |
| placeholder                  | placeholder         |                      |
| read-only                    | read-only           |                      |
| required                     | required            |                      |
| size                         | size                |                      |
| spellcheck                   | spellcheck          |                      |
| text-align                   |                     | Not carried over     |
| type                         | type                |                      |
| valid-text                   |                     | Not carried over     |
| value                        | value               |                      |

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
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const y=["Default","WithErrorFeedback","Migration"];export{t as Default,r as Migration,a as WithErrorFeedback,y as __namedExportsOrder,k as default};
