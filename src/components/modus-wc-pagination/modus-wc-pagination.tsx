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
import * as Icons from './modus-wc-pagination.icons';
import { ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

interface IPageChange {
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

  /** Total number of pages */
  @Prop() count: number = 1;

  /** Custom CSS class to apply */
  @Prop() customClass?: string = '';

  /** The current page number */
  @Prop() page: number = 1;

  /** Whether to show first/last page buttons */
  @Prop() showFirstLast: boolean = true;

  /** Size of the pagination buttons */
  @Prop() size: ModusSize = 'md';

  /** Event emitted when page changes */
  @Event() pageChange!: EventEmitter<IPageChange>;

  /** Internal state to track visible page numbers */
  @State() visiblePages: number[] = [];

  componentWillLoad() {
    this.calculateVisiblePages();
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

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

  private handlePageClick = (newPage: number) => {
    if (newPage === this.page || newPage < 1 || newPage > this.count) {
      return;
    }

    this.pageChange.emit({ newPage, prevPage: this.page });
    this.page = newPage;
  };

  private getClasses(): string {
    const classList = ['modus-wc-pagination', 'modus-wc-join'];

    // const propClasses = convertPropsToClasses({});

    // The order CSS classes are added matters to CSS specificity
    // if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    const pageButtonClasses = `modus-wc-pagination-btn modus-wc-join-item modus-wc-btn modus-wc-btn-${this.size} modus-wc-btn-square`;

    return (
      <div class={this.getClasses()} {...this.inheritedAttributes}>
        {this.showFirstLast && (
          <button
            class={pageButtonClasses}
            onClick={() => this.handlePageClick(1)}
            aria-label="First page"
          >
            <Icons.ChevronDoubleLeft />
          </button>
        )}

        <button
          class={pageButtonClasses}
          onClick={() => this.handlePageClick(this.page - 1)}
          aria-label="Previous page"
        >
          <Icons.ChevronLeft />
        </button>

        {this.visiblePages.map((page) => (
          <button
            class={`${pageButtonClasses} ${this.page === page ? 'modus-wc-btn-active' : ''}`}
            onClick={() => this.handlePageClick(page)}
            aria-label={`Page ${page}`}
            aria-current={this.page === page ? 'page' : undefined}
          >
            {page}
          </button>
        ))}

        <button
          class={pageButtonClasses}
          onClick={() => this.handlePageClick(this.page + 1)}
          aria-label="Next page"
        >
          <Icons.ChevronRight />
        </button>

        {this.showFirstLast && (
          <button
            class={pageButtonClasses}
            onClick={() => this.handlePageClick(this.count)}
            aria-label="Last page"
          >
            <Icons.ChevronDoubleRight />
          </button>
        )}
      </div>
    );
  }
}
