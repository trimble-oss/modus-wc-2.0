import{w as C}from"./decorator-Cv9na35H.js";import{b as r}from"./lit-element-DgBvYnzn.js";import{o as a}from"./if-defined-BnVFTJ4o.js";import{c as I}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var u=Object.freeze,T=Object.defineProperty,B=(e,c)=>u(T(e,"raw",{value:u(e.slice())})),m;const H={title:"Components/Forms/Textarea",component:"modus-wc-textarea",args:{bordered:!0,"custom-class":"",disabled:!1,label:"Label",readonly:!1,required:!1,size:"md",spellcheck:!1,value:""},argTypes:{"auto-correct":{options:["on","off"]},enterkeyhint:{options:["enter","done","go","next","previous","search","send"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"input-aria-invalid":{control:{type:"select"},options:["grammar","spelling","true","false"]},size:{control:{type:"select"},options:["sm","md","lg"]},spellcheck:{description:"Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.",table:{category:"attributes",defaultValue:{summary:"false"}}}},decorators:[C],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},o={render:e=>r`
      <modus-wc-textarea
        auto-correct=${a(e["auto-correct"])}
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        enterkeyhint=${a(e.enterkeyhint)}
        ?disabled=${e.disabled}
        .feedback=${e.feedback}
        input-aria-invalid=${a(e["input-aria-invalid"])}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        label=${a(e.label)}
        max-length=${a(e["max-length"])}
        min-length=${a(e["min-length"])}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?readonly=${e.readonly}
        ?required=${e.required}
        rows=${a(e.rows)}
        size=${a(e.size)}
        spellcheck=${a(e.spellcheck)}
        .value=${e.value}
      ></modus-wc-textarea>
    `},P={level:"error",message:"Value is required."},s={render:e=>r(m||(m=B([`
    <modus-wc-textarea
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
  `])),P,a(e.label),!0,e.value)},i={parameters:{docs:{description:{story:"\nThe inner `<textarea>` renders in light DOM, so `field-sizing: content` applied through `custom-class`\n(or a selector such as `modus-wc-textarea textarea`) grows it with its content. Set `min-block-size`\nfor the starting height, since `rows` no longer controls the height once `field-sizing` is applied.\n\nBrowsers without `field-sizing` support keep the regular `rows` height.\n        "}}},render:()=>r`
    <style>
      modus-wc-textarea {
        display: block;
        width: 300px;
      }

      .textarea-auto-resize {
        box-sizing: border-box;
        field-sizing: content;
        min-block-size: 4lh;
        resize: none;
        width: 100%;
      }
    </style>
    <modus-wc-textarea
      custom-class="textarea-auto-resize"
      label="Auto-resizing textarea"
      placeholder="Placeholder text"
    ></modus-wc-textarea>
  `},l={render:e=>{if(!customElements.get("textarea-shadow-host")){const c=I({componentTag:"modus-wc-textarea",propsMapper:(n,q)=>{const t=q;t.autoCorrect=n["auto-correct"],t.bordered=!!n.bordered,t.customClass=n["custom-class"]||"",t.disabled=!!n.disabled,t.enterkeyhint=n.enterkeyhint||"",t.inputId=n["input-id"]||"",t.inputTabIndex=n["input-tab-index"]||0,t.label=n.label||"",t.maxLength=n["max-length"]||100,t.minLength=n["min-length"]||0,t.name=n.name||"",t.placeholder=n.placeholder||"",t.readonly=!!n.readonly,t.required=!!n.required,t.rows=typeof n.rows=="number"?n.rows:2,t.size=n.size||""}});customElements.define("textarea-shadow-host",c)}return r`<textarea-shadow-host
      .props=${{...e}}
    ></textarea-shadow-host>`}},d={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var p,h,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-textarea
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
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,f,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-textarea
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
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var w,v,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
The inner \\\`<textarea>\\\` renders in light DOM, so \\\`field-sizing: content\\\` applied through \\\`custom-class\\\`
(or a selector such as \\\`modus-wc-textarea textarea\\\`) grows it with its content. Set \\\`min-block-size\\\`
for the starting height, since \\\`rows\\\` no longer controls the height once \\\`field-sizing\\\` is applied.

Browsers without \\\`field-sizing\\\` support keep the regular \\\`rows\\\` height.
        \`
      }
    }
  },
  render: () => html\`
    <style>
      modus-wc-textarea {
        display: block;
        width: 300px;
      }

      .textarea-auto-resize {
        box-sizing: border-box;
        field-sizing: content;
        min-block-size: 4lh;
        resize: none;
        width: 100%;
      }
    </style>
    <modus-wc-textarea
      custom-class="textarea-auto-resize"
      label="Auto-resizing textarea"
      placeholder="Placeholder text"
    ></modus-wc-textarea>
  \`
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var y,$,z;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=($=l.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var E,S,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const O=["Default","WithErrorFeedback","AutoResize","ShadowDomParent","Migration"];export{i as AutoResize,o as Default,d as Migration,l as ShadowDomParent,s as WithErrorFeedback,O as __namedExportsOrder,H as default};
