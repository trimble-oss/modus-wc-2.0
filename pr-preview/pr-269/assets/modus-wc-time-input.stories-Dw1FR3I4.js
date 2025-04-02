import{w as y}from"./decorator-Dt3Huotz.js";import{k as i}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";var d=Object.freeze,E=Object.defineProperty,O=(e,S)=>d(E(e,"raw",{value:d(e.slice())})),p;const L={title:"Components/Forms/Time Input",component:"modus-wc-time-input",args:{disabled:!1,label:"Label",size:"md"},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},feedback:{description:"Feedback prop for input components",table:{type:{detail:`
            Interface: IInputFeedbackProp
            Properties:
            - level ('error' | 'info' | 'success' | 'warning'): The feedback level
            - message (string, optional): The feedback message
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[y],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},a={render:e=>i`
    <modus-wc-time-input
      aria-label="Time input"
      auto-complete=${t(e["auto-complete"])}
      bordered=${t(e.bordered)}
      custom-class=${t(e["custom-class"])}
      datalist-id=${t(e["datalist-id"])}
      ?disabled=${e.disabled}
      .feedback=${t(e.feedback)}
      input-id=${t(e["input-id"])}
      input-tab-index=${t(e["input-tab-index"])}
      label=${t(e.label)}
      max=${t(e.max)}
      min=${t(e.min)}
      name=${t(e.name)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      show-seconds=${t(e["show-seconds"])}
      size=${t(e.size)}
      step=${t(e.step)}
      .datalistOptions=${e["datalist-options"]}
      .value=${e.value}
    ></modus-wc-time-input>
  `},n={render:()=>i`
      <modus-wc-time-input
        aria-label="Example time input"
        show-seconds="true"
      ></modus-wc-time-input>
    `},r={render:()=>i`
<modus-wc-time-input
  aria-label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    `},s={render:()=>i(p||(p=O([`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Example of programmatically adding 'datalistOptions'
    const preferredTimes = ['09:30', '12:00', '17:30'];
    document.querySelector('#time-input-with-options').datalistOptions = preferredTimes;
  });
<\/script>
<modus-wc-time-input
  aria-label="Example time input"
  id="time-input-with-options"
></modus-wc-time-input>
    `])))},q={level:"error",message:"Value is required."},o={render:e=>i`
    <modus-wc-time-input
      aria-label="Time input"
      .feedback=${q}
      label=${t(e.label)}
      ?required=${!0}
      .value=${e.value}
    ></modus-wc-time-input>
  `};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-time-input
      aria-label="Time input"
      auto-complete=\${ifDefined(args['auto-complete'])}
      bordered=\${ifDefined(args.bordered)}
      custom-class=\${ifDefined(args['custom-class'])}
      datalist-id=\${ifDefined(args['datalist-id'])}
      ?disabled=\${args.disabled}
      .feedback=\${ifDefined(args.feedback)}
      input-id=\${ifDefined(args['input-id'])}
      input-tab-index=\${ifDefined(args['input-tab-index'])}
      label=\${ifDefined(args.label)}
      max=\${ifDefined(args.max)}
      min=\${ifDefined(args.min)}
      name=\${ifDefined(args.name)}
      ?read-only=\${args['read-only']}
      ?required=\${args.required}
      show-seconds=\${ifDefined(args['show-seconds'])}
      size=\${ifDefined(args.size)}
      step=\${ifDefined(args.step)}
      .datalistOptions=\${args['datalist-options']}
      .value=\${args.value}
    ></modus-wc-time-input>
  \`
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,f,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-time-input
        aria-label="Example time input"
        show-seconds="true"
      ></modus-wc-time-input>
    \`;
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var $,w,h;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-time-input
  aria-label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    \`;
  }
}`,...(h=(w=r.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var g,v,D;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Example of programmatically adding 'datalistOptions'
    const preferredTimes = ['09:30', '12:00', '17:30'];
    document.querySelector('#time-input-with-options').datalistOptions = preferredTimes;
  });
<\/script>
<modus-wc-time-input
  aria-label="Example time input"
  id="time-input-with-options"
></modus-wc-time-input>
    \`;
  }
}`,...(D=(v=s.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var x,k,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-time-input
      aria-label="Time input"
      .feedback=\${errorFeedback}
      label=\${ifDefined(args.label)}
      ?required=\${true}
      .value=\${args.value}
    ></modus-wc-time-input>
  \`
}`,...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const C=["Template","WithSeconds","WithDatalist","WithDatalistOptions","WithErrorFeedback"];export{a as Template,r as WithDatalist,s as WithDatalistOptions,o as WithErrorFeedback,n as WithSeconds,C as __namedExportsOrder,L as default};
