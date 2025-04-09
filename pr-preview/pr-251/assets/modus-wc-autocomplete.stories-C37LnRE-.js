import{w as U}from"./decorator-Dt3Huotz.js";import{k as v}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";var C=Object.freeze,B=Object.defineProperty,w=(e,m)=>C(B(e,"raw",{value:C(e.slice())})),M,T,x,E;const c=[{label:"Apple",value:"apple",visibleInMenu:!0},{label:"Banana",value:"banana",visibleInMenu:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0},{label:"Cherry",value:"cherry",visibleInMenu:!0},{label:"Grape",value:"grape",visibleInMenu:!0},{label:"Lemon",value:"lemon",visibleInMenu:!0},{label:"Orange",value:"orange",visibleInMenu:!0},{label:"Peach",value:"peach",visibleInMenu:!0},{label:"Pear",value:"pear",visibleInMenu:!0},{label:"Strawberry",value:"strawberry",visibleInMenu:!0}],X={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,items:c,label:"Label","leave-menu-open":!1,"min-chars":0,"multi-select":!1,"show-spinner":!1,"no-results":{ariaLabel:"No results found",label:"No results found",subLabel:"Check spelling or try a different keyword"},size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[U],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},W={render:e=>{const m=i=>{var l;if(!((l=i.detail)!=null&&l.target))return;const s=i.target.closest("modus-wc-autocomplete");if(s){const t=i.detail.target,a=t.value.toLowerCase(),r=c.map(o=>({...o,selected:a?o.selected:!1,visibleInMenu:o.label.toLowerCase().includes(a)}));s.items=[...r],s.value=t.value}},p=i=>{const s=i.target.closest("modus-wc-autocomplete");if(s){const l=i.detail.label;l&&(s.value=l),c.forEach(a=>a.selected=!1);const t=c.find(a=>a.value===i.detail.value);t&&(t.selected=!0,s.items=[...c])}};return v(M||(M=w([`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--default"] {
    height: 400px;
  }
</style>
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
  aria-label="Fruit autocomplete"
  ?bordered=`,`
  custom-class=`,`
  debounce-ms=`,`
  ?disabled=`,`
  input-id=`,`
  input-tab-index=`,`
  .items=`,`
  label=`,`
  ?leave-menu-open=`,`
  min-chars=`,`
  ?multi-select=`,`
  .noResults=`,`
  name=`,`
  placeholder=`,`
  ?read-only=`,`
  ?required=`,`
  ?show-spinner=`,`
  size=`,`
  value=`,`
  @inputChange=`,`
  @itemSelect=`,`
></modus-wc-autocomplete>
    `])),e.bordered,n(e["custom-class"]),n(e["debounce-ms"]),e.disabled,n(e["input-id"]),n(e["input-tab-index"]),e.items,n(e.label),e["leave-menu-open"],e["min-chars"],!1,e["no-results"],n(e.name),n(e.placeholder),e["read-only"],e.required,e["show-spinner"],n(e.size),e.value,m,p)}},f={...W},h={render:e=>{const m=s=>{const l=s.target.closest("modus-wc-autocomplete");if(l){const t=c.find(a=>a.value===s.detail.value);t&&(t.selected=!1,l.items=[...c])}},p=s=>{var t;if(!((t=s.detail)!=null&&t.target))return;const l=s.target.closest("modus-wc-autocomplete");if(l){const a=s.detail.target,r=a.value.toLowerCase(),o=c.map(u=>({...u,visibleInMenu:u.label.toLowerCase().includes(r)}));l.items=[...o],l.value=a.value}},i=s=>{const l=s.target.closest("modus-wc-autocomplete");if(l){l.value="",l.items=c.map(a=>({...a,visibleInMenu:!0}));const t=c.find(a=>a.value===s.detail.value);t&&(t.selected=!0)}};return v(T||(T=w([`
<style>
  /* Only for Storybook */
  div#story--components-forms-autocomplete--multi-select-inner {
    height: 400px;
  }
</style>
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
  aria-label="Fruit autocomplete"
  ?bordered=`,`
  custom-class=`,`
  debounce-ms=`,`
  ?disabled=`,`
  input-id=`,`
  input-tab-index=`,`
  .items=`,`
  label=`,`
  ?leave-menu-open=`,`
  min-chars=`,`
  ?multi-select=`,`
  name=`,`
  .noResults=`,`
  placeholder=`,`
  ?read-only=`,`
  ?required=`,`
  ?show-spinner=`,`
  size=`,`
  value=`,`
  @chipRemove=`,`
  @inputChange=`,`
  @itemSelect=`,`
