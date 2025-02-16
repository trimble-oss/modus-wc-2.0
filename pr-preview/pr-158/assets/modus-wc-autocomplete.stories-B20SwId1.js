import{w as E}from"./decorator-Dt3Huotz.js";import{k as y}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";var v=Object.freeze,x=Object.defineProperty,L=(e,c)=>v(x(e,"raw",{value:v(e.slice())})),h,b;const s=[{label:"Apple",value:"apple",visibleInMenu:!0},{label:"Banana",value:"banana",visibleInMenu:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0},{label:"Cherry",value:"cherry",visibleInMenu:!0},{label:"Grape",value:"grape",visibleInMenu:!0},{label:"Lemon",value:"lemon",visibleInMenu:!0},{label:"Orange",value:"orange",visibleInMenu:!0},{label:"Peach",value:"peach",visibleInMenu:!0},{label:"Pear",value:"pear",visibleInMenu:!0},{label:"Strawberry",value:"strawberry",visibleInMenu:!0}],z={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{"aria-label":"Fruit selection autocomplete",bordered:!0,"debounce-ms":300,disabled:!1,items:s,"min-chars":0,"multi-select":!1,placeholder:"Search for fruits...",size:"md",value:""},argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[E],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},$={render:e=>{const c=o=>{var a;if(!((a=o.detail)!=null&&a.target))return;const n=o.target.closest("modus-wc-autocomplete");if(n){const i=o.detail.target,l=i.value.toLowerCase(),p=s.map(u=>({...u,selected:l?u.selected:!1,visibleInMenu:u.label.toLowerCase().includes(l)}));n.items=[...p],n.value=i.value}},d=o=>{const n=o.target.closest("modus-wc-autocomplete");if(n){const a=o.detail.label;a&&(n.value=a),s.forEach(l=>l.selected=!1);const i=s.find(l=>l.value===o.detail.value);i&&(i.selected=!0,n.items=[...s])}};return y(h||(h=L([`
<script>
  const handleInputChange = (e) => {
    if (!e.detail?.target) return;

    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    );

    if (autocomplete) {
      const input = e.detail.target as HTMLInputElement;
      const searchText = input.value.toLowerCase();

      // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
      const updatedItems = items.map((item) => ({
        ...item,
        selected: searchText ? item.selected : false,
        visibleInMenu: item.label.toLowerCase().includes(searchText),
      }));

      // Ensuring that a new array is created when updating items is critical to component re-render.
      autocomplete.items = [...updatedItems];
      autocomplete.value = input.value;
    }
  };

  const handleItemSelect = (e) => {
    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    );

    if (autocomplete) {
      // Clear the previous selection.
      items.forEach((item) => (item.selected = false));

      // Mark the user selected menu item as selected and create a new array to update items.
      const foundItem = items.find((item) => item.value === e.detail.value);
      if (foundItem) {
        foundItem.selected = true;
        autocomplete.items = [...items];
      }
    }
  };
<\/script>
<modus-wc-autocomplete
  aria-describedby=`,`
  aria-label=`,`
  ?bordered=`,`
  custom-class=`,`
  debounce-ms=`,`
  ?disabled=`,`
  input-dir=`,`
  input-id=`,`
  input-tab-index=`,`
  .items=`,`
  min-chars=`,`
  ?multi-select=`,`
  name=`,`
  placeholder=`,`
  ?read-only=`,`
  ?required=`,`
  size=`,`
  value=`,`
  @inputChange=`,`
  @itemSelect=`,`
></modus-wc-autocomplete>
    `])),t(e["aria-describedby"]),e["aria-label"],e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-dir"]),t(e["input-id"]),t(e["input-tab-index"]),e.items,e["min-chars"],!1,t(e.name),t(e.placeholder),e["read-only"],e.required,t(e.size),e.value,c,d)}},r={...$},m={render:e=>{const c=n=>{const a=n.target.closest("modus-wc-autocomplete");if(a){const i=s.find(l=>l.value===n.detail.value);i&&(i.selected=!1,a.items=[...s])}},d=n=>{var i;if(!((i=n.detail)!=null&&i.target))return;const a=n.target.closest("modus-wc-autocomplete");if(a){const l=n.detail.target,p=l.value.toLowerCase(),u=s.map(f=>({...f,visibleInMenu:f.label.toLowerCase().includes(p)}));a.items=[...u],a.value=l.value}},o=n=>{const a=n.target.closest("modus-wc-autocomplete");if(a){a.value="",a.items=s.map(l=>({...l,visibleInMenu:!0}));const i=s.find(l=>l.value===n.detail.value);i&&(i.selected=!0)}};return y(b||(b=L([`
<script>
  const handleChipRemove = (e) => {
    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    );

    if (autocomplete) {
      // Update the 'selected' value of the removed item.
      const foundItem = items.find((item) => item.value === e.detail.value);
      if (foundItem) {
        foundItem.selected = false;
        autocomplete.items = [...items];
      }
    }
  };
  
  const handleInputChange = (e) => {
    if (!e.detail?.target) return;

    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    );
    
    if (autocomplete) {
      const input = e.detail.target as HTMLInputElement;
      const searchText = input.value.toLowerCase();

      // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
      const updatedItems = items.map((item) => ({
        ...item,
        selected: searchText ? item.selected : false,
        visibleInMenu: item.label.toLowerCase().includes(searchText),
      }));
      
      // Ensuring that a new array is created when updating items is critical to component re-render.
      autocomplete.items = [...updatedItems];
      autocomplete.value = input.value;
    }
  };
  
  const handleItemSelect = (e) => {
    const autocomplete = (e.target
    as
    HTMLInputElement
  ).
    closest(
      'modus-wc-autocomplete'
    );

    if (autocomplete) {
      // Reset autocomplete 'value' and update the value of 'visibleInMenu' for all items.
      autocomplete.value = '';
      autocomplete.items = items.map((item) => ({
        ...item,
        visibleInMenu: true,
      }));

      // Mark the user selected item as selected.
      const fruit = items.find((fruit) => fruit.value === e.detail.value);
      if (fruit) {
        fruit.selected = true;
      }
    }
  };
