import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';
import * as Icons from './modus-wc-pagination.icons';
import { convertPropsToClasses } from './modus-wc-pagination.tailwind';

export interface IModusWcPageChange {
  newPage: number;
  prevPage: number;
}

/**
 * Pagination component to navigate through pages of content.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-pagination',
  styleUrl: 'modus-wc-pagination.scss',
  shadow: false,
})
export class ModusWcPagination {
  private inheritedAttributes: Attributes = {};
  private readonly maxVisibleButtons: number = 5;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Aria label for the first page button */
  @Prop() ariaLabelFirstPage?: string = 'First page';

  /** Aria label for the last page button */
  @Prop() ariaLabelLastPage?: string = 'Last page';

  /** Aria label for the next page button */
  @Prop() ariaLabelNextPage?: string = 'Next page';

  /** Aria label for the page number button. Use {0} as placeholder for the page number */
  @Prop() ariaLabelPage?: string = 'Page {0}';

  /** Aria label for the previous page button */
  @Prop() ariaLabelPreviousPage?: string = 'Previous page';

  /** Total number of pages */
  @Prop() count: number = 1;

  /** Custom CSS class to apply */
  @Prop() customClass?: string = '';

  /** The current page number */
  @Prop() page: number = 1;

  /** Size of the pagination buttons */
  @Prop() size: ModusSize = 'md';

  /** Event emitted when page changes */
  @Event() pageChange!: EventEmitter<IModusWcPageChange>;

  /** Internal state to track visible page numbers */
  @State() private visiblePages: number[] = [];

  @Watch('page')
  @Watch('count')
  // Creates a sliding "window" of page buttons that tries to keep the current page centered when possible.
  calculateVisiblePages() {
    const pages: number[] = [];

    // Calculates how many page buttons should ideally appear on each side of current page.
    const halfVisible = Math.floor(this.maxVisibleButtons / 2);

    let startPage = Math.max(1, this.page - halfVisible);
    let endPage = Math.min(this.count, startPage + this.maxVisibleButtons - 1);

    // Handles edge case when near end of the page count.
    // If we can't fit enough buttons after current page, then shift window left.
    if (endPage - startPage + 1 < this.maxVisibleButtons) {
      startPage = Math.max(1, endPage - this.maxVisibleButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    this.visiblePages = pages;
  }

  componentWillLoad() {
    this.calculateVisiblePages();
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): { paginationClasses: string; buttonClasses: string } {
    const buttonClassList = [
      'modus-wc-pagination-btn',
      'modus-wc-join-item',
      'modus-wc-btn',
      'modus-wc-btn-square',
    ];

    const paginationClassList = ['modus-wc-pagination', 'modus-wc-join'];

    // The order CSS classes are added matters to CSS specificity
    if (this.customClass) paginationClassList.push(this.customClass);
    const paginationClasses = paginationClassList.join(' ');

    const propClasses = convertPropsToClasses({ size: this.size });

    if (propClasses) buttonClassList.push(propClasses);
    const buttonClasses = buttonClassList.join(' ');

    return { paginationClasses, buttonClasses };
  }

  private handlePageClick = (newPage: number) => {
    if (newPage === this.page || newPage < 1 || newPage > this.count) {
      return;
    }

    this.pageChange.emit({ newPage, prevPage: this.page });
    this.page = newPage;
  };

  render() {
    const { paginationClasses, buttonClasses } = this.getClasses();
    const isFirstPage = this.page === 1;
    const isLastPage = this.page === this.count;
    const shouldShowFirstLastButtons = this.count > this.maxVisibleButtons;

    return (
      <div class={paginationClasses} {...this.inheritedAttributes}>
        {shouldShowFirstLastButtons && (
          <button
            aria-label={this.ariaLabelFirstPage}
            class={buttonClasses}
            disabled={isFirstPage}
            onClick={() => this.handlePageClick(1)}
          >
            <Icons.ChevronDoubleLeft />
          </button>
        )}

        <button
          aria-label={this.ariaLabelPreviousPage}
          class={buttonClasses}
          disabled={isFirstPage}
          onClick={() => this.handlePageClick(this.page - 1)}
        >
          <Icons.ChevronLeft />
        </button>

        {this.visiblePages.map((page) => (
          <button
            aria-current={this.page === page ? 'page' : undefined}
            aria-label={this.ariaLabelPage!.replace('{0}', page.toString())}
            class={`${buttonClasses} ${this.page === page ? 'modus-wc-btn-active' : ''}`}
            onClick={() => this.handlePageClick(page)}
          >
            {page}
          </button>
        ))}

        <button
          aria-label={this.ariaLabelNextPage}
          class={buttonClasses}
          disabled={isLastPage}
          onClick={() => this.handlePageClick(this.page + 1)}
        >
          <Icons.ChevronRight />
        </button>

        {shouldShowFirstLastButtons && (
          <button
            aria-label={this.ariaLabelLastPage}
            class={buttonClasses}
            disabled={isLastPage}
            onClick={() => this.handlePageClick(this.count)}
          >
            <Icons.ChevronDoubleRight />
          </button>
        )}
      </div>
    );
  }
}
