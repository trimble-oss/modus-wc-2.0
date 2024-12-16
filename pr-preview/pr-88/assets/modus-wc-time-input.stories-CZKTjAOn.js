import{w as E}from"./decorator-Dt3Huotz.js";import{k as i}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";var m=Object.freeze,O=Object.defineProperty,I=(e,S)=>m(O(e,"raw",{value:m(e.slice())})),d;const L={title:"Components/Forms/Time Input",component:"modus-wc-time-input",args:{"aria-label":"Time input",bordered:!0,disabled:!1,seconds:!1,size:"md"},argTypes:{"auto-complete":{control:{type:"inline-radio"},options:["on","off"]},"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[E],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>i`
    <modus-wc-time-input
      aria-describedby=${t(e["aria-describedby"])}
      aria-label=${e["aria-label"]}
      auto-complete=${t(e["auto-complete"])}
      ?bordered=${e.bordered}
      custom-class=${t(e["custom-class"])}
      ?disabled=${e.disabled}
      input-dir=${t(e["input-dir"])}
      input-id=${t(e["input-id"])}
      input-tab-index=${t(e["input-tab-index"])}
      list=${t(e.list)}
      max=${t(e.max)}
      min=${t(e.min)}
      name=${t(e.name)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      seconds=${t(e.seconds)}
      size=${t(e.size)}
      step=${t(e.step)}
      .timeOptions=${e["time-options"]}
      .value=${e.value}
    ></modus-wc-time-input>
  `},a={render:()=>i`
<style>
.form-control {
  display: flex;
  align-items: center;
}
.modus-wc-input-label {
  padding-inline-end: 8px;
}
</style>
<form action="" method="get">
<div class="form-control">
  <modus-wc-input-label
    for-id="time-input"
    label-text="Example time input"
  ></modus-wc-input-label>
  <modus-wc-time-input
    aria-label="Example time input"
    input-id="time-input"
    name="example-time-input"
  ></modus-wc-time-input>
</div>
</form>
    `},r={render:()=>i`
      <modus-wc-time-input
        aria-label="Example time input"
        seconds="true"
      ></modus-wc-time-input>
    `},o={render:()=>i`
<modus-wc-time-input
  aria-label="Example time input"
  list="datalist-id"
></modus-wc-time-input>
<datalist id="datalist-id">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    `},s={render:()=>i(d||(d=I([`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Example of programmatically adding 'timeOptions'
    const preferredTimes = ['09:30', '12:00', '17:30'];
    document.querySelector('#time-input-with-options').timeOptions = preferredTimes;
  });
<\/script>
<modus-wc-time-input
  aria-label="Example time input"
  id="time-input-with-options"
></modus-wc-time-input>
    `])))};var p,u,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-time-input
      aria-describedby=\${ifDefined(args['aria-describedby'])}
      aria-label=\${args['aria-label']}
      auto-complete=\${ifDefined(args['auto-complete'])}
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      ?disabled=\${args.disabled}
      input-dir=\${ifDefined(args['input-dir'])}
      input-id=\${ifDefined(args['input-id'])}
      input-tab-index=\${ifDefined(args['input-tab-index'])}
      list=\${ifDefined(args.list)}
      max=\${ifDefined(args.max)}
      min=\${ifDefined(args.min)}
      name=\${ifDefined(args.name)}
      ?read-only=\${args['read-only']}
      ?required=\${args.required}
      seconds=\${ifDefined(args.seconds)}
      size=\${ifDefined(args.size)}
      step=\${ifDefined(args.step)}
      .timeOptions=\${args['time-options']}
      .value=\${args.value}
    ></modus-wc-time-input>
  \`
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,f,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return html\`
<style>
.form-control {
  display: flex;
  align-items: center;
}
.modus-wc-input-label {
  padding-inline-end: 8px;
}
</style>
<form action="" method="get">
<div class="form-control">
  <modus-wc-input-label
    for-id="time-input"
    label-text="Example time input"
  ></modus-wc-input-label>
  <modus-wc-time-input
    aria-label="Example time input"
    input-id="time-input"
    name="example-time-input"
  ></modus-wc-time-input>
</div>
</form>
    \`;
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var $,w,x;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-time-input
        aria-label="Example time input"
        seconds="true"
      ></modus-wc-time-input>
    \`;
  }
}`,...(x=(w=r.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,h,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return html\`
<modus-wc-time-input
  aria-label="Example time input"
  list="datalist-id"
></modus-wc-time-input>
<datalist id="datalist-id">
  <option value="06:00"></option>
  <option value="12:00"></option>
  <option value="17:00"></option>
</datalist>
    \`;
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,D,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return html\`
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Example of programmatically adding 'timeOptions'
    const preferredTimes = ['09:30', '12:00', '17:30'];
    document.querySelector('#time-input-with-options').timeOptions = preferredTimes;
  });
<\/script>
<modus-wc-time-input
  aria-label="Example time input"
  id="time-input-with-options"
></modus-wc-time-input>
    \`;
  }
}`,...(T=(D=s.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const C=["Template","TimeInputWithLabel","TimeInputWithSeconds","TimeInputWithDatalist","TimeInputWithOptions"];export{n as Template,o as TimeInputWithDatalist,a as TimeInputWithLabel,s as TimeInputWithOptions,r as TimeInputWithSeconds,C as __namedExportsOrder,L as default};
