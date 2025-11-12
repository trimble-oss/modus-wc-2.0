import{w as M}from"./decorator-D4YmxizW.js";import{x as r}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import{c as P}from"./shadow-host-helper-BjHVoqnO.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const _={title:"Components/Chip",component:"modus-wc-chip",args:{label:"Chip","show-remove":!0,shape:"rectangle",size:"md",variant:"filled"},argTypes:{shape:{control:{type:"select"},options:["rectangle","circle"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["filled","outline"]}},decorators:[M],parameters:{actions:{handles:["chipClick","chipRemove"]}}},R={render:e=>r` <modus-wc-chip
      aria-label="Chip example"
      active=${a(e.active)}
      disabled=${a(e.disabled)}
      has-error=${a(e["has-error"])}
      label=${e.label}
      shape=${e.shape}
      show-remove=${a(e["show-remove"])}
      size=${e.size}
      variant=${e.variant}
    />`},n={...R},o={render:e=>r`
<modus-wc-chip
  aria-label="Chip example"
  active=${a(e.active)}
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  label=${e.label}
  shape=${e.shape}
  show-remove=${a(e["show-remove"])}
  size=${e.size}
  variant=${e.variant}
>
  <modus-wc-avatar
    img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg"
    alt="sonic the hedgehog"
  ></modus-wc-avatar>
</modus-wc-chip>
    `},c={render:e=>r`
<modus-wc-chip
  aria-label="Chip example"
  active=${a(e.active)}
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  label=${e.label}
  shape=${e.shape}
  show-remove=${a(e["show-remove"])}
  size=${e.size}
  variant=${e.variant}
>
  <modus-wc-icon name="check" size="xs"></modus-wc-icon>
</modus-wc-chip>
    `},t={render:e=>r`
