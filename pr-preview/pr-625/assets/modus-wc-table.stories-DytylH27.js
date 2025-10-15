import{_ as Z,b as i}from"./chunk-4XZ63LWV-CnYBn8W6.js";import{x as u}from"./lit-element-C8zulti1.js";import"./v4-CtRu48qb.js";const{definePreview:de}=__STORYBOOK_MODULE_PREVIEW_API__,{global:D}=__STORYBOOK_MODULE_GLOBAL__;var Q={};Z(Q,{argsEnhancers:()=>ne,loaders:()=>ae});var Y=(e,t)=>typeof t[e]>"u"&&!(e in t),X=e=>{let{initialArgs:t,argTypes:a,id:r,parameters:{actions:s}}=e;if(!s||s.disable||!s.argTypesRegex||!a)return{};let o=new RegExp(s.argTypesRegex);return Object.entries(a).filter(([n])=>!!o.test(n)).reduce((n,[d,l])=>(Y(d,t)&&(n[d]=i(d,{implicit:!0,id:r})),n),{})},ee=e=>{let{initialArgs:t,argTypes:a,parameters:{actions:r}}=e;return r!=null&&r.disable||!a?{}:Object.entries(a).filter(([s,o])=>!!o.action).reduce((s,[o,n])=>(Y(o,t)&&(s[o]=i(typeof n.action=="string"?n.action:o)),s),{})},ne=[ee,X],S=!1,te=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!S&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in D&&typeof D.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let a=D.__STORYBOOK_TEST_ON_MOCK_CALL__;a((r,s)=>{let o=r.getMockName();o!=="spy"&&(!/^next\/.*::/.test(o)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(n=>o.startsWith(n)))&&i(o)(s)}),S=!0}},ae=[te],E=Object.freeze,oe=Object.defineProperty,m=(e,t)=>E(oe(e,"raw",{value:E(t||e.slice())})),$,I,R,z,P,x;const ue={title:"Components/Table",component:"modus-wc-table",argTypes:{columns:{control:"object",description:"An array of column definitions.",table:{type:{detail:`
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
          `}}},density:{control:{type:"select"},options:["condensed","comfortable","relaxed"],description:"The density of the table, used to save space or increase readability."},hover:{control:"boolean",description:"Enable hover effect on table rows.",defaultValue:!0},sortable:{control:"boolean",description:"Enable sorting functionality for sortable columns.",defaultValue:!0},paginated:{control:"boolean",description:"Enable pagination for the table.",defaultValue:!1},"show-page-size-selector":{control:"boolean",description:"Show/hide the page size selector in pagination.",defaultValue:!0},caption:{control:"text",description:"Accessibility caption for the table that is visually hidden but available to screen readers."},"custom-class":{control:"text",description:"Custom CSS class to apply to the inner div."},selectable:{control:{type:"select"},options:["none","single","multi"],description:"Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows.",defaultValue:"none"},zebra:{control:"boolean",description:"Zebra striped tables differentiate rows by styling them in an alternating fashion.",defaultValue:!1},"current-page":{control:"number",description:"The current page number in pagination (1-based index).",defaultValue:1},"page-size-options":{control:"object",description:"Available options for the number of rows per page.",defaultValue:[5,10,15]},"selected-row-ids":{control:"object",description:"Array of selected row IDs. Used for controlled selection state.",defaultValue:[]},editable:{control:"boolean",description:"Enable cell editing. Either a boolean (all rows) or a predicate per row.",defaultValue:!1}}},h=()=>[{id:"id",header:"ID",accessor:"id",width:"60px"},{id:"name",header:"Name",accessor:"name",width:"100px"},{id:"email",header:"Email",accessor:"email"},{id:"role",header:"Role",accessor:"role"}],se=()=>h().map(t=>({...t,sortable:!0})),g=(e=5)=>{const t=[];for(let a=1;a<=e;a++)t.push({id:a.toString(),name:`User ${a}`,email:`user${a}@example.com`,role:a%2===0?"Admin":"User"});return t},b={render:e=>{const t=e.columns||h(),a=e.data||g();return u($||($=m([`
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
    `])),t,a,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,e.caption,i("rowClick"),i("sortChange"),i("paginationChange"),i("rowSelectionChange"),i("cellEditStart"),i("cellEditCommit"))},args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[],editable:!1}},v={render:e=>{const t=e.columns||h(),a=e.data||g();return u(I||(I=m([`
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
    `])),t,a,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,i("rowClick"))},args:{density:"comfortable",hover:!0}},w={render:e=>{const t=e.columns||se(),a=e.data||g();return u(R||(R=m([`
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
    `])),t,a,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,i("sortChange"))},args:{density:"comfortable",sortable:!0}},C={render:e=>{const t=e.columns||h(),a=e.data||g(15);return u(z||(z=m([`
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
    `])),t,a,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,i("paginationChange"))},args:{density:"comfortable",paginated:!0,"show-page-size-selector":!0}},y={render:e=>{const t=e.columns||h(),a=e.data||g();return u(P||(P=m([`
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
    `])),t,a,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,i("rowSelectionChange"))},args:{density:"comfortable",selectable:"multi"}},f={render:e=>{const t=[{id:"id",header:"ID",accessor:"id",width:"20px"},{id:"name",header:"Name",accessor:"name",editor:"text"},{id:"status",header:"Status",accessor:"status",editor:"custom",customEditorRenderer:(r,s)=>{const o=document.createElement("div");o.style.width="100%";const n=document.createElement("modus-wc-autocomplete");n.items=[{label:"Active",value:"Active",visibleInMenu:!0},{label:"Inactive",value:"Inactive",visibleInMenu:!0},{label:"Pending",value:"Pending",visibleInMenu:!0}],n.value=r,n.style.width="100%";const d=l=>{s(l.detail.value)};return n.addEventListener("itemSelect",d),o.appendChild(n),setTimeout(()=>{const l=n.querySelector("input");l==null||l.focus()},0),o},cellRenderer:r=>{const o={Active:"green",Inactive:"gray",Pending:"blue"}[r]||"black",n=document.createElement("span");return n.textContent=r,n.style.color=o,n.style.fontWeight="bold",n}},{id:"dueDate",header:"Due Date",accessor:"dueDate",editor:"custom",customEditorRenderer:(r,s)=>{const o=document.createElement("div");o.style.width="100%";const n=document.createElement("modus-wc-date");n.value=r,n.style.width="100%",n.bordered=!1;const d=c=>{if(!(c instanceof CustomEvent)){const p=c.target;setTimeout(()=>{n.querySelector(".calendar-container")||s(p.value)},100)}},l=()=>{const c=n.querySelector("input");c&&c.value&&s(c.value)},G=c=>{if(c.key==="Enter"){const p=n.querySelector("input");p&&p.value&&(s(p.value),c.preventDefault())}};return n.addEventListener("inputChange",d),n.addEventListener("inputBlur",l),o.addEventListener("keydown",G),o.appendChild(n),setTimeout(()=>{const c=n.querySelector("input");c==null||c.focus()},0),o},cellRenderer:r=>r?new Date(r).toLocaleDateString():"-"}],a=[{id:"1",name:"John Doe",status:"Active",dueDate:"2025-10-15"},{id:"2",name:"Jane Smith",status:"Inactive",dueDate:"2025-11-20"},{id:"3",name:"Bob Johnson",status:"Pending",dueDate:"2025-12-05"}];return u(x||(x=m([`
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

          const handleBlur = (e: FocusEvent) => {
            const input = datePicker.querySelector('input');
            if (input && input.value) {
              onCommit(input.value);
            }
          };

          const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
              const input = datePicker.querySelector('input');
              if (input && input.value) {
                onCommit(input.value);
                e.preventDefault();
              }
            }
          };

          datePicker.addEventListener('inputChange', handleChange);
          datePicker.addEventListener('inputBlur', handleBlur);
          container.addEventListener('keydown', handleKeyDown);
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

          const handleBlur = (e: FocusEvent) => {
            const input = datePicker.querySelector('input');
            if (input && input.value) {
              onCommit(input.value);
            }
          };

          const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
              const input = datePicker.querySelector('input');
              if (input && input.value) {
                onCommit(input.value);
                e.preventDefault();
              }
            }
          };

          datePicker.addEventListener('inputChange', handleChange);
          datePicker.addEventListener('inputBlur', handleBlur);
          container.addEventListener('keydown', handleKeyDown);
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
    `])),t,a,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],!0,i("cellEditStart"),i("cellEditCommit"))},args:{density:"comfortable",hover:!0,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[]}};var k,T,A;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(A=(T=b.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var O,_,L;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(L=(_=v.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var U,N,M;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(M=(N=w.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var B,H,q;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(H=C.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var K,J,j;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(j=(J=y.parameters)==null?void 0:J.docs)==null?void 0:j.source}}};var W,V,F;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        const handleBlur = () => {
          const input = datePicker.querySelector('input');
          if (input && input.value) {
            onCommit(input.value);
          }
        };
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            const input = datePicker.querySelector('input');
            if (input && input.value) {
              onCommit(input.value);
              e.preventDefault();
            }
          }
        };
        datePicker.addEventListener('inputChange', handleChange);
        datePicker.addEventListener('inputBlur', handleBlur as EventListener);
        container.addEventListener('keydown', handleKeyDown);
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

          const handleBlur = (e: FocusEvent) => {
            const input = datePicker.querySelector('input');
            if (input && input.value) {
              onCommit(input.value);
            }
          };

          const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
              const input = datePicker.querySelector('input');
              if (input && input.value) {
                onCommit(input.value);
                e.preventDefault();
              }
            }
          };

          datePicker.addEventListener('inputChange', handleChange);
          datePicker.addEventListener('inputBlur', handleBlur);
          container.addEventListener('keydown', handleKeyDown);
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
}`,...(F=(V=f.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const me=["Default","Hover","Sorting","Pagination","CheckBoxRowSelection","InlineEditing"];export{y as CheckBoxRowSelection,b as Default,v as Hover,f as InlineEditing,C as Pagination,w as Sorting,me as __namedExportsOrder,ue as default};
