import{x as t}from"./lit-element-CucEn6F2.js";import{o as a}from"./if-defined-BiZP-SBN.js";import{g as v}from"./logo-constants-B1DTGvvy.js";import{c as f}from"./shadow-host-helper-A4Nvcs5e.js";const z={title:"Components/Logo",component:"modus-wc-logo",args:{name:"trimble",emblem:!1},argTypes:{name:{control:{type:"select"},options:v()},emblem:{control:{type:"boolean"}}}},y={render:o=>t`
      <modus-wc-logo
        name="${o.name}"
        ?emblem="${o.emblem}"
        alt="${a(o.alt)}"
        custom-class="${a(o["custom-class"])}"
      ></modus-wc-logo>
    `},l={...y},m={render:()=>t`
      <style>
        .logo-small {
          width: 80px;
        }
        .logo-medium {
          width: 150px;
        }
        .logo-large {
          width: 250px;
        }
        .emblem-xs {
          width: 80px;
          height: 80px;
        }
        .emblem-sm {
          width: 150px;
          height: 150px;
        }
        .emblem-lg {
          width: 250px;
          height: 250px;
        }
      </style>
      <div style="display: flex; flex-direction: column; gap: 3rem;">
        <div>
          <h4>Full Logos - Custom Sizes</h4>
          <div
            style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;"
          >
            <modus-wc-logo
              name="trimble"
              custom-class="logo-small"
            ></modus-wc-logo>
            <modus-wc-logo
              name="trimble"
              custom-class="logo-medium"
            ></modus-wc-logo>
            <modus-wc-logo
              name="trimble"
              custom-class="logo-large"
            ></modus-wc-logo>
          </div>
        </div>

        <div>
          <h4>Emblems - Custom Sizes</h4>
          <div
            style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;"
          >
            <modus-wc-logo
              name="trimble"
              emblem
              custom-class="emblem-xs"
            ></modus-wc-logo>
            <modus-wc-logo
              name="trimble"
              emblem
              custom-class="emblem-sm"
            ></modus-wc-logo>
            <modus-wc-logo
              name="trimble"
              emblem
              custom-class="emblem-lg"
            ></modus-wc-logo>
          </div>
        </div>
        </div>
      </div>
    `},n={render:o=>{if(!customElements.get("logo-shadow-host")){const b=f({componentTag:"modus-wc-logo",propsMapper:(e,x)=>{const s=x;s.name=e.name,s.emblem=!!e.emblem,s.alt=e.alt??"",s.customClass=e["custom-class"]||""}});customElements.define("logo-shadow-host",b)}return t`<logo-shadow-host .props=${{...o}}></logo-shadow-host>`}};var r,c,d;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,i,u;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <style>
        .logo-small {
          width: 80px;
        }
        .logo-medium {
          width: 150px;
        }
        .logo-large {
          width: 250px;
        }
        .emblem-xs {
          width: 80px;
          height: 80px;
        }
        .emblem-sm {
          width: 150px;
          height: 150px;
        }
        .emblem-lg {
          width: 250px;
          height: 250px;
        }
      </style>
      <div style="display: flex; flex-direction: column; gap: 3rem;">
        <div>
          <h4>Full Logos - Custom Sizes</h4>
          <div
            style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;"
          >
            <modus-wc-logo
              name="trimble"
              custom-class="logo-small"
            ></modus-wc-logo>
            <modus-wc-logo
              name="trimble"
              custom-class="logo-medium"
            ></modus-wc-logo>
            <modus-wc-logo
              name="trimble"
              custom-class="logo-large"
            ></modus-wc-logo>
          </div>
        </div>

        <div>
          <h4>Emblems - Custom Sizes</h4>
          <div
            style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;"
          >
            <modus-wc-logo
              name="trimble"
              emblem
              custom-class="emblem-xs"
            ></modus-wc-logo>
            <modus-wc-logo
              name="trimble"
              emblem
              custom-class="emblem-sm"
            ></modus-wc-logo>
            <modus-wc-logo
              name="trimble"
              emblem
              custom-class="emblem-lg"
            ></modus-wc-logo>
          </div>
        </div>
        </div>
      </div>
    \`;
  }
}`,...(u=(i=m.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,w,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('logo-shadow-host')) {
      const LogoShadowHost = createShadowHostClass<LogoArgs>({
        componentTag: 'modus-wc-logo',
        propsMapper: (v: LogoArgs, el: HTMLElement) => {
          const logoEl = el as unknown as {
            name: string;
            emblem: boolean;
            alt: string;
            customClass: string;
          };
          logoEl.name = v.name;
          logoEl.emblem = Boolean(v.emblem);
          logoEl.alt = v.alt ?? '';
          logoEl.customClass = v['custom-class'] || '';
        }
      });
      customElements.define('logo-shadow-host', LogoShadowHost);
    }
    return html\`<logo-shadow-host .props=\${{
      ...args
    }}></logo-shadow-host>\`;
  }
}`,...(h=(w=n.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const H=["Default","CustomSizeWithClass","ShadowDomParent"];export{m as CustomSizeWithClass,l as Default,n as ShadowDomParent,H as __namedExportsOrder,z as default};
