import{w as z}from"./decorator-D4YmxizW.js";import{x as d}from"./lit-element-CucEn6F2.js";import{o as t}from"./if-defined-BiZP-SBN.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var m=Object.freeze,O=Object.defineProperty,C=(e,P)=>m(O(e,"raw",{value:m(e.slice())})),p;const L={title:"Components/Forms/Time Input",component:"modus-wc-time-input",args:{disabled:!1,label:"Label",size:"md"},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[z],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},l={render:e=>d`
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
  `},a={...l},r={...l,args:{"show-seconds":!0}},n={render:()=>d`
<modus-wc-time-input
  aria-label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    `},o={render:()=>d(p||(p=C([`
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
    `])))},F={level:"error",message:"Value is required."},i={...l,args:{feedback:F,required:!0},parameters:{docs:{source:{transform:e=>`${e}
<script>
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
    level: 'error',
    message: 'Value is required.'
  };
<\/script>`}}}},s={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>d`<div></div>`};var c,u,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,f,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template,
  args: {
    'show-seconds': true
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,w,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var k,y,E;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(y=o.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var $,S,N;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
  const timeInputElement = document.querySelector('modus-wc-time-input');
  timeInputElement.feedback = {
    level: 'error',
    message: 'Value is required.'
  };
<\/script>\`
      }
    }
  }
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var q,I,T;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(T=(I=s.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const U=["Default","WithSeconds","WithDatalist","WithDatalistOptions","WithErrorFeedback","Migration"];export{a as Default,s as Migration,n as WithDatalist,o as WithDatalistOptions,i as WithErrorFeedback,r as WithSeconds,U as __namedExportsOrder,L as default};
