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
    const closeIcon = page.root!.querySelector('modus-wc-icon[name="close"]');
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
    const closeIcon = page.root?.querySelector('modus-wc-icon[name="close"]');
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
    const closeIcon = page.root?.querySelector('modus-wc-icon[name="close"]');
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

  it('should render with hasError prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Error chip" has-error="true"></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
    const button = page.root!.querySelector('button');
    expect(button!.classList.contains('modus-wc-chip--error')).toBe(true);
  });

  it('should render with circle shape', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Circle chip" shape="circle"></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
    const button = page.root!.querySelector('button');
    expect(button!.classList.contains('modus-wc-chip--circle')).toBe(true);
  });

  it('should render with small size', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Small chip" size="sm"></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
    const button = page.root!.querySelector('button');
    expect(button!.classList.contains('modus-wc-btn-sm')).toBe(true);
  });

  it('should render with label and remove icon together', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Label with remove" label="Removable" show-remove="true"></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
    const label = page.root!.querySelector('.modus-wc-chip-label');
    const closeIcon = page.root!.querySelector('modus-wc-icon[name="close"]');
    expect(label).toBeTruthy();
    expect(label!.textContent).toBe('Removable');
    expect(closeIcon).toBeTruthy();
  });

  it('should set default aria-label when not provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip label="Test"></modus-wc-chip>',
    });
    expect(page.root!.ariaLabel).toBe('Test');
  });

  it('should set default aria-label to Chip when no label is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip></modus-wc-chip>',
    });
    expect(page.root!.ariaLabel).toBe('Chip');
  });
});
