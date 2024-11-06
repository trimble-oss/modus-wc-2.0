import{w as i}from"./decorator-Dt3Huotz.js";import{k as n}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const x={title:"Components/Atoms/Textarea",component:"modus-wc-textarea",argTypes:{"textarea-aria-invalid":{control:{type:"inline-radio"},options:["grammar","spelling","true","false"]},"textarea-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]}},decorators:[i],parameters:{actions:{handles:["textareaBlur","textareaChange","textareaFocus"]}}},d={render:e=>n`
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
      ></modus-wc-textarea>
    `,args:{"aria-label":"Enter your comments",placeholder:"Type your comments here"}},t={...d};var r,o,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,x as default};
