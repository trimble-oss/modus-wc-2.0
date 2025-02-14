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

  it('should render with content in the primary slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Slotted chip"><span>Slot content</span></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with image avatar when imageUrl is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Chip with avatar" image-url="test.jpg"></modus-wc-chip>',
    });

    expect(page.root).toMatchSnapshot();

    const avatar = page.root!.querySelector('modus-wc-avatar');
    expect(avatar).toBeTruthy();
    expect(avatar!.getAttribute('img-src')).toBe('test.jpg');
    // expect(avatar!.getAttribute('aria-label')).toBe('Chip with avatar');
  });

  it('should render check icon when no imageUrl is provided and showCheck is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Check chip" show-check="true"></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
    const checkIcon = page.root!.querySelector('svg.mi-check');
    expect(checkIcon).toBeTruthy();
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

  it('should emit closeClick event when close icon is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Closable chip" show-close="true"></modus-wc-chip>',
    });
    const closeIcon = page.root?.querySelector('svg.mi-cancel-circle');
    const clickSpy = jest.fn();
    page.root?.addEventListener('closeClick', clickSpy);

    closeIcon?.dispatchEvent(new MouseEvent('click'));
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should not emit closeClick event when close icon is clicked and chip is disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Disabled closable chip" show-close="true" disabled="true"></modus-wc-chip>',
    });
    const closeIcon = page.root?.querySelector('svg.mi-cancel-circle');
    const clickSpy = jest.fn();
    page.root?.addEventListener('closeClick', clickSpy);

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

    button?.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter' }));
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

    button?.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter' }));
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

    button?.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
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

    button?.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
  });

  it('should emit closeClick event on Escape keyup', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Escape key chip" show-close="true"></modus-wc-chip>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('closeClick', clickSpy);

    button?.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should not emit closeClick event on Escape keyup when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Disabled Escape key chip" show-close="true" disabled="true"></modus-wc-chip>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('closeClick', clickSpy);

    button?.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
  });
});

// describe('modus-wc-chip event handling', () => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   let page: any, chip: HTMLElement, button: HTMLButtonElement;

//   beforeEach(async () => {
//     page = await newSpecPage({
//       components: [ModusWcChip],
//       html: '<modus-wc-chip aria-label="Test chip"></modus-wc-chip>',
//     });
//     chip = page.root;
//     button = chip.querySelector('button') as HTMLButtonElement;
//   });

//   it('should emit chipClick on button click when not disabled', async () => {
//     const chipClickHandler = jest.fn();
//     chip.addEventListener('chipClick', chipClickHandler);
//     button.click();
//     await page.waitForChanges();
//     expect(chipClickHandler).toHaveBeenCalled();
//   });

//   it('should not emit chipClick on button click when disabled', async () => {
//     page.root.setAttribute('disabled', 'true');
//     await page.waitForChanges();
//     const chipClickHandler = jest.fn();
//     chip.addEventListener('chipClick', chipClickHandler);
//     button.click();
//     await page.waitForChanges();
//     expect(chipClickHandler).not.toHaveBeenCalled();
//   });

//   it('should emit chipClick on Enter keydown', async () => {
//     const chipClickHandler = jest.fn();
//     chip.addEventListener('chipClick', chipClickHandler);
//     const event = new KeyboardEvent('keydown', {
//       code: 'Enter',
//       bubbles: true,
//       cancelable: true,
//     });
//     button.dispatchEvent(event);
//     await page.waitForChanges();
//     expect(chipClickHandler).toHaveBeenCalled();
//   });

//   it('should emit chipClick on Space keydown', async () => {
//     const chipClickHandler = jest.fn();
//     chip.addEventListener('chipClick', chipClickHandler);
//     const event = new KeyboardEvent('keydown', {
//       code: 'Space',
//       bubbles: true,
//       cancelable: true,
//     });
//     button.dispatchEvent(event);
//     await page.waitForChanges();
//     expect(chipClickHandler).toHaveBeenCalled();
//   });

//   it('should emit closeClick on Escape keyup', async () => {
//     const closeClickHandler = jest.fn();
//     chip.addEventListener('closeClick', closeClickHandler);
//     const event = new KeyboardEvent('keyup', {
//       code: 'Escape',
//       bubbles: true,
//       cancelable: true,
//     });
//     button.dispatchEvent(event);
//     await page.waitForChanges();
//     expect(closeClickHandler).toHaveBeenCalled();
//   });

//   it('should emit closeClick on close icon click', async () => {
//     // Render chip with showClose enabled.
//     page = await newSpecPage({
//       components: [ModusWcChip],
//       html: '<modus-wc-chip aria-label="Test chip" show-close="true"></modus-wc-chip>',
//     });
//     chip = page.root;
//     button = chip.querySelector('button') as HTMLButtonElement;
//     const closeClickHandler = jest.fn();
//     chip.addEventListener('closeClick', closeClickHandler);
//     // Query for the close icon via its unique class.
//     const closeIcon = button.querySelector(
//       'svg.mi-cancel-circle'
//     ) as SVGElement;
//     expect(closeIcon).not.toBeNull();
//     closeIcon.dispatchEvent(
//       new MouseEvent('click', {
//         bubbles: true,
//         cancelable: true,
//         composed: true,
//       })
//     );
//     await page.waitForChanges();
//     expect(closeClickHandler).toHaveBeenCalled();
//   });

