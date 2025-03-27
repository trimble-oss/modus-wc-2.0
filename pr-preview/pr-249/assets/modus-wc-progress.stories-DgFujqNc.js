import{k as s}from"./lit-element-DVRzCIa_.js";import{t as r}from"./if-defined-1ipA9LQg.js";const V={title:"Components/Progress",component:"modus-wc-progress",args:{indeterminate:!1,max:100,value:70,variant:"default"},argTypes:{variant:{control:{type:"select"},options:["default","radial"]}},parameters:{layout:"padded"}},a={render:e=>s`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="${r(e["custom-class"])}"
        ?indeterminate=${e.indeterminate}
        label=${r(e.label)}
        max=${r(e.max)}
        value=${e.value}
        variant=${r(e.variant)}
      ></modus-wc-progress>
    `},o={render:()=>s` <modus-wc-progress indeterminate="true"></modus-wc-progress> `},n={render:e=>s`
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
    <modus-wc-progress value=${e.value}></modus-wc-progress>
  </div>
  <div>
    Small size
    <modus-wc-progress
      value=${e.value}
      custom-class="size-small"
    ></modus-wc-progress>
  </div>
  <div>
    Compact size
    <modus-wc-progress
      value=${e.value}
      custom-class="size-compact"
    ></modus-wc-progress>
  </div>
</div>
    `},t={args:{label:"Loading...",value:50},render:e=>s`
<style>
  .modus-wc-progress-label.custom-label-color {
    color: #f00;
  }
</style>
<modus-wc-progress
  value=${e.value}
  label=${r(e.label)}
  custom-class="custom-label-color"
></modus-wc-progress>
    `},l={render:e=>s`
<style>
  .modus-wc-progress.custom-bar-color::-webkit-progress-value {
    background-color: #f48;
  }
  .modus-wc-progress.custom-bar-color::-moz-progress-bar {
    background-color: #f48;
  }
</style>
<modus-wc-progress
  value=${e.value}
  custom-class="custom-bar-color"
></modus-wc-progress>
    `},c={render:e=>s`
<style>
  .modus-wc-progress.custom-bg-color {
    background-color: #f00;
  }
</style>
<modus-wc-progress
  value=${e.value}
  custom-class="custom-bg-color"
></modus-wc-progress>
    `},i={render:e=>s`
<style>
  #radial-icon {
    justify-content: center;
  }
</style>
<modus-wc-progress
  aria-label="progress radial"
  ?indeterminate=${e.indeterminate}
  max=${r(e.max)}
  variant="radial"
  value=${e.value}
>
  <modus-wc-icon id="radial-icon" name="clipboard" size="md"></modus-wc-icon>
  ${e.value}%
</modus-wc-progress>
    `,parameters:{layout:"centered"}},m={render:e=>s`
<style>
  .radial-progress--lg {
    --size: 12rem;
  }
  .radial-progress--thin {
    --thickness: 0.5rem;
  }
</style>
<modus-wc-progress
  aria-label="progress radial"
  custom-class="radial-progress--lg"
  ?indeterminate=${e.indeterminate}
  max=${r(e.max)}
  variant="radial"
  value=${e.value}
>
  ${e.value}%
</modus-wc-progress>
<modus-wc-progress
  aria-label="progress radial"
  custom-class="radial-progress--lg radial-progress--thin"
  ?indeterminate=${e.indeterminate}
  max=${r(e.max)}
  variant="radial"
  value=${e.value}
>
  ${e.value}%
</modus-wc-progress>
    `,parameters:{layout:"centered"}};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="\${ifDefined(args['custom-class'])}"
        ?indeterminate=\${args.indeterminate}
        label=\${ifDefined(args.label)}
        max=\${ifDefined(args.max)}
        value=\${args.value}
        variant=\${ifDefined(args.variant)}
      ></modus-wc-progress>
    \`;
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,v,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return html\` <modus-wc-progress indeterminate="true"></modus-wc-progress> \`;
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var b,$,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=($=n.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};var y,h,z;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(h=t.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var x,C,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var S,D,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var B,L,R;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  #radial-icon {
    justify-content: center;
  }
</style>
<modus-wc-progress
  aria-label="progress radial"
  ?indeterminate=\${args.indeterminate}
  max=\${ifDefined(args.max)}
  variant="radial"
  value=\${args.value}
>
  <modus-wc-icon id="radial-icon" name="clipboard" size="md"></modus-wc-icon>
  \${args.value}%
</modus-wc-progress>
    \`;
  },
  parameters: {
    layout: 'centered'
  }
}`,...(R=(L=i.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var W,P,j;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .radial-progress--lg {
    --size: 12rem;
  }
  .radial-progress--thin {
    --thickness: 0.5rem;
  }
</style>
<modus-wc-progress
  aria-label="progress radial"
  custom-class="radial-progress--lg"
  ?indeterminate=\${args.indeterminate}
  max=\${ifDefined(args.max)}
  variant="radial"
  value=\${args.value}
>
  \${args.value}%
</modus-wc-progress>
<modus-wc-progress
  aria-label="progress radial"
  custom-class="radial-progress--lg radial-progress--thin"
  ?indeterminate=\${args.indeterminate}
  max=\${ifDefined(args.max)}
  variant="radial"
  value=\${args.value}
>
  \${args.value}%
</modus-wc-progress>
    \`;
  },
  parameters: {
    layout: 'centered'
  }
}`,...(j=(P=m.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const _=["Default","Indeterminate","SizeVariations","LabelTextColor","CustomBarColor","CustomBackgroundColor","RadialWithSlottedContent","RadialWithCustomSizeAndThickness"];export{c as CustomBackgroundColor,l as CustomBarColor,a as Default,o as Indeterminate,t as LabelTextColor,m as RadialWithCustomSizeAndThickness,i as RadialWithSlottedContent,n as SizeVariations,_ as __namedExportsOrder,V as default};
