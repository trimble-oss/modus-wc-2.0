import{k as s}from"./lit-element-DVRzCIa_.js";import{t as e}from"./if-defined-1ipA9LQg.js";const A={title:"Components/Typography",component:"modus-wc-typography",args:{content:"The quick brown fox jumps over the lazy dog",size:"md",weight:"normal"},argTypes:{content:{control:{type:"text"}},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]},weight:{control:{type:"radio"},options:["light","normal","bold"]}}},r={render:a=>s`
      <modus-wc-typography
        custom-class="${e(a["custom-class"])}"
        size="${a.size}"
        variant="body"
        weight="${a.weight}"
        >${a.content}</modus-wc-typography
      >
    `},n={render:a=>s`
      <modus-wc-typography
        custom-class="${e(a["custom-class"])}"
        size="${a.size}"
        variant="h1"
        weight="${a.weight}"
        >${a.content}</modus-wc-typography
      >
    `},t={render:a=>s`
      <modus-wc-typography
        a11y-label="${a["a11y-label"]}"
        custom-class="${e(a["custom-class"])}"
        variant="h2"
        >${a.content}</modus-wc-typography
      >
    `},o={render:a=>s`
      <modus-wc-typography
        a11y-label="${a["a11y-label"]}"
        custom-class="${e(a["custom-class"])}"
        variant="h3"
        >${a.content}</modus-wc-typography
      >
    `},c={render:a=>s`
      <modus-wc-typography
        a11y-label="${a["a11y-label"]}"
        custom-class="${e(a["custom-class"])}"
        variant="h4"
        >${a.content}</modus-wc-typography
      >
    `},m={render:a=>s`
      <modus-wc-typography
        a11y-label="${a["a11y-label"]}"
        custom-class="${e(a["custom-class"])}"
        variant="h5"
        >${a.content}</modus-wc-typography
      >
    `},p={render:a=>s`
      <modus-wc-typography
        a11y-label="${a["a11y-label"]}"
        custom-class="${e(a["custom-class"])}"
        variant="h6"
        >${a.content}</modus-wc-typography
      >
    `},l={render:a=>s`
      <modus-wc-typography
        a11y-label="${a["a11y-label"]}"
        custom-class="${e(a["custom-class"])}"
        size="${a.size}"
        variant="p"
        weight="${a.weight}"
        >${a.content}</modus-wc-typography
      >
    `};var u,d,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var i,g,h;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var $,w,b;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-typography
        a11y-label="\${args['a11y-label']}"
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
        a11y-label="\${args['a11y-label']}"
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
        a11y-label="\${args['a11y-label']}"
        custom-class="\${ifDefined(args['custom-class'])}"
        variant="h4"
        >\${args.content}</modus-wc-typography
      >
    \`;
  }
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var x,k,T;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-typography
        a11y-label="\${args['a11y-label']}"
        custom-class="\${ifDefined(args['custom-class'])}"
        variant="h5"
        >\${args.content}</modus-wc-typography
      >
    \`;
  }
}`,...(T=(k=m.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var B,P,_;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-typography
        a11y-label="\${args['a11y-label']}"
        custom-class="\${ifDefined(args['custom-class'])}"
        variant="h6"
        >\${args.content}</modus-wc-typography
      >
    \`;
  }
}`,...(_=(P=p.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var j,q,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-typography
        a11y-label="\${args['a11y-label']}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="\${args.size}"
        variant="p"
        weight="\${args.weight}"
        >\${args.content}</modus-wc-typography
      >
    \`;
  }
}`,...(C=(q=l.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};const F=["Body","Heading1","Heading2","Heading3","Heading4","Heading5","Heading6","Paragraph"];export{r as Body,n as Heading1,t as Heading2,o as Heading3,c as Heading4,m as Heading5,p as Heading6,l as Paragraph,F as __namedExportsOrder,A as default};
