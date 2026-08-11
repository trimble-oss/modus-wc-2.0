import"./index-SE3If525.js";import{b as m}from"./lit-element-DgBvYnzn.js";import{c as ie}from"./shadow-host-helper-A4Nvcs5e.js";import{b as r}from"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var P=Object.freeze,le=Object.defineProperty,p=(e,a)=>P(le(e,"raw",{value:P(a||e.slice())})),R,x,T,A,L,q,M;const we={title:"Components/Table",component:"modus-wc-table",args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[],editable:!1},argTypes:{columns:{control:"object",description:"An array of column definitions.",table:{type:{detail:`
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
          `}}},density:{control:{type:"select"},options:["condensed","comfortable","relaxed"],description:"The density of the table, used to save space or increase readability."},hover:{control:"boolean",description:"Enable hover effect on table rows.",defaultValue:!0},sortable:{control:"boolean",description:"Enable sorting functionality for sortable columns.",defaultValue:!0},paginated:{control:"boolean",description:"Enable pagination for the table.",defaultValue:!1},"show-page-size-selector":{control:"boolean",description:"Show/hide the page size selector in pagination.",defaultValue:!0},caption:{control:"text",description:"Accessibility caption for the table that is visually hidden but available to screen readers."},"custom-class":{control:"text",description:"Custom CSS class to apply to the inner div."},selectable:{control:{type:"select"},options:["none","single","multi"],description:"Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows.",defaultValue:"none"},zebra:{control:"boolean",description:"Zebra striped tables differentiate rows by styling them in an alternating fashion.",defaultValue:!1},"current-page":{control:"number",description:"The current page number in pagination (1-based index).",defaultValue:1},"page-size-options":{control:"object",description:"Available options for the number of rows per page.",defaultValue:[5,10,15]},"selected-row-ids":{control:"object",description:"Array of selected row IDs. Used for controlled selection state.",defaultValue:[]},editable:{control:"boolean",description:"Enable cell editing. Either a boolean (all rows) or a predicate per row.",defaultValue:!1},"is-row-selectable":{control:!1,description:"Per-row predicate function controlling row selection eligibility.",table:{type:{summary:"(row: Record<string, unknown>) => boolean"}}}}},b=()=>[{id:"id",header:"ID",accessor:"id",width:"60px"},{id:"name",header:"Name",accessor:"name",width:"100px"},{id:"email",header:"Email",accessor:"email"},{id:"role",header:"Role",accessor:"role"}],ce=()=>b().map(a=>({...a,sortable:!0})),h=(e=5)=>{const a=[];for(let n=1;n<=e;n++)a.push({id:n.toString(),name:`User ${n}`,email:`user${n}@example.com`,role:n%2===0?"Admin":"User"});return a},de=()=>[{id:"id",header:"ID",accessor:"id",width:"60px"},{id:"name",header:"Name",accessor:"name",width:"140px"},{id:"email",header:"Email",accessor:"email"},{id:"status",header:"Status",accessor:"status",width:"120px",cellRenderer:e=>{const a=document.createElement("span"),n=typeof e=="string"?e:"";return a.textContent=n,a.style.fontWeight=n==="Locked"?"600":"400",a.style.color=n==="Locked"?"var(--modus-wc-color-danger, #da212c)":"var(--modus-wc-color-base-content, inherit)",a}}],ue=()=>[{id:"1",name:"John Doe",email:"john.doe@example.com",status:"Active"},{id:"2",name:"Jane Smith",email:"jane.smith@example.com",status:"Locked"},{id:"3",name:"Bob Johnson",email:"bob.johnson@example.com",status:"Active"},{id:"4",name:"Carol White",email:"carol.white@example.com",status:"Locked"},{id:"5",name:"David Lee",email:"david.lee@example.com",status:"Active"}],g={render:e=>{const a=e.columns||b(),n=e.data||h();return m(R||(R=p([`
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
    `])),a,n,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,e.caption,r("rowClick"),r("sortChange"),r("paginationChange"),r("rowSelectionChange"),r("cellEditStart"),r("cellEditCommit"))},args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[],editable:!1}},w={render:e=>{const a=e.columns||b(),n=e.data||h();return m(x||(x=p([`
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
    `])),a,n,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,r("rowClick"))},args:{density:"comfortable",hover:!0}},v={render:e=>{const a=e.columns||ce(),n=e.data||h();return m(T||(T=p([`
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
    `])),a,n,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,r("sortChange"))},args:{density:"comfortable",sortable:!0}},f={render:e=>{const a=e.columns||b(),n=e.data||h(15);return m(A||(A=p([`
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
    `])),a,n,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,r("paginationChange"))},args:{density:"comfortable",paginated:!0,"show-page-size-selector":!0}},y={render:e=>{const a=e.columns||b(),n=e.data||h();return m(L||(L=p([`
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
    `])),a,n,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,r("rowSelectionChange"))},args:{density:"comfortable",selectable:"multi"}},S={render:e=>{const a=de(),n=ue(),s=[{label:"Active",value:"Active"},{label:"Locked",value:"Locked"}];return m(q||(q=p([`
      <style>
        .partial-select {
          margin-bottom: var(--modus-wc-size-xl);
          max-width: fit-content;
        }
      </style>
      <modus-wc-select
        custom-class="partial-select"
        id="partial-row-status-select"
        label="Non-selectable rows"
        .options=`,`
        value="Locked"
      ></modus-wc-select>
      <modus-wc-table
        id="partial-row-selection-table"
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
        caption="Team members with partial row selection"
        @rowClick=`,`
        @rowSelectionChange=`,`
      ></modus-wc-table>
      <script>
        (() => {
          const select = document.getElementById('partial-row-status-select');
          const table = document.getElementById('partial-row-selection-table');
          if (!select || !table) {
            return;
          }

          const applyIsRowSelectable = () => {
            const status = select.value || 'Locked';
            table.isRowSelectable = (row) => row.status !== status;
          };

          select.addEventListener('inputChange', applyIsRowSelectable);
          applyIsRowSelectable();
        })();
      <\/script>
    `])),s,a,n,e.density,e.hover??!0,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],r("rowClick"),r("rowSelectionChange"))},parameters:{controls:{include:["selectable","selected-row-ids","density","hover","sortable","zebra"]},docs:{description:{story:"\nUse `isRowSelectable` to control which rows can be selected when `selectable` is `single` or `multi`.\n\n**Type:** `(row: Record<string, unknown>) => boolean`\n\n**Default:** All rows are selectable when the prop is omitted.\n\n**Usage:**\n\n```js\ntable.isRowSelectable = (row) => row.status !== 'Locked';\n```\n\nReturn `true` when the row may be selected; return `false` to disable its selection checkbox. Ineligible rows stay interactive—cell clicks and `rowClick` still work, but row clicks do not toggle selection. Select-all and `selectedRowIds` ignore ineligible rows automatically.\n\nStorybook Controls cannot edit function props, so this story uses a **Non-selectable status** dropdown to pick which status is excluded (`Active` or `Locked`). That maps to:\n\n```js\nisRowSelectable = (row) => row.status !== selectedStatus;\n```\n\nUse Controls for **selectable** mode and **selected-row-ids**.\n        "}}},args:{density:"comfortable",hover:!0,sortable:!0,paginated:!1,selectable:"multi"}},C={render:e=>{const a=[{id:"id",header:"ID",accessor:"id",width:"20px"},{id:"name",header:"Name",accessor:"name"},{id:"status",header:"Status",accessor:"status",editor:"custom",customEditorRenderer:(s,o)=>{const i=document.createElement("div");i.style.width="100%";const t=document.createElement("modus-wc-autocomplete");t.items=[{label:"Active",value:"Active",visibleInMenu:!0},{label:"Inactive",value:"Inactive",visibleInMenu:!0},{label:"Pending",value:"Pending",visibleInMenu:!0}],t.value=s,t.style.width="100%";const d=u=>{o(u.detail.value)};return t.addEventListener("itemSelect",d),i.appendChild(t),setTimeout(()=>{const u=t.querySelector("input");u==null||u.focus()},0),i},cellRenderer:s=>{const i={Active:"green",Inactive:"gray",Pending:"blue"}[s]||"black",t=document.createElement("span");return t.textContent=s,t.style.color=i,t.style.fontWeight="bold",t}},{id:"dueDate",header:"Due Date",accessor:"dueDate",editor:"custom",customEditorRenderer:(s,o)=>{const i=document.createElement("div");i.style.width="100%";const t=document.createElement("modus-wc-date");t.value=s,t.style.width="100%",t.bordered=!1;let d=!1;const u=l=>{if(l.key==="Enter"){l.preventDefault();const c=t.querySelector("input");c&&c.value&&!d&&(d=!0,o(c.value))}else if(l.key==="Escape")l.preventDefault(),d||(d=!0,o(s||""));else if(l.key==="Tab"){const c=t.querySelector("input");c&&c.value&&!d&&(d=!0,o(c.value))}},E=l=>{var k,I;const c=l.relatedTarget;if(c&&(i.contains(c)||(k=t.shadowRoot)!=null&&k.contains(c))||((I=t.shadowRoot)==null?void 0:I.querySelector('[class*="calendar"]')))return;const $=t.querySelector("input");$&&$.value&&!d&&(d=!0,setTimeout(()=>o($.value),50))};return i.addEventListener("keydown",u),i.addEventListener("focusout",E),i.appendChild(t),setTimeout(()=>{const l=t.querySelector("input");l==null||l.focus()},0),i},cellRenderer:s=>{if(!s)return"-";const o=s,i=o.split(/[-/]/);let t;if(i.length===3&&i[0].length<=2){const l=parseInt(i[0],10),c=parseInt(i[1],10)-1,z=parseInt(i[2],10);t=new Date(z,c,l)}else t=new Date(o);if(isNaN(t.getTime()))return o;const d=t.getDate().toString().padStart(2,"0"),u=(t.getMonth()+1).toString().padStart(2,"0"),E=t.getFullYear();return`${d}-${u}-${E}`}}],n=[{id:"1",name:"John Doe",status:"Active",dueDate:"15-10-2025"},{id:"2",name:"Jane Smith",status:"Inactive",dueDate:"20-11-2025"},{id:"3",name:"Bob Johnson",status:"Pending",dueDate:"05-12-2025"}];return m(M||(M=p([`
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
    `])),a,n,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],!0,r("cellEditStart"),r("cellEditCommit"))},args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[]}},D={render:e=>{if(!customElements.get("table-shadow-host")){const a=ie({componentTag:"modus-wc-table",propsMapper:(n,s)=>{const o=s;o.caption=n.caption??"",o.columns=n.columns??b(),o.currentPage=n["current-page"]??1,o.data=n.data??h(),o.customClass=n["custom-class"]||"",o.density=n.density??"comfortable",o.editable=!!n.editable,o.hover=!!n.hover,o.paginated=!!n.paginated,o.pageSizeOptions=n["page-size-options"]??[5,10,15],o.selectable=n.selectable??"none",o.selectedRowIds=n["selected-row-ids"]??[],o.showPageSizeSelector=n["show-page-size-selector"]!==!1,o.sortable=!!n.sortable,o.zebra=!!n.zebra,s.dataset.eventsWired||(s.addEventListener("rowClick",r("rowClick")),s.addEventListener("sortChange",r("sortChange")),s.addEventListener("paginationChange",r("paginationChange")),s.addEventListener("rowSelectionChange",r("rowSelectionChange")),s.addEventListener("cellEditStart",r("cellEditStart")),s.addEventListener("cellEditCommit",r("cellEditCommit")),s.dataset.eventsWired="true")}});customElements.define("table-shadow-host",a)}return m`<table-shadow-host .props=${{...e}}></table-shadow-host>`}};var U,N,B;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(B=(N=g.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var O,j,J;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(J=(j=w.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var _,F,W;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(F=v.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var Y,H,K;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(K=(H=f.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var V,Z,G;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var Q,X,ee;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    const columns = createStatusColumns();
    const data = createStatusSelectionData();
    const statusOptions = [{
      label: 'Active',
      value: 'Active'
    }, {
      label: 'Locked',
      value: 'Locked'
    }];
    return html\`
      <style>
        .partial-select {
          margin-bottom: var(--modus-wc-size-xl);
          max-width: fit-content;
        }
      </style>
      <modus-wc-select
        custom-class="partial-select"
        id="partial-row-status-select"
        label="Non-selectable rows"
        .options=\${statusOptions}
        value="Locked"
      ></modus-wc-select>
      <modus-wc-table
        id="partial-row-selection-table"
        .columns=\${columns}
        .data=\${data}
        .density=\${args.density}
        .hover=\${args.hover ?? true}
        .sortable=\${args.sortable}
        .paginated=\${args.paginated}
        .showPageSizeSelector=\${args['show-page-size-selector']}
        .customClass=\${args['custom-class']}
        .selectable=\${args.selectable}
        .zebra=\${args.zebra}
        .currentPage=\${args['current-page']}
        .pageSizeOptions=\${args['page-size-options']}
        .selectedRowIds=\${args['selected-row-ids']}
        caption="Team members with partial row selection"
        @rowClick=\${action('rowClick')}
        @rowSelectionChange=\${action('rowSelectionChange')}
      ></modus-wc-table>
      <script>
        (() => {
          const select = document.getElementById('partial-row-status-select');
          const table = document.getElementById('partial-row-selection-table');
          if (!select || !table) {
            return;
          }

          const applyIsRowSelectable = () => {
            const status = select.value || 'Locked';
            table.isRowSelectable = (row) => row.status !== status;
          };

          select.addEventListener('inputChange', applyIsRowSelectable);
          applyIsRowSelectable();
        })();
      <\/script>
    \`;
  },
  parameters: {
    controls: {
      include: ['selectable', 'selected-row-ids', 'density', 'hover', 'sortable', 'zebra']
    },
    docs: {
      description: {
        story: \`
Use \\\`isRowSelectable\\\` to control which rows can be selected when \\\`selectable\\\` is \\\`single\\\` or \\\`multi\\\`.

**Type:** \\\`(row: Record<string, unknown>) => boolean\\\`

**Default:** All rows are selectable when the prop is omitted.

**Usage:**

\\\`\\\`\\\`js
table.isRowSelectable = (row) => row.status !== 'Locked';
\\\`\\\`\\\`

Return \\\`true\\\` when the row may be selected; return \\\`false\\\` to disable its selection checkbox. Ineligible rows stay interactive—cell clicks and \\\`rowClick\\\` still work, but row clicks do not toggle selection. Select-all and \\\`selectedRowIds\\\` ignore ineligible rows automatically.

Storybook Controls cannot edit function props, so this story uses a **Non-selectable status** dropdown to pick which status is excluded (\\\`Active\\\` or \\\`Locked\\\`). That maps to:

\\\`\\\`\\\`js
isRowSelectable = (row) => row.status !== selectedStatus;
\\\`\\\`\\\`

Use Controls for **selectable** mode and **selected-row-ids**.
        \`
      }
    }
  },
  args: {
    density: 'comfortable',
    hover: true,
    sortable: true,
    paginated: false,
    selectable: 'multi'
  }
}`,...(ee=(X=S.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ne,te,ae;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => {
    const columns: ITableColumn[] = [{
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: '20px'
    }, {
      id: 'name',
      header: 'Name',
      accessor: 'name'
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
      status: 'Active',
      dueDate: '15-10-2025'
    }, {
      id: '2',
      name: 'Jane Smith',
      status: 'Inactive',
      dueDate: '20-11-2025'
    }, {
      id: '3',
      name: 'Bob Johnson',
      status: 'Pending',
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
}`,...(ae=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,se,re;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('table-shadow-host')) {
      const TableShadowHost = createShadowHostClass<TableStoryArgs>({
        componentTag: 'modus-wc-table',
        propsMapper: (v: TableStoryArgs, el: HTMLElement) => {
          const tableEl = el as unknown as {
            caption: string;
            columns: ITableColumn[];
            currentPage: number;
            data: Record<string, unknown>[];
            customClass: string;
            density: string;
            editable: boolean;
            hover: boolean;
            paginated: boolean;
            pageSizeOptions: number[];
            selectable: string;
            selectedRowIds: string[];
            showPageSizeSelector: boolean;
            sortable: boolean;
            zebra: boolean;
          };
          tableEl.caption = v.caption ?? '';
          tableEl.columns = v.columns ?? createDemoColumns();
          tableEl.currentPage = v['current-page'] ?? 1;
          tableEl.data = v.data ?? createDemoData();
          tableEl.customClass = v['custom-class'] || '';
          tableEl.density = v.density ?? 'comfortable';
          tableEl.editable = Boolean(v.editable);
          tableEl.hover = Boolean(v.hover);
          tableEl.paginated = Boolean(v.paginated);
          tableEl.pageSizeOptions = v['page-size-options'] ?? [5, 10, 15];
          tableEl.selectable = v.selectable ?? 'none';
          tableEl.selectedRowIds = v['selected-row-ids'] ?? [];
          tableEl.showPageSizeSelector = v['show-page-size-selector'] !== false;
          tableEl.sortable = Boolean(v.sortable);
          tableEl.zebra = Boolean(v.zebra);
          // Wire events once — Stencil events don't bubble out of shadow root
          if (!el.dataset['eventsWired']) {
            el.addEventListener('rowClick', action('rowClick'));
            el.addEventListener('sortChange', action('sortChange'));
            el.addEventListener('paginationChange', action('paginationChange'));
            el.addEventListener('rowSelectionChange', action('rowSelectionChange'));
            el.addEventListener('cellEditStart', action('cellEditStart'));
            el.addEventListener('cellEditCommit', action('cellEditCommit'));
            el.dataset['eventsWired'] = 'true';
          }
        }
      });
      customElements.define('table-shadow-host', TableShadowHost);
    }
    return html\`<table-shadow-host .props=\${{
      ...args
    }}></table-shadow-host>\`;
  }
}`,...(re=(se=D.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const ve=["Default","Hover","Sorting","Pagination","CheckBoxRowSelection","PartialRowSelection","InlineEditing","ShadowDomParent"];export{y as CheckBoxRowSelection,g as Default,w as Hover,C as InlineEditing,f as Pagination,S as PartialRowSelection,D as ShadowDomParent,v as Sorting,ve as __namedExportsOrder,we as default};
