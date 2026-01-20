import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-handle.tailwind';
import { Orientation } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A draggable handle component for resizing adjacent elements
 */
@Component({
  tag: 'modus-wc-handle',
  styleUrl: 'modus-wc-handle.scss',
  shadow: false,
})
export class ModusWcHandle {
  private inheritedAttributes: Attributes = {};
  private startPos = 0;
  private startLeftSize = 0;
  private startRightSize = 0;
  private previousBodyCursor: string | null = null;
  private previousBodyUserSelect: string | null = null;
  private readonly nonPassiveListenerOptions: AddEventListenerOptions = {
    passive: false,
  };

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the handle element. */
  @Prop() customClass?: string = '';

  /** The left target element to resize (CSS selector or HTMLElement) */
  @Prop() leftTarget?: string | HTMLElement;

  /** The orientation of the handle. */
  @Prop() orientation?: Orientation = 'horizontal';

  /** The right target element to resize (CSS selector or HTMLElement) */
  @Prop() rightTarget?: string | HTMLElement;

  /** The size of the handle. */
  @Prop() size?: 'default' | 'lg' | 'xl' | '2xl' = 'default';

  /** The density/spacing of the handle container (compact: 8px, comfortable: 12px, relaxed: 16px). */
  @Prop() density?: 'compact' | 'comfortable' | 'relaxed' = 'comfortable';

  /** The initial split percentage for the left/top panel (1-100). The right/bottom panel gets the remaining percentage. */
  @Prop() defaultSplit?: number = 50;

  /** The type of handle to display. */
  @Prop() type?: 'bar' | 'button' = 'bar';

  /** Internal state for dragging */
  private isDragging = false;

  private readonly handleMouseDown = (e: MouseEvent) => {
    if (this.type === 'bar') {
      e.preventDefault();
    }
    this.startDrag(e.clientX, e.clientY);
  };

  private readonly handleTouchStart = (e: TouchEvent) => {
    if (this.type === 'bar') {
      e.preventDefault();
    }
    const touch = e.touches[0];
    this.startDrag(touch.clientX, touch.clientY);
  };

  private readonly handleMouseMove = (e: MouseEvent) => {
    if (!this.isDragging) return;
    e.preventDefault();
    this.drag(e.clientX, e.clientY);
  };

  private readonly handleTouchMove = (e: TouchEvent) => {
    if (!this.isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    this.drag(touch.clientX, touch.clientY);
  };

  private readonly handleMouseUp = () => {
    this.endDrag();
  };

  private readonly handleTouchEnd = () => {
    this.endDrag();
  };

  private readonly handleKeyDown = (e: KeyboardEvent) => {
    const moveAmount = 5; // pixels to move per key press
    let delta = 0;

    // Vertical orientation: up/down arrows
    if (this.orientation === 'vertical') {
      if (e.key === 'ArrowUp') {
        delta = -moveAmount;
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        delta = moveAmount;
        e.preventDefault();
      } else {
        return; // Ignore other keys
      }
    }
    // Horizontal orientation: left/right arrows
    else if (this.orientation === 'horizontal') {
      if (e.key === 'ArrowLeft') {
        delta = -moveAmount;
        e.preventDefault();
      } else if (e.key === 'ArrowRight') {
        delta = moveAmount;
        e.preventDefault();
      } else {
        return; // Ignore other keys
      }
    }

    // Apply the resize
    const leftEl = this.getTargetElement(this.leftTarget);
    const rightEl = this.getTargetElement(this.rightTarget);
    const leftSize = leftEl
      ? this.orientation === 'horizontal'
        ? leftEl.offsetWidth
        : leftEl.offsetHeight
      : 0;
    const rightSize = rightEl
      ? this.orientation === 'horizontal'
        ? rightEl.offsetWidth
        : rightEl.offsetHeight
      : 0;
    const clampedDelta = this.clampDelta(
      delta,
      leftEl,
      rightEl,
      leftSize,
      rightSize
    );

    if (leftEl && this.orientation === 'vertical') {
      const newHeight = leftSize + clampedDelta;
      leftEl.style.height = `${newHeight}px`;
    } else if (leftEl && this.orientation === 'horizontal') {
      const newWidth = leftSize + clampedDelta;
      leftEl.style.width = `${newWidth}px`;
    }

    if (rightEl && this.orientation === 'vertical') {
      const newHeight = rightSize - clampedDelta;
      rightEl.style.height = `${newHeight}px`;
    } else if (rightEl && this.orientation === 'horizontal') {
      const newWidth = rightSize - clampedDelta;
      rightEl.style.width = `${newWidth}px`;
    }
  };

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    this.setupDragHandlers();
    this.applyInitialSplit();
  }

