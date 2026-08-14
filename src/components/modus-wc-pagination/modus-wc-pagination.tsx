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
import { ChevronDoubleLeftSolidIcon } from '../../icons/chevron-double-left-solid.icon';
import { ChevronDoubleRightSolidIcon } from '../../icons/chevron-double-right-solid.icon';
import { ChevronLeftSolidIcon } from '../../icons/chevron-left-solid.icon';
import { ChevronRightSolidIcon } from '../../icons/chevron-right-solid.icon';
import { handleShadowDOMStyles } from '../base-component';
import { ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';
import { convertPropsToClasses } from './modus-wc-pagination.tailwind';

/** Aria label values for pagination buttons */
export interface IAriaLabelValues {
  /** Aria label for the first page button */
  firstPage?: string;
  /** Aria label for the last page button */
  lastPage?: string;
  /** Aria label for the next page button */
  nextPage?: string;
  /** Aria label for the page number button. Use {0} as placeholder for the page number */
  page?: string;
  /** Aria label for the previous page button */
  previousPage?: string;
}

export interface IPageChange {
  /** The number of the newly selected page */
  newPage: number;
  /** The number of the previously selected page */
  prevPage: number;
}

/**
 * Pagination component to navigate through pages of content
 */
@Component({
  tag: 'modus-wc-pagination',
  styleUrl: 'modus-wc-pagination.scss',
  shadow: false,
})
export class ModusWcPagination {
  private inheritedAttributes: Attributes = {};
  private readonly maxPageDigits: number = 5;
  private readonly maxVisibleButtons: number = 5;
  private readonly truncatedSuffixLength: number = 3;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Aria label values for pagination buttons */
  @Prop() ariaLabelValues?: IAriaLabelValues;

  /** Total number of pages */
  @Prop() count: number = 1;

  /** Custom CSS class to apply */
  @Prop() customClass?: string = '';

  /** The next page button text. If not set, an icon control will be used. */
  @Prop() nextButtonText?: string;

  /** The current page number */
  @Prop() page: number = 1;

  /** The previous page button text. If not set, an icon control will be used. */
  @Prop() prevButtonText?: string;

  /** Size of the pagination buttons */
  @Prop() size: ModusSize | 'xs' | 'xl' = 'md';

  /** Event emitted when page changes */
  @Event() pageChange!: EventEmitter<IPageChange>;

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
    handleShadowDOMStyles(this.el);
    this.calculateVisiblePages();
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): {
    paginationClasses: string;
    iconButtonClasses: string;
    pageButtonClasses: string;
  } {
    const sharedButtonClasses = [
      'modus-wc-pagination-btn',
      'modus-wc-join-item',
      'modus-wc-btn',
    ];

    const paginationClassList = ['modus-wc-pagination', 'modus-wc-join'];

    if (this.customClass) paginationClassList.push(this.customClass);
    const paginationClasses = paginationClassList.join(' ');

    const sizeClass = convertPropsToClasses({ size: this.size });

    const iconButtonClassList = [...sharedButtonClasses, 'modus-wc-btn-square'];
    const pageButtonClassList = [
      ...sharedButtonClasses,
      'modus-wc-pagination-page-btn',
    ];

    if (sizeClass) {
      iconButtonClassList.push(sizeClass);
      pageButtonClassList.push(sizeClass);
    }

    return {
      paginationClasses,
      iconButtonClasses: iconButtonClassList.join(' '),
      pageButtonClasses: pageButtonClassList.join(' '),
    };
  }

  private handlePageClick = (newPage: number) => {
    if (newPage === this.page || newPage < 1 || newPage > this.count) {
      return;
    }

    this.pageChange.emit({ newPage, prevPage: this.page });
    this.page = newPage;
  };

  private isTruncatedPage(page: number): boolean {
    return page !== this.page && page.toString().length > this.maxPageDigits;
  }

  private formatTruncatedPage(page: number): string {
    const pageStr = page.toString();
    return `...${pageStr.slice(-this.truncatedSuffixLength)}`;
  }

  private renderPageButton(
    page: number,
    buttonClasses: string,
    pageAriaLabel: string
  ) {
    const isCurrentPage = this.page === page;
    const pageStr = page.toString();
    const isTruncated = this.isTruncatedPage(page);
    const visualLabel = isTruncated ? this.formatTruncatedPage(page) : pageStr;

    const pageLabel = (
      <span class="modus-wc-pagination-page-label" aria-hidden="true">
        {visualLabel}
      </span>
    );

    return (
      <modus-wc-button
        key={page}
        aria-current={isCurrentPage ? 'page' : undefined}
        customClass={`${buttonClasses} ${isCurrentPage ? 'modus-wc-btn-active modus-wc-pagination-page-active' : ''}`}
        onButtonClick={() => this.handlePageClick(page)}
        type="button"
      >
        <span class="modus-wc-sr-only">{pageAriaLabel}</span>
        {isTruncated ? (
          <modus-wc-tooltip content={pageStr} position="top">
            {pageLabel}
          </modus-wc-tooltip>
        ) : (
          pageLabel
        )}
      </modus-wc-button>
    );
  }

  render() {
    const { paginationClasses, iconButtonClasses, pageButtonClasses } =
      this.getClasses();
    const isFirstPage = this.page === 1;
    const isLastPage = this.page === this.count;
    const shouldShowFirstLastButtons = this.count > this.maxVisibleButtons;

    // Default aria values if not provided
    const ariaLabels = {
      firstPage: this.ariaLabelValues?.firstPage || 'First page',
      lastPage: this.ariaLabelValues?.lastPage || 'Last page',
      nextPage: this.ariaLabelValues?.nextPage || 'Next page',
      page: this.ariaLabelValues?.page || 'Page {0}',
      previousPage: this.ariaLabelValues?.previousPage || 'Previous page',
    };

    return (
      <div class={paginationClasses} {...this.inheritedAttributes}>
        {shouldShowFirstLastButtons && (
          <button
            aria-label={ariaLabels.firstPage}
            class={iconButtonClasses}
            disabled={isFirstPage}
            onClick={() => this.handlePageClick(1)}
          >
            <ChevronDoubleLeftSolidIcon className="modus-wc-pagination-icon" />
          </button>
        )}

        <button
          aria-label={this.prevButtonText ? undefined : ariaLabels.previousPage}
          class={`${iconButtonClasses} ${this.prevButtonText ? 'modus-wc-pagination-button-text' : ''}`}
          disabled={isFirstPage}
          onClick={() => this.handlePageClick(this.page - 1)}
        >
          {this.prevButtonText ? (
            <span>{this.prevButtonText}</span>
          ) : (
            <ChevronLeftSolidIcon className="modus-wc-pagination-icon" />
          )}
        </button>

        {this.visiblePages.map((page) =>
          this.renderPageButton(
            page,
            pageButtonClasses,
            ariaLabels.page.replace('{0}', page.toString())
          )
        )}

        <button
          aria-label={this.nextButtonText ? undefined : ariaLabels.nextPage}
          class={`${iconButtonClasses} ${this.nextButtonText ? 'modus-wc-pagination-button-text' : ''}`}
          disabled={isLastPage}
          onClick={() => this.handlePageClick(this.page + 1)}
        >
          {this.nextButtonText ? (
            <span>{this.nextButtonText}</span>
          ) : (
            <ChevronRightSolidIcon className="modus-wc-pagination-icon" />
          )}
        </button>

        {shouldShowFirstLastButtons && (
          <button
            aria-label={ariaLabels.lastPage}
            class={iconButtonClasses}
            disabled={isLastPage}
            onClick={() => this.handlePageClick(this.count)}
          >
            <ChevronDoubleRightSolidIcon className="modus-wc-pagination-icon" />
          </button>
        )}
      </div>
    );
  }
}
