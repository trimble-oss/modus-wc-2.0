import{w as l}from"./decorator-Dt3Huotz.js";import{k as d}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const i=[{id:"name",header:"Name",accessor:"name",width:"200px"},{id:"email",header:"Email",accessor:"email"},{id:"status",header:"Status",accessor:"status",cellRenderer:e=>{const r=e.toLowerCase()==="active",a=document.createElement("modus-wc-badge");a.color=r?"success":"danger";const o=document.createElement("div");return o.textContent=e,a.appendChild(o),a}}],u=[{name:"John Smith",email:"john.smith@example.com",status:"Active"},{name:"Jane Doe",email:"jane.doe@example.com",status:"Inactive"},{name:"Bob Johnson",email:"bob.johnson@example.com",status:"Active"}],x={title:"Components/Table",component:"modus-wc-table",args:{columns:i,data:u,density:"comfortable",zebra:!1},argTypes:{density:{control:{type:"select"},options:["comfortable","compact"]}},decorators:[l],parameters:{actions:{handles:["rowClick"]}}},p={render:e=>d`
      <modus-wc-table
        aria-label="User data"
        .columns=${e.columns}
        custom-class=${s(e["custom-class"])}
        .data=${e.data}
        density=${s(e.density)}
        ?zebra=${e.zebra}
      />
    `},t={...p};var c,n,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,x as default};
