import{x as r}from"./lit-element-CucEn6F2.js";import{o as s}from"./if-defined-BiZP-SBN.js";import{c as V}from"./shadow-host-helper-A4Nvcs5e.js";const q={title:"Components/Loader",component:"modus-wc-loader",args:{color:"primary","custom-class":"",size:"md",variant:"spinner"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","accent","neutral","info","success","warning","error"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["ball","bars","dots","infinity","ring","spinner"]}}},n={render:e=>r`
      <modus-wc-loader
        aria-label="Loading spinner"
        color="${e.color}"
        custom-class="${s(e["custom-class"])}"
        size="${e.size}"
        variant="${e.variant}"
      ></modus-wc-loader>
    `},t={render:e=>r`
      <modus-wc-loader
        aria-label="Loading ball"
        color="${e.color}"
        custom-class="${s(e["custom-class"])}"
        size="md"
        variant="ball"
      ></modus-wc-loader>
    `},d={render:e=>r`
      <modus-wc-loader
        aria-label="Loading bars"
        color="${e.color}"
        custom-class="${s(e["custom-class"])}"
        size="md"
        variant="bars"
      ></modus-wc-loader>
    `},c={render:e=>r`
      <modus-wc-loader
        aria-label="Loading dots"
        color="${e.color}"
        custom-class="${s(e["custom-class"])}"
        size="md"
        variant="dots"
      ></modus-wc-loader>
    `},l={render:e=>r`
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
    `},m={render:e=>{if(!customElements.get("loader-shadow-host")){const N=V({componentTag:"modus-wc-loader",propsMapper:(o,R)=>{const a=R;a.color=o.color,a.customClass=o["custom-class"]||"",a.size=o.size,a.variant=o.variant}});customElements.define("loader-shadow-host",N)}return r`<loader-shadow-host
      .props=${{...e}}
    ></loader-shadow-host>`}},u={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - **Color value changes**: `dark` and `tertiary` values from 1.0 have been removed.\n  1.0 value `danger` has been renamed to `error` in 2.0. Values `accent`, `info`, and `neutral` are new options in 2.0.\n  - In 1.0 `size` used direct CSS size value strings (e.g., `'12rem'`). In 2.0 `size` is now defined by predefined values (`xs`, `sm`, `md`, `lg`), and CSS can be used for custom sizes.\n  - Added new `variant` prop to specify the loader type in 2.0.\n\n#### Prop Mapping\n\n| 1.0 Prop | 2.0 Prop | Notes                                                                                                  |\n|----------|----------|--------------------------------------------------------------------------------------------------------|\n| color    | color    | `dark` and `tertiary` from version 1.0 have been removed, `danger` has been renamed to `error` |\n| size     | size     | Now uses predefined sizes (`xs`, `sm`, `md`, `lg`), use CSS for custom sizes.                  |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var p,g,w;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var v,f,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,z,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(z=d.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var $,S,L;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(S=c.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var C,D,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var x,P,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(P=i.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var M,B,H;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('loader-shadow-host')) {
      const LoaderShadowHost = createShadowHostClass<LoaderArgs>({
        componentTag: 'modus-wc-loader',
        propsMapper: (v: LoaderArgs, el: HTMLElement) => {
          const loaderEl = el as unknown as {
            color: string;
            customClass: string;
            size: string;
            variant: string;
          };
          loaderEl.color = v.color;
          loaderEl.customClass = v['custom-class'] || '';
          loaderEl.size = v.size;
          loaderEl.variant = v.variant;
        }
      });
      customElements.define('loader-shadow-host', LoaderShadowHost);
    }
    return html\`<loader-shadow-host
      .props=\${{
      ...args
    }}
    ></loader-shadow-host>\`;
  }
}`,...(H=(B=m.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var I,T,A;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - **Color value changes**: \\`dark\\` and \\`tertiary\\` values from 1.0 have been removed.\n  1.0 value \\`danger\\` has been renamed to \\`error\\` in 2.0. Values \\`accent\\`, \\`info\\`, and \\`neutral\\` are new options in 2.0.\n  - In 1.0 \\`size\\` used direct CSS size value strings (e.g., \\`'12rem'\\`). In 2.0 \\`size\\` is now defined by predefined values (\\`xs\\`, \\`sm\\`, \\`md\\`, \\`lg\\`), and CSS can be used for custom sizes.\n  - Added new \\`variant\\` prop to specify the loader type in 2.0.\n\n#### Prop Mapping\n\n| 1.0 Prop | 2.0 Prop | Notes                                                                                                  |\n|----------|----------|--------------------------------------------------------------------------------------------------------|\n| color    | color    | \\`dark\\` and \\`tertiary\\` from version 1.0 have been removed, \\`danger\\` has been renamed to \\`error\\` |\n| size     | size     | Now uses predefined sizes (\\`xs\\`, \\`sm\\`, \\`md\\`, \\`lg\\`), use CSS for custom sizes.                  |\n        `\n      }\n    },\n    // To hide the actual story rendering and only show docs:\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  // Simple render function or leave it empty\n  render: () => html`<div></div>`\n}",...(A=(T=u.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const F=["Default","Ball","Bars","Dots","Infinity","Ring","ShadowDomParent","Migration"];export{t as Ball,d as Bars,n as Default,c as Dots,l as Infinity,u as Migration,i as Ring,m as ShadowDomParent,F as __namedExportsOrder,q as default};
