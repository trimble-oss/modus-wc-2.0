import{_ as K,b as o}from"./chunk-4XZ63LWV-CnYBn8W6.js";import{x as i}from"./lit-element-C8zulti1.js";import"./v4-CtRu48qb.js";const{definePreview:Z}=__STORYBOOK_MODULE_PREVIEW_API__,{global:z}=__STORYBOOK_MODULE_GLOBAL__;var j={};K(j,{argsEnhancers:()=>U,loaders:()=>Y});var B=(e,t)=>typeof t[e]>"u"&&!(e in t),N=e=>{let{initialArgs:t,argTypes:n,id:l,parameters:{actions:r}}=e;if(!r||r.disable||!r.argTypesRegex||!n)return{};let s=new RegExp(r.argTypesRegex);return Object.entries(n).filter(([a])=>!!s.test(a)).reduce((a,[d,c])=>(B(d,t)&&(a[d]=o(d,{implicit:!0,id:l})),a),{})},J=e=>{let{initialArgs:t,argTypes:n,parameters:{actions:l}}=e;return l!=null&&l.disable||!n?{}:Object.entries(n).filter(([r,s])=>!!s.action).reduce((r,[s,a])=>(B(s,t)&&(r[s]=o(typeof a.action=="string"?a.action:s)),r),{})},U=[J,N],v=!1,W=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!v&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in z&&typeof z.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let n=z.__STORYBOOK_TEST_ON_MOCK_CALL__;n((l,r)=>{let s=l.getMockName();s!=="spy"&&(!/^next\/.*::/.test(s)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(a=>s.startsWith(a)))&&o(s)(r)}),v=!0}},Y=[W];const Q={title:"Components/Table",component:"modus-wc-table",argTypes:{columns:{control:"object",description:"An array of column definitions."},data:{control:"object",description:"An array of data objects."},density:{control:{type:"select"},options:["condensed","comfortable","relaxed"],description:"The density of the table, used to save space or increase readability."},hover:{control:"boolean",description:"Enable hover effect on table rows.",defaultValue:!0},sortable:{control:"boolean",description:"Enable sorting functionality for sortable columns.",defaultValue:!0},paginated:{control:"boolean",description:"Enable pagination for the table.",defaultValue:!1},"show-page-size-selector":{control:"boolean",description:"Show/hide the page size selector in pagination.",defaultValue:!0},"custom-class":{control:"text",description:"Custom CSS class to apply to the inner div."},selectable:{control:{type:"select"},options:["none","single","multi"],description:"Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows.",defaultValue:"none"},zebra:{control:"boolean",description:"Zebra striped tables differentiate rows by styling them in an alternating fashion.",defaultValue:!1},"current-page":{control:"number",description:"The current page number in pagination (1-based index).",defaultValue:1},"page-size-options":{control:"object",description:"Available options for the number of rows per page.",defaultValue:[5,10,15]},"selected-row-ids":{control:"object",description:"Array of selected row IDs. Used for controlled selection state.",defaultValue:[]},editable:{control:"boolean",description:"Enable cell editing. Either a boolean (all rows) or a predicate per row.",defaultValue:!1}}},u=()=>[{id:"id",header:"ID",accessor:"id",width:"60px"},{id:"name",header:"Name",accessor:"name",width:"100px"},{id:"email",header:"Email",accessor:"email"},{id:"role",header:"Role",accessor:"role"}],q=()=>u().map(t=>({...t,sortable:!0})),m=(e=5)=>{const t=[];for(let n=1;n<=e;n++)t.push({id:n.toString(),name:`User ${n}`,email:`user${n}@example.com`,role:n%2===0?"Admin":"User"});return t},p={render:e=>{const t=e.columns||u(),n=e.data||m();return i`
      <modus-wc-table
        .columns=${t}
        .data=${n}
        .density=${e.density}
        .hover=${e.hover}
        .sortable=${e.sortable}
        .paginated=${e.paginated}
        .showPageSizeSelector=${e["show-page-size-selector"]}
        .customClass=${e["custom-class"]}
        .selectable=${e.selectable}
        .zebra=${e.zebra}
        .currentPage=${e["current-page"]}
        .pageSizeOptions=${e["page-size-options"]}
        .selectedRowIds=${e["selected-row-ids"]}
        .editable=${e.editable}
        @rowClick=${o("rowClick")}
        @sortChange=${o("sortChange")}
        @paginationChange=${o("paginationChange")}
        @rowSelectionChange=${o("rowSelectionChange")}
        @cellEditStart=${o("cellEditStart")}
        @cellEditCommit=${o("cellEditCommit")}
      ></modus-wc-table>
    `},args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[],editable:!1}},g={render:e=>{const t=e.columns||u(),n=e.data||m();return i`
      <modus-wc-table
        .columns=${t}
        .data=${n}
        .density=${e.density}
        .hover=${e.hover}
        .sortable=${e.sortable}
        .paginated=${e.paginated}
        .showPageSizeSelector=${e["show-page-size-selector"]}
        .customClass=${e["custom-class"]}
        .selectable=${e.selectable}
        .zebra=${e.zebra}
        .currentPage=${e["current-page"]}
        .pageSizeOptions=${e["page-size-options"]}
        .selectedRowIds=${e["selected-row-ids"]}
        .editable=${e.editable}
        @rowClick=${o("rowClick")}
      ></modus-wc-table>
    `},args:{density:"comfortable",hover:!0}},b={render:e=>{const t=e.columns||q(),n=e.data||m();return i`
      <modus-wc-table
        .columns=${t}
        .data=${n}
        .density=${e.density}
        .hover=${e.hover}
        .sortable=${e.sortable}
        .paginated=${e.paginated}
        .showPageSizeSelector=${e["show-page-size-selector"]}
        .customClass=${e["custom-class"]}
        .selectable=${e.selectable}
        .zebra=${e.zebra}
        .currentPage=${e["current-page"]}
        .pageSizeOptions=${e["page-size-options"]}
        .selectedRowIds=${e["selected-row-ids"]}
        .editable=${e.editable}
        @sortChange=${o("sortChange")}
      ></modus-wc-table>
    `},args:{density:"comfortable",sortable:!0}},$={render:e=>{const t=e.columns||u(),n=e.data||m(15);return i`
      <modus-wc-table
        .columns=${t}
        .data=${n}
        .density=${e.density}
        .hover=${e.hover}
        .sortable=${e.sortable}
        .paginated=${e.paginated}
        .showPageSizeSelector=${e["show-page-size-selector"]}
        .customClass=${e["custom-class"]}
        .selectable=${e.selectable}
        .zebra=${e.zebra}
        .currentPage=${e["current-page"]}
        .pageSizeOptions=${e["page-size-options"]}
        .selectedRowIds=${e["selected-row-ids"]}
        .editable=${e.editable}
        @paginationChange=${o("paginationChange")}
      ></modus-wc-table>
    `},args:{density:"comfortable",paginated:!0,"show-page-size-selector":!0}},h={render:e=>{const t=e.columns||u(),n=e.data||m();return i`
      <modus-wc-table
        .columns=${t}
        .data=${n}
        .density=${e.density}
        .hover=${e.hover}
        .sortable=${e.sortable}
        .paginated=${e.paginated}
        .showPageSizeSelector=${e["show-page-size-selector"]}
        .customClass=${e["custom-class"]}
        .selectable=${e.selectable}
        .zebra=${e.zebra}
        .currentPage=${e["current-page"]}
        .pageSizeOptions=${e["page-size-options"]}
        .selectedRowIds=${e["selected-row-ids"]}
        .editable=${e.editable}
        @rowSelectionChange=${o("rowSelectionChange")}
      ></modus-wc-table>
    `},args:{density:"comfortable",selectable:"multi"}},w={render:e=>i`
      <modus-wc-table
        .columns=${[{id:"id",header:"ID",accessor:"id",width:"20px"},{id:"name",header:"Name",accessor:"name",editor:"text"},{id:"status",header:"Status",accessor:"status",editor:"custom",customEditorRenderer:(l,r)=>{const s=document.createElement("div");s.style.width="100%";const a=document.createElement("modus-wc-autocomplete");a.items=[{label:"Active",value:"Active",visibleInMenu:!0},{label:"Inactive",value:"Inactive",visibleInMenu:!0},{label:"Pending",value:"Pending",visibleInMenu:!0}],a.value=l,a.style.width="100%";const d=c=>{r(c.detail.value)};return a.addEventListener("itemSelect",d),s.appendChild(a),setTimeout(()=>{const c=a.querySelector("input");c==null||c.focus()},0),s},cellRenderer:l=>{const s={Active:"green",Inactive:"gray",Pending:"blue"}[l]||"black",a=document.createElement("span");return a.textContent=l,a.style.color=s,a.style.fontWeight="bold",a}}]}
        .data=${[{id:"1",name:"John Doe",status:"Active"},{id:"2",name:"Jane Smith",status:"Inactive"},{id:"3",name:"Bob Johnson",status:"Pending"}]}
        .density=${e.density}
        .hover=${e.hover}
        .sortable=${e.sortable}
        .paginated=${e.paginated}
        .showPageSizeSelector=${e["show-page-size-selector"]}
        .customClass=${e["custom-class"]}
        .selectable=${e.selectable}
        .zebra=${e.zebra}
        .currentPage=${e["current-page"]}
        .pageSizeOptions=${e["page-size-options"]}
        .selectedRowIds=${e["selected-row-ids"]}
        .editable=${!0}
        @cellEditStart=${o("cellEditStart")}
        @cellEditCommit=${o("cellEditCommit")}
      ></modus-wc-table>
    `,args:{density:"comfortable",hover:!0,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[]}};var S,C,f;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        .showPageSizeSelector=\${args['show-page-size-selector']}
        .customClass=\${args['custom-class']}
        .selectable=\${args.selectable}
        .zebra=\${args.zebra}
        .currentPage=\${args['current-page']}
        .pageSizeOptions=\${args['page-size-options']}
        .selectedRowIds=\${args['selected-row-ids']}
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
    hover: false,
    sortable: true,
    paginated: false,
    'show-page-size-selector': true,
    'custom-class': '',
    selectable: 'none',
    zebra: false,
    'current-page': 1,
    'page-size-options': [5, 10, 15],
    'selected-row-ids': [],
    editable: false
  }
}`,...(f=(C=p.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var y,E,_;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        .showPageSizeSelector=\${args['show-page-size-selector']}
        .customClass=\${args['custom-class']}
        .selectable=\${args.selectable}
        .zebra=\${args.zebra}
        .currentPage=\${args['current-page']}
        .pageSizeOptions=\${args['page-size-options']}
        .selectedRowIds=\${args['selected-row-ids']}
        .editable=\${args.editable}
        @rowClick=\${action('rowClick')}
      ></modus-wc-table>
    \`;
  },
  args: {
    density: 'comfortable',
    hover: true
  }
}`,...(_=(E=g.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var I,O,P;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        .showPageSizeSelector=\${args['show-page-size-selector']}
        .customClass=\${args['custom-class']}
        .selectable=\${args.selectable}
        .zebra=\${args.zebra}
        .currentPage=\${args['current-page']}
        .pageSizeOptions=\${args['page-size-options']}
        .selectedRowIds=\${args['selected-row-ids']}
        .editable=\${args.editable}
        @sortChange=\${action('sortChange')}
      ></modus-wc-table>
    \`;
  },
  args: {
    density: 'comfortable',
    sortable: true
  }
}`,...(P=(O=b.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var x,R,D;$.parameters={...$.parameters,docs:{...(x=$.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        .showPageSizeSelector=\${args['show-page-size-selector']}
        .customClass=\${args['custom-class']}
        .selectable=\${args.selectable}
        .zebra=\${args.zebra}
        .currentPage=\${args['current-page']}
        .pageSizeOptions=\${args['page-size-options']}
        .selectedRowIds=\${args['selected-row-ids']}
        .editable=\${args.editable}
        @paginationChange=\${action('paginationChange')}
      ></modus-wc-table>
    \`;
  },
  args: {
    density: 'comfortable',
    paginated: true,
    'show-page-size-selector': true
  }
}`,...(D=(R=$.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var A,T,k;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
        .showPageSizeSelector=\${args['show-page-size-selector']}
        .customClass=\${args['custom-class']}
        .selectable=\${args.selectable}
        .zebra=\${args.zebra}
        .currentPage=\${args['current-page']}
        .pageSizeOptions=\${args['page-size-options']}
        .selectedRowIds=\${args['selected-row-ids']}
        .editable=\${args.editable}
        @rowSelectionChange=\${action('rowSelectionChange')}
      ></modus-wc-table>
    \`;
  },
  args: {
    density: 'comfortable',
    selectable: 'multi'
  }
}`,...(k=(T=h.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var M,L,V;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        setTimeout(() => {
          const input = autocomplete.querySelector('input');
          input?.focus();
        }, 0);
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
        .showPageSizeSelector=\${args['show-page-size-selector']}
        .customClass=\${args['custom-class']}
        .selectable=\${args.selectable}
        .zebra=\${args.zebra}
        .currentPage=\${args['current-page']}
        .pageSizeOptions=\${args['page-size-options']}
        .selectedRowIds=\${args['selected-row-ids']}
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
    'show-page-size-selector': true,
    'custom-class': '',
    selectable: 'none',
    zebra: false,
    'current-page': 1,
    'page-size-options': [5, 10, 15],
    'selected-row-ids': []
  }
}`,...(V=(L=w.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const X=["Default","Hover","Sorting","Pagination","CheckBoxRowSelection","InlineEditing"];export{h as CheckBoxRowSelection,p as Default,g as Hover,w as InlineEditing,$ as Pagination,b as Sorting,X as __namedExportsOrder,Q as default};
