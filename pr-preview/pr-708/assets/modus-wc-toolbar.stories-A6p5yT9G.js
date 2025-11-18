import{x as s}from"./lit-element-C8zulti1.js";import{o as d}from"./if-defined-yv6owfG8.js";const m={title:"Components/Toolbar",component:"modus-wc-toolbar",parameters:{layout:"padded"}},n={render:a=>s`
<style>
    .modus-wc-navbar {
      gap: 0.2rem;
      height: 60px; /* toolbar height */
      border-radius: 8px;
      border: 1px dashed black;
    }
    .modus-wc-navbar-center,
    .modus-wc-navbar-end,
    .modus-wc-navbar-start {
      display: flex;
      flex: 1;
      padding: 0 10px;
      height: 100%; /* fill height */
      background: #d9d9d969;
    }
    .modus-wc-navbar-center {
      justify-content: center;
    }
</style>
<modus-wc-toolbar custom-class="${d(a["custom-class"])}">
  <div slot="start">Start</div>
  <div slot="center">Center</div>
  <div slot="end">End</div>
</modus-wc-toolbar>
    `},e={...n};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,m as default};
