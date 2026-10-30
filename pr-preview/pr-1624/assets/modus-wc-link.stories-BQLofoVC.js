import{b as o}from"./lit-element-DgBvYnzn.js";import{o as e}from"./if-defined-BnVFTJ4o.js";const _={title:"Components/Link",component:"modus-wc-link",args:{color:"primary",underline:"always"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","inherit","success","info","warning","danger"]},underline:{control:{type:"select"},options:["always","hover","none"]},target:{control:{type:"select"},options:["_blank","_self","_parent","_top"]}}},C={render:n=>o`
<modus-wc-link
  color="${n.color}"
  custom-class=${e(n["custom-class"])}
  href=${e(n.href)}
  rel=${e(n.rel)}
  target=${e(n.target)}
  title=${e(n.title)}
  underline="${n.underline}"
>Click me</modus-wc-link>
    `},r={...C},s={render:()=>o`
<div style="display: flex; flex-direction: column; gap: 8px;">
  ${["always","hover","none"].map(l=>o`
  <modus-wc-link underline="${l}">${l}</modus-wc-link>
  `)}
</div>
    `},i={args:{href:"https://www.trimble.com",target:"_blank"},render:n=>o`
<modus-wc-link
  href=${e(n.href)}
  target=${e(n.target)}
  aria-label="Visit Trimble website, opens in a new window"
>Trimble.com</modus-wc-link>
    `},c={render:()=>o`
<style>
  .link-icons-story-example {
    display: flex;
    flex-direction: column;
    gap: var(--modus-wc-spacing-xs);
  }
</style>

<div style="display: flex; flex-direction: column; gap: var(--modus-wc-spacing-lg);">
  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="Start icon"></modus-wc-typography>
    <modus-wc-link href="#">
      <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
      Click me
    </modus-wc-link>
  </div>

  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="End icon"></modus-wc-typography>
    <modus-wc-link href="#">
      Click me
      <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
    </modus-wc-link>
  </div>

  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="Start and end icons"></modus-wc-typography>
    <modus-wc-link href="#">
      <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
      Click me
      <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
    </modus-wc-link>
  </div>

  <div class="link-icons-story-example">
    <modus-wc-typography
      hierarchy="span"
      size="sm"
      label="Success"
    ></modus-wc-typography>
    <modus-wc-link color="success" href="#" underline="none">
      <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
      Click me
      <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
    </modus-wc-link>
  </div>
</div>
    `},t={render:()=>o`
<p style="color: var(--modus-wc-color-base-content);">
  Body text with an
  <modus-wc-link color="inherit">inherit color link</modus-wc-link>
  inline.
</p>
    `};var a,d,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,w;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(w=(p=s.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var y,h,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var g,v,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<style>
  .link-icons-story-example {
    display: flex;
    flex-direction: column;
    gap: var(--modus-wc-spacing-xs);
  }
</style>

<div style="display: flex; flex-direction: column; gap: var(--modus-wc-spacing-lg);">
  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="Start icon"></modus-wc-typography>
    <modus-wc-link href="#">
      <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
      Click me
    </modus-wc-link>
  </div>

  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="End icon"></modus-wc-typography>
    <modus-wc-link href="#">
      Click me
      <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
    </modus-wc-link>
  </div>

  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="Start and end icons"></modus-wc-typography>
    <modus-wc-link href="#">
      <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
      Click me
      <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
    </modus-wc-link>
  </div>

  <div class="link-icons-story-example">
    <modus-wc-typography
      hierarchy="span"
      size="sm"
      label="Success"
    ></modus-wc-typography>
    <modus-wc-link color="success" href="#" underline="none">
      <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
      Click me
      <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
    </modus-wc-link>
  </div>
</div>
    \`;
  }
}`,...(f=(v=c.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,b,$;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...($=(b=t.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};const T=["Default","Underline","ExternalLink","WithIcons","InheritColor"];export{r as Default,i as ExternalLink,t as InheritColor,s as Underline,c as WithIcons,T as __namedExportsOrder,_ as default};
