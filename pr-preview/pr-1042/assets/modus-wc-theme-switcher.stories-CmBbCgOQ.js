import{w as f}from"./decorator-D4YmxizW.js";import{x as a}from"./lit-element-CucEn6F2.js";import{o as S}from"./if-defined-BiZP-SBN.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const M={title:"Components/ThemeSwitcher",component:"modus-wc-theme-switcher",args:{"custom-class":void 0,"initial-theme":void 0},decorators:[f],parameters:{actions:{handles:["themeChange"]}}},m=()=>{const t=document.documentElement.getAttribute("data-theme")||"modus-modern-light",r=t.endsWith("-dark")?"dark":"light";return{theme:t.replace(`-${r}`,""),mode:r}},E={render:t=>{const r=m();return a`
      <modus-wc-theme-provider .initialTheme=${r}>
        <modus-wc-theme-switcher
          aria-label="Theme toggle"
          custom-class=${S(t["custom-class"])}
        ></modus-wc-theme-switcher>
      </modus-wc-theme-provider>
    `}},o={...E},C={render:()=>{const t=m();return a`
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
    `}},s={...C,parameters:{docs:{description:{story:"This example syncs with the active Storybook theme. Toggle between light and dark modes using the theme switcher on the default story to see the components adapt accordingly."}}}},n={render:()=>{if(!customElements.get("theme-switcher-shadow-host")){class t extends HTMLElement{constructor(){super(),this.themeObserver=null,this.sr=this.attachShadow({mode:"open"})}connectedCallback(){if(this.sr.childElementCount)return;const e=document.createElement("div");e.style.display="contents";const i=()=>{const d=document.documentElement.getAttribute("data-theme");d&&e.setAttribute("data-theme",d)};i(),this.themeObserver=new MutationObserver(i),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const c=document.createElement("modus-wc-theme-provider");c.initialTheme=m();const h=document.createElement("modus-wc-theme-switcher");h.setAttribute("aria-label","Theme toggle"),c.appendChild(h),e.appendChild(c),this.sr.appendChild(e)}disconnectedCallback(){var e;(e=this.themeObserver)==null||e.disconnect(),this.themeObserver=null}set props(e){}}customElements.define("theme-switcher-shadow-host",t)}return a`<theme-switcher-shadow-host></theme-switcher-shadow-host>`}};var l,u,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var w,b,g;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...ThemeTestTemplate,
  parameters: {
    docs: {
      description: {
        story: 'This example syncs with the active Storybook theme. Toggle between light and dark modes using the theme switcher on the default story to see the components adapt accordingly.'
      }
    }
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,T,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    if (!customElements.get('theme-switcher-shadow-host')) {
      class ThemeSwitcherShadowHost extends HTMLElement {
        private sr: ShadowRoot;
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

          // Render same structure as Default story — provider + switcher
          // together so themeStore initializes correctly before the switcher
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
        }
        disconnectedCallback() {
          this.themeObserver?.disconnect();
          this.themeObserver = null;
        }

        // props setter not needed for behaviour but kept for Storybook controls
        set props(_: ThemeSwitcherArgs) {}
      }
      customElements.define('theme-switcher-shadow-host', ThemeSwitcherShadowHost);
    }
    return html\`<theme-switcher-shadow-host></theme-switcher-shadow-host>\`;
  }
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const B=["Default","ThemeTest","ShadowDomParent"];export{o as Default,n as ShadowDomParent,s as ThemeTest,B as __namedExportsOrder,M as default};