  private applyInitialSplit() {
    if (!this.defaultSplit || !this.leftTarget || !this.rightTarget) return;

    const leftEl = this.getTargetElement(this.leftTarget);
    const rightEl = this.getTargetElement(this.rightTarget);
    // istanbul ignore next (unreachable code)
    if (!leftEl || !rightEl) return;

    // Clamp split value between 1 and 100
    const splitValue = Math.max(1, Math.min(100, this.defaultSplit));
    const leftPercent = splitValue;
    const rightPercent = 100 - splitValue;

    if (this.orientation === 'horizontal') {
      // Set width percentages for horizontal layout
      leftEl.style.width = `${leftPercent}%`;
      rightEl.style.width = `${rightPercent}%`;
      // Prevent panels from shrinking below their set percentage
      leftEl.style.flexShrink = '0';
      rightEl.style.flexShrink = '0';
    } else {
      // Set height percentages for vertical layout
      leftEl.style.height = `${leftPercent}%`;
      rightEl.style.height = `${rightPercent}%`;
      // Prevent panels from shrinking below their set percentage
      leftEl.style.flexShrink = '0';
      rightEl.style.flexShrink = '0';
    }
  }

  private setupDragHandlers() {
    // Mouse and touch events
    this.el.addEventListener('mousedown', this.handleMouseDown);
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);

    // Touch events for mobile support
    this.el.addEventListener(
      'touchstart',
      this.handleTouchStart,
      this.nonPassiveListenerOptions
    );
    document.addEventListener(
      'touchmove',
      this.handleTouchMove,
      this.nonPassiveListenerOptions
    );
    document.addEventListener('touchend', this.handleTouchEnd);

