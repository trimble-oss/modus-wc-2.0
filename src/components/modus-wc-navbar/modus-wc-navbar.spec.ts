import { newSpecPage } from '@stencil/core/testing';
import { ModusWcNavbar } from './modus-wc-navbar';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcToolbar } from '../modus-wc-toolbar/modus-wc-toolbar';

describe('modus-wc-navbar', () => {
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
});
