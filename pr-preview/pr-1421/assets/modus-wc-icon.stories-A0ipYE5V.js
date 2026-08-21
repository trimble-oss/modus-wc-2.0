import{b as n}from"./lit-element-DgBvYnzn.js";import{o as l}from"./if-defined-BnVFTJ4o.js";import{c as T}from"./shadow-host-helper-A4Nvcs5e.js";const q={title:"Components/Icon",component:"modus-wc-icon",args:{"custom-class":"",decorative:!1,name:"alert",size:"md"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["outlined","solid"]}}},U={render:e=>n`
      <modus-wc-icon
        aria-label="Alert icon"
        custom-class="${l(e["custom-class"])}"
        ?decorative="${e.decorative}"
        .name="${e.name}"
        size="${e.size}"
        variant="${l(e.variant)}"
      >
      </modus-wc-icon>
    `},a={...U},t={render:e=>n`
<style>
  .red-icon {
    color: red;
  }
</style>
<modus-wc-icon
  aria-label="Red alert icon"
  custom-class="red-icon"
  .name="${e.name}"
  size="${e.size}"
>
</modus-wc-icon>
    `},i={render:()=>n`
    <div style="display: flex; gap: 2rem; align-items: center;">
      <div style="text-align: center;">
        <modus-wc-icon
          aria-label="Aliased add icon"
          name="add"
          size="lg"
        ></modus-wc-icon>
        <div>1.0 alias: add → plus</div>
      </div>
      <div style="text-align: center;">
        <modus-wc-icon
          aria-label="Native ship icon"
          name="ship"
          size="lg"
        ></modus-wc-icon>
        <div>Native 2.0: ship</div>
      </div>
      <div style="text-align: center;">
        <modus-wc-icon
          aria-label="Native satellite icon"
          name="satellite"
          size="lg"
        ></modus-wc-icon>
        <div>Native 2.0: satellite</div>
      </div>
      <div style="text-align: center;">
        <modus-wc-icon
          aria-label="Unmapped address icon"
          name="address"
          size="lg"
        ></modus-wc-icon>
        <div>Unmapped 1.0: address</div>
      </div>
    </div>
  `},r={args:{"custom-class":"icon-font tc-icon-cloud-queue",decorative:!1,name:"",size:"lg"},decorators:[e=>n`
      <link
        rel="stylesheet"
        href="https://resources.connect.trimble.com/1.12.0/fonts/icon-font.min.css"
      />
      ${e()}
    `],render:e=>n`
      <modus-wc-icon
        aria-label="Cloud Queue icon"
        custom-class="${l(e["custom-class"])}"
        ?decorative="${e.decorative}"
        .name="${e.name}"
        size="${e.size}"
      >
      </modus-wc-icon>
    `},c={render:e=>{if(!customElements.get("icon-shadow-host")){const x=T({componentTag:"modus-wc-icon",propsMapper:(s,M)=>{const o=M;o.customClass=s["custom-class"]||"",o.decorative=!!s.decorative,o.name=s.name,o.size=s.size,o.variant=s.variant??"outlined"}});customElements.define("icon-shadow-host",x)}return n`<icon-shadow-host .props=${{...e}}></icon-shadow-host>`}},d={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - Requires <b>Modus Icons</b> to be installed in the host application see [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs).\n  - The `color` property has been removed in favor of using CSS for styling.\n  - The `iconClick` event has been removed. Use the `click` event on the host element instead.\n  - In 1.0 the `size` prop accepted any numeric string (e.g., `'16'`, `'24'`, `'32'`) to set the icon's\n  width and height. 2.0 uses preset sizes: `sm`, `md`, `lg`, and can use CSS for custom sizes.\n\n#### Icon names\n\n  - Legacy 1.0 names that have an approved mapping now paint the matching 2.0 glyph (for example `name=\"add\"` renders `plus`).\n  - Native 2.0 kebab slugs work as-is (`name=\"ship\"`, `name=\"api\"`).\n  - Unmapped 1.0 names keep the previous 1.0 ligature fallback until they are added to the alias table.\n\n#### Prop Mapping\n\n| 1.0 Prop | 2.0 Prop | Notes                                                |\n|----------|----------|------------------------------------------------------|\n| color    |          | Not carried over, use CSS instead                    |\n| name     | name     | 1.0 names resolve to 2.0 glyphs when aliased         |\n| size     | size     | Numeric values changed to `sm`, `md`, `lg`, use CSS for custom sizes |\n\n#### Event Mapping\n\n| 1.0 Event | 2.0 Event | Notes                                                         |\n|-----------|-----------|---------------------------------------------------------------|\n| iconClick |           | Not carried over, use `click` event on host element instead |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>n`<div></div>`};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var v,h,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .red-icon {
    color: red;
  }
