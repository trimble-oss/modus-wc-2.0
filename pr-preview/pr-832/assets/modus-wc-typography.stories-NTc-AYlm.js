import{x as K}from"./lit-element-CucEn6F2.js";import{o as s}from"./if-defined-BiZP-SBN.js";const a="The quick brown fox jumps over the lazy dog",Q={title:"Components/Typography",component:"modus-wc-typography",args:{hierarchy:"p",label:a,size:"md",weight:"normal"},argTypes:{hierarchy:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","p"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"]},weight:{control:{type:"select"},options:["light","normal","semibold","bold"]}}},r={render:e=>K`
<modus-wc-typography
  custom-class=${s(e["custom-class"])}
  hierarchy=${e.hierarchy}
  label=${e.label}
  size=${s(e.size)}
  weight=${s(e.weight)}
  ></modus-wc-typography>
   `},t={...r},o={...r,args:{hierarchy:"h1",label:a}},n={...r,args:{hierarchy:"h2",label:a}},c={...r,args:{hierarchy:"h3",label:a}},i={...r,args:{hierarchy:"h4",label:a}},l={...r,args:{hierarchy:"h5",label:a}},h={...r,args:{hierarchy:"h6",label:a}},p={...r,args:{hierarchy:"p",label:a}},m={...r,args:{hierarchy:"p",label:"This text is set via the label prop"}},g={render:e=>K`
<modus-wc-typography
  custom-class=${s(e["custom-class"])}
  hierarchy=${e.hierarchy}
  size=${s(e.size)}
  weight=${s(e.weight)}
>
  This <u>text</u> is set using <em>slot</em> </strong>
</modus-wc-typography>
  `};var d,u,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,x,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'h1',
    label: content
  }
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var w,$,f;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'h2',
    label: content
  }
}`,...(f=($=n.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};var H,S,z;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'h3',
    label: content
  }
}`,...(z=(S=c.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var D,W,v;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'h4',
    label: content
  }
}`,...(v=(W=i.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var L,P,_;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'h5',
    label: content
  }
}`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var j,k,q;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'h6',
    label: content
  }
}`,...(q=(k=h.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var C,E,O;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'p',
    label: content
  }
}`,...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var A,B,F;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  args: {
    hierarchy: 'p',
    label: 'This text is set via the label prop'
  }
}`,...(F=(B=m.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,I,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-typography
  custom-class=\${ifDefined(args['custom-class'])}
  hierarchy=\${args.hierarchy}
  size=\${ifDefined(args.size)}
  weight=\${ifDefined(args.weight)}
>
  This <u>text</u> is set using <em>slot</em> </strong>
</modus-wc-typography>
  \`;
  }
}`,...(J=(I=g.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const R=["Default","Heading1","Heading2","Heading3","Heading4","Heading5","Heading6","Paragraph","WithLabel","WithSlot"];export{t as Default,o as Heading1,n as Heading2,c as Heading3,i as Heading4,l as Heading5,h as Heading6,p as Paragraph,m as WithLabel,g as WithSlot,R as __namedExportsOrder,Q as default};
