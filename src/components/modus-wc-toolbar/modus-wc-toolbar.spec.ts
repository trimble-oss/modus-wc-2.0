import { newSpecPage } from '@stencil/core/testing';
import { ModusWcToolbar } from './modus-wc-toolbar';

describe('modus-wc-toolbar', () => {
  it('should render with no props', async () => {
    const page = await newSpecPage({
      components: [ModusWcToolbar],
      html: '<modus-wc-toolbar></modus-wc-toolbar>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props and slots', async () => {
    const page = await newSpecPage({
      components: [ModusWcToolbar],
      html: `<modus-wc-toolbar custom-class="test-class">
              <div slot="start">Start</div>
              <div slot="center">Center</div>
              <div slot="end">End</div>
            </modus-wc-toolbar>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
