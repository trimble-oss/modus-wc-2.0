import { newSpecPage } from '@stencil/core/testing';
import { ModusWcChip } from './modus-wc-chip';

describe('modus-wc-chip', () => {
  it('should warn when alt and aria-label are not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip></modus-wc-chip>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcChip: alt and aria-label are required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

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
});

describe('modus-wc-chip event handling', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let page: any, chip: HTMLElement, button: HTMLButtonElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Test chip"></modus-wc-chip>',
    });
    chip = page.root;
    button = chip.querySelector('button') as HTMLButtonElement;
  });

  it('should emit chipClick on button click when not disabled', async () => {
    const chipClickHandler = jest.fn();
    chip.addEventListener('chipClick', chipClickHandler);
    button.click();
    await page.waitForChanges();
    expect(chipClickHandler).toHaveBeenCalled();
  });

  it('should not emit chipClick on button click when disabled', async () => {
    page.root.setAttribute('disabled', 'true');
    await page.waitForChanges();
    const chipClickHandler = jest.fn();
    chip.addEventListener('chipClick', chipClickHandler);
    button.click();
    await page.waitForChanges();
    expect(chipClickHandler).not.toHaveBeenCalled();
  });

  it('should emit chipClick on Enter keydown', async () => {
    const chipClickHandler = jest.fn();
    chip.addEventListener('chipClick', chipClickHandler);
    const event = new KeyboardEvent('keydown', {
      code: 'Enter',
      bubbles: true,
      cancelable: true,
    });
    button.dispatchEvent(event);
    await page.waitForChanges();
    expect(chipClickHandler).toHaveBeenCalled();
  });

  it('should emit chipClick on Space keydown', async () => {
    const chipClickHandler = jest.fn();
    chip.addEventListener('chipClick', chipClickHandler);
    const event = new KeyboardEvent('keydown', {
      code: 'Space',
      bubbles: true,
      cancelable: true,
    });
    button.dispatchEvent(event);
    await page.waitForChanges();
    expect(chipClickHandler).toHaveBeenCalled();
  });

  it('should emit closeClick on Escape keyup', async () => {
    const closeClickHandler = jest.fn();
    chip.addEventListener('closeClick', closeClickHandler);
    const event = new KeyboardEvent('keyup', {
      code: 'Escape',
      bubbles: true,
      cancelable: true,
    });
    button.dispatchEvent(event);
    await page.waitForChanges();
    expect(closeClickHandler).toHaveBeenCalled();
  });

  it('should emit closeClick on close icon click', async () => {
    // Render chip with showClose enabled.
    page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Test chip" show-close="true"></modus-wc-chip>',
    });
    chip = page.root;
    button = chip.querySelector('button') as HTMLButtonElement;
    const closeClickHandler = jest.fn();
    chip.addEventListener('closeClick', closeClickHandler);
    // Query for the close icon via its unique class.
    const closeIcon = button.querySelector(
      'svg.mi-cancel-circle'
    ) as SVGElement;
    expect(closeIcon).not.toBeNull();
    closeIcon.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
    await page.waitForChanges();
    expect(closeClickHandler).toHaveBeenCalled();
  });

  it('should not emit chipClick for key events when disabled', async () => {
    // Render chip as disabled.
    page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Test chip" disabled="true"></modus-wc-chip>',
    });
    chip = page.root;
    button = chip.querySelector('button') as HTMLButtonElement;
    const chipClickHandler = jest.fn();
    chip.addEventListener('chipClick', chipClickHandler);
    const enterEvent = new KeyboardEvent('keydown', {
      code: 'Enter',
      bubbles: true,
      cancelable: true,
    });
    button.dispatchEvent(enterEvent);
    await page.waitForChanges();
    expect(chipClickHandler).not.toHaveBeenCalled();
    const spaceEvent = new KeyboardEvent('keydown', {
      code: 'Space',
      bubbles: true,
      cancelable: true,
    });
    button.dispatchEvent(spaceEvent);
    await page.waitForChanges();
    expect(chipClickHandler).not.toHaveBeenCalled();
  });

  it('should not emit closeClick for keyup when disabled', async () => {
    // Render chip as disabled.
    page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Test chip" disabled="true"></modus-wc-chip>',
    });
    chip = page.root;
    button = chip.querySelector('button') as HTMLButtonElement;
    const closeClickHandler = jest.fn();
    chip.addEventListener('closeClick', closeClickHandler);
    const escapeEvent = new KeyboardEvent('keyup', {
      code: 'Escape',
      bubbles: true,
      cancelable: true,
    });
    button.dispatchEvent(escapeEvent);
    await page.waitForChanges();
    expect(closeClickHandler).not.toHaveBeenCalled();
  });
});
