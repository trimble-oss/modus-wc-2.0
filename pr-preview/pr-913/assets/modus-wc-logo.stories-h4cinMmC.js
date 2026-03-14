import{x as c}from"./lit-element-CucEn6F2.js";import{o as l}from"./if-defined-BiZP-SBN.js";import{g as r}from"./logo-constants-ByQwMpdN.js";const b={title:"Components/Logo",component:"modus-wc-logo",args:{name:"trimble",emblem:!1},argTypes:{name:{control:{type:"select"},options:r()},emblem:{control:{type:"boolean"}}}},g={render:e=>c`
      <modus-wc-logo
        name="${e.name}"
        ?emblem="${e.emblem}"
        alt="${l(e.alt)}"
        custom-class="${l(e["custom-class"])}"
      ></modus-wc-logo>
    `},o={...g},m={render:()=>c`
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
    `};var s,n,t;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(t=(n=o.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var a,i,d;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(i=m.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const x=["Default","CustomSizeWithClass"];export{m as CustomSizeWithClass,o as Default,x as __namedExportsOrder,b as default};
