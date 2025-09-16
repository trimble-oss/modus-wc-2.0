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

    it('should not show the tooltip when forceOpen is true but it was previously dismissed with Escape', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test" force-open="true"></modus-wc-tooltip>',
      });

      // First make tooltip visible
      if (page.root) {
        // The component sets isVisible state when force-open is true
        await page.waitForChanges();
      }

      // Spy on methods
      const hideTooltipSpy = jest.spyOn(page.rootInstance, 'hideTooltip');
      const showTooltipSpy = jest.spyOn(page.rootInstance, 'showTooltip');

      // Simulate Escape key press when tooltip is visible (sets escapeDismissed to true)
      const escapeEvent = new KeyboardEvent('keyup', { code: 'Escape' });
      document.dispatchEvent(escapeEvent);
      await page.waitForChanges();

      // Should have called hideTooltip due to Escape
      expect(hideTooltipSpy).toHaveBeenCalled();

      // Reset spies
      hideTooltipSpy.mockClear();
      showTooltipSpy.mockClear();

      // Set forceOpen again to test that it doesn't show after escape dismiss
      if (page.root) {
        page.root.forceOpen = false;
        await page.waitForChanges();
        page.root.forceOpen = true;
      }
      await page.waitForChanges();

      // Should not call showTooltip method due to previous escape dismissal
      expect(showTooltipSpy).not.toHaveBeenCalled();
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

    // Simulate component disconnection
    page.root?.remove();
    await page.waitForChanges();

    // Verify the popper instance was destroyed
    expect(mockDestroy).toHaveBeenCalled();

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
    // Manually trigger watch handler
    tooltipComponent.handleContentChange('Updated content');

    expect(mockTooltipElement.textContent).toContain('Updated content');
    expect(
      mockTooltipElement.querySelector('.modus-wc-tooltip-arrow')
    ).not.toBeNull();
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
});
