import{k as o}from"./lit-element-DVRzCIa_.js";import{t as e}from"./if-defined-1ipA9LQg.js";const A={title:"Components/Card",component:"modus-wc-card",args:{"background-figure":!1,bordered:!1,layout:"vertical",padding:"normal"},argTypes:{layout:{control:{type:"select"},options:["vertical","horizontal"]},padding:{control:{type:"select"},options:["normal","compact"]}},parameters:{layout:"padded"}},r={render:a=>o`
<style>
  .modus-wc-card {
    width: 400px;
  }
</style>
<modus-wc-card
  aria-label="Sample card"
  ?background-figure=${a["background-figure"]}
  ?bordered=${a.bordered}
  custom-class=${e(a["custom-class"])}
  layout=${e(a.layout)}
  padding=${e(a.padding)}
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
  `},d={...r,render:a=>o`
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
  ?background-figure=${a["background-figure"]}
  layout=${e(a.layout)}
  padding=${e(a.padding)}
>
  <div slot="header" class="slot-box">Header Slot</div>
  <div slot="title" class="slot-box">Title Slot</div>
  <div slot="subtitle" class="slot-box">Subtitle Slot</div>
  <div class="slot-box">Default (Body) Slot</div>
  <div slot="actions" class="slot-box">Actions Slot</div>
  <div slot="footer" class="slot-box">Footer Slot</div>
</modus-wc-card>
  `},n={...r,render:a=>o`
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
  ?background-figure=${a["background-figure"]}
  ?bordered=${a.bordered}
  custom-class=${e(a["custom-class"])}
  layout=${e(a.layout)}
  padding=${e(a.padding)}
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
  `},l={...r,render:a=>o`
<modus-wc-card
  aria-label="Horizontal image card"
  ?background-figure=${a["background-figure"]}
  ?bordered=${a.bordered}
  custom-class=${e(a["custom-class"])}
  layout="horizontal"
  padding=${e(a.padding)}
>
  <figure slot="header">
    <img src="https://picsum.photos/id/1025/200/300" alt="Horizontal Image" />
  </figure>
  <p>This card uses a horizontal layout.</p>
</modus-wc-card>
  `},c={...r,render:a=>o`
<modus-wc-card
  aria-label="Full image card"
  background-figure
  ?bordered=${a.bordered}
  custom-class=${e(a["custom-class"])}
  layout=${e(a.layout)}
  padding=${e(a.padding)}
>
  <figure slot="header">
    <img src="https://picsum.photos/id/1045/600/400" alt="Full Image" />
  </figure>
  <span slot="title">Full Image Card</span>
  <p>This card has a figure image in the background.</p>
</modus-wc-card>
  `};var i,u,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,g,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template,
  // prettier-ignore
  render: () => html\`
<modus-wc-card aria-label="Simple Card">
  Raw card content.
</modus-wc-card>
  \`
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,h,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(w=(h=d.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,x,$;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...($=(x=n.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var v,S,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template,
  // prettier-ignore
  render: args => html\`
<modus-wc-card
  aria-label="Horizontal image card"
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
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,T,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template,
  // prettier-ignore
  render: args => html\`
<modus-wc-card
  aria-label="Full image card"
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
}`,...(D=(T=c.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const F=["Default","SimpleCard","SlotsLayout","ComplexCard","HorizontalImage","BackgroundFigureImage"];export{c as BackgroundFigureImage,n as ComplexCard,t as Default,l as HorizontalImage,s as SimpleCard,d as SlotsLayout,F as __namedExportsOrder,A as default};
