import{w as A}from"./decorator-Cv9na35H.js";import{b as c}from"./lit-element-DgBvYnzn.js";import{o as r}from"./if-defined-BnVFTJ4o.js";import{c as N}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var h=Object.freeze,P=Object.defineProperty,F=(e,u)=>h(P(e,"raw",{value:h(e.slice())})),m;const V={title:"Components/Forms/Textarea",component:"modus-wc-textarea",args:{"auto-resize":!1,bordered:!0,"custom-class":"",disabled:!1,label:"Label",readonly:!1,required:!1,"show-character-count":!1,size:"md",spellcheck:!1,value:""},argTypes:{"auto-correct":{options:["on","off"]},enterkeyhint:{options:["enter","done","go","next","previous","search","send"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"input-aria-invalid":{control:{type:"select"},options:["grammar","spelling","true","false"]},size:{control:{type:"select"},options:["sm","md","lg"]},spellcheck:{description:"Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.",table:{category:"attributes",defaultValue:{summary:"false"}}}},decorators:[A],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>c`
      <modus-wc-textarea
        auto-correct=${r(e["auto-correct"])}
        ?auto-resize=${e["auto-resize"]}
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
        ?show-character-count=${e["show-character-count"]}
        size=${r(e.size)}
        spellcheck=${r(e.spellcheck)}
        .value=${e.value}
      ></modus-wc-textarea>
    `},o={...n,args:{label:"Comments","max-length":200,"show-character-count":!0},parameters:{docs:{description:{story:"Set `show-character-count` with `max-length` to show the current count and limit below the textarea. The count is linked to the textarea with `aria-describedby`, and screen readers announce once when the limit is reached."}}}},s={...n,args:{"auto-resize":!0,label:"Notes",rows:2,value:"Type more lines to see the textarea grow."},parameters:{docs:{description:{story:"Set `auto-resize` to grow the textarea with its content, starting from `rows`. Browsers that support `field-sizing: content` resize with CSS; others fall back to measuring `scrollHeight`. Use `auto-resize` instead of Angular CDK `cdkTextareaAutosize`, which measures the `modus-wc-textarea` host element rather than the inner textarea."}}}},M={level:"error",message:"Value is required."},i={render:e=>c(m||(m=F([`
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
  `])),M,r(e.label),!0,e.value)},l={render:e=>{if(!customElements.get("textarea-shadow-host")){const u=N({componentTag:"modus-wc-textarea",propsMapper:(t,I)=>{const a=I;a.autoCorrect=t["auto-correct"],a.autoResize=!!t["auto-resize"],a.bordered=!!t.bordered,a.customClass=t["custom-class"]||"",a.disabled=!!t.disabled,a.enterkeyhint=t.enterkeyhint||"",a.inputId=t["input-id"]||"",a.inputTabIndex=t["input-tab-index"]||0,a.label=t.label||"",a.maxLength=t["max-length"]||100,a.minLength=t["min-length"]||0,a.name=t.name||"",a.placeholder=t.placeholder||"",a.readonly=!!t.readonly,a.required=!!t.required,a.rows=typeof t.rows=="number"?t.rows:2,a.showCharacterCount=!!t["show-character-count"],a.size=t.size||""}});customElements.define("textarea-shadow-host",u)}return c`<textarea-shadow-host
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>c`<div></div>`};var p,b,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-textarea
        auto-correct=\${ifDefined(args['auto-correct'])}
        ?auto-resize=\${args['auto-resize']}
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
        ?show-character-count=\${args['show-character-count']}
        size=\${ifDefined(args.size)}
        spellcheck=\${ifDefined(args.spellcheck)}
        .value=\${args.value}
      ></modus-wc-textarea>
    \`;
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,w,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Comments',
    'max-length': 200,
    'show-character-count': true
  },
  parameters: {
    docs: {
      description: {
        story: 'Set \`show-character-count\` with \`max-length\` to show the current count and limit below the textarea. The count is linked to the textarea with \`aria-describedby\`, and screen readers announce once when the limit is reached.'
      }
    }
  }
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var v,k,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Default,
  args: {
    'auto-resize': true,
    label: 'Notes',
    rows: 2,
    value: 'Type more lines to see the textarea grow.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Set \`auto-resize\` to grow the textarea with its content, starting from \`rows\`. Browsers that support \`field-sizing: content\` resize with CSS; others fall back to measuring \`scrollHeight\`. Use \`auto-resize\` instead of Angular CDK \`cdkTextareaAutosize\`, which measures the \`modus-wc-textarea\` host element rather than the inner textarea.'
      }
    }
  }
}`,...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var $,z,E;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var C,S,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for textarea component
    if (!customElements.get('textarea-shadow-host')) {
      const TextareaShadowHost = createShadowHostClass<TextAreaArgs>({
        componentTag: 'modus-wc-textarea',
        propsMapper: (v: TextAreaArgs, el: HTMLElement) => {
          const textareaEl = el as unknown as {
            autoCorrect: string;
            autoResize: boolean;
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
            showCharacterCount: boolean;
            size: string;
          };
          textareaEl.autoCorrect = v['auto-correct'];
          textareaEl.autoResize = Boolean(v['auto-resize']);
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
          textareaEl.showCharacterCount = Boolean(v['show-character-count']);
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
}`,...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var T,q,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(q=d.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const O=["Default","WithCharacterCount","AutoResize","WithErrorFeedback","ShadowDomParent","Migration"];export{s as AutoResize,n as Default,d as Migration,l as ShadowDomParent,o as WithCharacterCount,i as WithErrorFeedback,O as __namedExportsOrder,V as default};
