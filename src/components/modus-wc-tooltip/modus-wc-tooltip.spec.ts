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

  it('should dismiss on Escape key when forceOpen is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test" force-open="true"></modus-wc-tooltip>',
    });

    const component = page.rootInstance as ModusWcTooltip;
    expect(component.escapeDismissed).toBe(false);

    // Set up event listener for dismissEscape event
    const dismissEscapeSpy = jest.fn();
    page.root?.addEventListener('dismissEscape', dismissEscapeSpy);

    // Simulate Escape key press
    const event = new KeyboardEvent('keyup', { code: 'Escape' });
    document.dispatchEvent(event);

    expect(component.escapeDismissed).toBe(true);
    expect(dismissEscapeSpy).toHaveBeenCalled();
  });

  it('should not dismiss on Escape key when tooltip is not visible', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test"></modus-wc-tooltip>',
    });

    const component = page.rootInstance as ModusWcTooltip;
    expect(component.escapeDismissed).toBe(false);

    // Set up event listener for dismissEscape event
    const dismissEscapeSpy = jest.fn();
    page.root?.addEventListener('dismissEscape', dismissEscapeSpy);

    // Simulate Escape key press when tooltip is not visible
    const event = new KeyboardEvent('keyup', { code: 'Escape' });
    document.dispatchEvent(event);

    // Should not dismiss or emit event when not visible
    expect(component.escapeDismissed).toBe(false);
    expect(dismissEscapeSpy).not.toHaveBeenCalled();
  });

  it('should reset escape dismissal on mouse enter', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test"></modus-wc-tooltip>',
    });

    const component = page.rootInstance as ModusWcTooltip;
    component.escapeDismissed = true;

    // Simulate mouse enter
    const event = new MouseEvent('mouseenter');
    page.root?.dispatchEvent(event);

    expect(component.escapeDismissed).toBe(false);
  });

  it('should set visibility state on mouse enter and clear on mouse leave', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test"></modus-wc-tooltip>',
    });

    const component = page.rootInstance as ModusWcTooltip;
    expect(component.isVisible).toBe(false);

    // Simulate mouse enter - should set visibility
    const enterEvent = new MouseEvent('mouseenter');
    page.root?.dispatchEvent(enterEvent);
    expect(component.isVisible).toBe(true);

    // Simulate mouse leave - should clear visibility
    const leaveEvent = new MouseEvent('mouseleave');
    page.root?.dispatchEvent(leaveEvent);
    expect(component.isVisible).toBe(false);
  });

  it('should add disabled class when escape dismissed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test"></modus-wc-tooltip>',
    });

    const component = page.rootInstance as ModusWcTooltip;
    component.escapeDismissed = true;
    await page.waitForChanges();

    const tooltipDiv = page.root?.querySelector('.modus-wc-tooltip');
    expect(tooltipDiv?.classList.contains('modus-wc-tooltip-disabled')).toBe(
      true
    );
  });
});
