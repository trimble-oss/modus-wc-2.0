import{x as G,B as I}from"./lit-element-C8zulti1.js";import{o as m}from"./if-defined-yv6owfG8.js";const J="The quick brown fox jumps over the lazy dog",R={title:"Components/Typography",component:"modus-wc-typography",args:{hierarchy:"p",size:"md",weight:"normal"},argTypes:{hierarchy:{control:{type:"select"},options:["body","h1","h2","h3","h4","h5","h6","p"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"]},weight:{control:{type:"select"},options:["light","normal","semibold","bold"]}},decorators:[r=>{const p=document.createElement("div"),g=document.createElement("template");return g.innerHTML=J,(()=>{I(r(),p);const d=p.querySelector("modus-wc-typography");d&&!d.textContent&&(d.textContent=g.innerHTML)})(),p}]},e={render:r=>G`
    <modus-wc-typography
      custom-class=${m(r["custom-class"])}
      hierarchy=${r.hierarchy}
      size=${m(r.size)}
      weight=${m(r.weight)}
    ></modus-wc-typography>
  `},a={args:{hierarchy:"body"}},s={args:{hierarchy:"h1"}},o={args:{hierarchy:"h2"}},c={args:{hierarchy:"h3"}},t={args:{hierarchy:"h4"}},n={args:{hierarchy:"h5"}},i={args:{hierarchy:"h6"}},h={args:{hierarchy:"p"}};var y,u,l;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-typography
      custom-class=\${ifDefined(args['custom-class'])}
      hierarchy=\${args.hierarchy}
      size=\${ifDefined(args.size)}
      weight=\${ifDefined(args.weight)}
    ></modus-wc-typography>
  \`
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var x,H,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    hierarchy: 'body'
  }
}`,...(f=(H=a.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var w,S,$;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    hierarchy: 'h1'
  }
}`,...($=(S=s.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var z,b,D;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    hierarchy: 'h2'
  }
}`,...(D=(b=o.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var T,B,C;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    hierarchy: 'h3'
  }
}`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var E,q,v;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    hierarchy: 'h4'
  }
}`,...(v=(q=t.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var L,M,P;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    hierarchy: 'h5'
  }
}`,...(P=(M=n.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var _,j,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    hierarchy: 'h6'
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var O,A,F;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    hierarchy: 'p'
  }
}`,...(F=(A=h.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const U=["Default","Body","Heading1","Heading2","Heading3","Heading4","Heading5","Heading6","Paragraph"];export{a as Body,e as Default,s as Heading1,o as Heading2,c as Heading3,t as Heading4,n as Heading5,i as Heading6,h as Paragraph,U as __namedExportsOrder,R as default};
