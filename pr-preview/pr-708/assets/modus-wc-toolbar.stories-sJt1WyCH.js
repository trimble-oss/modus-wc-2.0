import{x as d}from"./lit-element-C8zulti1.js";import{o as s}from"./if-defined-yv6owfG8.js";const c={title:"Components/Toolbar",component:"modus-wc-toolbar",parameters:{layout:"padded"}},n={render:a=>d`
<style>
    #toolbar-demo .modus-wc-navbar {
      gap: 0.2rem;
      height: 60px; /* toolbar height */
      border-radius: 8px;
    }
    #toolbar-demo .modus-wc-navbar-center,
    #toolbar-demo .modus-wc-navbar-end,
    #toolbar-demo .modus-wc-navbar-start {
      display: flex;
      flex: 1;
      padding-inline: 10px;
      height: 100%; /* fill height */
      background: #d9d9d969;
    }
    #toolbar-demo .modus-wc-navbar-center {
      justify-content: center;
    }
</style>
<modus-wc-toolbar id="toolbar-demo" custom-class="${s(a["custom-class"])}">
  <div slot="start">Start</div>
  <div slot="center">Center</div>
  <div slot="end">End</div>
</modus-wc-toolbar>
    `},o={...n};var e,t,r;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...Template
}`,...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const i=["Default"];export{o as Default,i as __namedExportsOrder,c as default};
