import{w as b}from"./decorator-D4YmxizW.js";import{x as c}from"./lit-element-CucEn6F2.js";import{o as S}from"./if-defined-BiZP-SBN.js";import{c as f}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const D={title:"Components/ThemeSwitcher",component:"modus-wc-theme-switcher",args:{"custom-class":void 0,"initial-theme":void 0},decorators:[b],parameters:{actions:{handles:["themeChange"]}}},g=()=>{const e=document.documentElement.getAttribute("data-theme")||"modus-modern-light",t=e.endsWith("-dark")?"dark":"light";return{theme:e.replace(`-${t}`,""),mode:t}},v={render:e=>{const t=g();return c`
      <modus-wc-theme-provider .initialTheme=${t}>
        <modus-wc-theme-switcher
          aria-label="Theme toggle"
          custom-class=${S(e["custom-class"])}
        ></modus-wc-theme-switcher>
      </modus-wc-theme-provider>
    `}},o={...v},x={render:()=>{const e=g();return c`
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
    `}},s={...x,parameters:{docs:{description:{story:"This example syncs with the active Storybook theme. Toggle between light and dark modes using the theme switcher on the default story to see the components adapt accordingly."}}}},r={render:e=>{if(!customElements.get("theme-switcher-shadow-host")){const t=f({componentTag:"modus-wc-theme-switcher",propsMapper:(a,T)=>{const y=T;y.customClass=a["custom-class"]||""}});customElements.define("theme-switcher-shadow-host",t)}return c`<theme-switcher-shadow-host
      .props=${{...e}}
    ></theme-switcher-shadow-host>`}};var m,n,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(h=(n=o.parameters)==null?void 0:n.docs)==null?void 0:h.source}}};var i,d,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...ThemeTestTemplate,
  parameters: {
    docs: {
      description: {
        story: 'This example syncs with the active Storybook theme. Toggle between light and dark modes using the theme switcher on the default story to see the components adapt accordingly.'
      }
    }
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,w,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('theme-switcher-shadow-host')) {
      const ThemeSwitcherShadowHost = createShadowHostClass<ThemeSwitcherArgs>({
        componentTag: 'modus-wc-theme-switcher',
        propsMapper: (v: ThemeSwitcherArgs, el: HTMLElement) => {
          const themeSwitcherEl = el as unknown as {
            customClass: string;
          };
          themeSwitcherEl.customClass = v['custom-class'] || '';
        }
      });
      customElements.define('theme-switcher-shadow-host', ThemeSwitcherShadowHost);
    }
    return html\`<theme-switcher-shadow-host
      .props=\${{
      ...args
    }}
    ></theme-switcher-shadow-host>\`;
  }
}`,...(p=(w=r.parameters)==null?void 0:w.docs)==null?void 0:p.source}}};const A=["Default","ThemeTest","ShadowDomParent"];export{o as Default,r as ShadowDomParent,s as ThemeTest,A as __namedExportsOrder,D as default};
