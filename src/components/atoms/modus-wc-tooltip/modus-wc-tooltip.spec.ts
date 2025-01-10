import { newSpecPage } from '@stencil/core/testing';

import { ModusWcTooltip } from './modus-wc-tooltip';

describe('modus-wc-tooltip', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip></modus-wc-tooltip>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test" custom-class="test-class" force-open="true" tooltip-id="test-id" position="bottom"></modus-wc-tooltip>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
