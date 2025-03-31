import{k as e}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";const A={title:"Components/Loader",component:"modus-wc-loader",args:{color:"primary","custom-class":"",size:"md",variant:"spinner"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","accent","neutral","info","success","warning","error"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["ball","bars","dots","infinity","ring","spinner"]}}},s={render:r=>e`
      <modus-wc-loader
        aria-label="Loading spinner"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="${r.size}"
        variant="${r.variant}"
      ></modus-wc-loader>
    `},o={render:r=>e`
      <modus-wc-loader
        aria-label="Loading ball"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="ball"
      ></modus-wc-loader>
    `},n={render:r=>e`
      <modus-wc-loader
        aria-label="Loading bars"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="bars"
      ></modus-wc-loader>
    `},t={render:r=>e`
      <modus-wc-loader
        aria-label="Loading dots"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="dots"
      ></modus-wc-loader>
    `},d={render:r=>e`
      <modus-wc-loader
        aria-label="Loading infinity symbol"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="infinity"
      ></modus-wc-loader>
    `},i={render:r=>e`
      <modus-wc-loader
        aria-label="Loading ring"
        color="${r.color}"
        custom-class="${a(r["custom-class"])}"
        size="md"
        variant="ring"
      ></modus-wc-loader>
    `},c={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - **Color value changes**: `dark` and `tertiary` values from 1.0 have been removed.\n  1.0 value `danger` has been renamed to `error` in 2.0. Values `accent`, `info`, and `neutral` are new options in 2.0.\n  - `size` is now defined by predefined values (`xs`, `sm`, `md`, `lg`) instead of direct CSS size value strings.\n  - Added new `variant` prop to specify the loader type in 2.0.\n\n#### Prop Mapping\n\n| 1.0 Prop | 2.0 Prop | Notes                                                                                                  |\n|----------|----------|--------------------------------------------------------------------------------------------------------|\n| color    | color    | `dark` and `tertiary` from version 1.0 have been removed, `danger` has been renamed to `error` |\n| size     | size     | Now uses predefined sizes (`xs`, `sm`, `md`, `lg`)                                             |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>e`<div></div>`};var l,m,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,v;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,b,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,$,z;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=($=t.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var h,L,S;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(L=d.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var D,k,x;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var C,B,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - **Color value changes**: \\`dark\\` and \\`tertiary\\` values from 1.0 have been removed.\n  1.0 value \\`danger\\` has been renamed to \\`error\\` in 2.0. Values \\`accent\\`, \\`info\\`, and \\`neutral\\` are new options in 2.0.\n  - \\`size\\` is now defined by predefined values (\\`xs\\`, \\`sm\\`, \\`md\\`, \\`lg\\`) instead of direct CSS size value strings.\n  - Added new \\`variant\\` prop to specify the loader type in 2.0.\n\n#### Prop Mapping\n\n| 1.0 Prop | 2.0 Prop | Notes                                                                                                  |\n|----------|----------|--------------------------------------------------------------------------------------------------------|\n| color    | color    | \\`dark\\` and \\`tertiary\\` from version 1.0 have been removed, \\`danger\\` has been renamed to \\`error\\` |\n| size     | size     | Now uses predefined sizes (\\`xs\\`, \\`sm\\`, \\`md\\`, \\`lg\\`)                                             |\n        `\n      }\n    },\n    // To hide the actual story rendering and only show docs:\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  // Simple render function or leave it empty\n  render: () => html`<div></div>`\n}",...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const I=["Default","Ball","Bars","Dots","Infinity","Ring","Migration"];export{o as Ball,n as Bars,s as Default,t as Dots,d as Infinity,c as Migration,i as Ring,I as __namedExportsOrder,A as default};
