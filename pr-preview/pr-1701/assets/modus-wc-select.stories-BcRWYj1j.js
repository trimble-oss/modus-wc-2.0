import{w as D}from"./decorator-Cv9na35H.js";import{b as a}from"./lit-element-DgBvYnzn.js";import{o as n}from"./if-defined-BnVFTJ4o.js";import{c as T}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var p=Object.freeze,B=Object.defineProperty,O=(e,c)=>p(B(e,"raw",{value:p(e.slice())})),u,b;const N=[{label:"Select an option",value:"",hidden:!0},{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],W={title:"Components/Forms/Select",component:"modus-wc-select",args:{bordered:!0,disabled:!1,label:"Label",options:N,size:"md",value:""},argTypes:{feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"input-aria-invalid":{control:{type:"select"},options:["true","false"]},options:{description:"Array of option objects for the select dropdown",table:{type:{detail:`
            Interface: ISelectOption
            Properties:
            - disabled (boolean, optional): Whether the option is disabled and cannot be selected
            - hidden (boolean, optional): Whether the option is hidden from the dropdown list
            - label (string): Display text for the option
            - value (string): The value of the option
          `}}},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]}},decorators:[D],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]},docs:{description:{component:"\nA customizable select component used to pick a value from a list of options.\n\n### Allowing users to clear the selection\n\nThe select follows native `<select>` behavior: it has no clear button and Escape does not clear it.\nTo let users reset to no selection, include an option with an empty value that is neither `disabled` nor `hidden`,\nfor example `{ label: 'None', value: '' }`. Choosing it sets `value` to `''` and emits `inputChange`.\n\n- Keyboard and pointer users both reach this option natively (arrow keys, type-ahead, Enter, or a click).\n- A placeholder such as `{ label: 'Select an account', value: '', disabled: true, hidden: true }` cannot be chosen again,\n  so once a value is selected it can't be reset. Use it only when clearing is not allowed.\n- With `required`, the first empty-value option acts as the placeholder label option. Users can still choose it,\n  but the field then fails constraint validation (`valueMissing`).\n\nSee the Clearable story for an example.\n        "}}}},s={render:e=>a(u||(u=O([`
    <modus-wc-select
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
        { label: 'Select an option', value: '', hidden: true },
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ];
      // Adding this block to show how to set options via JS
      // const select = document.querySelector('modus-wc-select');
      // select.options = options;
    <\/script>
  `])),e.bordered,n(e["custom-class"]),e.disabled,e.feedback,n(e["input-aria-invalid"]),n(e["input-id"]),n(e["input-tab-index"]),n(e.label),n(e.name),e.options,e.required,n(e.size),e.value)},P={level:"error",message:"Value is required."},i={render:e=>a(b||(b=O([`
    <modus-wc-select
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
  `])),P,n(e.label),[],!0,e.value)},F=[{label:"None",value:""},{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],r={args:{options:F,value:"2"},parameters:{docs:{description:{story:"The first option, \"None\", has an empty value and is neither disabled nor hidden. Choose it with the keyboard or pointer to reset `value` to `''`."}}},render:e=>a`
    <modus-wc-select
      ?bordered=${e.bordered}
      custom-class=${n(e["custom-class"])}
      ?disabled=${e.disabled}
      .feedback=${e.feedback}
      input-aria-invalid=${n(e["input-aria-invalid"])}
      input-id=${n(e["input-id"])}
      input-tab-index=${n(e["input-tab-index"])}
      label=${n(e.label)}
      name=${n(e.name)}
      .options=${e.options}
      ?required=${e.required}
      size=${n(e.size)}
      .value=${e.value}
    ></modus-wc-select>
  `},l={render:e=>{if(!customElements.get("select-shadow-host")){const c=T({componentTag:"modus-wc-select",propsMapper:(t,C)=>{const o=C;o.bordered=!!t.bordered,o.customClass=t["custom-class"]||"",o.disabled=!!t.disabled,o.inputId=t["input-id"]||"",o.inputTabIndex=t["input-tab-index"]||0,o.label=t.label||"",o.name=t.name||"",o.options=t.options,o.required=!!t.required,o.size=t.size||"md",o.value=t.value}});customElements.define("select-shadow-host",c)}return a`<select-shadow-host
      .props=${{...e}}
    ></select-shadow-host>`}},d={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var m,h,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-select
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
        { label: 'Select an option', value: '', hidden: true },
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ];
      // Adding this block to show how to set options via JS
      // const select = document.querySelector('modus-wc-select');
      // select.options = options;
    <\/script>
  \`
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,g,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-select
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
}`,...(w=(g=i.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var $,k,S;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    options: clearableOptions,
    value: '2'
  },
  parameters: {
    docs: {
      description: {
        story: 'The first option, "None", has an empty value and is neither disabled nor hidden. Choose it with the keyboard or pointer to reset \`value\` to \`\\'\\'\`.'
      }
    }
  },
  render: args => html\`
    <modus-wc-select
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
  \`
}`,...(S=(k=r.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var y,E,q;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(q=(E=l.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var x,z,I;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(I=(z=d.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const J=["Default","WithErrorFeedback","Clearable","ShadowDomParent","Migration"];export{r as Clearable,s as Default,d as Migration,l as ShadowDomParent,i as WithErrorFeedback,J as __namedExportsOrder,W as default};
