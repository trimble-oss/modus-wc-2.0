import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTabs } from './modus-wc-tabs';

describe('modus-wc-tabs', () => {
  it('should warn when aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs></modus-wc-tabs>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcTabs: aria-label is required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: `
      <modus-wc-tabs
        aria-label="Custom Tab Group"
        custom-class="test-class"
        tabs='[{"id":"tab1","label":"Tab 1","active":true},{"id":"tab2","label":"Tab 2"},{"id":"tab3","label":"Tab 3","disabled":true},{"id":"tab4","icon":"home"}]'
        tab-style="boxed"
        size="sm">
      </modus-wc-tabs>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });
});
