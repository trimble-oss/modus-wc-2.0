import{w as u}from"./decorator-Dt3Huotz.js";import{k as c}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const h={title:"Components/Forms/Textarea",component:"modus-wc-textarea",args:{bordered:!0,"custom-class":"",disabled:!1,label:"Label",readonly:!1,required:!1,size:"md",spellcheck:!1,value:""},argTypes:{"auto-correct":{options:["on","off"]},enterkeyhint:{options:["enter","done","go","next","previous","search","send"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"input-aria-invalid":{control:{type:"select"},options:["grammar","spelling","true","false"]},size:{control:{type:"select"},options:["sm","md","lg"]},spellcheck:{description:"Whether the element may be checked for spelling errors. A hint for the browser, not a guarantee.",table:{category:"attributes",defaultValue:{summary:"false"}}}},decorators:[u],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},r={render:e=>c`
      <modus-wc-textarea
        aria-label="Textarea input"
        auto-correct=${a(e["auto-correct"])}
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        enterkeyhint=${a(e.enterkeyhint)}
        ?disabled=${e.disabled}
        .feedback=${a(e.feedback)}
        input-aria-invalid=${a(e["input-aria-invalid"])}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        label=${a(e.label)}
        max-length=${a(e["max-length"])}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?readonly=${e.readonly}
        ?required=${e.required}
        rows=${a(e.rows)}
        size=${a(e.size)}
        spellcheck=${a(e.spellcheck)}
        .value=${e.value}
      ></modus-wc-textarea>
    `},p={level:"error",message:"Value is required."},t={render:e=>c`
    <modus-wc-textarea
      aria-label="Textarea input"
      .feedback=${p}
      label=${a(e.label)}
      ?required=${!0}
      .value=${e.value}
    ></modus-wc-textarea>
  `};var n,i,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-textarea
        aria-label="Textarea input"
        auto-correct=\${ifDefined(args['auto-correct'])}
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        enterkeyhint=\${ifDefined(args.enterkeyhint)}
        ?disabled=\${args.disabled}
        .feedback=\${ifDefined(args.feedback)}
        input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        label=\${ifDefined(args.label)}
        max-length=\${ifDefined(args['max-length'])}
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
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var o,l,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-textarea
      aria-label="Textarea input"
      .feedback=\${errorFeedback}
      label=\${ifDefined(args.label)}
      ?required=\${true}
      .value=\${args.value}
    ></modus-wc-textarea>
  \`
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const k=["Default","WithErrorFeedback"];export{r as Default,t as WithErrorFeedback,k as __namedExportsOrder,h as default};
