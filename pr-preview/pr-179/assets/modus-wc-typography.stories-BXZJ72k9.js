import{k as F,Q as G}from"./lit-element-DVRzCIa_.js";import{t as g}from"./if-defined-1ipA9LQg.js";const I="The quick brown fox jumps over the lazy dog",R={title:"Components/Typography",component:"modus-wc-typography",args:{size:"md",variant:"p",weight:"normal"},argTypes:{size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]},variant:{control:{type:"inline-radio"},options:["body","h1","h2","h3","h4","h5","h6","p"]},weight:{control:{type:"radio"},options:["light","normal","bold"]}},decorators:[r=>{const d=document.createElement("div"),u=document.createElement("template");return u.innerHTML=I,(()=>{G(r(),d);const m=d.querySelector("modus-wc-typography");m&&!m.textContent&&(m.textContent=u.innerHTML)})(),d}]},a={render:r=>F`
    <modus-wc-typography
      custom-class=${g(r["custom-class"])}
      size=${g(r.size)}
      variant=${r.variant}
      weight=${g(r.weight)}
    ></modus-wc-typography>
  `},e={args:{variant:"body"}},s={args:{variant:"h1"}},o={args:{variant:"h2"}},t={args:{variant:"h3"}},n={args:{variant:"h4"}},c={args:{variant:"h5"}},i={args:{variant:"h6"}},p={args:{variant:"p"}};var h,l,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-typography
      custom-class=\${ifDefined(args['custom-class'])}
      size=\${ifDefined(args.size)}
      variant=\${args.variant}
      weight=\${ifDefined(args.weight)}
    ></modus-wc-typography>
  \`
}`,...(y=(l=a.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var v,H,w;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'body'
  }
}`,...(w=(H=e.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var S,f,$;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'h1'
  }
}`,...($=(f=s.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var z,T,x;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'h2'
  }
}`,...(x=(T=o.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var b,k,C;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'h3'
  }
}`,...(C=(k=t.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var D,E,q;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'h4'
  }
}`,...(q=(E=n.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var B,L,M;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'h5'
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,_,j;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'h6'
  }
}`,...(j=(_=i.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var O,Q,A;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'p'
  }
}`,...(A=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:A.source}}};const U=["Template","Body","Heading1","Heading2","Heading3","Heading4","Heading5","Heading6","Paragraph"];export{e as Body,s as Heading1,o as Heading2,t as Heading3,n as Heading4,c as Heading5,i as Heading6,p as Paragraph,a as Template,U as __namedExportsOrder,R as default};
