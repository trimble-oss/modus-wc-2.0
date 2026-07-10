import { newSpecPage } from '@stencil/core/testing';
import { ModusWcPagination } from './modus-wc-pagination';
import { ModusWcTooltip } from '../modus-wc-tooltip/modus-wc-tooltip';

const getPageButton = (root: HTMLElement, pageNumber: number) =>
  root.querySelector(
    `button[aria-labelledby="modus-wc-pagination-page-${pageNumber}"]`
  );

describe('modus-wc-pagination', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: '<modus-wc-pagination aria-label="default pagination"></modus-wc-pagination>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination
        aria-label="custom pagination"
        count="13"
        custom-class="test-custom-class"
        page="3"
        size="lg"
      ></modus-wc-pagination>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should not render first and last page nav buttons when count is less than 5', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="5"
        page="4"
      ></modus-wc-pagination>`,
    });

    expect(page.root).toMatchSnapshot();

    const firstPageButton = page.root!.querySelector(
      'button[aria-label="First page"]'
    );
    const lastPageButton = page.root!.querySelector(
      'button[aria-label="Last page"]'
    );

    expect(firstPageButton).toBeNull();
    expect(lastPageButton).toBeNull();
  });

  it('should render first and last page nav buttons when count is greater than 5', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="13"
        page="7"
      ></modus-wc-pagination>`,
    });

    expect(page.root).toMatchSnapshot();

    const firstPageButton = page.root!.querySelector(
      'button[aria-label="First page"]'
    );
    const lastPageButton = page.root!.querySelector(
      'button[aria-label="Last page"]'
    );

    expect(firstPageButton).not.toBeNull();
    expect(lastPageButton).not.toBeNull();
  });

  it('should disable previous page button when on the first page', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="5"
        page="1"
      ></modus-wc-pagination>`,
    });

    expect(page.root).toMatchSnapshot();

    const previousPageButton = page.root!.querySelector(
      'button[aria-label="Previous page"]'
    );

    expect(previousPageButton).toHaveAttribute('disabled');
  });

  it('should disable next page button when on the last page', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="5"
        page="5"
      ></modus-wc-pagination>`,
    });

    expect(page.root).toMatchSnapshot();

    const nextPageButton = page.root!.querySelector(
      'button[aria-label="Next page"]'
    );

    expect(nextPageButton).toHaveAttribute('disabled');
  });

  it('should disable both first and previous page buttons when on the first page and count greater than 5', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="15"
        page="1"
      ></modus-wc-pagination>`,
    });

    expect(page.root).toMatchSnapshot();

    const firstPageButton = page.root!.querySelector(
      'button[aria-label="First page"]'
    );
    const previousPageButton = page.root!.querySelector(
      'button[aria-label="Previous page"]'
    );

    expect(firstPageButton).toHaveAttribute('disabled');
    expect(previousPageButton).toHaveAttribute('disabled');
  });

  it('should disable both last and next page buttons when on the last page and count greater than 5', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="15"
        page="15"
      ></modus-wc-pagination>`,
    });

    expect(page.root).toMatchSnapshot();

    const lastPageButton = page.root!.querySelector(
      'button[aria-label="Last page"]'
    );
    const nextPageButton = page.root!.querySelector(
      'button[aria-label="Next page"]'
    );

    expect(lastPageButton).toHaveAttribute('disabled');
    expect(nextPageButton).toHaveAttribute('disabled');
  });

  it('should emit pageChange event when clicking a page button', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="5"
        page="2"
      ></modus-wc-pagination>`,
    });

    // eslint-disable-next-line no-undef
    const pagination = page.root as HTMLModusWcPaginationElement;
    const pageChangeSpy = jest.fn();
    pagination.addEventListener('pageChange', pageChangeSpy);

    const pageThreeButton = getPageButton(page.root!, 3);

    pageThreeButton!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(pageChangeSpy).toHaveBeenCalled();
    const eventDetail = pageChangeSpy.mock.calls[0][0].detail;
    expect(eventDetail.newPage).toBe(3);
    expect(eventDetail.prevPage).toBe(2);
  });

  it('should not emit pageChange event when clicking the current page button', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="5"
        page="2"
      ></modus-wc-pagination>`,
    });

    // eslint-disable-next-line no-undef
    const pagination = page.root as HTMLModusWcPaginationElement;
    const pageChangeSpy = jest.fn();
    pagination.addEventListener('pageChange', pageChangeSpy);

    const pageTwoButton = getPageButton(page.root!, 2);

    pageTwoButton!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(pageChangeSpy).not.toHaveBeenCalled();
  });

  it('should emit pageChange event when clicking the first page button', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="10"
        page="5"
      ></modus-wc-pagination>`,
    });

    // eslint-disable-next-line no-undef
    const pagination = page.root as HTMLModusWcPaginationElement;
    const pageChangeSpy = jest.fn();
    pagination.addEventListener('pageChange', pageChangeSpy);

    const firstPageButton = page.root!.querySelector(
      'button[aria-label="First page"]'
    );

    firstPageButton!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(pageChangeSpy).toHaveBeenCalled();
    const eventDetail = pageChangeSpy.mock.calls[0][0].detail;
    expect(eventDetail.newPage).toBe(1);
    expect(eventDetail.prevPage).toBe(5);
  });

  it('should emit pageChange event when clicking the previous page button', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="10"
        page="5"
      ></modus-wc-pagination>`,
    });

    // eslint-disable-next-line no-undef
    const pagination = page.root as HTMLModusWcPaginationElement;
    const pageChangeSpy = jest.fn();
    pagination.addEventListener('pageChange', pageChangeSpy);

    const previousPageButton = page.root!.querySelector(
      'button[aria-label="Previous page"]'
    );

    previousPageButton!.dispatchEvent(
      new MouseEvent('click', { bubbles: true })
    );
    await page.waitForChanges();

    expect(pageChangeSpy).toHaveBeenCalled();
    const eventDetail = pageChangeSpy.mock.calls[0][0].detail;
    expect(eventDetail.newPage).toBe(4);
    expect(eventDetail.prevPage).toBe(5);
  });

  it('should emit pageChange event when clicking the next page button', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="10"
        page="5"
      ></modus-wc-pagination>`,
    });

    // eslint-disable-next-line no-undef
    const pagination = page.root as HTMLModusWcPaginationElement;
    const pageChangeSpy = jest.fn();
    pagination.addEventListener('pageChange', pageChangeSpy);

    const nextPageButton = page.root!.querySelector(
      'button[aria-label="Next page"]'
    );

    nextPageButton!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(pageChangeSpy).toHaveBeenCalled();
    const eventDetail = pageChangeSpy.mock.calls[0][0].detail;
    expect(eventDetail.newPage).toBe(6);
    expect(eventDetail.prevPage).toBe(5);
  });

  it('should emit pageChange event when clicking the last page button', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="10"
        page="5"
      ></modus-wc-pagination>`,
    });

    // eslint-disable-next-line no-undef
    const pagination = page.root as HTMLModusWcPaginationElement;
    const pageChangeSpy = jest.fn();
    pagination.addEventListener('pageChange', pageChangeSpy);

    const lastPageButton = page.root!.querySelector(
      'button[aria-label="Last page"]'
    );

    lastPageButton!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(pageChangeSpy).toHaveBeenCalled();
    const eventDetail = pageChangeSpy.mock.calls[0][0].detail;
    expect(eventDetail.newPage).toBe(10);
    expect(eventDetail.prevPage).toBe(5);
  });

  it('should apply custom aria label values', async () => {
    // Create the component
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination aria-label="pagination test" count="10" page="3"></modus-wc-pagination>`,
    });

    // Get the component instance and set custom aria labels
    // eslint-disable-next-line no-undef
    const pagination = page.root as HTMLModusWcPaginationElement;

    pagination.ariaLabelValues = {
      firstPage: 'Go to first',
      lastPage: 'Go to last',
      nextPage: 'Go to next',
      previousPage: 'Go to previous',
      page: 'Page number {0}',
    };

    await page.waitForChanges();

    // Check that custom aria labels are applied
    const firstPageButton = page.root!.querySelector(
      'button[aria-label="Go to first"]'
    );
    const previousPageButton = page.root!.querySelector(
      'button[aria-label="Go to previous"]'
    );
    const nextPageButton = page.root!.querySelector(
      'button[aria-label="Go to next"]'
    );
    const lastPageButton = page.root!.querySelector(
      'button[aria-label="Go to last"]'
    );

    // Find the button for page 3 and check its accessible label
    const pageThreeButton = getPageButton(page.root!, 3);
    const pageThreeLabel = page.root!.querySelector(
      '#modus-wc-pagination-page-3'
    );

    expect(firstPageButton).not.toBeNull();
    expect(previousPageButton).not.toBeNull();
    expect(nextPageButton).not.toBeNull();
    expect(lastPageButton).not.toBeNull();
    expect(pageThreeButton).not.toBeNull();
    expect(pageThreeLabel!.textContent).toBe('Page number 3');
  });

  it('should use default aria label values when none are provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination aria-label="pagination test" count="10" page="3"></modus-wc-pagination>`,
    });

    await page.waitForChanges();

    // Check that default aria labels are applied
    const firstPageButton = page.root!.querySelector(
      'button[aria-label="First page"]'
    );
    const previousPageButton = page.root!.querySelector(
      'button[aria-label="Previous page"]'
    );
    const nextPageButton = page.root!.querySelector(
      'button[aria-label="Next page"]'
    );
    const lastPageButton = page.root!.querySelector(
      'button[aria-label="Last page"]'
    );

    // Find the button for page 3 and check its accessible label
    const pageThreeButton = getPageButton(page.root!, 3);
    const pageThreeLabel = page.root!.querySelector(
      '#modus-wc-pagination-page-3'
    );

    expect(firstPageButton).not.toBeNull();
    expect(previousPageButton).not.toBeNull();
    expect(nextPageButton).not.toBeNull();
    expect(lastPageButton).not.toBeNull();
    expect(pageThreeButton).not.toBeNull();
    expect(pageThreeLabel!.textContent).toBe('Page 3');
  });

  it('should apply custom text for the previous page button', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination aria-label="pagination test" count="10" page="3"></modus-wc-pagination>`,
    });

    // Get the component instance and set custom text for the previous button
    // eslint-disable-next-line no-undef
    const pagination = page.root as HTMLModusWcPaginationElement;

    pagination.prevButtonText = 'Go Back';
    await page.waitForChanges();

    // Find all buttons and locate the one with the matching text
    const buttons = page.root!.querySelectorAll('button');
    const previousPageButton = Array.from(buttons).find(
      (btn) => btn.textContent?.trim() === 'Go Back'
    );

    expect(previousPageButton).not.toBeNull();
    expect(previousPageButton!.textContent?.trim()).toBe('Go Back');
  });

  it('should apply custom text for the next page button', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination],
      html: `<modus-wc-pagination aria-label="pagination test" count="10" page="3"></modus-wc-pagination>`,
    });

    // Get the component instance and set custom text for the next button
    // eslint-disable-next-line no-undef
    const pagination = page.root as HTMLModusWcPaginationElement;

    pagination.nextButtonText = 'Go Forward';
    await page.waitForChanges();

    // Find all buttons and locate the one with the matching text
    const buttons = page.root!.querySelectorAll('button');
    const nextPageButton = Array.from(buttons).find(
      (btn) => btn.textContent?.trim() === 'Go Forward'
    );

    expect(nextPageButton).not.toBeNull();
    expect(nextPageButton!.textContent?.trim()).toBe('Go Forward');
  });

  it('should truncate non-current page numbers with more than 5 digits from the front', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination, ModusWcTooltip],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="1000000"
        page="123456"
      ></modus-wc-pagination>`,
    });

    const truncatedPageButton = getPageButton(page.root!, 123455);
    const visualLabel = truncatedPageButton!.querySelector(
      '.modus-wc-pagination-page-label[aria-hidden="true"]'
    );

    expect(visualLabel!.textContent).toBe('...455');
  });

  it('should display the current page number in full without truncation', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination, ModusWcTooltip],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="1000000"
        page="123456"
      ></modus-wc-pagination>`,
    });

    const currentPageButton = getPageButton(page.root!, 123456);
    const visualLabel = currentPageButton!.querySelector(
      '.modus-wc-pagination-page-label[aria-hidden="true"]'
    );

    expect(
      currentPageButton!.classList.contains('modus-wc-pagination-page-active')
    ).toBe(true);
    expect(visualLabel!.textContent).toBe('123456');
    expect(currentPageButton!.querySelector('modus-wc-tooltip')).toBeNull();
  });

  it('should keep the full page number in the DOM for screen readers', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination, ModusWcTooltip],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="1000000"
        page="123456"
      ></modus-wc-pagination>`,
    });

    const srOnlyLabel = page.root!.querySelector(
      '#modus-wc-pagination-page-123455'
    );

    expect(srOnlyLabel!.classList.contains('modus-wc-sr-only')).toBe(true);
    expect(srOnlyLabel!.textContent).toBe('Page 123455');
  });

  it('should show a tooltip only for truncated page numbers', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination, ModusWcTooltip],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="1000000"
        page="123456"
      ></modus-wc-pagination>`,
    });

    const truncatedPageButton = getPageButton(page.root!, 123455);
    const currentPageButton = getPageButton(page.root!, 123456);
    const truncatedTooltip = truncatedPageButton!.querySelector(
      'modus-wc-tooltip'
    ) as HTMLElement & { content: string };

    expect(truncatedTooltip).not.toBeNull();
    expect(truncatedTooltip.content).toBe('123455');
    expect(currentPageButton!.querySelector('modus-wc-tooltip')).toBeNull();

    const shortPageSpec = await newSpecPage({
      components: [ModusWcPagination, ModusWcTooltip],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="100"
        page="50"
      ></modus-wc-pagination>`,
    });

    const shortPageButton = getPageButton(shortPageSpec.root!, 49);
    expect(shortPageButton!.querySelector('modus-wc-tooltip')).toBeNull();
  });

  it('should emit pageChange event when clicking a truncated page button', async () => {
    const page = await newSpecPage({
      components: [ModusWcPagination, ModusWcTooltip],
      html: `<modus-wc-pagination
        aria-label="pagination test"
        count="1000000"
        page="123456"
      ></modus-wc-pagination>`,
    });

    // eslint-disable-next-line no-undef
    const pagination = page.root as HTMLModusWcPaginationElement;
    const pageChangeSpy = jest.fn();
    pagination.addEventListener('pageChange', pageChangeSpy);

    const truncatedPageButton = getPageButton(page.root!, 123457);
    truncatedPageButton!.dispatchEvent(
      new MouseEvent('click', { bubbles: true })
    );
    await page.waitForChanges();

    expect(pageChangeSpy).toHaveBeenCalled();
    const eventDetail = pageChangeSpy.mock.calls[0][0].detail;
    expect(eventDetail.newPage).toBe(123457);
    expect(eventDetail.prevPage).toBe(123456);
  });
});
