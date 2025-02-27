import{k as s}from"./lit-element-DVRzCIa_.js";import{t as l}from"./if-defined-1ipA9LQg.js";const L={title:"Components/Progress",component:"modus-wc-progress",args:{indeterminate:!1,max:100,value:70},parameters:{layout:"padded"}},e={render:r=>s`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="${l(r["custom-class"])}"
        ?indeterminate=${r.indeterminate}
        label=${l(r.label)}
        max=${l(r.max)}
        value=${r.value}
      ></modus-wc-progress>
    `},o={render:()=>s` <modus-wc-progress indeterminate="true"></modus-wc-progress> `},a={render:r=>s`
<style>
  .modus-wc-progress-container .size-small {
    height: 0.5rem;
  }
  .modus-wc-progress-container .size-compact {
    height: 0.25rem;
  }
</style>
<div>
  <div>
    Default size
    <modus-wc-progress value=${r.value}></modus-wc-progress>
  </div>
  <div>
    Small size
    <modus-wc-progress
      value=${r.value}
      custom-class="size-small"
    ></modus-wc-progress>
  </div>
  <div>
    Compact size
    <modus-wc-progress
      value=${r.value}
      custom-class="size-compact"
    ></modus-wc-progress>
  </div>
</div>
    `},n={args:{label:"Loading...",value:50},render:r=>s`
<style>
  .modus-wc-progress-label.custom-label-color {
    color: #f00;
  }
</style>
<modus-wc-progress
  value=${r.value}
  label=${l(r.label)}
  custom-class="custom-label-color"
></modus-wc-progress>
    `},c={render:r=>s`
<style>
  .modus-wc-progress.custom-bar-color::-webkit-progress-value {
    background-color: #f48;
  }
  .modus-wc-progress.custom-bar-color::-moz-progress-bar {
    background-color: #f48;
  }
</style>
<modus-wc-progress
  value=${r.value}
  custom-class="custom-bar-color"
></modus-wc-progress>
    `},t={render:r=>s`
<style>
  .modus-wc-progress.custom-bg-color {
    background-color: #f00;
  }
</style>
<modus-wc-progress
  value=${r.value}
  custom-class="custom-bg-color"
></modus-wc-progress>
    `};var u,m,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="\${ifDefined(args['custom-class'])}"
        ?indeterminate=\${args.indeterminate}
        label=\${ifDefined(args.label)}
        max=\${ifDefined(args.max)}
        value=\${args.value}
      ></modus-wc-progress>
    \`;
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,g,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return html\` <modus-wc-progress indeterminate="true"></modus-wc-progress> \`;
  }
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var v,w,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .modus-wc-progress-container .size-small {
    height: 0.5rem;
  }
  .modus-wc-progress-container .size-compact {
    height: 0.25rem;
  }
</style>
<div>
  <div>
    Default size
    <modus-wc-progress value=\${args.value}></modus-wc-progress>
  </div>
  <div>
    Small size
    <modus-wc-progress
      value=\${args.value}
      custom-class="size-small"
    ></modus-wc-progress>
  </div>
  <div>
    Compact size
    <modus-wc-progress
      value=\${args.value}
      custom-class="size-compact"
    ></modus-wc-progress>
  </div>
</div>
    \`;
  }
}`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var f,$,z;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Loading...',
    value: 50
  },
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .modus-wc-progress-label.custom-label-color {
    color: #f00;
  }
</style>
<modus-wc-progress
  value=\${args.value}
  label=\${ifDefined(args.label)}
  custom-class="custom-label-color"
></modus-wc-progress>
    \`;
  }
}`,...(z=($=n.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var y,h,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .modus-wc-progress.custom-bar-color::-webkit-progress-value {
    background-color: #f48;
  }
  .modus-wc-progress.custom-bar-color::-moz-progress-bar {
    background-color: #f48;
  }
</style>
<modus-wc-progress
  value=\${args.value}
  custom-class="custom-bar-color"
></modus-wc-progress>
    \`;
  }
}`,...(C=(h=c.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var k,S,x;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .modus-wc-progress.custom-bg-color {
    background-color: #f00;
  }
</style>
<modus-wc-progress
  value=\${args.value}
  custom-class="custom-bg-color"
></modus-wc-progress>
    \`;
  }
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const P=["Default","Indeterminate","SizeVariations","LabelTextColor","CustomBarColor","CustomBackgroundColor"];export{t as CustomBackgroundColor,c as CustomBarColor,e as Default,o as Indeterminate,n as LabelTextColor,a as SizeVariations,P as __namedExportsOrder,L as default};
