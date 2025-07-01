import { newSpecPage } from '@stencil/core/testing';
import { ModusWcMenuItem } from './modus-wc-menu-item';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';

describe('modus-wc-menu-item', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" value="Test value"></modus-wc-menu-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem, ModusWcIcon],
      html: `<modus-wc-menu-item 
              bordered="true" 
              custom-class="test-class" 
              disabled="true" 
              label="Test label" 
              selected="true" 
              size="lg" 
              sub-label="Test sub-label" 
              value="Test value"
            ></modus-wc-menu-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with a start-icon slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem, ModusWcIcon],
      html: `<modus-wc-menu-item label="Test label" value="Test value">
              <modus-wc-icon slot="start-icon" name="check"></modus-wc-icon>
            </modus-wc-menu-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with size sm', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" selected="true" size="sm" value="Test value"></modus-wc-menu-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with size md', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" selected="true" size="md" value="Test value"></modus-wc-menu-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with size lg', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" selected="true" size="lg" value="Test value"></modus-wc-menu-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit itemSelect event when clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item></modus-wc-menu-item>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('itemSelect', clickSpy);

    button?.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });
});
