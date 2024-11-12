import{w as i}from"./decorator-Dt3Huotz.js";import{k as d}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const p={title:"Components/Atoms/Textarea",component:"modus-wc-textarea",args:{"aria-label":"Enter your comments",bordered:!0,"custom-class":"",disabled:!1,"full-width":!0,name:"",placeholder:"Type your comments here",readonly:!1,required:!1,size:"md",value:""},argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg"]},"textarea-aria-invalid":{control:{type:"inline-radio"},options:["grammar","spelling","true","false"]},"textarea-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]}},decorators:[i],parameters:{actions:{handles:["textareaBlur","textareaChange","textareaFocus"]}}},n={render:e=>d`
      <modus-wc-textarea
        aria-describedby=${a(e["aria-describedby"])}
        aria-label=${e["aria-label"]}
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        ?full-width=${e["full-width"]}
        max-length=${a(e["max-length"])}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?readonly=${e.readonly}
        ?required=${e.required}
        rows=${a(e.rows)}
        size=${a(e.size)}
        textarea-aria-invalid=${a(e["textarea-aria-invalid"])}
        textarea-dir=${a(e["textarea-dir"])}
        textarea-id=${a(e["textarea-id"])}
        ?textarea-spellcheck=${a(e["textarea-spellcheck"])}
        textarea-tab-index=${a(e["textarea-tab-index"])}
        .value=${e.value}
      ></modus-wc-textarea>
    `},t={...n};var r,o,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,p as default};
