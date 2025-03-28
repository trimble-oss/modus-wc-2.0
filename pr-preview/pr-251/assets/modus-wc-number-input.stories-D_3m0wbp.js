import{w as y}from"./decorator-Dt3Huotz.js";import{k as $}from"./lit-element-DVRzCIa_.js";import{t as r}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const T={title:"Components/Forms/Number Input",component:"modus-wc-number-input",args:{bordered:!0,disabled:!1,"input-mode":"numeric",label:"Label",size:"md",type:"number",value:""},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},"input-aria-invalid":{control:{type:"select"},options:["true","false"]},"input-mode":{control:{type:"select"},options:["decimal","none","numeric"]},size:{control:{type:"select"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["number","range"]}},decorators:[y],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},a={render:e=>$`
    <modus-wc-number-input
      aria-label="Number input"
      auto-complete=${r(e["auto-complete"])}
      ?bordered=${e.bordered}
      currency-symbol=${r(e["currency-symbol"])}
      custom-class=${r(e["custom-class"])}
      ?disabled=${e.disabled}
      .feedback=${r(e.feedback)}
      input-aria-invalid=${r(e["input-aria-invalid"])}
      input-id=${r(e["input-id"])}
      input-mode=${e["input-mode"]}
      input-tab-index=${r(e["input-tab-index"])}
      label=${r(e.label)}
      max=${r(e.max)}
      min=${r(e.min)}
      name=${r(e.name)}
      placeholder=${r(e.placeholder)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      size=${r(e.size)}
      step=${r(e.step)}
      type=${r(e.type)}
      .value=${e.value}
    ></modus-wc-number-input>
  `},t={...a},f={level:"error",message:"Value is required."},o={...a,args:{"currency-symbol":"$"}},n={...a,args:{feedback:f,required:!0}};var c,s,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,u,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template,
  args: {
    'currency-symbol': '$'
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var d,m,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  args: {
    feedback: errorFeedback,
    required: true
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const w=["Default","Currency","WithErrorFeedback"];export{o as Currency,t as Default,n as WithErrorFeedback,w as __namedExportsOrder,T as default};
