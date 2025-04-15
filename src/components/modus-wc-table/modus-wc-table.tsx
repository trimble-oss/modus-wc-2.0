/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { convertTablePropsToClasses } from './modus-wc-table.tailwind';
import { Density } from '../types';
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

  /** Emits when a row is clicked. */
  @StencilEvent() rowClick!: EventEmitter<{
    row: Record<string, any>;
    index: number;
  }>;

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
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-table'];

    const propClasses = convertTablePropsToClasses({
      density: this.density,
      zebra: this.zebra,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleRowClick = (row: Record<string, any>, index: number) => {
    this.rowClick.emit({ row, index });
  };

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

  render() {
    return (
      <Host>
        <div class="modus-wc-overflow-x-auto" {...this.inheritedAttributes}>
          <table class={this.getClasses()}>
            <thead>
              <tr>
                {this.columns?.map((column) => (
                  <th class={column.className} style={{ width: column.width }}>
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.data?.map((row, index) => (
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
              ))}
            </tbody>
          </table>
        </div>
      </Host>
    );
  }
}
