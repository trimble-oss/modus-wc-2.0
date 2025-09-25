import{w as x}from"./decorator-D4YmxizW.js";import{x as i}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const M={title:"Components/Chip",component:"modus-wc-chip",args:{label:"Chip","show-remove":!0,shape:"rounded",size:"md",variant:"filled"},argTypes:{shape:{control:{type:"select"},options:["rounded","circular"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["filled","outline"]}},decorators:[x],parameters:{actions:{handles:["chipClick","chipRemove"]}}},k={render:e=>i` <modus-wc-chip
      aria-label="Chip example"
      active=${a(e.active)}
      disabled=${a(e.disabled)}
      has-error=${a(e["has-error"])}
      label=${e.label}
      shape=${e.shape}
      show-remove=${a(e["show-remove"])}
      size=${e.size}
      variant=${e.variant}
    />`},r={...k},s={render:e=>i`
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
    `},n={render:e=>i`
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
    `},o={render:e=>i`
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
    `},c={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - `chip-style` prop has been renamed to `variant` and values changed from `solid` to `filled`.\n  - `closeClick` event has been renamed to `chipRemove`.\n  - `show-close` prop has been renamed to `show-remove`.\n  - Size values have changed from verbose names (`medium`, `small`) to abbreviations (`md`, `sm`).\n\n#### Prop Mapping\n\n| 1.0 Prop       | 2.0 Prop    | Notes                                             |\n|----------------|-------------|---------------------------------------------------|\n| active         | active      |                                                   |\n| advanced-chip  |             | Not carried over                                  |\n| aria-label     | aria-label  |                                                   |\n| chip-id        |             | Not carried over                                  |\n| chip-style     | variant     | `solid` → `filled`, `outline` → `outline` |\n| disabled       | disabled    |                                                   |\n| has-error      | has-error   |                                                   |\n| image-url      |             | Not carried over, use slot instead                |\n| max-width      |             | Not carried over, use CSS instead                 |\n| show-checkmark |             | Not carried over, use slot instead                |\n| show-close     | show-remove |                                                   |\n| size           | size        | `medium` → `md`, `small` → `sm`           |\n| value          | label       |                                                   |\n|                | shape       | New in 2.0: `rounded` (default), `circular` |\n\n#### Event Mapping\n\n| 1.0 Event   | 2.0 Event   | Notes |\n|-------------|-------------|-------|\n| chipClick  | chipClick  |       |\n| closeClick | chipRemove |       |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>i`<div></div>`};var t,d,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var h,m,p;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,u,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var $,w,f;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(f=(w=o.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var C,z,g;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - \\`chip-style\\` prop has been renamed to \\`variant\\` and values changed from \\`solid\\` to \\`filled\\`.\n  - \\`closeClick\\` event has been renamed to \\`chipRemove\\`.\n  - \\`show-close\\` prop has been renamed to \\`show-remove\\`.\n  - Size values have changed from verbose names (\\`medium\\`, \\`small\\`) to abbreviations (\\`md\\`, \\`sm\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop       | 2.0 Prop    | Notes                                             |\n|----------------|-------------|---------------------------------------------------|\n| active         | active      |                                                   |\n| advanced-chip  |             | Not carried over                                  |\n| aria-label     | aria-label  |                                                   |\n| chip-id        |             | Not carried over                                  |\n| chip-style     | variant     | \\`solid\\` → \\`filled\\`, \\`outline\\` → \\`outline\\` |\n| disabled       | disabled    |                                                   |\n| has-error      | has-error   |                                                   |\n| image-url      |             | Not carried over, use slot instead                |\n| max-width      |             | Not carried over, use CSS instead                 |\n| show-checkmark |             | Not carried over, use slot instead                |\n| show-close     | show-remove |                                                   |\n| size           | size        | \\`medium\\` → \\`md\\`, \\`small\\` → \\`sm\\`           |\n| value          | label       |                                                   |\n|                | shape       | New in 2.0: \\`rounded\\` (default), \\`circular\\` |\n\n#### Event Mapping\n\n| 1.0 Event   | 2.0 Event   | Notes |\n|-------------|-------------|-------|\n| chipClick  | chipClick  |       |\n| closeClick | chipRemove |       |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(g=(z=c.parameters)==null?void 0:z.docs)==null?void 0:g.source}}};const P=["Default","AvatarChip","CheckIconChip","Composable","Migration"];export{s as AvatarChip,n as CheckIconChip,o as Composable,r as Default,c as Migration,P as __namedExportsOrder,M as default};
