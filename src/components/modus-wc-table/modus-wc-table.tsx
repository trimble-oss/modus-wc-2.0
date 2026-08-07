/* eslint-disable @typescript-eslint/no-base-to-string */
import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Method,
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
  TableOptions,
  Updater,
} from '@tanstack/table-core';
import { convertTablePropsToClasses } from './modus-wc-table.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { Density, ModusSize } from '../types';
import { Attributes, inheritAriaAttributes, sanitizeUrl } from '../utils';
import {
  createAdvancedModusTable,
  createModusTable,
  createStateSyncCallbacks,
  normalizeTableState,
  renderColumnDefContent,
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
  private globalClickHandler?: (event: MouseEvent) => void;
  private activeEditorElement?: HTMLElement;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Enable cell editing. Either a boolean (all rows) or a predicate per row. */
  @Prop() editable?: boolean | ((row: Record<string, unknown>) => boolean) =
    false;

  /** Table mode: simple uses ITableColumn; advanced uses TanStack ColumnDef passthrough. */
  @Prop() mode: 'simple' | 'advanced' = 'simple';

  /** An array of column definitions. Required in simple mode. */
  @Prop() columns?: ITableColumn[];

  /** TanStack column definitions. Required in advanced mode. */
  @Prop() columnDefs?: ColumnDef<Record<string, unknown>, unknown>[];

  /** Passthrough TanStack table options (getSubRows, getExpandedRowModel, etc.). */
  @Prop() tableOptions?: Partial<TableOptions<Record<string, unknown>>>;

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

  /** Per-row predicate function controlling row selection eligibility. */
  @Prop() isRowSelectable?: (row: Record<string, unknown>) => boolean;

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

  /** Bumps on TanStack state changes in advanced mode to trigger re-renders only. */
  @State() private tableRenderVersion = 0;

  /** Tracks whether tableOptions.initialState has been merged into the table. */
  private advancedInitialStateApplied = false;

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
    if (this.isAdvancedMode() || !this.table) return;

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
      if (!this.isAdvancedMode()) {
        this.sanitizeRowSelection();
      }
    } else if (newData && this.hasColumnConfig()) {
      this.initializeTable();
    }
  }

  @Watch('isRowSelectable')
  handleIsRowSelectableChange() {
    if (this.isAdvancedMode() || !this.table) return;

    this.table.setOptions((prev) => ({
      ...prev,
      enableRowSelection: this.getEnableRowSelection(),
    }));
    this.sanitizeRowSelection();
  }

  @Watch('columns')
  handleColumnsChange(newColumns?: ITableColumn[]) {
    if (this.isAdvancedMode()) return;

    if (this.table) {
      if (!newColumns) return;

      this.tanStackColumns = transformColumns(newColumns, this.sortable);
      this.table.setOptions((prev) => ({
        ...prev,
        columns: this.tanStackColumns,
      }));
    } else if (newColumns && this.data) {
      this.initializeTable();
    }
  }

  @Watch('columnDefs')
  handleColumnDefsChange(
    newColumnDefs?: ColumnDef<Record<string, unknown>, unknown>[]
  ) {
    if (!this.isAdvancedMode()) return;

    if (this.table) {
      if (!newColumnDefs) return;

      this.tanStackColumns = [...newColumnDefs];
      this.table.setOptions((prev) => ({
        ...prev,
        columns: this.tanStackColumns,
      }));
    } else if (newColumnDefs && this.data) {
      this.initializeTable();
    }
  }

  @Watch('tableOptions')
  handleTableOptionsChange() {
    if (!this.isAdvancedMode()) return;

    if (!this.table && this.data && this.hasColumnConfig()) {
      this.initializeTable();
      return;
    }

    if (!this.table) return;

    this.applyAdvancedTableOptions();
  }

  @Watch('mode')
  handleModeChange() {
    this.table = null;
    this.advancedInitialStateApplied = false;
    this.initializeTable();
  }

  @Watch('sortable')
  handleSortableChange(newSortable: boolean) {
    if (this.isAdvancedMode() || !this.table || !this.columns) return;

    if (this.table) {
      this.table.setOptions((prev) => ({
        ...prev,
        enableSorting: newSortable,
        columns: transformColumns(this.columns!, newSortable),
        state: { ...prev.state, sorting: [] },
      }));
    }
  }

  @Watch('paginated')
  handlePaginatedChange(newPaginated: boolean) {
    if (this.isAdvancedMode() || !this.table) return;

    this.table.setOptions((prev) => ({
      ...prev,
      manualPagination: !newPaginated,
    }));
  }

  @Watch('selectedRowIds')
  handleSelectedRowIdsChange(newIds: string[] | undefined) {
    if (this.isAdvancedMode() || !this.table) return;
    if (Array.isArray(newIds)) {
      const selection = this.buildEligibleSelection(newIds);
      this.internalRowSelection = selection;
      this.table.setRowSelection(selection);
    }
  }

  componentWillLoad() {
    handleShadowDOMStyles(this.el);

    if (this.isAdvancedMode()) {
      if (!this.columnDefs) {
        console.error('ModusWcTable: columnDefs is required in advanced mode.');
      }
    } else if (!this.columns) {
      console.error('ModusWcTable: columns is required.');
    }

    if (!this.data) {
      console.error('ModusWcTable: data is required.');
    }

    this.internalPagination = {
      pageIndex: this.currentPage - 1,
      pageSize: this.pageSizeOptions[0],
    };
    const rowSelection = this.buildEligibleSelection(this.selectedRowIds);
    if (Object.keys(rowSelection).length > 0) {
      this.internalRowSelection = rowSelection;
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    this.initializeTable();
  }

  /** Returns the underlying TanStack table instance (advanced mode). */
  @Method()
  getTableInstance(): Promise<Table<Record<string, unknown>> | null> {
    return Promise.resolve(this.table);
  }

  disconnectedCallback() {
    // Clean up global listener on component disconnect
    if (this.globalClickHandler) {
      document.removeEventListener('click', this.globalClickHandler, true);
      this.globalClickHandler = undefined;
    }
    // Clear active editor reference
    this.activeEditorElement = undefined;
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

    // Always mirror TanStack selection into @State so Stencil re-renders (controlled + uncontrolled).
    // Do NOT call this.table.setRowSelection here — that would recurse into this handler.
    this.internalRowSelection = { ...newSelection };

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

  private isAdvancedMode(): boolean {
    return this.mode === 'advanced';
  }

  private isAdvancedSelectionColumn(columnId: string): boolean {
    return columnId === 'select';
  }

  private isAdvancedRowSelectionEnabled(): boolean {
    return Boolean(this.table?.options.enableRowSelection);
  }

  private isAdvancedRowSelectable(
    rowObj: Row<Record<string, unknown>>
  ): boolean {
    return (
      this.isAdvancedRowSelectionEnabled() &&
      (rowObj.getCanSelect?.() ?? true)
    );
  }

  private mountAdvancedCellContent(
    el: HTMLElement | null,
    cellContent: string | HTMLElement
  ): void {
    if (!el) return;

    this.renderCellContent(el, cellContent);
  }

  private getColumnClassName(
    columnDef: { meta?: unknown } | undefined
  ): string | undefined {
    const meta = columnDef?.meta as { className?: string } | undefined;
    return meta?.className;
  }

  private hasColumnConfig(): boolean {
    return this.isAdvancedMode()
      ? Boolean(this.columnDefs?.length)
      : Boolean(this.columns?.length);
  }

  private requestAdvancedRender = (): void => {
    this.tableRenderVersion++;
  };

  private applyAdvancedTableOptions(): void {
    if (!this.table || !this.isAdvancedMode()) return;

    const userInitialState = this.tableOptions?.initialState;
    const patch = this.buildAdvancedTableOptionsPatch();

    this.table.setOptions((prev) => ({
      ...prev,
      ...patch,
      state: {
        ...prev.state,
        ...patch.state,
      },
    }));

    if (userInitialState && !this.advancedInitialStateApplied) {
      this.table.setState((old) =>
        normalizeTableState({ ...old, ...userInitialState })
      );
      this.advancedInitialStateApplied = true;
    }

    this.requestAdvancedRender();
  }

  private buildAdvancedTableOptionsPatch(): Partial<
    TableOptions<Record<string, unknown>>
  > {
    const userTableOptions = this.tableOptions ?? {};
    const {
      state: userState,
      onStateChange: userOnStateChange,
      onRowSelectionChange,
      onSortingChange,
      onPaginationChange,
      ...restTableOptions
    } = userTableOptions;
    delete restTableOptions.initialState;

    return {
      ...restTableOptions,
      ...(userState ? { state: userState } : {}),
      ...createStateSyncCallbacks(() => this.table, {
        onRowSelectionChange,
        onSortingChange,
        onPaginationChange,
      }),
      onStateChange: (updater) => {
        if (this.table) {
          this.table.setOptions((prev) => {
            const currentState = prev.state as Record<string, unknown>;
            const nextState =
              typeof updater === 'function'
                ? updater(currentState as never)
                : updater;
            return {
              ...prev,
              state: normalizeTableState(nextState),
            };
          });
        }
        userOnStateChange?.(updater);
        this.requestAdvancedRender();
      },
    };
  }

  private initializeTable() {
    if (!this.data || !this.hasColumnConfig()) return;

    const dataForTable = [...this.data];

    if (this.isAdvancedMode()) {
      this.tanStackColumns = [...(this.columnDefs ?? [])];
      this.table = createAdvancedModusTable({
        data: dataForTable,
        columns: this.tanStackColumns,
        tableOptions: this.tableOptions,
        onRenderRequest: this.requestAdvancedRender,
        getRowId: (orig: Record<string, unknown>, idx: number) =>
          this.getRowIdForData(orig, idx),
      });
      this.applyAdvancedTableOptions();
      this.requestAdvancedRender();
      return;
    }

    this.tanStackColumns = transformColumns(this.columns!, this.sortable);

    this.table = createModusTable({
      data: dataForTable,
      columns: this.tanStackColumns,
      rowSelection: this.internalRowSelection,
      enableRowSelection: this.getEnableRowSelection(),
      pagination: this.internalPagination,
      enableSorting: this.sortable,
      manualPagination: !this.paginated,
      manualSorting: false,
      onSortingChange: this.handleSortingChange,
      onPaginationChange: this.handlePaginationChange,
      onRowSelectionChange: this.handleRowSelectionChange,
      getRowId: (orig, idx) => this.getRowIdForData(orig, idx),
    });

    if (this.sorting.length > 0 && this.table) {
      this.table.setSorting([...this.sorting]);
    }
  }

  private getDisplayRows(): Row<Record<string, unknown>>[] {
    if (!this.table) return [];

    if (this.isAdvancedMode()) {
      return this.table.getRowModel().rows;
    }

    if (this.paginated) {
      return this.table.getPaginationRowModel().rows;
    }

    return this.table.getRowModel().rows;
  }

  private getColumnCount(): number {
    if (this.isAdvancedMode()) {
      return this.columnDefs?.length ?? 0;
    }

    return (this.columns?.length ?? 0) + (this.selectable !== 'none' ? 1 : 0);
  }

  private getSortHeaderProps(
    canSort: boolean,
    sortStatus: false | 'asc' | 'desc' | undefined
  ) {
    const isAsc = sortStatus === 'asc';
    const isDesc = sortStatus === 'desc';

    return {
      classFlags: {
        sortable: canSort,
        sorted: !!sortStatus,
        asc: !!isAsc,
        desc: !!isDesc,
      },
      role: canSort ? ('button' as const) : undefined,
      tabIndex: canSort ? 0 : undefined,
      'aria-sort': isAsc
        ? ('ascending' as const)
        : isDesc
          ? ('descending' as const)
          : undefined,
    };
  }

  private renderSortIcon(sortStatus: false | 'asc' | 'desc' | undefined) {
    const isAsc = sortStatus === 'asc';
    const isDesc = sortStatus === 'desc';

    return (
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
    );
  }

  private renderTableShell(content: unknown, footer: unknown = null) {
    return (
      <Host>
        <div class="table-container">
          <div class="modus-wc-overflow-x-auto" {...this.inheritedAttributes}>
            <table class={this.getClasses()}>
              {this.caption && (
                <caption class="modus-wc-sr-only">{this.caption}</caption>
              )}
              {content}
            </table>
          </div>
          {footer}
        </div>
      </Host>
    );
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
    if (!this.isAdvancedMode()) {
      const isSelectable = this.checkIsRowSelectable(rowObj.original);

      if (this.selectable !== 'none' && this.table && isSelectable) {
        this.toggleRowSelection(rowObj);
      }
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
    if (this.isAdvancedMode()) return;

    const column = this.columns?.find((col) => col.id === columnId);
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

  private getPaginationSize(): ModusSize | 'xs' | 'xl' {
    switch (this.density) {
      case 'compact':
        return 'xs';
      case 'relaxed':
        return 'xl';
      default:
        return 'md';
    }
  }

  private getSelectSize(): ModusSize {
    const paginationSize = this.getPaginationSize();

    if (paginationSize === 'xs') {
      return 'sm';
    }

    if (paginationSize === 'xl') {
      return 'lg';
    }

    return 'md';
  }

  private renderPageSizeSelector() {
    if (!this.showPageSizeSelector) return null;

    const selectSize = this.getSelectSize();

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
          size={selectSize}
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

  private checkIsRowSelectable(row: Record<string, unknown>): boolean {
    if (typeof this.isRowSelectable === 'function') {
      return this.isRowSelectable(row);
    }
    return true;
  }

  private getRowIdForData(orig: Record<string, unknown>, idx: number): string {
    return orig && orig['id'] !== undefined && orig['id'] !== null
      ? String(orig['id'])
      : String(idx);
  }

  private getEnableRowSelection():
    | boolean
    | ((row: Row<Record<string, unknown>>) => boolean) {
    return this.selectable !== 'none'
      ? (row) => this.checkIsRowSelectable(row.original)
      : false;
  }

  private buildEligibleSelection(ids?: string[]): RowSelectionState {
    if (!ids?.length) return {};

    const selection: RowSelectionState = {};

    ids.forEach((id) => {
      if (this.table) {
        try {
          const rowInstance = this.table.getRow(id);
          if (rowInstance && this.checkIsRowSelectable(rowInstance.original)) {
            selection[id] = true;
          }
        } catch {
          // Row id is not in the current table model — skip.
        }
        return;
      }

      if (this.data) {
        const rowIndex = this.data.findIndex(
          (row, index) => this.getRowIdForData(row, index) === id
        );
        if (rowIndex >= 0 && this.checkIsRowSelectable(this.data[rowIndex])) {
          selection[id] = true;
        }
      }
    });

    return selection;
  }

  private sanitizeRowSelection(): void {
    if (!this.table) return;

    const currentSelections = { ...this.internalRowSelection };
    let stateChanged = false;

    Object.keys(currentSelections).forEach((id) => {
      let rowInstance: Row<Record<string, unknown>> | undefined;
      try {
        rowInstance = this.table!.getRow(id);
      } catch {
        delete currentSelections[id];
        stateChanged = true;
        return;
      }

      if (!rowInstance || !this.checkIsRowSelectable(rowInstance.original)) {
        delete currentSelections[id];
        stateChanged = true;
      }
    });

    if (stateChanged) {
      this.table.setRowSelection(currentSelections);
    }
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

    // Only enter edit mode if the column has an editor defined
    /* istanbul ignore next */
    const column = this.columns?.find((col) => col.id === colId);
    /* istanbul ignore next */
    if (
      !column?.editor &&
      !column?.editorTemplate &&
      !column?.customEditorRenderer
    ) {
      return;
    }

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
    this.activeEditorElement = undefined;
  }

  private renderCellContent(
    el: HTMLElement,
    cellNode: HTMLElement | string
  ): void {
    el.innerHTML = '';

    if (typeof cellNode !== 'string' && 'tagName' in cellNode) {
      el.appendChild(cellNode);
    } else {
      el.textContent = String(cellNode);
    }
  }

  private setupEditorCell(
    el: HTMLElement,
    cellNode: HTMLElement | string,
    column: ITableColumn,
    row: Record<string, unknown>,
    handleCommit: (val: unknown) => void
  ): void {
    this.renderCellContent(el, cellNode);

    const isNode = typeof cellNode !== 'string' && 'tagName' in cellNode;

    if (isNode) {
      if (column.editorTemplate && column.editorSetup) {
        column.editorSetup(cellNode, row, handleCommit);
      }

      // Store reference to active editor element (only called when editing)
      this.activeEditorElement = el;

      // Create and keep global click handler active
      if (!this.globalClickHandler) {
        this.globalClickHandler = (event: MouseEvent) => {
          // Only process clicks when we have an active editor
          if (!this.activeEditor || !this.activeEditorElement) {
            return;
          }

          const target = event.target as Node;
          const outsideTable = !this.el.contains(target);

          // Check if click is outside table
          if (outsideTable) {
            this.activeEditor = null;
            this.activeEditorElement = undefined;
          }
        };

        // Register once and keep it active
        document.addEventListener('click', this.globalClickHandler, true);
      }
    }
  }

  private buildEditorNodeFromTemplate(
    editorTemplate: string,
    value: unknown
  ): HTMLElement {
    const escapedValue = String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
    const htmlStr = editorTemplate.replace(/\$\{value\}/g, escapedValue);
    const parsed = new DOMParser().parseFromString(htmlStr, 'text/html');

    parsed
      .querySelectorAll(
        'script,iframe,object,embed,link,meta,base,form,style,foreignObject'
      )
      .forEach((node) => node.remove());

    parsed.querySelectorAll('*').forEach((element) => {
      for (
        let attrIndex = element.attributes.length - 1;
        attrIndex >= 0;
        attrIndex--
      ) {
        const attribute = element.attributes.item(attrIndex);
        if (!attribute) continue;

        const name = attribute.name.toLowerCase();
        const attributeValue = attribute.value;

        if (name.startsWith('on')) {
          element.removeAttribute(attribute.name);
          continue;
        }

        if (['href', 'src', 'xlink:href', 'formaction'].includes(name)) {
          const sanitizedAttributeValue = sanitizeUrl(attributeValue);

          if (!sanitizedAttributeValue) {
            element.removeAttribute(attribute.name);
            continue;
          }

          element.setAttribute(attribute.name, sanitizedAttributeValue);
        }
      }
    });

    const parsedElement = parsed.body.firstElementChild as HTMLElement | null;
    if (parsedElement) return parsedElement;

    const fallbackElement = document.createElement('span');
    fallbackElement.textContent = String(value ?? '');
    return fallbackElement;
  }

  private renderAdvancedHeader() {
    if (!this.table) return null;

    return this.table.getHeaderGroups().map((headerGroup) => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map((header) => {
          if (header.isPlaceholder) {
            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                rowSpan={header.rowSpan}
              />
            );
          }

          const sortStatus = header.column.getIsSorted();
          const canSort = header.column.getCanSort();
          const sortClassFlags = this.getSortHeaderProps(
            canSort,
            sortStatus
          ).classFlags;
          const headerContent = renderColumnDefContent(
            header.column.columnDef.header,
            header.getContext()
          );
          const isHeaderElement =
            typeof headerContent !== 'string' && 'tagName' in headerContent;
          const columnClassName = this.getColumnClassName(
            header.column.columnDef
          );

          return (
            <th
              key={header.id}
              colSpan={header.colSpan}
              rowSpan={header.rowSpan}
              class={{
                ...sortClassFlags,
                'selection-column': this.isAdvancedSelectionColumn(
                  header.column.id
                ),
                [columnClassName || '']: !!columnClassName,
              }}
              style={{
                width: header.column.columnDef.size
                  ? `${header.column.columnDef.size}px`
                  : undefined,
              }}
              ref={(el) => {
                if (!el || !isHeaderElement) return;
                this.renderCellContent(el, headerContent);
              }}
            >
              {!isHeaderElement ? headerContent : null}
            </th>
          );
        })}
      </tr>
    ));
  }

  private renderAdvancedBody(rows: Row<Record<string, unknown>>[]) {
    if (rows.length === 0) {
      return (
        <tr>
          <td colSpan={this.getColumnCount()} class="no-data-message">
            No data available
          </td>
        </tr>
      );
    }

    return rows.map((rowObj, index) => (
      <tr
        key={rowObj.id ?? `row-${index}`}
        class={{
          selected: rowObj.getIsSelected?.() ?? false,
          selectable: this.isAdvancedRowSelectable(rowObj),
        }}
        onClick={() => this.handleRowClick(rowObj, index)}
      >
        {rowObj.getVisibleCells().map((cell) => {
          const cellContent: string | HTMLElement = renderColumnDefContent(
            cell.column.columnDef.cell,
            cell.getContext()
          );
          const columnClassName = this.getColumnClassName(
            cell.column.columnDef
          );

          return (
            <td
              key={cell.id}
              class={{
                'selection-column': this.isAdvancedSelectionColumn(
                  cell.column.id
                ),
                [columnClassName || '']: !!columnClassName,
              }}
              ref={(el) => {
                this.mountAdvancedCellContent(el, cellContent);
              }}
            ></td>
          );
        })}
      </tr>
    ));
  }

  private renderTableFooter(totalPages: number) {
    if (!this.paginated || !this.data?.length) return null;

    return (
      <div class="pagination-container">
        {this.renderPageSizeSelector()}
        {this.renderPaginationInfo()}

        <div class="pagination-controls">
          <modus-wc-pagination
            count={totalPages}
            page={this.internalPagination.pageIndex + 1}
            size={this.getPaginationSize()}
            onPageChange={(e) =>
              this.handlePageChange(Number(e.detail.newPage))
            }
          ></modus-wc-pagination>
        </div>
      </div>
    );
  }

  render() {
    if (this.isAdvancedMode()) {
      return this.renderAdvancedTable();
    }

    return this.renderSimpleTable();
  }

  private renderAdvancedTable() {
    void this.tableRenderVersion;

    const rows = this.getDisplayRows();

    return this.renderTableShell([
      <thead>{this.renderAdvancedHeader()}</thead>,
      <tbody>{this.renderAdvancedBody(rows)}</tbody>,
    ]);
  }

  private renderSimpleTable() {
    const rows = this.getDisplayRows();

    const displayData = rows.map((r) => r.original);

    const totalPages = this.getTotalPages();

    return this.renderTableShell(
      [
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
              const sortStatus = tanCol?.getIsSorted();
              const canSort = Boolean(column.sortable && this.sortable);
              const sortProps = this.getSortHeaderProps(canSort, sortStatus);
              const columnClassName =
                this.getColumnClassName(tanCol?.columnDef) ?? column.className;

              return (
                <th
                  class={{
                    [columnClassName || '']: !!columnClassName,
                    ...sortProps.classFlags,
                  }}
                  style={{ width: column.width }}
                  onClick={() => this.handleHeaderClick(column.id)}
                  role={sortProps.role}
                  tabIndex={sortProps.tabIndex}
                  aria-sort={sortProps['aria-sort']}
                >
                  {column.header}
                  {canSort && this.renderSortIcon(sortStatus)}
                </th>
              );
            })}
          </tr>
        </thead>,
        <tbody>
          {displayData.length > 0 ? (
            rows.map((rowObj, index) => {
              const row = rowObj.original;
              const isRowSelectable = this.checkIsRowSelectable(row);

              return (
                <tr
                  key={rowObj.id ?? `row-${index}`}
                  class={{
                    selected:
                      !!this.internalRowSelection[String(rowObj.id)] ||
                      rowObj.getIsSelected?.(),
                    selectable: this.selectable !== 'none' && isRowSelectable,
                    editable: this.isRowEditable(row),
                  }}
                  onClick={() => this.handleRowClick(rowObj, index)}
                >
                  {this.selectable !== 'none' && (
                    <td class="selection-column" style={{ width: '48px' }}>
                      <modus-wc-checkbox
                        aria-label="Select row"
                        size="sm"
                        value={rowObj.getIsSelected?.() ?? false}
                        disabled={!isRowSelectable}
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
                        cellNode = this.buildEditorNodeFromTemplate(
                          column.editorTemplate,
                          /* istanbul ignore next */
                          row[column.accessor]
                        );

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

                    const columnClassName =
                      this.getColumnClassName(
                        this.table?.getColumn(column.id)?.columnDef
                      ) ?? column.className;

                    return (
                      <td
                        class={{
                          [columnClassName || '']: !!columnClassName,
                          editing,
                          'editable-cell':
                            !!column.editor && this.isRowEditable(row),
                        }}
                        data-col={column.id}
                        onDblClick={(e) => {
                          // Don't enter edit mode if already editing this cell
                          if (
                            this.activeEditor?.rowIndex === index &&
                            this.activeEditor?.colId === column.id
                          ) {
                            return;
                          }
                          // Don't enter edit mode if clicking inside an active editor
                          if (
                            this.activeEditorElement?.contains(e.target as Node)
                          ) {
                            return;
                          }
                          this.enterEdit(index, column.id);
                        }}
                        ref={(el) => {
                          if (!el) return;
                          // Only setup editor when cell is actually being edited
                          if (editing) {
                            this.setupEditorCell(
                              el,
                              cellNode,
                              column,
                              row,
                              handleCommit
                            );
                          } else {
                            // For non-editing cells, just set content directly
                            this.renderCellContent(el, cellNode);
                          }
                        }}
                      ></td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={this.getColumnCount() || 1} class="no-data-message">
                No data available
              </td>
            </tr>
          )}
        </tbody>,
      ],
      this.renderTableFooter(totalPages)
    );
  }
}
