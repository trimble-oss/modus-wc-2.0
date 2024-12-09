import{k as a}from"./lit-element-DVRzCIa_.js";import{t as B}from"./if-defined-1ipA9LQg.js";const I={title:"Components/Loader",component:"modus-wc-loader",args:{"aria-label":"Loading spinner",color:"primary","custom-class":"",size:"md",variant:"spinner"},argTypes:{color:{control:{type:"inline-radio"},options:["primary","secondary","accent","neutral","info","success","warning","error"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]},variant:{control:{type:"inline-radio"},options:["ball","bars","dots","infinity","ring","spinner"]}}},o={render:r=>a`
      <modus-wc-loader
        aria-label="${B(r["aria-label"])}"
        color="${r.color}"
        custom-class="${r["custom-class"]}"
        size="${r.size}"
        variant="${r.variant}"
      ></modus-wc-loader>
    `},s={render:r=>a`
      <modus-wc-loader
        aria-label="Loading ball"
        color="${r.color}"
        custom-class="${r["custom-class"]}"
        size="md"
        variant="ball"
      ></modus-wc-loader>
    `},n={render:r=>a`
      <modus-wc-loader
        aria-label="Loading bars"
        color="${r.color}"
        custom-class="${r["custom-class"]}"
        size="md"
        variant="bars"
      ></modus-wc-loader>
    `},e={render:r=>a`
      <modus-wc-loader
        aria-label="Loading dots"
        color="${r.color}"
        custom-class="${r["custom-class"]}"
        size="md"
        variant="dots"
      ></modus-wc-loader>
    `},c={render:r=>a`
      <modus-wc-loader
        aria-label="Loading infinity symbol"
        color="${r.color}"
        custom-class="${r["custom-class"]}"
        size="md"
        variant="infinity"
      ></modus-wc-loader>
    `},l={render:r=>a`
      <modus-wc-loader
        aria-label="Loading ring"
        color="${r.color}"
        custom-class="${r["custom-class"]}"
        size="md"
        variant="ring"
      ></modus-wc-loader>
    `};var t,i,d;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="\${ifDefined(args['aria-label'])}"
        color="\${args.color}"
        custom-class="\${args['custom-class']}"
        size="\${args.size}"
        variant="\${args.variant}"
      ></modus-wc-loader>
    \`;
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="Loading ball"
        color="\${args.color}"
        custom-class="\${args['custom-class']}"
        size="md"
        variant="ball"
      ></modus-wc-loader>
    \`;
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,$,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="Loading bars"
        color="\${args.color}"
        custom-class="\${args['custom-class']}"
        size="md"
        variant="bars"
      ></modus-wc-loader>
    \`;
  }
}`,...(b=($=n.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var w,v,y;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="Loading dots"
        color="\${args.color}"
        custom-class="\${args['custom-class']}"
        size="md"
        variant="dots"
      ></modus-wc-loader>
    \`;
  }
}`,...(y=(v=e.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var z,f,L;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="Loading infinity symbol"
        color="\${args.color}"
        custom-class="\${args['custom-class']}"
        size="md"
        variant="infinity"
      ></modus-wc-loader>
    \`;
  }
}`,...(L=(f=c.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var h,S,D;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="Loading ring"
        color="\${args.color}"
        custom-class="\${args['custom-class']}"
        size="md"
        variant="ring"
      ></modus-wc-loader>
    \`;
  }
}`,...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const R=["Default","Ball","Bars","Dots","Infinity","Ring"];export{s as Ball,n as Bars,o as Default,e as Dots,c as Infinity,l as Ring,R as __namedExportsOrder,I as default};
