import{k as r}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";import{w as l}from"./decorator-Dt3Huotz.js";import"./v4-CQkTLCs1.js";const i=[{id:"name",header:"Name",accessor:"name",width:"200px"},{id:"email",header:"Email",accessor:"email"},{id:"status",header:"Status",accessor:"status",cellRenderer:e=>{const m=e.toLowerCase()==="active",t=document.createElement("modus-wc-badge");return t.color=m?"success":"danger",t.content=e,t}}],d=[{name:"John Smith",email:"john.smith@example.com",status:"Active"},{name:"Jane Doe",email:"jane.doe@example.com",status:"Inactive"},{name:"Bob Johnson",email:"bob.johnson@example.com",status:"Active"}],w={title:"Components/Table",component:"modus-wc-table",args:{"aria-label":"Example table",columns:i,data:d,density:"comfortable",zebra:!1},argTypes:{density:{control:{type:"inline-radio"},options:["comfortable","compact"]}},decorators:[l],parameters:{actions:{handles:["rowClick"]}}},u={render:e=>r`
      <modus-wc-table
        aria-label=${e["aria-label"]}
        .columns=${e.columns}
        custom-class=${o(e["custom-class"])}
        .data=${e.data}
        density=${o(e.density)}
        ?zebra=${e.zebra}
      />
    `},a={...u};var s,c,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const x=["Default"];export{a as Default,x as __namedExportsOrder,w as default};