    // Keyboard navigation
    this.el.addEventListener('keydown', this.handleKeyDown);
  }

  private getTargetElement(
    target: string | HTMLElement | undefined
  ): HTMLElement | null {
    if (!target) return null;
    if (typeof target === 'string') {
      return document.querySelector(target) as HTMLElement;
    }
    return target;
  }

  private startDrag(clientX: number, clientY: number) {
    this.isDragging = true;
    this.startPos = this.orientation === 'horizontal' ? clientX : clientY;

    const leftEl = this.getTargetElement(this.leftTarget);
    const rightEl = this.getTargetElement(this.rightTarget);

    if (leftEl) {
      this.startLeftSize =
        this.orientation === 'horizontal'
          ? leftEl.offsetWidth
          : leftEl.offsetHeight;
    } else {
      this.startLeftSize = 0;
    }

    if (rightEl) {
      this.startRightSize =
        this.orientation === 'horizontal'
          ? rightEl.offsetWidth
          : rightEl.offsetHeight;
    } else {
      this.startRightSize = 0;
    }

    this.previousBodyCursor = document.body.style.cursor;
    this.previousBodyUserSelect = document.body.style.userSelect;
    document.body.style.cursor =
      this.orientation === 'horizontal' ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';
  }

  private drag(clientX: number, clientY: number) {
    const currentPos = this.orientation === 'horizontal' ? clientX : clientY;
    const delta = currentPos - this.startPos;

    const leftEl = this.getTargetElement(this.leftTarget);
    const rightEl = this.getTargetElement(this.rightTarget);
    const clampedDelta = this.clampDelta(
      delta,
      leftEl,
      rightEl,
      this.startLeftSize,
      this.startRightSize
    );

    if (leftEl && this.orientation === 'horizontal') {
      leftEl.style.width = `${this.startLeftSize + clampedDelta}px`;
    } else if (leftEl && this.orientation === 'vertical') {
      leftEl.style.height = `${this.startLeftSize + clampedDelta}px`;
    }

    if (rightEl && this.orientation === 'horizontal') {
      rightEl.style.width = `${this.startRightSize - clampedDelta}px`;
    } else if (rightEl && this.orientation === 'vertical') {
      rightEl.style.height = `${this.startRightSize - clampedDelta}px`;
    }
  }

  private endDrag() {
    this.isDragging = false;
    document.body.style.cursor = this.previousBodyCursor ?? '';
    document.body.style.userSelect = this.previousBodyUserSelect ?? '';
    this.previousBodyCursor = null;
    this.previousBodyUserSelect = null;
  }

  private getMinSize(
    target: HTMLElement,
    axis: 'horizontal' | 'vertical'
  ): number {
    const computedStyle = getComputedStyle(target);
    const value =
      axis === 'horizontal' ? computedStyle.minWidth : computedStyle.minHeight;
    const parsed = parseFloat(value);
    // istanbul ignore next (unreachable code)
    return Number.isNaN(parsed) ? 0 : parsed;
  }

  private clampDelta(
    delta: number,
    leftEl: HTMLElement | null,
    rightEl: HTMLElement | null,
    leftSize: number,
    rightSize: number
  ): number {
    let minDelta = Number.NEGATIVE_INFINITY;
    let maxDelta = Number.POSITIVE_INFINITY;
    const axis = this.orientation === 'vertical' ? 'vertical' : 'horizontal';

    if (leftEl) {
      const minLeft = this.getMinSize(leftEl, axis);
      minDelta = Math.max(minDelta, minLeft - leftSize);
    }

    if (rightEl) {
      const minRight = this.getMinSize(rightEl, axis);
      maxDelta = Math.min(maxDelta, rightSize - minRight);
    }

    return Math.min(Math.max(delta, minDelta), maxDelta);
  }

  disconnectedCallback() {
    // Determine the target element for removing event listeners
    this.el.removeEventListener('mousedown', this.handleMouseDown);
    this.el.removeEventListener(
      'touchstart',
      this.handleTouchStart,
      this.nonPassiveListenerOptions
    );
    this.el.removeEventListener('keydown', this.handleKeyDown);

    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    document.removeEventListener(
      'touchmove',
      this.handleTouchMove,
      this.nonPassiveListenerOptions
    );
    document.removeEventListener('touchend', this.handleTouchEnd);
  }

  private getClasses(): string {
    const classList = ['modus-wc-handle-container'];

    const propClasses = convertPropsToClasses({
      orientation: this.orientation,
      size: this.size,
      type: this.type,
      density: this.density,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private renderBarHandle() {
    return <div class="modus-wc-handle-bar"></div>;
  }

  private renderButtonHandle() {
    const iconName =
      this.orientation === 'vertical' ? 'drag_vertical' : 'drag_horizontal';

    return (
      <div class="modus-wc-handle-button-wrapper">
        <modus-wc-button
          size="md"
          color="tertiary"
          variant="filled"
          shape="circle"
          aria-orientation={this.orientation}
          role="separator"
        >
          <modus-wc-icon name={iconName} size="xs"></modus-wc-icon>
        </modus-wc-button>
      </div>
    );
  }

  render() {
    return (
      <Host
        class={this.getClasses()}
        role={this.type === 'bar' ? 'separator' : undefined}
        tabIndex={0}
        aria-orientation={this.type === 'bar' ? this.orientation : undefined}
        {...this.inheritedAttributes}
      >
        {this.type === 'bar'
          ? this.renderBarHandle()
          : this.renderButtonHandle()}
      </Host>
    );
  }
}
