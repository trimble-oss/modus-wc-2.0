import{w as f}from"./decorator-Dt3Huotz.js";import{k as n}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const k={title:"Components/Chip",component:"modus-wc-chip",args:{"aria-label":"Example chip",label:"Chip","show-remove":!0,size:"md",variant:"filled"},argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg"]},variant:{control:{type:"inline-radio"},options:["filled","outline"]}},decorators:[f],parameters:{actions:{handles:["chipClick","chipRemove"]}}},z={render:e=>n` <modus-wc-chip
      aria-label=${e["aria-label"]}
      active=${a(e.active)}
      disabled=${a(e.disabled)}
      has-error=${a(e["has-error"])}
      label=${e.label}
      show-remove=${a(e["show-remove"])}
      size=${e.size}
      variant=${e.variant}
    />`},i={...z},r={render:e=>n`
<modus-wc-chip
  aria-label=${e["aria-label"]}
  active=${a(e.active)}
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  label=${e.label}
  show-remove=${a(e["show-remove"])}
  size=${e.size}
  variant=${e.variant}
>
  <modus-wc-avatar
    img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg"
    alt="sonic the hedgehog"
  ></modus-wc-avatar>
</modus-wc-chip>
    `},s={render:e=>n`
<modus-wc-chip
  aria-label=${e["aria-label"]}
  active=${a(e.active)}
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  label=${e.label}
  show-remove=${a(e["show-remove"])}
  size=${e.size}
  variant=${e.variant}
>
  <modus-wc-icon name="check" size="xs"></modus-wc-icon>
</modus-wc-chip>
    `},o={render:e=>n`
<modus-wc-chip
  aria-label=${e["aria-label"]}
  active=${a(e.active)}
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  show-remove=${a(e["show-remove"])}
  size=${e.size}
  variant=${e.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip
  aria-label=${e["aria-label"]}
  active=${a(e.active)}
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  show-remove=${a(e["show-remove"])}
  size=${e.size}
  variant=${e.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip
  aria-label=${e["aria-label"]}
  active=${a(e.active)}
  disabled=${a(e.disabled)}
  has-error=${a(e["has-error"])}
  show-remove=${a(e["show-remove"])}
  size=${e.size}
  variant=${e.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
</modus-wc-chip>
    `};var c,d,t;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(t=(d=i.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var m,l,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-chip
  aria-label=\${args['aria-label']}
  active=\${ifDefined(args.active)}
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  label=\${args.label}
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
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var $,p,v;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-chip
  aria-label=\${args['aria-label']}
  active=\${ifDefined(args.active)}
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  label=\${args.label}
  show-remove=\${ifDefined(args['show-remove'])}
  size=\${args.size}
  variant=\${args.variant}
>
  <modus-wc-icon name="check" size="xs"></modus-wc-icon>
</modus-wc-chip>
    \`;
  }
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var w,u,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-chip
  aria-label=\${args['aria-label']}
  active=\${ifDefined(args.active)}
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  show-remove=\${ifDefined(args['show-remove'])}
  size=\${args.size}
  variant=\${args.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip
  aria-label=\${args['aria-label']}
  active=\${ifDefined(args.active)}
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  show-remove=\${ifDefined(args['show-remove'])}
  size=\${args.size}
  variant=\${args.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip
  aria-label=\${args['aria-label']}
  active=\${ifDefined(args.active)}
  disabled=\${ifDefined(args.disabled)}
  has-error=\${ifDefined(args['has-error'])}
  show-remove=\${ifDefined(args['show-remove'])}
  size=\${args.size}
  variant=\${args.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
</modus-wc-chip>
    \`;
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const S=["Default","AvatarChip","CheckIconChip","Composable"];export{r as AvatarChip,s as CheckIconChip,o as Composable,i as Default,S as __namedExportsOrder,k as default};
