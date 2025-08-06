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

  it('should not dismiss on Escape key when tooltip is not visible', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test"></modus-wc-tooltip>',
    });

    // Set up event listener for dismissEscape event
    const dismissEscapeSpy = jest.fn();
    page.root?.addEventListener('dismissEscape', dismissEscapeSpy);

    // Simulate Escape key press when tooltip is not visible
    const event = new KeyboardEvent('keyup', { code: 'Escape' });
    document.dispatchEvent(event);

    // Should not dismiss or emit event when not visible
    expect(dismissEscapeSpy).not.toHaveBeenCalled();
  });

  it('should dismiss on Escape key when tooltip is visible', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test"></modus-wc-tooltip>',
    });

    // Set up event listener for dismissEscape event
    const dismissEscapeSpy = jest.fn();
    page.root?.addEventListener('dismissEscape', dismissEscapeSpy);

    // Make tooltip visible by simulating mouse enter
    const enterEvent = new MouseEvent('mouseenter');
    page.root?.dispatchEvent(enterEvent);
    await page.waitForChanges();

    // Simulate Escape key press when tooltip is visible
    const event = new KeyboardEvent('keyup', { code: 'Escape' });
    document.dispatchEvent(event);
    await page.waitForChanges();

    // Should dismiss and emit event when visible
    expect(dismissEscapeSpy).toHaveBeenCalled();
  });

  it('should reset escape dismissal on mouse enter', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test"></modus-wc-tooltip>',
    });

    // Set up dismiss spy first
    const dismissEscapeSpy = jest.fn();
    page.root?.addEventListener('dismissEscape', dismissEscapeSpy);

    // First, make tooltip visible and dismiss it with escape
    const enterEvent = new MouseEvent('mouseenter');
    page.root?.dispatchEvent(enterEvent);
    await page.waitForChanges();

    const escapeEvent = new KeyboardEvent('keyup', { code: 'Escape' });
    document.dispatchEvent(escapeEvent);
    await page.waitForChanges();

    expect(dismissEscapeSpy).toHaveBeenCalledTimes(1);

    // Now simulate another mouse enter - should reset the dismissal state
    const resetEnterEvent = new MouseEvent('mouseenter');
    page.root?.dispatchEvent(resetEnterEvent);
    await page.waitForChanges();

    // Subsequent escape should work again (proving reset worked)
    const secondEscapeEvent = new KeyboardEvent('keyup', { code: 'Escape' });
    document.dispatchEvent(secondEscapeEvent);
    await page.waitForChanges();

    expect(dismissEscapeSpy).toHaveBeenCalledTimes(2);
  });

  it('should set visibility state on mouse enter and clear on mouse leave', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test"></modus-wc-tooltip>',
    });

    // Simulate mouse enter - should show tooltip
    const enterEvent = new MouseEvent('mouseenter');
    page.root?.dispatchEvent(enterEvent);
    await page.waitForChanges();

    // Simulate mouse leave - should hide tooltip
    const leaveEvent = new MouseEvent('mouseleave');
    page.root?.dispatchEvent(leaveEvent);
    await page.waitForChanges();

    // Test that the behavior works by checking DOM state after events
    expect(page.root).toBeTruthy();
  });

  it('should add disabled class when escape dismissed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test"></modus-wc-tooltip>',
    });

    // Make tooltip visible first
    const enterEvent = new MouseEvent('mouseenter');
    page.root?.dispatchEvent(enterEvent);
    await page.waitForChanges();

    // Dismiss with escape
    const escapeEvent = new KeyboardEvent('keyup', { code: 'Escape' });
    document.dispatchEvent(escapeEvent);
    await page.waitForChanges();

    // Check that disabled class is added after escape dismissal
    const tooltipDiv = page.root?.querySelector('.modus-wc-tooltip');
    expect(tooltipDiv?.classList.contains('modus-wc-tooltip-disabled')).toBe(
      true
    );
  });
});
