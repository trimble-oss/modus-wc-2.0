import{w as z}from"./decorator-DFROgT0E.js";import{x as a}from"./lit-element-C8zulti1.js";import{o as t}from"./if-defined-yv6owfG8.js";import"./v4-CtRu48qb.js";var l=Object.freeze,q=Object.defineProperty,O=(e,F)=>l(q(e,"raw",{value:l(e.slice())})),m;const W={title:"Components/Forms/Time Input",component:"modus-wc-time-input",args:{disabled:!1,label:"Label",size:"md"},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[z],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>a`
    <modus-wc-time-input
      aria-label="Time input"
      auto-complete=${t(e["auto-complete"])}
      bordered=${t(e.bordered)}
      custom-class=${t(e["custom-class"])}
      datalist-id=${t(e["datalist-id"])}
      ?disabled=${e.disabled}
      .feedback=${e.feedback}
      input-id=${t(e["input-id"])}
      input-tab-index=${t(e["input-tab-index"])}
      label=${t(e.label)}
      max=${t(e.max)}
      min=${t(e.min)}
      name=${t(e.name)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      show-seconds=${t(e["show-seconds"])}
      size=${t(e.size)}
      step=${t(e.step)}
      .datalistOptions=${e["datalist-options"]}
      .value=${e.value}
    ></modus-wc-time-input>
  `},i={render:()=>a`
      <modus-wc-time-input
        aria-label="Example time input"
        show-seconds="true"
      ></modus-wc-time-input>
    `},r={render:()=>a`
<modus-wc-time-input
  aria-label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    `},o={render:()=>a(m||(m=O([`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Example of programmatically adding 'datalistOptions'
    const preferredTimes = ['09:30', '12:00', '17:30'];
    document.querySelector('#time-input-with-options').datalistOptions = preferredTimes;
  });
<\/script>
<modus-wc-time-input
  aria-label="Example time input"
  id="time-input-with-options"
></modus-wc-time-input>
    `])))},C={level:"error",message:"Value is required."},s={render:e=>a`
    <modus-wc-time-input
      aria-label="Time input"
      .feedback=${C}
      label=${t(e.label)}
      ?required=${!0}
      .value=${e.value}
    ></modus-wc-time-input>
  `},d={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Size values have changed from verbose names (\`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop                | 2.0 Prop            | Notes                                   |
|-------------------------|---------------------|-----------------------------------------|
| allowed-chars-regex     |                     | Not carried over                        |
| ampm                    |                     | Not carried over                        |
| aria-label              | aria-label          |                                         |
| auto-focus-input        | autofocus           |                                         |
| auto-format             |                     | Not carried over                        |
| disable-validation      |                     | Not carried over                        |
| disabled                | disabled            |                                         |
| error-text              | feedback.message    | Use \`feedback\` level                  |
| helper-text             |                     | Not carried over                        |
| label                   | label               |                                         |
| max                     | max                 |                                         |
| min                     | min                 |                                         |
| placeholder             |                     | Not carried over                        |
| read-only               | read-only           |                                         |
| required                | required            |                                         |
| size                    | size                | \`medium\` → \`md\`, \`large\` → \`lg\` |
| valid-text              | feedback.message    | Use \`feedback\` level                  |
| value                   | value               |                                         |

#### Event Mapping

| 1.0 Event      | 2.0 Event   | Notes                                                |
|----------------|-------------|------------------------------------------------------|
| timeInputBlur  | inputBlur   |                                                      |
| valueChange    | inputChange |                                                      |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var p,u,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-time-input
      aria-label="Time input"
      auto-complete=\${ifDefined(args['auto-complete'])}
      bordered=\${ifDefined(args.bordered)}
      custom-class=\${ifDefined(args['custom-class'])}
      datalist-id=\${ifDefined(args['datalist-id'])}
      ?disabled=\${args.disabled}
      .feedback=\${args.feedback}
      input-id=\${ifDefined(args['input-id'])}
      input-tab-index=\${ifDefined(args['input-tab-index'])}
      label=\${ifDefined(args.label)}
      max=\${ifDefined(args.max)}
      min=\${ifDefined(args.min)}
      name=\${ifDefined(args.name)}
      ?read-only=\${args['read-only']}
      ?required=\${args.required}
      show-seconds=\${ifDefined(args['show-seconds'])}
      size=\${ifDefined(args.size)}
      step=\${ifDefined(args.step)}
      .datalistOptions=\${args['datalist-options']}
      .value=\${args.value}
    ></modus-wc-time-input>
  \`
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var b,f,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-time-input
        aria-label="Example time input"
        show-seconds="true"
      ></modus-wc-time-input>
    \`;
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,h,$;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-time-input
  aria-label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    \`;
  }
}`,...($=(h=r.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};var w,x,k;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Example of programmatically adding 'datalistOptions'
    const preferredTimes = ['09:30', '12:00', '17:30'];
    document.querySelector('#time-input-with-options').datalistOptions = preferredTimes;
  });
<\/script>
<modus-wc-time-input
  aria-label="Example time input"
  id="time-input-with-options"
></modus-wc-time-input>
    \`;
  }
}`,...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var y,D,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-time-input
      aria-label="Time input"
      .feedback=\${errorFeedback}
      label=\${ifDefined(args.label)}
      ?required=\${true}
      .value=\${args.value}
    ></modus-wc-time-input>
  \`
}`,...(E=(D=s.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var N,S,T;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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

| 1.0 Prop                | 2.0 Prop            | Notes                                   |
|-------------------------|---------------------|-----------------------------------------|
| allowed-chars-regex     |                     | Not carried over                        |
| ampm                    |                     | Not carried over                        |
| aria-label              | aria-label          |                                         |
| auto-focus-input        | autofocus           |                                         |
| auto-format             |                     | Not carried over                        |
| disable-validation      |                     | Not carried over                        |
| disabled                | disabled            |                                         |
| error-text              | feedback.message    | Use \\\`feedback\\\` level                  |
| helper-text             |                     | Not carried over                        |
| label                   | label               |                                         |
| max                     | max                 |                                         |
| min                     | min                 |                                         |
| placeholder             |                     | Not carried over                        |
| read-only               | read-only           |                                         |
| required                | required            |                                         |
| size                    | size                | \\\`medium\\\` → \\\`md\\\`, \\\`large\\\` → \\\`lg\\\` |
| valid-text              | feedback.message    | Use \\\`feedback\\\` level                  |
| value                   | value               |                                         |

#### Event Mapping

| 1.0 Event      | 2.0 Event   | Notes                                                |
|----------------|-------------|------------------------------------------------------|
| timeInputBlur  | inputBlur   |                                                      |
| valueChange    | inputChange |                                                      |
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
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const B=["Template","WithSeconds","WithDatalist","WithDatalistOptions","WithErrorFeedback","Migration"];export{d as Migration,n as Template,r as WithDatalist,o as WithDatalistOptions,s as WithErrorFeedback,i as WithSeconds,B as __namedExportsOrder,W as default};
