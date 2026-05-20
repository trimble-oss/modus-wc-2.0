import{w as H}from"./decorator-D4YmxizW.js";import{b as s}from"./lit-element-DgBvYnzn.js";import{o as a}from"./if-defined-BnVFTJ4o.js";import{c as A}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const G={title:"Components/Chip",component:"modus-wc-chip",args:{label:"Chip",multiline:!1,"show-remove":!0,shape:"rectangle",size:"md",variant:"filled"},argTypes:{shape:{control:{type:"select"},options:["rectangle","circle"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["filled","outline"]}},decorators:[H],parameters:{actions:{handles:["chipClick","chipRemove"]}}},L={render:e=>s` <modus-wc-chip
      aria-label="Chip example"
      active=${a(e.active)}
      disabled=${a(e.disabled)}
      has-error=${a(e["has-error"])}
      label=${e.label}
      ?multiline=${!!e.multiline}
      shape=${e.shape}
      show-remove=${a(e["show-remove"])}
      size=${e.size}
      variant=${e.variant}
    />`},r={...L},o={render:e=>s`
<modus-wc-chip
  aria-label="Chip example"
  active=${a(e.active)}
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  label=${e.label}
  ?multiline=${!!e.multiline}
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
    `},l={render:e=>s`
<modus-wc-chip
  aria-label="Chip example"
  active=${a(e.active)}
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  label=${e.label}
  ?multiline=${!!e.multiline}
  shape=${e.shape}
  show-remove=${a(e["show-remove"])}
  size=${e.size}
  variant=${e.variant}
>
  <modus-wc-icon name="check" size="xs"></modus-wc-icon>
</modus-wc-chip>
    `},t={args:{label:"This chip has a longer label that wraps across multiple lines when constrained.",multiline:!0,"show-remove":!1},render:e=>s`
<style>
  .multiline-chip {
    max-width: 12rem;
    text-align: start;
  }
</style>

<modus-wc-chip
  aria-label="Multiline chip example"
  active=${a(e.active)}
  custom-class="multiline-chip"
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  label=${e.label}
  ?multiline=${!!e.multiline}
  shape=${e.shape}
  show-remove=${a(e["show-remove"])}
  size=${e.size}
  variant=${e.variant}
></modus-wc-chip>
    `},c={render:e=>s`
<modus-wc-chip
  aria-label="Chip example"
  active=${a(e.active)}
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  ?multiline=${!!e.multiline}
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
  ?multiline=${!!e.multiline}
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
  ?multiline=${!!e.multiline}
  shape=${e.shape}
  size=${e.size}
  variant=${e.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
</modus-wc-chip>
    `},h={render:e=>{if(!customElements.get("chip-shadow-host")){const R=A({componentTag:"modus-wc-chip",propsMapper:(n,T)=>{const i=T;i.ariaLabel="Click me chip",i.active=!!n.active,i.shape=n.shape||"rectangle",i.size=n.size,i.variant=n.variant,i.customClass=n["custom-class"]||"",i.disabled=!!n.disabled,i.hasError=!!n["has-error"],i.label=n.label,i.multiline=!!n.multiline,i.showRemove=!!n["show-remove"]}});customElements.define("chip-shadow-host",R)}return s`<chip-shadow-host .props=${{...e}}></chip-shadow-host>`}},d={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - `chip-style` prop has been renamed to `variant` and values changed from `solid` to `filled`.\n  - `closeClick` event has been renamed to `chipRemove`.\n  - `show-close` prop has been renamed to `show-remove`.\n  - Size values have changed from verbose names (`medium`, `small`) to abbreviations (`md`, `sm`).\n\n#### Prop Mapping\n\n| 1.0 Prop       | 2.0 Prop    | Notes                                             |\n|----------------|-------------|---------------------------------------------------|\n| active         | active      |                                                   |\n| advanced-chip  |             | Not carried over                                  |\n| aria-label     | aria-label  |                                                   |\n| chip-id        |             | Not carried over                                  |\n| chip-style     | variant     | `solid` → `filled`, `outline` → `outline` |\n| disabled       | disabled    |                                                   |\n| has-error      | has-error   |                                                   |\n| image-url      |             | Not carried over, use slot instead                |\n| max-width      |             | Not carried over, use CSS instead                 |\n| show-checkmark |             | Not carried over, use slot instead                |\n| show-close     | show-remove |                                                   |\n| size           | size        | `medium` → `md`, `small` → `sm`           |\n| value          | label       |                                                   |\n|                | shape       | New in 2.0: `rectangle` (default), `circle` |\n\n#### Event Mapping\n\n| 1.0 Event   | 2.0 Event   | Notes |\n|-------------|-------------|-------|\n| chipClick  | chipClick  |       |\n| closeClick | chipRemove |       |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>s`<div></div>`};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,w,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-chip
  aria-label="Chip example"
  active=\${ifDefined(args.active)}
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  label=\${args.label}
  ?multiline=\${Boolean(args.multiline)}
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
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var $,f,g;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-chip
  aria-label="Chip example"
  active=\${ifDefined(args.active)}
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  label=\${args.label}
  ?multiline=\${Boolean(args.multiline)}
  shape=\${args.shape}
  show-remove=\${ifDefined(args['show-remove'])}
  size=\${args.size}
  variant=\${args.variant}
>
  <modus-wc-icon name="check" size="xs"></modus-wc-icon>
</modus-wc-chip>
    \`;
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var C,z,x;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'This chip has a longer label that wraps across multiple lines when constrained.',
    multiline: true,
    'show-remove': false
  },
  render: args => {
    // prettier-ignore
    return html\`
<style>
  .multiline-chip {
    max-width: 12rem;
    text-align: start;
  }
</style>

<modus-wc-chip
  aria-label="Multiline chip example"
  active=\${ifDefined(args.active)}
  custom-class="multiline-chip"
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  label=\${args.label}
  ?multiline=\${Boolean(args.multiline)}
  shape=\${args.shape}
  show-remove=\${ifDefined(args['show-remove'])}
  size=\${args.size}
  variant=\${args.variant}
></modus-wc-chip>
    \`;
  }
}`,...(x=(z=t.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var E,B,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-chip
  aria-label="Chip example"
  active=\${ifDefined(args.active)}
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  ?multiline=\${Boolean(args.multiline)}
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
  ?multiline=\${Boolean(args.multiline)}
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
  ?multiline=\${Boolean(args.multiline)}
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
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var k,S,N;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
            multiline: boolean;
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
          chipEl.multiline = Boolean(v.multiline);
          chipEl.showRemove = Boolean(v['show-remove']);
        }
      });
      customElements.define('chip-shadow-host', ChipShadowHost);
    }
    return html\`<chip-shadow-host .props=\${{
      ...args
    }}></chip-shadow-host>\`;
  }
}`,...(N=(S=h.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var y,M,P;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - \\`chip-style\\` prop has been renamed to \\`variant\\` and values changed from \\`solid\\` to \\`filled\\`.\n  - \\`closeClick\\` event has been renamed to \\`chipRemove\\`.\n  - \\`show-close\\` prop has been renamed to \\`show-remove\\`.\n  - Size values have changed from verbose names (\\`medium\\`, \\`small\\`) to abbreviations (\\`md\\`, \\`sm\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop       | 2.0 Prop    | Notes                                             |\n|----------------|-------------|---------------------------------------------------|\n| active         | active      |                                                   |\n| advanced-chip  |             | Not carried over                                  |\n| aria-label     | aria-label  |                                                   |\n| chip-id        |             | Not carried over                                  |\n| chip-style     | variant     | \\`solid\\` → \\`filled\\`, \\`outline\\` → \\`outline\\` |\n| disabled       | disabled    |                                                   |\n| has-error      | has-error   |                                                   |\n| image-url      |             | Not carried over, use slot instead                |\n| max-width      |             | Not carried over, use CSS instead                 |\n| show-checkmark |             | Not carried over, use slot instead                |\n| show-close     | show-remove |                                                   |\n| size           | size        | \\`medium\\` → \\`md\\`, \\`small\\` → \\`sm\\`           |\n| value          | label       |                                                   |\n|                | shape       | New in 2.0: \\`rectangle\\` (default), \\`circle\\` |\n\n#### Event Mapping\n\n| 1.0 Event   | 2.0 Event   | Notes |\n|-------------|-------------|-------|\n| chipClick  | chipClick  |       |\n| closeClick | chipRemove |       |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const J=["Default","AvatarChip","CheckIconChip","Multiline","Composable","ShadowDomParent","Migration"];export{o as AvatarChip,l as CheckIconChip,c as Composable,r as Default,d as Migration,t as Multiline,h as ShadowDomParent,J as __namedExportsOrder,G as default};
