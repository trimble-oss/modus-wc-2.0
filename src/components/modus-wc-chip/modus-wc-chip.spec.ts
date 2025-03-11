import { newSpecPage } from '@stencil/core/testing';
import { ModusWcChip } from './modus-wc-chip';

describe('modus-wc-chip', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Default chip"></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Custom chip" custom-class="test-class" size="lg" variant="outline" active="true"></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with content in the primary slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Slotted chip"><span>Slot content</span></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render label when provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Labeled chip" label="Test Label"></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
    const label = page.root!.querySelector('.modus-wc-chip-label');
    expect(label).toBeTruthy();
    expect(label!.textContent).toBe('Test Label');
  });

  it('should render remove icon when showRemove is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Close chip" show-remove="true"></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
    const closeIcon = page.root!.querySelector('svg.mi-cancel-circle');
    expect(closeIcon).toBeTruthy();
  });

  it('should render with disabled attribute', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Disabled chip" disabled="true"></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit chipClick event when clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Clickable chip"></modus-wc-chip>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('chipClick', clickSpy);

    button?.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should not emit chipClick event when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Disabled chip" disabled="true"></modus-wc-chip>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('chipClick', clickSpy);

    button?.click();
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
  });

  it('should emit chipRemove event when close icon is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Closable chip" show-remove="true"></modus-wc-chip>',
    });
    const closeIcon = page.root?.querySelector('svg.mi-cancel-circle');
    const clickSpy = jest.fn();
    page.root?.addEventListener('chipRemove', clickSpy);

    closeIcon?.dispatchEvent(new MouseEvent('click'));
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should not emit chipRemove event when close icon is clicked and chip is disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Disabled closable chip" show-remove="true" disabled="true"></modus-wc-chip>',
    });
    const closeIcon = page.root?.querySelector('svg.mi-cancel-circle');
    const clickSpy = jest.fn();
    page.root?.addEventListener('chipRemove', clickSpy);

    closeIcon?.dispatchEvent(new MouseEvent('click'));
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
  });

  it('should emit chipClick event on Enter keydown', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Enter key chip"></modus-wc-chip>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('chipClick', clickSpy);

    button?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should not emit chipClick event on Enter keydown when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Disabled Enter key chip" disabled="true"></modus-wc-chip>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('chipClick', clickSpy);

    button?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
  });

  it('should emit chipClick event on Space keydown', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Space key chip"></modus-wc-chip>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('chipClick', clickSpy);

    button?.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should not emit chipClick event on Space keydown when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Disabled Space key chip" disabled="true"></modus-wc-chip>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('chipClick', clickSpy);

    button?.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
  });

  it('should emit chipRemove event on Escape keyup', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Escape key chip" show-remove="true"></modus-wc-chip>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('chipRemove', clickSpy);

    button?.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape' }));
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should not emit chipRemove event on Escape keyup when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Disabled Escape key chip" show-remove="true" disabled="true"></modus-wc-chip>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('chipRemove', clickSpy);

    button?.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape' }));
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
  });
});
