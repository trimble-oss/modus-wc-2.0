import { Component, Element, h, Host, Prop, State } from '@stencil/core';
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

  /** The type of handle to display. */
  @Prop() type?: 'bar' | 'button' = 'bar';

  /** Internal state for dragging */
  @State() private isDragging: boolean = false;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    this.setupDragHandlers();
  }

  private setupDragHandlers() {
    // Mouse and touch events
    this.el.addEventListener(
      'mousedown',
      this.handleMouseDown.bind(this) as EventListener
    );
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    document.addEventListener('mouseup', this.handleMouseUp.bind(this));

    // Touch events for mobile support
    this.el.addEventListener(
      'touchstart',
      this.handleTouchStart.bind(this) as EventListener
    );
    document.addEventListener('touchmove', this.handleTouchMove.bind(this));
    document.addEventListener('touchend', this.handleTouchEnd.bind(this));

    // Keyboard navigation
    this.el.addEventListener(
      'keydown',
      this.handleKeyDown.bind(this) as EventListener
    );
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

  private handleMouseDown(e: MouseEvent) {
    e.preventDefault();
    this.startDrag(e.clientX, e.clientY);
  }

  private handleTouchStart(e: TouchEvent) {
    e.preventDefault();
    const touch = e.touches[0];
    this.startDrag(touch.clientX, touch.clientY);
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
    }

    if (rightEl) {
      this.startRightSize =
        this.orientation === 'horizontal'
          ? rightEl.offsetWidth
          : rightEl.offsetHeight;
    }

    document.body.style.cursor =
      this.orientation === 'horizontal' ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';
  }

  private handleMouseMove(e: MouseEvent) {
    if (!this.isDragging) return;
    e.preventDefault();
    this.drag(e.clientX, e.clientY);
  }

  private handleTouchMove(e: TouchEvent) {
    if (!this.isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    this.drag(touch.clientX, touch.clientY);
  }

  private drag(clientX: number, clientY: number) {
    const currentPos = this.orientation === 'horizontal' ? clientX : clientY;
    const delta = currentPos - this.startPos;

    const leftEl = this.getTargetElement(this.leftTarget);
    const rightEl = this.getTargetElement(this.rightTarget);

    if (leftEl && this.orientation === 'horizontal') {
      leftEl.style.width = `${this.startLeftSize + delta}px`;
    } else if (leftEl && this.orientation === 'vertical') {
      leftEl.style.height = `${this.startLeftSize + delta}px`;
    }

    if (rightEl && this.orientation === 'horizontal') {
      rightEl.style.width = `${this.startRightSize - delta}px`;
    } else if (rightEl && this.orientation === 'vertical') {
      rightEl.style.height = `${this.startRightSize - delta}px`;
    }
  }

  private handleMouseUp() {
    this.endDrag();
  }

  private handleTouchEnd() {
    this.endDrag();
  }

  private endDrag() {
    this.isDragging = false;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }

  private handleKeyDown(e: KeyboardEvent) {
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

    if (leftEl && this.orientation === 'vertical') {
      const newHeight = leftEl.offsetHeight + delta;
      leftEl.style.height = `${newHeight}px`;
    } else if (leftEl && this.orientation === 'horizontal') {
      const newWidth = leftEl.offsetWidth + delta;
      leftEl.style.width = `${newWidth}px`;
    }

    if (rightEl && this.orientation === 'vertical') {
      const newHeight = rightEl.offsetHeight - delta;
      rightEl.style.height = `${newHeight}px`;
    } else if (rightEl && this.orientation === 'horizontal') {
      const newWidth = rightEl.offsetWidth - delta;
      rightEl.style.width = `${newWidth}px`;
    }
  }

  disconnectedCallback() {
    // Determine the target element for removing event listeners
    this.el.removeEventListener(
      'mousedown',
      this.handleMouseDown.bind(this) as EventListener
    );
    this.el.removeEventListener(
      'touchstart',
      this.handleTouchStart.bind(this) as EventListener
    );
    this.el.removeEventListener(
      'keydown',
      this.handleKeyDown.bind(this) as EventListener
    );

    document.removeEventListener('mousemove', this.handleMouseMove.bind(this));
    document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
    document.removeEventListener('touchmove', this.handleTouchMove.bind(this));
    document.removeEventListener('touchend', this.handleTouchEnd.bind(this));
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
        tabIndex={this.type === 'bar' ? 0 : undefined}
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
