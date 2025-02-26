import { newSpecPage } from '@stencil/core/testing';
import { ModusWcModal } from './modus-wc-modal';

describe('modus-wc-modal', () => {
  it('console error if modalId is not passed', async () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    await newSpecPage({
      components: [ModusWcModal],
      html: '<modus-wc-modal></modus-wc-modal>',
    });
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal],
      html: '<modus-wc-modal></modus-wc-modal>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal],
      html: `<modus-wc-modal
            custom-class="test-class"
            modal-id="test2"
            outside-click-close="false"
            position="top"
            show-corner-close-button="false"
            ></modus-wc-modal>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render button when show-close is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal],
      html: '<modus-wc-modal modal-id="test3" show-close="true"></modus-wc-modal>',
    });
    expect(page.root).toMatchSnapshot();
    const closeButton = page.root!.querySelector(
      '.modus-wc-modal-close-icon-btn'
    );
    expect(closeButton).toBeTruthy();
  });

  it('should not render button when show-close is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal],
      html: '<modus-wc-modal modal-id="test4" show-close="false"></modus-wc-modal>',
    });
    expect(page.root).toMatchSnapshot();
    const closeButton = page.root!.querySelector(
      '.modus-wc-modal-close-icon-btn'
    );
    expect(closeButton).toBeNull();
  });

  it('should close dialog when close button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal],
      html: '<modus-wc-modal modal-id="test5" show-close="true"></modus-wc-modal>',
    });

    const dialog = page.root!.querySelector('dialog');
    expect(dialog).toBeTruthy();

    const closeButton = page.root!.querySelector(
      '.modus-wc-modal-close-icon-btn'
    );
    expect(closeButton).toBeTruthy();

    (closeButton as HTMLButtonElement)?.click();
    await page.waitForChanges();

    expect(dialog?.hasAttribute('open')).toBeFalsy();
  });

  it('should render backdrop form when backdrop is default', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal],
      html: '<modus-wc-modal modal-id="test6"></modus-wc-modal>',
    });
    expect(page.root).toMatchSnapshot();
    const backdrop = page.root!.querySelector('.modus-wc-modal-backdrop');
    expect(backdrop).toBeTruthy();
  });

  it('should not render backdrop form when backdrop is static', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal],
      html: '<modus-wc-modal modal-id="test7" backdrop="static"></modus-wc-modal>',
    });
    expect(page.root).toMatchSnapshot();
    const backdrop = page.root!.querySelector('.modus-wc-modal-backdrop');
    expect(backdrop).toBeNull();
  });
});
