import{w as v}from"./decorator-Dt3Huotz.js";import{k as o}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";var r=Object.freeze,g=Object.defineProperty,T=(e,O)=>r(g(e,"raw",{value:r(e.slice())})),d;const S={title:"Components/Forms/Time Input",component:"modus-wc-time-input",args:{disabled:!1,label:"Label",size:"md"},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[v],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},i={render:e=>o`
    <modus-wc-time-input
      aria-label="Time input"
      auto-complete=${t(e["auto-complete"])}
      bordered=${t(e.bordered)}
      custom-class=${t(e["custom-class"])}
      datalist-id=${t(e["datalist-id"])}
      ?disabled=${e.disabled}
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
  `},n={render:()=>o`
      <modus-wc-time-input
        aria-label="Example time input"
        show-seconds="true"
      ></modus-wc-time-input>
    `},a={render:()=>o`
<modus-wc-time-input
  aria-label="Example time input"
  datalist-id="datalist-id-1"
></modus-wc-time-input>
<datalist id="datalist-id-1">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    `},s={render:()=>o(d||(d=T([`
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
    `])))};var p,m,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-time-input
      aria-label="Time input"
      auto-complete=\${ifDefined(args['auto-complete'])}
      bordered=\${ifDefined(args.bordered)}
      custom-class=\${ifDefined(args['custom-class'])}
      datalist-id=\${ifDefined(args['datalist-id'])}
      ?disabled=\${args.disabled}
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
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,c,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-time-input
        aria-label="Example time input"
        show-seconds="true"
      ></modus-wc-time-input>
    \`;
  }
}`,...(f=(c=n.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var $,w,b;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var h,D,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(D=s.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};const I=["Template","TimeInputWithSeconds","TimeInputWithDatalist","TimeInputWithDatalistOptions"];export{i as Template,a as TimeInputWithDatalist,s as TimeInputWithDatalistOptions,n as TimeInputWithSeconds,I as __namedExportsOrder,S as default};
