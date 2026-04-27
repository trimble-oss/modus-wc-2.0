import{w as f}from"./decorator-D4YmxizW.js";import{x as c}from"./lit-element-CucEn6F2.js";import{o as S}from"./if-defined-BiZP-SBN.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const P={title:"Components/ThemeSwitcher",component:"modus-wc-theme-switcher",args:{"custom-class":void 0,"initial-theme":void 0},decorators:[f],parameters:{actions:{handles:["themeChange"]}}},a=()=>{const t=document.documentElement.getAttribute("data-theme")||"modus-modern-light",s=t.endsWith("-dark")?"dark":"light";return{theme:t.replace(`-${s}`,""),mode:s}},C={render:t=>{const s=a();return c`
      <modus-wc-theme-provider .initialTheme=${s}>
        <modus-wc-theme-switcher
          aria-label="Theme toggle"
          custom-class=${S(t["custom-class"])}
        ></modus-wc-theme-switcher>
      </modus-wc-theme-provider>
    `}},r={...C},x={render:()=>{const t=a();return c`
      <modus-wc-theme-provider .initialTheme=${t}>
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
    `}},o={...x,parameters:{docs:{description:{story:"This example syncs with the active Storybook theme. Toggle between light and dark modes using the theme switcher on the default story to see the components adapt accordingly."}}}},n={render:t=>{if(!customElements.get("theme-switcher-shadow-host")){class s extends HTMLElement{constructor(){super(),this.themeObserver=null,this.sr=this.attachShadow({mode:"open"})}connectedCallback(){if(!this.sr.querySelector("modus-wc-theme-switcher")){const e=document.createElement("div");e.style.display="contents";const m=()=>{const h=document.documentElement.getAttribute("data-theme");h&&e.setAttribute("data-theme",h)};m(),this.themeObserver=new MutationObserver(m),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const i=document.createElement("modus-wc-theme-switcher");i.setAttribute("aria-label","Theme toggle"),e.appendChild(i),this.sr.appendChild(e)}this._props&&this.applyProps()}disconnectedCallback(){var e;(e=this.themeObserver)==null||e.disconnect(),this.themeObserver=null}set props(e){this._props=e,this.applyProps()}get props(){return this._props}applyProps(){const e=this.sr.querySelector("modus-wc-theme-switcher");!e||!this._props||(e.customClass=this._props["custom-class"]||"")}}customElements.define("theme-switcher-shadow-host",s)}return c`
      <modus-wc-theme-provider .initialTheme=${a()}>
        <theme-switcher-shadow-host
          .props=${{...t}}
        ></theme-switcher-shadow-host>
      </modus-wc-theme-provider>
    `}};var d,p,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,w,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...ThemeTestTemplate,
  parameters: {
    docs: {
      description: {
        story: 'This example syncs with the active Storybook theme. Toggle between light and dark modes using the theme switcher on the default story to see the components adapt accordingly.'
      }
    }
  }
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var g,y,T;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('theme-switcher-shadow-host')) {
      class ThemeSwitcherShadowHost extends HTMLElement {
        private sr: ShadowRoot;
        private _props?: ThemeSwitcherArgs;
        private themeObserver: MutationObserver | null = null;
        constructor() {
          super();
          this.sr = this.attachShadow({
            mode: 'open'
          });
        }
        connectedCallback() {
          // Create element here (not in constructor) so themeStore.state.mode
          // is already set by modus-wc-theme-provider before Stencil initializes
          // the component's isDarkMode class field
          if (!this.sr.querySelector('modus-wc-theme-switcher')) {
            // Sync data-theme so CSS variables work inside shadow root
            const wrapper = document.createElement('div');
            wrapper.style.display = 'contents';
            const syncTheme = () => {
              const theme = document.documentElement.getAttribute('data-theme');
              if (theme) wrapper.setAttribute('data-theme', theme);
            };
            syncTheme();
            this.themeObserver = new MutationObserver(syncTheme);
            this.themeObserver.observe(document.documentElement, {
              attributes: true,
              attributeFilter: ['data-theme']
            });
            const switcher = document.createElement('modus-wc-theme-switcher') as HTMLElement & {
              customClass: string;
            };
            switcher.setAttribute('aria-label', 'Theme toggle');
            wrapper.appendChild(switcher);
            this.sr.appendChild(wrapper);
          }
          if (this._props) this.applyProps();
        }
        disconnectedCallback() {
          this.themeObserver?.disconnect();
          this.themeObserver = null;
        }
        set props(v: ThemeSwitcherArgs) {
          this._props = v;
          this.applyProps();
        }
        get props(): ThemeSwitcherArgs | undefined {
          return this._props;
        }
        private applyProps() {
          const switcher = this.sr.querySelector('modus-wc-theme-switcher') as (HTMLElement & {
            customClass: string;
          }) | null;
          if (!switcher || !this._props) return;
          switcher.customClass = this._props['custom-class'] || '';
        }
      }
      customElements.define('theme-switcher-shadow-host', ThemeSwitcherShadowHost);
    }
    return html\`
      <modus-wc-theme-provider .initialTheme=\${getCurrentTheme()}>
        <theme-switcher-shadow-host
          .props=\${{
      ...args
    }}
        ></theme-switcher-shadow-host>
      </modus-wc-theme-provider>
    \`;
  }
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const M=["Default","ThemeTest","ShadowDomParent"];export{r as Default,n as ShadowDomParent,o as ThemeTest,M as __namedExportsOrder,P as default};
