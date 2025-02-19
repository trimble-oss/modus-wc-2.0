import{w as C}from"./decorator-Dt3Huotz.js";import{k as s}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const k={title:"Components/Chip",component:"modus-wc-chip",args:{"aria-label":"Example chip",label:"Chip","show-remove":!0,size:"md",variant:"filled"},argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg"]},variant:{control:{type:"inline-radio"},options:["filled","outline"]}},decorators:[C],parameters:{actions:{handles:["chipClick","chipRemove"]}}},f={render:e=>s` <modus-wc-chip
      aria-label=${e["aria-label"]}
      active=${o(e.active)}
      disabled=${o(e.disabled)}
      has-error=${o(e["has-error"])}
      label=${e.label}
      show-remove=${o(e["show-remove"])}
      size=${e.size}
      variant=${e.variant}
    />`},a={...f},c={render:()=>s`
<modus-wc-chip aria-label="Example chip" label="Chip" show-remove="true">
  <modus-wc-avatar
    img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg"
    alt="sonic the hedgehog"
  ></modus-wc-avatar>
</modus-wc-chip>
    `},r={render:()=>s`
<modus-wc-chip aria-label="Example chip" label="Chip" show-remove="true">
  <modus-wc-icon name="check" size="xs"></modus-wc-icon>
</modus-wc-chip>
    `},i={render:()=>s`
<modus-wc-chip aria-label="Example chip">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip aria-label="Example chip" show-remove="true">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip aria-label="Example chip">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
</modus-wc-chip>
    `};var n,m,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var t,h,d;c.parameters={...c.parameters,docs:{...(t=c.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return html\`
<modus-wc-chip aria-label="Example chip" label="Chip" show-remove="true">
  <modus-wc-avatar
    img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg"
    alt="sonic the hedgehog"
  ></modus-wc-avatar>
</modus-wc-chip>
    \`;
  }
}`,...(d=(h=c.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var l,u,w;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return html\`
<modus-wc-chip aria-label="Example chip" label="Chip" show-remove="true">
  <modus-wc-icon name="check" size="xs"></modus-wc-icon>
</modus-wc-chip>
    \`;
  }
}`,...(w=(u=r.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var b,x,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return html\`
<modus-wc-chip aria-label="Example chip">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip aria-label="Example chip" show-remove="true">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip aria-label="Example chip">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
</modus-wc-chip>
    \`;
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const S=["Default","AvatarChip","CheckIconChip","Composable"];export{c as AvatarChip,r as CheckIconChip,i as Composable,a as Default,S as __namedExportsOrder,k as default};