//   it('should not emit chipClick for key events when disabled', async () => {
//     // Render chip as disabled.
//     page = await newSpecPage({
//       components: [ModusWcChip],
//       html: '<modus-wc-chip aria-label="Test chip" disabled="true"></modus-wc-chip>',
//     });
//     chip = page.root;
//     button = chip.querySelector('button') as HTMLButtonElement;
//     const chipClickHandler = jest.fn();
//     chip.addEventListener('chipClick', chipClickHandler);
//     const enterEvent = new KeyboardEvent('keydown', {
//       code: 'Enter',
//       bubbles: true,
//       cancelable: true,
//     });
//     button.dispatchEvent(enterEvent);
//     await page.waitForChanges();
//     expect(chipClickHandler).not.toHaveBeenCalled();
//     const spaceEvent = new KeyboardEvent('keydown', {
//       code: 'Space',
//       bubbles: true,
//       cancelable: true,
//     });
//     button.dispatchEvent(spaceEvent);
//     await page.waitForChanges();
//     expect(chipClickHandler).not.toHaveBeenCalled();
//   });

//   it('should not emit closeClick for keyup when disabled', async () => {
//     // Render chip as disabled.
//     page = await newSpecPage({
//       components: [ModusWcChip],
//       html: '<modus-wc-chip aria-label="Test chip" disabled="true"></modus-wc-chip>',
//     });
//     chip = page.root;
//     button = chip.querySelector('button') as HTMLButtonElement;
//     const closeClickHandler = jest.fn();
//     chip.addEventListener('closeClick', closeClickHandler);
//     const escapeEvent = new KeyboardEvent('keyup', {
//       code: 'Escape',
//       bubbles: true,
//       cancelable: true,
//     });
//     button.dispatchEvent(escapeEvent);
//     await page.waitForChanges();
//     expect(closeClickHandler).not.toHaveBeenCalled();
//   });
// });

// describe('modus-wc-chip internal conditional rendering', () => {
//   it('should render with image avatar when imageUrl is provided', async () => {
//     const page = await newSpecPage({
//       components: [ModusWcChip],
//       html: '<modus-wc-chip aria-label="Chip with avatar" image-url="test.jpg"></modus-wc-chip>',
//     });
//     const avatar = page.root.querySelector('modus-wc-avatar');
//     expect(avatar).toBeTruthy();
//     expect(avatar.getAttribute('img-src')).toBe('test.jpg');
//     expect(avatar.getAttribute('alt')).toBe('Chip with avatar');
//   });

//   it('should render check icon when showCheck is true', async () => {
//     const page = await newSpecPage({
//       components: [ModusWcChip],
//       html: '<modus-wc-chip aria-label="Chip with check" show-check="true"></modus-wc-chip>',
//     });
//     const checkIcon = page.root.querySelector('svg.mi-check');
//     expect(checkIcon).toBeTruthy();
//   });

//   it('should render label when provided', async () => {
//     const page = await newSpecPage({
//       components: [ModusWcChip],
//       html: '<modus-wc-chip aria-label="Labeled chip" label="Test Label"></modus-wc-chip>',
//     });
//     const label = page.root.querySelector('.modus-wc-chip-label');
//     expect(label).toBeTruthy();
//     expect(label.textContent).toBe('Test Label');
//   });

//   it('should render close icon when showClose is true', async () => {
//     const page = await newSpecPage({
//       components: [ModusWcChip],
//       html: '<modus-wc-chip aria-label="Chip with close" show-close="true"></modus-wc-chip>',
//     });
//     const closeIcon = page.root.querySelector('svg.mi-cancel-circle');
//     expect(closeIcon).toBeTruthy();
//   });

//   it('should not render image avatar when imageUrl is not provided', async () => {
//     const page = await newSpecPage({
//       components: [ModusWcChip],
//       html: '<modus-wc-chip aria-label="Chip without avatar"></modus-wc-chip>',
//     });
//     const avatar = page.root.querySelector('modus-wc-avatar');
//     expect(avatar).toBeFalsy();
//   });

//   it('should apply disabled class to avatar when chip is disabled', async () => {
//     const page = await newSpecPage({
//       components: [ModusWcChip],
//       html: '<modus-wc-chip aria-label="Disabled chip with avatar" image-url="test.jpg" disabled="true"></modus-wc-chip>',
//     });
//     const avatar = page.root.querySelector('modus-wc-avatar');
//     expect(avatar.getAttribute('custom-class')).toContain(
//       'modus-wc-chip-avatar--disabled'
//     );
//   });
// });
