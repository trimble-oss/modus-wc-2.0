import { newSpecPage } from '@stencil/core/testing';
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

  const defaultData = [
    { name: 'John Smith', email: 'john.smith@example.com', status: 'Active' },
    { name: 'Jane Doe', email: 'jane.doe@example.com', status: 'Inactive' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com', status: 'Active' },
    { name: 'Carole Baskin', email: undefined, status: undefined },
  ];

  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcTable],
      html: '<modus-wc-table></modus-wc-table>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcTable: aria-label is required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

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
});
