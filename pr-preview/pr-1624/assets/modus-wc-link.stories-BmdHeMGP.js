import{b as o}from"./lit-element-DgBvYnzn.js";import{o as e}from"./if-defined-BnVFTJ4o.js";const z={title:"Components/Link",component:"modus-wc-link",args:{color:"primary",underline:"always"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","inherit","success","info","warning","danger"]},underline:{control:{type:"select"},options:["always","hover","none"]},target:{control:{type:"select"},options:["_blank","_self","_parent","_top"]}}},C={render:n=>o`
<modus-wc-link
  color="${n.color}"
  custom-class=${e(n["custom-class"])}
  href=${e(n.href)}
  rel=${e(n.rel)}
  target=${e(n.target)}
  title=${e(n.title)}
  underline="${n.underline}"
>Click me</modus-wc-link>
    `},s={...C},c={render:()=>o`
<div style="display: flex; flex-direction: column; gap: 8px;">
  ${["always","hover","none"].map(t=>o`
  <modus-wc-link underline="${t}">${t}</modus-wc-link>
  `)}
</div>
    `},i={args:{href:"https://www.trimble.com",target:"_blank"},render:n=>o`
<modus-wc-link
  href=${e(n.href)}
  target=${e(n.target)}
  aria-label="Visit Trimble website, opens in a new window"
>Trimble.com</modus-wc-link>
    `},r={render:()=>o`
<style>
  .link-icons-story-example {
    display: flex;
    flex-direction: column;
    gap: var(--modus-wc-spacing-xs);
  }

  /* Storybook-only: tint mask icons to match the success link label */
  i.link-icons-story-match-success[class*='modus-icon-'] {
    background-color: var(--modus-wc-color-success);
  }

  i.link-icons-story-match-success.modus-icons {
    color: var(--modus-wc-color-success);
  }
</style>

<div style="display: flex; flex-direction: column; gap: var(--modus-wc-spacing-lg);">
  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="Leading icon"></modus-wc-typography>
    <modus-wc-link href="#">
      <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
      Click me
    </modus-wc-link>
  </div>

  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="Trailing icon"></modus-wc-typography>
    <modus-wc-link href="#">
      Click me
      <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
    </modus-wc-link>
  </div>

  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="Leading and trailing icons"></modus-wc-typography>
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
      label="Success, icons match the label"
    ></modus-wc-typography>
    <modus-wc-link color="success" href="#" underline="none">
      <modus-wc-icon
        custom-class="link-icons-story-match-success"
        decorative
        name="link-simple"
        slot="start-icon"
      ></modus-wc-icon>
      Click me
      <modus-wc-icon
        custom-class="link-icons-story-match-success"
        decorative
        name="caret-right"
        slot="end-icon"
        version="2.0"
      ></modus-wc-icon>
    </modus-wc-link>
  </div>
</div>
    `},l={render:()=>o`
<p style="color: var(--modus-wc-color-base-content);">
  Body text with an
  <modus-wc-link color="inherit">inherit color link</modus-wc-link>
  inline.
</p>
    `};var a,m,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,w;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(w=(p=c.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var y,h,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var g,v,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<style>
  .link-icons-story-example {
    display: flex;
    flex-direction: column;
    gap: var(--modus-wc-spacing-xs);
  }

  /* Storybook-only: tint mask icons to match the success link label */
  i.link-icons-story-match-success[class*='modus-icon-'] {
    background-color: var(--modus-wc-color-success);
  }

  i.link-icons-story-match-success.modus-icons {
    color: var(--modus-wc-color-success);
  }
</style>

<div style="display: flex; flex-direction: column; gap: var(--modus-wc-spacing-lg);">
  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="Leading icon"></modus-wc-typography>
    <modus-wc-link href="#">
      <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
      Click me
    </modus-wc-link>
  </div>

  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="Trailing icon"></modus-wc-typography>
    <modus-wc-link href="#">
      Click me
      <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
    </modus-wc-link>
  </div>

  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="Leading and trailing icons"></modus-wc-typography>
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
      label="Success, icons match the label"
    ></modus-wc-typography>
    <modus-wc-link color="success" href="#" underline="none">
      <modus-wc-icon
        custom-class="link-icons-story-match-success"
        decorative
        name="link-simple"
        slot="start-icon"
      ></modus-wc-icon>
      Click me
      <modus-wc-icon
        custom-class="link-icons-story-match-success"
        decorative
        name="caret-right"
        slot="end-icon"
        version="2.0"
      ></modus-wc-icon>
    </modus-wc-link>
  </div>
</div>
    \`;
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,x,$;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...($=(x=l.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const L=["Default","Underline","ExternalLink","Icons","InheritColor"];export{s as Default,i as ExternalLink,r as Icons,l as InheritColor,c as Underline,L as __namedExportsOrder,z as default};
