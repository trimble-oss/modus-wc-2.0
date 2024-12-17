import{k as r}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";const A={title:"Components/Typography",component:"modus-wc-typography",args:{content:"The quick brown fox jumps over the lazy dog",size:"md",weight:"normal"},argTypes:{content:{control:{type:"text"}},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]},weight:{control:{type:"radio"},options:["light","normal","bold"]}}},e={render:a=>r`
      <modus-wc-typography
        custom-class="${s(a["custom-class"])}"
        size="${a.size}"
        variant="body"
        weight="${a.weight}"
        >${a.content}</modus-wc-typography
      >
    `},n={render:a=>r`
      <modus-wc-typography
        custom-class="${s(a["custom-class"])}"
        size="${a.size}"
        variant="h1"
        weight="${a.weight}"
        >${a.content}</modus-wc-typography
      >
    `},t={render:a=>r`
      <modus-wc-typography
        aria-label="${a["aria-label"]}"
        custom-class="${s(a["custom-class"])}"
        variant="h2"
        >${a.content}</modus-wc-typography
      >
    `},o={render:a=>r`
      <modus-wc-typography
        aria-label="${a["aria-label"]}"
        custom-class="${s(a["custom-class"])}"
        variant="h3"
        >${a.content}</modus-wc-typography
      >
    `},c={render:a=>r`
      <modus-wc-typography
        aria-label="${a["aria-label"]}"
        custom-class="${s(a["custom-class"])}"
        variant="h4"
        >${a.content}</modus-wc-typography
      >
    `},i={render:a=>r`
      <modus-wc-typography
        aria-label="${a["aria-label"]}"
        custom-class="${s(a["custom-class"])}"
        variant="h5"
        >${a.content}</modus-wc-typography
      >
    `},m={render:a=>r`
      <modus-wc-typography
        aria-label="${a["aria-label"]}"
        custom-class="${s(a["custom-class"])}"
        variant="h6"
        >${a.content}</modus-wc-typography
      >
    `},p={render:a=>r`
      <modus-wc-typography
        aria-label="${a["aria-label"]}"
        custom-class="${s(a["custom-class"])}"
        size="${a.size}"
        variant="p"
        weight="${a.weight}"
        >${a.content}</modus-wc-typography
      >
    `};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-typography
        custom-class="\${ifDefined(args['custom-class'])}"
        size="\${args.size}"
        variant="body"
        weight="\${args.weight}"
        >\${args.content}</modus-wc-typography
      >
    \`;
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,y,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-typography
        custom-class="\${ifDefined(args['custom-class'])}"
        size="\${args.size}"
        variant="h1"
        weight="\${args.weight}"
        >\${args.content}</modus-wc-typography
      >
    \`;
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var $,w,b;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-typography
        aria-label="\${args['aria-label']}"
        custom-class="\${ifDefined(args['custom-class'])}"
        variant="h2"
        >\${args.content}</modus-wc-typography
      >
    \`;
  }
}`,...(b=(w=t.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var f,v,z;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-typography
        aria-label="\${args['aria-label']}"
        custom-class="\${ifDefined(args['custom-class'])}"
        variant="h3"
        >\${args.content}</modus-wc-typography
      >
    \`;
  }
}`,...(z=(v=o.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var H,D,S;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-typography
        aria-label="\${args['aria-label']}"
        custom-class="\${ifDefined(args['custom-class'])}"
        variant="h4"
        >\${args.content}</modus-wc-typography
      >
    \`;
  }
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var x,k,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-typography
        aria-label="\${args['aria-label']}"
        custom-class="\${ifDefined(args['custom-class'])}"
        variant="h5"
        >\${args.content}</modus-wc-typography
      >
    \`;
  }
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var B,P,_;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-typography
        aria-label="\${args['aria-label']}"
        custom-class="\${ifDefined(args['custom-class'])}"
        variant="h6"
        >\${args.content}</modus-wc-typography
      >
    \`;
  }
}`,...(_=(P=m.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var j,q,C;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-typography
        aria-label="\${args['aria-label']}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="\${args.size}"
        variant="p"
        weight="\${args.weight}"
        >\${args.content}</modus-wc-typography
      >
    \`;
  }
}`,...(C=(q=p.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};const F=["Body","Heading1","Heading2","Heading3","Heading4","Heading5","Heading6","Paragraph"];export{e as Body,n as Heading1,t as Heading2,o as Heading3,c as Heading4,i as Heading5,m as Heading6,p as Paragraph,F as __namedExportsOrder,A as default};
