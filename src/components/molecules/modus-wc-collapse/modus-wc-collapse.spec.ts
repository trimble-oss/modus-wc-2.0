import { newSpecPage } from '@stencil/core/testing';
import { ModusWcCollapse } from './modus-wc-collapse';
import { ModusWcIcon } from '../../atoms/modus-wc-icon/modus-wc-icon';

describe('modus-wc-collapse snapshot tests', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: '<modus-wc-collapse></modus-wc-collapse>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse, ModusWcIcon],
      html: '<modus-wc-collapse bordered="false" custom-class="test-class" expanded="true" icon="alert" icon-aria-label="Alert icon" title="Test title"></modus-wc-collapse>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with content', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: '<modus-wc-collapse title="With Content"><div>Test Content</div></modus-wc-collapse>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render in expanded state', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: '<modus-wc-collapse expanded="true" title="Expanded"><div>Expanded Content</div></modus-wc-collapse>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
