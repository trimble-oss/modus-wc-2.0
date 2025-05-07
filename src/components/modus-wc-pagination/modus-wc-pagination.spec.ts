import { newSpecPage } from '@stencil/core/testing';
import { ModusWcPagination } from './modus-wc-pagination';

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

    const pageButtons = page.root!.querySelectorAll('button');
    const pageThreeButton = Array.from(pageButtons).find(
      (button) => button.textContent === '3'
    );

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

    const pageButtons = page.root!.querySelectorAll('button');
    const pageTwoButton = Array.from(pageButtons).find(
      (button) => button.textContent === '2'
    );

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

    // Find the button with text "3" and check its aria-label
    const pageButtons = page.root!.querySelectorAll('button');
    const pageThreeButton = Array.from(pageButtons).find(
      (button) => button.textContent?.trim() === '3'
    );

    expect(firstPageButton).not.toBeNull();
    expect(previousPageButton).not.toBeNull();
    expect(nextPageButton).not.toBeNull();
    expect(lastPageButton).not.toBeNull();
    expect(pageThreeButton!.getAttribute('aria-label')).toBe('Page number 3');
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

    // Find the button with text "3" and check its aria-label
    const pageButtons = page.root!.querySelectorAll('button');
    const pageThreeButton = Array.from(pageButtons).find(
      (button) => button.textContent?.trim() === '3'
    );

    expect(firstPageButton).not.toBeNull();
    expect(previousPageButton).not.toBeNull();
    expect(nextPageButton).not.toBeNull();
    expect(lastPageButton).not.toBeNull();
    expect(pageThreeButton!.getAttribute('aria-label')).toBe('Page 3');
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

    // Check that the custom text is applied to the previous button
    const previousPageButton = page.root!.querySelector(
      'button[aria-label="Previous page"]'
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

    // Check that the custom text is applied to the next button
    const nextPageButton = page.root!.querySelector(
      'button[aria-label="Next page"]'
    );

    expect(nextPageButton).not.toBeNull();
    expect(nextPageButton!.textContent?.trim()).toBe('Go Forward');
  });
});
