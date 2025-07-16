import{_ as nn,b as s}from"./chunk-4XZ63LWV-CnYBn8W6.js";import{x as l}from"./lit-element-C8zulti1.js";import"./v4-CtRu48qb.js";const{definePreview:un}=__STORYBOOK_MODULE_PREVIEW_API__,{global:y}=__STORYBOOK_MODULE_GLOBAL__;var en={};nn(en,{argsEnhancers:()=>on,loaders:()=>rn});var Q=(n,e)=>typeof e[n]>"u"&&!(n in e),tn=n=>{let{initialArgs:e,argTypes:t,id:i,parameters:{actions:r}}=n;if(!r||r.disable||!r.argTypesRegex||!t)return{};let o=new RegExp(r.argTypesRegex);return Object.entries(t).filter(([a])=>!!o.test(a)).reduce((a,[m,d])=>(Q(m,e)&&(a[m]=s(m,{implicit:!0,id:i})),a),{})},an=n=>{let{initialArgs:e,argTypes:t,parameters:{actions:i}}=n;return i!=null&&i.disable||!t?{}:Object.entries(t).filter(([r,o])=>!!o.action).reduce((r,[o,a])=>(Q(o,e)&&(r[o]=s(typeof a.action=="string"?a.action:o)),r),{})},on=[an,tn],S=!1,sn=n=>{let{parameters:{actions:e}}=n;if(!(e!=null&&e.disable)&&!S&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in y&&typeof y.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let t=y.__STORYBOOK_TEST_ON_MOCK_CALL__;t((i,r)=>{let o=i.getMockName();o!=="spy"&&(!/^next\/.*::/.test(o)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(a=>o.startsWith(a)))&&s(o)(r)}),S=!0}},rn=[sn],I=Object.freeze,ln=Object.defineProperty,c=(n,e)=>I(ln(n,"raw",{value:I(e||n.slice())})),x,D,$,z,E,R,T;const pn={title:"Components/Table",component:"modus-wc-table",argTypes:{columns:{control:"object",description:"An array of column definitions.",table:{type:{detail:`
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
          `}}},density:{control:{type:"select"},options:["condensed","comfortable","relaxed"],description:"The density of the table, used to save space or increase readability."},hover:{control:"boolean",description:"Enable hover effect on table rows.",defaultValue:!0},sortable:{control:"boolean",description:"Enable sorting functionality for sortable columns.",defaultValue:!0},paginated:{control:"boolean",description:"Enable pagination for the table.",defaultValue:!1},"show-page-size-selector":{control:"boolean",description:"Show/hide the page size selector in pagination.",defaultValue:!0},"custom-class":{control:"text",description:"Custom CSS class to apply to the inner div."},selectable:{control:{type:"select"},options:["none","single","multi"],description:"Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows.",defaultValue:"none"},zebra:{control:"boolean",description:"Zebra striped tables differentiate rows by styling them in an alternating fashion.",defaultValue:!1},"current-page":{control:"number",description:"The current page number in pagination (1-based index).",defaultValue:1},"page-size-options":{control:"object",description:"Available options for the number of rows per page.",defaultValue:[5,10,15]},"selected-row-ids":{control:"object",description:"Array of selected row IDs. Used for controlled selection state.",defaultValue:[]},editable:{control:"boolean",description:"Enable cell editing. Either a boolean (all rows) or a predicate per row.",defaultValue:!1}}},u=()=>[{id:"id",header:"ID",accessor:"id",width:"60px"},{id:"name",header:"Name",accessor:"name",width:"100px"},{id:"email",header:"Email",accessor:"email"},{id:"role",header:"Role",accessor:"role"}],X=()=>u().map(e=>({...e,sortable:!0})),p=(n=5)=>{const e=[];for(let t=1;t<=n;t++)e.push({id:t.toString(),name:`User ${t}`,email:`user${t}@example.com`,role:t%2===0?"Admin":"User"});return e},g={render:n=>{const e=n.columns||u(),t=n.data||p();return l(x||(x=c([`
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
        @rowClick=`,`
        @sortChange=`,`
        @paginationChange=`,`
        @rowSelectionChange=`,`
        @cellEditStart=`,`
        @cellEditCommit=`,`
      ></modus-wc-table>
    `])),e,t,n.density,n.hover,n.sortable,n.paginated,n["show-page-size-selector"],n["custom-class"],n.selectable,n.zebra,n["current-page"],n["page-size-options"],n["selected-row-ids"],n.editable,s("rowClick"),s("sortChange"),s("paginationChange"),s("rowSelectionChange"),s("cellEditStart"),s("cellEditCommit"))},args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[],editable:!1}},h={render:n=>{const e=n.columns||u(),t=n.data||p();return l(D||(D=c([`
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
    `])),e,t,n.density,n.hover,n.sortable,n.paginated,n["show-page-size-selector"],n["custom-class"],n.selectable,n.zebra,n["current-page"],n["page-size-options"],n["selected-row-ids"],n.editable,s("rowClick"))},args:{density:"comfortable",hover:!0}},b={render:n=>{const e=n.columns||X(),t=n.data||p();return l($||($=c([`
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
    `])),e,t,n.density,n.hover,n.sortable,n.paginated,n["show-page-size-selector"],n["custom-class"],n.selectable,n.zebra,n["current-page"],n["page-size-options"],n["selected-row-ids"],n.editable,s("sortChange"))},args:{density:"comfortable",sortable:!0}},w={render:n=>{const e=n.columns||u(),t=n.data||p(15);return l(z||(z=c([`
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
    `])),e,t,n.density,n.hover,n.sortable,n.paginated,n["show-page-size-selector"],n["custom-class"],n.selectable,n.zebra,n["current-page"],n["page-size-options"],n["selected-row-ids"],n.editable,s("paginationChange"))},args:{density:"comfortable",paginated:!0,"show-page-size-selector":!0}},f={render:n=>{const e=n.columns||u(),t=n.data||p();return l(E||(E=c([`
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
    `])),e,t,n.density,n.hover,n.sortable,n.paginated,n["show-page-size-selector"],n["custom-class"],n.selectable,n.zebra,n["current-page"],n["page-size-options"],n["selected-row-ids"],n.editable,s("rowSelectionChange"))},args:{density:"comfortable",selectable:"multi"}},v={render:n=>{const e=[{id:"id",header:"ID",accessor:"id",width:"20px"},{id:"name",header:"Name",accessor:"name",editor:"text"},{id:"status",header:"Status",accessor:"status",editor:"custom",customEditorRenderer:(i,r)=>{const o=document.createElement("div");o.style.width="100%";const a=document.createElement("modus-wc-autocomplete");a.items=[{label:"Active",value:"Active",visibleInMenu:!0},{label:"Inactive",value:"Inactive",visibleInMenu:!0},{label:"Pending",value:"Pending",visibleInMenu:!0}],a.value=i,a.style.width="100%";const m=d=>{r(d.detail.value)};return a.addEventListener("itemSelect",m),o.appendChild(a),setTimeout(()=>{const d=a.querySelector("input");d==null||d.focus()},0),o},cellRenderer:i=>{const o={Active:"green",Inactive:"gray",Pending:"blue"}[i]||"black",a=document.createElement("span");return a.textContent=i,a.style.color=o,a.style.fontWeight="bold",a}}],t=[{id:"1",name:"John Doe",status:"Active"},{id:"2",name:"Jane Smith",status:"Inactive"},{id:"3",name:"Bob Johnson",status:"Pending"}];return l(R||(R=c([`
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
        ];

        const data = [
          { id: '1', name: 'John Doe', status: 'Active' },
          { id: '2', name: 'Jane Smith', status: 'Inactive' },
          { id: '3', name: 'Bob Johnson', status: 'Pending' },
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
        ];

        const data = [
          { id: '1', name: 'John Doe', status: 'Active' },
          { id: '2', name: 'Jane Smith', status: 'Inactive' },
          { id: '3', name: 'Bob Johnson', status: 'Pending' },
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
    `])),e,t,n.density,n.hover,n.sortable,n.paginated,n["show-page-size-selector"],n["custom-class"],n.selectable,n.zebra,n["current-page"],n["page-size-options"],n["selected-row-ids"],!0,s("cellEditStart"),s("cellEditCommit"))},args:{density:"comfortable",hover:!0,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[]}},C={render:n=>l(T||(T=c([`
      <div id="infinite-scroll-container">
        <style>
          #infinite-scroll-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .scroll-container {
            height: 400px;
            overflow: auto;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
          }
          .loading-indicator {
            text-align: center;
            padding: 16px;
            color: #666;
          }
          .info-panel {
            background: #f5f5f5;
            padding: 12px;
            border-radius: 4px;
            font-size: 14px;
          }
        </style>

        <div class="info-panel">
          <strong>Infinite Scrolling Demo</strong><br />
          Scroll down to load more data. The table automatically fetches
          additional rows when you reach the bottom.
          <br />Loaded: <span id="loaded-count">20</span> rows | Total
          available: 1000 rows
        </div>

        <div class="scroll-container" id="scroll-wrapper">
          <modus-wc-table
            id="infinite-table"
            .columns=`,`
            .data=`,`
            .density=`,`
            .hover=`,`
            .sortable=`,`
            .paginated=`,`
            .selectable=`,`
            .zebra=`,`
            .editable=`,`
            @rowClick=`,`
            @sortChange=`,`
            @rowSelectionChange=`,`
          ></modus-wc-table>
          <div class="loading-indicator" id="loading" style="display: none;">
            Loading more data...
          </div>
        </div>

        <script>
          (function () {
            // Simulated data fetching function
            const fetchMoreData = async (startIndex, count) => {
              // Simulate API delay
              await new Promise((resolve) => setTimeout(resolve, 500));

              const data = [];
              const maxRows = 1000;
              const endIndex = Math.min(startIndex + count, maxRows);

              for (let i = startIndex; i < endIndex; i++) {
                data.push({
                  id: (i + 1).toString(),
                  name: \`User \${i + 1}\`,
                  email: \`user\${i + 1}@example.com\`,
                  role: ['Admin', 'User', 'Manager', 'Guest'][i % 4],
                });
              }

              return {
                data,
                hasMore: endIndex < maxRows,
                total: maxRows,
              };
            };

            // Initialize infinite scrolling
            const table = document.getElementById('infinite-table');
            const scrollContainer = document.getElementById('scroll-wrapper');
            const loadingIndicator = document.getElementById('loading');
            const loadedCountSpan = document.getElementById('loaded-count');

            let currentData = [];
            let isLoading = false;
            let hasMore = true;
            const batchSize = 20;

            // Load initial data
            const loadInitialData = async () => {
              const response = await fetchMoreData(0, batchSize);
              currentData = response.data;
              hasMore = response.hasMore;
              table.data = [...currentData];
              loadedCountSpan.textContent = currentData.length;
            };

            // Handle scroll event
            const handleScroll = async () => {
              if (isLoading || !hasMore) return;

              const scrollTop = scrollContainer.scrollTop;
              const scrollHeight = scrollContainer.scrollHeight;
              const clientHeight = scrollContainer.clientHeight;

              // Check if user has scrolled to bottom (with 50px threshold)
              if (scrollTop + clientHeight >= scrollHeight - 50) {
                isLoading = true;
                loadingIndicator.style.display = 'block';

                try {
                  const response = await fetchMoreData(
                    currentData.length,
                    batchSize
                  );

                  if (response.data.length > 0) {
                    currentData = [...currentData, ...response.data];
                    hasMore = response.hasMore;

                    // Update table data
                    table.data = [...currentData];
                    loadedCountSpan.textContent = currentData.length;

                    // Log the fetch action
                    console.log(
                      \`Loaded \${response.data.length} more rows. Total: \${currentData.length}\`
                    );
                  }
                } catch (error) {
                  console.error('Error loading more data:', error);
                } finally {
                  isLoading = false;
                  loadingIndicator.style.display = 'none';

                  if (!hasMore) {
                    loadingIndicator.textContent = 'All data loaded';
                    loadingIndicator.style.display = 'block';
                  }
                }
              }
            };

            // Attach scroll listener
            scrollContainer.addEventListener('scroll', handleScroll);

            // Load initial data
            loadInitialData();

            // Cleanup on unmount (for Storybook)
            return () => {
              scrollContainer.removeEventListener('scroll', handleScroll);
            };
          })();
        <\/script>
      </div>
    `],[`
      <div id="infinite-scroll-container">
        <style>
          #infinite-scroll-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .scroll-container {
            height: 400px;
            overflow: auto;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
          }
          .loading-indicator {
            text-align: center;
            padding: 16px;
            color: #666;
          }
          .info-panel {
            background: #f5f5f5;
            padding: 12px;
            border-radius: 4px;
            font-size: 14px;
          }
        </style>

        <div class="info-panel">
          <strong>Infinite Scrolling Demo</strong><br />
          Scroll down to load more data. The table automatically fetches
          additional rows when you reach the bottom.
          <br />Loaded: <span id="loaded-count">20</span> rows | Total
          available: 1000 rows
        </div>

        <div class="scroll-container" id="scroll-wrapper">
          <modus-wc-table
            id="infinite-table"
            .columns=`,`
            .data=`,`
            .density=`,`
            .hover=`,`
            .sortable=`,`
            .paginated=`,`
            .selectable=`,`
            .zebra=`,`
            .editable=`,`
            @rowClick=`,`
            @sortChange=`,`
            @rowSelectionChange=`,`
          ></modus-wc-table>
          <div class="loading-indicator" id="loading" style="display: none;">
            Loading more data...
          </div>
        </div>

        <script>
          (function () {
            // Simulated data fetching function
            const fetchMoreData = async (startIndex, count) => {
              // Simulate API delay
              await new Promise((resolve) => setTimeout(resolve, 500));

              const data = [];
              const maxRows = 1000;
              const endIndex = Math.min(startIndex + count, maxRows);

              for (let i = startIndex; i < endIndex; i++) {
                data.push({
                  id: (i + 1).toString(),
                  name: \\\`User \\\${i + 1}\\\`,
                  email: \\\`user\\\${i + 1}@example.com\\\`,
                  role: ['Admin', 'User', 'Manager', 'Guest'][i % 4],
                });
              }

              return {
                data,
                hasMore: endIndex < maxRows,
                total: maxRows,
              };
            };

            // Initialize infinite scrolling
            const table = document.getElementById('infinite-table');
            const scrollContainer = document.getElementById('scroll-wrapper');
            const loadingIndicator = document.getElementById('loading');
            const loadedCountSpan = document.getElementById('loaded-count');

            let currentData = [];
            let isLoading = false;
            let hasMore = true;
            const batchSize = 20;

            // Load initial data
            const loadInitialData = async () => {
              const response = await fetchMoreData(0, batchSize);
              currentData = response.data;
              hasMore = response.hasMore;
              table.data = [...currentData];
              loadedCountSpan.textContent = currentData.length;
            };

            // Handle scroll event
            const handleScroll = async () => {
              if (isLoading || !hasMore) return;

              const scrollTop = scrollContainer.scrollTop;
              const scrollHeight = scrollContainer.scrollHeight;
              const clientHeight = scrollContainer.clientHeight;

              // Check if user has scrolled to bottom (with 50px threshold)
              if (scrollTop + clientHeight >= scrollHeight - 50) {
                isLoading = true;
                loadingIndicator.style.display = 'block';

                try {
                  const response = await fetchMoreData(
                    currentData.length,
                    batchSize
                  );

                  if (response.data.length > 0) {
                    currentData = [...currentData, ...response.data];
                    hasMore = response.hasMore;

                    // Update table data
                    table.data = [...currentData];
                    loadedCountSpan.textContent = currentData.length;

                    // Log the fetch action
                    console.log(
                      \\\`Loaded \\\${response.data.length} more rows. Total: \\\${currentData.length}\\\`
                    );
                  }
                } catch (error) {
                  console.error('Error loading more data:', error);
                } finally {
                  isLoading = false;
                  loadingIndicator.style.display = 'none';

                  if (!hasMore) {
                    loadingIndicator.textContent = 'All data loaded';
                    loadingIndicator.style.display = 'block';
                  }
                }
              }
            };

            // Attach scroll listener
            scrollContainer.addEventListener('scroll', handleScroll);

            // Load initial data
            loadInitialData();

            // Cleanup on unmount (for Storybook)
            return () => {
              scrollContainer.removeEventListener('scroll', handleScroll);
            };
          })();
        <\/script>
      </div>
    `])),X(),[],n.density,n.hover,n.sortable,!1,n.selectable,n.zebra,n.editable,s("rowClick"),s("sortChange"),s("rowSelectionChange")),args:{density:"comfortable",hover:!0,sortable:!0,selectable:"none",zebra:!1,editable:!1},parameters:{docs:{description:{story:`
This story demonstrates how to implement infinite scrolling with the Modus Table component.

## Implementation Details

- **Pagination disabled**: Set \`paginated={false}\` to handle data loading manually
- **Scroll container**: Wrap the table in a fixed-height container with overflow
- **Scroll detection**: Monitor scroll position to trigger data loading when near bottom
- **Data management**: Append new data to existing array and update table's data prop
- **Loading states**: Show loading indicator while fetching more data
- **Performance**: Consider implementing virtualization for very large datasets

## Key Considerations

1. **Performance**: With thousands of rows, consider virtual scrolling solutions
2. **Sorting**: May need special handling for sorting across all data vs. loaded data
3. **Selection**: Row selection state must be maintained across data loads
4. **Search/Filter**: Should work with the full dataset, not just loaded rows
        `}}}};var P,A,M;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(A=g.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var L,_,U;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(U=(_=h.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var O,H,k;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(k=(H=b.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var N,B,j;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(B=w.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var J,W,K;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(W=f.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var V,q,Y;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        ];

        const data = [
          { id: '1', name: 'John Doe', status: 'Active' },
          { id: '2', name: 'Jane Smith', status: 'Inactive' },
          { id: '3', name: 'Bob Johnson', status: 'Pending' },
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
}`,...(Y=(q=v.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var F,G,Z;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <div id="infinite-scroll-container">
        <style>
          #infinite-scroll-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .scroll-container {
            height: 400px;
            overflow: auto;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
          }
          .loading-indicator {
            text-align: center;
            padding: 16px;
            color: #666;
          }
          .info-panel {
            background: #f5f5f5;
            padding: 12px;
            border-radius: 4px;
            font-size: 14px;
          }
        </style>

        <div class="info-panel">
          <strong>Infinite Scrolling Demo</strong><br />
          Scroll down to load more data. The table automatically fetches
          additional rows when you reach the bottom.
          <br />Loaded: <span id="loaded-count">20</span> rows | Total
          available: 1000 rows
        </div>

        <div class="scroll-container" id="scroll-wrapper">
          <modus-wc-table
            id="infinite-table"
            .columns=\${createSortableColumns()}
            .data=\${[]}
            .density=\${args.density}
            .hover=\${args.hover}
            .sortable=\${args.sortable}
            .paginated=\${false}
            .selectable=\${args.selectable}
            .zebra=\${args.zebra}
            .editable=\${args.editable}
            @rowClick=\${action('rowClick')}
            @sortChange=\${action('sortChange')}
            @rowSelectionChange=\${action('rowSelectionChange')}
          ></modus-wc-table>
          <div class="loading-indicator" id="loading" style="display: none;">
            Loading more data...
          </div>
        </div>

        <script>
          (function () {
            // Simulated data fetching function
            const fetchMoreData = async (startIndex, count) => {
              // Simulate API delay
              await new Promise((resolve) => setTimeout(resolve, 500));

              const data = [];
              const maxRows = 1000;
              const endIndex = Math.min(startIndex + count, maxRows);

              for (let i = startIndex; i < endIndex; i++) {
                data.push({
                  id: (i + 1).toString(),
                  name: \\\`User \\\${i + 1}\\\`,
                  email: \\\`user\\\${i + 1}@example.com\\\`,
                  role: ['Admin', 'User', 'Manager', 'Guest'][i % 4],
                });
              }

              return {
                data,
                hasMore: endIndex < maxRows,
                total: maxRows,
              };
            };

            // Initialize infinite scrolling
            const table = document.getElementById('infinite-table');
            const scrollContainer = document.getElementById('scroll-wrapper');
            const loadingIndicator = document.getElementById('loading');
            const loadedCountSpan = document.getElementById('loaded-count');

            let currentData = [];
            let isLoading = false;
            let hasMore = true;
            const batchSize = 20;

            // Load initial data
            const loadInitialData = async () => {
              const response = await fetchMoreData(0, batchSize);
              currentData = response.data;
              hasMore = response.hasMore;
              table.data = [...currentData];
              loadedCountSpan.textContent = currentData.length;
            };

            // Handle scroll event
            const handleScroll = async () => {
              if (isLoading || !hasMore) return;

              const scrollTop = scrollContainer.scrollTop;
              const scrollHeight = scrollContainer.scrollHeight;
              const clientHeight = scrollContainer.clientHeight;

              // Check if user has scrolled to bottom (with 50px threshold)
              if (scrollTop + clientHeight >= scrollHeight - 50) {
                isLoading = true;
                loadingIndicator.style.display = 'block';

                try {
                  const response = await fetchMoreData(
                    currentData.length,
                    batchSize
                  );

                  if (response.data.length > 0) {
                    currentData = [...currentData, ...response.data];
                    hasMore = response.hasMore;

                    // Update table data
                    table.data = [...currentData];
                    loadedCountSpan.textContent = currentData.length;

                    // Log the fetch action
                    console.log(
                      \\\`Loaded \\\${response.data.length} more rows. Total: \\\${currentData.length}\\\`
                    );
                  }
                } catch (error) {
                  console.error('Error loading more data:', error);
                } finally {
                  isLoading = false;
                  loadingIndicator.style.display = 'none';

                  if (!hasMore) {
                    loadingIndicator.textContent = 'All data loaded';
                    loadingIndicator.style.display = 'block';
                  }
                }
              }
            };

            // Attach scroll listener
            scrollContainer.addEventListener('scroll', handleScroll);

            // Load initial data
            loadInitialData();

            // Cleanup on unmount (for Storybook)
            return () => {
              scrollContainer.removeEventListener('scroll', handleScroll);
            };
          })();
        <\/script>
      </div>
    \`;
  },
  args: {
    density: 'comfortable',
    hover: true,
    sortable: true,
    selectable: 'none',
    zebra: false,
    editable: false
  },
  parameters: {
    docs: {
      description: {
        story: \`
This story demonstrates how to implement infinite scrolling with the Modus Table component.

## Implementation Details

- **Pagination disabled**: Set \\\`paginated={false}\\\` to handle data loading manually
- **Scroll container**: Wrap the table in a fixed-height container with overflow
- **Scroll detection**: Monitor scroll position to trigger data loading when near bottom
- **Data management**: Append new data to existing array and update table's data prop
- **Loading states**: Show loading indicator while fetching more data
- **Performance**: Consider implementing virtualization for very large datasets

## Key Considerations

1. **Performance**: With thousands of rows, consider virtual scrolling solutions
2. **Sorting**: May need special handling for sorting across all data vs. loaded data
3. **Selection**: Row selection state must be maintained across data loads
4. **Search/Filter**: Should work with the full dataset, not just loaded rows
        \`
      }
    }
  }
}`,...(Z=(G=C.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};const gn=["Default","Hover","Sorting","Pagination","CheckBoxRowSelection","InlineEditing","InfiniteScrolling"];export{f as CheckBoxRowSelection,g as Default,h as Hover,C as InfiniteScrolling,v as InlineEditing,w as Pagination,b as Sorting,gn as __namedExportsOrder,pn as default};
