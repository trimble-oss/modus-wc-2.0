import{_ as F,b as i}from"./chunk-4XZ63LWV-CnYBn8W6.js";import{x as d}from"./lit-element-C8zulti1.js";import"./v4-CtRu48qb.js";const{definePreview:ce}=__STORYBOOK_MODULE_PREVIEW_API__,{global:f}=__STORYBOOK_MODULE_GLOBAL__;var G={};F(G,{argsEnhancers:()=>X,loaders:()=>ne});var K=(e,n)=>typeof n[e]>"u"&&!(e in n),Z=e=>{let{initialArgs:n,argTypes:a,id:s,parameters:{actions:r}}=e;if(!r||r.disable||!r.argTypesRegex||!a)return{};let o=new RegExp(r.argTypesRegex);return Object.entries(a).filter(([t])=>!!o.test(t)).reduce((t,[l,c])=>(K(l,n)&&(t[l]=i(l,{implicit:!0,id:s})),t),{})},Q=e=>{let{initialArgs:n,argTypes:a,parameters:{actions:s}}=e;return s!=null&&s.disable||!a?{}:Object.entries(a).filter(([r,o])=>!!o.action).reduce((r,[o,t])=>(K(o,n)&&(r[o]=i(typeof t.action=="string"?t.action:o)),r),{})},X=[Q,Z],D=!1,ee=e=>{let{parameters:{actions:n}}=e;if(!(n!=null&&n.disable)&&!D&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in f&&typeof f.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let a=f.__STORYBOOK_TEST_ON_MOCK_CALL__;a((s,r)=>{let o=s.getMockName();o!=="spy"&&(!/^next\/.*::/.test(o)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(t=>o.startsWith(t)))&&i(o)(r)}),D=!0}},ne=[ee],y=Object.freeze,te=Object.defineProperty,u=(e,n)=>y(te(e,"raw",{value:y(n||e.slice())})),S,$,E,I,R,z;const le={title:"Components/Table",component:"modus-wc-table",argTypes:{columns:{control:"object",description:"An array of column definitions.",table:{type:{detail:`
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
          `}}},density:{control:{type:"select"},options:["condensed","comfortable","relaxed"],description:"The density of the table, used to save space or increase readability."},hover:{control:"boolean",description:"Enable hover effect on table rows.",defaultValue:!0},sortable:{control:"boolean",description:"Enable sorting functionality for sortable columns.",defaultValue:!0},paginated:{control:"boolean",description:"Enable pagination for the table.",defaultValue:!1},"show-page-size-selector":{control:"boolean",description:"Show/hide the page size selector in pagination.",defaultValue:!0},caption:{control:"text",description:"Accessibility caption for the table that is visually hidden but available to screen readers."},"custom-class":{control:"text",description:"Custom CSS class to apply to the inner div."},selectable:{control:{type:"select"},options:["none","single","multi"],description:"Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows.",defaultValue:"none"},zebra:{control:"boolean",description:"Zebra striped tables differentiate rows by styling them in an alternating fashion.",defaultValue:!1},"current-page":{control:"number",description:"The current page number in pagination (1-based index).",defaultValue:1},"page-size-options":{control:"object",description:"Available options for the number of rows per page.",defaultValue:[5,10,15]},"selected-row-ids":{control:"object",description:"Array of selected row IDs. Used for controlled selection state.",defaultValue:[]},editable:{control:"boolean",description:"Enable cell editing. Either a boolean (all rows) or a predicate per row.",defaultValue:!1}}},m=()=>[{id:"id",header:"ID",accessor:"id",width:"60px"},{id:"name",header:"Name",accessor:"name",width:"100px"},{id:"email",header:"Email",accessor:"email"},{id:"role",header:"Role",accessor:"role"}],ae=()=>m().map(n=>({...n,sortable:!0})),p=(e=5)=>{const n=[];for(let a=1;a<=e;a++)n.push({id:a.toString(),name:`User ${a}`,email:`user${a}@example.com`,role:a%2===0?"Admin":"User"});return n},g={render:e=>{const n=e.columns||m(),a=e.data||p();return d(S||(S=u([`
      <script>
            // Helper functions
        const createDemoColumns = (): ITableColumn[] => [
          {
            id: 'id',
            header: 'ID',
            accessor: 'id',
            width: '60px',
          },
          {
            id: 'name',
            header: 'Name',
            accessor: 'name',
            width: '100px',
          },
          {
            id: 'email',
            header: 'Email',
            accessor: 'email',
          },
          {
            id: 'role',
            header: 'Role',
            accessor: 'role',
          },
        ];

        const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \`User \${i}\`,
              email: \`user\${i}@example.com\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
      <\/script>
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
    `],[`
      <script>
            // Helper functions
        const createDemoColumns = (): ITableColumn[] => [
          {
            id: 'id',
            header: 'ID',
            accessor: 'id',
            width: '60px',
          },
          {
            id: 'name',
            header: 'Name',
            accessor: 'name',
            width: '100px',
          },
          {
            id: 'email',
            header: 'Email',
            accessor: 'email',
          },
          {
            id: 'role',
            header: 'Role',
            accessor: 'role',
          },
        ];

        const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \\\`User \\\${i}\\\`,
              email: \\\`user\\\${i}@example.com\\\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
      <\/script>
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
    `])),n,a,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,e.caption,i("rowClick"),i("sortChange"),i("paginationChange"),i("rowSelectionChange"),i("cellEditStart"),i("cellEditCommit"))},args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[],editable:!1}},h={render:e=>{const n=e.columns||m(),a=e.data||p();return d($||($=u([`
      <script>
        // Helper functions
        const createDemoColumns = (): ITableColumn[] => [
          {
            id: 'id',
            header: 'ID',
            accessor: 'id',
            width: '60px',
          },
          {
            id: 'name',
            header: 'Name',
            accessor: 'name',
            width: '100px',
          },
          {
            id: 'email',
            header: 'Email',
            accessor: 'email',
          },
          {
            id: 'role',
            header: 'Role',
            accessor: 'role',
          },
        ];

        const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \`User \${i}\`,
              email: \`user\${i}@example.com\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
      <\/script>
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
    `],[`
      <script>
        // Helper functions
        const createDemoColumns = (): ITableColumn[] => [
          {
            id: 'id',
            header: 'ID',
            accessor: 'id',
            width: '60px',
          },
          {
            id: 'name',
            header: 'Name',
            accessor: 'name',
            width: '100px',
          },
          {
            id: 'email',
            header: 'Email',
            accessor: 'email',
          },
          {
            id: 'role',
            header: 'Role',
            accessor: 'role',
          },
        ];

        const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \\\`User \\\${i}\\\`,
              email: \\\`user\\\${i}@example.com\\\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
      <\/script>
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
    `])),n,a,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,i("rowClick"))},args:{density:"comfortable",hover:!0}},b={render:e=>{const n=e.columns||ae(),a=e.data||p();return d(E||(E=u([`
      <script>
        // Helper functions
        const createDemoColumns = (): ITableColumn[] => [
          {
            id: 'id',
            header: 'ID',
            accessor: 'id',
            width: '60px',
          },
          {
            id: 'name',
            header: 'Name',
            accessor: 'name',
            width: '100px',
          },
          {
            id: 'email',
            header: 'Email',
            accessor: 'email',
          },
          {
            id: 'role',
            header: 'Role',
            accessor: 'role',
          },
        ];

        const createSortableColumns = (): ITableColumn[] => {
          const columns = createDemoColumns();
          return columns.map((col) => ({ ...col, sortable: true }));
        };

        const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \`User \${i}\`,
              email: \`user\${i}@example.com\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
      <\/script>
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
    `],[`
      <script>
        // Helper functions
        const createDemoColumns = (): ITableColumn[] => [
          {
            id: 'id',
            header: 'ID',
            accessor: 'id',
            width: '60px',
          },
          {
            id: 'name',
            header: 'Name',
            accessor: 'name',
            width: '100px',
          },
          {
            id: 'email',
            header: 'Email',
            accessor: 'email',
          },
          {
            id: 'role',
            header: 'Role',
            accessor: 'role',
          },
        ];

        const createSortableColumns = (): ITableColumn[] => {
          const columns = createDemoColumns();
          return columns.map((col) => ({ ...col, sortable: true }));
        };

        const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \\\`User \\\${i}\\\`,
              email: \\\`user\\\${i}@example.com\\\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
      <\/script>
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
    `])),n,a,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,i("sortChange"))},args:{density:"comfortable",sortable:!0}},w={render:e=>{const n=e.columns||m(),a=e.data||p(15);return d(I||(I=u([`
      <script>
            // Helper functions
            const createDemoColumns = (): ITableColumn[] => [
              {
                id: 'id',
                header: 'ID',
                accessor: 'id',
                width: '60px',
              },
              {
                id: 'name',
                header: 'Name',
                accessor: 'name',
                width: '100px',
              },
              {
                id: 'email',
                header: 'Email',
                accessor: 'email',
              },
              {
                id: 'role',
                header: 'Role',
                accessor: 'role',
              },
            ];

          const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \`User \${i}\`,
              email: \`user\${i}@example.com\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
        const columns = args.columns || createDemoColumns();
        const data = args.data || createDemoData(15);
      <\/script>
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
    `],[`
      <script>
            // Helper functions
            const createDemoColumns = (): ITableColumn[] => [
              {
                id: 'id',
                header: 'ID',
                accessor: 'id',
                width: '60px',
              },
              {
                id: 'name',
                header: 'Name',
                accessor: 'name',
                width: '100px',
              },
              {
                id: 'email',
                header: 'Email',
                accessor: 'email',
              },
              {
                id: 'role',
                header: 'Role',
                accessor: 'role',
              },
            ];

          const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \\\`User \\\${i}\\\`,
              email: \\\`user\\\${i}@example.com\\\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
        const columns = args.columns || createDemoColumns();
        const data = args.data || createDemoData(15);
      <\/script>
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
    `])),n,a,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,i("paginationChange"))},args:{density:"comfortable",paginated:!0,"show-page-size-selector":!0}},v={render:e=>{const n=e.columns||m(),a=e.data||p();return d(R||(R=u([`
      <script>
            // Helper functions
            const createDemoColumns = (): ITableColumn[] => [
              {
                id: 'id',
                header: 'ID',
                accessor: 'id',
                width: '60px',
              },
              {
                id: 'name',
                header: 'Name',
                accessor: 'name',
                width: '100px',
              },
              {
                id: 'email',
                header: 'Email',
                accessor: 'email',
              },
              {
                id: 'role',
                header: 'Role',
                accessor: 'role',
              },
            ];

            const createDemoData = (count = 5): Record<string, any>[] => {
              const data: Record<string, any>[] = [];
              for (let i = 1; i <= count; i++) {
                data.push({
                  id: i.toString(),
                  name: \`User \${i}\`,
                  email: \`user\${i}@example.com\`,
                  role: i % 2 === 0 ? 'Admin' : 'User',
                });
              }
              return data;
            };
        const columns = args.columns || createDemoColumns();
        const data = args.data || createDemoData(15);
      <\/script>
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
    `],[`
      <script>
            // Helper functions
            const createDemoColumns = (): ITableColumn[] => [
              {
                id: 'id',
                header: 'ID',
                accessor: 'id',
                width: '60px',
              },
              {
                id: 'name',
                header: 'Name',
                accessor: 'name',
                width: '100px',
              },
              {
                id: 'email',
                header: 'Email',
                accessor: 'email',
              },
              {
                id: 'role',
                header: 'Role',
                accessor: 'role',
              },
            ];

            const createDemoData = (count = 5): Record<string, any>[] => {
              const data: Record<string, any>[] = [];
              for (let i = 1; i <= count; i++) {
                data.push({
                  id: i.toString(),
                  name: \\\`User \\\${i}\\\`,
                  email: \\\`user\\\${i}@example.com\\\`,
                  role: i % 2 === 0 ? 'Admin' : 'User',
                });
              }
              return data;
            };
        const columns = args.columns || createDemoColumns();
        const data = args.data || createDemoData(15);
      <\/script>
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
    `])),n,a,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,i("rowSelectionChange"))},args:{density:"comfortable",selectable:"multi"}},C={render:e=>{const n=[{id:"id",header:"ID",accessor:"id",width:"20px"},{id:"name",header:"Name",accessor:"name",editor:"text"},{id:"status",header:"Status",accessor:"status",editor:"custom",customEditorRenderer:(s,r)=>{const o=document.createElement("div");o.style.width="100%";const t=document.createElement("modus-wc-autocomplete");t.items=[{label:"Active",value:"Active",visibleInMenu:!0},{label:"Inactive",value:"Inactive",visibleInMenu:!0},{label:"Pending",value:"Pending",visibleInMenu:!0}],t.value=s,t.style.width="100%";const l=c=>{r(c.detail.value)};return t.addEventListener("itemSelect",l),o.appendChild(t),setTimeout(()=>{const c=t.querySelector("input");c==null||c.focus()},0),o},cellRenderer:s=>{const o={Active:"green",Inactive:"gray",Pending:"blue"}[s]||"black",t=document.createElement("span");return t.textContent=s,t.style.color=o,t.style.fontWeight="bold",t}},{id:"dueDate",header:"Due Date",accessor:"dueDate",editor:"custom",customEditorRenderer:(s,r)=>{const o=document.createElement("div");o.style.width="100%";const t=document.createElement("modus-wc-date");t.value=s,t.style.width="100%",t.bordered=!1;const l=c=>{if(!(c instanceof CustomEvent)){const Y=c.target;setTimeout(()=>{t.querySelector(".calendar-container")||r(Y.value)},100)}};return t.addEventListener("inputChange",l),o.appendChild(t),setTimeout(()=>{const c=t.querySelector("input");c==null||c.focus()},0),o},cellRenderer:s=>s?new Date(s).toLocaleDateString():"-"}],a=[{id:"1",name:"John Doe",status:"Active",dueDate:"2025-10-15"},{id:"2",name:"Jane Smith",status:"Inactive",dueDate:"2025-11-20"},{id:"3",name:"Bob Johnson",status:"Pending",dueDate:"2025-12-05"}];return d(z||(z=u([`
      <script>
                // Helper functions
                const createDemoColumns = (): ITableColumn[] => [
                  {
                    id: 'id',
                    header: 'ID',
                    accessor: 'id',
                    width: '60px',
                  },
                  {
                    id: 'name',
                    header: 'Name',
                    accessor: 'name',
                    width: '100px',
                  },
                  {
                    id: 'email',
                    header: 'Email',
                    accessor: 'email',
                  },
                  {
                    id: 'role',
                    header: 'Role',
                    accessor: 'role',
                  },
                ];

                const createDemoData = (count = 5): Record<string, any>[] => {
                  const data: Record<string, any>[] = [];
                  for (let i = 1; i <= count; i++) {
                    data.push({
                      id: i.toString(),
                      name: \`User \${i}\`,
                      email: \`user\${i}@example.com\`,
                      role: i % 2 === 0 ? 'Admin' : 'User',
                    });
                  }
                  return data;
                };
                    const columns: ITableColumn[] = [
          {
            id: 'id',
            header: 'ID',
            accessor: 'id',
            width: '20px',
          },
          {
            id: 'name',
            header: 'Name',
            accessor: 'name',
            editor: 'text',
          },
          {
            id: 'status',
            header: 'Status',
            accessor: 'status',
            editor: 'custom',
            customEditorRenderer: (value, onCommit) => {
              const container = document.createElement('div');
              container.style.width = '100%';

              const autocomplete = document.createElement('modus-wc-autocomplete');
              autocomplete.items = [
                { label: 'Active', value: 'Active', visibleInMenu: true },
                { label: 'Inactive', value: 'Inactive', visibleInMenu: true },
                { label: 'Pending', value: 'Pending', visibleInMenu: true },
              ];
              autocomplete.value = value as string;
              autocomplete.style.width = '100%';

              const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
                onCommit(e.detail.value);
              };

              autocomplete.addEventListener(
                'itemSelect',
                handleItemSelect as EventListener
              );
              container.appendChild(autocomplete);

              setTimeout(() => {
                const input = autocomplete.querySelector('input');
                input?.focus();
              }, 0);

              return container;
            },
            cellRenderer: (value) => {
              const statusColors = {
                Active: 'green',
                Inactive: 'gray',
                Pending: 'blue',
              };
              const color = statusColors[value as string] || 'black';
              const span = document.createElement('span');
              span.textContent = value as string;
              span.style.color = color;
              span.style.fontWeight = 'bold';
              return span;
            },
          },
          {
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

          const handleChange = (e: Event) => {
            // Only commit when it's NOT a CustomEvent (date selection, not select change)
            if (!(e instanceof CustomEvent)) {
              const target = e.target as HTMLInputElement;
              // Wait a bit to see if calendar is still open
              setTimeout(() => {
                const calendar = datePicker.querySelector(
                  '.calendar-container'
                );
                // Only commit if calendar is closed (date was selected)
                if (!calendar) {
                  onCommit(target.value);
                }
              }, 100);
            }
          };

          datePicker.addEventListener('inputChange', handleChange);
          container.appendChild(datePicker);

              setTimeout(() => {
                const input = datePicker.querySelector('input');
                input?.focus();
              }, 0);

              return container;
            },
            cellRenderer: (value) => {
              if (!value) return '-';
              const date = new Date(value as string);
              return date.toLocaleDateString();
            },
          },
        ];

        const data = [
          {
            id: '1',
            name: 'John Doe',
            status: 'Active',
            dueDate: '2025-10-15',
          },
          {
            id: '2',
            name: 'Jane Smith',
            status: 'Inactive',
            dueDate: '2025-11-20',
          },
          {
            id: '3',
            name: 'Bob Johnson',
            status: 'Pending',
            dueDate: '2025-12-05',
          },
        ];
      <\/script>
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
    `],[`
      <script>
                // Helper functions
                const createDemoColumns = (): ITableColumn[] => [
                  {
                    id: 'id',
                    header: 'ID',
                    accessor: 'id',
                    width: '60px',
                  },
                  {
                    id: 'name',
                    header: 'Name',
                    accessor: 'name',
                    width: '100px',
                  },
                  {
                    id: 'email',
                    header: 'Email',
                    accessor: 'email',
                  },
                  {
                    id: 'role',
                    header: 'Role',
                    accessor: 'role',
                  },
                ];

                const createDemoData = (count = 5): Record<string, any>[] => {
                  const data: Record<string, any>[] = [];
                  for (let i = 1; i <= count; i++) {
                    data.push({
                      id: i.toString(),
                      name: \\\`User \\\${i}\\\`,
                      email: \\\`user\\\${i}@example.com\\\`,
                      role: i % 2 === 0 ? 'Admin' : 'User',
                    });
                  }
                  return data;
                };
                    const columns: ITableColumn[] = [
          {
            id: 'id',
            header: 'ID',
            accessor: 'id',
            width: '20px',
          },
          {
            id: 'name',
            header: 'Name',
            accessor: 'name',
            editor: 'text',
          },
          {
            id: 'status',
            header: 'Status',
            accessor: 'status',
            editor: 'custom',
            customEditorRenderer: (value, onCommit) => {
              const container = document.createElement('div');
              container.style.width = '100%';

              const autocomplete = document.createElement('modus-wc-autocomplete');
              autocomplete.items = [
                { label: 'Active', value: 'Active', visibleInMenu: true },
                { label: 'Inactive', value: 'Inactive', visibleInMenu: true },
                { label: 'Pending', value: 'Pending', visibleInMenu: true },
              ];
              autocomplete.value = value as string;
              autocomplete.style.width = '100%';

              const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
                onCommit(e.detail.value);
              };

              autocomplete.addEventListener(
                'itemSelect',
                handleItemSelect as EventListener
              );
              container.appendChild(autocomplete);

              setTimeout(() => {
                const input = autocomplete.querySelector('input');
                input?.focus();
              }, 0);

              return container;
            },
            cellRenderer: (value) => {
              const statusColors = {
                Active: 'green',
                Inactive: 'gray',
                Pending: 'blue',
              };
              const color = statusColors[value as string] || 'black';
              const span = document.createElement('span');
              span.textContent = value as string;
              span.style.color = color;
              span.style.fontWeight = 'bold';
              return span;
            },
          },
          {
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

          const handleChange = (e: Event) => {
            // Only commit when it's NOT a CustomEvent (date selection, not select change)
            if (!(e instanceof CustomEvent)) {
              const target = e.target as HTMLInputElement;
              // Wait a bit to see if calendar is still open
              setTimeout(() => {
                const calendar = datePicker.querySelector(
                  '.calendar-container'
                );
                // Only commit if calendar is closed (date was selected)
                if (!calendar) {
                  onCommit(target.value);
                }
              }, 100);
            }
          };

          datePicker.addEventListener('inputChange', handleChange);
          container.appendChild(datePicker);

              setTimeout(() => {
                const input = datePicker.querySelector('input');
                input?.focus();
              }, 0);

              return container;
            },
            cellRenderer: (value) => {
              if (!value) return '-';
              const date = new Date(value as string);
              return date.toLocaleDateString();
            },
          },
        ];

        const data = [
          {
            id: '1',
            name: 'John Doe',
            status: 'Active',
            dueDate: '2025-10-15',
          },
          {
            id: '2',
            name: 'Jane Smith',
            status: 'Inactive',
            dueDate: '2025-11-20',
          },
          {
            id: '3',
            name: 'Bob Johnson',
            status: 'Pending',
            dueDate: '2025-12-05',
          },
        ];
      <\/script>
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
    `])),n,a,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],!0,i("cellEditStart"),i("cellEditCommit"))},args:{density:"comfortable",hover:!0,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[]}};var x,P,T;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData();
    return html\`
      <script>
            // Helper functions
        const createDemoColumns = (): ITableColumn[] => [
          {
            id: 'id',
            header: 'ID',
            accessor: 'id',
            width: '60px',
          },
          {
            id: 'name',
            header: 'Name',
            accessor: 'name',
            width: '100px',
          },
          {
            id: 'email',
            header: 'Email',
            accessor: 'email',
          },
          {
            id: 'role',
            header: 'Role',
            accessor: 'role',
          },
        ];

        const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \\\`User \\\${i}\\\`,
              email: \\\`user\\\${i}@example.com\\\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
      <\/script>
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
}`,...(T=(P=g.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var A,O,k;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData();
    return html\`
      <script>
        // Helper functions
        const createDemoColumns = (): ITableColumn[] => [
          {
            id: 'id',
            header: 'ID',
            accessor: 'id',
            width: '60px',
          },
          {
            id: 'name',
            header: 'Name',
            accessor: 'name',
            width: '100px',
          },
          {
            id: 'email',
            header: 'Email',
            accessor: 'email',
          },
          {
            id: 'role',
            header: 'Role',
            accessor: 'role',
          },
        ];

        const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \\\`User \\\${i}\\\`,
              email: \\\`user\\\${i}@example.com\\\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
      <\/script>
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
}`,...(k=(O=h.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var _,U,L;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const columns = args.columns || createSortableColumns();
    const data = args.data || createDemoData();
    return html\`
      <script>
        // Helper functions
        const createDemoColumns = (): ITableColumn[] => [
          {
            id: 'id',
            header: 'ID',
            accessor: 'id',
            width: '60px',
          },
          {
            id: 'name',
            header: 'Name',
            accessor: 'name',
            width: '100px',
          },
          {
            id: 'email',
            header: 'Email',
            accessor: 'email',
          },
          {
            id: 'role',
            header: 'Role',
            accessor: 'role',
          },
        ];

        const createSortableColumns = (): ITableColumn[] => {
          const columns = createDemoColumns();
          return columns.map((col) => ({ ...col, sortable: true }));
        };

        const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \\\`User \\\${i}\\\`,
              email: \\\`user\\\${i}@example.com\\\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
      <\/script>
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
}`,...(L=(U=b.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var N,M,H;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData(15);
    return html\`
      <script>
            // Helper functions
            const createDemoColumns = (): ITableColumn[] => [
              {
                id: 'id',
                header: 'ID',
                accessor: 'id',
                width: '60px',
              },
              {
                id: 'name',
                header: 'Name',
                accessor: 'name',
                width: '100px',
              },
              {
                id: 'email',
                header: 'Email',
                accessor: 'email',
              },
              {
                id: 'role',
                header: 'Role',
                accessor: 'role',
              },
            ];

          const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \\\`User \\\${i}\\\`,
              email: \\\`user\\\${i}@example.com\\\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
        const columns = args.columns || createDemoColumns();
        const data = args.data || createDemoData(15);
      <\/script>
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
}`,...(H=(M=w.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var q,B,J;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData();
    return html\`
      <script>
            // Helper functions
            const createDemoColumns = (): ITableColumn[] => [
              {
                id: 'id',
                header: 'ID',
                accessor: 'id',
                width: '60px',
              },
              {
                id: 'name',
                header: 'Name',
                accessor: 'name',
                width: '100px',
              },
              {
                id: 'email',
                header: 'Email',
                accessor: 'email',
              },
              {
                id: 'role',
                header: 'Role',
                accessor: 'role',
              },
            ];

            const createDemoData = (count = 5): Record<string, any>[] => {
              const data: Record<string, any>[] = [];
              for (let i = 1; i <= count; i++) {
                data.push({
                  id: i.toString(),
                  name: \\\`User \\\${i}\\\`,
                  email: \\\`user\\\${i}@example.com\\\`,
                  role: i % 2 === 0 ? 'Admin' : 'User',
                });
              }
              return data;
            };
        const columns = args.columns || createDemoColumns();
        const data = args.data || createDemoData(15);
      <\/script>
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
}`,...(J=(B=v.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var j,W,V;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        const handleChange = (e: Event) => {
          // Only commit when it's NOT a CustomEvent (date selection, not select change)
          if (!(e instanceof CustomEvent)) {
            const target = e.target as HTMLInputElement;
            // Wait a bit to see if calendar is still open
            setTimeout(() => {
              const calendar = datePicker.querySelector('.calendar-container');
              // Only commit if calendar is closed (date was selected)
              if (!calendar) {
                onCommit(target.value);
              }
            }, 100);
          }
        };
        datePicker.addEventListener('inputChange', handleChange);
        container.appendChild(datePicker);
        setTimeout(() => {
          const input = datePicker.querySelector('input');
          input?.focus();
        }, 0);
        return container;
      },
      cellRenderer: value => {
        if (!value) return '-';
        const date = new Date(value as string);
        return date.toLocaleDateString();
      }
    }];
    const data = [{
      id: '1',
      name: 'John Doe',
      status: 'Active',
      dueDate: '2025-10-15'
    }, {
      id: '2',
      name: 'Jane Smith',
      status: 'Inactive',
      dueDate: '2025-11-20'
    }, {
      id: '3',
      name: 'Bob Johnson',
      status: 'Pending',
      dueDate: '2025-12-05'
    }];
    return html\`
      <script>
                // Helper functions
                const createDemoColumns = (): ITableColumn[] => [
                  {
                    id: 'id',
                    header: 'ID',
                    accessor: 'id',
                    width: '60px',
                  },
                  {
                    id: 'name',
                    header: 'Name',
                    accessor: 'name',
                    width: '100px',
                  },
                  {
                    id: 'email',
                    header: 'Email',
                    accessor: 'email',
                  },
                  {
                    id: 'role',
                    header: 'Role',
                    accessor: 'role',
                  },
                ];

                const createDemoData = (count = 5): Record<string, any>[] => {
                  const data: Record<string, any>[] = [];
                  for (let i = 1; i <= count; i++) {
                    data.push({
                      id: i.toString(),
                      name: \\\`User \\\${i}\\\`,
                      email: \\\`user\\\${i}@example.com\\\`,
                      role: i % 2 === 0 ? 'Admin' : 'User',
                    });
                  }
                  return data;
                };
                    const columns: ITableColumn[] = [
          {
            id: 'id',
            header: 'ID',
            accessor: 'id',
            width: '20px',
          },
          {
            id: 'name',
            header: 'Name',
            accessor: 'name',
            editor: 'text',
          },
          {
            id: 'status',
            header: 'Status',
            accessor: 'status',
            editor: 'custom',
            customEditorRenderer: (value, onCommit) => {
              const container = document.createElement('div');
              container.style.width = '100%';

              const autocomplete = document.createElement('modus-wc-autocomplete');
              autocomplete.items = [
                { label: 'Active', value: 'Active', visibleInMenu: true },
                { label: 'Inactive', value: 'Inactive', visibleInMenu: true },
                { label: 'Pending', value: 'Pending', visibleInMenu: true },
              ];
              autocomplete.value = value as string;
              autocomplete.style.width = '100%';

              const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
                onCommit(e.detail.value);
              };

              autocomplete.addEventListener(
                'itemSelect',
                handleItemSelect as EventListener
              );
              container.appendChild(autocomplete);

              setTimeout(() => {
                const input = autocomplete.querySelector('input');
                input?.focus();
              }, 0);

              return container;
            },
            cellRenderer: (value) => {
              const statusColors = {
                Active: 'green',
                Inactive: 'gray',
                Pending: 'blue',
              };
              const color = statusColors[value as string] || 'black';
              const span = document.createElement('span');
              span.textContent = value as string;
              span.style.color = color;
              span.style.fontWeight = 'bold';
              return span;
            },
          },
          {
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

          const handleChange = (e: Event) => {
            // Only commit when it's NOT a CustomEvent (date selection, not select change)
            if (!(e instanceof CustomEvent)) {
              const target = e.target as HTMLInputElement;
              // Wait a bit to see if calendar is still open
              setTimeout(() => {
                const calendar = datePicker.querySelector(
                  '.calendar-container'
                );
                // Only commit if calendar is closed (date was selected)
                if (!calendar) {
                  onCommit(target.value);
                }
              }, 100);
            }
          };

          datePicker.addEventListener('inputChange', handleChange);
          container.appendChild(datePicker);

              setTimeout(() => {
                const input = datePicker.querySelector('input');
                input?.focus();
              }, 0);

              return container;
            },
            cellRenderer: (value) => {
              if (!value) return '-';
              const date = new Date(value as string);
              return date.toLocaleDateString();
            },
          },
        ];

        const data = [
          {
            id: '1',
            name: 'John Doe',
            status: 'Active',
            dueDate: '2025-10-15',
          },
          {
            id: '2',
            name: 'Jane Smith',
            status: 'Inactive',
            dueDate: '2025-11-20',
          },
          {
            id: '3',
            name: 'Bob Johnson',
            status: 'Pending',
            dueDate: '2025-12-05',
          },
        ];
      <\/script>
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
}`,...(V=(W=C.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const de=["Default","Hover","Sorting","Pagination","CheckBoxRowSelection","InlineEditing"];export{v as CheckBoxRowSelection,g as Default,h as Hover,C as InlineEditing,w as Pagination,b as Sorting,de as __namedExportsOrder,le as default};
