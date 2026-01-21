import{w as z}from"./decorator-D4YmxizW.js";import{x as i}from"./lit-element-C8zulti1.js";import{o}from"./if-defined-yv6owfG8.js";import{c as $}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var c=Object.freeze,O=Object.defineProperty,y=(e,d)=>c(O(e,"raw",{value:c(e.slice())})),p,u;const B=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],M={title:"Components/Forms/Select",component:"modus-wc-select",args:{bordered:!0,disabled:!1,label:"Label",options:B,size:"md",value:""},argTypes:{feedback:{description:"Feedback prop for input components",table:{type:{detail:`
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
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[z],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},a={render:e=>i(p||(p=y([`
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
      // Adding this block to show how to set options via JS
      // const select = document.querySelector('modus-wc-select');
      // select.options = options;
    <\/script>
  `])),e.bordered,o(e["custom-class"]),e.disabled,e.feedback,o(e["input-aria-invalid"]),o(e["input-id"]),o(e["input-tab-index"]),o(e.label),o(e.name),e.options,e.required,o(e.size),e.value)},C={level:"error",message:"Value is required."},s={render:e=>i(u||(u=y([`
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
      // Adding this block to show how to set feedback via JS
      // const select = document.getElementById('error-select');
      // select.feedback = { level: 'error', message: 'Value is required.' };
    <\/script>
  `])),C,o(e.label),[],!0,e.value)},r={render:e=>{if(!customElements.get("select-shadow-host")){const d=$({componentTag:"modus-wc-select",propsMapper:(n,x)=>{const t=x;t.bordered=!!n.bordered,t.customClass=n["custom-class"]||"",t.disabled=!!n.disabled,t.inputId=n["input-id"]||"",t.inputTabIndex=n["input-tab-index"]||0,t.label=n.label||"",t.name=n.name||"",t.options=n.options,t.required=!!n.required,t.size=n.size||"md",t.value=n.value}});customElements.define("select-shadow-host",d)}return i`<select-shadow-host
      .props=${{...e}}
    ></select-shadow-host>`}},l={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>i`<div></div>`};var m,b,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      // Adding this block to show how to set options via JS
      // const select = document.querySelector('modus-wc-select');
      // select.options = options;
    <\/script>
  \`
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,f,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      // Adding this block to show how to set feedback via JS
      // const select = document.getElementById('error-select');
      // select.feedback = { level: 'error', message: 'Value is required.' };
    <\/script>
  \`
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var w,S,k;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for select component
    if (!customElements.get('select-shadow-host')) {
      const SelectShadowHost = createShadowHostClass<SelectArgs>({
        componentTag: 'modus-wc-select',
        propsMapper: (v: SelectArgs, el: HTMLElement) => {
          const selectEl = el as unknown as {
            bordered: boolean;
            customClass: string;
            disabled: boolean;
            feedback: IInputFeedbackProp;
            inputId: string;
            inputTabIndex: number;
            label: string;
            name: string;
            options: ISelectOption[];
            required: boolean;
            size: string;
            value: string;
          };
          selectEl.bordered = Boolean(v.bordered);
          selectEl.customClass = v['custom-class'] || '';
          selectEl.disabled = Boolean(v.disabled);
          selectEl.inputId = v['input-id'] || '';
          selectEl.inputTabIndex = v['input-tab-index'] || 0;
          selectEl.label = v.label || '';
          selectEl.name = v.name || '';
          selectEl.options = v.options;
          selectEl.required = Boolean(v.required);
          selectEl.size = v.size || 'md';
          selectEl.value = v.value;
        }
      });
      customElements.define('select-shadow-host', SelectShadowHost);
    }
    return html\`<select-shadow-host
      .props=\${{
      ...args
    }}
    ></select-shadow-host>\`;
  }
}`,...(k=(S=r.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var E,I,q;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(q=(I=l.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const A=["Default","WithErrorFeedback","ShadowDomParent","Migration"];export{a as Default,l as Migration,r as ShadowDomParent,s as WithErrorFeedback,A as __namedExportsOrder,M as default};
