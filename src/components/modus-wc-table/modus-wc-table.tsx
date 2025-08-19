/* eslint-disable @typescript-eslint/no-base-to-string */
import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import {
  ColumnDef,
  PaginationState,
  Row,
  RowSelectionState,
  SortingState,
  Updater,
} from '@tanstack/table-core';
import { convertTablePropsToClasses } from './modus-wc-table.tailwind';
import { Density, ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';
import {
  createModusTable,
  Table,
  transformColumns,
} from './modus-wc-table.core';

export interface ITableColumn {
  /** Key to access data from row object */
  accessor: string;
  /** Custom cell renderer */
  cellRenderer?: (value: unknown, row: unknown) => string | HTMLElement;
  /** Class names for the column */
  className?: string;
  /** Header content - can be string or HTML */
  header: string | HTMLElement;
  /** Unique identifier for the column */
  id: string;
  /** Width style (e.g., '200px', '50%') */
  width?: string;
  /** Whether the column is sortable */
  sortable?: boolean;
  /** Built-in editor type to render when the cell is in edit mode. */
  editor?: 'text' | 'number' | 'autocomplete' | 'date' | 'custom';
  /** Extra props specific to the editor component. */
  editorProps?: Record<string, unknown>;
  /** Custom renderer invoked when editor === 'custom'. Must call onCommit with the new value. */
  customEditorRenderer?: (
    value: unknown,
    onCommit: (val: unknown) => void,
    row: Record<string, unknown>
  ) => HTMLElement | string;

  /**
   * Alternative to built-in editors: raw HTML string. `${value}` placeholder will
   * be replaced with the current cell value.
   */
  editorTemplate?: string;

  /**
   * Runs once after the editor element is added to the DOM. Gives full control
   * for wiring events, populating data, etc.
   */
  editorSetup?: (
    el: HTMLElement,
    row: Record<string, unknown>,
    commit: (newVal: unknown) => void
  ) => void;
}

export interface IPaginationChangeEventDetail {
  currentPage: number;
  pageSize: number;
}

@Component({
  tag: 'modus-wc-table',
  styleUrl: 'modus-wc-table.scss',
  shadow: false,
})
export class ModusWcTable {
  private inheritedAttributes: Attributes = {};
  private table: Table<Record<string, unknown>> | null = null;
  private tanStackColumns: ColumnDef<Record<string, unknown>, unknown>[] = [];

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Enable cell editing. Either a boolean (all rows) or a predicate per row. */
  @Prop() editable?: boolean | ((row: Record<string, unknown>) => boolean) =
    false;

  /** An array of column definitions. */
  @Prop() columns!: ITableColumn[];

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** An array of data objects. */
  @Prop() data!: Record<string, unknown>[];

  /** The density of the table, used to save space or increase readability. */
  @Prop() density?: Density = 'comfortable';

  /** Enable hover effect on table rows. */
  @Prop() hover?: boolean = true;

  /** The current page number in pagination (1-based index). */
  @Prop() currentPage: number = 1;

  /** Enable pagination for the table. */
  @Prop() paginated?: boolean = false;

  /** Available options for the number of rows per page. */
  @Prop() pageSizeOptions: number[] = [5, 10, 15];

  /** Show/hide the page size selector in pagination. */
  @Prop() showPageSizeSelector?: boolean = true;

  /** Enable sorting functionality for sortable columns. */
  @Prop() sortable?: boolean = true;

  /** Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows. */
  @Prop() selectable?: 'none' | 'single' | 'multi' = 'none';

  /** Array of selected row IDs. Used for controlled selection state. */
  @Prop() selectedRowIds?: string[];

  /** Zebra striped tables differentiate rows by styling them in an alternating fashion. */
  @Prop() zebra?: boolean = false;

  /** Accessibility caption for the table (visually hidden but available to screen readers). */
  @Prop() caption?: string;

  /** Currently editing cell coordinates */
  @State() activeEditor?: { rowIndex: number; colId: string } | null = null;

  /** Emits when cell editing starts. */
  @StencilEvent() cellEditStart!: EventEmitter<{
    rowIndex: number;
    colId: string;
  }>;

  /** Emits when cell editing is committed with the new value. */
  @StencilEvent() cellEditCommit!: EventEmitter<{
    rowIndex: number;
    colId: string;
    newValue: unknown;
    updatedRow: Record<string, unknown>;
  }>;

  /** Internal state for column sorting. */
  @State() sorting: SortingState = [];

  /** Internal state for pagination. */
  @State() internalPagination: PaginationState = {
    pageIndex: 0,
    pageSize: 5,
  };

  /** Internal state for row selection. */
  @State() internalRowSelection: RowSelectionState = {};

  /** Emits when a row is clicked. */
  @StencilEvent() rowClick!: EventEmitter<{
    row: Record<string, unknown>;
    index: number;
  }>;

  /** Emits when sorting changes with the new sorting state. */
  @StencilEvent() sortChange!: EventEmitter<SortingState>;

  /** Emits when pagination changes with the new pagination state. */
  @StencilEvent() paginationChange!: EventEmitter<IPaginationChangeEventDetail>;

  /** Emits when row selection changes with the selected rows and their IDs. */
  @StencilEvent() rowSelectionChange!: EventEmitter<{
    selectedRows: Record<string, unknown>[];
    selectedRowIds: string[];
  }>;
  @Watch('currentPage')
  handleCurrentPageChange(newValue: number) {
    if (!this.table) return;

    if (this.internalPagination.pageIndex !== newValue - 1) {
      this.internalPagination = {
        ...this.internalPagination,
        pageIndex: newValue - 1,
      };

      // This will trigger onPaginationChange callback
      this.table.setPagination(this.internalPagination);
    }
  }

  @Watch('data')
  handleDataChange(newData: Record<string, unknown>[]) {
    if (this.table) {
      this.table.setOptions((prev) => ({ ...prev, data: [...newData] }));
    } else if (newData && this.columns) {
      // If table doesn't exist yet but we have both data and columns, initialize
      this.initializeTable();
    }
  }

  @Watch('columns')
  handleColumnsChange(newColumns: ITableColumn[]) {
    if (this.table) {
      this.tanStackColumns = transformColumns(newColumns, this.sortable);
      this.table.setOptions((prev) => ({
        ...prev,
        columns: this.tanStackColumns,
      }));
    } else if (newColumns && this.data) {
      // If table doesn't exist yet but we have both columns and data, initialize
      this.initializeTable();
    }
  }

  @Watch('sortable')
  handleSortableChange(newSortable: boolean) {
    if (this.table) {
      this.table.setOptions((prev) => ({
        ...prev,
        enableSorting: newSortable,
        columns: transformColumns(this.columns, newSortable),
        state: { ...prev.state, sorting: [] },
      }));
    }
  }

  @Watch('paginated')
  handlePaginatedChange(newPaginated: boolean) {
    if (this.table) {
      this.table.setOptions((prev) => ({
        ...prev,
        manualPagination: !newPaginated,
      }));
    }
  }

  @Watch('selectedRowIds')
  handleSelectedRowIdsChange(newIds: string[] | undefined) {
    if (!this.table) return;
    if (Array.isArray(newIds)) {
      const selection: RowSelectionState = {};
      newIds.forEach((id) => (selection[id] = true));
      this.internalRowSelection = selection;
      this.table.setRowSelection(selection);
    }
  }

  componentWillLoad() {
    if (!this.columns) {
      console.error('ModusWcTable: columns is required.');
    }

    if (!this.data) {
      console.error('ModusWcTable: data is required.');
    }

    this.internalPagination = {
      pageIndex: this.currentPage - 1,
      pageSize: this.pageSizeOptions[0],
    };

    this.inheritedAttributes = inheritAriaAttributes(this.el);
    this.initializeTable();
  }

  // Handle sorting changes from TanStack
  private handleSortingChange = (updater: Updater<SortingState>) => {
    // Get the new sorting state
    const newSorting =
      typeof updater === 'function' ? updater(this.sorting) : updater;

    // Update the component state - this should trigger a re-render
    this.sorting = [...newSorting]; // Create a new array to ensure Stencil detects the change

    if (this.table) {
      // Tell TanStack the new sorting so it can recompute row model
      this.table.setOptions((prev) => ({
        ...prev,
        state: { ...prev.state, sorting: newSorting },
      }));
      // Trigger row-model recomputation
      void this.table.getSortedRowModel().rows;
    }

    // Emit event
    this.sortChange.emit(newSorting);

    // Update the component state to ensure UI updates
    this.sorting = [...newSorting];
  };

  // Handle pagination changes from TanStack
  private handlePaginationChange = (updater: Updater<PaginationState>) => {
    // Get the new pagination state
    const newPagination =
      typeof updater === 'function'
        ? updater(this.internalPagination)
        : updater;

    // Update the component state
    this.internalPagination = newPagination;

    // Force a row model recalculation for immediate display
    if (this.table) {
      this.table.setOptions((prev) => ({
        ...prev,
        state: { ...prev.state, pagination: newPagination },
      }));
    }

    // Emit event
    this.paginationChange.emit({
      currentPage: newPagination.pageIndex + 1,
      pageSize: newPagination.pageSize,
    });

    this.internalPagination = newPagination;
  };

  // NEW: handle row-selection changes coming from TanStack
  private handleRowSelectionChange = (updater: Updater<RowSelectionState>) => {
    const newSelection =
      typeof updater === 'function'
        ? updater(this.internalRowSelection)
        : updater;

    // If uncontrolled, update internal state (do NOT call setRowSelection again – would recurse)
    if (!this.selectedRowIds) {
      this.internalRowSelection = { ...newSelection };
    }

    const selectedRowIds = Object.keys(newSelection).filter(
      (id) => newSelection[id]
    );

    const selectedRows: Record<string, unknown>[] = [];
    if (this.table) {
      selectedRowIds.forEach((id) => {
        const row = this.table!.getRow(id);
        if (row) selectedRows.push(row.original);
      });
    }

    if (this.table) {
      this.table.setOptions((prev) => ({
        ...prev,
        state: { ...prev.state, rowSelection: newSelection },
      }));
    }

    this.rowSelectionChange.emit({ selectedRows, selectedRowIds });
  };

  private initializeTable() {
    if (!this.columns || !this.data) return;

    // First, make a copy of the data to avoid any reference issues
    const dataForTable = [...this.data];

    // Transform columns (selection column rendered manually in DOM)
    this.tanStackColumns = transformColumns(this.columns, this.sortable);

    // Create the table with callbacks to handle state changes
    this.table = createModusTable({
      data: dataForTable, // Use the copied data
      columns: this.tanStackColumns,
      rowSelection: this.internalRowSelection,
      enableRowSelection: this.selectable !== 'none',
      pagination: this.internalPagination,
      enableSorting: this.sortable,
      manualPagination: !this.paginated,
      manualSorting: false, // Let TanStack handle sorting internally
      onSortingChange: this.handleSortingChange,
      onPaginationChange: this.handlePaginationChange,
      onRowSelectionChange: this.handleRowSelectionChange,
      getRowId: (orig: Record<string, unknown>, idx) =>
        orig && orig['id'] !== undefined && orig['id'] !== null
          ? String(orig['id'] as string | number)
          : String(idx),
    });

    // If we already have a sorting state, apply it immediately
    if (this.sorting.length > 0 && this.table) {
      this.table.setSorting([...this.sorting]);
    }
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-table'];

    const propClasses = convertTablePropsToClasses({
      density: this.density,
      zebra: this.zebra,
      hover: this.hover,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleRowClick = (
    rowObj: Row<Record<string, unknown>>,
    index: number
  ) => {
    if (this.selectable !== 'none' && this.table) {
      this.toggleRowSelection(rowObj);
    }
    this.rowClick.emit({ row: rowObj.original, index });
  };

  private toggleRowSelection(rowObj: Row<Record<string, unknown>>): void {
    const idStr = String((rowObj as { id: unknown }).id);
    const isSelected = !!this.internalRowSelection[idStr];

    if (this.selectable === 'single') {
      /* istanbul ignore next */
      this.table?.setRowSelection({
        [idStr]: !isSelected,
      });
    } else {
      // Multi-select: toggle via TanStack then mirror into reactive state so
      // row highlight updates synchronously.
      rowObj.toggleSelected?.();
    }
  }

  private handleHeaderClick = (columnId: string) => {
    const column = this.columns.find((col) => col.id === columnId);
    if (!column?.sortable || !this.sortable || !this.table) return;

    // Get the current sorting state from the component
    const currentColumnSort = this.sorting.find((sort) => sort.id === columnId);

    // Determine the new sorting state
    let newSorting: SortingState = [];
    if (!currentColumnSort) {
      // Not sorted yet, sort ascending
      newSorting = [{ id: columnId, desc: false }];
    } else if (!currentColumnSort.desc) {
      // Currently ascending, change to descending
      newSorting = [{ id: columnId, desc: true }];
    }
    // If already descending, clear sorting (empty array)

    try {
      // Update TanStack table with the new sorting state
      this.table.setSorting(newSorting);

      // Recalculate row model to apply sorting immediately
      void this.table.getSortedRowModel().rows;

      // Update the component state to ensure UI updates
      this.sorting = [...newSorting];

      // Emit the event
      this.sortChange.emit(newSorting);
    } catch (error) {
      console.error('Error applying sorting:', error);
    }
  };

  private getTotalPages(): number {
    if (!this.data || !this.data.length) return 1;
    return this.internalPagination.pageSize <= 0
      ? 1
      : Math.ceil(this.data.length / this.internalPagination.pageSize);
  }

  private handlePageChange(newPage: number): void {
    const totalPages = this.getTotalPages();
    if (newPage < 1 || newPage > totalPages || !this.table) return;

    const newPageIndex = newPage - 1;

    // Setting pagination will trigger the onPaginationChange callback
    this.table.setPagination({
      ...this.internalPagination,
      pageIndex: newPageIndex,
    });
  }

  private handlePageSizeOptionChange(event: Event): void {
    if (!this.table) return;

    const select = (event as CustomEvent).detail
      .srcElement as HTMLSelectElement;
    const newPageSize = parseInt(select.value, 10);

    // Setting pagination will trigger the onPaginationChange callback
    this.table.setPagination({
      pageSize: newPageSize,
      pageIndex: 0,
    });
  }

  private renderCell(
    column: ITableColumn,
    row: Record<string, unknown>
  ): string | HTMLElement {
    const value = row[column.accessor];
    if (column.cellRenderer) {
      return column.cellRenderer(value, row);
    }
    return value?.toString() ?? '';
  }

  private getPaginationSize(): ModusSize {
    switch (this.density) {
      case 'compact':
        return 'sm';
      case 'relaxed':
        return 'lg';
      default:
        return 'md';
    }
  }

  private renderPageSizeSelector() {
    if (!this.showPageSizeSelector) return null;

    const paginationSize = this.getPaginationSize();

    const options = this.pageSizeOptions?.map((size) => ({
      value: size.toString(),
      label: size.toString(),
    }));
    return (
      <div class="page-size-selector">
        <span>Show</span>
        <modus-wc-select
          aria-label="Select page size"
          bordered
          size={paginationSize}
          onInputChange={(e) => this.handlePageSizeOptionChange(e)}
          options={options}
        ></modus-wc-select>
      </div>
    );
  }

  private renderPaginationInfo() {
    if (!this.data || !this.data.length) return null;

    const startItem = Math.min(
      this.internalPagination.pageIndex * this.internalPagination.pageSize + 1,
      this.data.length
    );
    const endItem = Math.min(
      (this.internalPagination.pageIndex + 1) *
        this.internalPagination.pageSize,
      this.data.length
    );

    return (
      <div class="pagination-info">
        Showing {startItem} to {endItem} of {this.data.length} entries
      </div>
    );
  }

  /* ---------- Editing helpers ---------- */

  private isRowEditable(row: Record<string, unknown>): boolean {
    if (typeof this.editable === 'function') return this.editable(row);
    return Boolean(this.editable);
  }

  /**
   * Validate that the row index and column ID are valid
   * @param rowIndex The row index to validate
   * @param colId The column ID to validate
   * @returns true if both row index and column ID are valid
   */
  private validateRowAndColumn(rowIndex: number, colId: string): boolean {
    // Check valid row index
    if (rowIndex < 0 || rowIndex >= (this.data?.length || 0)) {
      return false;
    }

    // Check valid column ID
    const columnExists = this.columns?.some((col) => col.id === colId) || false;
    return columnExists;
  }

  private enterEdit(rowIndex: number, colId: string): void {
    // Validate row and column first
    if (!this.validateRowAndColumn(rowIndex, colId)) {
      return;
    }

    const row = this.data[rowIndex];
    if (!this.isRowEditable(row)) return;

    this.activeEditor = { rowIndex, colId };
    this.cellEditStart.emit({ rowIndex, colId });
  }

  private commitEdit(rowIndex: number, colId: string, newValue: unknown): void {
    // Validate row and column first
    if (!this.validateRowAndColumn(rowIndex, colId)) {
      return;
    }

    // Update data array immutably
    const newData = [...this.data];
    const updatedRow = { ...newData[rowIndex], [colId]: newValue };
    newData[rowIndex] = updatedRow;
    this.data = newData;

    // Push into TanStack so internal model stays in sync
    this.table?.setOptions((prev) => ({ ...prev, data: newData }));

    this.cellEditCommit.emit({ rowIndex, colId, newValue, updatedRow });

    // Simply clear editor state – Stencil will re-render cell normally
    this.activeEditor = null;
  }

  private setupEditorCell(
    el: HTMLElement,
    cellNode: HTMLElement | string,
    column: ITableColumn,
    row: Record<string, unknown>,
    handleCommit: (val: unknown) => void
  ): void {
    el.innerHTML = '';

    const isNode = typeof cellNode !== 'string' && 'tagName' in cellNode;

    if (isNode) {
      el.appendChild(cellNode);

      if (column.editorTemplate && column.editorSetup) {
        column.editorSetup(cellNode, row, handleCommit);
      }

      const blurHandler = (event: FocusEvent) => {
        const relatedTarget = event.relatedTarget as Node | null;
        if (!el.contains(relatedTarget)) {
          this.activeEditor = null;
          el.removeEventListener('focusout', blurHandler);
        }
      };

      el.addEventListener('focusout', blurHandler, { capture: true });
    } else {
      el.textContent = String(cellNode);
    }
  }

  render() {
    // Derive rows straight from TanStack's row model so that any sorting/pagination
    // is reflected automatically
    const rows = this.table
      ? this.paginated
        ? this.table.getPaginationRowModel().rows
        : this.table.getRowModel().rows
      : [];

    const displayData = rows.map((r) => r.original);

    const totalPages = this.getTotalPages();

    return (
      <Host>
        <div class="table-container">
          <div class="modus-wc-overflow-x-auto" {...this.inheritedAttributes}>
            <table class={this.getClasses()}>
              {this.caption && <caption>{this.caption}</caption>}
              <thead>
                <tr>
                  {this.selectable !== 'none' && (
                    <th class="selection-column" style={{ width: '48px' }}>
                      {this.selectable === 'multi' && this.table && (
                        <modus-wc-checkbox
                          aria-label="Select all rows"
                          size="sm"
                          value={this.table.getIsAllRowsSelected()}
                          indeterminate={
                            this.table.getIsSomeRowsSelected() &&
                            !this.table.getIsAllRowsSelected()
                          }
                          onInputChange={() =>
                            /* istanbul ignore next */
                            this.table?.toggleAllRowsSelected()
                          }
                        ></modus-wc-checkbox>
                      )}
                    </th>
                  )}

                  {this.columns?.map((column) => {
                    const tanCol = this.table?.getColumn(column.id);
                    const sortStatus = tanCol?.getIsSorted(); // 'asc' | 'desc' | false
                    const isAsc = sortStatus === 'asc';
                    const isDesc = sortStatus === 'desc';

                    return (
                      <th
                        class={{
                          [column.className || '']: !!column.className,
                          sortable: Boolean(column.sortable && this.sortable),
                          sorted: !!sortStatus,
                          asc: !!isAsc,
                          desc: !!isDesc,
                        }}
                        style={{ width: column.width }}
                        onClick={() => this.handleHeaderClick(column.id)}
                        role={
                          column.sortable && this.sortable
                            ? 'button'
                            : undefined
                        }
                        tabIndex={
                          column.sortable && this.sortable ? 0 : undefined
                        }
                        aria-sort={
                          isAsc
                            ? 'ascending'
                            : isDesc
                              ? 'descending'
                              : undefined
                        }
                      >
                        {column.header}
                        {column.sortable && this.sortable && (
                          <span class="sort-icon" aria-hidden="true">
                            {isAsc ? (
                              <modus-wc-icon name="sort_alpha_down" size="xs" />
                            ) : isDesc ? (
                              <modus-wc-icon name="sort_alpha_up" size="xs" />
                            ) : (
                              <modus-wc-icon
                                name="sort_alpha_down"
                                size="xs"
                                style={{ opacity: '0.5' }}
                              />
                            )}
                          </span>
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {displayData.length > 0 ? (
                  rows.map((rowObj, index) => {
                    const row = rowObj.original;

                    return (
                      <tr
                        key={rowObj.id ?? `row-${index}`}
                        class={{
                          selected:
                            !!this.internalRowSelection[String(rowObj.id)] ||
                            rowObj.getIsSelected?.(),
                        }}
                        onClick={() => this.handleRowClick(rowObj, index)}
                      >
                        {this.selectable !== 'none' && (
                          <td
                            class="selection-column"
                            style={{ width: '48px' }}
                          >
                            <modus-wc-checkbox
                              aria-label="Select row"
                              size="sm"
                              value={rowObj.getIsSelected?.() ?? false}
                            ></modus-wc-checkbox>
                          </td>
                        )}

                        {/* istanbul ignore next */
                        this.columns?.map((column) => {
                          const editing =
                            this.activeEditor?.rowIndex === index &&
                            this.activeEditor.colId === column.id;

                          const cellDisplay = this.renderCell(column, row);

                          /* istanbul ignore next */
                          const handleCommit = (newVal: unknown) =>
                            this.commitEdit(index, column.id, newVal);

                          let cellNode: HTMLElement | string;

                          if (editing) {
                            if (column.editorTemplate) {
                              const htmlStr = column.editorTemplate.replace(
                                /\$\{value\}/g,
                                /* istanbul ignore next */
                                String(row[column.accessor] ?? '')
                              );
                              const wrapper = document.createElement('div');
                              wrapper.innerHTML = htmlStr;
                              cellNode =
                                wrapper.firstElementChild as HTMLElement;

                              // allow users to wire events / data
                              column.editorSetup?.(cellNode, row, handleCommit);
                            } else if (column.customEditorRenderer) {
                              cellNode = column.customEditorRenderer(
                                row[column.accessor],
                                handleCommit,
                                row
                              );
                            } else {
                              cellNode = cellDisplay;
                            }
                          } else {
                            cellNode = cellDisplay;
                          }

                          return (
                            <td
                              class={{
                                [column.className || '']: !!column.className,
                                editing,
                              }}
                              data-col={column.id}
                              onDblClick={() =>
                                this.enterEdit(index, column.id)
                              }
                              ref={(el) => {
                                if (!el) return;
                                this.setupEditorCell(
                                  el,
                                  cellNode,
                                  column,
                                  row,
                                  handleCommit
                                );
                              }}
                            ></td>
                          );
                        })}
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={
                        (this.columns?.length || 1) +
                        (this.selectable !== 'none' ? 1 : 0)
                      }
                      class="no-data-message"
                    >
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {this.paginated && this.data?.length > 0 && (
            <div class="pagination-container">
              {this.renderPageSizeSelector()}
              {this.renderPaginationInfo()}

              <div class="pagination-controls">
                <modus-wc-pagination
                  count={totalPages}
                  page={this.internalPagination.pageIndex + 1}
                  size={this.getPaginationSize()}
                  onPageChange={(e) => this.handlePageChange(e.detail.newPage)}
                ></modus-wc-pagination>
              </div>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