</style>
<modus-wc-icon
  aria-label="Red alert icon"
  custom-class="red-icon"
  .name="\${args.name}"
  size="\${args.size}"
>
</modus-wc-icon>
    \`;
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var w,f,b;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 2rem; align-items: center;">
      <div style="text-align: center;">
        <modus-wc-icon
          aria-label="Aliased add icon"
          name="add"
          size="lg"
        ></modus-wc-icon>
        <div>1.0 alias: add → plus</div>
      </div>
      <div style="text-align: center;">
        <modus-wc-icon
          aria-label="Native ship icon"
          name="ship"
          size="lg"
        ></modus-wc-icon>
        <div>Native 2.0: ship</div>
      </div>
      <div style="text-align: center;">
        <modus-wc-icon
          aria-label="Native satellite icon"
          name="satellite"
          size="lg"
        ></modus-wc-icon>
        <div>Native 2.0: satellite</div>
      </div>
      <div style="text-align: center;">
        <modus-wc-icon
          aria-label="Unmapped address icon"
          name="address"
          size="lg"
        ></modus-wc-icon>
        <div>Unmapped 1.0: address</div>
      </div>
    </div>
  \`
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,z,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    'custom-class': 'icon-font tc-icon-cloud-queue',
    decorative: false,
    name: '',
    size: 'lg'
  },
  decorators: [story => html\`
      <link
        rel="stylesheet"
        href="https://resources.connect.trimble.com/1.12.0/fonts/icon-font.min.css"
      />
      \${story()}
    \`],
  render: args => {
    return html\`
      <modus-wc-icon
        aria-label="Cloud Queue icon"
        custom-class="\${ifDefined(args['custom-class'])}"
        ?decorative="\${args.decorative}"
        .name="\${args.name}"
        size="\${args.size}"
      >
      </modus-wc-icon>
    \`;
  }
}`,...(C=(z=r.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var S,N,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for icon component
    if (!customElements.get('icon-shadow-host')) {
      const IconShadowHost = createShadowHostClass<IconArgs>({
        componentTag: 'modus-wc-icon',
        propsMapper: (v: IconArgs, el: HTMLElement) => {
          const iconEl = el as unknown as {
            customClass: string;
            decorative: boolean;
            name: string;
            size: string;
            variant: string;
          };
          iconEl.customClass = v['custom-class'] || '';
          iconEl.decorative = Boolean(v.decorative);
          iconEl.name = v.name;
          iconEl.size = v.size;
          iconEl.variant = v.variant ?? 'outlined';
        }
      });
      customElements.define('icon-shadow-host', IconShadowHost);
    }
    return html\`<icon-shadow-host .props=\${{
      ...args
    }}></icon-shadow-host>\`;
  }
}`,...(k=(N=c.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var $,E,I;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - Requires <b>Modus Icons</b> to be installed in the host application see [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs).
  - The \\\`color\\\` property has been removed in favor of using CSS for styling.
  - The \\\`iconClick\\\` event has been removed. Use the \\\`click\\\` event on the host element instead.
  - In 1.0 the \\\`size\\\` prop accepted any numeric string (e.g., \\\`'16'\\\`, \\\`'24'\\\`, \\\`'32'\\\`) to set the icon's
  width and height. 2.0 uses preset sizes: \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`, and can use CSS for custom sizes.

#### Icon names

  - Legacy 1.0 names that have an approved mapping now paint the matching 2.0 glyph (for example \\\`name="add"\\\` renders \\\`plus\\\`).
  - Native 2.0 kebab slugs work as-is (\\\`name="ship"\\\`, \\\`name="api"\\\`).
  - Unmapped 1.0 names keep the previous 1.0 ligature fallback until they are added to the alias table.

#### Prop Mapping

| 1.0 Prop | 2.0 Prop | Notes                                                |
|----------|----------|------------------------------------------------------|
| color    |          | Not carried over, use CSS instead                    |
| name     | name     | 1.0 names resolve to 2.0 glyphs when aliased         |
| size     | size     | Numeric values changed to \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`, use CSS for custom sizes |

#### Event Mapping

| 1.0 Event | 2.0 Event | Notes                                                         |
|-----------|-----------|---------------------------------------------------------------|
| iconClick |           | Not carried over, use \\\`click\\\` event on host element instead |
        \`
      }
    },
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  render: () => html\`<div></div>\`
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const A=["Default","CustomColor","NameResolution","CustomIcons","ShadowDomParent","Migration"];export{t as CustomColor,r as CustomIcons,a as Default,d as Migration,i as NameResolution,c as ShadowDomParent,A as __namedExportsOrder,q as default};
