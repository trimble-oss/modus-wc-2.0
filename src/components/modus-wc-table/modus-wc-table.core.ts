import {
  ColumnDef,
  createTable,
  ExpandedState,
  functionalUpdate,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  Row,
  RowSelectionState,
  SortingState,
  TableOptions,
  TableState,
  Table as TanStackTable,
  Updater,
} from '@tanstack/table-core';

export interface Table<
  TData extends Record<string, unknown>,
> extends TanStackTable<TData> {
  setData: (data: TData[]) => void;
  setColumns: (columns: ColumnDef<TData, unknown>[]) => void;
}

export type { SortingState, PaginationState, ColumnDef, ExpandedState };
export { getExpandedRowModel };

type ColumnDefContent = unknown;

const isDomElement = (value: unknown): value is HTMLElement =>
  typeof value === 'object' &&
  value !== null &&
  'nodeType' in value &&
  (value as Node).nodeType === 1;

/**
 * Renders TanStack column header/cell definitions for the Stencil render path.
 */
export function renderColumnDefContent(
  def: ColumnDefContent,
  ctx: unknown
): string | HTMLElement {
  if (def === undefined || def === null) {
    return '';
  }

  if (typeof def === 'string') {
    return def;
  }

  if (typeof def === 'function') {
    const result = (def as (context: unknown) => unknown)(ctx);

    if (result === undefined || result === null) {
      return '';
    }

    if (result instanceof HTMLElement || isDomElement(result)) {
      return result;
    }

    if (
      typeof result === 'string' ||
      typeof result === 'number' ||
      typeof result === 'boolean'
    ) {
      return String(result);
    }

    return JSON.stringify(result);
  }

  if (def instanceof HTMLElement || isDomElement(def)) {
    return def;
  }

  if (typeof def === 'number' || typeof def === 'boolean') {
    return String(def);
  }

  return JSON.stringify(def);
}

type LooseTableState = Omit<Partial<TableState>, 'pagination'> & {
  pagination?: Partial<PaginationState>;
};

/**
 * Fills missing TanStack table state slices with safe defaults.
 */
export function normalizeTableState(
  state: LooseTableState | object
): TableState {
  const loose = state as LooseTableState;
  return {
    ...loose,
    grouping: loose.grouping ?? [],
    columnFilters: loose.columnFilters ?? [],
    sorting: loose.sorting ?? [],
    expanded: loose.expanded ?? {},
    rowSelection: loose.rowSelection ?? {},
    columnVisibility: loose.columnVisibility ?? {},
    columnPinning: loose.columnPinning ?? { left: [], right: [] },
    pagination: {
      pageIndex: loose.pagination?.pageIndex ?? 0,
      pageSize: loose.pagination?.pageSize ?? 10,
    },
  } as TableState;
}

/**
 * Composes user state-change callbacks with internal TanStack setState updates.
 */
export function createStateSyncCallbacks<TData extends Record<string, unknown>>(
  getTable: () => TanStackTable<TData> | null,
  user: {
    onRowSelectionChange?: (u: Updater<RowSelectionState>) => void;
    onSortingChange?: (u: Updater<SortingState>) => void;
    onPaginationChange?: (u: Updater<PaginationState>) => void;
  }
) {
  return {
    onRowSelectionChange: (updater: Updater<RowSelectionState>) => {
      const table = getTable();
      if (table) {
        table.setState((old) => ({
          ...old,
          rowSelection: functionalUpdate(updater, old.rowSelection ?? {}),
        }));
      }
      user.onRowSelectionChange?.(updater);
    },
    onSortingChange: (updater: Updater<SortingState>) => {
      const table = getTable();
      if (table) {
        table.setState((old) => ({
          ...old,
          sorting: functionalUpdate(updater, old.sorting ?? []),
        }));
      }
      user.onSortingChange?.(updater);
    },
    onPaginationChange: (updater: Updater<PaginationState>) => {
      const table = getTable();
      if (table) {
        table.setState((old) => ({
          ...old,
          pagination: functionalUpdate(
            updater,
            old.pagination ?? { pageIndex: 0, pageSize: 10 }
          ),
        }));
      }
      user.onPaginationChange?.(updater);
    },
  };
}

