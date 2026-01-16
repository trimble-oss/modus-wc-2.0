import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { ModusWcHandle } from './modus-wc-handle';

interface HandlePrivateMethods {
  handleTouchStart: (event: {
    touches: { clientX: number; clientY: number }[];
    preventDefault: () => void;
  }) => void;
  handleTouchMove: (event: {
    touches: { clientX: number; clientY: number }[];
    preventDefault: () => void;
  }) => void;
  handleTouchEnd: () => void;
  endDrag: () => void;
  getMinSize: (target: HTMLElement, axis: 'horizontal' | 'vertical') => number;
  clampDelta: (
    delta: number,
    leftEl: HTMLElement | null,
    rightEl: HTMLElement | null,
    leftSize: number,
    rightSize: number
  ) => number;
}

describe('modus-wc-handle', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcHandle],
      html: '<modus-wc-handle></modus-wc-handle>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with horizontal orientation', async () => {
    const page = await newSpecPage({
      components: [ModusWcHandle],
      html: '<modus-wc-handle orientation="horizontal"></modus-wc-handle>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with vertical orientation', async () => {
    const page = await newSpecPage({
      components: [ModusWcHandle],
      html: '<modus-wc-handle orientation="vertical"></modus-wc-handle>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render button type', async () => {
    const page = await newSpecPage({
      components: [ModusWcHandle],
      html: '<modus-wc-handle type="button"></modus-wc-handle>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render button type with vertical orientation', async () => {
    const page = await newSpecPage({
      components: [ModusWcHandle],
      html: '<modus-wc-handle type="button" orientation="vertical"></modus-wc-handle>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with large size', async () => {
    const page = await newSpecPage({
      components: [ModusWcHandle],
      html: '<modus-wc-handle size="lg"></modus-wc-handle>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom class', async () => {
    const page = await newSpecPage({
      components: [ModusWcHandle],
      html: '<modus-wc-handle custom-class="custom-handle"></modus-wc-handle>',
    });
    expect(page.root).toMatchSnapshot();
  });

  describe('mouse drag interactions', () => {
    let page: SpecPage;
    let leftPanel: HTMLElement;
    let rightPanel: HTMLElement;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; width: 400px;">
            <div id="left-panel" style="width: 200px; min-width: 50px;"></div>
            <modus-wc-handle left-target="#left-panel" right-target="#right-panel"></modus-wc-handle>
            <div id="right-panel" style="width: 200px; min-width: 50px;"></div>
          </div>
        `,
      });
      leftPanel = page.body.querySelector('#left-panel') as HTMLElement;
      rightPanel = page.body.querySelector('#right-panel') as HTMLElement;

      // Mock offsetWidth/offsetHeight
      Object.defineProperty(leftPanel, 'offsetWidth', { value: 200 });
      Object.defineProperty(rightPanel, 'offsetWidth', { value: 200 });
    });

    it('should handle mousedown and start drag for bar type', () => {
      const handle = page.root as HTMLElement;
      const mouseDownEvent = new MouseEvent('mousedown', {
        clientX: 200,
        clientY: 100,
        bubbles: true,
        cancelable: true,
      });

      handle.dispatchEvent(mouseDownEvent);
      expect(document.body.style.cursor).toBe('col-resize');
      expect(document.body.style.userSelect).toBe('none');
    });

    it('should handle mousemove and drag horizontally', () => {
      const handle = page.root as HTMLElement;

      // Start drag
      handle.dispatchEvent(
        new MouseEvent('mousedown', { clientX: 200, clientY: 100 })
      );

      // Move mouse
      document.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 250,
          clientY: 100,
          cancelable: true,
        })
      );

      expect(leftPanel.style.width).toBe('250px');
      expect(rightPanel.style.width).toBe('150px');
    });

    it('should handle mouseup and end drag', () => {
      const handle = page.root as HTMLElement;

      // Store original cursor
      document.body.style.cursor = 'default';

      // Start drag
      handle.dispatchEvent(
        new MouseEvent('mousedown', { clientX: 200, clientY: 100 })
      );

      // End drag
      document.dispatchEvent(new MouseEvent('mouseup'));

      expect(document.body.style.cursor).toBe('default');
    });

    it('should restore previous cursor and userSelect on end drag', () => {
      const handle = page.root as HTMLElement;

      // Set specific initial cursor and userSelect values
      document.body.style.cursor = 'pointer';
      document.body.style.userSelect = 'text';

      // Start drag - should save previous values
      handle.dispatchEvent(
        new MouseEvent('mousedown', { clientX: 200, clientY: 100 })
      );

      // Verify dragging state
      expect(document.body.style.cursor).toBe('col-resize');
      expect(document.body.style.userSelect).toBe('none');

      // End drag - should restore previous values
      document.dispatchEvent(new MouseEvent('mouseup'));

      expect(document.body.style.cursor).toBe('pointer');
      expect(document.body.style.userSelect).toBe('text');
    });

    it('should handle endDrag with null previous values', () => {
      const instance = page.rootInstance as ModusWcHandle;

      // Directly call endDrag without startDrag to test nullish coalescing fallback
      // This tests the case where previousBodyCursor/previousBodyUserSelect are null
      (instance as unknown as HandlePrivateMethods).endDrag();

      // Should set empty string when previous values are null
      expect(document.body.style.cursor).toBe('');
      expect(document.body.style.userSelect).toBe('');
    });

    it('should not drag when not in dragging state', () => {
      const initialWidth = leftPanel.style.width;

      // Move mouse without starting drag
      document.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 250,
          clientY: 100,
          cancelable: true,
        })
      );

      // Panels should not have changed
      expect(leftPanel.style.width).toBe(initialWidth);
    });
  });

  describe('touch drag interactions', () => {
    let page: SpecPage;
    let leftPanel: HTMLElement;
    let rightPanel: HTMLElement;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; width: 400px;">
            <div id="left-panel" style="width: 200px;"></div>
            <modus-wc-handle left-target="#left-panel" right-target="#right-panel"></modus-wc-handle>
            <div id="right-panel" style="width: 200px;"></div>
          </div>
        `,
      });
      leftPanel = page.body.querySelector('#left-panel') as HTMLElement;
      rightPanel = page.body.querySelector('#right-panel') as HTMLElement;

      Object.defineProperty(leftPanel, 'offsetWidth', { value: 200 });
      Object.defineProperty(rightPanel, 'offsetWidth', { value: 200 });
    });

    it('should handle touchstart and start drag for bar type', () => {
      // Create a mock touch event
      const touchStartEvent = {
        type: 'touchstart',
        touches: [{ clientX: 200, clientY: 100 }],
        preventDefault: jest.fn(),
        bubbles: true,
        cancelable: true,
      };

      // Manually call the handler
      const instance = page.rootInstance as ModusWcHandle;
      (instance as unknown as HandlePrivateMethods).handleTouchStart(
        touchStartEvent
      );

      expect(document.body.style.cursor).toBe('col-resize');
    });

    it('should handle touchmove and drag', () => {
      const instance = page.rootInstance as ModusWcHandle;

      // Start touch
      (instance as unknown as HandlePrivateMethods).handleTouchStart({
        touches: [{ clientX: 200, clientY: 100 }],
        preventDefault: jest.fn(),
      });

      // Move touch
      (instance as unknown as HandlePrivateMethods).handleTouchMove({
        touches: [{ clientX: 250, clientY: 100 }],
        preventDefault: jest.fn(),
      });

      expect(leftPanel.style.width).toBe('250px');
      expect(rightPanel.style.width).toBe('150px');
    });

    it('should handle touchend and end drag', () => {
      const instance = page.rootInstance as ModusWcHandle;

      // Start touch
      (instance as unknown as HandlePrivateMethods).handleTouchStart({
        touches: [{ clientX: 200, clientY: 100 }],
        preventDefault: jest.fn(),
      });

      // End touch
      (instance as unknown as HandlePrivateMethods).handleTouchEnd();

      expect(document.body.style.cursor).toBe('');
    });

    it('should not move when not dragging', () => {
      const initialWidth = leftPanel.style.width;
      const instance = page.rootInstance as ModusWcHandle;

      (instance as unknown as HandlePrivateMethods).handleTouchMove({
        touches: [{ clientX: 250, clientY: 100 }],
        preventDefault: jest.fn(),
      });

      expect(leftPanel.style.width).toBe(initialWidth);
    });
  });

  describe('keyboard interactions', () => {
    let page: SpecPage;
    let leftPanel: HTMLElement;
    let rightPanel: HTMLElement;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; width: 400px;">
            <div id="left-panel"></div>
            <modus-wc-handle left-target="#left-panel" right-target="#right-panel" orientation="horizontal"></modus-wc-handle>
            <div id="right-panel"></div>
          </div>
        `,
      });
      leftPanel = page.body.querySelector('#left-panel') as HTMLElement;
      rightPanel = page.body.querySelector('#right-panel') as HTMLElement;

      Object.defineProperty(leftPanel, 'offsetWidth', {
        value: 200,
        configurable: true,
      });
      Object.defineProperty(rightPanel, 'offsetWidth', {
        value: 200,
        configurable: true,
      });
    });

    it('should resize on ArrowRight key for horizontal orientation', () => {
      const handle = page.root as HTMLElement;

      handle.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowRight',
          bubbles: true,
          cancelable: true,
        })
      );

      expect(leftPanel.style.width).toBe('205px');
      expect(rightPanel.style.width).toBe('195px');
    });

    it('should resize on ArrowLeft key for horizontal orientation', () => {
      const handle = page.root as HTMLElement;

      handle.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowLeft',
          bubbles: true,
          cancelable: true,
        })
      );

      expect(leftPanel.style.width).toBe('195px');
      expect(rightPanel.style.width).toBe('205px');
    });

    it('should ignore ArrowUp/Down for horizontal orientation', () => {
      const handle = page.root as HTMLElement;
      const initialWidth = leftPanel.style.width;

      handle.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowUp',
          bubbles: true,
          cancelable: true,
        })
      );

      expect(leftPanel.style.width).toBe(initialWidth);
    });

    it('should ignore other keys for horizontal orientation', () => {
      const handle = page.root as HTMLElement;
      const initialWidth = leftPanel.style.width;

      handle.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'Enter',
          bubbles: true,
          cancelable: true,
        })
      );

      expect(leftPanel.style.width).toBe(initialWidth);
    });
  });

  describe('keyboard interactions - vertical orientation', () => {
    let page: SpecPage;
    let topPanel: HTMLElement;
    let bottomPanel: HTMLElement;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; flex-direction: column; height: 400px;">
            <div id="top-panel"></div>
            <modus-wc-handle left-target="#top-panel" right-target="#bottom-panel" orientation="vertical"></modus-wc-handle>
            <div id="bottom-panel"></div>
          </div>
        `,
      });
      topPanel = page.body.querySelector('#top-panel') as HTMLElement;
      bottomPanel = page.body.querySelector('#bottom-panel') as HTMLElement;

      Object.defineProperty(topPanel, 'offsetHeight', {
        value: 200,
        configurable: true,
      });
      Object.defineProperty(bottomPanel, 'offsetHeight', {
        value: 200,
        configurable: true,
      });
    });

    it('should resize on ArrowDown key for vertical orientation', () => {
      const handle = page.root as HTMLElement;

      handle.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowDown',
          bubbles: true,
          cancelable: true,
        })
      );

      expect(topPanel.style.height).toBe('205px');
      expect(bottomPanel.style.height).toBe('195px');
    });

    it('should resize on ArrowUp key for vertical orientation', () => {
      const handle = page.root as HTMLElement;

      handle.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowUp',
          bubbles: true,
          cancelable: true,
        })
      );

      expect(topPanel.style.height).toBe('195px');
      expect(bottomPanel.style.height).toBe('205px');
    });

    it('should ignore ArrowLeft/Right for vertical orientation', () => {
      const handle = page.root as HTMLElement;
      const initialHeight = topPanel.style.height;

      handle.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowLeft',
          bubbles: true,
          cancelable: true,
        })
      );

      expect(topPanel.style.height).toBe(initialHeight);
    });

    it('should ignore other keys for vertical orientation', () => {
      const handle = page.root as HTMLElement;
      const initialHeight = topPanel.style.height;

      handle.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'Enter',
          bubbles: true,
          cancelable: true,
        })
      );

      expect(topPanel.style.height).toBe(initialHeight);
    });
  });

  describe('vertical orientation drag', () => {
    let page: SpecPage;
    let topPanel: HTMLElement;
    let bottomPanel: HTMLElement;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; flex-direction: column; height: 400px;">
            <div id="top-panel" style="height: 200px;"></div>
            <modus-wc-handle left-target="#top-panel" right-target="#bottom-panel" orientation="vertical"></modus-wc-handle>
            <div id="bottom-panel" style="height: 200px;"></div>
          </div>
        `,
      });
      topPanel = page.body.querySelector('#top-panel') as HTMLElement;
      bottomPanel = page.body.querySelector('#bottom-panel') as HTMLElement;

      Object.defineProperty(topPanel, 'offsetHeight', { value: 200 });
      Object.defineProperty(bottomPanel, 'offsetHeight', { value: 200 });
    });

    it('should drag vertically', () => {
      const handle = page.root as HTMLElement;

      // Start drag
      handle.dispatchEvent(
        new MouseEvent('mousedown', { clientX: 100, clientY: 200 })
      );

      expect(document.body.style.cursor).toBe('row-resize');

      // Move mouse down
      document.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 100,
          clientY: 250,
          cancelable: true,
        })
      );

      expect(topPanel.style.height).toBe('250px');
      expect(bottomPanel.style.height).toBe('150px');
    });
  });

  describe('target element handling', () => {
    it('should handle HTMLElement as target', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; width: 400px;">
            <div id="left-panel" style="width: 200px;"></div>
            <modus-wc-handle></modus-wc-handle>
            <div id="right-panel" style="width: 200px;"></div>
          </div>
        `,
      });

      const handle = page.rootInstance as ModusWcHandle;
      const leftPanel = page.body.querySelector(
        '#left-panel'
      ) as HTMLDivElement;
      const rightPanel = page.body.querySelector(
        '#right-panel'
      ) as HTMLDivElement;

      Object.defineProperty(leftPanel, 'offsetWidth', { value: 200 });
      Object.defineProperty(rightPanel, 'offsetWidth', { value: 200 });

      handle.leftTarget = leftPanel;
      handle.rightTarget = rightPanel;

      // Trigger drag
      page.root?.dispatchEvent(
        new MouseEvent('mousedown', { clientX: 200, clientY: 100 })
      );

      document.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 250,
          clientY: 100,
          cancelable: true,
        })
      );

      expect(leftPanel.style.width).toBe('250px');
      expect(rightPanel.style.width).toBe('150px');
    });

    it('should handle null target gracefully', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: '<modus-wc-handle></modus-wc-handle>',
      });

      const handle = page.root as HTMLElement;

      // Should not throw when targets are not set
      handle.dispatchEvent(
        new MouseEvent('mousedown', { clientX: 200, clientY: 100 })
      );

      document.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 250,
          clientY: 100,
          cancelable: true,
        })
      );

      // End drag without error
      document.dispatchEvent(new MouseEvent('mouseup'));
    });
  });

  describe('clamping behavior', () => {
    it('should clamp delta using getMinSize', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; width: 400px;">
            <div id="left-panel" style="width: 200px;"></div>
            <modus-wc-handle left-target="#left-panel" right-target="#right-panel"></modus-wc-handle>
            <div id="right-panel" style="width: 200px;"></div>
          </div>
        `,
      });

      const instance = page.rootInstance as ModusWcHandle;
      const leftPanel = page.body.querySelector('#left-panel') as HTMLElement;
      const rightPanel = page.body.querySelector('#right-panel') as HTMLElement;

      Object.defineProperty(leftPanel, 'offsetWidth', { value: 200 });
      Object.defineProperty(rightPanel, 'offsetWidth', { value: 200 });

      // Test getMinSize method
      const minSize = (instance as unknown as HandlePrivateMethods).getMinSize(
        leftPanel,
        'horizontal'
      );
      expect(typeof minSize).toBe('number');

      // Test clampDelta method
      const clampedDelta = (
        instance as unknown as HandlePrivateMethods
      ).clampDelta(-300, leftPanel, rightPanel, 200, 200);
      expect(typeof clampedDelta).toBe('number');
    });

    it('should handle NaN from parseFloat in getMinSize', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; width: 400px;">
            <div id="left-panel"></div>
            <modus-wc-handle left-target="#left-panel"></modus-wc-handle>
          </div>
        `,
      });

      const instance = page.rootInstance as ModusWcHandle;
      const leftPanel = page.body.querySelector('#left-panel') as HTMLElement;

      // Test getMinSize returns 0 for elements without explicit min-width
      const minSize = (instance as unknown as HandlePrivateMethods).getMinSize(
        leftPanel,
        'horizontal'
      );
      expect(minSize).toBe(0);
    });

    it('should handle getMinSize for vertical axis', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; flex-direction: column; height: 400px;">
            <div id="top-panel" style="height: 200px; min-height: 50px;"></div>
            <modus-wc-handle orientation="vertical" left-target="#top-panel" right-target="#bottom-panel"></modus-wc-handle>
            <div id="bottom-panel" style="height: 200px; min-height: 50px;"></div>
          </div>
        `,
      });

      const instance = page.rootInstance as ModusWcHandle;
      const topPanel = page.body.querySelector('#top-panel') as HTMLElement;
      const bottomPanel = page.body.querySelector(
        '#bottom-panel'
      ) as HTMLElement;

      Object.defineProperty(topPanel, 'offsetHeight', { value: 200 });
      Object.defineProperty(bottomPanel, 'offsetHeight', { value: 200 });

      // Test getMinSize for vertical axis explicitly
      const minSizeVertical = (
        instance as unknown as HandlePrivateMethods
      ).getMinSize(topPanel, 'vertical');
      expect(typeof minSizeVertical).toBe('number');

      // Also test through clampDelta with vertical orientation to hit the branch
      const clampedDelta = (
        instance as unknown as HandlePrivateMethods
      ).clampDelta(-300, topPanel, bottomPanel, 200, 200);
      expect(typeof clampedDelta).toBe('number');
    });

    it('should return parsed minHeight value for vertical axis', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; flex-direction: column; height: 400px;">
            <div id="top-panel"></div>
            <modus-wc-handle orientation="vertical" left-target="#top-panel"></modus-wc-handle>
          </div>
        `,
      });

      const instance = page.rootInstance as ModusWcHandle;
      const topPanel = page.body.querySelector('#top-panel') as HTMLElement;

      // Set min-height via style to ensure getComputedStyle returns a valid value
      topPanel.style.minHeight = '75px';

      // Test getMinSize returns a number for vertical axis
      const minSize = (instance as unknown as HandlePrivateMethods).getMinSize(
        topPanel,
        'vertical'
      );
      expect(typeof minSize).toBe('number');
    });
  });

  describe('button type interactions', () => {
    it('should not preventDefault on mousedown for button type', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; width: 400px;">
            <div id="left-panel" style="width: 200px;"></div>
            <modus-wc-handle type="button" left-target="#left-panel" right-target="#right-panel"></modus-wc-handle>
            <div id="right-panel" style="width: 200px;"></div>
          </div>
        `,
      });

      const handle = page.root as HTMLElement;
      const leftPanel = page.body.querySelector('#left-panel') as HTMLElement;
      const rightPanel = page.body.querySelector('#right-panel') as HTMLElement;

      Object.defineProperty(leftPanel, 'offsetWidth', { value: 200 });
      Object.defineProperty(rightPanel, 'offsetWidth', { value: 200 });

      const mouseDownEvent = new MouseEvent('mousedown', {
        clientX: 200,
        clientY: 100,
        bubbles: true,
        cancelable: true,
      });

      const preventDefaultSpy = jest.spyOn(mouseDownEvent, 'preventDefault');
      handle.dispatchEvent(mouseDownEvent);

      // preventDefault should NOT be called for button type
      expect(preventDefaultSpy).not.toHaveBeenCalled();
    });

    it('should not preventDefault on touchstart for button type', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; width: 400px;">
            <div id="left-panel" style="width: 200px;"></div>
            <modus-wc-handle type="button" left-target="#left-panel" right-target="#right-panel"></modus-wc-handle>
            <div id="right-panel" style="width: 200px;"></div>
          </div>
        `,
      });

      const leftPanel = page.body.querySelector('#left-panel') as HTMLElement;
      const rightPanel = page.body.querySelector('#right-panel') as HTMLElement;

      Object.defineProperty(leftPanel, 'offsetWidth', { value: 200 });
      Object.defineProperty(rightPanel, 'offsetWidth', { value: 200 });

      const instance = page.rootInstance as ModusWcHandle;
      const preventDefaultMock = jest.fn();

      // Call handleTouchStart directly with a mock event
      (instance as unknown as HandlePrivateMethods).handleTouchStart({
        touches: [{ clientX: 200, clientY: 100 }],
        preventDefault: preventDefaultMock,
      });

      // preventDefault should NOT be called for button type
      expect(preventDefaultMock).not.toHaveBeenCalled();
    });

    it('should call preventDefault on touchstart for bar type', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; width: 400px;">
            <div id="left-panel" style="width: 200px;"></div>
            <modus-wc-handle type="bar" left-target="#left-panel" right-target="#right-panel"></modus-wc-handle>
            <div id="right-panel" style="width: 200px;"></div>
          </div>
        `,
      });

      const leftPanel = page.body.querySelector('#left-panel') as HTMLElement;
      const rightPanel = page.body.querySelector('#right-panel') as HTMLElement;

      Object.defineProperty(leftPanel, 'offsetWidth', { value: 200 });
      Object.defineProperty(rightPanel, 'offsetWidth', { value: 200 });

      const instance = page.rootInstance as ModusWcHandle;
      const preventDefaultMock = jest.fn();

      // Call handleTouchStart directly with a mock event
      (instance as unknown as HandlePrivateMethods).handleTouchStart({
        touches: [{ clientX: 200, clientY: 100 }],
        preventDefault: preventDefaultMock,
      });

      // preventDefault should be called for bar type
      expect(preventDefaultMock).toHaveBeenCalled();
    });
  });

  describe('disconnectedCallback', () => {
    it('should remove event listeners on disconnect', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: '<modus-wc-handle></modus-wc-handle>',
      });

      const handle = page.root as HTMLElement;

      // Spy on removeEventListener
      const removeSpy = jest.spyOn(handle, 'removeEventListener');
      const docRemoveSpy = jest.spyOn(document, 'removeEventListener');

      // Disconnect the component
      handle.remove();
      await page.waitForChanges();

      expect(removeSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));
      expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
      expect(docRemoveSpy).toHaveBeenCalledWith(
        'mousemove',
        expect.any(Function)
      );
      expect(docRemoveSpy).toHaveBeenCalledWith(
        'mouseup',
        expect.any(Function)
      );
    });
  });

  describe('single target scenarios', () => {
    it('should resize only left target when right is not provided', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; width: 400px;">
            <div id="left-panel" style="width: 200px;"></div>
            <modus-wc-handle left-target="#left-panel"></modus-wc-handle>
          </div>
        `,
      });

      const leftPanel = page.body.querySelector('#left-panel') as HTMLElement;
      Object.defineProperty(leftPanel, 'offsetWidth', { value: 200 });

      const handle = page.root as HTMLElement;

      handle.dispatchEvent(
        new MouseEvent('mousedown', { clientX: 200, clientY: 100 })
      );

      document.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 250,
          clientY: 100,
          cancelable: true,
        })
      );

      expect(leftPanel.style.width).toBe('250px');
    });

    it('should resize only right target when left is not provided', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; width: 400px;">
            <modus-wc-handle right-target="#right-panel"></modus-wc-handle>
            <div id="right-panel" style="width: 200px;"></div>
          </div>
        `,
      });

      const rightPanel = page.body.querySelector('#right-panel') as HTMLElement;
      Object.defineProperty(rightPanel, 'offsetWidth', { value: 200 });

      const handle = page.root as HTMLElement;

      handle.dispatchEvent(
        new MouseEvent('mousedown', { clientX: 200, clientY: 100 })
      );

      document.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 250,
          clientY: 100,
          cancelable: true,
        })
      );

      // Right panel should shrink by the delta
      expect(rightPanel.style.width).toBe('150px');
    });

    it('should handle keyboard resize with only left target', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; width: 400px;">
            <div id="left-panel"></div>
            <modus-wc-handle left-target="#left-panel"></modus-wc-handle>
          </div>
        `,
      });

      const leftPanel = page.body.querySelector('#left-panel') as HTMLElement;
      Object.defineProperty(leftPanel, 'offsetWidth', { value: 200 });

      const handle = page.root as HTMLElement;

      handle.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowRight',
          bubbles: true,
          cancelable: true,
        })
      );

      expect(leftPanel.style.width).toBe('205px');
    });

    it('should handle keyboard resize with only right target', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; width: 400px;">
            <modus-wc-handle right-target="#right-panel"></modus-wc-handle>
            <div id="right-panel"></div>
          </div>
        `,
      });

      const rightPanel = page.body.querySelector('#right-panel') as HTMLElement;
      Object.defineProperty(rightPanel, 'offsetWidth', { value: 200 });

      const handle = page.root as HTMLElement;

      handle.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowRight',
          bubbles: true,
          cancelable: true,
        })
      );

      expect(rightPanel.style.width).toBe('195px');
    });
  });

  describe('vertical single target scenarios', () => {
    it('should resize only top target vertically', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; flex-direction: column; height: 400px;">
            <div id="top-panel" style="height: 200px;"></div>
            <modus-wc-handle orientation="vertical" left-target="#top-panel"></modus-wc-handle>
          </div>
        `,
      });

      const topPanel = page.body.querySelector('#top-panel') as HTMLElement;
      Object.defineProperty(topPanel, 'offsetHeight', { value: 200 });

      const handle = page.root as HTMLElement;

      handle.dispatchEvent(
        new MouseEvent('mousedown', { clientX: 100, clientY: 200 })
      );

      document.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 100,
          clientY: 250,
          cancelable: true,
        })
      );

      expect(topPanel.style.height).toBe('250px');
    });

    it('should resize only bottom target vertically', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; flex-direction: column; height: 400px;">
            <modus-wc-handle orientation="vertical" right-target="#bottom-panel"></modus-wc-handle>
            <div id="bottom-panel" style="height: 200px;"></div>
          </div>
        `,
      });

      const bottomPanel = page.body.querySelector(
        '#bottom-panel'
      ) as HTMLElement;
      Object.defineProperty(bottomPanel, 'offsetHeight', { value: 200 });

      const handle = page.root as HTMLElement;

      handle.dispatchEvent(
        new MouseEvent('mousedown', { clientX: 100, clientY: 200 })
      );

      document.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: 100,
          clientY: 250,
          cancelable: true,
        })
      );

      expect(bottomPanel.style.height).toBe('150px');
    });

    it('should handle keyboard resize with only top target vertically', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; flex-direction: column; height: 400px;">
            <div id="top-panel"></div>
            <modus-wc-handle orientation="vertical" left-target="#top-panel"></modus-wc-handle>
          </div>
        `,
      });

      const topPanel = page.body.querySelector('#top-panel') as HTMLElement;
      Object.defineProperty(topPanel, 'offsetHeight', { value: 200 });

      const handle = page.root as HTMLElement;

      handle.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowDown',
          bubbles: true,
          cancelable: true,
        })
      );

      expect(topPanel.style.height).toBe('205px');
    });

    it('should handle keyboard resize with only bottom target vertically', async () => {
      const page = await newSpecPage({
        components: [ModusWcHandle],
        html: `
          <div id="container" style="display: flex; flex-direction: column; height: 400px;">
            <modus-wc-handle orientation="vertical" right-target="#bottom-panel"></modus-wc-handle>
            <div id="bottom-panel"></div>
          </div>
        `,
      });

      const bottomPanel = page.body.querySelector(
        '#bottom-panel'
      ) as HTMLElement;
      Object.defineProperty(bottomPanel, 'offsetHeight', { value: 200 });

      const handle = page.root as HTMLElement;

      handle.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowDown',
          bubbles: true,
          cancelable: true,
        })
      );

      expect(bottomPanel.style.height).toBe('195px');
    });
  });
});
