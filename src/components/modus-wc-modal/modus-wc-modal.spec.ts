import { newSpecPage } from '@stencil/core/testing';
import { readFileSync } from 'fs';
import { join } from 'path';
import { ModusWcModal } from './modus-wc-modal';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';

const modalScssPath = join(
  // eslint-disable-next-line no-undef -- Jest runs in Node; spec eslint env is browser+jest
  process.cwd(),
  'src/components/modus-wc-modal/modus-wc-modal.scss'
);

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

  it('should hide closed dialog with display none', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: '<modus-wc-modal modal-id="test-focus" show-close="true"></modus-wc-modal>',
    });

    const dialog = page.root!.querySelector('dialog') as HTMLDialogElement;
    expect(dialog.hasAttribute('open')).toBe(false);

    // Stencil spec (JSDOM) does not apply component CSS or model focus/tab order
    // reliably. Assert the stylesheet contract that restores native closed-dialog
    // inertness (display: none) over DaisyUI's always-on display: grid.
    const scss = readFileSync(modalScssPath, 'utf8');

    expect(scss).toContain('modus-wc-modal dialog.modus-wc-modal:not([open])');
    expect(scss).toContain('display: none');
    expect(scss).toContain('modus-wc-modal dialog.modus-wc-modal[open]');
    expect(scss).toContain('display: grid');
  });

  const labelledText = (root: HTMLElement): string => {
    const dialog = root.querySelector('dialog');
    const labelledBy = dialog?.getAttribute('aria-labelledby');
    if (!labelledBy) return '';
    return labelledBy
      .split(/\s+/)
      .map((id) => root.querySelector(`[id="${id}"]`)?.textContent ?? '')
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  it('should name the dialog from the header slot when aria-label is omitted', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: `<modus-wc-modal modal-id="named">
        <span slot="header">Confirm action</span>
      </modus-wc-modal>`,
    });
    await page.waitForChanges();

    const dialog = page.root!.querySelector('dialog');
    expect(dialog?.getAttribute('aria-label')).toBeNull();
    expect(labelledText(page.root!)).toBe('Confirm action');

    const label = page.root!.querySelector(
      `[id="${dialog!.getAttribute('aria-labelledby')}"]`
    );
    expect(label?.querySelector('button')).toBeNull();
  });

  it('should leave the dialog unnamed when the header slot is empty', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: '<modus-wc-modal modal-id="empty"></modus-wc-modal>',
    });

    const dialog = page.root!.querySelector('dialog');
    expect(dialog?.hasAttribute('aria-labelledby')).toBe(false);
    expect(dialog?.hasAttribute('aria-label')).toBe(false);
  });

  it('should keep an author aria-label and skip the header name', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: `<modus-wc-modal modal-id="labelled" aria-label="Custom name">
        <span slot="header">Header title</span>
      </modus-wc-modal>`,
    });
    await page.waitForChanges();

    const dialog = page.root!.querySelector('dialog');
    expect(dialog?.getAttribute('aria-label')).toBe('Custom name');
    expect(dialog?.hasAttribute('aria-labelledby')).toBe(false);
  });

  it('should leave the dialog unnamed when a header node has null text content', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: '<modus-wc-modal modal-id="null-text"></modus-wc-modal>',
    });

    const header = { textContent: null } as unknown as Element;
    const host = page.rootInstance.el;
    jest
      .spyOn(host, 'querySelectorAll')
      .mockImplementation((...args: unknown[]) => {
        const selector = args[0];
        if (selector === '[slot="header"]') {
          return [header];
        }
        return Element.prototype.querySelectorAll.call(host, String(selector));
      });

    page.root!.customClass = 'rerender';
    await page.waitForChanges();

    const dialog = page.root!.querySelector('dialog');
    expect(dialog?.hasAttribute('aria-labelledby')).toBe(false);
    expect(dialog?.hasAttribute('aria-label')).toBe(false);
  });

  it('should keep an author aria-labelledby', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal, ModusWcButton],
      html: `<modus-wc-modal modal-id="external" aria-labelledby="external-label">
        <span slot="header">Header title</span>
      </modus-wc-modal>`,
    });
    await page.waitForChanges();

    const dialog = page.root!.querySelector('dialog');
    expect(dialog?.getAttribute('aria-labelledby')).toBe('external-label');
    expect(dialog?.getAttribute('aria-label')).toBeNull();
  });
});
