import{w as u}from"./decorator-D4YmxizW.js";import{x as i}from"./lit-element-C8zulti1.js";import{o as l}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const x={title:"Components/ThemeSwitcher",component:"modus-wc-theme-switcher",args:{"custom-class":void 0,"initial-theme":void 0},decorators:[u],parameters:{actions:{handles:["themeChange"]}}},h=()=>{const e=document.documentElement.getAttribute("data-theme")||"modus-modern-light",t=e.endsWith("-dark")?"dark":"light";return{theme:e.replace(`-${t}`,""),mode:t}},p={render:e=>{const t=h();return i`
      <modus-wc-theme-provider .initialTheme=${t}>
        <modus-wc-theme-switcher
          aria-label="Theme toggle"
          custom-class=${l(e["custom-class"])}
        ></modus-wc-theme-switcher>
      </modus-wc-theme-provider>
    `}},o={...p},w={render:()=>{const e=h();return i`
      <modus-wc-theme-provider .initialTheme=${e}>
        <div style="padding: 40px">
          <h2 style="text-align: center; color: var(--mwc-color-on-surface);">
            Theme Configuration Test
          </h2>
          <p
            style="text-align: center; color: var(--mwc-color-on-surface-secondary); margin-bottom: 30px;"
          >
            This story matches the global Storybook theme
          </p>

          <div
            style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-bottom: 30px;"
          >
            <modus-wc-button color="primary">Primary Button</modus-wc-button>
            <modus-wc-button color="secondary"
              >Secondary Button</modus-wc-button
            >
            <modus-wc-button color="tertiary">Tertiary Button</modus-wc-button>
            <modus-wc-button color="danger">Danger Button</modus-wc-button>
          </div>

          <div
            style="display: flex; gap: 15px; flex-wrap: wrap; justify-content: center; align-items: center;"
          >
            <modus-wc-badge color="primary">Badge</modus-wc-badge>
            <modus-wc-badge color="secondary">Badge 2</modus-wc-badge>
            <modus-wc-chip label="Chip 1"></modus-wc-chip>
            <modus-wc-chip label="Chip 2" active></modus-wc-chip>
            <modus-wc-switch label="Switch"></modus-wc-switch>
          </div>
        </div>
      </modus-wc-theme-provider>
    `}},r={...w,parameters:{docs:{description:{story:"This example syncs with the active Storybook theme. Toggle between light and dark modes using the theme switcher on the default story to see the components adapt accordingly."}}}};var s,c,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(a=(c=o.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var m,n,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...ThemeTestTemplate,
  parameters: {
    docs: {
      description: {
        story: 'This example syncs with the active Storybook theme. Toggle between light and dark modes using the theme switcher on the default story to see the components adapt accordingly.'
      }
    }
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const S=["Default","ThemeTest"];export{o as Default,r as ThemeTest,S as __namedExportsOrder,x as default};
