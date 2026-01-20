import{w as g}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-CucEn6F2.js";import{o as n}from"./if-defined-BiZP-SBN.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var i=Object.freeze,v=Object.defineProperty,k=(e,x)=>i(v(e,"raw",{value:i(e.slice())})),l;const S={title:"Components/Forms/Textarea",component:"modus-wc-textarea",args:{bordered:!0,"custom-class":"",disabled:!1,label:"Label",readonly:!1,required:!1,size:"md",spellcheck:!1,value:""},argTypes:{"auto-correct":{options:["on","off"]},enterkeyhint:{options:["enter","done","go","next","previous","search","send"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"input-aria-invalid":{control:{type:"select"},options:["grammar","spelling","true","false"]},size:{control:{type:"select"},options:["sm","md","lg"]},spellcheck:{description:"Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.",table:{category:"attributes",defaultValue:{summary:"false"}}}},decorators:[g],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},a={render:e=>o`
      <modus-wc-textarea
        aria-label="Textarea input"
        auto-correct=${n(e["auto-correct"])}
        ?bordered=${e.bordered}
        custom-class=${n(e["custom-class"])}
        enterkeyhint=${n(e.enterkeyhint)}
        ?disabled=${e.disabled}
        .feedback=${e.feedback}
        input-aria-invalid=${n(e["input-aria-invalid"])}
        input-id=${n(e["input-id"])}
        input-tab-index=${n(e["input-tab-index"])}
        label=${n(e.label)}
        max-length=${n(e["max-length"])}
        min-length=${n(e["min-length"])}
        name=${n(e.name)}
        placeholder=${n(e.placeholder)}
        ?readonly=${e.readonly}
        ?required=${e.required}
        rows=${n(e.rows)}
        size=${n(e.size)}
        spellcheck=${n(e.spellcheck)}
        .value=${e.value}
      ></modus-wc-textarea>
    `},$={level:"error",message:"Value is required."},r={render:e=>o(l||(l=k([`
    <modus-wc-textarea
      aria-label="Textarea input"
      .feedback=`,`
      id="error-input"
      label=`,`
      ?required=`,`
      .value=`,`
    ></modus-wc-textarea>
    <script>
      // Adding this block to show how to set feedback via JS
      //const input = document.getElementById('error-input');
      //input.feedback = { level: 'error', message: 'Value is required.' };
    <\/script>
  `])),$,n(e.label),!0,e.value)},t={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop                     | 2.0 Prop            | Notes                                                       |
|------------------------------|---------------------|-------------------------------------------------------------|
| aria-label                   | aria-label          |                                                             |
| autocorrect                  | auto-correct        |                                                             |
| auto-focus-input             |                     | Not carried over                                            |
| clearable                    |                     | Not carried over                                            |
| disabled                     | disabled            |                                                             |
| enterkeyhint                 | enterkeyhint        |                                                             |
| error-text                   | feedback.message    | Use \`feedback\` level                                      |
| helper-text                  |                     | Not carried over                                            |
| label                        | label               |                                                             |
| max-length                   | max-length          |                                                             |
| min-length                   | min-length          |                                                             |
| placeholder                  | placeholder         |                                                             |
| read-only                    | readonly            |                                                             |
| rows                         | rows                |                                                             |
| required                     | required            |                                                             |
| size                         | size                | \`medium\` → \`md\`, \`large\` → \`lg\`                     |
| spellcheck                   | spellcheck          |                                                             |
| text-align                   |                     | Not carried over, use CSS instead                           |
| valid-text                   | feedback.message    | Use \`feedback\` level                                      |
| value                        | value               |                                                             |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| valueChange | inputChange |                  |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var s,d,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-textarea
        aria-label="Textarea input"
        auto-correct=\${ifDefined(args['auto-correct'])}
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        enterkeyhint=\${ifDefined(args.enterkeyhint)}
        ?disabled=\${args.disabled}
        .feedback=\${args.feedback}
        input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        label=\${ifDefined(args.label)}
        max-length=\${ifDefined(args['max-length'])}
        min-length=\${ifDefined(args['min-length'])}
        name=\${ifDefined(args.name)}
        placeholder=\${ifDefined(args.placeholder)}
        ?readonly=\${args.readonly}
        ?required=\${args.required}
        rows=\${ifDefined(args.rows)}
        size=\${ifDefined(args.size)}
        spellcheck=\${ifDefined(args.spellcheck)}
        .value=\${args.value}
      ></modus-wc-textarea>
    \`;
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-textarea
      aria-label="Textarea input"
      .feedback=\${errorFeedback}
      id="error-input"
      label=\${ifDefined(args.label)}
      ?required=\${true}
      .value=\${args.value}
    ></modus-wc-textarea>
    <script>
      // Adding this block to show how to set feedback via JS
      //const input = document.getElementById('error-input');
      //input.feedback = { level: 'error', message: 'Value is required.' };
    <\/script>
  \`
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,f,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\\\`medium\\\`, \\\`large\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

#### Prop Mapping

| 1.0 Prop                     | 2.0 Prop            | Notes                                                       |
|------------------------------|---------------------|-------------------------------------------------------------|
| aria-label                   | aria-label          |                                                             |
| autocorrect                  | auto-correct        |                                                             |
| auto-focus-input             |                     | Not carried over                                            |
| clearable                    |                     | Not carried over                                            |
| disabled                     | disabled            |                                                             |
| enterkeyhint                 | enterkeyhint        |                                                             |
| error-text                   | feedback.message    | Use \\\`feedback\\\` level                                      |
| helper-text                  |                     | Not carried over                                            |
| label                        | label               |                                                             |
| max-length                   | max-length          |                                                             |
| min-length                   | min-length          |                                                             |
| placeholder                  | placeholder         |                                                             |
| read-only                    | readonly            |                                                             |
| rows                         | rows                |                                                             |
| required                     | required            |                                                             |
| size                         | size                | \\\`medium\\\` → \\\`md\\\`, \\\`large\\\` → \\\`lg\\\`                     |
| spellcheck                   | spellcheck          |                                                             |
| text-align                   |                     | Not carried over, use CSS instead                           |
| valid-text                   | feedback.message    | Use \\\`feedback\\\` level                                      |
| value                        | value               |                                                             |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| valueChange | inputChange |                  |
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
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const N=["Default","WithErrorFeedback","Migration"];export{a as Default,t as Migration,r as WithErrorFeedback,N as __namedExportsOrder,S as default};
