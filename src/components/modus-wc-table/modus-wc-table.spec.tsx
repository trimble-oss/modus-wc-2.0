import { newSpecPage } from '@stencil/core/testing';
import { SortingState } from '@tanstack/table-core';
import { ITableColumn, ModusWcTable } from './modus-wc-table';

describe('modus-wc-table', () => {
  const defaultColumns: ITableColumn[] = [
    {
      id: 'name',
      header: 'Name',
      accessor: 'name',
      width: '200px',
    },
    {
      id: 'email',
      header: 'Email',
      accessor: 'email',
    },
  ];

  // Restore undefined values for Carole Baskin to maintain snapshot compatibility
  const defaultData = [
    { name: 'John Smith', email: 'john.smith@example.com', status: 'Active' },
    { name: 'Jane Doe', email: 'jane.doe@example.com', status: 'Inactive' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com', status: 'Active' },
    { name: 'Carole Baskin', email: undefined, status: undefined },
  ];

  // Additional test data with defined values for additional tests
  const extendedTestData = [
    { name: 'John Smith', email: 'john.smith@example.com', status: 'Active' },
    { name: 'Jane Doe', email: 'jane.doe@example.com', status: 'Inactive' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com', status: 'Active' },
    { name: 'Carole Baskin', email: 'carole@example.com', status: 'Active' },
    { name: 'David Miller', email: 'david@example.com', status: 'Inactive' },
    { name: 'Emma Wilson', email: 'emma@example.com', status: 'Active' },
  ];

  it('should warn if columns is not provided', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    const page = await newSpecPage({
      components: [ModusWcTable],
      html: '<modus-wc-table aria-label="Default table"></modus-wc-table>',
    });

    const component = page.rootInstance as ModusWcTable;
    component.data = defaultData;

    await page.waitForChanges();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'ModusWcTable: columns is required.'
    );

    consoleErrorSpy.mockRestore();
  });

  it('should warn if data is not provided', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    const page = await newSpecPage({
      components: [ModusWcTable],
      html: '<modus-wc-table aria-label="Default table"></modus-wc-table>',
    });

    const component = page.rootInstance as ModusWcTable;
    component.columns = defaultColumns;

    await page.waitForChanges();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'ModusWcTable: data is required.'
    );

    consoleErrorSpy.mockRestore();
  });

  it('renders with default props (empty table)', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Default table"></modus-wc-table>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table
        aria-label="Default table"
        custom-class="test-class"
        density="compact"
        zebra="true"
      ></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;
    component.columns = defaultColumns;
    component.data = defaultData;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should render basic cell content and undefined values correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Default table"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;
    component.columns = defaultColumns;
    component.data = defaultData;

    await page.waitForChanges();

    // Direct handler call since testing with component initialization is unreliable
    component['handleRowClick'](defaultData[0], 0);

    // Check string content
    const firstCell = page.root!.querySelector('tbody tr td');
    expect(firstCell?.textContent).toBe('John Smith');

    // Check undefined content
    const lastRowCells = page.root!.querySelectorAll('tbody tr:last-child td');
    expect(lastRowCells[1].textContent).toBe(''); // undefined email should render as empty string
  });

  it('should render content through cellRenderer', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Default table"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;
    const mockColumns = [
      {
        id: 'test',
        header: 'Test',
        accessor: 'test',
        cellRenderer: (value) => value,
      },
    ];

    // Test string path
    const stringResult = component['renderCell'](mockColumns[0], {
      test: 'hello',
    });
    expect(stringResult).toBe('hello');

    // Test HTMLElement path
    const mockElement = document.createElement('div');
    mockColumns[0].cellRenderer = () => mockElement;
    const elementResult = component['renderCell'](mockColumns[0], {
      test: 'hello',
    });
    expect(elementResult).toBe(mockElement);
  });

  it('should emit rowClick event when a row is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table
        aria-label="Default table"
        custom-class="test-class"
        density="compact"
        zebra="true"
      ></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;
    component.columns = defaultColumns;
    component.data = defaultData;

    await page.waitForChanges();

    const rowClickSpy = jest.fn();
    page.root!.addEventListener('rowClick', rowClickSpy);

    const firstRow = page.root!.querySelector('tbody tr') as HTMLAnchorElement;
    expect(firstRow).not.toBeNull();

    firstRow.click();
    await page.waitForChanges();

    expect(rowClickSpy).toHaveBeenCalled();
    expect(rowClickSpy.mock.calls[0][0].detail).toEqual({
      index: 0,
      row: defaultData[0],
    });
  });

  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table></modus-wc-table>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  // New test cases to improve coverage

  it('should handle pagination changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Default table" paginated="true"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;
    component.columns = defaultColumns;
    component.data = defaultData;
    component.pageSizeOptions = [2, 4, 6];

    await page.waitForChanges();

    const paginationChangeSpy = jest.fn();
    page.root!.addEventListener('paginationChange', paginationChangeSpy);

    // Test setting the current page
    component.currentPage = 2;
    await page.waitForChanges();

    // Test the page size calculation
    expect(component['getTotalPages']()).toBe(
      Math.ceil(defaultData.length / component['internalPagination'].pageSize)
    );

    // Test direct pagination handler call
    component['handlePageChange'](1);

    // Verify event emission through direct handler
    component['handlePaginationChange']({ pageIndex: 0, pageSize: 2 });

    expect(paginationChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          currentPage: 1,
          pageSize: 2,
        },
      })
    );
  });

  it('should handle sorting functionality', async () => {
    const sortableColumns = [
      {
        id: 'name',
        header: 'Name',
        accessor: 'name',
        sortable: true,
      },
      {
        id: 'email',
        header: 'Email',
        accessor: 'email',
      },
    ];

    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Default table" sortable="true"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;
    component.columns = sortableColumns;
    component.data = defaultData;

    await page.waitForChanges();

    const sortChangeSpy = jest.fn();
    page.root!.addEventListener('sortChange', sortChangeSpy);

    // Test direct sorting handler call
    component['handleHeaderClick']('name');

    // Verify sort state change
    expect(component['sorting'].length).toBeGreaterThan(0);
    expect(component['sorting'][0].id).toBe('name');

    // Test direct sorting handler for a second click (descending sort)
    component['handleHeaderClick']('name');

    // Verify sort state change to descending
    expect(component['sorting'][0].desc).toBe(true);

    // Test direct sorting handler for a third click (no sort)
    component['handleHeaderClick']('name');

    // Verify sort is cleared
    expect(component['sorting'].length).toBe(0);

    // Verify event emission
    expect(sortChangeSpy).toHaveBeenCalled();
  });

  it('should handle row selection functionality', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Default table" selectable="multi"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;
    component.columns = defaultColumns;
    component.data = defaultData;

    await page.waitForChanges();

    const rowSelectionChangeSpy = jest.fn();
    page.root!.addEventListener('rowSelectionChange', rowSelectionChangeSpy);

    // Set selected row IDs externally
    component.selectedRowIds = ['0', '2']; // Selecting first and third rows
    await page.waitForChanges();

    // Test direct row selection handler
    const selectionState = { '0': true, '2': true };
    component['handleRowSelectionChange'](selectionState);

    // Verify event emission
    expect(rowSelectionChangeSpy).toHaveBeenCalled();

    // Verify the selection state is correct
    expect(component['internalRowSelection']).toEqual(selectionState);
  });

  it('should handle cell editing functionality', async () => {
    const editableColumns = [
      {
        id: 'name',
        header: 'Name',
        accessor: 'name',
        width: '200px',
        editable: true,
        customEditorRenderer: (value, commit) => {
          const input = document.createElement('input');
          input.value =
            value !== null && value !== undefined
              ? typeof value === 'string'
                ? value
                : String(value)
              : '';
          input.addEventListener('change', () => commit(input.value));
          return input;
        },
      },
      {
        id: 'email',
        header: 'Email',
        accessor: 'email',
        editable: true,
      },
      {
        id: 'status',
        header: 'Status',
        accessor: 'status',
        editorTemplate: '<input value="${value}" id="status-editor" />',
        editorSetup: (
          el: HTMLElement,
          row: Record<string, unknown>,
          commit: (val: unknown) => void
        ) => {
          el.addEventListener('change', (e: Event) => {
            const inputEl = e.target as HTMLInputElement;
            commit(inputEl.value);
          });
        },
      },
    ];

    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Default table" editable="true"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;
    component.columns = editableColumns;
    component.data = [...defaultData];

    await page.waitForChanges();

    const cellEditStartSpy = jest.fn();
    const cellEditCommitSpy = jest.fn();
    page.root!.addEventListener('cellEditStart', cellEditStartSpy);
    page.root!.addEventListener('cellEditCommit', cellEditCommitSpy);

    // Test direct edit handler calls
    component['enterEdit'](0, 'name');
    expect(cellEditStartSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          rowIndex: 0,
          colId: 'name',
        },
      })
    );

    // Test commit edit with a new value
    component['commitEdit'](0, 'name', 'New Name');

    // Verify data was updated
    expect(component.data[0].name).toBe('New Name');

    // Verify event emission
    expect(cellEditCommitSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.objectContaining({
          rowIndex: 0,
          colId: 'name',
          newValue: 'New Name',
        }),
      })
    );
  });

  it('should update when property watchers are triggered', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Default table"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;

    // Initialize with initial data
    component.columns = defaultColumns;
    component.data = defaultData;

    await page.waitForChanges();

    // Change properties to trigger watchers
    component.sortable = true;
    await page.waitForChanges();

    component.paginated = true;
    await page.waitForChanges();

    // Change data to trigger data watcher
    const newData = [
      ...defaultData,
      { name: 'New Person', email: 'new@example.com' },
    ];
    component.data = newData;
    await page.waitForChanges();

    // Change columns to trigger columns watcher
    const newColumns = [
      ...defaultColumns,
      {
        id: 'status',
        header: 'Status',
        accessor: 'status',
      },
    ];
    component.columns = newColumns;
    await page.waitForChanges();

    // Verify the table was updated correctly
    expect(page.root).toMatchSnapshot();
  });

  it('should handle initial and direct sorting state changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Default table" sortable="true"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;

    // Set initial sorting state before initializing table
    component['sorting'] = [{ id: 'name', desc: false }] as SortingState;

    // Then initialize the table
    component.columns = defaultColumns.map((col) => ({
      ...col,
      sortable: true,
    }));
    component.data = defaultData;

    await page.waitForChanges();

    // Test the direct sorting handler
    const newSorting: SortingState = [{ id: 'email', desc: true }];
    component['handleSortingChange'](newSorting);

    // Verify sorting state was updated
    expect(component['sorting']).toEqual(newSorting);
  });

  // Additional test cases to cover the remaining uncovered lines

  it('should render pagination info and controls correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Paginated table" paginated="true"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;
    component.columns = defaultColumns;

    // Create more data to better test pagination
    const largeData = Array(20)
      .fill(null)
      .map((_, i) => ({
        name: `Person ${i + 1}`,
        email: `person${i + 1}@example.com`,
      }));
    component.data = largeData;
    component.currentPage = 2; // Start on page 2

    await page.waitForChanges();

    // Test page size selector
    expect(component['renderPageSizeSelector']).toBeDefined();
    const result = component['renderPageSizeSelector']();
    expect(result).not.toBeNull();

    // Test pagination info display
    const paginationInfo = component['renderPaginationInfo']();
    expect(paginationInfo).not.toBeNull();

    // Test page size change
    const mockEvent = {
      detail: {
        srcElement: { value: '10' },
      },
    } as CustomEvent;

    component['handlePageSizeOptionChange'](mockEvent);
    expect(component.internalPagination.pageSize).toBe(10);
    expect(component.internalPagination.pageIndex).toBe(0); // Should reset to first page

    // Test pagination density/size changes
    expect(component['getPaginationSize']()).toBe('md'); // Default
    component.density = 'compact';
    expect(component['getPaginationSize']()).toBe('sm');
    component.density = 'relaxed';
    expect(component['getPaginationSize']()).toBe('lg');
  });

  it('should handle different editor types and empty data cases', async () => {
    const customEditorColumns: ITableColumn[] = [
      {
        id: 'name',
        header: 'Name',
        accessor: 'name',
        editor: 'custom',
        customEditorRenderer: (
          value: unknown,
          commit: (val: unknown) => void
        ) => {
          if (typeof value === 'object' && value !== null) {
            try {
              const displayValue = JSON.stringify(value);
              const input = document.createElement('input');
              input.value = displayValue;
              input.addEventListener('change', () => commit(input.value));
              return input;
            } catch (error) {
              console.error('Error in custom editor renderer:', error);
              // Return an empty span instead of null
              const emptySpan = document.createElement('span');
              return emptySpan;
            }
          } else if (value !== null && value !== undefined) {
            const input = document.createElement('input');
            input.value = value as string;
            input.addEventListener('change', () => commit(input.value));
            return input;
          }
          // Return an empty span instead of null
          const emptySpan = document.createElement('span');
          return emptySpan;
        },
      },
      {
        id: 'status',
        header: 'Status',
        accessor: 'status',
        editorTemplate:
          '<input type="text" value="${value}" id="status-editor" />',
      },
      {
        id: 'email',
        header: 'Email',
        accessor: 'email',
        editorSetup: (el, row, commit) => {
          // This would normally set up event handlers
          commit(row.email);
        },
      },
    ];

    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Editor Test" editable="true"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;
    component.columns = customEditorColumns;
    component.data = defaultData;

    await page.waitForChanges();

    // Test with an editable function instead of boolean
    component.editable = (row) => row.name !== 'John Smith';
    await page.waitForChanges();

    // Test isRowEditable with both true and false cases
    expect(component['isRowEditable'](defaultData[0])).toBe(false); // John Smith is not editable
    expect(component['isRowEditable'](defaultData[1])).toBe(true); // Jane Doe is editable

    // Test with empty data case
    component.data = [];
    await page.waitForChanges();

    // Check that empty table message is displayed
    const emptyMessage = page.root!.querySelector('.no-data-message');
    expect(emptyMessage).not.toBeNull();
    expect(emptyMessage!.textContent).toContain('No data available');

    // Test pagination info with empty data
    expect(component['renderPaginationInfo']()).toBeNull();

    // Test getTotalPages with empty data
    expect(component['getTotalPages']()).toBe(1);
  });

  it('should handle advanced cell editing with templates and custom editors', async () => {
    const editableColumns: ITableColumn[] = [
      {
        id: 'name',
        header: 'Name',
        accessor: 'name',
        editor: 'text',
      },
      {
        id: 'status',
        header: 'Status',
        accessor: 'status',
        editorTemplate:
          '<input type="text" value="${value}" class="status-editor" />',
        editorSetup: (el, row, commit) => {
          const input = el.querySelector('input');
          if (input) {
            input.addEventListener('change', () => commit(input.value));
          }
        },
      },
    ];

    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Editor Test" editable="true"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;
    component.columns = editableColumns;
    component.data = defaultData;

    await page.waitForChanges();

    // Start editing
    component['enterEdit'](0, 'name');
    await page.waitForChanges();

    // Verify we're in edit mode
    expect(component['activeEditor']).toEqual({ rowIndex: 0, colId: 'name' });

    // Start editing on a cell with editorTemplate
    component['enterEdit'](0, 'status');
    await page.waitForChanges();

    // Commit the edit
    component['commitEdit'](0, 'status', 'Updated Status');

    // Verify the edit was committed and edit mode is cleared
    expect(component.data[0].status).toBe('Updated Status');
    expect(component['activeEditor']).toBeNull();

    // Test with non-editable row
    component.editable = false;
    component['enterEdit'](0, 'name');
    expect(component['activeEditor']).toBeNull(); // Should not enter edit mode
  });

  it('should handle edge cases for pagination and sorting', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Edge Case Test" paginated="true" sortable="true"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;
    component.columns = defaultColumns.map((col) => ({
      ...col,
      sortable: true,
    }));
    component.data = defaultData;

    await page.waitForChanges();

    // Test page change with invalid page number (too low)
    component['handlePageChange'](0);
    expect(component['internalPagination'].pageIndex).toBe(0); // Should stay at first page

    // Test page change with invalid page number (too high)
    const totalPages = component['getTotalPages']();
    component['handlePageChange'](totalPages + 1);
    expect(component['internalPagination'].pageIndex).toBe(0); // Should not change

    // Test sorting on non-sortable column
    component['handleHeaderClick']('email'); // Not marked as sortable
    expect(component['sorting']).toBeDefined();

    // Test sorting with error case
    const mockTable = component['table'];
    component['table'] = null;
    component['handleHeaderClick']('name');
    component['table'] = mockTable;

    // Test with edge case: missing table when updating pagination
    component['table'] = null;
    component['handlePageChange'](2);
    component['handlePageSizeOptionChange']({
      detail: { srcElement: { value: '10' } },
    } as unknown as Event);
    component['table'] = mockTable;

    // Test with showPageSizeSelector = false
    component.showPageSizeSelector = false;
    await page.waitForChanges();

    expect(component['renderPageSizeSelector']()).toBeNull();
  });

  it('should handle complex editor rendering and cell interactions', async () => {
    // Create columns with different editor types
    const editorColumns: ITableColumn[] = [
      {
        id: 'name',
        header: 'Name',
        accessor: 'name',
        editor: 'text',
      },
      {
        id: 'complex',
        header: 'Complex',
        accessor: 'complex',
        editor: 'custom',
        customEditorRenderer: (value: unknown, commit, row) => {
          // Test the row parameter
          expect(row).toBeDefined();

          const input = document.createElement('input');
          input.value = typeof value === 'string' ? value : '';
          input.addEventListener('input', () => {
            commit(input.value);
          });
          return input;
        },
      },
      {
        id: 'template',
        header: 'Template',
        accessor: 'template',
        editorTemplate: '<select>${value}</select>',
        editorSetup: (el, row, commit) => {
          // Test the row and commit params
          expect(row).toBeDefined();
          expect(commit).toBeInstanceOf(Function);

          // Simulate setup
          el.innerHTML = '<option>Option 1</option>';

          // Test with null handling
          commit(null);
        },
      },
    ];

    const testData = [
      {
        id: 1,
        name: 'Test Name',
        complex: { key: 'value' },
        template: 'template_value',
      },
    ];

    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Editor Table" editable="true"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;
    component.columns = editorColumns;
    component.data = testData;

    await page.waitForChanges();

    // Start editing with complex editor
    component['enterEdit'](0, 'complex');
    await page.waitForChanges();

    // Start editing with template editor
    component['enterEdit'](0, 'template');
    await page.waitForChanges();

    // Mock the render cell handling with events
    const testElement = document.createElement('div');

    // Create a fake cell for the editor
    const fakeCell = document.createElement('td');
    fakeCell.dataset.col = 'template';

    // Mock the ref callback directly
    const refCallback = (el: HTMLElement | null) => {
      if (!el) return;

      if (
        component['activeEditor'] &&
        component['activeEditor'].colId === 'template'
      ) {
        // This tests the element handler branch in the editor ref callback
        el.appendChild(testElement);

        // Simulate a focusout event
        const focusoutEvent = new FocusEvent('focusout', {
          bubbles: true,
          relatedTarget: null,
        });
        el.dispatchEvent(focusoutEvent);
      }
    };

    // Call the ref directly
    refCallback(fakeCell);

    // Test cleanup by switching to another editor
    component['activeEditor'] = { rowIndex: 0, colId: 'name' };
    refCallback(fakeCell);
  });

  it('should render with data and columns', async () => {
    const columns = [{ id: 'name', header: 'Name', accessor: 'name' }];
    const data = [{ id: 1, name: 'Test' }];

    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Test table"></modus-wc-table>`,
      supportsShadowDom: false,
    });

    const component = page.rootInstance;
    component.columns = columns;
    component.data = data;

    await page.waitForChanges();

    // Check if the table has rendered with the data
    const tableEl = page.root?.querySelector('table');
    expect(tableEl).not.toBeNull();

    const rows = tableEl?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(1);
  });

  it('should sort columns when sortable is enabled', async () => {
    const columns = [
      { id: 'name', header: 'Name', accessor: 'name', sortable: true },
      { id: 'email', header: 'Email', accessor: 'email' },
    ];
    const data = [
      { name: 'John', email: 'john@example.com' },
      { name: 'Alice', email: 'alice@example.com' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTable],
      html: '<modus-wc-table aria-label="Test table"></modus-wc-table>',
      supportsShadowDom: false,
    });

    const component = page.rootInstance;
    component.columns = columns;
    component.data = data;
    component.sortable = true;

    await page.waitForChanges();

    // Test sorting event through direct method call
    const sortSpy = jest.spyOn(component.sortChange, 'emit');
    component['handleHeaderClick']('name');

    // Sorting clicked - should now be sorted
    expect(sortSpy).toHaveBeenCalled();
    expect(component.sorting.length).toBe(1);
    expect(component.sorting[0].id).toBe('name');
    expect(component.sorting[0].desc).toBe(false);

    // Click again - should toggle to descending
    component['handleHeaderClick']('name');
    expect(component.sorting[0].desc).toBe(true);

    // Test sorting on non-sortable column
    component['handleHeaderClick']('email'); // Not marked as sortable
    expect(component.sorting.length).toBe(1); // Should still be 1 (no change)

    // Click sorted column again - should clear sorting
    component['handleHeaderClick']('name');
    expect(component.sorting.length).toBe(0);
  });

  it('should handle row clicks and emit rowClick event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: '<modus-wc-table aria-label="Test table"></modus-wc-table>',
      supportsShadowDom: false,
    });

    const component = page.rootInstance;
    component.columns = defaultColumns;
    component.data = defaultData;

    await page.waitForChanges();

    const rowClickSpy = jest.spyOn(component.rowClick, 'emit');
    const testRow = defaultData[0];
    component['handleRowClick'](testRow, 0);

    expect(rowClickSpy).toHaveBeenCalledWith({ row: testRow, index: 0 });
  });

  it('should handle row selection in single mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: '<modus-wc-table aria-label="Test table" selectable="single"></modus-wc-table>',
      supportsShadowDom: false,
    });

    const component = page.rootInstance;
    component.columns = defaultColumns;
    component.data = defaultData;

    await page.waitForChanges();

    // Initialize table and test row selection
    expect(component.selectable).toBe('single');

    // Simulate selecting a row
    const selectionSpy = jest.spyOn(component.rowSelectionChange, 'emit');
    component['handleRowClick'](defaultData[1], 1);

    expect(selectionSpy).toHaveBeenCalled();
  });

  it('should handle pagination', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: '<modus-wc-table aria-label="Test table" paginated="true"></modus-wc-table>',
      supportsShadowDom: false,
    });

    const component = page.rootInstance;
    component.columns = defaultColumns;
    component.data = extendedTestData;
    // Don't manually set pageSizeOptions, let the component use its default

    await page.waitForChanges();

    // Initial pagination state - use the component's default page size (which is 5)
    expect(component.internalPagination.pageIndex).toBe(0); // First page
    const defaultPageSize = component.internalPagination.pageSize;
    expect(defaultPageSize).toBe(5); // Default from component

    // Test total pages calculation (6 items with 5 per page = 2 pages)
    const expectedPages = Math.ceil(extendedTestData.length / defaultPageSize);
    expect(component['getTotalPages']()).toBe(expectedPages);

    // Test page change
    const paginationSpy = jest.spyOn(component.paginationChange, 'emit');
    component['handlePageChange'](2); // Go to page 2

    expect(paginationSpy).toHaveBeenCalled();
    expect(component.internalPagination.pageIndex).toBe(1); // Zero-based index

    // Test invalid page changes
    component['handlePageChange'](0); // Invalid page (less than 1)
    expect(component.internalPagination.pageIndex).toBe(1); // Should not change

    component['handlePageChange'](10); // Invalid page (greater than total)
    expect(component.internalPagination.pageIndex).toBe(1); // Should not change

    // Test page size change
    const mockEvent = {
      detail: {
        srcElement: { value: '10' },
      },
    } as CustomEvent;

    component['handlePageSizeOptionChange'](mockEvent);
    expect(component.internalPagination.pageSize).toBe(10);
    expect(component.internalPagination.pageIndex).toBe(0); // Should reset to first page

    // Test pagination size based on density
    component.density = 'compact';
    expect(component['getPaginationSize']()).toBe('sm');

    component.density = 'relaxed';
    expect(component['getPaginationSize']()).toBe('lg');

    component.density = 'comfortable';
    expect(component['getPaginationSize']()).toBe('md');
  });

  it('should render pagination controls correctly when paginated is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: '<modus-wc-table aria-label="Test table" paginated="true"></modus-wc-table>',
      supportsShadowDom: false,
    });

    const component = page.rootInstance;
    component.columns = defaultColumns;
    component.data = defaultData;

    await page.waitForChanges();

    // Check if pagination container exists
    const paginationContainer = page.root?.querySelector(
      '.pagination-container'
    );
    expect(paginationContainer).not.toBeNull();

    // Test with showPageSizeSelector = true (default)
    expect(component.showPageSizeSelector).toBe(true);
    let pageSizeSelector = page.root?.querySelector('.page-size-selector');
    expect(pageSizeSelector).not.toBeNull();

    // Test with showPageSizeSelector = false
    component.showPageSizeSelector = false;
    await page.waitForChanges();

    pageSizeSelector = page.root?.querySelector('.page-size-selector');
    expect(pageSizeSelector).toBeNull();

    // Check pagination info rendering
    const paginationInfo = page.root?.querySelector('.pagination-info');
    expect(paginationInfo).not.toBeNull();

    // Check if pagination controls are rendered
    const paginationControls = page.root?.querySelector('.pagination-controls');
    expect(paginationControls).not.toBeNull();
  });

  it('should render empty pagination info with no data', async () => {
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: '<modus-wc-table aria-label="Test table" paginated="true"></modus-wc-table>',
      supportsShadowDom: false,
    });

    const component = page.rootInstance;
    component.columns = defaultColumns;
    component.data = []; // Empty data

    await page.waitForChanges();

    // Check pagination info rendering with no data
    const paginationContainer = page.root?.querySelector(
      '.pagination-container'
    );
    expect(paginationContainer).toBeNull(); // Shouldn't render pagination with no data

    // Total pages should be 1 with empty data
    expect(component['getTotalPages']()).toBe(1);
  });

  it('should trigger column and sortable watchers correctly', async () => {
    // For properties like arrays and objects, we need to serialize to string
    // and parse it in the component
    const columns = [
      { id: 'name', header: 'Name', accessor: 'name', sortable: true },
      { id: 'email', header: 'Email', accessor: 'email' },
    ];

    const data = [
      { id: 1, name: 'John', email: 'john@example.com' },
      { id: 2, name: 'Alice', email: 'alice@example.com' },
    ];

    // Create component first, then set properties
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Test table"></modus-wc-table>`,
    });

    // Mock the method before setting properties to capture calls properly
    const component = page.rootInstance as ModusWcTable;

    // Create a manual spy on initializeTable before setting properties
    const initializeTableSpy = jest.spyOn(component, 'initializeTable' as any);
    component.sortable = false;
    component.columns = columns;
    component.data = data;

    await page.waitForChanges();

    // Verify initializeTable was called for either data or columns being set
    expect(initializeTableSpy).toHaveBeenCalled();

    // Make sure the table was initialized
    const tableBefore = component['table'];
    expect(tableBefore).not.toBeNull();

    // Create spy for table.setOptions method - use non-null assertion since we verified it's not null
    const setOptionsSpy = jest.spyOn(tableBefore!, 'setOptions');

    // Create new columns to test the watcher
    const newColumns = [
      { id: 'name', header: 'New Name', accessor: 'name', sortable: true },
      { id: 'email', header: 'New Email', accessor: 'email' },
      { id: 'phone', header: 'Phone', accessor: 'phone' },
    ];

    // Call the watcher method directly to test it
    component['handleColumnsChange'](newColumns);
    await page.waitForChanges();

    // Verify setOptions was called with updated columns
    expect(setOptionsSpy).toHaveBeenCalled();

    // Now test the sortable watcher
    // Reset the spy to clear previous calls
    setOptionsSpy.mockClear();

    // Call the handler directly to test the functionality
    component['handleSortableChange'](true);
    await page.waitForChanges();

    // Verify setOptions was called with the sortable flag
    expect(setOptionsSpy).toHaveBeenCalled();
    // We can't directly test the exact parameters since they're a callback function
    // instead, check that it was called after the function execution

    // Test the initialization path (table doesn't exist)
    const originalTable = component['table'];

    // Temporarily set table to null
    component['table'] = null;

    // Spy again on initializeTable (since previous spy might be saturated with calls)
    const secondInitSpy = jest.spyOn(component, 'initializeTable' as any);

    // Call the column handler which should call initializeTable when table is null
    component['handleColumnsChange'](newColumns);

    // Verify initializeTable was called
    expect(secondInitSpy).toHaveBeenCalled();

    // Restore table reference
    component['table'] = originalTable;
  });

  it('should update table options when columns change', async () => {
    // Setup initial component
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Test Table"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;

    // Initial data
    const columns = [
      { id: 'name', header: 'Name', accessor: 'name', sortable: true },
      { id: 'email', header: 'Email', accessor: 'email' },
    ];

    const data = [
      { id: 1, name: 'John', email: 'john@example.com' },
      { id: 2, name: 'Alice', email: 'alice@example.com' },
    ];

    // Setup the component to initialize the table
    component.columns = columns;
    component.data = data;

    await page.waitForChanges();

    // Verify table is initialized
    expect(component['table']).not.toBeNull();

    // Setup spy for setOptions
    const setOptionsSpy = jest.spyOn(component['table']!, 'setOptions');

    // New columns to trigger update
    const newColumns = [
      { id: 'name', header: 'Name Updated', accessor: 'name', sortable: true },
      { id: 'email', header: 'Email Updated', accessor: 'email' },
      { id: 'phone', header: 'Phone', accessor: 'phone' },
    ];

    // Explicitly call the handler to test it
    component['handleColumnsChange'](newColumns);

    // Verify setOptions was called
    expect(setOptionsSpy).toHaveBeenCalled();

    // Reset the table to test the initialization path
    const originalTable = component['table'];
    component['table'] = null;

    // Mock initializeTable
    const initTableSpy = jest.spyOn(component, 'initializeTable' as any);

    // Call handleColumnsChange when table is null
    component['handleColumnsChange'](newColumns);

    // Verify initializeTable is called when table is null
    expect(initTableSpy).toHaveBeenCalled();

    // Restore table
    component['table'] = originalTable;
  });

  it('should update table options when sortable changes', async () => {
    // Setup initial component
    const page = await newSpecPage({
      components: [ModusWcTable],
      html: `<modus-wc-table aria-label="Test Table"></modus-wc-table>`,
    });

    const component = page.rootInstance as ModusWcTable;

    // Initial data
    const columns = [
      { id: 'name', header: 'Name', accessor: 'name', sortable: true },
      { id: 'email', header: 'Email', accessor: 'email' },
    ];

    const data = [
      { id: 1, name: 'John', email: 'john@example.com' },
      { id: 2, name: 'Alice', email: 'alice@example.com' },
    ];

    component.sortable = false;
    component.columns = columns;
    component.data = data;

    await page.waitForChanges();

    // Verify table is initialized
    expect(component['table']).not.toBeNull();

    // Setup spy for setOptions
    const setOptionsSpy = jest.spyOn(component['table']!, 'setOptions');

    // Explicitly call the handler to test it
    component['handleSortableChange'](true);

    // Verify setOptions was called
    expect(setOptionsSpy).toHaveBeenCalled();
  });
});
