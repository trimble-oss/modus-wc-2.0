import{x as G,B as I}from"./lit-element-C8zulti1.js";import{o as g}from"./if-defined-yv6owfG8.js";const J="The quick brown fox jumps over the lazy dog",R={title:"Components/Typography",component:"modus-wc-typography",args:{size:"md",variant:"p",weight:"normal"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","4xl","5xl","6xl","7xl","8xl","9xl"]},variant:{control:{type:"select"},options:["body","h1","h2","h3","h4","h5","h6","p"]},weight:{control:{type:"select"},options:["light","normal","semibold","bold"]}},decorators:[r=>{const d=document.createElement("div"),u=document.createElement("template");return u.innerHTML=J,(()=>{I(r(),d);const m=d.querySelector("modus-wc-typography");m&&!m.textContent&&(m.textContent=u.innerHTML)})(),d}]},a={render:r=>G`
    <modus-wc-typography
      custom-class=${g(r["custom-class"])}
      size=${g(r.size)}
      variant=${r.variant}
      weight=${g(r.weight)}
    ></modus-wc-typography>
  `},e={args:{variant:"body"}},s={args:{variant:"h1"}},o={args:{variant:"h2"}},t={args:{variant:"h3"}},n={args:{variant:"h4"}},c={args:{variant:"h5"}},i={args:{variant:"h6"}},p={args:{variant:"p"}};var l,h,y;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-typography
      custom-class=\${ifDefined(args['custom-class'])}
      size=\${ifDefined(args.size)}
      variant=\${args.variant}
      weight=\${ifDefined(args.weight)}
    ></modus-wc-typography>
  \`
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,H,f;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'body'
  }
}`,...(f=(H=e.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var w,x,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'h1'
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var $,z,b;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'h2'
  }
}`,...(b=(z=o.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var D,T,B;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'h3'
  }
}`,...(B=(T=t.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var C,E,q;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'h4'
  }
}`,...(q=(E=n.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var L,M,P;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'h5'
  }
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var _,j,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'h6'
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var O,A,F;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'p'
  }
}`,...(F=(A=p.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const U=["Default","Body","Heading1","Heading2","Heading3","Heading4","Heading5","Heading6","Paragraph"];export{e as Body,a as Default,s as Heading1,o as Heading2,t as Heading3,n as Heading4,c as Heading5,i as Heading6,p as Paragraph,U as __namedExportsOrder,R as default};
