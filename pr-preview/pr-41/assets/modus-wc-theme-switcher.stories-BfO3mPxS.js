import{k as a}from"./lit-element-DVRzCIa_.js";const l={title:"Components/Molecules/ThemeSwitcher",component:"modus-wc-theme-switcher",tags:["autodocs"],parameters:{docs:{description:{component:"Theme switcher component that allows users to toggle between different themes (Modus Classic, Prism) and modes (Light, Dark)."}},layout:"centered"},argTypes:{ariaLabel:{control:"text"},controls:{control:"text"},customClass:{control:"text"}}},c={render:t=>a`
    <modus-wc-theme-provider>
      <modus-wc-theme-switcher
        aria-label=${t.ariaLabel}
        controls=${t.controls}
        custom-class=${t.customClass}
      ></modus-wc-theme-switcher>
    </modus-wc-theme-provider>
  `,args:{ariaLabel:"Toggle theme",controls:"mode"}},e={...c};var o,s,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const n=["Default"];export{e as Default,n as __namedExportsOrder,l as default};
