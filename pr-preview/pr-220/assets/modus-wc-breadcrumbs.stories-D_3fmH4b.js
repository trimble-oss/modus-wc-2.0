import{w as l}from"./decorator-Dt3Huotz.js";import{k as d}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const u=[{label:"Root",url:"#"},{label:"Subpage",url:"#"},{label:"Current Page",url:"#"}],g={title:"Components/Breadcrumbs",component:"modus-wc-breadcrumbs",args:{items:u,size:"md"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[l],parameters:{actions:{handles:["breadcrumbClick"]}}},p={render:e=>d`
<modus-wc-breadcrumbs
  custom-class=${t(e["custom-class"])}
  .items=${e.items}
  size=${t(e.size)}
></modus-wc-breadcrumbs>
    `},s={...p},r={render:e=>d`
<style>
  .underline-links a {
    text-decoration: underline;
  }
</style>
<modus-wc-breadcrumbs
  custom-class="underline-links"
  .items=${e.items}
  size=${t(e.size)}
></modus-wc-breadcrumbs>
    `};var n,o,a;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(a=(o=s.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var m,c,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .underline-links a {
    text-decoration: underline;
  }
</style>
<modus-wc-breadcrumbs
  custom-class="underline-links"
  .items=\${args.items}
  size=\${ifDefined(args.size)}
></modus-wc-breadcrumbs>
    \`;
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const z=["Default","UnderlineLinks"];export{s as Default,r as UnderlineLinks,z as __namedExportsOrder,g as default};
