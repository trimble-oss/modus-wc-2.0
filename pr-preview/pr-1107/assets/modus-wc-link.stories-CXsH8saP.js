import{b as n}from"./lit-element-DgBvYnzn.js";import{o as r}from"./if-defined-BnVFTJ4o.js";const S={title:"Components/Link",component:"modus-wc-link",args:{color:"primary",underline:"always"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","inherit","success","warning","danger"]},underline:{control:{type:"select"},options:["always","hover","none"]},target:{control:{type:"select"},options:[void 0,"_blank","_self","_parent","_top"]}}},_={render:e=>n`
<modus-wc-link
  color="${e.color}"
  custom-class=${r(e["custom-class"])}
  href=${r(e.href)}
  rel=${r(e.rel)}
  target=${r(e.target)}
  underline="${e.underline}"
>Click me</modus-wc-link>
    `},o={..._},t={render:()=>n`
<div style="display: flex; flex-direction: column; gap: 8px;">
  ${["always","hover","none"].map(l=>n`
  <modus-wc-link underline="${l}">${l}</modus-wc-link>
  `)}
</div>
    `},i={args:{href:"https://www.trimble.com",target:"_blank"},render:e=>n`
<modus-wc-link
  href=${r(e.href)}
  target=${r(e.target)}
  aria-label="Visit Trimble website, opens in a new window"
>Trimble.com</modus-wc-link>
    `},s={render:()=>n`
<p style="color: var(--modus-wc-color-base-content);">
  Body text with an
  <modus-wc-link color="inherit">inherit color link</modus-wc-link>
  inline.
</p>
    `},a={render:()=>n`
<modus-wc-typography hierarchy="h1">
  <modus-wc-link color="inherit">Heading link</modus-wc-link>
</modus-wc-typography>
    `};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,w;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const underlines: LinkArgs['underline'][] = ['always', 'hover', 'none'];

    // prettier-ignore
    return html\`
<div style="display: flex; flex-direction: column; gap: 8px;">
  \${underlines.map(underline => html\`
  <modus-wc-link underline="\${underline}">\${underline}</modus-wc-link>
  \`)}
</div>
    \`;
  }
}`,...(w=(p=t.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var h,k,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    href: 'https://www.trimble.com',
    target: '_blank'
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-link
  href=\${ifDefined(args.href)}
  target=\${ifDefined(args.target)}
  aria-label="Visit Trimble website, opens in a new window"
>Trimble.com</modus-wc-link>
    \`;
  }
}`,...(g=(k=i.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var y,f,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<p style="color: var(--modus-wc-color-base-content);">
  Body text with an
  <modus-wc-link color="inherit">inherit color link</modus-wc-link>
  inline.
</p>
    \`;
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var $,x,v;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-typography hierarchy="h1">
  <modus-wc-link color="inherit">Heading link</modus-wc-link>
</modus-wc-typography>
    \`;
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const C=["Default","Underline","ExternalLink","InheritColor","HeadingLink"];export{o as Default,i as ExternalLink,a as HeadingLink,s as InheritColor,t as Underline,C as __namedExportsOrder,S as default};
