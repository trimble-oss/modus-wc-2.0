import{k as d}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";const n={title:"Components/Card",component:"modus-wc-card",args:{bordered:!1,"image-full":!1,layout:"stacked",padding:"normal"},argTypes:{layout:{control:{type:"inline-radio"},options:["stacked","side"]},padding:{control:{type:"inline-radio"},options:["normal","compact"]}},parameters:{layout:"padded"}},l={render:e=>d`
<style>
  .modus-wc-card {
    width: 400px;
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }
</style>
<modus-wc-card
  aria-label="Sample card"
  ?bordered=${e.bordered}
  custom-class=${o(e["custom-class"])}
  ?image-full=${e["image-full"]}
  layout=${o(e.layout)}
  padding=${o(e.padding)}
>
  <figure slot="header">
    <img
      src="https://picsum.photos/400/150"
      alt="Sample card image"
    />
  </figure>
  <h2 slot="title">Card Title</h2>
  <p>This is a sample card content. You can place any content here.</p>
  <div slot="actions" class="modus-wc-justify-end">
    <modus-wc-button label="Click me"></modus-wc-button>
  </div>
</modus-wc-card>
    `},a={...l};var t,s,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template
}`,...(r=(s=a.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const i=["Default"];export{a as Default,i as __namedExportsOrder,n as default};
