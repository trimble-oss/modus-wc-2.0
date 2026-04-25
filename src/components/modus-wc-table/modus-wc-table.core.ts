import {
  ColumnDef,
  createTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  RowSelectionState,
  SortingState,
  Table as TanStackTable,
  Updater,
} from '@tanstack/table-core';

// Extend the TanStack Table with additional methods we need
export interface Table<TData extends Record<string, unknown>>
  extends TanStackTable<TData> {
  setData: (data: TData[]) => void;
  setColumns: (columns: ColumnDef<TData, unknown>[]) => void;
}

export type { SortingState, PaginationState, ColumnDef };

/**
 * Creates a configured TanStack table instance with enhanced functionality
 */
export function createModusTable<
  TData extends Record<string, unknown>,
>(options: {
  data: TData[];
  columns: ColumnDef<TData, unknown>[];
  pageCount?: number;
  sorting?: SortingState;
  pagination?: PaginationState;
  enableSorting?: boolean;
  manualSorting?: boolean;
  manualPagination?: boolean;
  enableRowSelection?: boolean;
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: (updater: Updater<RowSelectionState>) => void;
  getRowId?: (originalRow: TData, index: number, parent?: unknown) => string;
  onSortingChange?: (updater: Updater<SortingState>) => void;
  onPaginationChange?: (updater: Updater<PaginationState>) => void;
}): Table<TData> {
  const {
    data,
    columns,
    pageCount,
    sorting,
    pagination = { pageIndex: 0, pageSize: 10 },
    enableSorting = true,
    manualSorting = false,
    manualPagination = false,
    enableRowSelection = false,
    rowSelection,
    onRowSelectionChange,
    getRowId,
    onSortingChange,
    onPaginationChange,
  } = options;
  const state: Partial<{
    pagination: PaginationState;
    sorting: SortingState;
    rowSelection: RowSelectionState;
  }> = {
    pagination,
  };
  if (sorting !== undefined) {
    state.sorting = sorting;
  }
  if (rowSelection !== undefined) {
    state.rowSelection = rowSelection;
  }

  // Create the table with all options
  const table = createTable({
    data,
    columns,
    pageCount,
    enableSorting,
    manualSorting,
    manualPagination,
    enableRowSelection,
    state,
    onSortingChange,
    onPaginationChange,
    onRowSelectionChange,
    getRowId,
    getCoreRowModel: getCoreRowModel(),
    // Always include getSortedRowModel even for empty sorting state
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: manualPagination
      ? undefined
      : getPaginationRowModel(),
    // Required defaults for TableOptionsResolved
    onStateChange: () => {},
    renderFallbackValue: null,
  });

  // Add custom methods to enhance the table API
  const enhancedTable = table as Table<TData>;

  // Add setData method to update data without recreating the entire table
  enhancedTable.setData = (newData: TData[]) => {
    table.setOptions((prev) => ({
      ...prev,
      data: newData,
    }));
    table.getRowModel(); // Force row model recalculation
  };

  // Add setColumns method to update columns without recreating the entire table
  enhancedTable.setColumns = (newColumns: ColumnDef<TData, unknown>[]) => {
    table.setOptions((prev) => ({
      ...prev,
      columns: newColumns,
    }));
    table.getRowModel(); // Force row model recalculation
  };

  return enhancedTable;
}

/**
 * Transforms our column format to TanStack column definition
 */
export function transformColumns<TData extends Record<string, unknown>>(
  columns: Array<{
    id: string;
    accessor: string;
    header: string | HTMLElement;
    sortable?: boolean;
    className?: string;
    width?: string;
    cellRenderer?: (value: unknown, row: unknown) => string | HTMLElement;
  }>,
  enableSorting: boolean = true
): ColumnDef<TData, unknown>[] {
  const result = columns.map((column) => {
    return {
      id: column.id,
      // Use accessorFn instead of accessorKey for more reliable sorting
      accessorFn: (row: TData) => {
        const value = row[column.accessor];
        return value;
      },
      // Add explicit sorting function to handle different data types properly
      sortingFn: (rowA, rowB, columnId) => {
        const valueA = rowA.getValue(columnId);
        const valueB = rowB.getValue(columnId);

        // Handle different data types appropriately
        if (valueA === null || valueA === undefined) return 1;
        if (valueB === null || valueB === undefined) return -1;

        // If numbers (or can be converted to numbers)
        if (!isNaN(Number(valueA)) && !isNaN(Number(valueB))) {
          return Number(valueA) - Number(valueB);
        }

        // If dates
        if (valueA instanceof Date && valueB instanceof Date) {
          return valueA.getTime() - valueB.getTime();
        }

        // Convert to strings for default comparison
        const strA = String(valueA).toLowerCase();
        const strB = String(valueB).toLowerCase();

        return strA.localeCompare(strB);
      },
      header:
        typeof column.header === 'string' ? column.header : () => column.header,
      // Only disable sorting if explicitly set to false
      enableSorting: column.sortable !== false && enableSorting,
      meta: {
        className: column.className,
        width: column.width,
        cellRenderer: column.cellRenderer,
      },
    };
  });

  return result;
}