<modus-wc-chip
  aria-label="Chip example"
  active=${a(e.active)}
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  shape=${e.shape}
  size=${e.size}
  variant=${e.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip
  aria-label="Chip example"
  active=${a(e.active)}
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  shape=${e.shape}
  show-remove="true"
  size=${e.size}
  variant=${e.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip
  aria-label="Chip example"
  active=${a(e.active)}
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  shape=${e.shape}
  size=${e.size}
  variant=${e.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
</modus-wc-chip>
    `},l={render:e=>{if(!customElements.get("chip-shadow-host")){const y=P({componentTag:"modus-wc-chip",propsMapper:(i,B)=>{const s=B;s.ariaLabel="Click me chip",s.active=!!i.active,s.shape=i.shape||"rectangle",s.size=i.size,s.variant=i.variant,s.customClass=i["custom-class"]||"",s.disabled=!!i.disabled,s.hasError=!!i["has-error"],s.label=i.label,s.showRemove=!!i["show-remove"]}});customElements.define("chip-shadow-host",y)}return r`<chip-shadow-host .props=${{...e}}></chip-shadow-host>`}},d={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - `chip-style` prop has been renamed to `variant` and values changed from `solid` to `filled`.\n  - `closeClick` event has been renamed to `chipRemove`.\n  - `show-close` prop has been renamed to `show-remove`.\n  - Size values have changed from verbose names (`medium`, `small`) to abbreviations (`md`, `sm`).\n\n#### Prop Mapping\n\n| 1.0 Prop       | 2.0 Prop    | Notes                                             |\n|----------------|-------------|---------------------------------------------------|\n| active         | active      |                                                   |\n| advanced-chip  |             | Not carried over                                  |\n| aria-label     | aria-label  |                                                   |\n| chip-id        |             | Not carried over                                  |\n| chip-style     | variant     | `solid` → `filled`, `outline` → `outline` |\n| disabled       | disabled    |                                                   |\n| has-error      | has-error   |                                                   |\n| image-url      |             | Not carried over, use slot instead                |\n| max-width      |             | Not carried over, use CSS instead                 |\n| show-checkmark |             | Not carried over, use slot instead                |\n| show-close     | show-remove |                                                   |\n| size           | size        | `medium` → `md`, `small` → `sm`           |\n| value          | label       |                                                   |\n|                | shape       | New in 2.0: `rectangle` (default), `circle` |\n\n#### Event Mapping\n\n| 1.0 Event   | 2.0 Event   | Notes |\n|-------------|-------------|-------|\n| chipClick  | chipClick  |       |\n| closeClick | chipRemove |       |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var h,p,m;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,u,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-chip
  aria-label="Chip example"
  active=\${ifDefined(args.active)}
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  label=\${args.label}
  shape=\${args.shape}
  show-remove=\${ifDefined(args['show-remove'])}
  size=\${args.size}
  variant=\${args.variant}
>
  <modus-wc-avatar
    img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg"
    alt="sonic the hedgehog"
  ></modus-wc-avatar>
</modus-wc-chip>
    \`;
  }
}`,...(w=(u=o.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var b,$,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-chip
  aria-label="Chip example"
  active=\${ifDefined(args.active)}
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  label=\${args.label}
  shape=\${args.shape}
  show-remove=\${ifDefined(args['show-remove'])}
  size=\${args.size}
  variant=\${args.variant}
>
  <modus-wc-icon name="check" size="xs"></modus-wc-icon>
</modus-wc-chip>
    \`;
  }
}`,...(f=($=c.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};var g,C,z;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-chip
  aria-label="Chip example"
  active=\${ifDefined(args.active)}
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  shape=\${args.shape}
  size=\${args.size}
  variant=\${args.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip
  aria-label="Chip example"
  active=\${ifDefined(args.active)}
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  shape=\${args.shape}
  show-remove="true"
  size=\${args.size}
  variant=\${args.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip
  aria-label="Chip example"
  active=\${ifDefined(args.active)}
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  shape=\${args.shape}
  size=\${args.size}
  variant=\${args.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
</modus-wc-chip>
    \`;
  }
}`,...(z=(C=t.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var x,E,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for chip component
    if (!customElements.get('chip-shadow-host')) {
      const ChipShadowHost = createShadowHostClass<ChipArgs>({
        componentTag: 'modus-wc-chip',
        propsMapper: (v: ChipArgs, el: HTMLElement) => {
          const chipEl = el as unknown as {
            ariaLabel: string;
            active: boolean;
            customClass: string;
            disabled: boolean;
            hasError: boolean;
            label: string;
            shape: string;
            showRemove: boolean;
            size: string;
            variant: string;
          };
          chipEl.ariaLabel = 'Click me chip';
          chipEl.active = Boolean(v.active);
          chipEl.shape = v.shape || 'rectangle';
          chipEl.size = v.size;
          chipEl.variant = v.variant;
          chipEl.customClass = v['custom-class'] || '';
          chipEl.disabled = Boolean(v.disabled);
          chipEl.hasError = Boolean(v['has-error']);
          chipEl.label = v.label;
          chipEl.showRemove = Boolean(v['show-remove']);
        }
      });
      customElements.define('chip-shadow-host', ChipShadowHost);
    }
    return html\`<chip-shadow-host .props=\${{
      ...args
    }}></chip-shadow-host>\`;
  }
}`,...(k=(E=l.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var D,S,N;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - \\`chip-style\\` prop has been renamed to \\`variant\\` and values changed from \\`solid\\` to \\`filled\\`.\n  - \\`closeClick\\` event has been renamed to \\`chipRemove\\`.\n  - \\`show-close\\` prop has been renamed to \\`show-remove\\`.\n  - Size values have changed from verbose names (\\`medium\\`, \\`small\\`) to abbreviations (\\`md\\`, \\`sm\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop       | 2.0 Prop    | Notes                                             |\n|----------------|-------------|---------------------------------------------------|\n| active         | active      |                                                   |\n| advanced-chip  |             | Not carried over                                  |\n| aria-label     | aria-label  |                                                   |\n| chip-id        |             | Not carried over                                  |\n| chip-style     | variant     | \\`solid\\` → \\`filled\\`, \\`outline\\` → \\`outline\\` |\n| disabled       | disabled    |                                                   |\n| has-error      | has-error   |                                                   |\n| image-url      |             | Not carried over, use slot instead                |\n| max-width      |             | Not carried over, use CSS instead                 |\n| show-checkmark |             | Not carried over, use slot instead                |\n| show-close     | show-remove |                                                   |\n| size           | size        | \\`medium\\` → \\`md\\`, \\`small\\` → \\`sm\\`           |\n| value          | label       |                                                   |\n|                | shape       | New in 2.0: \\`rectangle\\` (default), \\`circle\\` |\n\n#### Event Mapping\n\n| 1.0 Event   | 2.0 Event   | Notes |\n|-------------|-------------|-------|\n| chipClick  | chipClick  |       |\n| closeClick | chipRemove |       |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(N=(S=d.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const q=["Default","AvatarChip","CheckIconChip","Composable","ShadowDomParent","Migration"];export{o as AvatarChip,c as CheckIconChip,t as Composable,n as Default,d as Migration,l as ShadowDomParent,q as __namedExportsOrder,_ as default};