></modus-wc-autocomplete>
    `])),e.bordered,n(e["custom-class"]),n(e["debounce-ms"]),e.disabled,n(e["input-id"]),n(e["input-tab-index"]),e.items,n(e.label),e["leave-menu-open"],e["min-chars"],!0,n(e.name),e["no-results"],n(e.placeholder),e["read-only"],e.required,e["show-spinner"],n(e.size),e.value,m,p,i)}},b={render:e=>{const m=i=>{var l;if(!((l=i.detail)!=null&&l.target))return;const s=i.target.closest("modus-wc-autocomplete");if(s){const t=i.detail.target,a=t.value.toLowerCase();setTimeout(()=>{s.showSpinner=!1},2e3),s.showSpinner=!0;const r=c.map(o=>({...o,selected:a?o.selected:!1,visibleInMenu:o.label.toLowerCase().includes(a)}));s.items=[...r],s.value=t.value}},p=i=>{const s=i.target.closest("modus-wc-autocomplete");if(s){const l=i.detail.label;l&&(s.value=l),c.forEach(a=>a.selected=!1);const t=c.find(a=>a.value===i.detail.value);t&&(t.selected=!0,s.items=[...c])}};return v(x||(x=w([`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--default"] {
    height: 400px;
  }
</style>
<script>
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();
        // show the spinner for 2 seconds
        setTimeout(() => {
          autocomplete.showSpinner = false;
        }, 2000);

        autocomplete.showSpinner = true;
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

    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const label = e.detail.label;
        if (label) {
          autocomplete.value = label;
        }

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
  aria-label="Fruit autocomplete"
  ?bordered=`,`
  custom-class=`,`
  debounce-ms=`,`
  ?disabled=`,`
  input-id=`,`
  input-tab-index=`,`
  .items=`,`
  label=`,`
  ?leave-menu-open=`,`
  min-chars=`,`
  ?multi-select=`,`
  name=`,`
  placeholder=`,`
  ?read-only=`,`
  ?required=`,`
  ?show-spinner=`,`
  size=`,`
  value=`,`
  @inputChange=`,`
  @itemSelect=`,`
></modus-wc-autocomplete>
    `])),e.bordered,n(e["custom-class"]),n(e["debounce-ms"]),e.disabled,n(e["input-id"]),n(e["input-tab-index"]),e.items,n(e.label),e["leave-menu-open"],e["min-chars"],!1,n(e.name),n(e.placeholder),e["read-only"],e.required,e["show-spinner"],n(e.size),e.value,m,p)}},g={render:e=>{const m=e["no-results"];e["leave-menu-open"]==!0&&(e["no-results"]={ariaLabel:"",label:"",subLabel:""});const p=l=>{var a;if(!((a=l.detail)!=null&&a.target))return;const t=l.target.closest("modus-wc-autocomplete");if(t){const r=l.detail.target.value,o=t==null?void 0:t.querySelectorAll("li");r===""&&(o==null||o.forEach(d=>d.classList.remove("selected")));let u=0;Array.from(o??[]).forEach(d=>{var L,y;(((y=(L=d.querySelector(".title"))==null?void 0:L.textContent)==null?void 0:y.toLowerCase())||"").includes(r.toLowerCase())?(d.classList.remove("hidden"),t.noResults={ariaLabel:"",label:"",subLabel:""}):(d.classList.add("hidden"),u++,u===(o==null?void 0:o.length)&&(t.noResults=m))})}},i=l=>{const t=l.target.closest("modus-wc-autocomplete");t&&(t.noResults={ariaLabel:"",label:"",subLabel:""})},s=l=>{var a;const t=l.target.closest("modus-wc-autocomplete");if(t){const r=(a=l.detail.target)==null?void 0:a.value;t.value=r;const o=t==null?void 0:t.querySelectorAll("li");o==null||o.forEach(u=>u.classList.remove("selected")),o==null||o.forEach(u=>{var d;u.contains(l.target)&&(u.classList.add("selected"),t.value=(d=u.querySelector(".title"))==null?void 0:d.textContent)})}};return v(E||(E=w([`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--custom-menu-items"] {
    height: 400px;
  }
  .list-item {
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid #ccc;
  }
  li.list-item.hidden {
    display: none;
  }
  li.list-item img {
    height: 28px;
    width: 28px;
  }
  .item-info .title {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  .item-info .description {
    color: #666;
    font-size: 0.875rem;
  }
  li.list-item.selected {
    background-color: #dcedf9;
  }
  li.list-item .modus-wc-menu-item-selected-icon {
    display: none;
  }
  li.list-item.selected .modus-wc-menu-item-selected-icon {
    display: block;
  }
</style>
<script>
    const temp = args['no-results'];
    if (args['leave-menu-open'] == true) {
      args['no-results'] = {
        ariaLabel: '',
        label: '',
        subLabel: '',
      };
    }
    const handleInputChange = (e) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement).value;

        // Create a new array, updating the selected values.
        const allLiItems = autocomplete?.querySelectorAll('li');
        if (searchText === '') {
          allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
        }
        let itemCount = 0;
        Array.from(allLiItems ?? []).forEach((menuItem) => {
          const label =
            menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
          if (!label.includes(searchText.toLowerCase())) {
            menuItem.classList.add('hidden');
            itemCount++;
            if (itemCount === allLiItems?.length) {
              autocomplete.noResults = temp;
            }
          } else {
            menuItem.classList.remove('hidden');
            autocomplete.noResults = {
              ariaLabel: '',
              label: '',
              subLabel: '',
            };
          }
        });
      }
    };
    const handleFocus = (e) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        autocomplete.noResults = {
          ariaLabel: '',
          label: '',
          subLabel: '',
        };
      }
    };

    const handleItemSelect = (e) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement)?.value;

        autocomplete.value = searchText;

        const allLiItems = autocomplete?.querySelectorAll('li');
        allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
        allLiItems?.forEach((liItem) => {
          if (liItem.contains(e.target as HTMLElement)) {
            liItem.classList.add('selected');
            autocomplete.value = liItem.querySelector('.title')
              ?.textContent as string;
          }
        });
      }
    };
