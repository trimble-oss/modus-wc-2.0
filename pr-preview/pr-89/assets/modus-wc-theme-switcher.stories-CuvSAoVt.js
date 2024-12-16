import{w as r}from"./decorator-Dt3Huotz.js";import{k as m}from"./lit-element-DVRzCIa_.js";import{t as i}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const p={title:"Components/ThemeSwitcher",component:"modus-wc-theme-switcher",args:{"a11y-label":"Toggle theme","custom-class":void 0,"initial-theme":void 0},argTypes:{"a11y-label":{control:"text",description:"The a11y-label attribute for accessibility."},"custom-class":{control:"text",description:"Custom CSS class to apply to the theme switcher element."},"initial-theme":{control:"object",description:"Initial theme configuration (set on the theme provider).",table:{defaultValue:{summary:'{ theme: "modus-classic" }'}}}},decorators:[r],parameters:{actions:{handles:["themeChange"]}}},c={render:t=>m`
<modus-wc-theme-provider .initialTheme=${t["initial-theme"]}>
  <modus-wc-theme-switcher
    a11y-label=${t["a11y-label"]}
    custom-class=${i(t["custom-class"])}
  ></modus-wc-theme-switcher>
</modus-wc-theme-provider>
  `},e={...c};var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,p as default};
