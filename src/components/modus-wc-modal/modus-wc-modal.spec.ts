import { newSpecPage } from '@stencil/core/testing';
import { ModusWcModal } from './modus-wc-modal';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';

describe('modus-wc-modal', () => {
  it('console error if modalId is not passed', async () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: '<modus-wc-modal></modus-wc-modal>',
    });
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: '<modus-wc-modal></modus-wc-modal>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: `<modus-wc-modal
            backdrop="static"
            custom-class="test-class"
            fullscreen="true"
            modal-id="test2"
            position="top"
            show-close="false"
            show-fullscreen-toggle="true"
            ></modus-wc-modal>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render button when show-close is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: '<modus-wc-modal modal-id="test3" show-close="true"></modus-wc-modal>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should not render button when show-close is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: '<modus-wc-modal modal-id="test4" show-close="false"></modus-wc-modal>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render expand icon when show-fullscreen-toggle is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: '<modus-wc-modal modal-id="test5" show-fullscreen-toggle="true"></modus-wc-modal>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render collapse icon when show-fullscreen-toggle is true and fullscreen is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: '<modus-wc-modal modal-id="test5" show-fullscreen-toggle="true"></modus-wc-modal>',
    });
    expect(page.root).toMatchSnapshot();
    const expandIcon = page.root!.querySelector(
      'button[aria-label="Fullscreen toggle"]'
    );
    expect(expandIcon).toBeTruthy();
    (expandIcon as HTMLButtonElement)?.click();
    await page.waitForChanges();
    const collapseIcon = page.root!.querySelector(
      'button[aria-label="Fullscreen toggle"]'
    );
    expect(collapseIcon).toBeTruthy();
  });

  it('should close dialog when close button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: '<modus-wc-modal modal-id="test5" show-close="true"></modus-wc-modal>',
    });

    const dialog = page.root!.querySelector('dialog');
    expect(dialog).toBeTruthy();

    const closeButton = page.root!.querySelector(
      'button[aria-label="Close modal"]'
    );
    expect(closeButton).toBeTruthy();

    (closeButton as HTMLButtonElement)?.click();
    await page.waitForChanges();

    expect(dialog?.hasAttribute('open')).toBeFalsy();
  });

  it('should render backdrop form when backdrop is default', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: '<modus-wc-modal modal-id="test6"></modus-wc-modal>',
    });
    expect(page.root).toMatchSnapshot();
    const backdrop = page.root!.querySelector('.modus-wc-modal-backdrop');
    expect(backdrop).toBeTruthy();
  });

  it('should not render backdrop form when backdrop is static', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: '<modus-wc-modal modal-id="test7" backdrop="static"></modus-wc-modal>',
    });
    expect(page.root).toMatchSnapshot();
    const backdrop = page.root!.querySelector('.modus-wc-modal-backdrop');
    expect(backdrop).toBeNull();
  });
});
