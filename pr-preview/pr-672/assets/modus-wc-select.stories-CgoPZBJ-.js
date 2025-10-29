import{w as k}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-C8zulti1.js";import{o as n}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var i=Object.freeze,S=Object.defineProperty,h=(e,$)=>i(S(e,"raw",{value:i(e.slice())})),s,l;const y=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],F={title:"Components/Forms/Select",component:"modus-wc-select",args:{bordered:!0,disabled:!1,label:"Label",options:y,size:"md",value:""},argTypes:{feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"input-aria-invalid":{control:{type:"select"},options:["true","false"]},options:{description:"Array of option objects for the select dropdown",table:{type:{detail:`
            Interface: ISelectOption
            Properties:
            - disabled (boolean, optional): Whether the option is disabled and cannot be selected
            - label (string): Display text for the option
            - value (string): The value of the option
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[k],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},a={render:e=>o(s||(s=h([`
    <modus-wc-select
      aria-label="Select input"
      ?bordered=`,`
      custom-class=`,`
      ?disabled=`,`
      .feedback=`,`
      input-aria-invalid=`,`
      input-id=`,`
      input-tab-index=`,`
      label=`,`
      name=`,`
      .options=`,`
      ?required=`,`
      size=`,`
      .value=`,`
    ></modus-wc-select>
    <script>
      const options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ];
      // Set options via JavaScript
      // const select = document.querySelector('modus-wc-select');
      // select.options = options;
    <\/script>
  `])),e.bordered,n(e["custom-class"]),e.disabled,e.feedback,n(e["input-aria-invalid"]),n(e["input-id"]),n(e["input-tab-index"]),n(e.label),n(e.name),e.options,e.required,n(e.size),e.value)},w={level:"error",message:"Value is required."},t={render:e=>o(l||(l=h([`
    <modus-wc-select
      aria-label="Select input"
      .feedback=`,`
      id="error-select"
      label=`,`
      .options=`,`
      ?required=`,`
      .value=`,`
    ></modus-wc-select>
    <script>
      // Set feedback via JavaScript
      // feedback = { level: 'error', message: 'Value is required.' };
      // const select = document.getElementById('error-select');
      // select.feedback = feedback;
    <\/script>
  `])),w,n(e.label),[],!0,e.value)},r={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - The options format has changed to use a standardized \`ISelectOption\` object array.
  - Size values have changed from verbose names (\`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop              | 2.0 Prop            | Notes                                                |
|-----------------------|---------------------|------------------------------------------------------|
| aria-label            | aria-label          |                                                      |
| disabled              | disabled            |                                                      |
| error-text            | feedback.message    | Use \`feedback\` level                               |
| helper-text           |                     | Not carried over                                     |
| label                 | label               |                                                      |
| options               | options             | Format changed to require array of \`ISelectOption\` objects |
| options-display-prop  |                     | Not carried over                                     |
| placeholder           |                     | Not carried over                                     |
| required              | required            |                                                      |
| size                  | size                | \`medium\` → \`md\`, \`large\` → \`lg\`              |
| valid-text            | feedback.message    | Use \`feedback\` level                               |
| value                 | value               |                                                      |

#### Event Mapping

| 1.0 Event    | 2.0 Event   | Notes            |
|--------------|-------------|------------------|
| valueChange  | inputChange |                  |
| inputBlur    | inputBlur   |                  |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var d,c,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-select
      aria-label="Select input"
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      ?disabled=\${args.disabled}
      .feedback=\${args.feedback}
      input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
      input-id=\${ifDefined(args['input-id'])}
      input-tab-index=\${ifDefined(args['input-tab-index'])}
      label=\${ifDefined(args.label)}
      name=\${ifDefined(args.name)}
      .options=\${args.options}
      ?required=\${args.required}
      size=\${ifDefined(args.size)}
      .value=\${args.value}
    ></modus-wc-select>
    <script>
      const options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ];
      // Set options via JavaScript
      // const select = document.querySelector('modus-wc-select');
      // select.options = options;
    <\/script>
  \`
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-select
      aria-label="Select input"
      .feedback=\${errorFeedback}
      id="error-select"
      label=\${ifDefined(args.label)}
      .options=\${[]}
      ?required=\${true}
      .value=\${args.value}
    ></modus-wc-select>
    <script>
      // Set feedback via JavaScript
      // feedback = { level: 'error', message: 'Value is required.' };
      // const select = document.getElementById('error-select');
      // select.feedback = feedback;
    <\/script>
  \`
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,f,g;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - The options format has changed to use a standardized \\\`ISelectOption\\\` object array.
  - Size values have changed from verbose names (\\\`medium\\\`, \\\`large\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

#### Prop Mapping

| 1.0 Prop              | 2.0 Prop            | Notes                                                |
|-----------------------|---------------------|------------------------------------------------------|
| aria-label            | aria-label          |                                                      |
| disabled              | disabled            |                                                      |
| error-text            | feedback.message    | Use \\\`feedback\\\` level                               |
| helper-text           |                     | Not carried over                                     |
| label                 | label               |                                                      |
| options               | options             | Format changed to require array of \\\`ISelectOption\\\` objects |
| options-display-prop  |                     | Not carried over                                     |
| placeholder           |                     | Not carried over                                     |
| required              | required            |                                                      |
| size                  | size                | \\\`medium\\\` → \\\`md\\\`, \\\`large\\\` → \\\`lg\\\`              |
| valid-text            | feedback.message    | Use \\\`feedback\\\` level                               |
| value                 | value               |                                                      |

#### Event Mapping

| 1.0 Event    | 2.0 Event   | Notes            |
|--------------|-------------|------------------|
| valueChange  | inputChange |                  |
| inputBlur    | inputBlur   |                  |
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
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const D=["Default","WithErrorFeedback","Migration"];export{a as Default,r as Migration,t as WithErrorFeedback,D as __namedExportsOrder,F as default};
