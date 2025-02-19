import{w as l}from"./decorator-Dt3Huotz.js";import{k as t}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const b={title:"Components/Chip",component:"modus-wc-chip",args:{"aria-label":"Example chip",label:"Chip","show-remove":!0,size:"md",variant:"filled"},argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg"]},variant:{control:{type:"inline-radio"},options:["filled","outline"]}},decorators:[l],parameters:{actions:{handles:["chipClick","chipRemove"]}}},d={render:e=>t` <modus-wc-chip
      aria-label=${e["aria-label"]}
      active=${o(e.active)}
      disabled=${o(e.disabled)}
      has-error=${o(e["has-error"])}
      label=${e.label}
      show-remove=${o(e["show-remove"])}
      size=${e.size}
      variant=${e.variant}
    />`},a={...d},i={render:()=>t`
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
    `};var c,s,r;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(r=(s=a.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var n,m,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const v=["Default","Composable"];export{i as Composable,a as Default,v as __namedExportsOrder,b as default};
