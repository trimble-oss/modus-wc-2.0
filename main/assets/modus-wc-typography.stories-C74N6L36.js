import{x as B,B as O}from"./lit-element-C8zulti1.js";import{o as m}from"./if-defined-yv6owfG8.js";const A="The quick brown fox jumps over the lazy dog",J={title:"Components/Typography",component:"modus-wc-typography",args:{hierarchy:"p",size:"md",weight:"normal"},argTypes:{hierarchy:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","p"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"]},weight:{control:{type:"select"},options:["light","normal","semibold","bold"]}},decorators:[r=>{const h=document.createElement("div"),d=document.createElement("template");return d.innerHTML=A,(()=>{O(r(),h);const p=h.querySelector("modus-wc-typography");p&&!p.textContent&&(p.textContent=d.innerHTML)})(),h}]},e={render:r=>B`
    <modus-wc-typography
      custom-class=${m(r["custom-class"])}
      hierarchy=${r.hierarchy}
      size=${m(r.size)}
      weight=${m(r.weight)}
    ></modus-wc-typography>
  `},a={args:{hierarchy:"h1"}},s={args:{hierarchy:"h2"}},o={args:{hierarchy:"h3"}},t={args:{hierarchy:"h4"}},c={args:{hierarchy:"h5"}},n={args:{hierarchy:"h6"}},i={args:{hierarchy:"p"}};var g,l,y;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-typography
      custom-class=\${ifDefined(args['custom-class'])}
      hierarchy=\${args.hierarchy}
      size=\${ifDefined(args.size)}
      weight=\${ifDefined(args.weight)}
    ></modus-wc-typography>
  \`
}`,...(y=(l=e.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var u,x,H;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    hierarchy: 'h1'
  }
}`,...(H=(x=a.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var f,w,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    hierarchy: 'h2'
  }
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var $,z,D;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    hierarchy: 'h3'
  }
}`,...(D=(z=o.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var T,b,C;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    hierarchy: 'h4'
  }
}`,...(C=(b=t.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var E,q,v;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    hierarchy: 'h5'
  }
}`,...(v=(q=c.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var L,M,P;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    hierarchy: 'h6'
  }
}`,...(P=(M=n.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var _,j,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    hierarchy: 'p'
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const K=["Default","Heading1","Heading2","Heading3","Heading4","Heading5","Heading6","Paragraph"];export{e as Default,a as Heading1,s as Heading2,o as Heading3,t as Heading4,c as Heading5,n as Heading6,i as Paragraph,K as __namedExportsOrder,J as default};
