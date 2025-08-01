import{x as o}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";const B={title:"Components/Card",component:"modus-wc-card",args:{"background-figure":!1,bordered:!1,layout:"vertical",padding:"normal"},argTypes:{layout:{control:{type:"select"},options:["vertical","horizontal"]},padding:{control:{type:"select"},options:["normal","compact"]}},parameters:{layout:"padded"}},r={render:e=>o`
<style>
  .modus-wc-card {
    width: 400px;
  }
</style>
<modus-wc-card
  aria-label="Sample card"
  ?background-figure=${e["background-figure"]}
  ?bordered=${e.bordered}
  custom-class=${a(e["custom-class"])}
  layout=${a(e.layout)}
  padding=${a(e.padding)}
>
  <span slot="title">Card Title</span>
  <span slot="subtitle">Card Subtitle</span>
  <p>This is a sample card content. You can place any content here.</p>
  <div slot="actions" class="modus-wc-justify-end">
    <modus-wc-button aria-label="Click me">Click me</modus-wc-button>
  </div>
</modus-wc-card>
    `},t={...r},s={...r,render:()=>o`
<modus-wc-card aria-label="Simple Card">
  Raw card content.
</modus-wc-card>
  `},n={...r,render:e=>o`
<style>
  .slot-box {
    background: #ccccff;
    border: 2px solid rebeccapurple;
    color: rebeccapurple;
    display: flex;
    justify-content: center;
  }
</style>
<modus-wc-card
  aria-label="Card with all slots"
  ?background-figure=${e["background-figure"]}
  layout=${a(e.layout)}
  padding=${a(e.padding)}
>
  <div slot="header" class="slot-box">Header Slot</div>
  <div slot="title" class="slot-box">Title Slot</div>
  <div slot="subtitle" class="slot-box">Subtitle Slot</div>
  <div class="slot-box">Default (Body) Slot</div>
  <div slot="actions" class="slot-box">Actions Slot</div>
  <div slot="footer" class="slot-box">Footer Slot</div>
</modus-wc-card>
  `},d={...r,render:e=>o`
<style>
  #complex-card > .modus-wc-card:hover {
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }
</style>
<modus-wc-card
  aria-label="Complex card with images and shadow"
  id="complex-card"
  ?background-figure=${e["background-figure"]}
  ?bordered=${e.bordered}
  custom-class=${a(e["custom-class"])}
  layout=${a(e.layout)}
  padding=${a(e.padding)}
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
  `},i={...r,render:e=>o`
<modus-wc-card
  ?background-figure=${e["background-figure"]}
  ?bordered=${e.bordered}
  custom-class=${a(e["custom-class"])}
  layout="horizontal"
  padding=${a(e.padding)}
>
  <figure slot="header">
    <img src="https://picsum.photos/id/1025/200/300" alt="Horizontal Image" />
  </figure>
  <p>This card uses a horizontal layout.</p>
</modus-wc-card>
  `},c={...r,render:e=>o`
<modus-wc-card
  background-figure
  ?bordered=${e.bordered}
  custom-class=${a(e["custom-class"])}
  layout=${a(e.layout)}
  padding=${a(e.padding)}
>
  <figure slot="header">
    <img src="https://picsum.photos/id/1045/600/400" alt="Full Image" />
  </figure>
  <span slot="title">Full Image Card</span>
  <p>This card has a figure image in the background.</p>
</modus-wc-card>
  `},l={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,h,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  // prettier-ignore
  render: () => html\`
<modus-wc-card aria-label="Simple Card">
  Raw card content.
</modus-wc-card>
  \`
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,w,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  // prettier-ignore
  render: args => html\`
<style>
  .slot-box {
    background: #ccccff;
    border: 2px solid rebeccapurple;
    color: rebeccapurple;
    display: flex;
    justify-content: center;
  }
</style>
<modus-wc-card
  aria-label="Card with all slots"
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
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var v,y,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
  aria-label="Complex card with images and shadow"
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
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,$,k;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=($=i.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var T,I,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var A,N,z;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(N=l.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};const P=["Default","SimpleCard","SlotsLayout","ComplexCard","HorizontalImage","BackgroundFigureImage","Migration"];export{c as BackgroundFigureImage,d as ComplexCard,t as Default,i as HorizontalImage,l as Migration,s as SimpleCard,n as SlotsLayout,P as __namedExportsOrder,B as default};
