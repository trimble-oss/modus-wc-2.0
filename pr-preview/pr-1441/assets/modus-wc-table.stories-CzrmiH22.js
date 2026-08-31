import"./index-SE3If525.js";import{b as m}from"./lit-element-DgBvYnzn.js";import{c as pe}from"./shadow-host-helper-A4Nvcs5e.js";import{b as i}from"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function be(e,t,n){let o=[],a;return r=>{const s=e(r);return(s.length!==o.length||s.some((u,h)=>o[h]!==u))&&(o=s,a=t(...s)),a}}function ge(e,t,n,o){return{debug:()=>{var a;return(a=e==null?void 0:e.debugAll)!=null?a:e[t]},key:!1,onChange:o}}function he(){return e=>be(()=>[e.getState().expanded,e.getPreExpandedRowModel(),e.options.paginateExpandedRows],(t,n,o)=>!n.rows.length||t!==!0&&!Object.keys(t??{}).length||!o?n:we(n),ge(e.options,"debugTable"))}function we(e){const t=[],n=o=>{var a;t.push(o),(a=o.subRows)!=null&&a.length&&o.getIsExpanded()&&o.subRows.forEach(n)};return e.rows.forEach(n),{rows:t,flatRows:e.flatRows,rowsById:e.rowsById}}const k="https://tanstack.com/table/v8/docs",fe=`
Choose simple mode for standard tables; choose advanced mode when you need deeper customization.

**Simple mode**

