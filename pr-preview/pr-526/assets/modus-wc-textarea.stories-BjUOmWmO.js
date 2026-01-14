import{w as S}from"./decorator-D4YmxizW.js";import{x as i}from"./lit-element-C8zulti1.js";import{o as r}from"./if-defined-yv6owfG8.js";import{c as q}from"./shadow-host-helper-B2BwyiIi.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var c=Object.freeze,z=Object.defineProperty,C=(e,d)=>c(z(e,"raw",{value:c(e.slice())})),u;const M={title:"Components/Forms/Textarea",component:"modus-wc-textarea",args:{bordered:!0,"custom-class":"",disabled:!1,label:"Label",readonly:!1,required:!1,size:"md",spellcheck:!1,value:""},argTypes:{"auto-correct":{options:["on","off"]},enterkeyhint:{options:["enter","done","go","next","previous","search","send"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"input-aria-invalid":{control:{type:"select"},options:["grammar","spelling","true","false"]},size:{control:{type:"select"},options:["sm","md","lg"]},spellcheck:{description:"Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.",table:{category:"attributes",defaultValue:{summary:"false"}}}},decorators:[S],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},t={render:e=>i`
      <modus-wc-textarea
        aria-label="Textarea input"
        auto-correct=${r(e["auto-correct"])}
        ?bordered=${e.bordered}
        custom-class=${r(e["custom-class"])}
        enterkeyhint=${r(e.enterkeyhint)}
        ?disabled=${e.disabled}
        .feedback=${e.feedback}
        input-aria-invalid=${r(e["input-aria-invalid"])}
        input-id=${r(e["input-id"])}
        input-tab-index=${r(e["input-tab-index"])}
        label=${r(e.label)}
        max-length=${r(e["max-length"])}
        min-length=${r(e["min-length"])}
        name=${r(e.name)}
        placeholder=${r(e.placeholder)}
        ?readonly=${e.readonly}
        ?required=${e.required}
        rows=${r(e.rows)}
        size=${r(e.size)}
        spellcheck=${r(e.spellcheck)}
        .value=${e.value}
      ></modus-wc-textarea>
    `},D={level:"error",message:"Value is required."},o={render:e=>i(u||(u=C([`
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
  `])),D,r(e.label),!0,e.value)},s={render:e=>{if(!customElements.get("textarea-shadow-host")){const d=q({componentTag:"modus-wc-textarea",propsMapper:(a,E)=>{const n=E;n.autoCorrect=a["auto-correct"],n.bordered=!!a.bordered,n.customClass=a["custom-class"]||"",n.disabled=!!a.disabled,n.enterkeyhint=a.enterkeyhint||"",n.inputId=a["input-id"]||"",n.inputTabIndex=a["input-tab-index"]||0,n.label=a.label||"",n.maxLength=a["max-length"]||100,n.minLength=a["min-length"]||0,n.name=a.name||"",n.placeholder=a.placeholder||"",n.readonly=!!a.readonly,n.required=!!a.required,n.rows=typeof a.rows=="number"?a.rows:2,n.size=a.size||""}});customElements.define("textarea-shadow-host",d)}return i`<textarea-shadow-host
      .props=${{...e}}
    ></textarea-shadow-host>`}},l={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>i`<div></div>`};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var b,g,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,v,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for textarea component
    if (!customElements.get('textarea-shadow-host')) {
      const TextareaShadowHost = createShadowHostClass<TextAreaArgs>({
        componentTag: 'modus-wc-textarea',
        propsMapper: (v: TextAreaArgs, el: HTMLElement) => {
          const textareaEl = el as unknown as {
            autoCorrect: string;
            bordered: boolean;
            customClass: string;
            disabled: boolean;
            enterkeyhint: string;
            feedback: IInputFeedbackProp;
            inputId: string;
            inputTabIndex: number;
            label: string;
            maxLength: number;
            minLength: number;
            name: string;
            placeholder: string;
            readonly: boolean;
            required: boolean;
            rows: number;
            size: string;
          };
          textareaEl.autoCorrect = v['auto-correct'];
          textareaEl.bordered = Boolean(v.bordered);
          textareaEl.customClass = v['custom-class'] || '';
          textareaEl.disabled = Boolean(v.disabled);
          textareaEl.enterkeyhint = v.enterkeyhint || '';
          textareaEl.inputId = v['input-id'] || '';
          textareaEl.inputTabIndex = v['input-tab-index'] || 0;
          textareaEl.label = v.label || '';
          textareaEl.maxLength = v['max-length'] || 100;
          textareaEl.minLength = v['min-length'] || 0;
          textareaEl.name = v.name || '';
          textareaEl.placeholder = v.placeholder || '';
          textareaEl.readonly = Boolean(v.readonly);
          textareaEl.required = Boolean(v.required);
          textareaEl.rows = typeof v.rows === 'number' ? v.rows : 2;
          textareaEl.size = v.size || '';
        }
      });
      customElements.define('textarea-shadow-host', TextareaShadowHost);
    }
    return html\`<textarea-shadow-host
      .props=\${{
      ...args
    }}
    ></textarea-shadow-host>\`;
  }
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var w,$,y;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(y=($=l.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};const _=["Default","WithErrorFeedback","ShadowDomParent","Migration"];export{t as Default,l as Migration,s as ShadowDomParent,o as WithErrorFeedback,_ as __namedExportsOrder,M as default};
