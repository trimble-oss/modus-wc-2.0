import{w as p}from"./decorator-Dt3Huotz.js";import{k as c}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const u=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],g={title:"Components/Forms/Select",component:"modus-wc-select",args:{bordered:!0,disabled:!1,label:"Label",options:u,size:"md",value:""},argTypes:{feedback:{description:"Feedback prop for input components",table:{type:{detail:`
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
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[p],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},t={render:e=>c`
    <modus-wc-select
      aria-label="Select input"
      ?bordered=${e.bordered}
      custom-class=${a(e["custom-class"])}
      ?disabled=${e.disabled}
      .feedback=${a(e.feedback)}
      input-aria-invalid=${a(e["input-aria-invalid"])}
      input-id=${a(e["input-id"])}
      input-tab-index=${a(e["input-tab-index"])}
      label=${a(e.label)}
      name=${a(e.name)}
      .options=${e.options}
      ?required=${e.required}
      size=${a(e.size)}
      .value=${e.value}
    ></modus-wc-select>
  `},b={level:"error",message:"Value is required."},i={render:e=>c`
    <modus-wc-select
      aria-label="Select input"
      .feedback=${b}
      label=${a(e.label)}
      .options=${[]}
      ?required=${!0}
      .value=${e.value}
    ></modus-wc-select>
  `};var n,r,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-select
      aria-label="Select input"
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      ?disabled=\${args.disabled}
      .feedback=\${ifDefined(args.feedback)}
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var s,l,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-select
      aria-label="Select input"
      .feedback=\${errorFeedback}
      label=\${ifDefined(args.label)}
      .options=\${[]}
      ?required=\${true}
      .value=\${args.value}
    ></modus-wc-select>
  \`
}`,...(d=(l=i.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const k=["Default","WithErrorFeedback"];export{t as Default,i as WithErrorFeedback,k as __namedExportsOrder,g as default};
