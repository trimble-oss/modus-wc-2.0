import{w as d}from"./decorator-D4YmxizW.js";import{x as i}from"./lit-element-C8zulti1.js";import{o as l}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const b={title:"Components/ThemeSwitcher",component:"modus-wc-theme-switcher",args:{"custom-class":void 0,"initial-theme":void 0},decorators:[d],parameters:{actions:{handles:["themeChange"]}}},p={render:e=>i`
<modus-wc-theme-provider .initialTheme=${e["initial-theme"]}>
  <modus-wc-theme-switcher
    aria-label="Theme toggle"
    custom-class=${l(e["custom-class"])}
  ></modus-wc-theme-switcher>
</modus-wc-theme-provider>
  `},t={...p},h={args:{theme:"modus-modern",mode:"light"},argTypes:{theme:{control:{type:"select"},options:["modus-modern","modus-classic"],description:"The theme to apply"},mode:{control:{type:"select"},options:["light","dark"],description:"The theme mode (light or dark)"}},render:e=>i`
    <modus-wc-theme-provider
      .initialTheme=${{theme:e.theme,mode:e.mode}}
    >
      <div
        style="padding: 40px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;"
      >
        <h2 style="text-align: center; color: var(--mwc-color-on-surface);">
          Theme Configuration Test
        </h2>
        <p
          style="text-align: center; color: var(--mwc-color-on-surface-secondary); margin-bottom: 30px;"
        >
          Testing ${e.mode} mode with ${e.theme} theme
        </p>

        <div
          style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-bottom: 30px;"
        >
          <modus-wc-button color="primary">Primary Button</modus-wc-button>
          <modus-wc-button color="secondary">Secondary Button</modus-wc-button>
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
  `},o={...h,parameters:{docs:{description:{story:"Test different theme and mode combinations. Use the controls to switch between themes and modes."}}}};var s,r,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(m=(r=t.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};var c,a,n;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...ThemeTestTemplate,
  parameters: {
    docs: {
      description: {
        story: 'Test different theme and mode combinations. Use the controls to switch between themes and modes.'
      }
    }
  }
}`,...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const f=["Default","ThemeTest"];export{t as Default,o as ThemeTest,f as __namedExportsOrder,b as default};
