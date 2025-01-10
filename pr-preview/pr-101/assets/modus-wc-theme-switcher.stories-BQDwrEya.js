import{w as s}from"./decorator-Dt3Huotz.js";import{k as i}from"./lit-element-DVRzCIa_.js";import{t as m}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const p={title:"Components/ThemeSwitcher",component:"modus-wc-theme-switcher",args:{"aria-label":"Toggle theme","custom-class":void 0,"initial-theme":void 0},argTypes:{"aria-label":{control:"text",description:"The aria-label attribute for accessibility."},"custom-class":{control:"text",description:"Custom CSS class to apply to the theme switcher element."},"initial-theme":{control:"object",description:"Initial theme configuration (set on the theme provider).",table:{defaultValue:{summary:'{ theme: "modus-modern" }'}}}},decorators:[s],parameters:{actions:{handles:["themeChange"]}}},c={render:t=>i`
<modus-wc-theme-provider .initialTheme=${t["initial-theme"]}>
  <modus-wc-theme-switcher
    aria-label=${t["aria-label"]}
    custom-class=${m(t["custom-class"])}
  ></modus-wc-theme-switcher>
</modus-wc-theme-provider>
  `},e={...c};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,p as default};
