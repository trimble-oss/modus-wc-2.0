import{w as l}from"./decorator-Dt3Huotz.js";import{k as i}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const d=[{id:"name",header:"Name",accessor:"name",width:"200px"},{id:"email",header:"Email",accessor:"email"},{id:"status",header:"Status",accessor:"status",cellRenderer:e=>{const r=e.toLowerCase()==="active",t=document.createElement("modus-wc-badge");t.color=r?"success":"danger";const o=document.createElement("div");return o.textContent=e,t.appendChild(o),t}}],u=[{name:"John Smith",email:"john.smith@example.com",status:"Active"},{name:"Jane Doe",email:"jane.doe@example.com",status:"Inactive"},{name:"Bob Johnson",email:"bob.johnson@example.com",status:"Active"}],x={title:"Components/Table",component:"modus-wc-table",args:{"aria-label":"Example table",columns:d,data:u,density:"comfortable",zebra:!1},argTypes:{density:{control:{type:"inline-radio"},options:["comfortable","compact"]}},decorators:[l],parameters:{actions:{handles:["rowClick"]}}},p={render:e=>i`
      <modus-wc-table
        aria-label=${e["aria-label"]}
        .columns=${e.columns}
        custom-class=${s(e["custom-class"])}
        .data=${e.data}
        density=${s(e.density)}
        ?zebra=${e.zebra}
      />
    `},a={...p};var n,c,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const v=["Default"];export{a as Default,v as __namedExportsOrder,x as default};
