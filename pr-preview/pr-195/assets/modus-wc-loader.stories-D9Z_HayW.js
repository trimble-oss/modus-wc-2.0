import{k as s}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";const I={title:"Components/Loader",component:"modus-wc-loader",args:{color:"primary","custom-class":"",size:"md",variant:"spinner"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","accent","neutral","info","success","warning","error"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["ball","bars","dots","infinity","ring","spinner"]}}},o={render:r=>s`
      <modus-wc-loader
        aria-label="Loading spinner"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="${r.size}"
        variant="${r.variant}"
      ></modus-wc-loader>
    `},e={render:r=>s`
      <modus-wc-loader
        aria-label="Loading ball"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="ball"
      ></modus-wc-loader>
    `},n={render:r=>s`
      <modus-wc-loader
        aria-label="Loading bars"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="bars"
      ></modus-wc-loader>
    `},c={render:r=>s`
      <modus-wc-loader
        aria-label="Loading dots"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="dots"
      ></modus-wc-loader>
    `},l={render:r=>s`
      <modus-wc-loader
        aria-label="Loading infinity symbol"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="infinity"
      ></modus-wc-loader>
    `},t={render:r=>s`
      <modus-wc-loader
        aria-label="Loading ring"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="ring"
      ></modus-wc-loader>
    `};var d,i,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="Loading spinner"
        color="\${args.color}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="\${args.size}"
        variant="\${args.variant}"
      ></modus-wc-loader>
    \`;
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,p,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="Loading ball"
        color="\${args.color}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="md"
        variant="ball"
      ></modus-wc-loader>
    \`;
  }
}`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var $,w,f;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="Loading bars"
        color="\${args.color}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="md"
        variant="bars"
      ></modus-wc-loader>
    \`;
  }
}`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var b,v,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="Loading dots"
        color="\${args.color}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="md"
        variant="dots"
      ></modus-wc-loader>
    \`;
  }
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var z,L,D;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="Loading infinity symbol"
        color="\${args.color}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="md"
        variant="infinity"
      ></modus-wc-loader>
    \`;
  }
}`,...(D=(L=l.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var h,S,B;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="Loading ring"
        color="\${args.color}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="md"
        variant="ring"
      ></modus-wc-loader>
    \`;
  }
}`,...(B=(S=t.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const R=["Default","Ball","Bars","Dots","Infinity","Ring"];export{e as Ball,n as Bars,o as Default,c as Dots,l as Infinity,t as Ring,R as __namedExportsOrder,I as default};
