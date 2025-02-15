import{w as $}from"./decorator-Dt3Huotz.js";import{k as y}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,r=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Cherry",value:"cherry",selected:!0},{label:"Grape",value:"grape"},{label:"Lemon",value:"lemon"},{label:"Orange",value:"orange"},{label:"Peach",value:"peach",selected:!0},{label:"Pear",value:"pear"},{label:"Strawberry",value:"strawberry"}],x={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{"aria-label":"Fruit selection autocomplete",bordered:!0,"debounce-ms":300,disabled:!1,items:r,"min-chars":0,placeholder:"Search for fruits...",size:"md",value:""},argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[$],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},_={render:e=>{const[,c]=w(),b=a=>{const l=r.find(o=>o.value===a.detail.value);l&&(l.selected=!1,c({items:[...r]}))},h=a=>{var n;if(!((n=a.detail)!=null&&n.target))return;const l=a.detail.target,o=l.value.toLowerCase(),s=r.filter(f=>f.label.toLowerCase().includes(o)),u=a.target.closest("modus-wc-autocomplete");u&&(u.items=s,u.value=l.value)},v=a=>{if(a.target.closest("modus-wc-autocomplete")){const o=r.find(s=>s.value===a.detail.value);o&&(o.selected=!0,c({items:[...r]}))}};return y`
      <modus-wc-autocomplete
        aria-describedby=${t(e["aria-describedby"])}
        aria-label=${e["aria-label"]}
        ?bordered=${e.bordered}
        custom-class=${t(e["custom-class"])}
        debounce-ms=${t(e["debounce-ms"])}
        ?disabled=${e.disabled}
        input-dir=${t(e["input-dir"])}
        input-id=${t(e["input-id"])}
        input-tab-index=${t(e["input-tab-index"])}
        .items=${e.items}
        min-chars=${e["min-chars"]}
        name=${t(e.name)}
        placeholder=${t(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        size=${t(e.size)}
        value=${e.value}
        @chipRemove=${b}
        @inputChange=${h}
        @itemSelect=${v}
      ></modus-wc-autocomplete>
    `}},i={..._};var d,m,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const R=["Default"];export{i as Default,R as __namedExportsOrder,x as default};
