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

    pageThreeButton!.click();
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

    pageTwoButton!.click();
    await page.waitForChanges();

    expect(pageChangeSpy).not.toHaveBeenCalled();
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
});