function enhanceTable<TData extends Record<string, unknown>>(
  table: TanStackTable<TData>
): Table<TData> {
  const enhancedTable = table as Table<TData>;

  enhancedTable.setData = (newData: TData[]) => {
    table.setOptions((prev) => ({
      ...prev,
      data: newData,
    }));
    table.getRowModel();
  };

  enhancedTable.setColumns = (newColumns: ColumnDef<TData, unknown>[]) => {
    table.setOptions((prev) => ({
      ...prev,
      columns: newColumns,
    }));
    table.getRowModel();
  };

  return enhancedTable;
}

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
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: (updater: Updater<RowSelectionState>) => void;
  getRowId?: (originalRow: TData, index: number, parent?: unknown) => string;
  onSortingChange?: (updater: Updater<SortingState>) => void;
  onPaginationChange?: (updater: Updater<PaginationState>) => void;
  tableOptions?: Partial<TableOptions<TData>>;
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
    tableOptions = {},
  } = options;

  const {
    state: userState = {},
    onSortingChange: userOnSortingChange,
    onPaginationChange: userOnPaginationChange,
    onRowSelectionChange: userOnRowSelectionChange,
    getCoreRowModel: userGetCoreRowModel,
    getSortedRowModel: userGetSortedRowModel,
    getPaginationRowModel: userGetPaginationRowModel,
    ...restTableOptions
  } = tableOptions;

  const state: Record<string, unknown> = {
    columnPinning: { left: [], right: [] },
    pagination,
    ...userState,
  };

  if (sorting !== undefined) {
    state.sorting = sorting;
  }

  if (rowSelection !== undefined) {
    state.rowSelection = rowSelection;
  }

  const table = createTable({
    data,
    columns,
    pageCount,
    enableSorting,
    manualSorting,
    manualPagination,
    enableRowSelection,
    state,
    onSortingChange: onSortingChange ?? userOnSortingChange,
    onPaginationChange: onPaginationChange ?? userOnPaginationChange,
    onRowSelectionChange: onRowSelectionChange ?? userOnRowSelectionChange,
    getRowId,
    getCoreRowModel: userGetCoreRowModel ?? getCoreRowModel(),
    getSortedRowModel: userGetSortedRowModel ?? getSortedRowModel(),
    getPaginationRowModel:
      userGetPaginationRowModel ??
      (manualPagination ? undefined : getPaginationRowModel()),
    onStateChange: () => {},
    renderFallbackValue: null,
    ...restTableOptions,
  });

  return enhanceTable(table);
}

/**
 * Creates a TanStack table for advanced mode with user-owned state via tableOptions.
 */
export function createAdvancedModusTable<
  TData extends Record<string, unknown>,
>(options: {
  data: TData[];
  columns: ColumnDef<TData, unknown>[];
  tableOptions?: Partial<TableOptions<TData>>;
  onRenderRequest?: () => void;
  getRowId?: (originalRow: TData, index: number, parent?: unknown) => string;
}): Table<TData> {
  const {
    data,
    columns,
    tableOptions = {},
    onRenderRequest,
    getRowId,
  } = options;

  const {
    state: userState = {},
    initialState: userInitialState = {},
    onStateChange: userOnStateChange,
    onRowSelectionChange: userOnRowSelectionChange,
    onSortingChange: userOnSortingChange,
    onPaginationChange: userOnPaginationChange,
    getCoreRowModel: userGetCoreRowModel,
    getSortedRowModel: userGetSortedRowModel,
    getPaginationRowModel: userGetPaginationRowModel,
    manualSorting: userManualSorting,
    manualPagination: userManualPagination,
    enableRowSelection: userEnableRowSelection,
    enableSorting: userEnableSorting,
    ...restTableOptions
  } = tableOptions;

  const resolvedInitialState = normalizeTableState(userInitialState);

  const table: TanStackTable<TData> = createTable({
    data,
    columns,
    getRowId,
    manualSorting: userManualSorting ?? true,
    manualPagination:
      userManualPagination ?? (userGetPaginationRowModel ? false : true),
    enableRowSelection: userEnableRowSelection ?? false,
    enableSorting: userEnableSorting ?? false,
    state: {
      ...resolvedInitialState,
      ...userState,
    },
    initialState: resolvedInitialState,
    getCoreRowModel: userGetCoreRowModel ?? getCoreRowModel(),
    getSortedRowModel: userGetSortedRowModel,
    getPaginationRowModel: userGetPaginationRowModel,
    onStateChange: (updater) => {
      table.setOptions((prev) => ({
        ...prev,
        state: normalizeTableState(
          functionalUpdate(updater, prev.state as TableState)
        ),
      }));
      userOnStateChange?.(updater);
      onRenderRequest?.();
    },
    renderFallbackValue: null,
    ...restTableOptions,
    ...createStateSyncCallbacks(() => table, {
      onRowSelectionChange: userOnRowSelectionChange,
      onSortingChange: userOnSortingChange,
      onPaginationChange: userOnPaginationChange,
    }),
  });

  return enhanceTable(table);
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
      accessorFn: (row: TData) => {
        const value = row[column.accessor];
        return value;
      },
      sortingFn: (rowA, rowB, columnId) => {
        const valueA = rowA.getValue(columnId);
        const valueB = rowB.getValue(columnId);

        if (valueA === null || valueA === undefined) return 1;
        if (valueB === null || valueB === undefined) return -1;

        if (!isNaN(Number(valueA)) && !isNaN(Number(valueB))) {
          return Number(valueA) - Number(valueB);
        }

        if (valueA instanceof Date && valueB instanceof Date) {
          return valueA.getTime() - valueB.getTime();
        }

        const strA = String(valueA).toLowerCase();
        const strB = String(valueB).toLowerCase();

        return strA.localeCompare(strB);
      },
      header:
        typeof column.header === 'string' ? column.header : () => column.header,
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
