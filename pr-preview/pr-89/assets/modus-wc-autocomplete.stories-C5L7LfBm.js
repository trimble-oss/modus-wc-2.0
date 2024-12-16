import{w as y}from"./decorator-Dt3Huotz.js";import{k as $}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const m=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Cherry",value:"cherry"},{label:"Grape",value:"grape"},{label:"Lemon",value:"lemon"},{label:"Orange",value:"orange"},{label:"Peach",value:"peach"},{label:"Pear",value:"pear"},{label:"Strawberry",value:"strawberry"}],x={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{"a11y-label":"Fruit selection autocomplete","debounce-ms":300,disabled:!1,items:m,"min-chars":0,placeholder:"Search for fruits...",size:"md",value:""},argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[y],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus","itemSelect"]}}},h={render:e=>{const d=a=>{var u;if(!((u=a.detail)!=null&&u.target))return;const l=a.detail.target,i=l.value.toLowerCase(),b=m.filter(v=>v.label.toLowerCase().includes(i)),o=a.target.closest("modus-wc-autocomplete");o&&(o.items=b,o.value=l.value,i||(o.activeItemValue=l.value))},p=a=>{const l=a.target.closest("modus-wc-autocomplete");l&&(l.activeItemValue=a.detail.value,l.value=a.detail.label)};return $`
      <modus-wc-autocomplete
        active-item-value=${t(e["active-item-value"])}
        a11y-describedby=${t(e["a11y-describedby"])}
        a11y-label=${e["a11y-label"]}
        a11y-labelledby=${e["a11y-labelledby"]}
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
        @inputChange=${d}
        @itemSelect=${p}
      ></modus-wc-autocomplete>
    `}},r={...h};var c,n,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const z=["Default"];export{r as Default,z as __namedExportsOrder,x as default};
