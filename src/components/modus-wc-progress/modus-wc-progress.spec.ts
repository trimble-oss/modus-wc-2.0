import { newSpecPage } from '@stencil/core/testing';
import { ModusWcProgress } from './modus-wc-progress';

describe('modus-wc-progress', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcProgress],
      html: '<modus-wc-progress aria-label="Default Progress Bar"></modus-wc-progress>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcProgress],
      html: '<modus-wc-progress aria-label="Custom Progress Bar" indeterminate="true" custom-class="test-class" max="50" value="25" variant="radial"></modus-wc-progress>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render indeterminate state', async () => {
    const page = await newSpecPage({
      components: [ModusWcProgress],
      html: '<modus-wc-progress aria-label="Custom Progress Bar" indeterminate="true"></modus-wc-progress>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render label', async () => {
    const page = await newSpecPage({
      components: [ModusWcProgress],
      html: '<modus-wc-progress aria-label="Custom Progress Bar" label="Loading..."></modus-wc-progress>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
