import{w as l}from"./decorator-Dt3Huotz.js";import{k as d}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const u=[{label:"Root",url:"#"},{label:"Subpage",url:"#"},{label:"Current Page",url:"#"}],w={title:"Components/Breadcrumbs",component:"modus-wc-breadcrumbs",args:{items:u,size:"md"},argTypes:{items:{description:"Array of items for the breadcrumbs component",table:{type:{detail:`
            Interface: IModusWcBreadcrumb
            Properties:
            - label (string): The text to render in the breadcrumb
            - url (string, optional): The URL emitted when the breadcrumb is clicked
          `}}},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[l],parameters:{actions:{handles:["breadcrumbClick"]}}},b={render:e=>d`
<modus-wc-breadcrumbs
  custom-class=${t(e["custom-class"])}
  .items=${e.items}
  size=${t(e.size)}
></modus-wc-breadcrumbs>
    `},r={...b},s={render:e=>d`
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
    `};var n,o,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const h=["Default","UnderlineLinks"];export{r as Default,s as UnderlineLinks,h as __namedExportsOrder,w as default};
