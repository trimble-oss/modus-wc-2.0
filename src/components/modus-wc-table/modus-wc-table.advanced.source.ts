const TANSTACK_TABLE_V8_DOCS = 'https://tanstack.com/table/v8/docs';

export const TABLE_MODE_DOCS_INTRO = `
Choose simple mode for standard tables; choose advanced mode when you need deeper customization.

**Simple mode**

Simple mode is the default. Pass \`columns\` (\`ITableColumn[]\`) and row \`data\`, then enable built-in behavior with component props—sorting, pagination, row selection, inline editing, density, hover, and zebra styling.

**Advanced mode**

Advanced mode (\`mode="advanced"\`) uses \`columnDefs\` and \`tableOptions\` instead of \`columns\` and convenience props. When you need more customization than simple mode provides, implement it with the [TanStack Table API](${TANSTACK_TABLE_V8_DOCS}/api/core/table). Custom \`header\` and \`cell\` renderers can use Modus components (\`modus-wc-icon\`, \`modus-wc-checkbox\`, and others).

**Implementation**

1. Set \`mode="advanced"\`.
2. Define \`columnDefs\` for columns and custom header/cell UI.
3. Pass \`tableOptions\` for row models, callbacks, and feature options.
4. Call \`getTableInstance()\` when you need imperative access to the TanStack table ([Table API](${TANSTACK_TABLE_V8_DOCS}/api/core/table)).

> **Note:**
> 
> [TanStack Table](${TANSTACK_TABLE_V8_DOCS}/api/core/table) is the headless table library behind advanced mode. It defines row models, column behavior, and table state; Modus renders that through the same table UI and styling.
>
> Advanced mode requires \`@tanstack/table-core\` in your application. Install it with \`npm install @tanstack/table-core@^8.21.3\` 
>
`.trim();

export const EXPANDABLE_SUBROWS_STORY_DOCS = `
**Expandable subrows (advanced mode)**

1. Set \`mode="advanced"\` on \`modus-wc-table\`.
2. Store child rows on each parent in a \`subRows\` array.
3. In \`tableOptions\`, provide \`getSubRows: (row) => row.subRows ?? []\` and \`getExpandedRowModel()\` from TanStack Table.
4. In a custom \`cell\` renderer, show an accessible expand/collapse control for rows where \`row.getCanExpand()\` is true and call \`row.toggleExpanded()\` on click.
5. Indent nested rows using \`row.depth\` (for example \`paddingInlineStart\` based on depth).

See the TanStack [expanding guide](${TANSTACK_TABLE_V8_DOCS}/guide/expanding) for more detail.
`.trim();

export const getExpandableSubrowsSourceCode = (): string =>
  `<div style="max-height: 320px; overflow: auto;">
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
</script>`;