Simple mode is the default. Pass \`columns\` (\`ITableColumn[]\`) and row \`data\`, then enable built-in behavior with component props—sorting, pagination, row selection, inline editing, density, hover, and zebra styling.

**Advanced mode**

Advanced mode (\`mode="advanced"\`) uses \`columnDefs\` and \`tableOptions\` instead of \`columns\` and convenience props. When you need more customization than simple mode provides, implement it with the [TanStack Table API](${k}/api/core/table). Custom \`header\` and \`cell\` renderers can use Modus components (\`modus-wc-icon\`, \`modus-wc-checkbox\`, and others).

**Implementation**

1. Set \`mode="advanced"\`.
2. Define \`columnDefs\` for columns and custom header/cell UI.
3. Pass \`tableOptions\` for row models, callbacks, and feature options.
4. Call \`getTableInstance()\` when you need imperative access to the TanStack table ([Table API](${k}/api/core/table)).

> **Note:**
> 
> [TanStack Table](${k}/api/core/table) is the headless table library behind advanced mode. It defines row models, column behavior, and table state; Modus renders that through the same table UI and styling.
>
> Advanced mode requires \`@tanstack/table-core\` in your application. Install it with \`npm install @tanstack/table-core@^8.21.3\` 
>
`.trim(),ve=`
**Expandable subrows (advanced mode)**

1. Set \`mode="advanced"\` on \`modus-wc-table\`.
2. Store child rows on each parent in a \`subRows\` array.
3. In \`tableOptions\`, provide \`getSubRows: (row) => row.subRows ?? []\` and \`getExpandedRowModel()\` from TanStack Table.
4. In a custom \`cell\` renderer, show an accessible expand/collapse control for rows where \`row.getCanExpand()\` is true and call \`row.toggleExpanded()\` on click.
5. Indent nested rows using \`row.depth\` (for example \`paddingInlineStart\` based on depth).

See the TanStack [expanding guide](${k}/guide/expanding) for more detail.
`.trim(),ye=()=>`<div style="max-height: 320px; overflow: auto;">
  <modus-wc-table
    id="expandable-subrows-table"
    mode="advanced"
    aria-label="Organization budget table with subrows"
  ></modus-wc-table>
</div>
<script type="module">
  import { getExpandedRowModel } from '@tanstack/table-core';

  const data = [
    {
      id: 'dept-1',
      name: 'Engineering',
      budget: 500000,
      subRows: [
        {
          id: 'team-1',
          name: 'Frontend',
          budget: 200000,
          subRows: [
            { id: 'emp-1', name: 'Alice Chen', budget: 120000 },
            { id: 'emp-2', name: 'Bob Martinez', budget: 80000 },
          ],
        },
        {
          id: 'team-2',
          name: 'Backend',
          budget: 300000,
          subRows: [
            { id: 'emp-3', name: 'Carol Davis', budget: 150000 },
            { id: 'emp-4', name: 'Dan Wilson', budget: 150000 },
          ],
        },
      ],
    },
    {
      id: 'dept-2',
      name: 'Marketing',
      budget: 250000,
      subRows: [
        {
          id: 'team-3',
          name: 'Content',
          budget: 100000,
          subRows: [{ id: 'emp-5', name: 'Eve Thompson', budget: 100000 }],
        },
        {
          id: 'team-4',
          name: 'Growth',
          budget: 150000,
          subRows: [{ id: 'emp-6', name: 'Frank Lee', budget: 150000 }],
        },
      ],
    },
  ];

  const createCaretIcon = (expanded) => {
    const icon = document.createElement('modus-wc-icon');
    icon.setAttribute('name', 'expand_more');
    icon.setAttribute('size', 'xs');
    icon.setAttribute('decorative', '');
    icon.style.transform = expanded ? 'rotate(0deg)' : 'rotate(-90deg)';
    icon.style.transition = 'transform 150ms ease';
    return icon;
  };

  const columnDefs = [
    {
      id: 'name',
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row, getValue }) => {
        const container = document.createElement('span');
        container.style.display = 'inline-flex';
        container.style.alignItems = 'center';
        container.style.gap = '0.25rem';
        container.style.paddingInlineStart = \`\${row.depth * 1.5}rem\`;

        if (row.getCanExpand()) {
          const button = document.createElement('button');
          button.type = 'button';
          button.setAttribute(
            'aria-label',
            row.getIsExpanded() ? 'Collapse row' : 'Expand row'
          );
          button.appendChild(createCaretIcon(row.getIsExpanded()));
          button.addEventListener('click', (event) => {
            event.stopPropagation();
            row.toggleExpanded();
          });
          container.appendChild(button);
        } else {
          const spacer = createCaretIcon(false);
          spacer.style.visibility = 'hidden';
          container.appendChild(spacer);
        }

        const label = document.createElement('span');
        label.textContent = String(getValue() ?? '');
        container.appendChild(label);
        return container;
      },
    },
    {
      id: 'budget',
      accessorKey: 'budget',
      header: 'Budget',
      cell: ({ getValue }) =>
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        }).format(Number(getValue() ?? 0)),
    },
  ];

  const table = document.getElementById('expandable-subrows-table');
  table.data = data;
  table.columnDefs = columnDefs;
  table.tableOptions = {
    getSubRows: (row) => row.subRows ?? [],
    getExpandedRowModel: getExpandedRowModel(),
  };
  table.density = 'comfortable';
  table.hover = true;
<\/script>`;var P=Object.freeze,Se=Object.defineProperty,p=(e,t)=>P(Se(e,"raw",{value:P(t||e.slice())})),T,A,L,O,M,q,U;const Ae={title:"Components/Table",component:"modus-wc-table",args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[],editable:!1},argTypes:{columns:{control:"object",description:"An array of column definitions.",table:{type:{detail:`
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
          `}}},density:{control:{type:"select"},options:["condensed","comfortable","relaxed"],description:"The density of the table, used to save space or increase readability."},hover:{control:"boolean",description:"Enable hover effect on table rows.",defaultValue:!0},sortable:{control:"boolean",description:"Enable sorting functionality for sortable columns.",defaultValue:!0},paginated:{control:"boolean",description:"Enable pagination for the table.",defaultValue:!1},"show-page-size-selector":{control:"boolean",description:"Show/hide the page size selector in pagination.",defaultValue:!0},caption:{control:"text",description:"Accessibility caption for the table that is visually hidden but available to screen readers."},"custom-class":{control:"text",description:"Custom CSS class to apply to the inner div."},selectable:{control:{type:"select"},options:["none","single","multi"],description:"Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows.",defaultValue:"none"},zebra:{control:"boolean",description:"Zebra striped tables differentiate rows by styling them in an alternating fashion.",defaultValue:!1},"current-page":{control:"number",description:"The current page number in pagination (1-based index).",defaultValue:1},"page-size-options":{control:"object",description:"Available options for the number of rows per page.",defaultValue:[5,10,15]},"selected-row-ids":{control:"object",description:"Array of selected row IDs. Used for controlled selection state.",defaultValue:[]},editable:{control:"boolean",description:"Enable cell editing. Either a boolean (all rows) or a predicate per row.",defaultValue:!1},"is-row-selectable":{control:!1,description:"Per-row predicate function controlling row selection eligibility.",table:{type:{summary:"(row: Record<string, unknown>) => boolean"}}}},parameters:{docs:{description:{component:fe}}}},b=()=>[{id:"id",header:"ID",accessor:"id",width:"60px"},{id:"name",header:"Name",accessor:"name",width:"100px"},{id:"email",header:"Email",accessor:"email"},{id:"role",header:"Role",accessor:"role"}],Ce=()=>b().map(t=>({...t,sortable:!0})),g=(e=5)=>{const t=[];for(let n=1;n<=e;n++)t.push({id:n.toString(),name:`User ${n}`,email:`user${n}@example.com`,role:n%2===0?"Admin":"User"});return t},De=()=>[{id:"id",header:"ID",accessor:"id",width:"60px"},{id:"name",header:"Name",accessor:"name",width:"140px"},{id:"email",header:"Email",accessor:"email"},{id:"status",header:"Status",accessor:"status",width:"120px",cellRenderer:e=>{const t=document.createElement("span"),n=typeof e=="string"?e:"";return t.textContent=n,t.style.fontWeight=n==="Locked"?"600":"400",t.style.color=n==="Locked"?"var(--modus-wc-color-danger, #da212c)":"var(--modus-wc-color-base-content, inherit)",t}}],Ee=()=>[{id:"1",name:"John Doe",email:"john.doe@example.com",status:"Active"},{id:"2",name:"Jane Smith",email:"jane.smith@example.com",status:"Locked"},{id:"3",name:"Bob Johnson",email:"bob.johnson@example.com",status:"Active"},{id:"4",name:"Carol White",email:"carol.white@example.com",status:"Locked"},{id:"5",name:"David Lee",email:"david.lee@example.com",status:"Active"}],w={render:e=>{const t=e.columns||b(),n=e.data||g();return m(T||(T=p([`
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
    `])),t,n,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,e.caption,i("rowClick"),i("sortChange"),i("paginationChange"),i("rowSelectionChange"),i("cellEditStart"),i("cellEditCommit"))},args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[],editable:!1}},f={render:e=>{const t=e.columns||b(),n=e.data||g();return m(A||(A=p([`
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
    `])),t,n,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,i("rowClick"))},args:{density:"comfortable",hover:!0}},v={render:e=>{const t=e.columns||Ce(),n=e.data||g();return m(L||(L=p([`
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
    `])),t,n,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,i("sortChange"))},args:{density:"comfortable",sortable:!0}},y={render:e=>{const t=e.columns||b(),n=e.data||g(15);return m(O||(O=p([`
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
    `])),t,n,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,i("paginationChange"))},args:{density:"comfortable",paginated:!0,"show-page-size-selector":!0}},S={render:e=>{const t=e.columns||b(),n=e.data||g();return m(M||(M=p([`
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
    `])),t,n,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],e.editable,i("rowSelectionChange"))},args:{density:"comfortable",selectable:"multi"}},C={render:e=>{const t=De(),n=Ee(),o=[{label:"Active",value:"Active"},{label:"Locked",value:"Locked"}];return m(q||(q=p([`
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
    `])),o,t,n,e.density,e.hover??!0,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],i("rowClick"),i("rowSelectionChange"))},parameters:{controls:{include:["selectable","selected-row-ids","density","hover","sortable","zebra"]},docs:{description:{story:"\nUse `isRowSelectable` to control which rows can be selected when `selectable` is `single` or `multi`.\n\n**Type:** `(row: Record<string, unknown>) => boolean`\n\n**Default:** All rows are selectable when the prop is omitted.\n\n**Usage:**\n\n```js\ntable.isRowSelectable = (row) => row.status !== 'Locked';\n```\n\nReturn `true` when the row may be selected; return `false` to disable its selection checkbox. Ineligible rows stay interactive—cell clicks and `rowClick` still work, but row clicks do not toggle selection. Select-all and `selectedRowIds` ignore ineligible rows automatically.\n\nStorybook Controls cannot edit function props, so this story uses a **Non-selectable status** dropdown to pick which status is excluded (`Active` or `Locked`). That maps to:\n\n```js\nisRowSelectable = (row) => row.status !== selectedStatus;\n```\n\nUse Controls for **selectable** mode and **selected-row-ids**.\n        "}}},args:{density:"comfortable",hover:!0,sortable:!0,paginated:!1,selectable:"multi"}},D={render:e=>{const t=[{id:"id",header:"ID",accessor:"id",width:"20px"},{id:"name",header:"Name",accessor:"name"},{id:"status",header:"Status",accessor:"status",editor:"custom",customEditorRenderer:(o,a)=>{const r=document.createElement("div");r.style.width="100%";const s=document.createElement("modus-wc-autocomplete");s.items=[{label:"Active",value:"Active",visibleInMenu:!0},{label:"Inactive",value:"Inactive",visibleInMenu:!0},{label:"Pending",value:"Pending",visibleInMenu:!0}],s.value=o,s.style.width="100%";const l=u=>{a(u.detail.value)};return s.addEventListener("itemSelect",l),r.appendChild(s),setTimeout(()=>{const u=s.querySelector("input");u==null||u.focus()},0),r},cellRenderer:o=>{const r={Active:"green",Inactive:"gray",Pending:"blue"}[o]||"black",s=document.createElement("span");return s.textContent=o,s.style.color=r,s.style.fontWeight="bold",s}},{id:"dueDate",header:"Due Date",accessor:"dueDate",editor:"custom",customEditorRenderer:(o,a)=>{const r=document.createElement("div");r.style.width="100%";const s=document.createElement("modus-wc-date");s.value=o,s.style.width="100%",s.bordered=!1;let l=!1;const u=c=>{if(c.key==="Enter"){c.preventDefault();const d=s.querySelector("input");d&&d.value&&!l&&(l=!0,a(d.value))}else if(c.key==="Escape")c.preventDefault(),l||(l=!0,a(o||""));else if(c.key==="Tab"){const d=s.querySelector("input");d&&d.value&&!l&&(l=!0,a(d.value))}},h=c=>{var x,R;const d=c.relatedTarget;if(d&&(r.contains(d)||(x=s.shadowRoot)!=null&&x.contains(d))||((R=s.shadowRoot)==null?void 0:R.querySelector('[class*="calendar"]')))return;const z=s.querySelector("input");z&&z.value&&!l&&(l=!0,setTimeout(()=>a(z.value),50))};return r.addEventListener("keydown",u),r.addEventListener("focusout",h),r.appendChild(s),setTimeout(()=>{const c=s.querySelector("input");c==null||c.focus()},0),r},cellRenderer:o=>{if(!o)return"-";const a=o,r=a.split(/[-/]/);let s;if(r.length===3&&r[0].length<=2){const c=parseInt(r[0],10),d=parseInt(r[1],10)-1,I=parseInt(r[2],10);s=new Date(I,d,c)}else s=new Date(a);if(isNaN(s.getTime()))return a;const l=s.getDate().toString().padStart(2,"0"),u=(s.getMonth()+1).toString().padStart(2,"0"),h=s.getFullYear();return`${l}-${u}-${h}`}}],n=[{id:"1",name:"John Doe",status:"Active",dueDate:"15-10-2025"},{id:"2",name:"Jane Smith",status:"Inactive",dueDate:"20-11-2025"},{id:"3",name:"Bob Johnson",status:"Pending",dueDate:"05-12-2025"}];return m(U||(U=p([`
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
    `])),t,n,e.density,e.hover,e.sortable,e.paginated,e["show-page-size-selector"],e["custom-class"],e.selectable,e.zebra,e["current-page"],e["page-size-options"],e["selected-row-ids"],!0,i("cellEditStart"),i("cellEditCommit"))},args:{density:"comfortable",hover:!1,sortable:!0,paginated:!1,"show-page-size-selector":!0,"custom-class":"",selectable:"none",zebra:!1,"current-page":1,"page-size-options":[5,10,15],"selected-row-ids":[]}},$e=()=>[{id:"dept-1",name:"Engineering",budget:5e5,subRows:[{id:"team-1",name:"Frontend",budget:2e5,subRows:[{id:"emp-1",name:"Alice Chen",budget:12e4},{id:"emp-2",name:"Bob Martinez",budget:8e4}]},{id:"team-2",name:"Backend",budget:3e5,subRows:[{id:"emp-3",name:"Carol Davis",budget:15e4},{id:"emp-4",name:"Dan Wilson",budget:15e4}]}]},{id:"dept-2",name:"Marketing",budget:25e4,subRows:[{id:"team-3",name:"Content",budget:1e5,subRows:[{id:"emp-5",name:"Eve Thompson",budget:1e5}]},{id:"team-4",name:"Growth",budget:15e4,subRows:[{id:"emp-6",name:"Frank Lee",budget:15e4}]}]}],B=e=>{const t=document.createElement("modus-wc-icon");return t.setAttribute("name","expand_more"),t.setAttribute("size","xs"),t.setAttribute("decorative",""),t.style.transform=e?"rotate(0deg)":"rotate(-90deg)",t.style.transition="transform 150ms ease",t},ke=()=>[{id:"name",accessorKey:"name",header:"Name",cell:({row:e,getValue:t})=>{const n=document.createElement("span");if(n.style.display="inline-flex",n.style.alignItems="center",n.style.gap="0.25rem",n.style.paddingInlineStart=`${e.depth*1.5}rem`,e.getCanExpand()){const r=document.createElement("button");r.type="button",r.setAttribute("aria-label",e.getIsExpanded()?"Collapse row":"Expand row"),r.appendChild(B(e.getIsExpanded())),r.addEventListener("click",s=>{s.stopPropagation(),e.toggleExpanded()}),n.appendChild(r)}else{const r=B(!1);r.style.visibility="hidden",n.appendChild(r)}const o=document.createElement("span"),a=t();return o.textContent=typeof a=="string"||typeof a=="number"?String(a):"",n.appendChild(o),n}},{id:"budget",accessorKey:"budget",header:"Budget",cell:({getValue:e})=>{const t=Number(e()??0);return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(t)}}],ze={getSubRows:e=>e.subRows??[],getExpandedRowModel:he()},E={name:"Expandable Subrows (Advanced)",render:e=>{const t=$e(),n=ke();return m`
      <div style="max-height: 320px; overflow: auto;">
        <modus-wc-table
          mode="advanced"
          aria-label="Organization budget table with subrows"
          .data=${t}
          .columnDefs=${n}
          .tableOptions=${ze}
          .density=${e.density}
          .hover=${e.hover}
          .zebra=${e.zebra}
          @rowClick=${i("rowClick")}
        ></modus-wc-table>
      </div>
    `},args:{density:"comfortable",hover:!0,zebra:!1},parameters:{docs:{description:{story:ve},source:{code:ye()}}}},$={render:e=>{if(!customElements.get("table-shadow-host")){const t=pe({componentTag:"modus-wc-table",propsMapper:(n,o)=>{const a=o;a.caption=n.caption??"",a.columns=n.columns??b(),a.currentPage=n["current-page"]??1,a.data=n.data??g(),a.customClass=n["custom-class"]||"",a.density=n.density??"comfortable",a.editable=!!n.editable,a.hover=!!n.hover,a.paginated=!!n.paginated,a.pageSizeOptions=n["page-size-options"]??[5,10,15],a.selectable=n.selectable??"none",a.selectedRowIds=n["selected-row-ids"]??[],a.showPageSizeSelector=n["show-page-size-selector"]!==!1,a.sortable=!!n.sortable,a.zebra=!!n.zebra,o.dataset.eventsWired||(o.addEventListener("rowClick",i("rowClick")),o.addEventListener("sortChange",i("sortChange")),o.addEventListener("paginationChange",i("paginationChange")),o.addEventListener("rowSelectionChange",i("rowSelectionChange")),o.addEventListener("cellEditStart",i("cellEditStart")),o.addEventListener("cellEditCommit",i("cellEditCommit")),o.dataset.eventsWired="true")}});customElements.define("table-shadow-host",t)}return m`<table-shadow-host .props=${{...e}}></table-shadow-host>`}};var N,_,F;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(_=w.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var j,W,J;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(J=(W=f.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var K,V,Y;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(V=v.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var H,G,X;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(X=(G=y.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Z,Q,ee;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ne,te,ae;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,se,re;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(se=D.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,le,ce;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Expandable Subrows (Advanced)',
  render: args => {
    const data = createHierarchicalData();
    const columnDefs = createSubrowColumnDefs();
    return html\`
      <div style="max-height: 320px; overflow: auto;">
        <modus-wc-table
          mode="advanced"
          aria-label="Organization budget table with subrows"
          .data=\${data}
          .columnDefs=\${columnDefs}
          .tableOptions=\${subrowTableOptions}
          .density=\${args.density}
          .hover=\${args.hover}
          .zebra=\${args.zebra}
          @rowClick=\${action('rowClick')}
        ></modus-wc-table>
      </div>
    \`;
  },
  args: {
    density: 'comfortable',
    hover: true,
    zebra: false
  },
  parameters: {
    docs: {
      description: {
        story: EXPANDABLE_SUBROWS_STORY_DOCS
      },
      source: {
        code: getExpandableSubrowsSourceCode()
      }
    }
  }
}`,...(ce=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,me;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const Le=["Default","Hover","Sorting","Pagination","CheckBoxRowSelection","PartialRowSelection","InlineEditing","ExpandableSubrows","ShadowDomParent"];export{S as CheckBoxRowSelection,w as Default,E as ExpandableSubrows,f as Hover,D as InlineEditing,y as Pagination,C as PartialRowSelection,$ as ShadowDomParent,v as Sorting,Le as __namedExportsOrder,Ae as default};
