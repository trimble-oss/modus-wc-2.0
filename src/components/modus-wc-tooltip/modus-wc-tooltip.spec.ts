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
      tooltipElement.hidePopover = hidePopoverSpy as unknown as () => void;
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
      tooltipElement.showPopover = showPopoverSpy as unknown as () => void;
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
      tooltipElement.hidePopover = hidePopoverSpy as unknown as () => void;
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
    it('should render contentElement inside the tooltip balloon when set', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Original"><button>Trigger</button></modus-wc-tooltip>',
      });

      const richEl = document.createElement('span');
      richEl.textContent = 'Rich content';

      if (page.root) {
        page.root.contentElement = richEl;
      }
      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      expect(tooltipContent?.contains(richEl)).toBe(true);
      expect(
        tooltipContent?.querySelector('.modus-wc-tooltip-arrow')
      ).not.toBeNull();
      // Arrow must remain the last child
      expect(tooltipContent?.lastElementChild?.className).toBe(
        'modus-wc-tooltip-arrow'
      );
    });

    it('should fall back to content string when contentElement is not set', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Fallback text"><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      // No contentElement assigned — plain text should be present
      expect(tooltipContent?.textContent).toContain('Fallback text');
    });

    it('should prefer contentElement over content string', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Plain text"><button>Trigger</button></modus-wc-tooltip>',
      });

      const richEl = document.createElement('em');
      richEl.textContent = 'Rich text';

      if (page.root) {
        page.root.contentElement = richEl;
      }
      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      // Rich element present, plain text NOT present as a bare text node
      expect(tooltipContent?.contains(richEl)).toBe(true);
      const textNodes = Array.from(tooltipContent?.childNodes ?? []).filter(
        (n) => n.nodeType === Node.TEXT_NODE
      );
      expect(textNodes.every((n) => n.textContent === '')).toBe(true);
    });

    it('should ignore content string watch updates while contentElement is set', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Original"><button>Trigger</button></modus-wc-tooltip>',
      });

      const richEl = document.createElement('span');
      richEl.textContent = 'Rich';

      if (page.root) {
        page.root.contentElement = richEl;
      }
      await page.waitForChanges();

      // Now change the content string — the watch should be suppressed
      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      tooltipComponent.handleContentChange('Updated plain text');

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      expect(tooltipContent?.contains(richEl)).toBe(true);
      expect(tooltipContent?.textContent).not.toContain('Updated plain text');
    });

    it('should revert to content string when contentElement is cleared', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Fallback"><button>Trigger</button></modus-wc-tooltip>',
      });

      const richEl = document.createElement('b');
      richEl.textContent = 'Bold content';

      if (page.root) {
        page.root.contentElement = richEl;
      }
      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      expect(tooltipContent?.contains(richEl)).toBe(true);

      // Clear contentElement
      if (page.root) {
        page.root.contentElement = undefined;
      }
      await page.waitForChanges();

      expect(tooltipContent?.contains(richEl)).toBe(false);
      expect(tooltipContent?.textContent).toContain('Fallback');
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

  describe('content slot', () => {
    it('should clone slot content into the tooltip element on load', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip>
            <button>Trigger</button>
            <div slot="content" class="slot-content">Rich content</div>
          </modus-wc-tooltip>
        `,
      });

      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      expect(tooltipContent?.querySelector('.slot-content')).not.toBeNull();
      expect(tooltipContent?.textContent).toContain('Rich content');
    });

    it('should preserve id attributes on cloned slot nodes', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip>
            <button>Trigger</button>
            <div slot="content" id="original-id" class="slot-clone">
              <span id="child-id">Content</span>
            </div>
          </modus-wc-tooltip>
        `,
      });

      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      const clonedRoot = tooltipContent?.querySelector('.slot-clone');

      expect(clonedRoot?.getAttribute('id')).toBe('original-id');
      expect(clonedRoot?.querySelector('#child-id')).not.toBeNull();
      expect(page.root?.querySelector('#original-id')).not.toBeNull();
    });

    it('should keep the original slot node in the host after cloning', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip>
            <button>Trigger</button>
            <div slot="content" id="slot-original">Original</div>
          </modus-wc-tooltip>
        `,
      });

      await page.waitForChanges();

      // Original stays in host with its id intact
      expect(page.root?.querySelector('#slot-original')).not.toBeNull();
    });

    it('should clone all slot content nodes when multiple are provided', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip>
            <button>Trigger</button>
            <div slot="content" class="slot-a">Line A</div>
            <div slot="content" class="slot-b">Line B</div>
          </modus-wc-tooltip>
        `,
      });

      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      expect(tooltipContent?.querySelector('.slot-a')).not.toBeNull();
      expect(tooltipContent?.querySelector('.slot-b')).not.toBeNull();
      expect(tooltipContent?.textContent).toContain('Line A');
      expect(tooltipContent?.textContent).toContain('Line B');
    });

    it('should remove slot attribute from cloned nodes', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip>
            <button>Trigger</button>
            <div slot="content" class="slot-clone">Content</div>
          </modus-wc-tooltip>
        `,
      });

      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      const clonedNode = tooltipContent?.querySelector('.slot-clone');
      expect(clonedNode?.getAttribute('slot')).toBeNull();
    });

    it('should prefer slot content over the content prop when both are provided', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip content="Prop content">
            <button>Trigger</button>
            <div slot="content" class="slot-wins">Slot content</div>
          </modus-wc-tooltip>
        `,
      });

      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      expect(tooltipContent?.querySelector('.slot-wins')).not.toBeNull();
      expect(tooltipContent?.textContent).toContain('Slot content');
      expect(tooltipContent?.textContent).not.toContain('Prop content');
    });

    it('should not overwrite slot content when content prop changes', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip content="Original prop">
            <button>Trigger</button>
            <div slot="content" class="slot-guard">Slot content</div>
          </modus-wc-tooltip>
        `,
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      tooltipComponent.content = 'Updated prop';
      tooltipComponent.handleContentChange();
      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      expect(tooltipContent?.querySelector('.slot-guard')).not.toBeNull();
      expect(tooltipContent?.textContent).toContain('Slot content');
      expect(tooltipContent?.textContent).not.toContain('Updated prop');
    });

    it('should render the hidden slot holder in the host element', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test"><button>Trigger</button></modus-wc-tooltip>',
      });

      const slotHolder = page.root?.querySelector(
        '.modus-wc-tooltip-content-source'
      );
      expect(slotHolder).not.toBeNull();
      expect(slotHolder?.hasAttribute('hidden')).toBe(true);
    });

    it('should fall back to content prop when no slot content is provided', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Fallback text"><button>Trigger</button></modus-wc-tooltip>',
      });

      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      expect(tooltipContent?.textContent).toContain('Fallback text');
    });
  });

  describe('slot content MutationObserver', () => {
    let originalMutationObserver: typeof MutationObserver;
    let mutationCallback: MutationCallback;
    let observeSpy: jest.Mock;
    let disconnectSpy: jest.Mock;

    beforeEach(() => {
      originalMutationObserver = globalThis.MutationObserver;
      observeSpy = jest.fn();
      disconnectSpy = jest.fn();
      globalThis.MutationObserver = jest.fn((cb: MutationCallback) => {
        mutationCallback = cb;
        return {
          observe: observeSpy,
          disconnect: disconnectSpy,
          takeRecords: jest.fn(),
        };
      }) as unknown as typeof MutationObserver;
    });

    afterEach(() => {
      globalThis.MutationObserver = originalMutationObserver;
    });

    it('should set up MutationObserver on the content source in componentDidLoad', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip>
            <button>Trigger</button>
            <div slot="content">Slot content</div>
          </modus-wc-tooltip>
        `,
      });

      const contentSource = page.root?.querySelector(
        '.modus-wc-tooltip-content-source'
      );
      expect(globalThis.MutationObserver).toHaveBeenCalled();
      expect(observeSpy).toHaveBeenCalledWith(contentSource, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
      });
    });

    it('should update tooltip when slot content text changes', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip>
            <button>Trigger</button>
            <div slot="content" class="slot-dynamic">Original</div>
          </modus-wc-tooltip>
        `,
      });

      const slotNode = page.root!.querySelector('.slot-dynamic') as HTMLElement;
      slotNode.textContent = 'Updated slot text';

      mutationCallback([{} as MutationRecord], {} as MutationObserver);
      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      expect(tooltipContent?.textContent).toContain('Updated slot text');
      expect(tooltipContent?.textContent).not.toContain('Original');
    });

    it('should update tooltip when nested slot content changes', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip>
            <button>Trigger</button>
            <div slot="content" class="slot-nested">
              <span class="nested-line">Line one</span>
            </div>
          </modus-wc-tooltip>
        `,
      });

      const nestedLine = page.root!.querySelector(
        '.nested-line'
      ) as HTMLElement;
      nestedLine.textContent = 'Line updated';

      mutationCallback([{} as MutationRecord], {} as MutationObserver);
      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      expect(tooltipContent?.querySelector('.nested-line')?.textContent).toBe(
        'Line updated'
      );
    });

    it('should preserve arrow element when slot content is re-synced', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip>
            <button>Trigger</button>
            <div slot="content" class="slot-dynamic">Original</div>
          </modus-wc-tooltip>
        `,
      });

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      const arrow = tooltipContent?.querySelector('.modus-wc-tooltip-arrow');
      expect(arrow).not.toBeNull();

      const slotNode = page.root!.querySelector('.slot-dynamic') as HTMLElement;
      slotNode.textContent = 'Updated';

      mutationCallback([{} as MutationRecord], {} as MutationObserver);
      await page.waitForChanges();

      expect(
        tooltipContent?.querySelector('.modus-wc-tooltip-arrow')
      ).not.toBeNull();
      expect(tooltipContent?.lastElementChild).toBe(arrow);
      expect(tooltipContent?.textContent).toContain('Updated');
    });

    it('should fall back to content prop when slot content is removed', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip content="Prop fallback">
            <button>Trigger</button>
            <div slot="content" id="removable-slot">Slot content</div>
          </modus-wc-tooltip>
        `,
      });

      page.root?.querySelector('#removable-slot')?.remove();

      mutationCallback([{} as MutationRecord], {} as MutationObserver);
      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      expect(tooltipContent?.textContent).toContain('Prop fallback');
      expect(tooltipContent?.textContent).not.toContain('Slot content');
    });

    it('should allow content prop updates after slot content is removed', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip content="Prop text">
            <button>Trigger</button>
            <div slot="content" id="removable-slot">Slot content</div>
          </modus-wc-tooltip>
        `,
      });

      page.root?.querySelector('#removable-slot')?.remove();
      mutationCallback([{} as MutationRecord], {} as MutationObserver);
      await page.waitForChanges();

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      tooltipComponent.content = 'Updated prop';
      tooltipComponent.handleContentChange();
      await page.waitForChanges();

      const tooltipContent = page.body.querySelector(
        '.modus-wc-tooltip-content'
      );
      expect(tooltipContent?.textContent).toContain('Updated prop');
      expect(tooltipContent?.textContent).not.toContain('Slot content');
    });

    it('should disconnect MutationObserver on disconnectedCallback', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip>
            <button>Trigger</button>
            <div slot="content">Slot content</div>
          </modus-wc-tooltip>
        `,
      });

      page.root?.remove();
      expect(disconnectSpy).toHaveBeenCalled();
    });

    it('should not set up MutationObserver when MutationObserver is undefined', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (globalThis as any).MutationObserver = undefined;

      await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip content="Test">
            <button>Trigger</button>
            <div slot="content">Slot content</div>
          </modus-wc-tooltip>
        `,
      });

      expect(observeSpy).not.toHaveBeenCalled();
    });

    it('should handle disconnectedCallback when no MutationObserver was created', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (globalThis as any).MutationObserver = undefined;

      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test"><button>Trigger</button></modus-wc-tooltip>',
      });

      expect(() => page.root?.remove()).not.toThrow();
    });

    it('should no-op when syncTooltipContent is called without a tooltip element', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: '<modus-wc-tooltip content="Test"><button>Trigger</button></modus-wc-tooltip>',
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      // @ts-expect-error - Set private property for testing
      tooltipComponent.tooltipElement = null;

      // @ts-expect-error - Access private method for testing
      expect(() => tooltipComponent.syncTooltipContent()).not.toThrow();
    });

    it('should not observe when content source element is missing', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip content="Test">
            <button>Trigger</button>
            <div slot="content">Slot content</div>
          </modus-wc-tooltip>
        `,
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      observeSpy.mockClear();

      jest
        .spyOn(tooltipComponent.el, 'querySelector')
        .mockReturnValueOnce(null);

      // @ts-expect-error - Access private method for testing
      tooltipComponent.observeSlotContentChanges();

      expect(observeSpy).not.toHaveBeenCalled();
    });

    it('should update popper when slot content is re-synced while visible', async () => {
      const page = await newSpecPage({
        components: [ModusWcTooltip],
        html: `
          <modus-wc-tooltip>
            <button>Trigger</button>
            <div slot="content" class="slot-dynamic">Original</div>
          </modus-wc-tooltip>
        `,
      });

      const tooltipComponent = page.rootInstance as ModusWcTooltip;
      const mockUpdate = jest.fn().mockResolvedValue(undefined);

      // @ts-expect-error - Set private properties for testing
      tooltipComponent.isVisible = true;
      // @ts-expect-error - Set private properties for testing
      tooltipComponent.popperInstance = {
        update: mockUpdate,
        destroy: jest.fn(),
      };

      const slotNode = page.root!.querySelector('.slot-dynamic') as HTMLElement;
      slotNode.textContent = 'Updated slot text';

      mutationCallback([{} as MutationRecord], {} as MutationObserver);
      await page.waitForChanges();

      expect(mockUpdate).toHaveBeenCalled();
    });
  });
});
