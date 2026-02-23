import{x as r}from"./lit-element-CucEn6F2.js";import{o as s}from"./if-defined-BiZP-SBN.js";const N={title:"Components/Loader",component:"modus-wc-loader",args:{color:"primary","custom-class":"",size:"md",variant:"spinner"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","accent","neutral","info","success","warning","error"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["ball","bars","dots","infinity","ring","spinner"]}}},a={render:e=>r`
      <modus-wc-loader
        aria-label="Loading spinner"
        color="${e.color}"
        custom-class="${s(e["custom-class"])}"
        size="${e.size}"
        variant="${e.variant}"
      ></modus-wc-loader>
    `},o={render:e=>r`
      <modus-wc-loader
        aria-label="Loading ball"
        color="${e.color}"
        custom-class="${s(e["custom-class"])}"
        size="md"
        variant="ball"
      ></modus-wc-loader>
    `},n={render:e=>r`
      <modus-wc-loader
        aria-label="Loading bars"
        color="${e.color}"
        custom-class="${s(e["custom-class"])}"
        size="md"
        variant="bars"
      ></modus-wc-loader>
    `},d={render:e=>r`
      <modus-wc-loader
        aria-label="Loading dots"
        color="${e.color}"
        custom-class="${s(e["custom-class"])}"
        size="md"
        variant="dots"
      ></modus-wc-loader>
    `},c={render:e=>r`
      <modus-wc-loader
        aria-label="Loading infinity symbol"
        color="${e.color}"
        custom-class="${s(e["custom-class"])}"
        size="md"
        variant="infinity"
      ></modus-wc-loader>
    `},i={render:e=>r`
      <modus-wc-loader
        aria-label="Loading ring"
        color="${e.color}"
        custom-class="${s(e["custom-class"])}"
        size="md"
        variant="ring"
      ></modus-wc-loader>
    `},t={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - **Color value changes**: `dark` and `tertiary` values from 1.0 have been removed.\n  1.0 value `danger` has been renamed to `error` in 2.0. Values `accent`, `info`, and `neutral` are new options in 2.0.\n  - In 1.0 `size` used direct CSS size value strings (e.g., `'12rem'`). In 2.0 `size` is now defined by predefined values (`xs`, `sm`, `md`, `lg`), and CSS can be used for custom sizes.\n  - Added new `variant` prop to specify the loader type in 2.0.\n\n#### Prop Mapping\n\n| 1.0 Prop | 2.0 Prop | Notes                                                                                                  |\n|----------|----------|--------------------------------------------------------------------------------------------------------|\n| color    | color    | `dark` and `tertiary` from version 1.0 have been removed, `danger` has been renamed to `error` |\n| size     | size     | Now uses predefined sizes (`xs`, `sm`, `md`, `lg`), use CSS for custom sizes.                  |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,v;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var z,y,$;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...($=(y=d.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var h,S,L;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(L=(S=c.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var C,D,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(D=i.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var k,B,I;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - **Color value changes**: \\`dark\\` and \\`tertiary\\` values from 1.0 have been removed.\n  1.0 value \\`danger\\` has been renamed to \\`error\\` in 2.0. Values \\`accent\\`, \\`info\\`, and \\`neutral\\` are new options in 2.0.\n  - In 1.0 \\`size\\` used direct CSS size value strings (e.g., \\`'12rem'\\`). In 2.0 \\`size\\` is now defined by predefined values (\\`xs\\`, \\`sm\\`, \\`md\\`, \\`lg\\`), and CSS can be used for custom sizes.\n  - Added new \\`variant\\` prop to specify the loader type in 2.0.\n\n#### Prop Mapping\n\n| 1.0 Prop | 2.0 Prop | Notes                                                                                                  |\n|----------|----------|--------------------------------------------------------------------------------------------------------|\n| color    | color    | \\`dark\\` and \\`tertiary\\` from version 1.0 have been removed, \\`danger\\` has been renamed to \\`error\\` |\n| size     | size     | Now uses predefined sizes (\\`xs\\`, \\`sm\\`, \\`md\\`, \\`lg\\`), use CSS for custom sizes.                  |\n        `\n      }\n    },\n    // To hide the actual story rendering and only show docs:\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  // Simple render function or leave it empty\n  render: () => html`<div></div>`\n}",...(I=(B=t.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const A=["Default","Ball","Bars","Dots","Infinity","Ring","Migration"];export{o as Ball,n as Bars,a as Default,d as Dots,c as Infinity,t as Migration,i as Ring,A as __namedExportsOrder,N as default};
