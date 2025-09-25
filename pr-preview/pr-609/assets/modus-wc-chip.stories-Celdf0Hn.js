import{w as y}from"./decorator-D4YmxizW.js";import{x as i}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const T={title:"Components/Chip",component:"modus-wc-chip",args:{label:"Chip","show-remove":!0,shape:"rectangle",size:"md",variant:"filled"},argTypes:{shape:{control:{type:"select"},options:["rectangle","circle"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["filled","outline"]}},decorators:[y],parameters:{actions:{handles:["chipClick","chipRemove"]}}},S={render:e=>i` <modus-wc-chip
      aria-label="Chip example"
      active=${a(e.active)}
      disabled=${a(e.disabled)}
      has-error=${a(e["has-error"])}
      label=${e.label}
      shape=${e.shape}
      show-remove=${a(e["show-remove"])}
      size=${e.size}
      variant=${e.variant}
    />`},r={...S},s={render:e=>i`
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
    `},c={render:()=>i`
      <div style="display: flex; gap: 16px;">
        <modus-wc-chip
          aria-label="Rectangle chip"
          label="Rectangle"
          shape="rectangle"
          show-remove
        ></modus-wc-chip>

        <modus-wc-chip
          aria-label="Circle chip"
          label="Circle"
          shape="circle"
          show-remove
        ></modus-wc-chip>
      </div>
    `},t={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - `chip-style` prop has been renamed to `variant` and values changed from `solid` to `filled`.\n  - `closeClick` event has been renamed to `chipRemove`.\n  - `show-close` prop has been renamed to `show-remove`.\n  - Size values have changed from verbose names (`medium`, `small`) to abbreviations (`md`, `sm`).\n\n#### Prop Mapping\n\n| 1.0 Prop       | 2.0 Prop    | Notes                                             |\n|----------------|-------------|---------------------------------------------------|\n| active         | active      |                                                   |\n| advanced-chip  |             | Not carried over                                  |\n| aria-label     | aria-label  |                                                   |\n| chip-id        |             | Not carried over                                  |\n| chip-style     | variant     | `solid` → `filled`, `outline` → `outline` |\n| disabled       | disabled    |                                                   |\n| has-error      | has-error   |                                                   |\n| image-url      |             | Not carried over, use slot instead                |\n| max-width      |             | Not carried over, use CSS instead                 |\n| show-checkmark |             | Not carried over, use slot instead                |\n| show-close     | show-remove |                                                   |\n| size           | size        | `medium` → `md`, `small` → `sm`           |\n| value          | label       |                                                   |\n|                | shape       | New in 2.0: `rectangle` (default), `circle` |\n\n#### Event Mapping\n\n| 1.0 Event   | 2.0 Event   | Notes |\n|-------------|-------------|-------|\n| chipClick  | chipClick  |       |\n| closeClick | chipRemove |       |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>i`<div></div>`};var d,l,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var p,m,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var u,w,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(w=n.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var $,f,g;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var C,z,x;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
      <div style="display: flex; gap: 16px;">
        <modus-wc-chip
          aria-label="Rectangle chip"
          label="Rectangle"
          shape="rectangle"
          show-remove
        ></modus-wc-chip>

        <modus-wc-chip
          aria-label="Circle chip"
          label="Circle"
          shape="circle"
          show-remove
        ></modus-wc-chip>
      </div>
    \`;
  }
}`,...(x=(z=c.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var k,D,N;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - \\`chip-style\\` prop has been renamed to \\`variant\\` and values changed from \\`solid\\` to \\`filled\\`.\n  - \\`closeClick\\` event has been renamed to \\`chipRemove\\`.\n  - \\`show-close\\` prop has been renamed to \\`show-remove\\`.\n  - Size values have changed from verbose names (\\`medium\\`, \\`small\\`) to abbreviations (\\`md\\`, \\`sm\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop       | 2.0 Prop    | Notes                                             |\n|----------------|-------------|---------------------------------------------------|\n| active         | active      |                                                   |\n| advanced-chip  |             | Not carried over                                  |\n| aria-label     | aria-label  |                                                   |\n| chip-id        |             | Not carried over                                  |\n| chip-style     | variant     | \\`solid\\` → \\`filled\\`, \\`outline\\` → \\`outline\\` |\n| disabled       | disabled    |                                                   |\n| has-error      | has-error   |                                                   |\n| image-url      |             | Not carried over, use slot instead                |\n| max-width      |             | Not carried over, use CSS instead                 |\n| show-checkmark |             | Not carried over, use slot instead                |\n| show-close     | show-remove |                                                   |\n| size           | size        | \\`medium\\` → \\`md\\`, \\`small\\` → \\`sm\\`           |\n| value          | label       |                                                   |\n|                | shape       | New in 2.0: \\`rectangle\\` (default), \\`circle\\` |\n\n#### Event Mapping\n\n| 1.0 Event   | 2.0 Event   | Notes |\n|-------------|-------------|-------|\n| chipClick  | chipClick  |       |\n| closeClick | chipRemove |       |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(N=(D=t.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const j=["Default","AvatarChip","CheckIconChip","Composable","ShapeVariants","Migration"];export{s as AvatarChip,n as CheckIconChip,o as Composable,r as Default,t as Migration,c as ShapeVariants,j as __namedExportsOrder,T as default};
