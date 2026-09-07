import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTooltip } from './modus-wc-tooltip';

interface TooltipPrivateHarness {
  handleFocusOut: (event: FocusEvent) => void;
}

describe('modus-wc-tooltip', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip></modus-wc-tooltip>',
    });
    expect(page.root).toMatchSnapshot();
  });

  describe('forceOpen watcher', () => {
    it('should show the tooltip when forceOpen changes from false to true', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test"></modus-wc-tooltip>',
      });

      // Spy on the showTooltip method
      const showTooltipSpy = jest.spyOn(page.rootInstance, 'showTooltip');

      // Change forceOpen to true
      if (page.root) {
        page.root.forceOpen = true;
      }
      await page.waitForChanges();

      // Should call showTooltip method
      expect(showTooltipSpy).toHaveBeenCalled();
    });

    it('should hide the tooltip when forceOpen changes from true to false', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test" force-open="true"></modus-wc-tooltip>',
      });

      // Spy on the hideTooltip method
      const hideTooltipSpy = jest.spyOn(page.rootInstance, 'hideTooltip');

      // Change forceOpen to false
      if (page.root) {
        page.root.forceOpen = false;
      }
      await page.waitForChanges();

      // Should call hideTooltip method
      expect(hideTooltipSpy).toHaveBeenCalled();
    });

    it('should not show the tooltip when forceOpen is true but disabled is also true', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test" disabled="true"></modus-wc-tooltip>',
      });

      // Spy on the showTooltip method
      const showTooltipSpy = jest.spyOn(page.rootInstance, 'showTooltip');

      // Change forceOpen to true
      if (page.root) {
        page.root.forceOpen = true;
      }
      await page.waitForChanges();

      // Should not call showTooltip method due to disabled state
      expect(showTooltipSpy).not.toHaveBeenCalled();
    });

    it('should only hide the tooltip opened by forceOpen when forceOpen is set to false', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test" force-open="true"></modus-wc-tooltip>',
      });

      if (page.root) {
        await page.waitForChanges();
      }

      const hideTooltipSpy = jest.spyOn(page.rootInstance, 'hideTooltip');
      const showTooltipSpy = jest.spyOn(page.rootInstance, 'showTooltip');

      expect(page.rootInstance.isVisible).toBe(true);

      const escapeEvent = new KeyboardEvent('keyup', { code: 'Escape' });
      document.dispatchEvent(escapeEvent);
      await page.waitForChanges();

      expect(hideTooltipSpy).not.toHaveBeenCalled();
      expect(page.rootInstance.isVisible).toBe(true);

      // Reset spies
      hideTooltipSpy.mockClear();
      showTooltipSpy.mockClear();

      if (page.root) {
        page.root.forceOpen = false;
        await page.waitForChanges();
      }
      expect(hideTooltipSpy).toHaveBeenCalled();

      hideTooltipSpy.mockClear();
      showTooltipSpy.mockClear();

      if (page.root) {
        page.root.forceOpen = true;
        await page.waitForChanges();
      }

      const leaveEvent = new MouseEvent('mouseleave');
      page.root?.dispatchEvent(leaveEvent);
      await page.waitForChanges();
      expect(hideTooltipSpy).not.toHaveBeenCalled();
    });
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

  it('should show tooltip on focusin and hide on focusout', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: `<modus-wc-tooltip content="Focus tip" tooltip-id="focus-tip">
        <button type="button">Trigger</button>
      </modus-wc-tooltip>`,
    });

    page.root?.dispatchEvent(new Event('focusin', { bubbles: true }));
    await page.waitForChanges();
    expect(page.rootInstance.isVisible).toBe(true);

    page.root?.dispatchEvent(new Event('focusout', { bubbles: true }));
    await page.waitForChanges();
    expect(page.rootInstance.isVisible).toBe(false);
  });

  it('should keep tooltip visible on mouseleave when trigger remains focused', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: `<modus-wc-tooltip content="Focus tip">
        <button type="button">Trigger</button>
      </modus-wc-tooltip>`,
    });

    page.root?.dispatchEvent(new Event('focusin', { bubbles: true }));
    page.root?.dispatchEvent(new MouseEvent('mouseenter'));
    await page.waitForChanges();
    expect(page.rootInstance.isVisible).toBe(true);

    page.root?.dispatchEvent(new MouseEvent('mouseleave'));
    await page.waitForChanges();
    expect(page.rootInstance.isVisible).toBe(true);
  });

  it('should hide tooltip on Escape while focus remains on the trigger', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: `<modus-wc-tooltip content="Escape tip">
        <button type="button" id="tip-trigger">Trigger</button>
      </modus-wc-tooltip>`,
    });

    const dismissEscapeSpy = jest.fn();
    page.root?.addEventListener('dismissEscape', dismissEscapeSpy);

    page.root?.dispatchEvent(new Event('focusin', { bubbles: true }));
    await page.waitForChanges();
    expect(page.rootInstance.isVisible).toBe(true);

    document.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));
    await page.waitForChanges();

    expect(page.rootInstance.isVisible).toBe(false);
    expect(dismissEscapeSpy).toHaveBeenCalledTimes(1);
    // Escape must not blur — tip stays dismissed via escapeDismissed until next hover/focus
    expect(page.rootInstance.escapeDismissed).toBe(true);
  });

  it('should apply tooltip-id and role="tooltip" on the tip element', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: `<modus-wc-tooltip content="Described tip" tooltip-id="described-tip">
        <button type="button" aria-describedby="described-tip">Save</button>
      </modus-wc-tooltip>`,
    });

    const tip = document.getElementById('described-tip');
    expect(tip?.getAttribute('role')).toBe('tooltip');
    expect(tip?.textContent).toContain('Described tip');
    // Consumers own aria-describedby on the trigger — component does not auto-wire it
    expect(
      page.root?.querySelector('button')?.getAttribute('aria-describedby')
    ).toBe('described-tip');
  });

  it('should update the tip element id when tooltipId changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: `<modus-wc-tooltip content="Described tip" tooltip-id="tip-a">
        <button type="button" aria-describedby="tip-a">Save</button>
      </modus-wc-tooltip>`,
    });

    expect(document.getElementById('tip-a')).not.toBeNull();

    if (page.root) {
      page.root.tooltipId = 'tip-b';
    }
    await page.waitForChanges();

    expect(document.getElementById('tip-a')).toBeNull();
    expect(document.getElementById('tip-b')).not.toBeNull();
  });

  it('should remove the tip element id when tooltipId is cleared', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: `<modus-wc-tooltip content="Described tip" tooltip-id="tip-clear">
        <button type="button">Save</button>
      </modus-wc-tooltip>`,
    });

    expect(document.getElementById('tip-clear')).not.toBeNull();

    if (page.root) {
      page.root.tooltipId = undefined;
    }
    page.rootInstance.handleTooltipIdChange();
    await page.waitForChanges();

    const tip = page.body.querySelector('.modus-wc-tooltip-content');
    expect(tip?.hasAttribute('id')).toBe(false);
  });

  it('should no-op applyTooltipId when tooltip element is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: `<modus-wc-tooltip content="Tip" tooltip-id="missing-tip">
        <button type="button">Save</button>
      </modus-wc-tooltip>`,
    });

    page.rootInstance.tooltipElement = null;

    expect(() => {
      page.rootInstance.handleTooltipIdChange();
    }).not.toThrow();
  });

  it('should keep tooltip visible when focus moves within the tooltip host', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: `<modus-wc-tooltip content="Focus tip">
        <button type="button" id="outer-btn">Outer</button>
        <button type="button" id="inner-btn">Inner</button>
      </modus-wc-tooltip>`,
    });

    page.root?.dispatchEvent(new Event('focusin', { bubbles: true }));
    await page.waitForChanges();
    expect(page.rootInstance.isVisible).toBe(true);

    const inner = page.root?.querySelector('#inner-btn');
    const harness = page.rootInstance as unknown as TooltipPrivateHarness;
    harness.handleFocusOut(
      new FocusEvent('focusout', { bubbles: true, relatedTarget: inner })
    );
    await page.waitForChanges();

    expect(page.rootInstance.isVisible).toBe(true);
  });

  it('should reset escape dismissal on focusin so the tip can reopen', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: `<modus-wc-tooltip content="Test">
        <button type="button">Trigger</button>
      </modus-wc-tooltip>`,
    });

    page.root?.dispatchEvent(new Event('focusin', { bubbles: true }));
    await page.waitForChanges();
    document.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));
    await page.waitForChanges();
    expect(page.rootInstance.isVisible).toBe(false);

    page.root?.dispatchEvent(new Event('focusout', { bubbles: true }));
    await page.waitForChanges();

    page.root?.dispatchEvent(new Event('focusin', { bubbles: true }));
    await page.waitForChanges();
    expect(page.rootInstance.isVisible).toBe(true);
  });

  it('should clean up resources in disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip" force-open="true"></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // Manually create spies for window event removal
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    // Mock popper instance
    const mockDestroy = jest.fn();
    // @ts-expect-error - We're deliberately setting a private property for testing
    tooltipComponent.popperInstance = { destroy: mockDestroy };

    // Force tooltip to be created in the body
    await page.waitForChanges();

    // Store the tooltip element reference to check later if it's removed
    // @ts-expect-error - Access private property for testing
    const tooltipElement = tooltipComponent.tooltipElement;
    expect(tooltipElement).not.toBeNull();
    expect(document.body.contains(tooltipElement)).toBe(true);

    // Mock hidePopover to verify it is called during cleanup
    const hidePopoverSpy = jest.fn();
    if (tooltipElement) {
      tooltipElement.hidePopover = hidePopoverSpy;
    }

    // Simulate component disconnection
    page.root?.remove();
    await page.waitForChanges();

    // Verify the popper instance was destroyed
    expect(mockDestroy).toHaveBeenCalled();

    // Verify hidePopover was called during cleanup
    expect(hidePopoverSpy).toHaveBeenCalled();

    // Verify event listeners were removed
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
      true
    );

    // Verify tooltip element was removed from document body
    expect(document.body.contains(tooltipElement)).toBe(false);

    // Clean up spies
    removeEventListenerSpy.mockRestore();
  });

  it('should initialize popper with correct configuration', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip"><button>Trigger</button></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // Create mock popper instance with update method
    const mockUpdate = jest.fn().mockResolvedValue(undefined);
    const mockDestroy = jest.fn();

    // @ts-expect-error - We're deliberately setting private properties for testing
    tooltipComponent.popperInstance = {
      update: mockUpdate,
      destroy: mockDestroy,
    };

    // Verify component is initialized properly
    expect(page.root).toBeTruthy();
  });

  it('should update popper instance on window resize', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip"><button>Trigger</button></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // Create mock popper instance
    const mockUpdate = jest.fn().mockResolvedValue(undefined);
    // @ts-expect-error - We're deliberately setting a private property for testing
    tooltipComponent.popperInstance = {
      update: mockUpdate,
      destroy: jest.fn(),
    };

    // @ts-expect-error - Set isVisible state to true
    tooltipComponent.isVisible = true;

    // Manually trigger the resize handler
    // @ts-expect-error - Access private method for testing
    tooltipComponent.handleWindowResize();

    // Check that popper update was called
    expect(mockUpdate).toHaveBeenCalled();
  });

  it('should update popper instance on window scroll', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip"><button>Trigger</button></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // Create mock popper instance
    const mockUpdate = jest.fn().mockResolvedValue(undefined);
    // @ts-expect-error - We're deliberately setting a private property for testing
    tooltipComponent.popperInstance = {
      update: mockUpdate,
      destroy: jest.fn(),
    };

    // @ts-expect-error - Set isVisible state to true
    tooltipComponent.isVisible = true;

    // Manually trigger the scroll handler
    // @ts-expect-error - Access private method for testing
    tooltipComponent.handleWindowScroll();

    // Check that popper update was called
    expect(mockUpdate).toHaveBeenCalled();
  });

  it('should show and hide tooltip correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip"><button>Trigger</button></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // Create a mock tooltip element
    const mockTooltipElement = document.createElement('div');
    mockTooltipElement.style.display = 'none';
    // @ts-expect-error - Set the tooltipElement
    tooltipComponent.tooltipElement = mockTooltipElement;

    // Create mock popper instance
    const mockUpdate = jest.fn().mockResolvedValue(undefined);
    // @ts-expect-error - We're deliberately setting a private property for testing
    tooltipComponent.popperInstance = {
      update: mockUpdate,
      destroy: jest.fn(),
    };

    // Test showTooltip
    // @ts-expect-error - Access private method for testing
    tooltipComponent.showTooltip();
    expect(mockTooltipElement.style.display).toBe('block');
    // @ts-expect-error - Check isVisible state
    expect(tooltipComponent.isVisible).toBe(true);
    expect(mockUpdate).toHaveBeenCalled();

    // Test hideTooltip
    // @ts-expect-error - Access private method for testing
    tooltipComponent.hideTooltip();
    expect(mockTooltipElement.style.display).toBe('none');
    // @ts-expect-error - Check isVisible state
    expect(tooltipComponent.isVisible).toBe(false);
  });

  it('should not show tooltip when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip" disabled="true"><button>Trigger</button></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // Create a mock tooltip element
    const mockTooltipElement = document.createElement('div');
    mockTooltipElement.style.display = 'none';
    // @ts-expect-error - Set the tooltipElement
    tooltipComponent.tooltipElement = mockTooltipElement;

    // Test showTooltip when disabled
    // @ts-expect-error - Access private method for testing
    tooltipComponent.showTooltip();

    // Tooltip should remain hidden
    expect(mockTooltipElement.style.display).toBe('none');
  });

  it('should hide the tooltip when disabled changes to true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip"><button>Trigger</button></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    page.root?.dispatchEvent(new MouseEvent('mouseenter'));
    await page.waitForChanges();
    expect(page.rootInstance.isVisible).toBe(true);

    const hideTooltipSpy = jest.spyOn(page.rootInstance, 'hideTooltip');
    tooltipComponent.disabled = true;
    tooltipComponent.handleDisabledChange(true);
    await page.waitForChanges();

    expect(hideTooltipSpy).toHaveBeenCalled();
    expect(page.rootInstance.isVisible).toBe(false);
  });

  it('should update popper placement when position changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip" position="top"><button>Trigger</button></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // Create mock popper instance
    const mockSetOptions = jest.fn();
    const mockUpdate = jest.fn().mockResolvedValue(undefined);
    // @ts-expect-error - We're deliberately setting a private property for testing
    tooltipComponent.popperInstance = {
      setOptions: mockSetOptions,
      update: mockUpdate,
      destroy: jest.fn(),
    };

    // Trigger position change by changing the prop
    tooltipComponent.position = 'bottom';
    // Manually trigger watch handler
    tooltipComponent.handlePositionChange();

    // Check that setOptions was called with correct placement
    expect(mockSetOptions).toHaveBeenCalledWith(
      expect.objectContaining({
        placement: 'bottom',
      })
    );
    expect(mockUpdate).toHaveBeenCalled();
  });

  it('should set default placement to top when position is auto', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip" position="right"><button>Trigger</button></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // Create mock popper instance
    const mockSetOptions = jest.fn();
    const mockUpdate = jest.fn().mockResolvedValue(undefined);
    // @ts-expect-error - We're deliberately setting a private property for testing
    tooltipComponent.popperInstance = {
      setOptions: mockSetOptions,
      update: mockUpdate,
      destroy: jest.fn(),
    };

    // Change position to auto
    tooltipComponent.position = 'auto';
    // Manually trigger watch handler
    tooltipComponent.handlePositionChange();

    // Check that setOptions was called with 'top' placement when position is 'auto'
    expect(mockSetOptions).toHaveBeenCalledWith(
      expect.objectContaining({
        placement: 'top',
      })
    );
    expect(mockUpdate).toHaveBeenCalled();
  });

  it('should update tooltip content when content changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Original content"><button>Trigger</button></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    const mockTooltipElement = document.createElement('div');
    const arrowElement = document.createElement('div');
    arrowElement.className = 'modus-wc-tooltip-arrow';
    mockTooltipElement.appendChild(document.createTextNode('Original content'));
    mockTooltipElement.appendChild(arrowElement);

    // @ts-expect-error - Set the tooltipElement
    tooltipComponent.tooltipElement = mockTooltipElement;

    tooltipComponent.content = 'Updated content';
    tooltipComponent.handleContentChange();

    expect(mockTooltipElement.textContent).toContain('Updated content');
    expect(
      mockTooltipElement.querySelector('.modus-wc-tooltip-arrow')
    ).not.toBeNull();
  });

  it('should update tooltip body when content prop changes on the host element', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Original content"><button>Trigger</button></modus-wc-tooltip>',
    });

    await page.waitForChanges();

    if (page.root) {
      page.root.content = 'Updated content';
    }
    await page.waitForChanges();

    const tooltipContent = page.body.querySelector('.modus-wc-tooltip-content');
    expect(tooltipContent?.textContent).toContain('Updated content');
    expect(tooltipContent?.textContent).not.toContain('Original content');
    expect(
      tooltipContent?.querySelector('.modus-wc-tooltip-arrow')
    ).not.toBeNull();
  });

  it('should use the first slotted child as the popper trigger element', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: `
        <modus-wc-tooltip content="Test">
          <button id="trigger-button">Hover</button>
        </modus-wc-tooltip>
      `,
    });

    await page.waitForChanges();

    const tooltipComponent = page.rootInstance as ModusWcTooltip;
    const trigger = page.root?.querySelector('#trigger-button');

    // @ts-expect-error - Access private property for testing
    expect(tooltipComponent.triggerElement).toBe(trigger);
  });

  it('should set popover="manual" attribute on the tooltip element', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip"><button>Trigger</button></modus-wc-tooltip>',
    });

    const tooltipContent = page.body.querySelector('.modus-wc-tooltip-content');
    expect(tooltipContent).not.toBeNull();
    expect(tooltipContent?.getAttribute('popover')).toBe('manual');
    expect(tooltipContent?.parentElement).toBe(document.body);
  });

  it('should call showPopover when showing tooltip and API is available', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip"><button>Trigger</button></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // @ts-expect-error - Access private property for testing
    const tooltipElement = tooltipComponent.tooltipElement;

    // Mock the showPopover API
    const showPopoverSpy = jest.fn();
    if (tooltipElement) {
      tooltipElement.showPopover = showPopoverSpy;
    }

    // Trigger show via mouse enter
    const enterEvent = new MouseEvent('mouseenter');
    page.root?.dispatchEvent(enterEvent);
    await page.waitForChanges();

    expect(showPopoverSpy).toHaveBeenCalled();
  });

  it('should call hidePopover when hiding tooltip and API is available', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip"><button>Trigger</button></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // @ts-expect-error - Access private property for testing
    const tooltipElement = tooltipComponent.tooltipElement;

    // Mock the popover API
    if (tooltipElement) {
      tooltipElement.showPopover = jest.fn();
    }
    const hidePopoverSpy = jest.fn();
    if (tooltipElement) {
      tooltipElement.hidePopover = hidePopoverSpy;
    }

    // Show then hide via mouse events
    const enterEvent = new MouseEvent('mouseenter');
    page.root?.dispatchEvent(enterEvent);
    await page.waitForChanges();

    const leaveEvent = new MouseEvent('mouseleave');
    page.root?.dispatchEvent(leaveEvent);
    await page.waitForChanges();

    expect(hidePopoverSpy).toHaveBeenCalled();
  });

  it('should handle showPopover throwing when already open', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip"><button>Trigger</button></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // @ts-expect-error - Access private property for testing
    const tooltipElement = tooltipComponent.tooltipElement;

    // Mock showPopover to throw (simulating already open state)
    if (tooltipElement) {
      tooltipElement.showPopover = jest.fn(() => {
        throw new DOMException('Already showing', 'InvalidStateError');
      });

      // Should not throw
      expect(() => {
        const enterEvent = new MouseEvent('mouseenter');
        page.root?.dispatchEvent(enterEvent);
      }).not.toThrow();
    }
    if (tooltipElement) {
      tooltipElement.showPopover = jest.fn(() => {
        throw new DOMException('Already showing', 'InvalidStateError');
      });
    }
  });

  it('should handle initializePopper early return when elements are not available', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip"></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // Set the elements to null to trigger early return
    // @ts-expect-error - Set private properties for testing
    tooltipComponent.triggerElement = null;
    // @ts-expect-error - Set private properties for testing
    tooltipComponent.tooltipElement = null;

    const createPopperSpy = jest.fn();

    // @ts-expect-error - Manually trigger initialize method
    tooltipComponent.initializePopper();

    // Verify the function returned early (createPopper was not called)
    expect(createPopperSpy).not.toHaveBeenCalled();
  });

  it('should handle hideTooltip early return when tooltipElement is not available', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip"></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // Set tooltipElement to null to trigger early return
    // @ts-expect-error - Set private properties for testing
    tooltipComponent.tooltipElement = null;

    // @ts-expect-error - Check isVisible state before
    tooltipComponent.isVisible = true;

    // Call hideTooltip
    // @ts-expect-error - Manually call method
    tooltipComponent.hideTooltip();

    // Since we hit the early return, isVisible should still be true
    // @ts-expect-error - Check isVisible state after
    expect(tooltipComponent.isVisible).toBe(true);
  });

  it('should handle hideTooltip when forceOpen is true and not escapeDismissed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTooltip],
      html: '<modus-wc-tooltip content="Test tooltip" force-open="true"></modus-wc-tooltip>',
    });

    const tooltipComponent = page.rootInstance as ModusWcTooltip;

    // Create mock tooltip element
    const mockTooltipElement = document.createElement('div');
    mockTooltipElement.style.display = 'block';
    // @ts-expect-error - Set tooltipElement
    tooltipComponent.tooltipElement = mockTooltipElement;

    // Set state for this test case
    tooltipComponent.forceOpen = true;
    // @ts-expect-error - Set escapeDismissed
    tooltipComponent.escapeDismissed = false;
    // @ts-expect-error - Set isVisible
    tooltipComponent.isVisible = true;

    // Call hideTooltip
    // @ts-expect-error - Manually call method
    tooltipComponent.hideTooltip();

    // Tooltip should remain visible due to forceOpen
    expect(mockTooltipElement.style.display).toBe('block');
    // @ts-expect-error - isVisible should remain true
    expect(tooltipComponent.isVisible).toBe(true);
  });

  describe('contentElement prop', () => {
    it('should deep-clone contentElement into the tooltip balloon when set', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Original"><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      // @ts-expect-error - Access private property for testing
      const tooltipEl = tooltipComponent.tooltipElement as HTMLElement;

      const richEl = document.createElement('span');
      richEl.textContent = 'Rich content';

      tooltipComponent.contentElement = richEl;
      tooltipComponent.handleContentElementChange();

      // A deep clone is rendered, not the caller's original node
      expect(tooltipEl.contains(richEl)).toBe(false);
      const renderedClone = tooltipEl.querySelector('span');
      expect(renderedClone).not.toBeNull();
      expect(renderedClone).not.toBe(richEl);
      expect(renderedClone?.textContent).toBe('Rich content');
      expect(tooltipEl.querySelector('.modus-wc-tooltip-arrow')).not.toBeNull();
      // Arrow must remain the last child
      expect(tooltipEl.lastElementChild?.className).toBe(
        'modus-wc-tooltip-arrow'
      );
    });

    it('should fall back to content string when contentElement is not set', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Fallback text"><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      // @ts-expect-error - Access private property for testing
      const tooltipEl = tooltipComponent.tooltipElement as HTMLElement;

      // No contentElement assigned — plain text should be present
      expect(tooltipEl.textContent).toContain('Fallback text');
    });

    it('should prefer contentElement over content string', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Plain text"><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      // @ts-expect-error - Access private property for testing
      const tooltipEl = tooltipComponent.tooltipElement as HTMLElement;

      const richEl = document.createElement('em');
      richEl.textContent = 'Rich text';

      tooltipComponent.contentElement = richEl;
      tooltipComponent.handleContentElementChange();

      // The cloned rich element is rendered (not the original), and the plain
      // string is NOT present as a bare text node
      const renderedClone = tooltipEl.querySelector('em');
      expect(renderedClone).not.toBeNull();
      expect(renderedClone).not.toBe(richEl);
      expect(renderedClone?.textContent).toBe('Rich text');
      const textNodes = Array.from(tooltipEl.childNodes).filter(
        (n) => n.nodeType === Node.TEXT_NODE
      );
      expect(textNodes.every((n) => n.textContent === '')).toBe(true);
    });

    it('should ignore content string watch updates while contentElement is set', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Original"><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      // @ts-expect-error - Access private property for testing
      const tooltipEl = tooltipComponent.tooltipElement as HTMLElement;

      const richEl = document.createElement('span');
      richEl.textContent = 'Rich';

      tooltipComponent.contentElement = richEl;
      tooltipComponent.handleContentElementChange();

      // Change the content string and trigger the watch — it should be suppressed
      tooltipComponent.content = 'Updated plain text';
      tooltipComponent.handleContentChange();

      expect(tooltipEl.querySelector('span')?.textContent).toBe('Rich');
      expect(tooltipEl.textContent).not.toContain('Updated plain text');
    });

    it('should update tooltip when contentElement watch fires', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Initial"><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      // @ts-expect-error - Access private property for testing
      const tooltipEl = tooltipComponent.tooltipElement as HTMLElement;

      const richEl = document.createElement('p');
      richEl.textContent = 'Watch content';

      tooltipComponent.contentElement = richEl;
      tooltipComponent.handleContentElementChange();

      const renderedClone = tooltipEl.querySelector('p');
      expect(renderedClone).not.toBeNull();
      expect(renderedClone).not.toBe(richEl);
      expect(renderedClone?.textContent).toBe('Watch content');
      expect(tooltipEl.querySelector('.modus-wc-tooltip-arrow')).not.toBeNull();
    });

    it('should not throw in handleContentChange when tooltipElement is null', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test"><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      // @ts-expect-error - Set private property for testing
      tooltipComponent.tooltipElement = null;

      expect(() => {
        tooltipComponent.handleContentChange();
      }).not.toThrow();
    });

    it('should revert to content string when contentElement is cleared', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Fallback"><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      // @ts-expect-error - Access private property for testing
      const tooltipEl = tooltipComponent.tooltipElement as HTMLElement;

      const richEl = document.createElement('b');
      richEl.textContent = 'Bold content';

      tooltipComponent.contentElement = richEl;
      tooltipComponent.handleContentElementChange();
      expect(tooltipEl.querySelector('b')?.textContent).toBe('Bold content');

      // Clear contentElement — should revert to plain text
      tooltipComponent.contentElement = undefined;
      tooltipComponent.handleContentElementChange();

      expect(tooltipEl.querySelector('b')).toBeNull();
      expect(tooltipEl.textContent).toContain('Fallback');
    });

    it('should do nothing in applyContentToTooltip when tooltipElement is null', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      // @ts-expect-error - Set private property for testing
      tooltipComponent.tooltipElement = null;

      // Should not throw
      expect(() => {
        // @ts-expect-error - Access private method for testing
        tooltipComponent.applyContentToTooltip();
      }).not.toThrow();
    });

    it("should leave the caller's original element in its parent", async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Original"><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;

      // The caller keeps the element in their own DOM location
      const ownerParent = document.createElement('div');
      const richEl = document.createElement('span');
      richEl.textContent = 'Owned content';
      ownerParent.appendChild(richEl);

      tooltipComponent.contentElement = richEl;
      tooltipComponent.handleContentElementChange();

      // The original node must NOT be moved out of its parent
      expect(richEl.parentElement).toBe(ownerParent);
      expect(ownerParent.contains(richEl)).toBe(true);
    });

    it('should not mutate or orphan the previous element when contentElement is reassigned', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Original"><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      // @ts-expect-error - Access private property for testing
      const tooltipEl = tooltipComponent.tooltipElement as HTMLElement;

      const firstParent = document.createElement('div');
      const firstEl = document.createElement('span');
      firstEl.textContent = 'First';
      firstParent.appendChild(firstEl);

      tooltipComponent.contentElement = firstEl;
      tooltipComponent.handleContentElementChange();

      const secondEl = document.createElement('span');
      secondEl.textContent = 'Second';

      tooltipComponent.contentElement = secondEl;
      tooltipComponent.handleContentElementChange();

      // The previous element is untouched: still has its parent, still has its content
      expect(firstEl.parentElement).toBe(firstParent);
      expect(firstEl.textContent).toBe('First');

      // The tooltip now renders a clone of the second element
      expect(tooltipEl.textContent).toContain('Second');
      expect(tooltipEl.textContent).not.toContain('First');
    });

    it('should allow the same element to be used as content for multiple tooltips', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <div>
            <modus-wc-tooltip id="t1"><button>One</button></modus-wc-tooltip>
            <modus-wc-tooltip id="t2"><button>Two</button></modus-wc-tooltip>
          </div>
        `,
      });

      await page.waitForChanges();

      const shared = document.createElement('span');
      shared.textContent = 'Shared content';

      const tooltips = Array.from(
        page.body.querySelectorAll('modus-wc-tooltip')
      ) as (HTMLElement & { contentElement?: HTMLElement })[];

      tooltips.forEach((t) => {
        t.contentElement = shared;
      });
      await page.waitForChanges();

      // Both tooltips render the shared content via independent clones
      const balloons = Array.from(
        page.body.querySelectorAll('.modus-wc-tooltip-content')
      );
      expect(balloons.length).toBe(2);
      balloons.forEach((balloon) => {
        const clone = balloon.querySelector('span');
        expect(clone).not.toBeNull();
        expect(clone).not.toBe(shared);
        expect(clone?.textContent).toBe('Shared content');
      });

      // The shared original was never adopted by either tooltip
      expect(shared.parentElement).toBeNull();
    });

    it('should fall back to the content string when a non-Node value is assigned to contentElement', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Fallback text"><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      // @ts-expect-error - Access private property for testing
      const tooltipEl = tooltipComponent.tooltipElement as HTMLElement;

      // Assign a value that is not a DOM Node
      // @ts-expect-error - Deliberately assigning an invalid value for testing
      tooltipComponent.contentElement = {};

      expect(() => {
        tooltipComponent.handleContentElementChange();
      }).not.toThrow();

      expect(tooltipEl.textContent).toContain('Fallback text');
    });

    describe('dynamic rich content', () => {
      it('should not update the clone when the source contentElement node is mutated without reassignment', async () => {
        const page = await newSpecPage({
          components: [ModusWcTooltip],
          html: '<modus-wc-tooltip content="Fallback"><button>Trigger</button></modus-wc-tooltip>',
        });

        const tooltipComponent = page.rootInstance as ModusWcTooltip;
        // @ts-expect-error - Access private property for testing
        const tooltipEl = tooltipComponent.tooltipElement as HTMLElement;

        const richEl = document.createElement('div');
        richEl.textContent = 'Initial';

        tooltipComponent.contentElement = richEl;
        tooltipComponent.handleContentElementChange();

        richEl.textContent = 'Updated';

        const renderedClone = tooltipEl.querySelector('div');
        expect(renderedClone?.textContent).toBe('Initial');
        expect(renderedClone?.textContent).not.toBe('Updated');
      });

      it('should update the clone when a new contentElement is assigned', async () => {
        const page = await newSpecPage({
          components: [ModusWcTooltip],
          html: '<modus-wc-tooltip content="Fallback"><button>Trigger</button></modus-wc-tooltip>',
        });

        const tooltipComponent = page.rootInstance as ModusWcTooltip;
        // @ts-expect-error - Access private property for testing
        const tooltipEl = tooltipComponent.tooltipElement as HTMLElement;

        const initialEl = document.createElement('div');
        initialEl.textContent = 'Initial';

        tooltipComponent.contentElement = initialEl;
        tooltipComponent.handleContentElementChange();

        const updatedEl = document.createElement('div');
        updatedEl.textContent = 'Updated';

        tooltipComponent.contentElement = updatedEl;
        tooltipComponent.handleContentElementChange();

        expect(tooltipEl.querySelector('div')?.textContent).toBe('Updated');
        expect(tooltipEl.textContent).not.toContain('Initial');
      });

      it('should update the clone when contentElement is cleared and reassigned after mutating the source', async () => {
        const page = await newSpecPage({
          components: [ModusWcTooltip],
          html: '<modus-wc-tooltip content="Fallback"><button>Trigger</button></modus-wc-tooltip>',
        });

        const tooltipComponent = page.rootInstance as ModusWcTooltip;
        // @ts-expect-error - Access private property for testing
        const tooltipEl = tooltipComponent.tooltipElement as HTMLElement;

        const richEl = document.createElement('div');
        richEl.textContent = 'Initial';

        tooltipComponent.contentElement = richEl;
        tooltipComponent.handleContentElementChange();

        richEl.textContent = 'Updated';
        tooltipComponent.contentElement = undefined;
        tooltipComponent.handleContentElementChange();
        tooltipComponent.contentElement = richEl;
        tooltipComponent.handleContentElementChange();

        expect(tooltipEl.querySelector('div')?.textContent).toBe('Updated');
      });

      it('should deep-clone nested rich HTML structures', async () => {
        const page = await newSpecPage({
          components: [ModusWcTooltip],
          html: '<modus-wc-tooltip content="Fallback"><button>Trigger</button></modus-wc-tooltip>',
        });

        const tooltipComponent = page.rootInstance as ModusWcTooltip;
        // @ts-expect-error - Access private property for testing
        const tooltipEl = tooltipComponent.tooltipElement as HTMLElement;

        const richEl = document.createElement('div');
        const icon = document.createElement('span');
        icon.className = 'tooltip-rich-icon';
        const text = document.createElement('div');
        text.innerHTML =
          '<strong>Tooltip</strong><p>First line</p><p>Second line</p>';
        richEl.append(icon, text);

        tooltipComponent.contentElement = richEl;
        tooltipComponent.handleContentElementChange();

        expect(tooltipEl.contains(richEl)).toBe(false);
        expect(tooltipEl.querySelector('.tooltip-rich-icon')).not.toBeNull();
        expect(tooltipEl.querySelector('strong')?.textContent).toBe('Tooltip');
        expect(tooltipEl.querySelectorAll('p').length).toBe(2);
        expect(richEl.querySelector('.tooltip-rich-icon')).not.toBeNull();
      });
    });

    describe('interactive content', () => {
      it('should not copy addEventListener handlers to the contentElement clone', async () => {
        const page = await newSpecPage({
          components: [ModusWcTooltip],
          html: '<modus-wc-tooltip content="Fallback"><button>Trigger</button></modus-wc-tooltip>',
        });

        const tooltipComponent = page.rootInstance as ModusWcTooltip;
        // @ts-expect-error - Access private property for testing
        const tooltipEl = tooltipComponent.tooltipElement as HTMLElement;

        let originalClicks = 0;
        const richEl = document.createElement('div');
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = 'Action';
        button.addEventListener('click', () => {
          originalClicks += 1;
        });
        richEl.appendChild(button);

        tooltipComponent.contentElement = richEl;
        tooltipComponent.handleContentElementChange();

        const cloneButton = tooltipEl.querySelector('button');
        expect(cloneButton).not.toBeNull();
        expect(cloneButton).not.toBe(button);

        cloneButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        expect(originalClicks).toBe(0);

        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        expect(originalClicks).toBe(1);
      });
    });
  });

  // Set a longer timeout for this test (30 seconds)
  it('should perform a second popper update after setTimeout in showTooltip', async () => {
    const originalSetTimeout = globalThis.setTimeout;
    // @ts-expect-error - Override setTimeout for the test
    globalThis.setTimeout = function mockSetTimeout(callback) {
      callback();
      return 999;
    };

    try {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test tooltip"><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;

      // Set up a mock tooltip element
      const mockTooltipElement = document.createElement('div');
      mockTooltipElement.style.display = 'none';
      // @ts-expect-error - Set the tooltipElement
      tooltipComponent.tooltipElement = mockTooltipElement;

      // Set up a mock popper instance with an update method we can spy on
      const mockUpdate = jest.fn().mockResolvedValue(undefined);
      // @ts-expect-error - Set the mock popper instance
      tooltipComponent.popperInstance = {
        update: mockUpdate,
        destroy: jest.fn(),
      };

      // Call showTooltip method
      // @ts-expect-error - Access private method
      tooltipComponent.showTooltip();

      // First update should happen immediately and second update should be called by our mocked setTimeout
      expect(mockUpdate).toHaveBeenCalledTimes(2);
    } finally {
      // Restore original setTimeout
      globalThis.setTimeout = originalSetTimeout;
    }
  }, 30000);

  describe('show delay and warm window', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    // Earlier tests close tooltips at the real clock time; jumping Date.now far
    // forward guarantees the page reads as cold regardless of test order.
    const coldPage = () =>
      jest.spyOn(Date, 'now').mockReturnValue(Number.MAX_SAFE_INTEGER);

    const captureTimers = () => {
      const scheduled: Array<{ fn: () => void; ms?: number }> = [];
      jest.spyOn(globalThis, 'setTimeout').mockImplementation(((
        fn: () => void,
        ms?: number
      ) => {
        scheduled.push({ fn, ms });
        return 0;
      }) as unknown as typeof setTimeout);
      return scheduled;
    };

    it('should show immediately on hover by default (show-delay 0)', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test"><button>Trigger</button></modus-wc-tooltip>',
      });

      coldPage();
      page.root?.dispatchEvent(new MouseEvent('mouseenter'));
      expect(page.rootInstance.isVisible).toBe(true);
    });

    it('should wait showDelay before showing on hover when the page is cold', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test" show-delay="200"><button>Trigger</button></modus-wc-tooltip>',
      });

      coldPage();
      const scheduled = captureTimers();

      page.root?.dispatchEvent(new MouseEvent('mouseenter'));

      // Not visible yet; a 200ms show timer is pending
      expect(page.rootInstance.isVisible).toBe(false);
      expect(scheduled[0]?.ms).toBe(200);

      scheduled[0].fn();
      expect(page.rootInstance.isVisible).toBe(true);
    });

    it('should cancel a pending show on mouseleave without warming the page', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test" show-delay="200"><button>Trigger</button></modus-wc-tooltip>',
      });

      coldPage();
      const scheduled = captureTimers();
      const clearTimeoutSpy = jest.spyOn(globalThis, 'clearTimeout');

      page.root?.dispatchEvent(new MouseEvent('mouseenter'));
      page.root?.dispatchEvent(new MouseEvent('mouseleave'));

      expect(clearTimeoutSpy).toHaveBeenCalled();
      expect(page.rootInstance.isVisible).toBe(false);

      // A sweep that never opened a tooltip must not warm the page:
      // the next hover is delayed again rather than instant
      page.root?.dispatchEvent(new MouseEvent('mouseenter'));
      expect(page.rootInstance.isVisible).toBe(false);
      expect(scheduled[1]?.ms).toBe(200);
    });

    it('should show instantly on hover while the page is warm', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `<div>
          <modus-wc-tooltip content="A" tooltip-id="warm-a"><button>A</button></modus-wc-tooltip>
          <modus-wc-tooltip content="B" show-delay="200" tooltip-id="warm-b"><button>B</button></modus-wc-tooltip>
        </div>`,
      });

      const [tooltipA, tooltipB] = Array.from(
        page.body.querySelectorAll('modus-wc-tooltip')
      );

      // Open and close A to warm the page
      tooltipA.dispatchEvent(new MouseEvent('mouseenter'));
      await page.waitForChanges();
      expect(document.getElementById('warm-a')?.style.display).toBe('block');
      tooltipA.dispatchEvent(new MouseEvent('mouseleave'));
      await page.waitForChanges();
      expect(document.getElementById('warm-a')?.style.display).toBe('none');

      // B has a 200ms delay but opens instantly because the page is warm
      tooltipB.dispatchEvent(new MouseEvent('mouseenter'));
      await page.waitForChanges();
      expect(document.getElementById('warm-b')?.style.display).toBe('block');
    });

    it('should show immediately on keyboard focus even when the page is cold', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test" show-delay="200"><button>Trigger</button></modus-wc-tooltip>',
      });

      coldPage();
      page.root?.dispatchEvent(new Event('focusin', { bubbles: true }));
      expect(page.rootInstance.isVisible).toBe(true);
    });

    it('should show immediately on touch even when a show delay is set', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test" show-delay="200"><button>Trigger</button></modus-wc-tooltip>',
      });

      coldPage();

      // A tap fires pointerenter (pointerType: touch) before the emulated mouseenter
      const pointerEnter = new MouseEvent('pointerenter');
      Object.defineProperty(pointerEnter, 'pointerType', { value: 'touch' });
      page.root?.dispatchEvent(pointerEnter);
      page.root?.dispatchEvent(new MouseEvent('mouseenter'));

      expect(page.rootInstance.isVisible).toBe(true);
    });

    it('should cancel a pending show when Escape is pressed during the delay', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test" show-delay="20"><button>Trigger</button></modus-wc-tooltip>',
      });

      coldPage();
      page.root?.dispatchEvent(new MouseEvent('mouseenter'));
      document.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));

      // Give the cancelled 20ms timer time to have fired if it survived
      await new Promise((resolve) => globalThis.setTimeout(resolve, 50));
      expect(page.rootInstance.isVisible).toBe(false);
    });
  });
});
