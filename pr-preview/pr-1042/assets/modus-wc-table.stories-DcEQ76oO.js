import"./index-CK-iu89z.js";import{x as m}from"./lit-element-CucEn6F2.js";import{c as te}from"./shadow-host-helper-A4Nvcs5e.js";import{b as d}from"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var I=Object.freeze,ae=Object.defineProperty,p=(e,o)=>I(ae(e,"raw",{value:I(o||e.slice())})),k,T,x,R,A,q;const de={title:"Components/Table",component:"modus-wc-table",argTypes:{columns:{control:"object",description:"An array of column definitions.",table:{type:{detail:`
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
          `}}},density:{control:{type:"select"},options:["condensed","comfortable","relaxed"],description:"The density of the table, used to save space or increase readability."},hover:{control:"boolean",description:"Enable hover effect on table rows.",defaultValue:!0},sortable:{control:"boolean",description:"Enable sorting functionality for sortable columns.",defaultValue:!0},paginated:{control:"boolean",description:"Enable pagination for the table.",defaultValue:!1},"show-page-size-selector":{control:"boolean",description:"Show/hide the page size selector in pagination.",defaultValue:!0},caption:{control:"text",description:"Accessibility caption for the table that is visually hidden but available to screen readers."},"custom-class":{control:"text",description:"Custom CSS class to apply to the inner div."},selectable:{control:{type:"select"},options:["none","single","multi"],description:"Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows.",defaultValue:"none"},zebra:{control:"boolean",description:"Zebra striped tables differentiate rows by styling them in an alternating fashion.",defaultValue:!1},"current-page":{control:"number",description:"The current page number in pagination (1-based index).",defaultValue:1},"page-size-options":{control:"object",description:"Available options for the number of rows per page.",defaultValue:[5,10,15]},"selected-row-ids":{control:"object",description:"Array of selected row IDs. Used for controlled selection state.",defaultValue:[]},editable:{control:"boolean",description:"Enable cell editing. Either a boolean (all rows) or a predicate per row.",defaultValue:!1}}},h=()=>[{id:"id",header:"ID",accessor:"id",width:"60px"},{id:"name",header:"Name",accessor:"name",width:"100px"},{id:"email",header:"Email",accessor:"email"},{id:"role",header:"Role",accessor:"role"}],oe=()=>h().map(o=>({...o,sortable:!0})),b=(e=5)=>{const o=[];for(let t=1;t<=e;t++)o.push({id:t.toString(),name:`User ${t}`,email:`user${t}@example.com`,role:t%2===0?"Admin":"User"});return o},g={render:e=>{const o=e.columns||h(),t=e.data||b();return m(k||(k=p([`
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
    `])),o,t,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,e.caption,d("rowClick"),d("sortChange"),d("paginationChange"),d("rowSelectionChange"),d("cellEditStart"),d("cellEditCommit"))},args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[],editable:!1}},w={render:e=>{const o=e.columns||h(),t=e.data||b();return m(T||(T=p([`
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
    `])),o,t,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,d("rowClick"))},args:{density:"comfortable",hover:!0}},f={render:e=>{const o=e.columns||oe(),t=e.data||b();return m(x||(x=p([`
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
    `])),o,t,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,d("sortChange"))},args:{density:"comfortable",sortable:!0}},v={render:e=>{const o=e.columns||h(),t=e.data||b(15);return m(R||(R=p([`
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
    `])),o,t,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,d("paginationChange"))},args:{density:"comfortable",paginated:!0,"show-page-size-selector":!0}},y={render:e=>{const o=e.columns||h(),t=e.data||b();return m(A||(A=p([`
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
    `])),o,t,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,d("rowSelectionChange"))},args:{density:"comfortable",selectable:"multi"}},S={render:e=>{const o=[{id:"id",header:"ID",accessor:"id",width:"20px"},{id:"name",header:"Name",accessor:"name"},{id:"status",header:"Status",accessor:"status",editor:"custom",customEditorRenderer:(c,a)=>{const s=document.createElement("div");s.style.width="100%";const n=document.createElement("modus-wc-autocomplete");n.items=[{label:"Active",value:"Active",visibleInMenu:!0},{label:"Inactive",value:"Inactive",visibleInMenu:!0},{label:"Pending",value:"Pending",visibleInMenu:!0}],n.value=c,n.style.width="100%";const l=u=>{a(u.detail.value)};return n.addEventListener("itemSelect",l),s.appendChild(n),setTimeout(()=>{const u=n.querySelector("input");u==null||u.focus()},0),s},cellRenderer:c=>{const s={Active:"green",Inactive:"gray",Pending:"blue"}[c]||"black",n=document.createElement("span");return n.textContent=c,n.style.color=s,n.style.fontWeight="bold",n}},{id:"dueDate",header:"Due Date",accessor:"dueDate",editor:"custom",customEditorRenderer:(c,a)=>{const s=document.createElement("div");s.style.width="100%";const n=document.createElement("modus-wc-date");n.value=c,n.style.width="100%",n.bordered=!1;let l=!1;const u=r=>{if(r.key==="Enter"){r.preventDefault();const i=n.querySelector("input");i&&i.value&&!l&&(l=!0,a(i.value))}else if(r.key==="Escape")r.preventDefault(),l||(l=!0,a(c||""));else if(r.key==="Tab"){const i=n.querySelector("input");i&&i.value&&!l&&(l=!0,a(i.value))}},D=r=>{var z,P;const i=r.relatedTarget;if(i&&(s.contains(i)||(z=n.shadowRoot)!=null&&z.contains(i))||((P=n.shadowRoot)==null?void 0:P.querySelector('[class*="calendar"]')))return;const $=n.querySelector("input");$&&$.value&&!l&&(l=!0,setTimeout(()=>a($.value),50))};return s.addEventListener("keydown",u),s.addEventListener("focusout",D),s.appendChild(n),setTimeout(()=>{const r=n.querySelector("input");r==null||r.focus()},0),s},cellRenderer:c=>{if(!c)return"-";const a=c,s=a.split(/[-/]/);let n;if(s.length===3&&s[0].length<=2){const r=parseInt(s[0],10),i=parseInt(s[1],10)-1,E=parseInt(s[2],10);n=new Date(E,i,r)}else n=new Date(a);if(isNaN(n.getTime()))return a;const l=n.getDate().toString().padStart(2,"0"),u=(n.getMonth()+1).toString().padStart(2,"0"),D=n.getFullYear();return`${l}-${u}-${D}`}}],t=[{id:"1",name:"John Doe",status:"Active",dueDate:"15-10-2025"},{id:"2",name:"Jane Smith",status:"Inactive",dueDate:"20-11-2025"},{id:"3",name:"Bob Johnson",status:"Pending",dueDate:"05-12-2025"}];return m(q||(q=p([`
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
    `])),o,t,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],!0,d("cellEditStart"),d("cellEditCommit"))},args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[]}},C={render:e=>{if(!customElements.get("table-shadow-host")){const o=te({componentTag:"modus-wc-table",propsMapper:(t,c)=>{const a=c;a.columns=t.columns??h(),a.data=t.data??b(),a.customClass=t["custom-class"]||"",a.density=t.density??"comfortable",a.hover=!!t.hover,a.paginated=!!t.paginated,a.selectable=t.selectable??"none",a.sortable=!!t.sortable,a.zebra=!!t.zebra}});customElements.define("table-shadow-host",o)}return m`<table-shadow-host .props=${{...e}}></table-shadow-host>`}};var M,U,N;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(U=g.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var B,O,L;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(O=w.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var J,F,Y;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(F=f.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};var _,j,H;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(H=(j=v.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var K,V,W;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(V=y.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var Z,G,Q;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(Q=(G=S.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,ee,ne;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('table-shadow-host')) {
      const TableShadowHost = createShadowHostClass<TableStoryArgs>({
        componentTag: 'modus-wc-table',
        propsMapper: (v: TableStoryArgs, el: HTMLElement) => {
          const tableEl = el as unknown as {
            columns: ITableColumn[];
            data: Record<string, unknown>[];
            customClass: string;
            density: string;
            hover: boolean;
            paginated: boolean;
            selectable: string;
            sortable: boolean;
            zebra: boolean;
          };
          tableEl.columns = v.columns ?? createDemoColumns();
          tableEl.data = v.data ?? createDemoData();
          tableEl.customClass = v['custom-class'] || '';
          tableEl.density = v.density ?? 'comfortable';
          tableEl.hover = Boolean(v.hover);
          tableEl.paginated = Boolean(v.paginated);
          tableEl.selectable = v.selectable ?? 'none';
          tableEl.sortable = Boolean(v.sortable);
          tableEl.zebra = Boolean(v.zebra);
        }
      });
      customElements.define('table-shadow-host', TableShadowHost);
    }
    return html\`<table-shadow-host .props=\${{
      ...args
    }}></table-shadow-host>\`;
  }
}`,...(ne=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const ue=["Default","Hover","Sorting","Pagination","CheckBoxRowSelection","InlineEditing","ShadowDomParent"];export{y as CheckBoxRowSelection,g as Default,w as Hover,S as InlineEditing,v as Pagination,C as ShadowDomParent,f as Sorting,ue as __namedExportsOrder,de as default};
