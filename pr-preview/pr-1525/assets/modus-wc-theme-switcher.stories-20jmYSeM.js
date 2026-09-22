import{w as S}from"./decorator-Cv9na35H.js";import{b as i}from"./lit-element-DgBvYnzn.js";import{o as C}from"./if-defined-BnVFTJ4o.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const P={title:"Components/ThemeSwitcher",component:"modus-wc-theme-switcher",args:{"custom-class":void 0,"initial-theme":void 0},decorators:[S],parameters:{actions:{handles:["themeChange"]}}},a=()=>{const t=document.documentElement.getAttribute("data-theme")||"modus-modern-light",s=t.endsWith("-dark")?"dark":"light";return{theme:t.replace(`-${s}`,""),mode:s}},E={render:t=>{const s=a();return i`
      <modus-wc-theme-provider .initialTheme=${s}>
        <modus-wc-theme-switcher
          aria-label="Theme toggle"
          custom-class=${C(t["custom-class"])}
        ></modus-wc-theme-switcher>
      </modus-wc-theme-provider>
    `}},r={...E},x={render:()=>{const t=a();return i`
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
    `}},o={...x,parameters:{docs:{description:{story:"This example syncs with the active Storybook theme. Toggle between light and dark modes using the theme switcher on the default story to see the components adapt accordingly."}}}},n={render:t=>{if(!customElements.get("theme-switcher-shadow-host")){class s extends HTMLElement{constructor(){super(),this.themeObserver=null,this.sr=this.attachShadow({mode:"open"})}connectedCallback(){if(this.sr.childElementCount)return;const e=document.createElement("div");e.style.display="contents";const h=()=>{const d=document.documentElement.getAttribute("data-theme");d&&e.setAttribute("data-theme",d)};h(),this.themeObserver=new MutationObserver(h),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const c=document.createElement("modus-wc-theme-provider");c.initialTheme=a();const m=document.createElement("modus-wc-theme-switcher");m.setAttribute("aria-label","Theme toggle"),c.appendChild(m),e.appendChild(c),this.sr.appendChild(e),this._props&&this.applyProps()}disconnectedCallback(){var e;(e=this.themeObserver)==null||e.disconnect(),this.themeObserver=null}set props(e){this._props=e,this.applyProps()}get props(){return this._props}applyProps(){const e=this.sr.querySelector("modus-wc-theme-switcher");!e||!this._props||(e.customClass=this._props["custom-class"]||"")}}customElements.define("theme-switcher-shadow-host",s)}return i`<theme-switcher-shadow-host
      .props=${{...t}}
    ></theme-switcher-shadow-host>`}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var w,g,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...ThemeTestTemplate,
  parameters: {
    docs: {
      description: {
        story: 'This example syncs with the active Storybook theme. Toggle between light and dark modes using the theme switcher on the default story to see the components adapt accordingly.'
      }
    }
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,T,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
          if (this.sr.childElementCount) return;

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

          // Create provider + switcher together here (not in constructor) so
          // provider connects first and initializes themeStore before the
          // switcher reads themeStore.state.mode for its isDarkMode field
          const provider = document.createElement('modus-wc-theme-provider') as HTMLElement & {
            initialTheme: {
              theme: string;
              mode: string;
            };
          };
          provider.initialTheme = getCurrentTheme();
          const switcher = document.createElement('modus-wc-theme-switcher') as HTMLElement & {
            customClass: string;
          };
          switcher.setAttribute('aria-label', 'Theme toggle');
          provider.appendChild(switcher);
          wrapper.appendChild(provider);
          this.sr.appendChild(wrapper);
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
          const switcher = this.sr.querySelector('modus-wc-theme-switcher');
          if (!switcher || !this._props) return;
          (switcher as HTMLElement & {
            customClass: string;
          }).customClass = this._props['custom-class'] || '';
        }
      }
      customElements.define('theme-switcher-shadow-host', ThemeSwitcherShadowHost);
    }
    return html\`<theme-switcher-shadow-host
      .props=\${{
      ...args
    }}
    ></theme-switcher-shadow-host>\`;
  }
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const H=["Default","ThemeTest","ShadowDomParent"];export{r as Default,n as ShadowDomParent,o as ThemeTest,H as __namedExportsOrder,P as default};
