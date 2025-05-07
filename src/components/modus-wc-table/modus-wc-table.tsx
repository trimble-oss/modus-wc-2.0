/* eslint-disable @typescript-eslint/no-explicit-any */

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
import { SortingState } from '@tanstack/table-core';
import { convertTablePropsToClasses } from './modus-wc-table.tailwind';
import { Density, ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

export interface ITableColumn {
  /** Key to access data from row object */
  accessor: string;
  /** Custom cell renderer */
  cellRenderer?: (value: any, row: any) => string | HTMLElement;
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
}

export interface IPaginationChangeEventDetail {
  currentPage: number;
  pageSize: number;
}

/**
 * A customizable table component used to show a list of data in a table format.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-table',
  styleUrl: 'modus-wc-table.scss',
  shadow: false,
})
export class ModusWcTable {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** An array of column definitions. */
  @Prop() columns!: ITableColumn[];

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** An array of data objects. */
  @Prop() data!: Record<string, any>[];

  /** The density of the table, used to save space or increase readability. */
  @Prop() density?: Density = 'comfortable';

  /** Zebra striped tables differentiate rows by styling them in an alternating fashion. */
  @Prop() zebra?: boolean = false;

  /**
   * Enable hover effect on table rows. When enabled, rows will change background color when hovered.
   * This provides visual feedback to users when interacting with the table.
   */
  @Prop() hover?: boolean = true;

  /** Enable sorting. Enabled by default. */
  @Prop() sortable?: boolean = true;

  /** Enable pagination. Disabled by default. */
  @Prop() paginated?: boolean = false;

  /** Current page (1-based). Default is 1. */
  @Prop() currentPage: number = 1;

  /** Number of rows per page. Default is 10. */
  @Prop() pageSize: number = 10;

  /** Available page size options. */
  @Prop() pageSizeOptions: number[] = [5, 10, 25, 50, 100];

  /** Show the page size selector. */
  @Prop() showPageSizeSelector?: boolean = true;

  /** Current sorting state */
  @State() sorting: SortingState = [];

  /** Internal current page state (1-based) */
  @State() internalCurrentPage = 1;

  /** Internal page size state */
  @State() internalPageSize = 10;

  /** Emits when a row is clicked. */
  @StencilEvent() rowClick!: EventEmitter<{
    row: Record<string, any>;
    index: number;
  }>;

  /** Emits when sorting changes. */
  @StencilEvent() sortChange!: EventEmitter<SortingState>;

  /** Emits when page or page size changes. */
  @StencilEvent() paginationChange!: EventEmitter<IPaginationChangeEventDetail>;

  @Watch('currentPage')
  handleCurrentPageChange(newValue: number) {
    this.internalCurrentPage = newValue;
  }

  @Watch('pageSize')
  handlePageSizeChange(newValue: number) {
    this.internalPageSize = newValue;
    // Reset to first page when page size changes
    this.internalCurrentPage = 1;
  }

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Table';
    }

    if (!this.columns) {
      console.error('ModusWcTable: columns is required.');
    }

    if (!this.data) {
      console.error('ModusWcTable: data is required.');
    }

    this.internalCurrentPage = this.currentPage;
    this.internalPageSize = this.pageSize;
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-table'];

    const propClasses = convertTablePropsToClasses({
      density: this.density,
      zebra: this.zebra,
      hover: this.hover,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleRowClick = (row: Record<string, any>, index: number) => {
    this.rowClick.emit({ row, index });
  };

  private handleHeaderClick = (columnId: string) => {
    // Find the column
    const column = this.columns.find((col) => col.id === columnId);

    // Only handle sorting if the column is sortable
    if (!column?.sortable || !this.sortable) return;

    let newSorting: SortingState = [];

    // Check if this column is already being sorted
    const currentSortingInfo = this.sorting.find((s) => s.id === columnId);

    if (!currentSortingInfo) {
      // Add this column as ascending sort
      newSorting = [{ id: columnId, desc: false }];
    } else if (!currentSortingInfo.desc) {
      // Toggle to descending sort
      newSorting = [{ id: columnId, desc: true }];
    }
    // If it's already descending, clear the sort (newSorting remains empty)

    this.sorting = newSorting;
    this.sortChange.emit(newSorting);
  };

  private getSortedData(): Record<string, any>[] {
    if (!this.data || !this.data.length) return [];
    if (this.sorting.length === 0) return this.data;

    const sortInfo = this.sorting[0];
    const { id, desc } = sortInfo;
    const direction = desc ? -1 : 1;

    // Find the corresponding column to get the accessor
    const column = this.columns.find((col) => col.id === id);
    if (!column) return this.data;

    const accessor = column.accessor;

    return [...this.data].sort((a, b) => {
      const valueA = a[accessor];
      const valueB = b[accessor];

      // Handle string comparison
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.localeCompare(valueB) * direction;
      }

      // Handle number comparison
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return (valueA - valueB) * direction;
      }

      // Handle date comparison
      if (valueA instanceof Date && valueB instanceof Date) {
        return (valueA.getTime() - valueB.getTime()) * direction;
      }

      // Handle mixed types or nullish values
      if (valueA == null) return 1;
      if (valueB == null) return -1;

      // Default string comparison for other cases
      return String(valueA).localeCompare(String(valueB)) * direction;
    });
  }

  private getPaginatedData(): Record<string, any>[] {
    if (!this.paginated) return this.getSortedData();
    if (!this.data || !this.data.length) return [];

    const sortedData = this.getSortedData();
    const startIndex = (this.internalCurrentPage - 1) * this.internalPageSize;
    const endIndex = startIndex + this.internalPageSize;

    return sortedData.slice(startIndex, endIndex);
  }

  private getTotalPages(): number {
    if (!this.data || !this.data.length) return 1;
    return Math.ceil(this.data.length / this.internalPageSize);
  }

  private handlePageChange(newPage: number): void {
    const totalPages = this.getTotalPages();
    if (newPage < 1 || newPage > totalPages) return;

    this.internalCurrentPage = newPage;
    this.paginationChange.emit({
      currentPage: this.internalCurrentPage,
      pageSize: this.internalPageSize,
    });
  }

  private handlePageSizeOptionChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const newPageSize = parseInt(select.value, 10);

    this.internalPageSize = newPageSize;
    this.internalCurrentPage = 1; // Reset to first page

    this.paginationChange.emit({
      currentPage: this.internalCurrentPage,
      pageSize: this.internalPageSize,
    });
  }

  private renderCell(
    column: ITableColumn,
    row: Record<string, any>
  ): string | HTMLElement {
    const value = row[column.accessor];

    if (column.cellRenderer) {
      return column.cellRenderer(value, row);
    }

    return value?.toString() ?? '';
  }

  private renderPageSizeSelector() {
    if (!this.showPageSizeSelector) return null;

    return (
      <div class="page-size-selector">
        <span>Show</span>
        <select
          aria-label="Select page size"
          onChange={(e) => this.handlePageSizeOptionChange(e)}
        >
          {this.pageSizeOptions?.map((size) => (
            <option
              value={size.toString()}
              selected={size === this.internalPageSize}
            >
              {size}
            </option>
          ))}
        </select>
        <span>entries</span>
      </div>
    );
  }

  private renderPaginationInfo() {
    if (!this.data || !this.data.length) return null;

    const startItem = Math.min(
      (this.internalCurrentPage - 1) * this.internalPageSize + 1,
      this.data.length
    );
    const endItem = Math.min(
      this.internalCurrentPage * this.internalPageSize,
      this.data.length
    );

    return (
      <div class="pagination-info">
        Showing {startItem} to {endItem} of {this.data.length} entries
      </div>
    );
  }

  render() {
    // Get paginated data
    const paginatedData = this.getPaginatedData() || [];
    const totalPages = this.getTotalPages();

    // Determine pagination size based on table density
    let paginationSize: ModusSize = 'md';
    if (this.density === 'condensed') paginationSize = 'sm';
    if (this.density === 'spacious') paginationSize = 'lg';

    return (
      <Host>
        <div class="table-container">
          <div class="modus-wc-overflow-x-auto" {...this.inheritedAttributes}>
            <table class={this.getClasses()}>
              <thead>
                <tr>
                  {this.columns?.map((column) => (
                    <th
                      class={{
                        [column.className || '']: !!column.className,
                        sortable: Boolean(column.sortable && this.sortable),
                        sorted: this.sorting.some((s) => s.id === column.id),
                        asc: this.sorting.some(
                          (s) => s.id === column.id && !s.desc
                        ),
                        desc: this.sorting.some(
                          (s) => s.id === column.id && s.desc
                        ),
                      }}
                      style={{ width: column.width }}
                      onClick={() => this.handleHeaderClick(column.id)}
                      role={
                        column.sortable && this.sortable ? 'button' : undefined
                      }
                      tabIndex={
                        column.sortable && this.sortable ? 0 : undefined
                      }
                      aria-sort={
                        this.sorting.some((s) => s.id === column.id && !s.desc)
                          ? 'ascending'
                          : this.sorting.some(
                                (s) => s.id === column.id && s.desc
                              )
                            ? 'descending'
                            : undefined
                      }
                    >
                      {column.header}
                      {column.sortable && this.sortable && (
                        <span class="sort-icon" aria-hidden="true">
                          {this.sorting.some(
                            (s) => s.id === column.id && !s.desc
                          ) ? (
                            <modus-wc-icon name="sort_alpha_down" size="xs" />
                          ) : this.sorting.some(
                              (s) => s.id === column.id && s.desc
                            ) ? (
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
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((row, index) => (
                    <tr onClick={() => this.handleRowClick(row, index)}>
                      {this.columns?.map((column) => {
                        const cellContent = this.renderCell(column, row);

                        return (
                          <td
                            class={column.className}
                            ref={(el) => {
                              // istanbul ignore next - TODO
                              if (el && cellContent instanceof HTMLElement) {
                                el.innerHTML = ''; // Clear existing content
                                el.appendChild(cellContent);
                              }
                            }}
                          >
                            {
                              // istanbul ignore next
                              !(cellContent instanceof HTMLElement)
                                ? cellContent
                                : ''
                            }
                          </td>
                        );
                      })}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={this.columns?.length || 1}
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
              {this.renderPaginationInfo()}

              <div class="pagination-controls">
                <modus-wc-pagination
                  count={totalPages}
                  page={this.internalCurrentPage}
                  size={paginationSize}
                  onPageChange={(e) => this.handlePageChange(e.detail.newPage)}
                ></modus-wc-pagination>
              </div>

              {this.renderPageSizeSelector()}
            </div>
          )}
        </div>
      </Host>
    );
  }
}
