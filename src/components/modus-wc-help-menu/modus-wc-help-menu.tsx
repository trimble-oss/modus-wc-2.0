import {
  Component,
  Element,
  EventEmitter,
  forceUpdate,
  h,
  Host,
  Listen,
  Method,
  State,
  Event as StencilEvent,
} from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import { ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

interface PanelFrame {
  /** Position of the opened item among its level's items; `value`/`label` are not unique. */
  index: number;
  label: string;
}

/** Root and per-panel item lists, built in one pass over the light DOM. */
interface MenuIndex {
  root: HTMLElement[];
  byPanel: Map<HTMLElement, HTMLElement[]>;
}

/** Everything the next render needs to finish a navigation. */
interface PanelTransition {
  direction: 'forward' | 'back';
  /** `back` focuses the Back row; an element focuses that item's row (the one that was closed). */
  focus: 'back' | HTMLElement;
  fromHeight?: number;
}

/**
 * A drill-down menu used inside a dropdown. Items that contain a `slot="panel"`
 * menu show a right-pointing chevron and slide to that panel. A Back control
 * and the parent item's label (without its icon) head each nested panel.
 */
@Component({
  tag: 'modus-wc-help-menu',
  styleUrl: 'modus-wc-help-menu.scss',
  shadow: false,
})
export class ModusWcHelpMenu {
  private inheritedAttributes: Attributes = {};
  private animations: Animation[] = [];
  private observer?: MutationObserver;
  /** The last transition whose motion and focus ran; re-renders must not replay it. */
  private appliedTransition?: PanelTransition;
  /** `reset()` callers waiting for the next completed render. */
  private renderWaiters: (() => void)[] = [];
  /**
   * Incremented per focus request. `applyFocus` awaits the target item's render, so a
   * quick second navigation could otherwise be overtaken by the stale earlier request.
   */
  private focusToken = 0;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  @State() private stack: PanelFrame[] = [];

  /** Set together with `stack`, so the render that shows a panel also carries its motion and focus. */
  @State() private transition?: PanelTransition;

  @State() private announcement = '';

  @State() private surfaceMenuSize: ModusSize = 'md';

  /** Emitted when the visible panel changes. */
  @StencilEvent() panelChange!: EventEmitter<{
    depth: number;
    label: string;
  }>;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);

    const surfaceMenu = this.el.closest('modus-wc-menu') as
      | (HTMLElement & { size?: ModusSize })
      | null;
    if (surfaceMenu?.size) {
      this.surfaceMenuSize = surfaceMenu.size;
    }
  }

  componentDidLoad() {
    // Consumers may re-render slotted items and reset what syncPanels wrote. Rather than
    // writing here, request a render so componentDidRender stays the only writer.
    // Writes are diffed, so the observer settles once the DOM matches the stack.
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(() => forceUpdate(this));
      this.observer.observe(this.el, {
        attributeFilter: ['hidden', 'inert'],
        attributes: true,
        childList: true,
        subtree: true,
      });
    }
  }

  disconnectedCallback() {
    this.observer?.disconnect();
    this.observer = undefined;
    // A detached host never renders again, so pending reset() calls settle here.
    this.flushRenderWaiters();
  }

  private flushRenderWaiters() {
    const waiters = this.renderWaiters;
    this.renderWaiters = [];
    waiters.forEach((resolve) => resolve());
  }

  componentDidRender() {
    this.syncPanels();

    const transition = this.transition;
    if (transition && transition !== this.appliedTransition) {
      this.appliedTransition = transition;
      this.runMotion(transition);
      void this.applyFocus(transition.focus);
    }

    this.flushRenderWaiters();
  }

  /**
   * Clears the panel stack and returns to the root items. Resolves after the root
   * level has rendered.
   */
  @Method()
  async reset(): Promise<void> {
    if (!this.stack.length) return;

    this.stopMotion();
    this.transition = undefined;
    const rendered = new Promise<void>((resolve) =>
      this.renderWaiters.push(resolve)
    );
    this.announcement = '';
    this.stack = [];
    this.panelChange.emit({ depth: 0, label: '' });
    await rendered;
  }

  @Listen('itemSelect')
  handleItemSelect(event: Event) {
    this.clearSelected(event.target);
    // Menu items re-render on select; re-render so componentDidRender reconciles them.
    forceUpdate(this);
  }

  @Listen('click', { capture: true })
  handleClick(event: MouseEvent) {
    const item = this.drillItemFromEvent(event);
    if (!item) return;

    event.preventDefault();
    event.stopPropagation();
    this.openItem(item);
  }

  @Listen('keydown', { capture: true })
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' || event.key === 'ArrowLeft') {
      if (!this.stack.length) return;
      event.preventDefault();
      event.stopPropagation();
      this.pop();
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      event.stopPropagation();
      this.moveFocus(event.key === 'ArrowDown' ? 1 : -1);
      return;
    }

    if (event.key === 'Home' || event.key === 'End') {
      const items = this.focusables();
      if (!items.length) return;
      event.preventDefault();
      event.stopPropagation();
      items[event.key === 'Home' ? 0 : items.length - 1].focus();
      return;
    }

    if (event.key === 'Tab') {
      // Tab walks the rows and wraps at either end, like the arrow keys; Escape closes.
      if (this.focusedIndex(this.focusables()) === -1) return;
      event.preventDefault();
      event.stopPropagation();
      this.moveFocus(event.shiftKey ? -1 : 1);
      return;
    }

    if (
      event.key === 'Enter' ||
      event.key === ' ' ||
      event.key === 'ArrowRight'
    ) {
      const item = this.drillItemFromEvent(event);
      if (!item) return;
      event.preventDefault();
      event.stopPropagation();
      this.openItem(item);
    }
  }

  /** Navigation rows never keep a selected (active) state. */
  private clearSelected(target: EventTarget | null) {
    const item = target as (HTMLElement & { selected?: boolean }) | null;
    if (item?.tagName === 'MODUS-WC-MENU-ITEM' && item.selected) {
      item.selected = false;
    }
  }

  /**
   * Focuses the target row once its menu item has rendered. The Back item is created by
   * the same render that opens a panel, so its row does not exist yet when this host renders.
   */
  private async applyFocus(focus: PanelTransition['focus']) {
    const item =
      focus === 'back'
        ? this.el.querySelector<HTMLElement>(
            'modus-wc-menu-item.modus-wc-help-menu-back'
          )
        : focus;
    if (!item) return;

    // A newer navigation may start while this item is still rendering; only the latest wins.
    const token = ++this.focusToken;
    await (
      item as HTMLElement & {
        componentOnReady?: () => Promise<unknown>;
      }
    ).componentOnReady?.();

    if (token !== this.focusToken) return;

    const row = this.rowLi(item);
    if (row && this.el.contains(row)) row.focus();
  }

  private isHtmlElement(node: Element | null): node is HTMLElement {
    return !!node && 'hidden' in node;
  }

  private drillItemFromEvent(event: Event): HTMLElement | null {
    const target = event.target as Element | null;
    if (!target || typeof target.closest !== 'function') return null;

    const item = target.closest('modus-wc-menu-item');
    if (!item || !this.el.contains(item)) return null;

    const index = this.buildIndex();
    if (!this.isDrill(item, index)) return null;
    if (!this.levelItems(index).includes(item)) return null;
    if (this.isInsidePanel(target as HTMLElement, item)) return null;

    return item;
  }

  private focusables(index = this.buildIndex()): HTMLElement[] {
    const list: HTMLElement[] = [];
    const back = this.el.querySelector<HTMLElement>(
      'modus-wc-menu-item.modus-wc-help-menu-back'
    );
    const backRow = back && this.rowLi(back);
    if (backRow) list.push(backRow);

    this.levelItems(index)
      .filter(
        (item) => !(item as HTMLElement & { disabled?: boolean }).disabled
      )
      .forEach((item) => {
        const li = this.rowLi(item);
        if (li) list.push(li);
      });

    return list;
  }

  private focusedIndex(items: HTMLElement[]): number {
    const current = document.activeElement as HTMLElement | null;
    return items.findIndex(
      (item) => item === current || item.contains(current)
    );
  }

  private directPanel(item: HTMLElement): HTMLElement | null {
    const panel = Array.from(item.children).find(
      (child) => child.getAttribute('slot') === 'panel'
    );
    return panel ? (panel as HTMLElement) : null;
  }

  private buildIndex(): MenuIndex {
    const index: MenuIndex = { root: [], byPanel: new Map() };
    this.el.querySelectorAll('modus-wc-menu-item').forEach((item) => {
      if (item.classList.contains('modus-wc-help-menu-back')) return;
      const panel = this.owningPanel(item);
      if (!panel) {
        index.root.push(item);
        return;
      }
      const items = index.byPanel.get(panel);
      if (items) items.push(item);
      else index.byPanel.set(panel, [item]);
    });
    return index;
  }

  private isDrill(item: HTMLElement, index: MenuIndex): boolean {
    const host = item as HTMLElement & { hasSubmenu?: boolean };
    if (host.hasSubmenu) return false;
    const panel = this.directPanel(item);
    return !!panel && !!index.byPanel.get(panel)?.length;
  }

  /** Resolves drill path from stack state so DOM updates cannot leave stored nodes stale. */
  private stackElements(index = this.buildIndex()): HTMLElement[] {
    const path: HTMLElement[] = [];
    let level = index.root;

    for (const frame of this.stack) {
      const item = level[frame.index];
      if (!item) break;
      path.push(item);
      const panel = this.directPanel(item);
      level = (panel && index.byPanel.get(panel)) || [];
    }

    return path;
  }

  private levelItems(
    index: MenuIndex,
    path = this.stackElements(index)
  ): HTMLElement[] {
    const active = path[path.length - 1];
    if (!active) return index.root;
    const panel = this.directPanel(active);
    return (panel && index.byPanel.get(panel)) || [];
  }

  private isInsidePanel(node: HTMLElement, item: HTMLElement): boolean {
    let current = node.parentElement;
    while (current && current !== item) {
      if (current.getAttribute('slot') === 'panel') return true;
      current = current.parentElement;
    }
    return false;
  }

  private owningPanel(item: HTMLElement): HTMLElement | null {
    let current = item.parentElement;
    while (current && current !== this.el) {
      if (current.getAttribute('slot') === 'panel') return current;
      current = current.parentElement;
    }
    return null;
  }

  private moveFocus(direction: 1 | -1) {
    const items = this.focusables();
    if (!items.length) return;

    const index = this.focusedIndex(items);
    const next =
      index === -1
        ? items[direction === 1 ? 0 : items.length - 1]
        : items[(index + direction + items.length) % items.length];
    next.focus();
  }

  private listEl(): HTMLElement | null {
    return this.el.querySelector(
      'modus-wc-menu.modus-wc-help-menu-list > .modus-wc-menu'
    );
  }

  private trackEl(): HTMLElement | null {
    return this.el.querySelector('.modus-wc-help-menu-track');
  }

  private canAnimate(list: HTMLElement | null): list is HTMLElement {
    if (!list || typeof list.animate !== 'function') return false;
    return !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  }

  private stopMotion() {
    const running = this.animations;
    this.animations = [];
    running.forEach((animation) => animation.cancel());
  }

  /** Slides the new panel in and eases the track from the previous panel's height. */
  private runMotion({ direction, fromHeight }: PanelTransition) {
    const list = this.listEl();
    const track = this.trackEl();
    if (!track || !this.canAnimate(list)) return;

    const sign = direction === 'forward' ? 1 : -1;
    const distance = Math.max(Math.round(list.offsetWidth * 0.6), 12);
    const timing: KeyframeAnimationOptions = {
      duration: 300,
      easing: 'cubic-bezier(0.2, 0, 0, 1)',
    };

    this.trackAnimation(
      list.animate(
        [
          { opacity: 0, transform: `translateX(${sign * distance}px)` },
          { opacity: 1, transform: 'translateX(0)' },
        ],
        timing
      )
    );

    if (typeof requestAnimationFrame === 'undefined') return;
    // Measured a frame later: nested menu items (e.g. Back) render after this host.
    requestAnimationFrame(() => {
      const height = track.offsetHeight;
      if (
        !fromHeight ||
        fromHeight === height ||
        typeof track.animate !== 'function'
      ) {
        return;
      }
      this.trackAnimation(
        track.animate(
          [{ height: `${fromHeight}px` }, { height: `${height}px` }],
          timing
        )
      );
    });
  }

  private trackAnimation(animation?: Animation): Animation | undefined {
    if (animation) this.animations.push(animation);
    return animation;
  }

  private navigate(
    stack: PanelFrame[],
    direction: PanelTransition['direction'],
    focus: PanelTransition['focus'],
    announcement: string
  ) {
    this.stopMotion();
    this.transition = {
      direction,
      focus,
      fromHeight: this.trackEl()?.offsetHeight,
    };
    this.announcement = announcement;
    this.stack = stack;

    const top = stack[stack.length - 1];
    this.panelChange.emit({ depth: stack.length, label: top?.label ?? '' });
  }

  private openItem(item: HTMLElement) {
    const index = this.buildIndex();
    if (!this.isDrill(item, index)) return;

    const position = this.levelItems(index).indexOf(item);
    if (position === -1) return;

    const label = (item as HTMLElement & { label?: string }).label ?? '';
    this.navigate(
      [...this.stack, { index: position, label }],
      'forward',
      'back',
      label
    );
  }

  private pop() {
    const path = this.stackElements();
    const closing = path[path.length - 1];
    const nextStack = this.stack.slice(0, -1);
    const top = nextStack[nextStack.length - 1];
    this.navigate(
      nextStack,
      'back',
      closing ?? 'back',
      top ? top.label : 'Back'
    );
  }

  private rowLi(item: HTMLElement): HTMLElement | null {
    const li = Array.from(item.children).find(
      (child) => child.tagName === 'LI'
    );
    return li && this.isHtmlElement(li) ? li : null;
  }

  private rowButton(item: HTMLElement): HTMLButtonElement | null {
    const li = this.rowLi(item);
    const button = li
      ? Array.from(li.children).find((child) => child.tagName === 'BUTTON')
      : null;
    return button?.tagName === 'BUTTON' ? (button as HTMLButtonElement) : null;
  }

  private setAttr(node: HTMLElement, name: string, value: string | null) {
    if (node.getAttribute(name) === value) return;
    if (value === null) node.removeAttribute(name);
    else node.setAttribute(name, value);
  }

  private setClass(node: HTMLElement, name: string, on: boolean) {
    if (node.classList.contains(name) === on) return;
    if (on) node.classList.add(name);
    else node.classList.remove(name);
  }

  private setShown(node: HTMLElement, show: boolean) {
    if (node.hidden === show) node.hidden = !show;
    this.setAttr(node, 'inert', show ? null : '');
  }

  private syncAria(item: HTMLElement, isDrill: boolean, expanded: boolean) {
    const li = this.rowLi(item);
    if (!li || !isDrill) return;

    this.setAttr(li, 'aria-haspopup', 'menu');
    this.setAttr(li, 'aria-expanded', expanded ? 'true' : 'false');
  }

  private syncChevron(item: HTMLElement, isDrill: boolean) {
    const button = this.rowButton(item);
    if (!button) return;

    const existing = button.querySelector('.modus-wc-help-menu-chevron');
    if (!isDrill) {
      existing?.remove();
      return;
    }

    if (existing) return;

    const icon = document.createElement('modus-wc-icon');
    icon.className = 'modus-wc-help-menu-chevron';
    icon.setAttribute('decorative', '');
    icon.setAttribute('name', 'chevron_right');
    icon.setAttribute('size', 'sm');
    button.appendChild(icon);
  }

  /**
   * Applies stack-driven visibility, ARIA, and chevrons to slotted items. Slotted
   * markup is consumer-owned, so this cannot live in JSX. Called only from
   * componentDidRender, so the DOM always reflects the stack of the latest render.
   */
  private syncPanels() {
    const index = this.buildIndex();
    const path = this.stackElements(index);
    const stackSet = new Set(path);
    const visible = new Set(this.levelItems(index, path));
    const openPanels = new Set(path.map((item) => this.directPanel(item)));

    this.el.querySelectorAll('[slot="panel"]').forEach((panel) => {
      if (this.isHtmlElement(panel)) {
        this.setShown(panel, openPanels.has(panel));
      }
    });

    const levelItems = Array.from(visible);
    // When drilled, the Back row is always the first visible row.
    const firstItem = path.length ? undefined : levelItems[0];
    const lastItem = levelItems[levelItems.length - 1];

    const items = [index.root, ...index.byPanel.values()].flat();
    items.forEach((item) => {
      const onStack = stackSet.has(item);
      this.setShown(item, visible.has(item) || onStack);
      this.setClass(item, 'modus-wc-help-menu-item-first', item === firstItem);
      this.setClass(item, 'modus-wc-help-menu-item-last', item === lastItem);

      this.setClass(item, 'modus-wc-help-menu-stack-parent', onStack);

      const isDrill = this.isDrill(item, index);
      this.syncChevron(item, isDrill);
      this.syncAria(item, isDrill, onStack);
    });
  }

  private handleBack = (event: Event) => {
    event.stopPropagation();
    // Stopped before the host listener, and the Back row is reused by the parent panel.
    this.clearSelected(event.currentTarget);
    this.pop();
  };

  render() {
    const title = this.stack.length
      ? this.stack[this.stack.length - 1].label
      : '';

    return (
      <Host
        class={{
          'modus-wc-help-menu--drilled': this.stack.length > 0,
        }}
        {...this.inheritedAttributes}
      >
        <div class="modus-wc-help-menu">
          <div aria-live="polite" class="modus-wc-help-menu-status">
            {this.announcement}
          </div>
          <div class="modus-wc-help-menu-track">
            <modus-wc-menu
              class="modus-wc-help-menu-list"
              size={this.surfaceMenuSize}
            >
              {this.stack.length > 0 && (
                <modus-wc-menu-item
                  class="modus-wc-help-menu-back modus-wc-help-menu-item-first"
                  label="Back"
                  onItemSelect={this.handleBack}
                  size={this.surfaceMenuSize}
                  value="back"
                >
                  <modus-wc-icon
                    decorative
                    name="chevron_left"
                    size="sm"
                    slot="start-icon"
                  ></modus-wc-icon>
                </modus-wc-menu-item>
              )}
              {this.stack.length > 0 && (
                <li class="modus-wc-help-menu-title-item" role="presentation">
                  <div
                    aria-level="2"
                    class="modus-wc-help-menu-title"
                    role="heading"
                  >
                    {title}
                  </div>
                </li>
              )}
              <slot />
            </modus-wc-menu>
          </div>
        </div>
      </Host>
    );
  }
}
