import { newSpecPage } from '@stencil/core/testing';
import { ModusWcNavbar } from './modus-wc-navbar';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcToolbar } from '../modus-wc-toolbar/modus-wc-toolbar';

describe('modus-wc-navbar', () => {
  beforeAll(() => {
    // Create a mock implementation of MutationObserver
    // eslint-disable-next-line no-undef
    global.MutationObserver = class {
      observe = jest.fn();
      disconnect = jest.fn();
      takeRecords = jest.fn();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      constructor(_callback) {}
    };
  });

  afterAll(() => {
    // Remove the mock
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line no-undef
    delete global.MutationObserver;
  });

  it('should render with no props', async () => {
    const page = await newSpecPage({
      components: [ModusWcNavbar, ModusWcToolbar, ModusWcButton],
      html: '<modus-wc-navbar></modus-wc-navbar>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props and slots', async () => {
    const page = await newSpecPage({
      components: [ModusWcNavbar, ModusWcToolbar, ModusWcButton],
      html: `<modus-wc-navbar custom-class="test-class">
              <div slot="start">Start</div>
              <div slot="center">Center</div>
              <div slot="end">End</div>
            </modus-wc-navbar>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should not render logo when visibility.logo is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcNavbar, ModusWcToolbar, ModusWcButton],
      html: '<modus-wc-navbar></modus-wc-navbar>',
    });
    page.rootInstance.visibility = {
      ...page.rootInstance.visibility,
      logo: false,
    };
    await page.waitForChanges();
    expect(page.root?.querySelector('modus-wc-logo')).toBeNull();
  });
});
