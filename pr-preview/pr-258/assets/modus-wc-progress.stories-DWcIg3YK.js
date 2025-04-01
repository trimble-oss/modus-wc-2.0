import{k as r}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";const E={title:"Components/Progress",component:"modus-wc-progress",args:{indeterminate:!1,max:100,value:70,variant:"default"},argTypes:{variant:{control:{type:"select"},options:["default","radial"]}},parameters:{layout:"padded"}},a={render:e=>r`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="${s(e["custom-class"])}"
        ?indeterminate=${e.indeterminate}
        label=${s(e.label)}
        max=${s(e.max)}
        value=${e.value}
        variant=${s(e.variant)}
      ></modus-wc-progress>
    `},o={render:()=>r` <modus-wc-progress indeterminate="true"></modus-wc-progress> `},n={render:e=>r`
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
    `},t={args:{label:"Loading...",value:50},render:e=>r`
<style>
  .modus-wc-progress-label.custom-label-color {
    color: #f00;
  }
</style>
<modus-wc-progress
  value=${e.value}
  label=${s(e.label)}
  custom-class="custom-label-color"
></modus-wc-progress>
    `},l={render:e=>r`
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
    `},i={render:e=>r`
<style>
  .modus-wc-progress.custom-bg-color {
    background-color: #f00;
  }
</style>
<modus-wc-progress
  value=${e.value}
  custom-class="custom-bg-color"
></modus-wc-progress>
    `},c={render:e=>r`
<style>
  #radial-icon {
    justify-content: center;
  }
</style>
<modus-wc-progress
  aria-label="progress radial"
  ?indeterminate=${e.indeterminate}
  max=${s(e.max)}
  variant="radial"
  value=${e.value}
>
  <modus-wc-icon id="radial-icon" name="clipboard" size="md"></modus-wc-icon>
  ${e.value}%
</modus-wc-progress>
    `,parameters:{layout:"centered"}},d={render:e=>r`
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
  max=${s(e.max)}
  variant="radial"
  value=${e.value}
>
  ${e.value}%
</modus-wc-progress>
<modus-wc-progress
  aria-label="progress radial"
  custom-class="radial-progress--lg radial-progress--thin"
  ?indeterminate=${e.indeterminate}
  max=${s(e.max)}
  variant="radial"
  value=${e.value}
>
  ${e.value}%
</modus-wc-progress>
    `,parameters:{layout:"centered"}},m={parameters:{docs:{description:{story:`
#### Breaking Changes

  - Colors and sizes are now handled through CSS instead of direct props.
  - The \`mode\` prop has been replaced with an \`indeterminate\` boolean prop.

#### Prop Mapping

| 1.0 Prop          | 2.0 Prop      | Notes                                                |
|-------------------|---------------|------------------------------------------------------|
| aria-label        | aria-label    |                                                      |
| background-color  |               | Not carried over, use CSS instead                    |
| color             |               | Not carried over, use CSS instead                    |
| max-value         | max           |                                                      |
| min-value         |               | Not carried over                                     |
| mode              | indeterminate | 1.0: \`determinate\`/\`indeterminate\`, 2.0: boolean |
| size              |               | Not carried over, use CSS instead                    |
| text              | label         |                                                      |
| text-color        |               | Not carried over, use CSS instead                    |
| value             | value         |                                                      |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,b,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return html\` <modus-wc-progress indeterminate="true"></modus-wc-progress> \`;
  }
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var $,h,f;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,y,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var x,z,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(z=l.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var D,N,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(N=i.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var T,B,L;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var M,R,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var j,A,I;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - Colors and sizes are now handled through CSS instead of direct props.
  - The \\\`mode\\\` prop has been replaced with an \\\`indeterminate\\\` boolean prop.

#### Prop Mapping

| 1.0 Prop          | 2.0 Prop      | Notes                                                |
|-------------------|---------------|------------------------------------------------------|
| aria-label        | aria-label    |                                                      |
| background-color  |               | Not carried over, use CSS instead                    |
| color             |               | Not carried over, use CSS instead                    |
| max-value         | max           |                                                      |
| min-value         |               | Not carried over                                     |
| mode              | indeterminate | 1.0: \\\`determinate\\\`/\\\`indeterminate\\\`, 2.0: boolean |
| size              |               | Not carried over, use CSS instead                    |
| text              | label         |                                                      |
| text-color        |               | Not carried over, use CSS instead                    |
| value             | value         |                                                      |
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
}`,...(I=(A=m.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const O=["Default","Indeterminate","SizeVariations","LabelTextColor","CustomBarColor","CustomBackgroundColor","RadialWithSlottedContent","RadialWithCustomSizeAndThickness","Migration"];export{i as CustomBackgroundColor,l as CustomBarColor,a as Default,o as Indeterminate,t as LabelTextColor,m as Migration,d as RadialWithCustomSizeAndThickness,c as RadialWithSlottedContent,n as SizeVariations,O as __namedExportsOrder,E as default};
