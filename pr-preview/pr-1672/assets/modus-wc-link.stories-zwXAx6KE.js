import{b as t}from"./lit-element-DgBvYnzn.js";import{o}from"./if-defined-BnVFTJ4o.js";import{c as H}from"./shadow-host-helper-DX0JvItv.js";const P={title:"Components/Link",component:"modus-wc-link",args:{color:"primary",underline:"always"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","inherit","success","info","warning","danger"]},underline:{control:{type:"select"},options:["always","hover","none"]},target:{control:{type:"select"},options:["_blank","_self","_parent","_top"]}}},I={render:e=>t`
<modus-wc-link
  color="${e.color}"
  custom-class=${o(e["custom-class"])}
  href=${o(e.href)}
  rel=${o(e.rel)}
  target=${o(e.target)}
  title=${o(e.title)}
  underline="${e.underline}"
>Click me</modus-wc-link>
    `},i={...I},l={render:()=>t`
<div style="display: flex; flex-direction: column; gap: 8px;">
  ${["always","hover","none"].map(s=>t`
  <modus-wc-link underline="${s}">${s}</modus-wc-link>
  `)}
</div>
    `},a={args:{href:"https://www.trimble.com",target:"_blank"},render:e=>t`
<modus-wc-link
  href=${o(e.href)}
  target=${o(e.target)}
  aria-label="Visit Trimble website, opens in a new window"
>Trimble.com</modus-wc-link>
    `},c={render:()=>t`
<modus-wc-link href="#">
  <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
  Click me
  <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
</modus-wc-link>
    `},d={render:()=>t`
<p style="color: var(--modus-wc-color-base-content);">
  Body text with an
  <modus-wc-link color="inherit">inherit color link</modus-wc-link>
  inline.
</p>
    `},m={render:e=>{if(!customElements.get("link-shadow-host")){const s=H({componentTag:"modus-wc-link",propsMapper:(n,D)=>{const r=D;r.color=n.color,r.customClass=n["custom-class"]||"",r.href=n.href||"",r.rel=n.rel||"",r.target=n.target||"",r.title=n.title||"",r.underline=n.underline},defaultContent:"Click me"});customElements.define("link-shadow-host",s)}return t`<link-shadow-host .props=${{...e}}></link-shadow-host>`}};var u,p,w;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template
}`,...(w=(p=i.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var h,k,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(k=l.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var f,y,$;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...($=(y=a.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var v,E,b;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-link href="#">
  <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
  Click me
  <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
</modus-wc-link>
    \`;
  }
}`,...(b=(E=c.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var C,S,x;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(S=d.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var L,T,_;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('link-shadow-host')) {
      const LinkShadowHost = createShadowHostClass<LinkArgs>({
        componentTag: 'modus-wc-link',
        propsMapper: (v: LinkArgs, el: HTMLElement) => {
          const linkEl = el as unknown as {
            color: string;
            customClass: string;
            href: string;
            rel: string;
            target: string;
            title: string;
            underline: string;
          };
          linkEl.color = v.color;
          linkEl.customClass = v['custom-class'] || '';
          linkEl.href = v.href || '';
          linkEl.rel = v.rel || '';
          linkEl.target = v.target || '';
          linkEl.title = v.title || '';
          linkEl.underline = v.underline;
        },
        defaultContent: 'Click me'
      });
      customElements.define('link-shadow-host', LinkShadowHost);
    }
    return html\`<link-shadow-host .props=\${{
      ...args
    }}></link-shadow-host>\`;
  }
}`,...(_=(T=m.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const U=["Default","Underline","ExternalLink","WithIcons","InheritColor","ShadowDomParent"];export{i as Default,a as ExternalLink,d as InheritColor,m as ShadowDomParent,l as Underline,c as WithIcons,U as __namedExportsOrder,P as default};