<\/script>
<modus-wc-autocomplete
  aria-label="Custom items autocomplete"
  ?bordered=`,`
  custom-class=`,`
  debounce-ms=`,`
  ?disabled=`,`
  input-id=`,`
  input-tab-index=`,`
  label=`,`
  ?leave-menu-open=`,`
  min-chars=`,`
  ?multi-select=`,`
  name=`,`
  .noResults=`,`
  placeholder=`,`
  ?read-only=`,`
  ?required=`,`
  size=`,`
  value=`,`
  @inputFocus=`,`
  @inputChange=`,`
>
  <div slot="menu-items" id="custom-menu-items">
    <li class="list-item" @click=`,`>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5166/5166970.png"
          alt="Project 1"
        />
        <div>
          <div class="title">Project 1</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=`,`
            name="check"
            size=`,`
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=`,`>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png"
          alt="Project 2"
        />
        <div>
          <div class="title">Project 2</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=`,`
            name="check"
            size=`,`
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=`,`>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1659/1659067.png"
          alt="Project 3"
        />
        <div>
          <div class="title">Project 3</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=`,`
            name="check"
            size=`,`
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=`,`>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1420/1420462.png"
          alt="Project 4"
        />
        <div>
          <div class="title">Project 4</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=`,`
            name="check"
            size=`,`
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=`,`>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/12959/12959935.png"
          alt="Project 5"
        />
        <div>
          <div class="title">Project 5</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=`,`
            name="check"
            size=`,`
          />
        </div>
      </div>
    </li>
  </div>
