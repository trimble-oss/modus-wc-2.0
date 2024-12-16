import{k as s}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";const I={title:"Components/Loader",component:"modus-wc-loader",args:{"a11y-label":"Loading spinner",color:"primary","custom-class":"",size:"md",variant:"spinner"},argTypes:{color:{control:{type:"inline-radio"},options:["primary","secondary","accent","neutral","info","success","warning","error"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]},variant:{control:{type:"inline-radio"},options:["ball","bars","dots","infinity","ring","spinner"]}}},a={render:r=>s`
      <modus-wc-loader
        a11y-label="${o(r["a11y-label"])}"
        color="${r.color}"
        custom-class="${o(r["custom-class"])}"
        size="${r.size}"
        variant="${r.variant}"
      ></modus-wc-loader>
    `},e={render:r=>s`
      <modus-wc-loader
        a11y-label="Loading ball"
        color="${r.color}"
        custom-class="${o(r["custom-class"])}"
        size="md"
        variant="ball"
      ></modus-wc-loader>
    `},n={render:r=>s`
      <modus-wc-loader
        a11y-label="Loading bars"
        color="${r.color}"
        custom-class="${o(r["custom-class"])}"
        size="md"
        variant="bars"
      ></modus-wc-loader>
    `},c={render:r=>s`
      <modus-wc-loader
        a11y-label="Loading dots"
        color="${r.color}"
        custom-class="${o(r["custom-class"])}"
        size="md"
        variant="dots"
      ></modus-wc-loader>
    `},l={render:r=>s`
      <modus-wc-loader
        a11y-label="Loading infinity symbol"
        color="${r.color}"
        custom-class="${o(r["custom-class"])}"
        size="md"
        variant="infinity"
      ></modus-wc-loader>
    `},t={render:r=>s`
      <modus-wc-loader
        a11y-label="Loading ring"
        color="${r.color}"
        custom-class="${o(r["custom-class"])}"
        size="md"
        variant="ring"
      ></modus-wc-loader>
    `};var d,i,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        a11y-label="\${ifDefined(args['a11y-label'])}"
        color="\${args.color}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="\${args.size}"
        variant="\${args.variant}"
      ></modus-wc-loader>
    \`;
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,p,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        a11y-label="Loading ball"
        color="\${args.color}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="md"
        variant="ball"
      ></modus-wc-loader>
    \`;
  }
}`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,$,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        a11y-label="Loading bars"
        color="\${args.color}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="md"
        variant="bars"
      ></modus-wc-loader>
    \`;
  }
}`,...(b=($=n.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var f,w,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        a11y-label="Loading dots"
        color="\${args.color}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="md"
        variant="dots"
      ></modus-wc-loader>
    \`;
  }
}`,...(v=(w=c.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var z,L,D;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        a11y-label="Loading infinity symbol"
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
        a11y-label="Loading ring"
        color="\${args.color}"
        custom-class="\${ifDefined(args['custom-class'])}"
        size="md"
        variant="ring"
      ></modus-wc-loader>
    \`;
  }
}`,...(B=(S=t.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const R=["Default","Ball","Bars","Dots","Infinity","Ring"];export{e as Ball,n as Bars,a as Default,c as Dots,l as Infinity,t as Ring,R as __namedExportsOrder,I as default};
