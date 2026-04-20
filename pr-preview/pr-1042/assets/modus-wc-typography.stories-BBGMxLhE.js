import{x as w}from"./lit-element-CucEn6F2.js";import{o as s}from"./if-defined-BiZP-SBN.js";import{c as Z}from"./shadow-host-helper-A4Nvcs5e.js";const a="The quick brown fox jumps over the lazy dog",se={title:"Components/Typography",component:"modus-wc-typography",args:{hierarchy:"p",label:a,size:"md",weight:"normal"},argTypes:{hierarchy:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","p"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"]},weight:{control:{type:"select"},options:["light","normal","semibold","bold"]}}},r={render:e=>w`
<modus-wc-typography
  custom-class=${s(e["custom-class"])}
  hierarchy=${e.hierarchy}
  label=${e.label}
  size=${s(e.size)}
  weight=${s(e.weight)}
  ></modus-wc-typography>
   `},n={...r},c={...r,args:{hierarchy:"h1",label:a}},h={...r,args:{hierarchy:"h2",label:a}},p={...r,args:{hierarchy:"h3",label:a}},l={...r,args:{hierarchy:"h4",label:a}},i={...r,args:{hierarchy:"h5",label:a}},m={...r,args:{hierarchy:"h6",label:a}},g={...r,args:{hierarchy:"p",label:a}},y={...r,args:{hierarchy:"p",label:"This text is set via the label prop"}},d={render:e=>w`
<modus-wc-typography
  custom-class=${s(e["custom-class"])}
  hierarchy=${e.hierarchy}
  size=${s(e.size)}
  weight=${s(e.weight)}
>
  This <u>text</u> is set using <em>slot</em>
</modus-wc-typography>
  `},u={render:e=>{if(!customElements.get("typography-shadow-host")){const X=Z({componentTag:"modus-wc-typography",propsMapper:(o,Y)=>{const t=Y;t.customClass=o["custom-class"]||"",t.hierarchy=o.hierarchy,t.label=o.label,t.size=o.size??"md",t.weight=o.weight??"normal"}});customElements.define("typography-shadow-host",X)}return w`<typography-shadow-host
      .props=${{...e}}
    ></typography-shadow-host>`}};var b,T,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var x,H,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'h1',
    label: content
  }
}`,...(f=(H=c.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var $,z,E;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'h2',
    label: content
  }
}`,...(E=(z=h.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var D,C,v;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'h3',
    label: content
  }
}`,...(v=(C=p.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var P,W,L;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'h4',
    label: content
  }
}`,...(L=(W=l.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var M,k,A;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'h5',
    label: content
  }
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var _,j,q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'h6',
    label: content
  }
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var O,B,F;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'p',
    label: content
  }
}`,...(F=(B=g.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,I,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'p',
    label: 'This text is set via the label prop'
  }
}`,...(J=(I=y.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,N,Q;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-typography
  custom-class=\${ifDefined(args['custom-class'])}
  hierarchy=\${args.hierarchy}
  size=\${ifDefined(args.size)}
  weight=\${ifDefined(args.weight)}
>
  This <u>text</u> is set using <em>slot</em>
</modus-wc-typography>
  \`;
  }
}`,...(Q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var R,U,V;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('typography-shadow-host')) {
      const TypographyShadowHost = createShadowHostClass<TypographyArgs>({
        componentTag: 'modus-wc-typography',
        propsMapper: (v: TypographyArgs, el: HTMLElement) => {
          const typographyEl = el as unknown as {
            customClass: string;
            hierarchy: string;
            label: string;
            size: string;
            weight: string;
          };
          typographyEl.customClass = v['custom-class'] || '';
          typographyEl.hierarchy = v.hierarchy;
          typographyEl.label = v.label;
          typographyEl.size = v.size ?? 'md';
          typographyEl.weight = v.weight ?? 'normal';
        }
      });
      customElements.define('typography-shadow-host', TypographyShadowHost);
    }
    return html\`<typography-shadow-host
      .props=\${{
      ...args
    }}
    ></typography-shadow-host>\`;
  }
}`,...(V=(U=u.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const oe=["Default","Heading1","Heading2","Heading3","Heading4","Heading5","Heading6","Paragraph","WithLabel","WithSlot","ShadowDomParent"];export{n as Default,c as Heading1,h as Heading2,p as Heading3,l as Heading4,i as Heading5,m as Heading6,g as Paragraph,u as ShadowDomParent,y as WithLabel,d as WithSlot,oe as __namedExportsOrder,se as default};
