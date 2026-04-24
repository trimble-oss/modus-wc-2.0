import{x as a}from"./lit-element-CucEn6F2.js";import{o as e}from"./if-defined-BiZP-SBN.js";import{c as R}from"./shadow-host-helper-A4Nvcs5e.js";const Y={title:"Components/Card",component:"modus-wc-card",args:{"background-figure":!1,bordered:!1,layout:"vertical",padding:"compact"},argTypes:{layout:{control:{type:"select"},options:["vertical","horizontal"]},padding:{control:{type:"select"},options:["compact","comfortable"]}},parameters:{layout:"padded"}},r={render:o=>a`
<style>
  .modus-wc-card {
    width: 400px;
  }
</style>
<modus-wc-card
  ?background-figure=${o["background-figure"]}
  ?bordered=${o.bordered}
  custom-class=${e(o["custom-class"])}
  layout=${e(o.layout)}
  padding=${e(o.padding)}
>
  <span slot="title">Card Title</span>
  <span slot="subtitle">Card Subtitle</span>
  <p>This is a sample card content. You can place any content here.</p>
  <div slot="actions" class="modus-wc-justify-end">
    <modus-wc-button aria-label="Click me">Click me</modus-wc-button>
  </div>
</modus-wc-card>
    `},d={...r},n={...r,render:()=>a`
<modus-wc-card>
  Raw card content.
</modus-wc-card>
  `},c={...r,render:o=>a`
<style>
  .slot-box {
    background: #ccccff;
    border: 2px solid purple;
    color: purple;
    display: flex;
    justify-content: center;
  }
</style>
<modus-wc-card
  ?background-figure=${o["background-figure"]}
  layout=${e(o.layout)}
  padding=${e(o.padding)}
>
  <div slot="header" class="slot-box">Header Slot</div>
  <div slot="title" class="slot-box">Title Slot</div>
  <div slot="subtitle" class="slot-box">Subtitle Slot</div>
  <div class="slot-box">Default (Body) Slot</div>
  <div slot="actions" class="slot-box">Actions Slot</div>
  <div slot="footer" class="slot-box">Footer Slot</div>
</modus-wc-card>
  `},i={...r,render:o=>a`
<style>
  #complex-card > .modus-wc-card:hover {
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }
</style>
<modus-wc-card
  id="complex-card"
  ?background-figure=${o["background-figure"]}
  ?bordered=${o.bordered}
  custom-class=${e(o["custom-class"])}
  layout=${e(o.layout)}
  padding=${e(o.padding)}
>
  <figure slot="header">
    <img
      src="https://picsum.photos/id/643/750/300"
      alt="Header Image with Shadow"
    />
  </figure>
  <span slot="title">Complex Card</span>
  <span slot="subtitle">With Shadow</span>
  <p>
    This is a more of a traditional Card, featuring a header image, content,
    multiple buttons, and a larger shadow that appears on hover.
  </p>
  <div slot="actions" class="modus-wc-justify-end">
    <modus-wc-button aria-label="Action 1">Action 1</modus-wc-button>
    <modus-wc-button aria-label="Action 2">Action 2</modus-wc-button>
  </div>
</modus-wc-card>
  `},l={...r,render:o=>a`
<modus-wc-card
  ?background-figure=${o["background-figure"]}
  ?bordered=${o.bordered}
  custom-class=${e(o["custom-class"])}
  layout="horizontal"
  padding=${e(o.padding)}
>
  <figure slot="header">
    <img src="https://picsum.photos/id/1025/200/300" alt="Horizontal Image" />
  </figure>
  <p>This card uses a horizontal layout.</p>
</modus-wc-card>
  `},u={...r,render:o=>a`
<modus-wc-card
  background-figure
  ?bordered=${o.bordered}
  custom-class=${e(o["custom-class"])}
  layout=${e(o.layout)}
  padding=${e(o.padding)}
>
  <figure slot="header">
    <img src="https://picsum.photos/id/1045/600/400" alt="Full Image" />
  </figure>
  <span slot="title">Full Image Card</span>
  <p>This card has a figure image in the background.</p>
</modus-wc-card>
  `},p={render:o=>{if(!customElements.get("card-shadow-host")){const L=R({componentTag:"modus-wc-card",propsMapper:(s,g)=>{const t=g;t.backgroundFigure=!!s["background-figure"],t.bordered=!!s.bordered,t.customClass=s["custom-class"]||"",t.layout=s.layout??"vertical",t.padding=s.padding??"compact",g.hasChildNodes()||(g.innerHTML='<span slot="title">Card Title</span><span slot="subtitle">Card Subtitle</span><p>This is a sample card content.</p><div slot="actions" class="modus-wc-justify-end"><modus-wc-button aria-label="Click me">Click me</modus-wc-button></div>')}});customElements.define("card-shadow-host",L)}return a` <style>
        card-shadow-host {
          width: 400px;
          display: block;
        }
      </style>
      <card-shadow-host .props=${{...o}}></card-shadow-host>`}},m={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0, card dimensions were controlled via direct props. In 2.0, styling should be handled through CSS.
  - Shadow effects on hover are now controlled via CSS rather than props.
  - The card component in 2.0 focuses on layout and structure rather than specific styling.

#### Prop Mapping

| 1.0 Prop             | 2.0 Prop            | Notes                                |
|----------------------|---------------------|--------------------------------------|
| border-radius        |                     | Not carried over, use CSS instead    |
| height               |                     | Not carried over, use CSS instead    |
| show-card-border     | bordered            |                                      |
| show-shadow-on-hover |                     | Not carried over, use CSS instead    |
| width                |                     | Not carried over, use CSS instead    |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var h,b,f;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,y,v;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  // prettier-ignore
  render: () => html\`
<modus-wc-card>
  Raw card content.
</modus-wc-card>
  \`
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,C,x;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  // prettier-ignore
  render: args => html\`
<style>
  .slot-box {
    background: #ccccff;
    border: 2px solid purple;
    color: purple;
    display: flex;
    justify-content: center;
  }
</style>
<modus-wc-card
  ?background-figure=\${args['background-figure']}
  layout=\${ifDefined(args.layout)}
  padding=\${ifDefined(args.padding)}
>
  <div slot="header" class="slot-box">Header Slot</div>
  <div slot="title" class="slot-box">Title Slot</div>
  <div slot="subtitle" class="slot-box">Subtitle Slot</div>
  <div class="slot-box">Default (Body) Slot</div>
  <div slot="actions" class="slot-box">Actions Slot</div>
  <div slot="footer" class="slot-box">Footer Slot</div>
</modus-wc-card>
  \`
}`,...(x=(C=c.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var k,$,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Template,
  // prettier-ignore
  render: args => html\`
<style>
  #complex-card > .modus-wc-card:hover {
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }
</style>
<modus-wc-card
  id="complex-card"
  ?background-figure=\${args['background-figure']}
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  layout=\${ifDefined(args.layout)}
  padding=\${ifDefined(args.padding)}
>
  <figure slot="header">
    <img
      src="https://picsum.photos/id/643/750/300"
      alt="Header Image with Shadow"
    />
  </figure>
  <span slot="title">Complex Card</span>
  <span slot="subtitle">With Shadow</span>
  <p>
    This is a more of a traditional Card, featuring a header image, content,
    multiple buttons, and a larger shadow that appears on hover.
  </p>
  <div slot="actions" class="modus-wc-justify-end">
    <modus-wc-button aria-label="Action 1">Action 1</modus-wc-button>
    <modus-wc-button aria-label="Action 2">Action 2</modus-wc-button>
  </div>
</modus-wc-card>
  \`
}`,...(T=($=i.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var D,H,I;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  // prettier-ignore
  render: args => html\`
<modus-wc-card
  ?background-figure=\${args['background-figure']}
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  layout="horizontal"
  padding=\${ifDefined(args.padding)}
>
  <figure slot="header">
    <img src="https://picsum.photos/id/1025/200/300" alt="Horizontal Image" />
  </figure>
  <p>This card uses a horizontal layout.</p>
</modus-wc-card>
  \`
}`,...(I=(H=l.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var E,A,N;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template,
  // prettier-ignore
  render: args => html\`
<modus-wc-card
  background-figure
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  layout=\${ifDefined(args.layout)}
  padding=\${ifDefined(args.padding)}
>
  <figure slot="header">
    <img src="https://picsum.photos/id/1045/600/400" alt="Full Image" />
  </figure>
  <span slot="title">Full Image Card</span>
  <p>This card has a figure image in the background.</p>
</modus-wc-card>
  \`
}`,...(N=(A=u.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var F,B,z;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('card-shadow-host')) {
      const CardShadowHost = createShadowHostClass<CardArgs>({
        componentTag: 'modus-wc-card',
        propsMapper: (v: CardArgs, el: HTMLElement) => {
          const cardEl = el as unknown as {
            backgroundFigure: boolean;
            bordered: boolean;
            customClass: string;
            layout: string;
            padding: string;
          };
          cardEl.backgroundFigure = Boolean(v['background-figure']);
          cardEl.bordered = Boolean(v.bordered);
          cardEl.customClass = v['custom-class'] || '';
          cardEl.layout = v.layout ?? 'vertical';
          cardEl.padding = v.padding ?? 'compact';
          if (!el.hasChildNodes()) {
            el.innerHTML = '<span slot="title">Card Title</span><span slot="subtitle">Card Subtitle</span><p>This is a sample card content.</p><div slot="actions" class="modus-wc-justify-end"><modus-wc-button aria-label="Click me">Click me</modus-wc-button></div>';
          }
        }
      });
      customElements.define('card-shadow-host', CardShadowHost);
    }
    return html\` <style>
        card-shadow-host {
          width: 400px;
          display: block;
        }
      </style>
      <card-shadow-host .props=\${{
      ...args
    }}></card-shadow-host>\`;
  }
}`,...(z=(B=p.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var M,P,j;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0, card dimensions were controlled via direct props. In 2.0, styling should be handled through CSS.
  - Shadow effects on hover are now controlled via CSS rather than props.
  - The card component in 2.0 focuses on layout and structure rather than specific styling.

#### Prop Mapping

| 1.0 Prop             | 2.0 Prop            | Notes                                |
|----------------------|---------------------|--------------------------------------|
| border-radius        |                     | Not carried over, use CSS instead    |
| height               |                     | Not carried over, use CSS instead    |
| show-card-border     | bordered            |                                      |
| show-shadow-on-hover |                     | Not carried over, use CSS instead    |
| width                |                     | Not carried over, use CSS instead    |
        \`
      }
    },
    // To hide the actual story rendering and only show docs:
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  // Simple render function or leave it empty
  render: () => html\`<div></div>\`
}`,...(j=(P=m.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const q=["Default","SimpleCard","SlotsLayout","ComplexCard","HorizontalImage","BackgroundFigureImage","ShadowDomParent","Migration"];export{u as BackgroundFigureImage,i as ComplexCard,d as Default,l as HorizontalImage,m as Migration,p as ShadowDomParent,n as SimpleCard,c as SlotsLayout,q as __namedExportsOrder,Y as default};
