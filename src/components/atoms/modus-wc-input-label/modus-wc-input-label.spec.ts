import { newSpecPage } from '@stencil/core/testing';
import { ModusWcInputLabel } from './modus-wc-input-label';

describe('modus-wc-input-label', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcInputLabel],
      html: '<modus-wc-input-label></modus-wc-input-label>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcInputLabel],
      html: `<modus-wc-input-label
              for-id="input-id"
              custom-class="test-class"
              label-text="Custom label"
              required="true"
              size="lg"
              sub-label-text="Sublabel text">
            </modus-wc-input-label>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with content in the primary slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcInputLabel],
      html: '<modus-wc-input-label><span>Slot content</span></modus-wc-input-label>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
