import{b as o}from"./lit-element-DgBvYnzn.js";import{o as r}from"./if-defined-BnVFTJ4o.js";import{c as _}from"./shadow-host-helper-DX0JvItv.js";const O={title:"Components/Link",component:"modus-wc-link",args:{color:"primary",underline:"always"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","inherit","success","info","warning","danger"]},underline:{control:{type:"select"},options:["always","hover","none"]},target:{control:{type:"select"},options:["_blank","_self","_parent","_top"]}}},D={render:e=>o`
<modus-wc-link
  color="${e.color}"
  custom-class=${r(e["custom-class"])}
  href=${r(e.href)}
  rel=${r(e.rel)}
  target=${r(e.target)}
  title=${r(e.title)}
  underline="${e.underline}"
>Click me</modus-wc-link>
    `},i={...D},c={render:()=>o`
<div style="display: flex; flex-direction: column; gap: 8px;">
  ${["always","hover","none"].map(s=>o`
  <modus-wc-link underline="${s}">${s}</modus-wc-link>
  `)}
</div>
    `},l={args:{href:"https://www.trimble.com",target:"_blank"},render:e=>o`
<modus-wc-link
  href=${r(e.href)}
  target=${r(e.target)}
  aria-label="Visit Trimble website, opens in a new window"
>Trimble.com</modus-wc-link>
    `},a={render:()=>o`
<modus-wc-link href="#">
  <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
  Click me
  <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
</modus-wc-link>
    `},d={render:()=>o`
<p style="color: var(--modus-wc-color-base-content);">
  Body text with an
  <modus-wc-link color="inherit">inherit color link</modus-wc-link>
  inline.
</p>
    `},m={render:e=>{if(!customElements.get("link-shadow-host")){const s=_({componentTag:"modus-wc-link",propsMapper:(t,u)=>{const n=u;n.ariaLabel="Click me link",n.color=t.color,n.customClass=t["custom-class"]||"",n.href=t.href||"",n.rel=t.rel||"",n.target=t.target||"",n.underline=t.underline},defaultContent:()=>{const t=document.createElement("modus-wc-icon");t.setAttribute("decorative",""),t.setAttribute("name","link-simple"),t.setAttribute("slot","start-icon");const u=document.createTextNode("Click me"),n=document.createElement("modus-wc-icon");return n.setAttribute("decorative",""),n.setAttribute("name","caret-right"),n.setAttribute("slot","end-icon"),n.setAttribute("version","2.0"),[t,u,n]}});customElements.define("link-shadow-host",s)}return o`<link-shadow-host .props=${{...e}}></link-shadow-host>`}};var p,w,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template
}`,...(h=(w=i.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var k,g,f;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,v,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var E,C,$;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...($=(C=a.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var A,I,x;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(x=(I=d.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var L,S,T;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('link-shadow-host')) {
      const LinkShadowHost = createShadowHostClass<LinkArgs>({
        componentTag: 'modus-wc-link',
        propsMapper: (v: LinkArgs, el: HTMLElement) => {
          const linkEl = el as unknown as {
            ariaLabel: string;
            color: string;
            customClass: string;
            href: string;
            rel: string;
            target: string;
            underline: string;
          };
          linkEl.ariaLabel = 'Click me link';
          linkEl.color = v.color;
          linkEl.customClass = v['custom-class'] || '';
          linkEl.href = v.href || '';
          linkEl.rel = v.rel || '';
          linkEl.target = v.target || '';
          linkEl.underline = v.underline;
          // DO NOT set textContent - it destroys the component's internal structure!
          // Link content should be set via defaultContent in the helper config
        },
        defaultContent: () => {
          const startIcon = document.createElement('modus-wc-icon');
          startIcon.setAttribute('decorative', '');
          startIcon.setAttribute('name', 'link-simple');
          startIcon.setAttribute('slot', 'start-icon');
          const label = document.createTextNode('Click me');
          const endIcon = document.createElement('modus-wc-icon');
          endIcon.setAttribute('decorative', '');
          endIcon.setAttribute('name', 'caret-right');
          endIcon.setAttribute('slot', 'end-icon');
          endIcon.setAttribute('version', '2.0');
          return [startIcon, label, endIcon];
        }
      });
      customElements.define('link-shadow-host', LinkShadowHost);
    }
    return html\`<link-shadow-host .props=\${{
      ...args
    }}></link-shadow-host>\`;
  }
}`,...(T=(S=m.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const B=["Default","Underline","ExternalLink","WithIcons","InheritColor","ShadowDomParent"];export{i as Default,l as ExternalLink,d as InheritColor,m as ShadowDomParent,c as Underline,a as WithIcons,B as __namedExportsOrder,O as default};
