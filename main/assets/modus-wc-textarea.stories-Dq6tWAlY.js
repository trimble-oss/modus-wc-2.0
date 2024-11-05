import{k as d}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";const u={title:"Components/Atoms/Textarea",component:"modus-wc-textarea",argTypes:{"textarea-aria-invalid":{control:{type:"inline-radio"},options:["grammar","spelling","true","false"]},"textarea-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]}}},c={render:e=>d`
      <modus-wc-textarea
        aria-describedby=${a(e["aria-describedby"])}
        aria-label=${a(e["aria-label"])}
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        max-length=${a(e["max-length"])}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?readonly=${e.readonly}
        ?required=${e.required}
        ?rows=${e.rows}
        ?textarea-aria-invalid=${e["textarea-aria-invalid"]}
        textarea-dir=${e["textarea-dir"]}
        ?textarea-id=${e["textarea-id"]}
        ?textarea-spellcheck=${e["textarea-spellcheck"]}
        ?textarea-tab-index=${e["textarea-tab-index"]}
        .value=${e.value}
        @textarea-blur=${t=>{const r=t.target;e.value=r.value}}
        @textarea-change=${t=>{const r=t.target;e.value=r.value}}
        @textarea-focus=${t=>{const r=t.target;e.value=r.value}}
      ></modus-wc-textarea>
    `,args:{"aria-label":"Enter your comments",placeholder:"Type your comments here"}},o={...c};var l,i,n;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const x=["Default"];export{o as Default,x as __namedExportsOrder,u as default};
