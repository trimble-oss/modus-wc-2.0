import{w as $}from"./decorator-Dt3Huotz.js";import{k as h}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const m=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Cherry",value:"cherry"},{label:"Grape",value:"grape"},{label:"Lemon",value:"lemon"},{label:"Orange",value:"orange"},{label:"Peach",value:"peach"},{label:"Pear",value:"pear"},{label:"Strawberry",value:"strawberry"}],x={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{"aria-label":"Fruit selection autocomplete","debounce-ms":300,disabled:!1,items:m,"min-chars":0,placeholder:"Search for fruits...",size:"md",value:""},argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[$],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus","itemSelect"]}}},f={render:e=>{const d=t=>{var u;if(!((u=t.detail)!=null&&u.target))return;const l=t.detail.target,i=l.value.toLowerCase(),b=m.filter(v=>v.label.toLowerCase().includes(i)),o=t.target.closest("modus-wc-autocomplete");o&&(o.items=b,o.value=l.value,i||(o.activeItemValue=l.value))},p=t=>{const l=t.target.closest("modus-wc-autocomplete");l&&(l.activeItemValue=t.detail.value,l.value=t.detail.label)};return h`
      <modus-wc-autocomplete
        active-item-value=${a(e["active-item-value"])}
        aria-describedby=${a(e["aria-describedby"])}
        aria-label=${e["aria-label"]}
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        debounce-ms=${a(e["debounce-ms"])}
        ?disabled=${e.disabled}
        input-dir=${a(e["input-dir"])}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        .items=${e.items}
        min-chars=${e["min-chars"]}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        size=${a(e.size)}
        value=${e.value}
        @inputChange=${d}
        @itemSelect=${p}
      ></modus-wc-autocomplete>
    `}},r={...f};var c,n,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const z=["Default"];export{r as Default,z as __namedExportsOrder,x as default};
