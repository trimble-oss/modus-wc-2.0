import{w as u}from"./decorator-Dt3Huotz.js";import{k as c}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const D={title:"Components/Forms/Date",component:"modus-wc-date",args:{bordered:!0,"custom-class":"",disabled:!1,label:"Label","read-only":!1,required:!1,size:"md",value:""},argTypes:{feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[u],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},r={render:e=>c`
      <modus-wc-date
        aria-label="Date input"
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        .feedback=${a(e.feedback)}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        label=${a(e.label)}
        max=${a(e.max)}
        min=${a(e.min)}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        size=${a(e.size)}
        .value=${e.value}
      ></modus-wc-date>
    `},m={level:"error",message:"Value is required."},n={render:e=>c`
    <modus-wc-date
      aria-label="Date input"
      .feedback=${m}
      label=${a(e.label)}
      ?required=${!0}
      .value=${e.value}
    ></modus-wc-date>
  `};var d,i,s;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-date
        aria-label="Date input"
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        .feedback=\${ifDefined(args.feedback)}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        label=\${ifDefined(args.label)}
        max=\${ifDefined(args.max)}
        min=\${ifDefined(args.min)}
        name=\${ifDefined(args.name)}
        placeholder=\${ifDefined(args.placeholder)}
        ?read-only=\${args['read-only']}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        .value=\${args.value}
      ></modus-wc-date>
    \`;
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var t,o,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-date
      aria-label="Date input"
      .feedback=\${errorFeedback}
      label=\${ifDefined(args.label)}
      ?required=\${true}
      .value=\${args.value}
    ></modus-wc-date>
  \`
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const k=["Default","WithErrorFeedback"];export{r as Default,n as WithErrorFeedback,k as __namedExportsOrder,D as default};
