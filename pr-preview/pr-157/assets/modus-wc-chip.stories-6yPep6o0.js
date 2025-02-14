import{w as t}from"./decorator-Dt3Huotz.js";import{k as p}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const x={title:"Components/Chip",component:"modus-wc-chip",args:{"aria-label":"Example chip",label:"Chip","image-url":"https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg","show-close":!0,size:"md",variant:"filled"},argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg"]},variant:{control:{type:"inline-radio"},options:["filled","outline"]}},decorators:[t],parameters:{actions:{handles:["chipClick","closeClick"]}}},d={render:e=>p` <modus-wc-chip
      aria-label=${e["aria-label"]}
      active=${o(e.active)}
      disabled=${o(e.disabled)}
      has-error=${o(e["has-error"])}
      image-url=${o(e["image-url"])}
      label=${e.label}
      show-check=${o(e["show-check"])}
      show-close=${o(e["show-close"])}
      size=${e.size}
      variant=${e.variant}
    />`},c={...d},i={render:()=>p`
<modus-wc-chip aria-label="Example chip">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip aria-label="Example chip" show-close="true">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip aria-label="Example chip">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
</modus-wc-chip>
    `};var a,s,n;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(n=(s=c.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var r,m,l;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return html\`
<modus-wc-chip aria-label="Example chip">
  <modus-wc-icon name="heart" size="xs" ></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip aria-label="Example chip" show-close="true">
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
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const C=["Default","Composable"];export{i as Composable,c as Default,C as __namedExportsOrder,x as default};
