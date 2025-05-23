import{_ as K,b as s}from"./chunk-4XZ63LWV-CnYBn8W6.js";import{x as c}from"./lit-element-C8zulti1.js";import"./v4-CtRu48qb.js";const{definePreview:q}=__STORYBOOK_MODULE_PREVIEW_API__,{global:S}=__STORYBOOK_MODULE_GLOBAL__;var j={};K(j,{argsEnhancers:()=>U,loaders:()=>Y});var B=(e,t)=>typeof t[e]>"u"&&!(e in t),N=e=>{let{initialArgs:t,argTypes:a,id:l,parameters:{actions:r}}=e;if(!r||r.disable||!r.argTypesRegex||!a)return{};let o=new RegExp(r.argTypesRegex);return Object.entries(a).filter(([n])=>!!o.test(n)).reduce((n,[i,w])=>(B(i,t)&&(n[i]=s(i,{implicit:!0,id:l})),n),{})},J=e=>{let{initialArgs:t,argTypes:a,parameters:{actions:l}}=e;return l!=null&&l.disable||!a?{}:Object.entries(a).filter(([r,o])=>!!o.action).reduce((r,[o,n])=>(B(o,t)&&(r[o]=s(typeof n.action=="string"?n.action:o)),r),{})},U=[J,N],C=!1,W=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!C&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in S&&typeof S.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let a=S.__STORYBOOK_TEST_ON_MOCK_CALL__;a((l,r)=>{let o=l.getMockName();o!=="spy"&&(!/^next\/.*::/.test(o)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(n=>o.startsWith(n)))&&s(o)(r)}),C=!0}},Y=[W];const Q={title:"Components/Table",component:"modus-wc-table",argTypes:{columns:{control:"object",description:"An array of column definitions."},data:{control:"object",description:"An array of data objects."},density:{control:{type:"select"},options:["condensed","comfortable","relaxed"],description:"The density of the table, used to save space or increase readability."},hover:{control:"boolean",description:"Enable hover effect on table rows.",defaultValue:!0},sortable:{control:"boolean",description:"Enable sorting functionality for sortable columns.",defaultValue:!0},paginated:{control:"boolean",description:"Enable pagination for the table.",defaultValue:!1},showPageSizeSelector:{control:"boolean",description:"Show/hide the page size selector in pagination.",defaultValue:!0},customClass:{control:"text",description:"Custom CSS class to apply to the inner div."},selectable:{control:{type:"select"},options:["none","single","multi"],description:"Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows.",defaultValue:"none"},zebra:{control:"boolean",description:"Zebra striped tables differentiate rows by styling them in an alternating fashion.",defaultValue:!1},currentPage:{control:"number",description:"The current page number in pagination (1-based index).",defaultValue:1},pageSizeOptions:{control:"object",description:"Available options for the number of rows per page.",defaultValue:[5,10,15]},selectedRowIds:{control:"object",description:"Array of selected row IDs. Used for controlled selection state.",defaultValue:[]},editable:{control:"boolean",description:"Enable cell editing. Either a boolean (all rows) or a predicate per row.",defaultValue:!1}}},d=()=>[{id:"id",header:"ID",accessor:"id",width:"60px"},{id:"name",header:"Name",accessor:"name",width:"100px"},{id:"email",header:"Email",accessor:"email"},{id:"role",header:"Role",accessor:"role"}],F=()=>d().map(t=>({...t,sortable:!0})),u=(e=5)=>{const t=[];for(let a=1;a<=e;a++)t.push({id:a.toString(),name:`User ${a}`,email:`user${a}@example.com`,role:a%2===0?"Admin":"User"});return t},m={render:e=>{const t=e.columns||d(),a=e.data||u();return c`
      <modus-wc-table
        .columns=${t}
        .data=${a}
        .density=${e.density}
        .hover=${e.hover}
        .sortable=${e.sortable}
        .paginated=${e.paginated}
        .showPageSizeSelector=${e.showPageSizeSelector}
        .customClass=${e.customClass}
        .selectable=${e.selectable}
        .zebra=${e.zebra}
        .currentPage=${e.currentPage}
        .pageSizeOptions=${e.pageSizeOptions}
        .selectedRowIds=${e.selectedRowIds}
        .editable=${e.editable}
        @rowClick=${s("rowClick")}
        @sortChange=${s("sortChange")}
        @paginationChange=${s("paginationChange")}
        @rowSelectionChange=${s("rowSelectionChange")}
        @cellEditStart=${s("cellEditStart")}
        @cellEditCommit=${s("cellEditCommit")}
      ></modus-wc-table>
    `},args:{density:"comfortable",hover:!0,sortable:!0,paginated:!1,showPageSizeSelector:!0,customClass:"",selectable:"none",zebra:!1,currentPage:1,pageSizeOptions:[5,10,15],selectedRowIds:[],editable:!1}},g={render:e=>{const t=e.columns||d(),a=e.data||u();return c`
      <modus-wc-table
        .columns=${t}
        .data=${a}
        .density=${e.density}
        .hover=${e.hover}
        .sortable=${e.sortable}
        .paginated=${e.paginated}
        .showPageSizeSelector=${e.showPageSizeSelector}
        .customClass=${e.customClass}
        .selectable=${e.selectable}
        .zebra=${e.zebra}
        .currentPage=${e.currentPage}
        .pageSizeOptions=${e.pageSizeOptions}
        .selectedRowIds=${e.selectedRowIds}
        .editable=${e.editable}
        @rowClick=${s("rowClick")}
      ></modus-wc-table>
    `},args:{density:"comfortable",hover:!0}},b={render:e=>{const t=e.columns||F(),a=e.data||u();return c`
      <modus-wc-table
        .columns=${t}
        .data=${a}
        .density=${e.density}
        .hover=${e.hover}
        .sortable=${e.sortable}
        .paginated=${e.paginated}
        .showPageSizeSelector=${e.showPageSizeSelector}
        .customClass=${e.customClass}
        .selectable=${e.selectable}
        .zebra=${e.zebra}
        .currentPage=${e.currentPage}
        .pageSizeOptions=${e.pageSizeOptions}
        .selectedRowIds=${e.selectedRowIds}
        .editable=${e.editable}
        @sortChange=${s("sortChange")}
      ></modus-wc-table>
    `},args:{density:"comfortable",sortable:!0}},p={render:e=>{const t=e.columns||d(),a=e.data||u(15);return c`
      <modus-wc-table
        .columns=${t}
        .data=${a}
        .density=${e.density}
        .hover=${e.hover}
        .sortable=${e.sortable}
        .paginated=${e.paginated}
        .showPageSizeSelector=${e.showPageSizeSelector}
        .customClass=${e.customClass}
        .selectable=${e.selectable}
        .zebra=${e.zebra}
        .currentPage=${e.currentPage}
        .pageSizeOptions=${e.pageSizeOptions}
        .selectedRowIds=${e.selectedRowIds}
        .editable=${e.editable}
        @paginationChange=${s("paginationChange")}
      ></modus-wc-table>
    `},args:{density:"comfortable",paginated:!0,showPageSizeSelector:!0}},$={render:e=>{const t=e.columns||d(),a=e.data||u();return c`
      <modus-wc-table
        .columns=${t}
        .data=${a}
        .density=${e.density}
        .hover=${e.hover}
        .sortable=${e.sortable}
        .paginated=${e.paginated}
        .showPageSizeSelector=${e.showPageSizeSelector}
        .customClass=${e.customClass}
        .selectable=${e.selectable}
        .zebra=${e.zebra}
        .currentPage=${e.currentPage}
        .pageSizeOptions=${e.pageSizeOptions}
        .selectedRowIds=${e.selectedRowIds}
        .editable=${e.editable}
        @rowSelectionChange=${s("rowSelectionChange")}
      ></modus-wc-table>
    `},args:{density:"comfortable",selectable:"multi"}},h={render:e=>c`
      <modus-wc-table
        .columns=${[{id:"id",header:"ID",accessor:"id",width:"20px"},{id:"name",header:"Name",accessor:"name",editor:"text"},{id:"status",header:"Status",accessor:"status",editor:"custom",customEditorRenderer:(l,r)=>{const o=document.createElement("div");o.style.width="100%";const n=document.createElement("modus-wc-autocomplete");n.items=[{label:"Active",value:"Active",visibleInMenu:!0},{label:"Inactive",value:"Inactive",visibleInMenu:!0},{label:"Pending",value:"Pending",visibleInMenu:!0}],n.value=l,n.style.width="100%";const i=w=>{r(w.detail.value)};return n.addEventListener("itemSelect",i),o.appendChild(n),o},cellRenderer:l=>{const o={Active:"green",Inactive:"gray",Pending:"blue"}[l]||"black",n=document.createElement("span");return n.textContent=l,n.style.color=o,n.style.fontWeight="bold",n}}]}
        .data=${[{id:"1",name:"John Doe",status:"Active"},{id:"2",name:"Jane Smith",status:"Inactive"},{id:"3",name:"Bob Johnson",status:"Pending"}]}
        .density=${e.density}
        .hover=${e.hover}
        .sortable=${e.sortable}
        .paginated=${e.paginated}
        .showPageSizeSelector=${e.showPageSizeSelector}
        .customClass=${e.customClass}
        .selectable=${e.selectable}
        .zebra=${e.zebra}
        .currentPage=${e.currentPage}
        .pageSizeOptions=${e.pageSizeOptions}
        .selectedRowIds=${e.selectedRowIds}
        .editable=${!0}
        @cellEditStart=${s("cellEditStart")}
        @cellEditCommit=${s("cellEditCommit")}
      ></modus-wc-table>
    `,args:{density:"comfortable",hover:!0,sortable:!0,paginated:!1,showPageSizeSelector:!0,customClass:"",selectable:"none",zebra:!1,currentPage:1,pageSizeOptions:[5,10,15],selectedRowIds:[]}};var z,v,f;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData();
    return html\`
      <modus-wc-table
        .columns=\${columns}
        .data=\${data}
        .density=\${args.density}
        .hover=\${args.hover}
        .sortable=\${args.sortable}
        .paginated=\${args.paginated}
        .showPageSizeSelector=\${args.showPageSizeSelector}
        .customClass=\${args.customClass}
        .selectable=\${args.selectable}
        .zebra=\${args.zebra}
        .currentPage=\${args.currentPage}
        .pageSizeOptions=\${args.pageSizeOptions}
        .selectedRowIds=\${args.selectedRowIds}
        .editable=\${args.editable}
        @rowClick=\${action('rowClick')}
        @sortChange=\${action('sortChange')}
        @paginationChange=\${action('paginationChange')}
        @rowSelectionChange=\${action('rowSelectionChange')}
        @cellEditStart=\${action('cellEditStart')}
        @cellEditCommit=\${action('cellEditCommit')}
      ></modus-wc-table>
    \`;
  },
  args: {
    density: 'comfortable',
    hover: true,
    sortable: true,
    paginated: false,
    showPageSizeSelector: true,
    customClass: '',
    selectable: 'none',
    zebra: false,
    currentPage: 1,
    pageSizeOptions: [5, 10, 15],
    selectedRowIds: [],
    editable: false
  }
}`,...(f=(v=m.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var P,y,I;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData();
    return html\`
      <modus-wc-table
        .columns=\${columns}
        .data=\${data}
        .density=\${args.density}
        .hover=\${args.hover}
        .sortable=\${args.sortable}
        .paginated=\${args.paginated}
        .showPageSizeSelector=\${args.showPageSizeSelector}
        .customClass=\${args.customClass}
        .selectable=\${args.selectable}
        .zebra=\${args.zebra}
        .currentPage=\${args.currentPage}
        .pageSizeOptions=\${args.pageSizeOptions}
        .selectedRowIds=\${args.selectedRowIds}
        .editable=\${args.editable}
        @rowClick=\${action('rowClick')}
      ></modus-wc-table>
    \`;
  },
  args: {
    density: 'comfortable',
    hover: true
  }
}`,...(I=(y=g.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var O,R,E;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const columns = args.columns || createSortableColumns();
    const data = args.data || createDemoData();
    return html\`
      <modus-wc-table
        .columns=\${columns}
        .data=\${data}
        .density=\${args.density}
        .hover=\${args.hover}
        .sortable=\${args.sortable}
        .paginated=\${args.paginated}
        .showPageSizeSelector=\${args.showPageSizeSelector}
        .customClass=\${args.customClass}
        .selectable=\${args.selectable}
        .zebra=\${args.zebra}
        .currentPage=\${args.currentPage}
        .pageSizeOptions=\${args.pageSizeOptions}
        .selectedRowIds=\${args.selectedRowIds}
        .editable=\${args.editable}
        @sortChange=\${action('sortChange')}
      ></modus-wc-table>
    \`;
  },
  args: {
    density: 'comfortable',
    sortable: true
  }
}`,...(E=(R=b.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var _,x,D;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData(15);
    return html\`
      <modus-wc-table
        .columns=\${columns}
        .data=\${data}
        .density=\${args.density}
        .hover=\${args.hover}
        .sortable=\${args.sortable}
        .paginated=\${args.paginated}
        .showPageSizeSelector=\${args.showPageSizeSelector}
        .customClass=\${args.customClass}
        .selectable=\${args.selectable}
        .zebra=\${args.zebra}
        .currentPage=\${args.currentPage}
        .pageSizeOptions=\${args.pageSizeOptions}
        .selectedRowIds=\${args.selectedRowIds}
        .editable=\${args.editable}
        @paginationChange=\${action('paginationChange')}
      ></modus-wc-table>
    \`;
  },
  args: {
    density: 'comfortable',
    paginated: true,
    showPageSizeSelector: true
  }
}`,...(D=(x=p.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var A,T,k;$.parameters={...$.parameters,docs:{...(A=$.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData();
    return html\`
      <modus-wc-table
        .columns=\${columns}
        .data=\${data}
        .density=\${args.density}
        .hover=\${args.hover}
        .sortable=\${args.sortable}
        .paginated=\${args.paginated}
        .showPageSizeSelector=\${args.showPageSizeSelector}
        .customClass=\${args.customClass}
        .selectable=\${args.selectable}
        .zebra=\${args.zebra}
        .currentPage=\${args.currentPage}
        .pageSizeOptions=\${args.pageSizeOptions}
        .selectedRowIds=\${args.selectedRowIds}
        .editable=\${args.editable}
        @rowSelectionChange=\${action('rowSelectionChange')}
      ></modus-wc-table>
    \`;
  },
  args: {
    density: 'comfortable',
    selectable: 'multi'
  }
}`,...(k=(T=$.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var M,L,V;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const columns: ITableColumn[] = [{
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: '20px'
    }, {
      id: 'name',
      header: 'Name',
      accessor: 'name',
      editor: 'text'
    }, {
      id: 'status',
      header: 'Status',
      accessor: 'status',
      editor: 'custom',
      customEditorRenderer: (value, onCommit) => {
        const container = document.createElement('div');
        container.style.width = '100%';
        const autocomplete = document.createElement('modus-wc-autocomplete');
        autocomplete.items = [{
          label: 'Active',
          value: 'Active',
          visibleInMenu: true
        }, {
          label: 'Inactive',
          value: 'Inactive',
          visibleInMenu: true
        }, {
          label: 'Pending',
          value: 'Pending',
          visibleInMenu: true
        }];
        autocomplete.value = value as string;
        autocomplete.style.width = '100%';
        const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
          onCommit(e.detail.value);
        };
        autocomplete.addEventListener('itemSelect', handleItemSelect as EventListener);
        container.appendChild(autocomplete);
        return container;
      },
      cellRenderer: value => {
        const statusColors = {
          Active: 'green',
          Inactive: 'gray',
          Pending: 'blue'
        };
        const color = statusColors[value as string] || 'black';
        const span = document.createElement('span');
        span.textContent = value as string;
        span.style.color = color;
        span.style.fontWeight = 'bold';
        return span;
      }
    }];
    const data = [{
      id: '1',
      name: 'John Doe',
      status: 'Active'
    }, {
      id: '2',
      name: 'Jane Smith',
      status: 'Inactive'
    }, {
      id: '3',
      name: 'Bob Johnson',
      status: 'Pending'
    }];
    return html\`
      <modus-wc-table
        .columns=\${columns}
        .data=\${data}
        .density=\${args.density}
        .hover=\${args.hover}
        .sortable=\${args.sortable}
        .paginated=\${args.paginated}
        .showPageSizeSelector=\${args.showPageSizeSelector}
        .customClass=\${args.customClass}
        .selectable=\${args.selectable}
        .zebra=\${args.zebra}
        .currentPage=\${args.currentPage}
        .pageSizeOptions=\${args.pageSizeOptions}
        .selectedRowIds=\${args.selectedRowIds}
        .editable=\${true}
        @cellEditStart=\${action('cellEditStart')}
        @cellEditCommit=\${action('cellEditCommit')}
      ></modus-wc-table>
    \`;
  },
  args: {
    density: 'comfortable',
    hover: true,
    sortable: true,
    paginated: false,
    showPageSizeSelector: true,
    customClass: '',
    selectable: 'none',
    zebra: false,
    currentPage: 1,
    pageSizeOptions: [5, 10, 15],
    selectedRowIds: []
  }
}`,...(V=(L=h.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const X=["Default","Hover","Sorting","Pagination","CheckBoxRowSelection","InlineEditing"];export{$ as CheckBoxRowSelection,m as Default,g as Hover,h as InlineEditing,p as Pagination,b as Sorting,X as __namedExportsOrder,Q as default};
