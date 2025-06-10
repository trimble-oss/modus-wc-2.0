import{_ as V,b as s}from"./chunk-4XZ63LWV-CnYBn8W6.js";import{x as i}from"./lit-element-C8zulti1.js";import"./v4-CtRu48qb.js";const{definePreview:Z}=__STORYBOOK_MODULE_PREVIEW_API__,{global:f}=__STORYBOOK_MODULE_GLOBAL__;var K={};V(K,{argsEnhancers:()=>W,loaders:()=>J});var B=(e,t)=>typeof t[e]>"u"&&!(e in t),N=e=>{let{initialArgs:t,argTypes:a,id:l,parameters:{actions:r}}=e;if(!r||r.disable||!r.argTypesRegex||!a)return{};let o=new RegExp(r.argTypesRegex);return Object.entries(a).filter(([n])=>!!o.test(n)).reduce((n,[d,c])=>(B(d,t)&&(n[d]=s(d,{implicit:!0,id:l})),n),{})},U=e=>{let{initialArgs:t,argTypes:a,parameters:{actions:l}}=e;return l!=null&&l.disable||!a?{}:Object.entries(a).filter(([r,o])=>!!o.action).reduce((r,[o,n])=>(B(o,t)&&(r[o]=s(typeof n.action=="string"?n.action:o)),r),{})},W=[U,N],v=!1,H=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!v&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in f&&typeof f.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let a=f.__STORYBOOK_TEST_ON_MOCK_CALL__;a((l,r)=>{let o=l.getMockName();o!=="spy"&&(!/^next\/.*::/.test(o)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(n=>o.startsWith(n)))&&s(o)(r)}),v=!0}},J=[H];const Q={title:"Components/Table",component:"modus-wc-table",argTypes:{columns:{control:"object",description:"An array of column definitions.",table:{type:{detail:`
            Interface: ITableColumn
            Properties:
            - accessor (string): Key to access data from row object
            - cellRenderer? (function): Custom cell renderer (value, row) => string | HTMLElement
            - className? (string): Class names for the column
            - header (string | HTMLElement): Header content
            - id (string): Unique identifier for the column
            - width? (string): Width style (e.g., '200px', '50%')
            - sortable? (boolean): Whether the column is sortable
            - editor? ('text' | 'number' | 'autocomplete' | 'date' | 'custom'): Built-in editor type
            - editorProps? (object): Extra props specific to the editor component
            - customEditorRenderer? (function): Custom renderer for 'custom' editor
            - editorTemplate? (string): Raw HTML string for editor, with \`\${value}\` placeholder
            - editorSetup? (function): Runs after the editor element is added to the DOM
          `}}},data:{control:"object",description:"An array of data objects.",table:{type:{detail:`
            Data should be an array of objects, where each object represents a row and each key matches a column accessor.

            Example:
            [
              { id: '1', name: 'Alice', email: 'alice@example.com', role: 'Admin' },
              { id: '2', name: 'Bob', email: 'bob@example.com', role: 'User' }
            ]

            - Each property in the object should correspond to a column's accessor value.
            - The 'id' property is recommended for row identification and selection.
          `}}},density:{control:{type:"select"},options:["condensed","comfortable","relaxed"],description:"The density of the table, used to save space or increase readability."},hover:{control:"boolean",description:"Enable hover effect on table rows.",defaultValue:!0},sortable:{control:"boolean",description:"Enable sorting functionality for sortable columns.",defaultValue:!0},paginated:{control:"boolean",description:"Enable pagination for the table.",defaultValue:!1},"show-page-size-selector":{control:"boolean",description:"Show/hide the page size selector in pagination.",defaultValue:!0},"custom-class":{control:"text",description:"Custom CSS class to apply to the inner div."},selectable:{control:{type:"select"},options:["none","single","multi"],description:"Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows.",defaultValue:"none"},zebra:{control:"boolean",description:"Zebra striped tables differentiate rows by styling them in an alternating fashion.",defaultValue:!1},"current-page":{control:"number",description:"The current page number in pagination (1-based index).",defaultValue:1},"page-size-options":{control:"object",description:"Available options for the number of rows per page.",defaultValue:[5,10,15]},"selected-row-ids":{control:"object",description:"Array of selected row IDs. Used for controlled selection state.",defaultValue:[]},editable:{control:"boolean",description:"Enable cell editing. Either a boolean (all rows) or a predicate per row.",defaultValue:!1}}},u=()=>[{id:"id",header:"ID",accessor:"id",width:"60px"},{id:"name",header:"Name",accessor:"name",width:"100px"},{id:"email",header:"Email",accessor:"email"},{id:"role",header:"Role",accessor:"role"}],Y=()=>u().map(t=>({...t,sortable:!0})),m=(e=5)=>{const t=[];for(let a=1;a<=e;a++)t.push({id:a.toString(),name:`User ${a}`,email:`user${a}@example.com`,role:a%2===0?"Admin":"User"});return t},p={render:e=>{const t=e.columns||u(),a=e.data||m();return i`
      <modus-wc-table
        .columns=${t}
        .data=${a}
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
        @rowClick=${s("rowClick")}
        @sortChange=${s("sortChange")}
        @paginationChange=${s("paginationChange")}
        @rowSelectionChange=${s("rowSelectionChange")}
        @cellEditStart=${s("cellEditStart")}
        @cellEditCommit=${s("cellEditCommit")}
      ></modus-wc-table>
    `},args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[],editable:!1}},g={render:e=>{const t=e.columns||u(),a=e.data||m();return i`
      <modus-wc-table
        .columns=${t}
        .data=${a}
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
        @rowClick=${s("rowClick")}
      ></modus-wc-table>
    `},args:{density:"comfortable",hover:!0}},b={render:e=>{const t=e.columns||Y(),a=e.data||m();return i`
      <modus-wc-table
        .columns=${t}
        .data=${a}
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
        @sortChange=${s("sortChange")}
      ></modus-wc-table>
    `},args:{density:"comfortable",sortable:!0}},$={render:e=>{const t=e.columns||u(),a=e.data||m(15);return i`
      <modus-wc-table
        .columns=${t}
        .data=${a}
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
        @paginationChange=${s("paginationChange")}
      ></modus-wc-table>
    `},args:{density:"comfortable",paginated:!0,"show-page-size-selector":!0}},h={render:e=>{const t=e.columns||u(),a=e.data||m();return i`
      <modus-wc-table
        .columns=${t}
        .data=${a}
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
        @rowSelectionChange=${s("rowSelectionChange")}
      ></modus-wc-table>
    `},args:{density:"comfortable",selectable:"multi"}},w={render:e=>i`
      <modus-wc-table
        .columns=${[{id:"id",header:"ID",accessor:"id",width:"20px"},{id:"name",header:"Name",accessor:"name",editor:"text"},{id:"status",header:"Status",accessor:"status",editor:"custom",customEditorRenderer:(l,r)=>{const o=document.createElement("div");o.style.width="100%";const n=document.createElement("modus-wc-autocomplete");n.items=[{label:"Active",value:"Active",visibleInMenu:!0},{label:"Inactive",value:"Inactive",visibleInMenu:!0},{label:"Pending",value:"Pending",visibleInMenu:!0}],n.value=l,n.style.width="100%";const d=c=>{r(c.detail.value)};return n.addEventListener("itemSelect",d),o.appendChild(n),setTimeout(()=>{const c=n.querySelector("input");c==null||c.focus()},0),o},cellRenderer:l=>{const o={Active:"green",Inactive:"gray",Pending:"blue"}[l]||"black",n=document.createElement("span");return n.textContent=l,n.style.color=o,n.style.fontWeight="bold",n}}]}
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
        @cellEditStart=${s("cellEditStart")}
        @cellEditCommit=${s("cellEditCommit")}
      ></modus-wc-table>
    `,args:{density:"comfortable",hover:!0,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[]}};var z,C,S;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(S=(C=p.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var y,E,I;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var _,O,x;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(x=(O=b.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var P,R,T;$.parameters={...$.parameters,docs:{...(P=$.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(T=(R=$.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var D,A,k;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(A=h.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var M,L,j;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(j=(L=w.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const X=["Default","Hover","Sorting","Pagination","CheckBoxRowSelection","InlineEditing"];export{h as CheckBoxRowSelection,p as Default,g as Hover,w as InlineEditing,$ as Pagination,b as Sorting,X as __namedExportsOrder,Q as default};
