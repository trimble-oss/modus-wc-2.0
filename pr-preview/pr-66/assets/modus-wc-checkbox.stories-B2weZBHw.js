import{w as r}from"./decorator-Dt3Huotz.js";import{k as s}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const u={title:"Components/Atoms/Checkbox",component:"modus-wc-checkbox",args:{"aria-label":"Checkbox","custom-class":"",disabled:!1,indeterminate:!1,name:"",required:!1,size:"md",value:!0},argTypes:{"checkbox-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[r],parameters:{actions:{handles:["checkboxBlur","checkboxChange","checkboxFocus"]}}},d={render:e=>s`
      <modus-wc-checkbox
        aria-describedby=${o(e["aria-describedby"])}
        aria-label=${e["aria-label"]}
        aria-labelledby=${o(e["aria-labelledby"])}
        checkbox-dir=${o(e["checkbox-dir"])}
        checkbox-id=${o(e["checkbox-id"])}
        checkbox-tab-index=${o(e["checkbox-tab-index"])}
        custom-class=${o(e["custom-class"])}
        ?disabled=${e.disabled}
        .indeterminate=${e.indeterminate}
        name=${o(e.name)}
        ?required=${e.required}
        size=${e.size}
        .value=${e.value}
      ></modus-wc-checkbox>
    `},a={...d};var c,t,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const p=["Default"];export{a as Default,p as __namedExportsOrder,u as default};