</modus-wc-autocomplete>
`])),e.bordered,n(e["custom-class"]),n(e["debounce-ms"]),e.disabled,n(e["input-id"]),n(e["input-tab-index"]),n(e.label),e["leave-menu-open"],e["min-chars"],!1,n(e.name),e["no-results"],n(e.placeholder),e["read-only"],e.required,n(e.size),e.value,i,p,s,!0,n(e.size),s,!0,n(e.size),s,!0,n(e.size),s,!0,n(e.size),s,!0,n(e.size))}},I={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - To handle updating items in 2.0, simply create a new array of items and bind it to the \`items\` prop. The 1.0 prop
  \`filter-options\` is no longer necessary.
  - Size values have changed from verbose names (\`small\`, \`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop                      | 2.0 Prop            | Notes                                                       |
|-------------------------------|---------------------|-------------------------------------------------------------|
| aria-label                    | aria-label          |                                                             |
| clearable                     |                     | Upcoming feature                                            |
| disabled                      | disabled            |                                                             |
| disable-close-on-select       | leave-menu-open     |                                                             |
| dropdown-max-height           |                     | Not carried over, use CSS instead                           |
| dropdown-z-index              |                     | Not carried over, use CSS instead                           |
| error-text                    | feedback.message    | Use feedback level                                          |
| filter-options                |                     | Rebind options                                              |
| include-search-icon           |                     | Coming soon                                                 |
| label                         | label               |                                                             |
| loading                       |                     | Upcoming feature                                            |
| multiple                      | multi-select        |                                                             |
| no-results-found-text         | no-results.label    |                                                             |
| no-results-found-subtext      | no-results.subLabel |                                                             |
| options                       | items               |                                                             |
| placeholder                   | placeholder         |                                                             |
| read-only                     | read-only           |                                                             |
| required                      | required            |                                                             |
| show-no-results-found-message |                     | Not carried over, use \`no-results\` prop                   |
| show-options-on-focus         |                     | Not carried over                                            |
| size                          | size                | \`small\` → \`sm\`, \`medium\` → \`md\`, \`large\` → \`lg\` |
| value                         | value               |                                                             |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| optionSelected ||
| selectionsChanged ||
| valueChange | inputChange |                  |

#### Interfaces

##### 1.0

\`\`\`typescript
interface ModusAutocompleteOption {
  id: string;
  value: string;
}
\`\`\`

##### 2.0

\`\`\`typescript
interface IAutocompleteItem {
  label: string;
  selected?: boolean;
  value: string;
  visibleInMenu: boolean;
}
\`\`\`
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>v`<div></div>`};var S,$,z;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template
}`,...(z=($=f.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var k,H,D;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
<style>
  /* Only for Storybook */
  div#story--components-forms-autocomplete--multi-select-inner {
    height: 400px;
  }
</style>
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
  aria-label="Fruit autocomplete"
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  debounce-ms=\${ifDefined(args['debounce-ms'])}
  ?disabled=\${args.disabled}
  input-id=\${ifDefined(args['input-id'])}
  input-tab-index=\${ifDefined(args['input-tab-index'])}
  .items=\${args.items}
  label=\${ifDefined(args.label)}
  ?leave-menu-open=\${args['leave-menu-open']}
  min-chars=\${args['min-chars']}
  ?multi-select=\${true}
  name=\${ifDefined(args.name)}
  .noResults=\${args['no-results']}
  placeholder=\${ifDefined(args.placeholder)}
  ?read-only=\${args['read-only']}
  ?required=\${args.required}
  ?show-spinner=\${args['show-spinner']}
  size=\${ifDefined(args.size)}
  value=\${args.value}
  @chipRemove=\${handleChipRemove}
  @inputChange=\${handleInputChange}
  @itemSelect=\${handleItemSelect}
></modus-wc-autocomplete>
    \`;
  }
}`,...(D=(H=h.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var q,P,R;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();
        // show the spinner for 2 seconds
        setTimeout(() => {
          autocomplete.showSpinner = false;
        }, 2000);
        autocomplete.showSpinner = true;
        // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
        const updatedItems = items.map(item => ({
          ...item,
          selected: searchText ? item.selected : false,
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
        const label = e.detail.label;
        if (label) {
          autocomplete.value = label;
        }

        // Clear the previous selection.
        items.forEach(item => item.selected = false);

        // Mark the user selected menu item as selected and create a new array to update items.
        const foundItem = items.find(item => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = true;
          autocomplete.items = [...items];
        }
      }
    };

    // prettier-ignore
    return html\`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--default"] {
    height: 400px;
  }
</style>
<script>
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();
        // show the spinner for 2 seconds
        setTimeout(() => {
          autocomplete.showSpinner = false;
        }, 2000);

        autocomplete.showSpinner = true;
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

    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const label = e.detail.label;
        if (label) {
          autocomplete.value = label;
        }

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
  aria-label="Fruit autocomplete"
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  debounce-ms=\${ifDefined(args['debounce-ms'])}
  ?disabled=\${args.disabled}
  input-id=\${ifDefined(args['input-id'])}
  input-tab-index=\${ifDefined(args['input-tab-index'])}
  .items=\${args.items}
  label=\${ifDefined(args.label)}
  ?leave-menu-open=\${args['leave-menu-open']}
  min-chars=\${args['min-chars']}
  ?multi-select=\${false}
  name=\${ifDefined(args.name)}
  placeholder=\${ifDefined(args.placeholder)}
  ?read-only=\${args['read-only']}
  ?required=\${args.required}
  ?show-spinner=\${args['show-spinner']}
  size=\${ifDefined(args.size)}
  value=\${args.value}
  @inputChange=\${handleInputChange}
  @itemSelect=\${handleItemSelect}
></modus-wc-autocomplete>
    \`;
  }
}`,...(R=(P=b.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var A,j,F;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const temp = args['no-results'];
    if (args['leave-menu-open'] == true) {
      args['no-results'] = {
        ariaLabel: '',
        label: '',
        subLabel: ''
      };
    }
    const handleInputChange = e => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement).value;

        // Create a new array, updating the selected values.
        const allLiItems = autocomplete?.querySelectorAll('li');
        if (searchText === '') {
          allLiItems?.forEach(liItem => liItem.classList.remove('selected'));
        }
        let itemCount = 0;
        Array.from(allLiItems ?? []).forEach(menuItem => {
          const label = menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
          if (!label.includes(searchText.toLowerCase())) {
            menuItem.classList.add('hidden');
            itemCount++;
            if (itemCount === allLiItems?.length) {
              autocomplete.noResults = temp;
            }
          } else {
            menuItem.classList.remove('hidden');
            autocomplete.noResults = {
              ariaLabel: '',
              label: '',
              subLabel: ''
            };
          }
        });
      }
    };
    const handleFocus = e => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        autocomplete.noResults = {
          ariaLabel: '',
          label: '',
          subLabel: ''
        };
      }
    };
    const handleItemSelect = e => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement)?.value;
        autocomplete.value = searchText;
        const allLiItems = autocomplete?.querySelectorAll('li');
        allLiItems?.forEach(liItem => liItem.classList.remove('selected'));
        allLiItems?.forEach(liItem => {
          if (liItem.contains(e.target as HTMLElement)) {
            liItem.classList.add('selected');
            autocomplete.value = liItem.querySelector('.title')?.textContent as string;
          }
        });
      }
    };

    // prettier-ignore
    return html\`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--custom-menu-items"] {
    height: 400px;
  }
  .list-item {
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid #ccc;
  }
  li.list-item.hidden {
    display: none;
  }
  li.list-item img {
    height: 28px;
    width: 28px;
  }
  .item-info .title {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  .item-info .description {
    color: #666;
    font-size: 0.875rem;
  }
  li.list-item.selected {
    background-color: #dcedf9;
  }
  li.list-item .modus-wc-menu-item-selected-icon {
    display: none;
  }
  li.list-item.selected .modus-wc-menu-item-selected-icon {
    display: block;
  }
</style>
<script>
    const temp = args['no-results'];
    if (args['leave-menu-open'] == true) {
      args['no-results'] = {
        ariaLabel: '',
        label: '',
        subLabel: '',
      };
    }
    const handleInputChange = (e) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement).value;

        // Create a new array, updating the selected values.
        const allLiItems = autocomplete?.querySelectorAll('li');
        if (searchText === '') {
          allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
        }
        let itemCount = 0;
        Array.from(allLiItems ?? []).forEach((menuItem) => {
          const label =
            menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
          if (!label.includes(searchText.toLowerCase())) {
            menuItem.classList.add('hidden');
            itemCount++;
            if (itemCount === allLiItems?.length) {
              autocomplete.noResults = temp;
            }
          } else {
            menuItem.classList.remove('hidden');
            autocomplete.noResults = {
              ariaLabel: '',
              label: '',
              subLabel: '',
            };
          }
        });
      }
    };
    const handleFocus = (e) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        autocomplete.noResults = {
          ariaLabel: '',
          label: '',
          subLabel: '',
        };
      }
    };

    const handleItemSelect = (e) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement)?.value;

        autocomplete.value = searchText;

        const allLiItems = autocomplete?.querySelectorAll('li');
        allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
        allLiItems?.forEach((liItem) => {
          if (liItem.contains(e.target as HTMLElement)) {
            liItem.classList.add('selected');
            autocomplete.value = liItem.querySelector('.title')
              ?.textContent as string;
          }
        });
      }
    };
<\/script>
<modus-wc-autocomplete
  aria-label="Custom items autocomplete"
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  debounce-ms=\${ifDefined(args['debounce-ms'])}
  ?disabled=\${args.disabled}
  input-id=\${ifDefined(args['input-id'])}
  input-tab-index=\${ifDefined(args['input-tab-index'])}
  label=\${ifDefined(args.label)}
  ?leave-menu-open=\${args['leave-menu-open']}
  min-chars=\${args['min-chars']}
  ?multi-select=\${false}
  name=\${ifDefined(args.name)}
  .noResults=\${args['no-results']}
  placeholder=\${ifDefined(args.placeholder)}
  ?read-only=\${args['read-only']}
  ?required=\${args.required}
  size=\${ifDefined(args.size)}
  value=\${args.value}
  @inputFocus=\${handleFocus}
  @inputChange=\${handleInputChange}
>
  <div slot="menu-items" id="custom-menu-items">
    <li class="list-item" @click=\${handleItemSelect}>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5166/5166970.png"
          alt="Project 1"
        />
        <div>
          <div class="title">Project 1</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=\${true}
            name="check"
            size=\${ifDefined(args.size)}
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=\${handleItemSelect}>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png"
          alt="Project 2"
        />
        <div>
          <div class="title">Project 2</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=\${true}
            name="check"
            size=\${ifDefined(args.size)}
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=\${handleItemSelect}>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1659/1659067.png"
          alt="Project 3"
        />
        <div>
          <div class="title">Project 3</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=\${true}
            name="check"
            size=\${ifDefined(args.size)}
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=\${handleItemSelect}>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1420/1420462.png"
          alt="Project 4"
        />
        <div>
          <div class="title">Project 4</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=\${true}
            name="check"
            size=\${ifDefined(args.size)}
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=\${handleItemSelect}>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/12959/12959935.png"
          alt="Project 5"
        />
        <div>
          <div class="title">Project 5</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=\${true}
            name="check"
            size=\${ifDefined(args.size)}
          />
        </div>
      </div>
    </li>
  </div>
</modus-wc-autocomplete>
\`;
  }
}`,...(F=(j=g.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var N,O,_;I.parameters={...I.parameters,docs:{...(N=I.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - To handle updating items in 2.0, simply create a new array of items and bind it to the \\\`items\\\` prop. The 1.0 prop
  \\\`filter-options\\\` is no longer necessary.
  - Size values have changed from verbose names (\\\`small\\\`, \\\`medium\\\`, \\\`large\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

#### Prop Mapping

| 1.0 Prop                      | 2.0 Prop            | Notes                                                       |
|-------------------------------|---------------------|-------------------------------------------------------------|
| aria-label                    | aria-label          |                                                             |
| clearable                     |                     | Upcoming feature                                            |
| disabled                      | disabled            |                                                             |
| disable-close-on-select       | leave-menu-open     |                                                             |
| dropdown-max-height           |                     | Not carried over, use CSS instead                           |
| dropdown-z-index              |                     | Not carried over, use CSS instead                           |
| error-text                    | feedback.message    | Use feedback level                                          |
| filter-options                |                     | Rebind options                                              |
| include-search-icon           |                     | Coming soon                                                 |
| label                         | label               |                                                             |
| loading                       |                     | Upcoming feature                                            |
| multiple                      | multi-select        |                                                             |
| no-results-found-text         | no-results.label    |                                                             |
| no-results-found-subtext      | no-results.subLabel |                                                             |
| options                       | items               |                                                             |
| placeholder                   | placeholder         |                                                             |
| read-only                     | read-only           |                                                             |
| required                      | required            |                                                             |
| show-no-results-found-message |                     | Not carried over, use \\\`no-results\\\` prop                   |
| show-options-on-focus         |                     | Not carried over                                            |
| size                          | size                | \\\`small\\\` → \\\`sm\\\`, \\\`medium\\\` → \\\`md\\\`, \\\`large\\\` → \\\`lg\\\` |
| value                         | value               |                                                             |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| optionSelected ||
| selectionsChanged ||
| valueChange | inputChange |                  |

#### Interfaces

##### 1.0

\\\`\\\`\\\`typescript
interface ModusAutocompleteOption {
  id: string;
  value: string;
}
\\\`\\\`\\\`

##### 2.0

\\\`\\\`\\\`typescript
interface IAutocompleteItem {
  label: string;
  selected?: boolean;
  value: string;
  visibleInMenu: boolean;
}
\\\`\\\`\\\`
        \`
      }
    },
    // To hide the actual story rendering and only show docs:
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  // Simple render function or leave it empty
  render: () => html\`<div></div>\`
}`,...(_=(O=I.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const Y=["Default","MultiSelect","WithSpinner","CustomMenuItems","Migration"];export{g as CustomMenuItems,f as Default,I as Migration,h as MultiSelect,b as WithSpinner,Y as __namedExportsOrder,X as default};
