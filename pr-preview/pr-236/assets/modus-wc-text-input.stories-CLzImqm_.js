import{w as h}from"./decorator-Dt3Huotz.js";import{k as o}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const k={title:"Components/Forms/Text Input",component:"modus-wc-text-input",args:{bordered:!0,disabled:!1,"input-mode":"text",label:"Label",size:"md",spellcheck:!1,type:"text",value:""},argTypes:{"auto-capitalize":{options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"text"}},"auto-correct":{options:["on","off"]},enterkeyhint:{options:["enter","done","go","next","previous","search","send"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"input-mode":{options:["decimal","email","none","numeric","search","tel","text","url"]},size:{options:["sm","md","lg"]},spellcheck:{description:"Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.",table:{category:"attributes",defaultValue:{summary:"false"}}},type:{options:["email","password","search","tel","text","url"]}},decorators:[h],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>o`
    <modus-wc-text-input
      aria-label="Text input"
      auto-capitalize=${t(e["auto-capitalize"])}
      auto-complete=${t(e["auto-complete"])}
      auto-correct=${t(e["auto-correct"])}
      ?bordered=${e.bordered}
      custom-class=${t(e["custom-class"])}
      ?disabled=${e.disabled}
      enterkeyhint=${t(e.enterkeyhint)}
      feedback=${t(e.feedback)}
      input-aria-invalid=${t(e["input-aria-invalid"])}
      input-id=${t(e["input-id"])}
      input-mode=${e["input-mode"]}
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
  `},b={level:"error",message:"Value is required."},a={render:e=>o`
    <modus-wc-text-input
      aria-label="Text input"
      .feedback=${b}
      label=${t(e.label)}
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
| clearable                    |                     | Use Search component |
| disabled                     | disabled            |                      |
| enter-key-hint               | enterkeyhint        |                      |
| error-text                   | feedback.message    | Use feedback level   |
| helper-text                  |                     | Not carried over     |
| include-error-icon           |                     | Not carried over     |
| include-search-icon          |                     | Use Search component |
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var i,l,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-text-input
      aria-label="Text input"
      auto-capitalize=\${ifDefined(args['auto-capitalize'])}
      auto-complete=\${ifDefined(args['auto-complete'])}
      auto-correct=\${ifDefined(args['auto-correct'])}
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      ?disabled=\${args.disabled}
      enterkeyhint=\${ifDefined(args.enterkeyhint)}
      feedback=\${ifDefined(args.feedback)}
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
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,s,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-text-input
      aria-label="Text input"
      .feedback=\${errorFeedback}
      label=\${ifDefined(args.label)}
      ?required=\${true}
      .value=\${args.value}
    ></modus-wc-text-input>
  \`
}`,...(p=(s=a.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var u,m,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
| clearable                    |                     | Use Search component |
| disabled                     | disabled            |                      |
| enter-key-hint               | enterkeyhint        |                      |
| error-text                   | feedback.message    | Use feedback level   |
| helper-text                  |                     | Not carried over     |
| include-error-icon           |                     | Not carried over     |
| include-search-icon          |                     | Use Search component |
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
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const y=["Default","WithErrorFeedback","Migration"];export{n as Default,r as Migration,a as WithErrorFeedback,y as __namedExportsOrder,k as default};
