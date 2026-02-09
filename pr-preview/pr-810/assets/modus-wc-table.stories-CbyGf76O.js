import{_ as ne,b as c}from"./chunk-4XZ63LWV-CnYBn8W6.js";import{x as m}from"./lit-element-CucEn6F2.js";import"./v4-CtRu48qb.js";const{definePreview:pe}=__STORYBOOK_MODULE_PREVIEW_API__,{global:$}=__STORYBOOK_MODULE_GLOBAL__;var te={};ne(te,{argsEnhancers:()=>re,loaders:()=>ie});var ee=(e,t)=>typeof t[e]>"u"&&!(e in t),ae=e=>{let{initialArgs:t,argTypes:o,id:s,parameters:{actions:r}}=e;if(!r||r.disable||!r.argTypesRegex||!o)return{};let a=new RegExp(r.argTypesRegex);return Object.entries(o).filter(([n])=>!!a.test(n)).reduce((n,[i,u])=>(ee(i,t)&&(n[i]=c(i,{implicit:!0,id:s})),n),{})},oe=e=>{let{initialArgs:t,argTypes:o,parameters:{actions:s}}=e;return s!=null&&s.disable||!o?{}:Object.entries(o).filter(([r,a])=>!!a.action).reduce((r,[a,n])=>(ee(a,t)&&(r[a]=c(typeof n.action=="string"?n.action:a)),r),{})},re=[oe,ae],z=!1,se=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!z&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in $&&typeof $.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let o=$.__STORYBOOK_TEST_ON_MOCK_CALL__;o((s,r)=>{let a=s.getMockName();a!=="spy"&&(!/^next\/.*::/.test(a)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(n=>a.startsWith(n)))&&c(a)(r)}),z=!0}},ie=[se],k=Object.freeze,ce=Object.defineProperty,p=(e,t)=>k(ce(e,"raw",{value:k(t||e.slice())})),x,T,R,A,_,q;const he={title:"Components/Table",component:"modus-wc-table",argTypes:{columns:{control:"object",description:"An array of column definitions.",table:{type:{detail:`
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
          `}}},density:{control:{type:"select"},options:["condensed","comfortable","relaxed"],description:"The density of the table, used to save space or increase readability."},hover:{control:"boolean",description:"Enable hover effect on table rows.",defaultValue:!0},sortable:{control:"boolean",description:"Enable sorting functionality for sortable columns.",defaultValue:!0},paginated:{control:"boolean",description:"Enable pagination for the table.",defaultValue:!1},"show-page-size-selector":{control:"boolean",description:"Show/hide the page size selector in pagination.",defaultValue:!0},caption:{control:"text",description:"Accessibility caption for the table that is visually hidden but available to screen readers."},"custom-class":{control:"text",description:"Custom CSS class to apply to the inner div."},selectable:{control:{type:"select"},options:["none","single","multi"],description:"Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows.",defaultValue:"none"},zebra:{control:"boolean",description:"Zebra striped tables differentiate rows by styling them in an alternating fashion.",defaultValue:!1},"current-page":{control:"number",description:"The current page number in pagination (1-based index).",defaultValue:1},"page-size-options":{control:"object",description:"Available options for the number of rows per page.",defaultValue:[5,10,15]},"selected-row-ids":{control:"object",description:"Array of selected row IDs. Used for controlled selection state.",defaultValue:[]},editable:{control:"boolean",description:"Enable cell editing. Either a boolean (all rows) or a predicate per row.",defaultValue:!1}}},h=()=>[{id:"id",header:"ID",accessor:"id",width:"60px"},{id:"name",header:"Name",accessor:"name",width:"100px"},{id:"button",header:"Button",accessor:"button",cellRenderer:e=>{const t=document.createElement("modus-wc-button");return t.textContent=e,t.addEventListener("click",o=>o.stopPropagation()),t}},{id:"email",header:"Email",accessor:"email"},{id:"role",header:"Role",accessor:"role"}],le=()=>h().map(t=>({...t,sortable:!0})),g=(e=5)=>{const t=[];for(let o=1;o<=e;o++)t.push({id:o.toString(),name:`User ${o}`,button:`Button ${o}`,email:`user${o}@example.com`,role:o%2===0?"Admin":"User"});return t},b={render:e=>{const t=e.columns||h(),o=e.data||g();return m(x||(x=p([`
      <modus-wc-table
        .columns=`,`
        .data=`,`
        .density=`,`
        .hover=`,`
        .sortable=`,`
        .paginated=`,`
        .showPageSizeSelector=`,`
        .customClass=`,`
        .selectable=`,`
        .zebra=`,`
        .currentPage=`,`
        .pageSizeOptions=`,`
        .selectedRowIds=`,`
        .editable=`,`
        .caption=`,`
        @rowClick=`,`
        @sortChange=`,`
        @paginationChange=`,`
        @rowSelectionChange=`,`
        @cellEditStart=`,`
        @cellEditCommit=`,`
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \`User \${i}\`,
        //       email: \`user\${i}@example.com\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData();
        // table.hover = 'false';
      <\/script>
    `],[`
      <modus-wc-table
        .columns=`,`
        .data=`,`
        .density=`,`
        .hover=`,`
        .sortable=`,`
        .paginated=`,`
        .showPageSizeSelector=`,`
        .customClass=`,`
        .selectable=`,`
        .zebra=`,`
        .currentPage=`,`
        .pageSizeOptions=`,`
        .selectedRowIds=`,`
        .editable=`,`
        .caption=`,`
        @rowClick=`,`
        @sortChange=`,`
        @paginationChange=`,`
        @rowSelectionChange=`,`
        @cellEditStart=`,`
        @cellEditCommit=`,`
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \\\`User \\\${i}\\\`,
        //       email: \\\`user\\\${i}@example.com\\\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData();
        // table.hover = 'false';
      <\/script>
    `])),t,o,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,e.caption,c("rowClick"),c("sortChange"),c("paginationChange"),c("rowSelectionChange"),c("cellEditStart"),c("cellEditCommit"))},args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[],editable:!1}},f={render:e=>{const t=e.columns||h(),o=e.data||g();return m(T||(T=p([`
      <modus-wc-table
        .columns=`,`
        .data=`,`
        .density=`,`
        .hover=`,`
        .sortable=`,`
        .paginated=`,`
        .showPageSizeSelector=`,`
        .customClass=`,`
        .selectable=`,`
        .zebra=`,`
        .currentPage=`,`
        .pageSizeOptions=`,`
        .selectedRowIds=`,`
        .editable=`,`
        @rowClick=`,`
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \`User \${i}\`,
        //       email: \`user\${i}@example.com\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };
        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData();
      <\/script>
    `],[`
      <modus-wc-table
        .columns=`,`
        .data=`,`
        .density=`,`
        .hover=`,`
        .sortable=`,`
        .paginated=`,`
        .showPageSizeSelector=`,`
        .customClass=`,`
        .selectable=`,`
        .zebra=`,`
        .currentPage=`,`
        .pageSizeOptions=`,`
        .selectedRowIds=`,`
        .editable=`,`
        @rowClick=`,`
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \\\`User \\\${i}\\\`,
        //       email: \\\`user\\\${i}@example.com\\\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };
        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData();
      <\/script>
    `])),t,o,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,c("rowClick"))},args:{density:"comfortable",hover:!0}},w={render:e=>{const t=e.columns||le(),o=e.data||g();return m(R||(R=p([`
      <modus-wc-table
        .columns=`,`
        .data=`,`
        .density=`,`
        .hover=`,`
        .sortable=`,`
        .paginated=`,`
        .showPageSizeSelector=`,`
        .customClass=`,`
        .selectable=`,`
        .zebra=`,`
        .currentPage=`,`
        .pageSizeOptions=`,`
        .selectedRowIds=`,`
        .editable=`,`
        @sortChange=`,`
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createSortableColumns = () => {
        //   const columns = createDemoColumns();
        //   return columns.map((col) => ({ ...col, sortable: true }));
        // };

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \`User \${i}\`,
        //       email: \`user\${i}@example.com\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createSortableColumns();
        // table.data = createDemoData();
      <\/script>
    `],[`
      <modus-wc-table
        .columns=`,`
        .data=`,`
        .density=`,`
        .hover=`,`
        .sortable=`,`
        .paginated=`,`
        .showPageSizeSelector=`,`
        .customClass=`,`
        .selectable=`,`
        .zebra=`,`
        .currentPage=`,`
        .pageSizeOptions=`,`
        .selectedRowIds=`,`
        .editable=`,`
        @sortChange=`,`
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createSortableColumns = () => {
        //   const columns = createDemoColumns();
        //   return columns.map((col) => ({ ...col, sortable: true }));
        // };

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \\\`User \\\${i}\\\`,
        //       email: \\\`user\\\${i}@example.com\\\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createSortableColumns();
        // table.data = createDemoData();
      <\/script>
    `])),t,o,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,c("sortChange"))},args:{density:"comfortable",sortable:!0}},v={render:e=>{const t=e.columns||h(),o=e.data||g(15);return m(A||(A=p([`
      <modus-wc-table
        .columns=`,`
        .data=`,`
        .density=`,`
        .hover=`,`
        .sortable=`,`
        .paginated=`,`
        .showPageSizeSelector=`,`
        .customClass=`,`
        .selectable=`,`
        .zebra=`,`
        .currentPage=`,`
        .pageSizeOptions=`,`
        .selectedRowIds=`,`
        .editable=`,`
        @paginationChange=`,`
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \`User \${i}\`,
        //       email: \`user\${i}@example.com\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData(15);
        // table.paginated = true;
      <\/script>
    `],[`
      <modus-wc-table
        .columns=`,`
        .data=`,`
        .density=`,`
        .hover=`,`
        .sortable=`,`
        .paginated=`,`
        .showPageSizeSelector=`,`
        .customClass=`,`
        .selectable=`,`
        .zebra=`,`
        .currentPage=`,`
        .pageSizeOptions=`,`
        .selectedRowIds=`,`
        .editable=`,`
        @paginationChange=`,`
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \\\`User \\\${i}\\\`,
        //       email: \\\`user\\\${i}@example.com\\\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData(15);
        // table.paginated = true;
      <\/script>
    `])),t,o,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,c("paginationChange"))},args:{density:"comfortable",paginated:!0,"show-page-size-selector":!0}},y={render:e=>{const t=e.columns||h(),o=e.data||g();return m(_||(_=p([`
      <modus-wc-table
        .columns=`,`
        .data=`,`
        .density=`,`
        .hover=`,`
        .sortable=`,`
        .paginated=`,`
        .showPageSizeSelector=`,`
        .customClass=`,`
        .selectable=`,`
        .zebra=`,`
        .currentPage=`,`
        .pageSizeOptions=`,`
        .selectedRowIds=`,`
        .editable=`,`
        @rowSelectionChange=`,`
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \`User \${i}\`,
        //       email: \`user\${i}@example.com\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData();
        // table.selectable = 'multi';
      <\/script>
    `],[`
      <modus-wc-table
        .columns=`,`
        .data=`,`
        .density=`,`
        .hover=`,`
        .sortable=`,`
        .paginated=`,`
        .showPageSizeSelector=`,`
        .customClass=`,`
        .selectable=`,`
        .zebra=`,`
        .currentPage=`,`
        .pageSizeOptions=`,`
        .selectedRowIds=`,`
        .editable=`,`
        @rowSelectionChange=`,`
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \\\`User \\\${i}\\\`,
        //       email: \\\`user\\\${i}@example.com\\\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData();
        // table.selectable = 'multi';
      <\/script>
    `])),t,o,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,c("rowSelectionChange"))},args:{density:"comfortable",selectable:"multi"}},C={render:e=>{const t=[{id:"id",header:"ID",accessor:"id",width:"20px"},{id:"button",header:"Button",accessor:"button",cellRenderer:s=>{const r=document.createElement("modus-wc-button");return r.textContent=s,r.addEventListener("click",a=>a.stopPropagation()),r}},{id:"status",header:"Status",accessor:"status",editor:"custom",customEditorRenderer:(s,r)=>{const a=document.createElement("div");a.style.width="100%";const n=document.createElement("modus-wc-autocomplete");n.items=[{label:"Active",value:"Active",visibleInMenu:!0},{label:"Inactive",value:"Inactive",visibleInMenu:!0},{label:"Pending",value:"Pending",visibleInMenu:!0}],n.value=s,n.style.width="100%";const i=u=>{r(u.detail.value)};return n.addEventListener("itemSelect",i),a.appendChild(n),setTimeout(()=>{const u=n.querySelector("input");u==null||u.focus()},0),a},cellRenderer:s=>{const a={Active:"green",Inactive:"gray",Pending:"blue"}[s]||"black",n=document.createElement("span");return n.textContent=s,n.style.color=a,n.style.fontWeight="bold",n}},{id:"dueDate",header:"Due Date",accessor:"dueDate",editor:"custom",customEditorRenderer:(s,r)=>{const a=document.createElement("div");a.style.width="100%";const n=document.createElement("modus-wc-date");n.value=s,n.style.width="100%",n.bordered=!1;let i=!1;const u=l=>{if(l.key==="Enter"){l.preventDefault();const d=n.querySelector("input");d&&d.value&&!i&&(i=!0,r(d.value))}else if(l.key==="Escape")l.preventDefault(),i||(i=!0,r(s||""));else if(l.key==="Tab"){const d=n.querySelector("input");d&&d.value&&!i&&(i=!0,r(d.value))}},S=l=>{var P,I;const d=l.relatedTarget;if(d&&(a.contains(d)||(P=n.shadowRoot)!=null&&P.contains(d))||((I=n.shadowRoot)==null?void 0:I.querySelector('[class*="calendar"]')))return;const D=n.querySelector("input");D&&D.value&&!i&&(i=!0,setTimeout(()=>r(D.value),50))};return a.addEventListener("keydown",u),a.addEventListener("focusout",S),a.appendChild(n),setTimeout(()=>{const l=n.querySelector("input");l==null||l.focus()},0),a},cellRenderer:s=>{if(!s)return"-";const r=s,a=r.split(/[-/]/);let n;if(a.length===3&&a[0].length<=2){const l=parseInt(a[0],10),d=parseInt(a[1],10)-1,E=parseInt(a[2],10);n=new Date(E,d,l)}else n=new Date(r);if(isNaN(n.getTime()))return r;const i=n.getDate().toString().padStart(2,"0"),u=(n.getMonth()+1).toString().padStart(2,"0"),S=n.getFullYear();return`${i}-${u}-${S}`}}],o=[{id:"1",name:"John Doe",button:"Button 1",status:"Active",dueDate:"15-10-2025"},{id:"2",name:"Jane Smith",button:"Button 2",status:"Inactive",dueDate:"20-11-2025"},{id:"3",name:"Bob Johnson",button:"Click me",status:"Button 3",dueDate:"05-12-2025"}];return m(q||(q=p([`
      <modus-wc-table
        .columns=`,`
        .data=`,`
        .density=`,`
        .hover=`,`
        .sortable=`,`
        .paginated=`,`
        .showPageSizeSelector=`,`
        .customClass=`,`
        .selectable=`,`
        .zebra=`,`
        .currentPage=`,`
        .pageSizeOptions=`,`
        .selectedRowIds=`,`
        .editable=`,`
        @cellEditStart=`,`
        @cellEditCommit=`,`
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const columns = [
        //     {
        //       id: 'id',
        //       header: 'ID',
        //       accessor: 'id',
        //       width: '20px',
        //     },
        //     {
        //       id: 'name',
        //       header: 'Name',
        //       accessor: 'name',
        //       editor: 'text',
        //     },
        //     {
        //       id: 'status',
        //       header: 'Status',
        //       accessor: 'status',
        //       editor: 'custom',
        //       customEditorRenderer: (value, onCommit) => {
        //         const container = document.createElement('div');
        //         container.style.width = '100%';

        //         const autocomplete = document.createElement('modus-wc-autocomplete');
        //         autocomplete.items = [
        //           { label: 'Active', value: 'Active', visibleInMenu: true },
        //           { label: 'Inactive', value: 'Inactive', visibleInMenu: true },
        //           { label: 'Pending', value: 'Pending', visibleInMenu: true },
        //         ];
        //         autocomplete.value = value;
        //         autocomplete.style.width = '100%';

        //         const handleItemSelect = (e) => {
        //           onCommit(e.detail.value);
        //         };

        //         autocomplete.addEventListener(
        //           'itemSelect',
        //           handleItemSelect
        //         );
        //         container.appendChild(autocomplete);

        //         setTimeout(() => {
        //           const input = autocomplete.querySelector('input');
        //           input?.focus();
        //         }, 0);

        //         return container;
        //       },
        //       cellRenderer: (value) => {
        //         const statusColors = {
        //           Active: 'green',
        //           Inactive: 'gray',
        //           Pending: 'blue',
        //         };
        //         const color = statusColors[value] || 'black';
        //         const span = document.createElement('span');
        //         span.textContent = value;
        //         span.style.color = color;
        //         span.style.fontWeight = 'bold';
        //         return span;
        //       },
        //     },
        //     {
        //       id: 'dueDate',
        //       header: 'Due Date',
        //       accessor: 'dueDate',
        //       editor: 'custom',
        //       customEditorRenderer: (value, onCommit) => {
        //         const container = document.createElement('div');
        //         container.style.width = '100%';

        //     const datePicker = document.createElement('modus-wc-date');
        //     datePicker.value = value;
        //     datePicker.style.width = '100%';
        //     datePicker.bordered = false;

        //     let isCommitting = false;

        //     const handleKeyDown = (e) => {
        //       if (e.key === 'Enter') {
        //         e.preventDefault();
        //         const input = datePicker.querySelector('input');
        //         if (input && input.value && !isCommitting) {
        //           isCommitting = true;
        //           onCommit(input.value);
        //         }
        //       } else if (e.key === 'Escape') {
        //         e.preventDefault();
        //         if (!isCommitting) {
        //           isCommitting = true;
        //           onCommit(value || '');
        //         }
        //       } else if (e.key === 'Tab') {
        //         const input = datePicker.querySelector('input');
        //         if (input && input.value && !isCommitting) {
        //           isCommitting = true;
        //           onCommit(input.value);
        //         }
        //       }
        //     };

        //     const handleContainerBlur = (e) => {
        //       const relatedTarget = e.relatedTarget;

        //       if (relatedTarget && (container.contains(relatedTarget) || datePicker.shadowRoot?.contains(relatedTarget))) {
        //         return;
        //       }

        //       const calendar = datePicker.shadowRoot?.querySelector('[class*="calendar"]');
        //       if (calendar) {
        //         return;
        //       }

        //       const input = datePicker.querySelector('input');
        //       if (input && input.value && !isCommitting) {
        //         isCommitting = true;
        //         setTimeout(() => onCommit(input.value), 50);
        //       }
        //     };

        //     container.addEventListener('keydown', handleKeyDown);
        //     container.addEventListener('focusout', handleContainerBlur);
        //     container.appendChild(datePicker);

        //         setTimeout(() => {
        //           const input = datePicker.querySelector('input');
        //           input?.focus();
        //         }, 0);

        //         return container;
        //       },
        //       cellRenderer: (value) => {
        //         if (!value) return '-';

        //         // Parse dd-mm-yyyy format from date picker
        //         const dateString = value;
        //         const parts = dateString.split(/[-/]/);

        //         let date;
        //         if (parts.length === 3 && parts[0].length <= 2) {
        //           // Assume dd-mm-yyyy or dd/mm/yyyy format
        //           const day = parseInt(parts[0], 10);
        //           const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
        //           const year = parseInt(parts[2], 10);
        //           date = new Date(year, month, day);
        //         } else {
        //           // Fallback to default parsing
        //           date = new Date(dateString);
        //         }

        //         // Check if date is valid
        //         if (isNaN(date.getTime())) {
        //           return dateString; // Return original value if parsing fails
        //         }

        //         // Format date with dashes: dd-mm-yyyy
        //         const formattedDay = date.getDate().toString().padStart(2, '0');
        //         const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
        //         const formattedYear = date.getFullYear();

        //         return \`\${formattedDay}-\${formattedMonth}-\${formattedYear}\`;
        //       },
        //     },
        //   ];

        //   const data = [
        //     {
        //       id: '1',
        //       name: 'John Doe',
        //       status: 'Active',
        //       dueDate: '15-10-2025',
        //     },
        //     {
        //       id: '2',
        //       name: 'Jane Smith',
        //       status: 'Inactive',
        //       dueDate: '20-11-2025',
        //     },
        //     {
        //       id: '3',
        //       name: 'Bob Johnson',
        //       status: 'Pending',
        //       dueDate: '05-12-2025',
        //     },
        //   ];
        //   const table = document.querySelector('modus-wc-table');
        //   table.columns = columns;
        //   table.data = data;
        //   table.editable = true;
      <\/script>
    `],[`
      <modus-wc-table
        .columns=`,`
        .data=`,`
        .density=`,`
        .hover=`,`
        .sortable=`,`
        .paginated=`,`
        .showPageSizeSelector=`,`
        .customClass=`,`
        .selectable=`,`
        .zebra=`,`
        .currentPage=`,`
        .pageSizeOptions=`,`
        .selectedRowIds=`,`
        .editable=`,`
        @cellEditStart=`,`
        @cellEditCommit=`,`
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const columns = [
        //     {
        //       id: 'id',
        //       header: 'ID',
        //       accessor: 'id',
        //       width: '20px',
        //     },
        //     {
        //       id: 'name',
        //       header: 'Name',
        //       accessor: 'name',
        //       editor: 'text',
        //     },
        //     {
        //       id: 'status',
        //       header: 'Status',
        //       accessor: 'status',
        //       editor: 'custom',
        //       customEditorRenderer: (value, onCommit) => {
        //         const container = document.createElement('div');
        //         container.style.width = '100%';

        //         const autocomplete = document.createElement('modus-wc-autocomplete');
        //         autocomplete.items = [
        //           { label: 'Active', value: 'Active', visibleInMenu: true },
        //           { label: 'Inactive', value: 'Inactive', visibleInMenu: true },
        //           { label: 'Pending', value: 'Pending', visibleInMenu: true },
        //         ];
        //         autocomplete.value = value;
        //         autocomplete.style.width = '100%';

        //         const handleItemSelect = (e) => {
        //           onCommit(e.detail.value);
        //         };

        //         autocomplete.addEventListener(
        //           'itemSelect',
        //           handleItemSelect
        //         );
        //         container.appendChild(autocomplete);

        //         setTimeout(() => {
        //           const input = autocomplete.querySelector('input');
        //           input?.focus();
        //         }, 0);

        //         return container;
        //       },
        //       cellRenderer: (value) => {
        //         const statusColors = {
        //           Active: 'green',
        //           Inactive: 'gray',
        //           Pending: 'blue',
        //         };
        //         const color = statusColors[value] || 'black';
        //         const span = document.createElement('span');
        //         span.textContent = value;
        //         span.style.color = color;
        //         span.style.fontWeight = 'bold';
        //         return span;
        //       },
        //     },
        //     {
        //       id: 'dueDate',
        //       header: 'Due Date',
        //       accessor: 'dueDate',
        //       editor: 'custom',
        //       customEditorRenderer: (value, onCommit) => {
        //         const container = document.createElement('div');
        //         container.style.width = '100%';

        //     const datePicker = document.createElement('modus-wc-date');
        //     datePicker.value = value;
        //     datePicker.style.width = '100%';
        //     datePicker.bordered = false;

        //     let isCommitting = false;

        //     const handleKeyDown = (e) => {
        //       if (e.key === 'Enter') {
        //         e.preventDefault();
        //         const input = datePicker.querySelector('input');
        //         if (input && input.value && !isCommitting) {
        //           isCommitting = true;
        //           onCommit(input.value);
        //         }
        //       } else if (e.key === 'Escape') {
        //         e.preventDefault();
        //         if (!isCommitting) {
        //           isCommitting = true;
        //           onCommit(value || '');
        //         }
        //       } else if (e.key === 'Tab') {
        //         const input = datePicker.querySelector('input');
        //         if (input && input.value && !isCommitting) {
        //           isCommitting = true;
        //           onCommit(input.value);
        //         }
        //       }
        //     };

        //     const handleContainerBlur = (e) => {
        //       const relatedTarget = e.relatedTarget;

        //       if (relatedTarget && (container.contains(relatedTarget) || datePicker.shadowRoot?.contains(relatedTarget))) {
        //         return;
        //       }

        //       const calendar = datePicker.shadowRoot?.querySelector('[class*="calendar"]');
        //       if (calendar) {
        //         return;
        //       }

        //       const input = datePicker.querySelector('input');
        //       if (input && input.value && !isCommitting) {
        //         isCommitting = true;
        //         setTimeout(() => onCommit(input.value), 50);
        //       }
        //     };

        //     container.addEventListener('keydown', handleKeyDown);
        //     container.addEventListener('focusout', handleContainerBlur);
        //     container.appendChild(datePicker);

        //         setTimeout(() => {
        //           const input = datePicker.querySelector('input');
        //           input?.focus();
        //         }, 0);

        //         return container;
        //       },
        //       cellRenderer: (value) => {
        //         if (!value) return '-';

        //         // Parse dd-mm-yyyy format from date picker
        //         const dateString = value;
        //         const parts = dateString.split(/[-/]/);

        //         let date;
        //         if (parts.length === 3 && parts[0].length <= 2) {
        //           // Assume dd-mm-yyyy or dd/mm/yyyy format
        //           const day = parseInt(parts[0], 10);
        //           const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
        //           const year = parseInt(parts[2], 10);
        //           date = new Date(year, month, day);
        //         } else {
        //           // Fallback to default parsing
        //           date = new Date(dateString);
        //         }

        //         // Check if date is valid
        //         if (isNaN(date.getTime())) {
        //           return dateString; // Return original value if parsing fails
        //         }

        //         // Format date with dashes: dd-mm-yyyy
        //         const formattedDay = date.getDate().toString().padStart(2, '0');
        //         const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
        //         const formattedYear = date.getFullYear();

        //         return \\\`\\\${formattedDay}-\\\${formattedMonth}-\\\${formattedYear}\\\`;
        //       },
        //     },
        //   ];

        //   const data = [
        //     {
        //       id: '1',
        //       name: 'John Doe',
        //       status: 'Active',
        //       dueDate: '15-10-2025',
        //     },
        //     {
        //       id: '2',
        //       name: 'Jane Smith',
        //       status: 'Inactive',
        //       dueDate: '20-11-2025',
        //     },
        //     {
        //       id: '3',
        //       name: 'Bob Johnson',
        //       status: 'Pending',
        //       dueDate: '05-12-2025',
        //     },
        //   ];
        //   const table = document.querySelector('modus-wc-table');
        //   table.columns = columns;
        //   table.data = data;
        //   table.editable = true;
      <\/script>
    `])),t,o,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],!0,c("cellEditStart"),c("cellEditCommit"))},args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[]}};var O,M,U;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        .caption=\${args.caption}
        @rowClick=\${action('rowClick')}
        @sortChange=\${action('sortChange')}
        @paginationChange=\${action('paginationChange')}
        @rowSelectionChange=\${action('rowSelectionChange')}
        @cellEditStart=\${action('cellEditStart')}
        @cellEditCommit=\${action('cellEditCommit')}
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \\\`User \\\${i}\\\`,
        //       email: \\\`user\\\${i}@example.com\\\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData();
        // table.hover = 'false';
      <\/script>
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
}`,...(U=(M=b.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var B,N,L;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \\\`User \\\${i}\\\`,
        //       email: \\\`user\\\${i}@example.com\\\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };
        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData();
      <\/script>
    \`;
  },
  args: {
    density: 'comfortable',
    hover: true
  }
}`,...(L=(N=f.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var K,Y,F;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createSortableColumns = () => {
        //   const columns = createDemoColumns();
        //   return columns.map((col) => ({ ...col, sortable: true }));
        // };

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \\\`User \\\${i}\\\`,
        //       email: \\\`user\\\${i}@example.com\\\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createSortableColumns();
        // table.data = createDemoData();
      <\/script>
    \`;
  },
  args: {
    density: 'comfortable',
    sortable: true
  }
}`,...(F=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var j,J,V;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \\\`User \\\${i}\\\`,
        //       email: \\\`user\\\${i}@example.com\\\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData(15);
        // table.paginated = true;
      <\/script>
    \`;
  },
  args: {
    density: 'comfortable',
    paginated: true,
    'show-page-size-selector': true
  }
}`,...(V=(J=v.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var W,H,G;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \\\`User \\\${i}\\\`,
        //       email: \\\`user\\\${i}@example.com\\\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData();
        // table.selectable = 'multi';
      <\/script>
    \`;
  },
  args: {
    density: 'comfortable',
    selectable: 'multi'
  }
}`,...(G=(H=y.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var Z,Q,X;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => {
    const columns: ITableColumn[] = [{
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: '20px'
    }, {
      id: 'button',
      header: 'Button',
      accessor: 'button',
      cellRenderer: value => {
        const button = document.createElement('modus-wc-button');
        button.textContent = value as string;
        button.addEventListener('click', e => e.stopPropagation());
        return button;
      }
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
    }, {
      id: 'dueDate',
      header: 'Due Date',
      accessor: 'dueDate',
      editor: 'custom',
      customEditorRenderer: (value, onCommit) => {
        const container = document.createElement('div');
        container.style.width = '100%';
        const datePicker = document.createElement('modus-wc-date');
        datePicker.value = value as string;
        datePicker.style.width = '100%';
        datePicker.bordered = false;
        let isCommitting = false;
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            const input = datePicker.querySelector('input');
            if (input && input.value && !isCommitting) {
              isCommitting = true;
              onCommit(input.value);
            }
          } else if (e.key === 'Escape') {
            e.preventDefault();
            if (!isCommitting) {
              isCommitting = true;
              onCommit(value || '');
            }
          } else if (e.key === 'Tab') {
            // Allow Tab to commit and move to next cell
            const input = datePicker.querySelector('input');
            if (input && input.value && !isCommitting) {
              isCommitting = true;
              onCommit(input.value);
            }
          }
        };

        // Only commit when focus leaves the entire container (not just the input)
        const handleContainerBlur = (e: FocusEvent) => {
          const relatedTarget = e.relatedTarget as HTMLElement;

          // If focus is moving within the container or date picker, don't commit
          if (relatedTarget && (container.contains(relatedTarget) || datePicker.shadowRoot?.contains(relatedTarget))) {
            return;
          }
          const calendar = datePicker.shadowRoot?.querySelector('[class*="calendar"]');
          if (calendar) {
            return;
          }
          const input = datePicker.querySelector('input');
          if (input && input.value && !isCommitting) {
            isCommitting = true;
            setTimeout(() => onCommit(input.value), 50);
          }
        };
        container.addEventListener('keydown', handleKeyDown);
        container.addEventListener('focusout', handleContainerBlur);
        container.appendChild(datePicker);
        setTimeout(() => {
          const input = datePicker.querySelector('input');
          input?.focus();
        }, 0);
        return container;
      },
      cellRenderer: (value): string => {
        if (!value) return '-';

        // Parse dd-mm-yyyy format from date picker
        const dateString = value as string;
        const parts = dateString.split(/[-/]/);
        let date: Date;
        if (parts.length === 3 && parts[0].length <= 2) {
          // Assume dd-mm-yyyy or dd/mm/yyyy format
          const day = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
          const year = parseInt(parts[2], 10);
          date = new Date(year, month, day);
        } else {
          // Fallback to default parsing
          date = new Date(dateString);
        }

        // Check if date is valid
        if (isNaN(date.getTime())) {
          return dateString; // Return original value if parsing fails
        }

        // Format date with dashes: dd-mm-yyyy
        const formattedDay = date.getDate().toString().padStart(2, '0');
        const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
        const formattedYear = date.getFullYear();
        return \`\${formattedDay}-\${formattedMonth}-\${formattedYear}\`;
      }
    }];
    const data = [{
      id: '1',
      name: 'John Doe',
      button: 'Button 1',
      status: 'Active',
      dueDate: '15-10-2025'
    }, {
      id: '2',
      name: 'Jane Smith',
      button: 'Button 2',
      status: 'Inactive',
      dueDate: '20-11-2025'
    }, {
      id: '3',
      name: 'Bob Johnson',
      button: 'Click me',
      status: 'Button 3',
      dueDate: '05-12-2025'
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
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const columns = [
        //     {
        //       id: 'id',
        //       header: 'ID',
        //       accessor: 'id',
        //       width: '20px',
        //     },
        //     {
        //       id: 'name',
        //       header: 'Name',
        //       accessor: 'name',
        //       editor: 'text',
        //     },
        //     {
        //       id: 'status',
        //       header: 'Status',
        //       accessor: 'status',
        //       editor: 'custom',
        //       customEditorRenderer: (value, onCommit) => {
        //         const container = document.createElement('div');
        //         container.style.width = '100%';

        //         const autocomplete = document.createElement('modus-wc-autocomplete');
        //         autocomplete.items = [
        //           { label: 'Active', value: 'Active', visibleInMenu: true },
        //           { label: 'Inactive', value: 'Inactive', visibleInMenu: true },
        //           { label: 'Pending', value: 'Pending', visibleInMenu: true },
        //         ];
        //         autocomplete.value = value;
        //         autocomplete.style.width = '100%';

        //         const handleItemSelect = (e) => {
        //           onCommit(e.detail.value);
        //         };

        //         autocomplete.addEventListener(
        //           'itemSelect',
        //           handleItemSelect
        //         );
        //         container.appendChild(autocomplete);

        //         setTimeout(() => {
        //           const input = autocomplete.querySelector('input');
        //           input?.focus();
        //         }, 0);

        //         return container;
        //       },
        //       cellRenderer: (value) => {
        //         const statusColors = {
        //           Active: 'green',
        //           Inactive: 'gray',
        //           Pending: 'blue',
        //         };
        //         const color = statusColors[value] || 'black';
        //         const span = document.createElement('span');
        //         span.textContent = value;
        //         span.style.color = color;
        //         span.style.fontWeight = 'bold';
        //         return span;
        //       },
        //     },
        //     {
        //       id: 'dueDate',
        //       header: 'Due Date',
        //       accessor: 'dueDate',
        //       editor: 'custom',
        //       customEditorRenderer: (value, onCommit) => {
        //         const container = document.createElement('div');
        //         container.style.width = '100%';

        //     const datePicker = document.createElement('modus-wc-date');
        //     datePicker.value = value;
        //     datePicker.style.width = '100%';
        //     datePicker.bordered = false;

        //     let isCommitting = false;

        //     const handleKeyDown = (e) => {
        //       if (e.key === 'Enter') {
        //         e.preventDefault();
        //         const input = datePicker.querySelector('input');
        //         if (input && input.value && !isCommitting) {
        //           isCommitting = true;
        //           onCommit(input.value);
        //         }
        //       } else if (e.key === 'Escape') {
        //         e.preventDefault();
        //         if (!isCommitting) {
        //           isCommitting = true;
        //           onCommit(value || '');
        //         }
        //       } else if (e.key === 'Tab') {
        //         const input = datePicker.querySelector('input');
        //         if (input && input.value && !isCommitting) {
        //           isCommitting = true;
        //           onCommit(input.value);
        //         }
        //       }
        //     };

        //     const handleContainerBlur = (e) => {
        //       const relatedTarget = e.relatedTarget;

        //       if (relatedTarget && (container.contains(relatedTarget) || datePicker.shadowRoot?.contains(relatedTarget))) {
        //         return;
        //       }

        //       const calendar = datePicker.shadowRoot?.querySelector('[class*="calendar"]');
        //       if (calendar) {
        //         return;
        //       }

        //       const input = datePicker.querySelector('input');
        //       if (input && input.value && !isCommitting) {
        //         isCommitting = true;
        //         setTimeout(() => onCommit(input.value), 50);
        //       }
        //     };

        //     container.addEventListener('keydown', handleKeyDown);
        //     container.addEventListener('focusout', handleContainerBlur);
        //     container.appendChild(datePicker);

        //         setTimeout(() => {
        //           const input = datePicker.querySelector('input');
        //           input?.focus();
        //         }, 0);

        //         return container;
        //       },
        //       cellRenderer: (value) => {
        //         if (!value) return '-';

        //         // Parse dd-mm-yyyy format from date picker
        //         const dateString = value;
        //         const parts = dateString.split(/[-/]/);

        //         let date;
        //         if (parts.length === 3 && parts[0].length <= 2) {
        //           // Assume dd-mm-yyyy or dd/mm/yyyy format
        //           const day = parseInt(parts[0], 10);
        //           const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
        //           const year = parseInt(parts[2], 10);
        //           date = new Date(year, month, day);
        //         } else {
        //           // Fallback to default parsing
        //           date = new Date(dateString);
        //         }

        //         // Check if date is valid
        //         if (isNaN(date.getTime())) {
        //           return dateString; // Return original value if parsing fails
        //         }

        //         // Format date with dashes: dd-mm-yyyy
        //         const formattedDay = date.getDate().toString().padStart(2, '0');
        //         const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
        //         const formattedYear = date.getFullYear();

        //         return \\\`\\\${formattedDay}-\\\${formattedMonth}-\\\${formattedYear}\\\`;
        //       },
        //     },
        //   ];

        //   const data = [
        //     {
        //       id: '1',
        //       name: 'John Doe',
        //       status: 'Active',
        //       dueDate: '15-10-2025',
        //     },
        //     {
        //       id: '2',
        //       name: 'Jane Smith',
        //       status: 'Inactive',
        //       dueDate: '20-11-2025',
        //     },
        //     {
        //       id: '3',
        //       name: 'Bob Johnson',
        //       status: 'Pending',
        //       dueDate: '05-12-2025',
        //     },
        //   ];
        //   const table = document.querySelector('modus-wc-table');
        //   table.columns = columns;
        //   table.data = data;
        //   table.editable = true;
      <\/script>
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
    'selected-row-ids': []
  }
}`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ge=["Default","Hover","Sorting","Pagination","CheckBoxRowSelection","InlineEditing"];export{y as CheckBoxRowSelection,b as Default,f as Hover,C as InlineEditing,v as Pagination,w as Sorting,ge as __namedExportsOrder,he as default};
