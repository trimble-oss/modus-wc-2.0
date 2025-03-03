import{k as i}from"./lit-element-DVRzCIa_.js";import{t as r}from"./if-defined-1ipA9LQg.js";const h={title:"Components/Progress",component:"modus-wc-progress",args:{indeterminate:!1,max:100,value:70,variant:"default"},argTypes:{variant:{control:{type:"select"},options:["default","radial"]}},parameters:{layout:"padded"}},a={render:e=>i`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="${r(e["custom-class"])}"
        ?indeterminate=${e.indeterminate}
        max=${r(e.max)}
        value=${e.value}
        variant=${r(e.variant)}
      ></modus-wc-progress>
    `},s={render:()=>i` <modus-wc-progress indeterminate="true"></modus-wc-progress> `},n={render:e=>i`
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
    `,parameters:{layout:"centered"}},t={render:e=>i`
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
    `,parameters:{layout:"centered"}};var o,d,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-progress
        aria-label="Progress bar"
        custom-class="\${ifDefined(args['custom-class'])}"
        ?indeterminate=\${args.indeterminate}
        max=\${ifDefined(args.max)}
        value=\${args.value}
        variant=\${ifDefined(args.variant)}
      ></modus-wc-progress>
    \`;
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,c,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return html\` <modus-wc-progress indeterminate="true"></modus-wc-progress> \`;
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,g,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var $,w,f;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(f=(w=t.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const b=["Default","Indeterminate","RadialWithSlottedContent","RadialWithCustomSizeAndThickness"];export{a as Default,s as Indeterminate,t as RadialWithCustomSizeAndThickness,n as RadialWithSlottedContent,b as __namedExportsOrder,h as default};
