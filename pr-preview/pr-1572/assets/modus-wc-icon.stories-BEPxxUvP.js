import{b as n}from"./lit-element-DgBvYnzn.js";import{o as l}from"./if-defined-BnVFTJ4o.js";import{c as U}from"./shadow-host-helper-A4Nvcs5e.js";const R={title:"Components/Icon",component:"modus-wc-icon",args:{"custom-class":"",decorative:!1,name:"alert",size:"md",version:"1.0"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["outlined","solid"]},version:{control:{type:"select"},options:["1.0","2.0"]}}},T={render:e=>n`
      <modus-wc-icon
        aria-label="Alert icon"
        custom-class="${l(e["custom-class"])}"
        ?decorative="${e.decorative}"
        .name="${e.name}"
        size="${e.size}"
        variant="${l(e.variant)}"
        version="${l(e.version)}"
      >
      </modus-wc-icon>
    `},i={...T},a={render:e=>n`
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
    `},t={render:()=>n`
    <div style="display: grid; gap: 1.5rem;">
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Mapped add icon version 1.0"
            name="add"
            size="lg"
            version="1.0"
          ></modus-wc-icon>
          <div>Mapped 1.0: add @ 1.0</div>
        </div>
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Mapped add icon version 2.0"
            name="add"
            size="lg"
            version="2.0"
          ></modus-wc-icon>
          <div>Mapped 1.0: add @ 2.0 (plus)</div>
        </div>
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Unmapped address icon version 1.0"
            name="address"
            size="lg"
            version="1.0"
          ></modus-wc-icon>
          <div>Unmapped: address @ 1.0</div>
        </div>
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Unmapped address icon version 2.0"
            name="address"
            size="lg"
            version="2.0"
          ></modus-wc-icon>
          <div>Unmapped: address @ 2.0 (same glyph)</div>
        </div>
      </div>
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Native ship icon version 1.0"
            name="ship"
            size="lg"
            version="1.0"
          ></modus-wc-icon>
          <div>2.0-only: ship @ 1.0 (same glyph)</div>
        </div>
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Native ship icon version 2.0"
            name="ship"
            size="lg"
            version="2.0"
          ></modus-wc-icon>
          <div>2.0-only: ship @ 2.0</div>
        </div>
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
    `},c={render:e=>{if(!customElements.get("icon-shadow-host")){const N=U({componentTag:"modus-wc-icon",propsMapper:(s,k)=>{const o=k;o.customClass=s["custom-class"]||"",o.decorative=!!s.decorative,o.name=s.name,o.size=s.size,o.variant=s.variant??"outlined",o.version=s.version??"1.0"}});customElements.define("icon-shadow-host",N)}return n`<icon-shadow-host .props=${{...e}}></icon-shadow-host>`}},d={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - Requires <b>Modus Icons</b> to be installed in the host application see [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs).\n  - The `color` property has been removed in favor of using CSS for styling.\n  - The `iconClick` event has been removed. Use the `click` event on the host element instead.\n  - In 1.0 the `size` prop accepted any numeric string (e.g., `'16'`, `'24'`, `'32'`) to set the icon's\n  width and height. 2.0 uses preset sizes: `sm`, `md`, `lg`, and can use CSS for custom sizes.\n\n#### Icon names\n\n  - The `version` property selects the Modus Icons set. Default is `1.0`.\n  - Legacy 1.0 names render the 1.0 ligature when `version=\"1.0\"` and the mapped 2.0 glyph when `version=\"2.0\"`.\n  - Unmapped 1.0 names keep the 1.0 ligature in both versions.\n  - Native 2.0-only slugs keep the 2.0 glyph in both versions.\n\n#### Prop Mapping\n\n| 1.0 Prop | 2.0 Prop | Notes                                                |\n|----------|----------|------------------------------------------------------|\n| color    |          | Not carried over, use CSS instead                    |\n| name     | name     | 1.0 names and 2.0 slugs are both accepted            |\n| size     | size     | Numeric values changed to `sm`, `md`, `lg`, use CSS for custom sizes |\n|          | version  | `'1.0'` (default) or `'2.0'`                     |\n\n#### Event Mapping\n\n| 1.0 Event | 2.0 Event | Notes                                                         |\n|-----------|-----------|---------------------------------------------------------------|\n| iconClick |           | Not carried over, use `click` event on host element instead |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>n`<div></div>`};var m,p,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,h,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,w,z;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; gap: 1.5rem;">
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Mapped add icon version 1.0"
            name="add"
            size="lg"
            version="1.0"
          ></modus-wc-icon>
          <div>Mapped 1.0: add @ 1.0</div>
        </div>
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Mapped add icon version 2.0"
            name="add"
            size="lg"
            version="2.0"
          ></modus-wc-icon>
          <div>Mapped 1.0: add @ 2.0 (plus)</div>
        </div>
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Unmapped address icon version 1.0"
            name="address"
            size="lg"
            version="1.0"
          ></modus-wc-icon>
          <div>Unmapped: address @ 1.0</div>
        </div>
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Unmapped address icon version 2.0"
            name="address"
            size="lg"
            version="2.0"
          ></modus-wc-icon>
          <div>Unmapped: address @ 2.0 (same glyph)</div>
        </div>
      </div>
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Native ship icon version 1.0"
            name="ship"
            size="lg"
            version="1.0"
          ></modus-wc-icon>
          <div>2.0-only: ship @ 1.0 (same glyph)</div>
        </div>
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Native ship icon version 2.0"
            name="ship"
            size="lg"
            version="2.0"
          ></modus-wc-icon>
          <div>2.0-only: ship @ 2.0</div>
        </div>
      </div>
    </div>
  \`
}`,...(z=(w=t.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var f,b,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var S,M,$;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
            version: string;
          };
          iconEl.customClass = v['custom-class'] || '';
          iconEl.decorative = Boolean(v.decorative);
          iconEl.name = v.name;
          iconEl.size = v.size;
          iconEl.variant = v.variant ?? 'outlined';
          iconEl.version = v.version ?? '1.0';
        }
      });
      customElements.define('icon-shadow-host', IconShadowHost);
    }
    return html\`<icon-shadow-host .props=\${{
      ...args
    }}></icon-shadow-host>\`;
  }
}`,...($=(M=c.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var E,x,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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

  - The \\\`version\\\` property selects the Modus Icons set. Default is \\\`1.0\\\`.
  - Legacy 1.0 names render the 1.0 ligature when \\\`version="1.0"\\\` and the mapped 2.0 glyph when \\\`version="2.0"\\\`.
  - Unmapped 1.0 names keep the 1.0 ligature in both versions.
  - Native 2.0-only slugs keep the 2.0 glyph in both versions.

#### Prop Mapping

| 1.0 Prop | 2.0 Prop | Notes                                                |
|----------|----------|------------------------------------------------------|
| color    |          | Not carried over, use CSS instead                    |
| name     | name     | 1.0 names and 2.0 slugs are both accepted            |
| size     | size     | Numeric values changed to \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`, use CSS for custom sizes |
|          | version  | \\\`'1.0'\\\` (default) or \\\`'2.0'\\\`                     |

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
}`,...(I=(x=d.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const q=["Default","CustomColor","NameResolution","CustomIcons","ShadowDomParent","Migration"];export{a as CustomColor,r as CustomIcons,i as Default,d as Migration,t as NameResolution,c as ShadowDomParent,q as __namedExportsOrder,R as default};
