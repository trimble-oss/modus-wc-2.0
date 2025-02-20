import{k as o}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";const I={title:"Components/Loader",component:"modus-wc-loader",args:{"aria-label":"Loading spinner",color:"primary","custom-class":"",size:"md",variant:"spinner"},argTypes:{color:{control:{type:"inline-radio"},options:["primary","secondary","accent","neutral","info","success","warning","error"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]},variant:{control:{type:"inline-radio"},options:["ball","bars","dots","infinity","ring","spinner"]}}},s={render:r=>o`
      <modus-wc-loader
        aria-label="${a(r["aria-label"])}"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="${r.size}"
        variant="${r.variant}"
      ></modus-wc-loader>
    `},e={render:r=>o`
      <modus-wc-loader
        aria-label="Loading ball"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="ball"
      ></modus-wc-loader>
    `},n={render:r=>o`
      <modus-wc-loader
        aria-label="Loading bars"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="bars"
      ></modus-wc-loader>
    `},c={render:r=>o`
      <modus-wc-loader
        aria-label="Loading dots"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="dots"
      ></modus-wc-loader>
    `},l={render:r=>o`
      <modus-wc-loader
        aria-label="Loading infinity symbol"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="infinity"
      ></modus-wc-loader>
    `},i={render:r=>o`
      <modus-wc-loader
        aria-label="Loading ring"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="ring"
      ></modus-wc-loader>
    `};var t,d,m;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="\${ifDefined(args['aria-label'])}"
        color="\${args.color}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="\${args.size}"
        variant="\${args.variant}"
      ></modus-wc-loader>
    \`;
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var $,b,f;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,v,y;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(L=l.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var h,S,B;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(B=(S=i.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const R=["Default","Ball","Bars","Dots","Infinity","Ring"];export{e as Ball,n as Bars,s as Default,c as Dots,l as Infinity,i as Ring,R as __namedExportsOrder,I as default};
