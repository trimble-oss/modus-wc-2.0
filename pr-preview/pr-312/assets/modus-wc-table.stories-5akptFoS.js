import{w as l}from"./decorator-Dt3Huotz.js";import{k as i}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const d=[{id:"name",header:"Name",accessor:"name",width:"200px"},{id:"email",header:"Email",accessor:"email"},{id:"status",header:"Status",accessor:"status",cellRenderer:e=>{const m=e.toLowerCase()==="active",a=document.createElement("modus-wc-badge");a.color=m?"success":"danger";const o=document.createElement("div");return o.textContent=e,a.appendChild(o),a}}],u=[{name:"John Smith",email:"john.smith@example.com",status:"Active"},{name:"Jane Doe",email:"jane.doe@example.com",status:"Inactive"},{name:"Bob Johnson",email:"bob.johnson@example.com",status:"Active"}],w={title:"Components/Table",component:"modus-wc-table",args:{columns:d,data:u,density:"comfortable",zebra:!1},argTypes:{columns:{description:"Array of column definitions for the table",table:{type:{detail:`
            Interface: ITableColumn
            Properties:
            - accessor (string): Key to access data from row object
            - cellRenderer ((value: any, row: any) => string | HTMLElement, optional): Custom cell renderer
            - className (string, optional): Class names for the column
            - header (string | HTMLElement): Header content - can be string or HTML
            - id (string): Unique identifier for the column
            - width (string, optional): Width style (e.g., '200px', '50%')
        `}}},density:{control:{type:"select"},options:["comfortable","compact"]}},decorators:[l],parameters:{actions:{handles:["rowClick"]}}},p={render:e=>i`
      <modus-wc-table
        aria-label="User data"
        .columns=${e.columns}
        custom-class=${s(e["custom-class"])}
        .data=${e.data}
        density=${s(e.density)}
        ?zebra=${e.zebra}
      />
    `},t={...p};var n,r,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,w as default};