<\/script>
<modus-wc-autocomplete
  aria-describedby=`,`
  aria-label=`,`
  ?bordered=`,`
  custom-class=`,`
  debounce-ms=`,`
  ?disabled=`,`
  input-dir=`,`
  input-id=`,`
  input-tab-index=`,`
  .items=`,`
  min-chars=`,`
  ?multi-select=`,`
  name=`,`
  placeholder=`,`
  ?read-only=`,`
  ?required=`,`
  size=`,`
  value=`,`
  @chipRemove=`,`
  @inputChange=`,`
  @itemSelect=`,`
></modus-wc-autocomplete>
    `])),t(e["aria-describedby"]),e["aria-label"],e.bordered,t(e["custom-class"]),t(e["debounce-ms"]),e.disabled,t(e["input-dir"]),t(e["input-id"]),t(e["input-tab-index"]),e.items,e["min-chars"],!0,t(e.name),t(e.placeholder),e["read-only"],e.required,t(e.size),e.value,c,d,o)}};var I,w,M;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template
}`,...(M=(w=r.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var g,C,T;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const handleChipRemove = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        // Update the 'selected' value of the removed item.
        const foundItem = items.find(item => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = false;
          autocomplete.items = [...items];
        }
      }
    };
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();

        // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
        const updatedItems = items.map(item => ({
          ...item,
          visibleInMenu: item.label.toLowerCase().includes(searchText)
        }));

        // Ensuring that a new array is created when updating items is critical to component re-render.
        autocomplete.items = [...updatedItems];
        autocomplete.value = input.value;
      }
    };
    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        // Reset autocomplete 'value' and update the value of 'visibleInMenu' for all items.
        autocomplete.value = '';
        autocomplete.items = items.map(item => ({
          ...item,
          visibleInMenu: true
        }));

        // Mark the user selected item as selected.
        const fruit = items.find(fruit => fruit.value === e.detail.value);
        if (fruit) {
          fruit.selected = true;
        }
      }
    };

    // prettier-ignore
    return html\`
<script>
  const handleChipRemove = (e) => {
    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    );

    if (autocomplete) {
      // Update the 'selected' value of the removed item.
      const foundItem = items.find((item) => item.value === e.detail.value);
      if (foundItem) {
        foundItem.selected = false;
        autocomplete.items = [...items];
      }
    }
  };
  
  const handleInputChange = (e) => {
    if (!e.detail?.target) return;

    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    );
    
    if (autocomplete) {
      const input = e.detail.target as HTMLInputElement;
      const searchText = input.value.toLowerCase();

      // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
      const updatedItems = items.map((item) => ({
        ...item,
        selected: searchText ? item.selected : false,
        visibleInMenu: item.label.toLowerCase().includes(searchText),
      }));
      
      // Ensuring that a new array is created when updating items is critical to component re-render.
      autocomplete.items = [...updatedItems];
      autocomplete.value = input.value;
    }
  };
  
  const handleItemSelect = (e) => {
    const autocomplete = (e.target
    as
    HTMLInputElement
  ).
    closest(
      'modus-wc-autocomplete'
    );

    if (autocomplete) {
      // Reset autocomplete 'value' and update the value of 'visibleInMenu' for all items.
      autocomplete.value = '';
      autocomplete.items = items.map((item) => ({
        ...item,
        visibleInMenu: true,
      }));

      // Mark the user selected item as selected.
      const fruit = items.find((fruit) => fruit.value === e.detail.value);
      if (fruit) {
        fruit.selected = true;
      }
    }
  };
<\/script>
<modus-wc-autocomplete
  aria-describedby=\${ifDefined(args['aria-describedby'])}
  aria-label=\${args['aria-label']}
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  debounce-ms=\${ifDefined(args['debounce-ms'])}
  ?disabled=\${args.disabled}
  input-dir=\${ifDefined(args['input-dir'])}
  input-id=\${ifDefined(args['input-id'])}
  input-tab-index=\${ifDefined(args['input-tab-index'])}
  .items=\${args.items}
  min-chars=\${args['min-chars']}
  ?multi-select=\${true}
  name=\${ifDefined(args.name)}
  placeholder=\${ifDefined(args.placeholder)}
  ?read-only=\${args['read-only']}
  ?required=\${args.required}
  size=\${ifDefined(args.size)}
  value=\${args.value}
  @chipRemove=\${handleChipRemove}
  @inputChange=\${handleInputChange}
  @itemSelect=\${handleItemSelect}
></modus-wc-autocomplete>
    \`;
  }
}`,...(T=(C=m.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const _=["Default","MultiSelect"];export{r as Default,m as MultiSelect,_ as __namedExportsOrder,z as default};
