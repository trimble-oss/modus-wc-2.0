import {
  Component,
  Element,
  EventEmitter,
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
  value: string;
  label: string;
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
  private pendingFocus: 'back' | 'root' | null = null;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  @State() private stack: PanelFrame[] = [];

  @State() private motion: 'forward' | 'back' | 'none' = 'none';

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
    this.scheduleSyncPanels();
  }

  componentDidRender() {
    this.scheduleSyncPanels();
    this.applyPendingFocus();
  }

  /**
   * Clears the panel stack and returns to the root items.
   */
  @Method()
  reset(): Promise<void> {
    if (this.stack.length) {
      this.motion = 'none';
      this.announcement = '';
      this.stack = [];
      this.panelChange.emit({ depth: 0, label: '' });
    }
    return Promise.resolve();
  }

  @Listen('itemSelect')
  handleItemSelect() {
    // Menu items re-render on select; reconcile visibility without a drill change.
    this.scheduleSyncPanels();
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

    if (event.key === 'Enter' || event.key === ' ') {
      const item = this.drillItemFromEvent(event);
      if (!item) return;
      event.preventDefault();
      event.stopPropagation();
      this.openItem(item);
    }
  }

  private applyPendingFocus() {
    if (!this.pendingFocus) return;
    const target =
      this.pendingFocus === 'back'
        ? this.el.querySelector('.modus-wc-help-menu-back button')
        : this.focusables()[0];
    this.pendingFocus = null;
    const node = target ?? null;
    if (this.isHtmlElement(node)) node.focus();
  }

  private isHtmlElement(node: Element | null): node is HTMLElement {
    return !!node && 'hidden' in node;
  }

  private drillItemFromEvent(event: Event): HTMLElement | null {
    const target = event.target as Element | null;
    if (!target || typeof target.closest !== 'function') return null;

    const item = target.closest('modus-wc-menu-item');
    if (!item || !this.el.contains(item)) return null;
    if (!this.isDrill(item)) return null;
    if (!this.levelItems().includes(item)) return null;
    if (this.isInsidePanel(target as HTMLElement, item)) return null;

    return item;
  }

  private focusables(): HTMLElement[] {
    const list: HTMLElement[] = [];
    const back = this.el.querySelector('.modus-wc-help-menu-back button');
    if (this.isHtmlElement(back)) list.push(back);

    this.levelItems().forEach((item) => {
      const li = item.querySelector('li');
      if (this.isHtmlElement(li)) list.push(li);
    });

    return list;
  }

  private directPanel(item: HTMLElement): HTMLElement | null {
    const panel = Array.from(item.children).find(
      (child) => child.getAttribute('slot') === 'panel'
    );
    return panel ? (panel as HTMLElement) : null;
  }

  private panelChildItems(panel: HTMLElement): HTMLElement[] {
    return Array.from(panel.querySelectorAll('modus-wc-menu-item')).filter(
      (item) => this.owningPanel(item) === panel
    );
  }

  private isDrill(item: HTMLElement): boolean {
    const host = item as HTMLElement & { hasSubmenu?: boolean };
    if (host.hasSubmenu) return false;
    const panel = this.directPanel(item);
    if (!panel) return false;
    return this.panelChildItems(panel).length > 0;
  }

  private matchesFrame(item: HTMLElement, frame: PanelFrame): boolean {
    const host = item as HTMLElement & { label?: string; value?: string };
    return host.value === frame.value && host.label === frame.label;
  }

  private rootItems(): HTMLElement[] {
    return Array.from(this.el.querySelectorAll('modus-wc-menu-item')).filter(
      (item) =>
        !item.classList.contains('modus-wc-help-menu-back') &&
        this.owningPanel(item) === null
    );
  }

  /** Resolves drill path from stack state so DOM updates cannot desync stored nodes. */
  private stackElements(): HTMLElement[] {
    const path: HTMLElement[] = [];
    let panel: HTMLElement | null = null;

    for (const frame of this.stack) {
      const level = panel ? this.panelChildItems(panel) : this.rootItems();
      const item = level.find((candidate) =>
        this.matchesFrame(candidate, frame)
      );
      if (!item) break;
      path.push(item);
      panel = this.directPanel(item);
    }

    return path;
  }

  private openPanels(): Set<HTMLElement> {
    const panels = new Set<HTMLElement>();
    this.stackElements().forEach((item) => {
      const panel = this.directPanel(item);
      if (panel) panels.add(panel);
    });
    return panels;
  }

  private levelContainer(): HTMLElement | null {
    const path = this.stackElements();
    const active = path[path.length - 1];
    if (!active) return null;
    return this.directPanel(active);
  }

  private isInsidePanel(node: HTMLElement, item: HTMLElement): boolean {
    let current = node.parentElement;
    while (current && current !== item) {
      if (current.getAttribute('slot') === 'panel') return true;
      current = current.parentElement;
    }
    return false;
  }

  private levelItems(): HTMLElement[] {
    const panel = this.levelContainer();
    if (!panel) return this.rootItems();
    return this.panelChildItems(panel);
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

    const current = document.activeElement as HTMLElement | null;
    const index = items.findIndex(
      (item) => item === current || item.contains(current)
    );
    const next =
      index === -1
        ? items[direction === 1 ? 0 : items.length - 1]
        : items[(index + direction + items.length) % items.length];
    next.focus();
  }

  private openItem(item: HTMLElement) {
    if (!this.isDrill(item)) return;

    const host = item as HTMLElement & { label?: string; value?: string };
    const label = host.label ?? '';
    const value = host.value ?? '';

    this.motion = 'forward';
    this.announcement = label;
    this.pendingFocus = 'back';
    this.stack = [...this.stack, { value, label }];
    this.panelChange.emit({ depth: this.stack.length, label });
  }

  private pop() {
    const nextStack = this.stack.slice(0, -1);
    this.motion = 'back';
    this.pendingFocus = nextStack.length ? 'back' : 'root';
    this.announcement = nextStack.length
      ? nextStack[nextStack.length - 1].label
      : 'Back';
    this.stack = nextStack;
    this.panelChange.emit({
      depth: nextStack.length,
      label: nextStack.length ? nextStack[nextStack.length - 1].label : '',
    });
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

  private syncAria(item: HTMLElement, expanded: boolean) {
    const li = Array.from(item.children).find(
      (child) => child.tagName === 'LI'
    );
    if (!li || !this.isDrill(item)) return;

    li.setAttribute('aria-haspopup', 'menu');
    li.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  private scheduleSyncPanels() {
    this.syncPanels();

    if (typeof requestAnimationFrame === 'undefined') return;

    requestAnimationFrame(() => {
      this.syncPanels();
      requestAnimationFrame(() => this.syncPanels());
    });
  }

  private syncChevron(item: HTMLElement) {
    const button = this.rowButton(item);
    if (!button) return;

    const existing = button.querySelector('.modus-wc-help-menu-chevron');
    if (!this.isDrill(item)) {
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

  private syncPanels() {
    const items = Array.from(this.el.querySelectorAll('modus-wc-menu-item'));
    const panels = Array.from(this.el.querySelectorAll('[slot="panel"]'));
    const stackSet = new Set(this.stackElements());
    const openPanels = this.openPanels();
    const visible = new Set(this.levelItems());

    panels.forEach((panel) => {
      if (!this.isHtmlElement(panel)) return;
      const show = openPanels.has(panel);
      panel.hidden = !show;
      if (show) panel.removeAttribute('inert');
      else panel.setAttribute('inert', '');
    });

    items.forEach((item) => {
      if (item.classList.contains('modus-wc-help-menu-back')) return;

      const onStack = stackSet.has(item);
      const show = visible.has(item) || onStack;
      item.hidden = !show;
      if (show) item.removeAttribute('inert');
      else item.setAttribute('inert', '');

      if (onStack) {
        item.classList.add('modus-wc-help-menu-stack-parent');
      } else {
        item.classList.remove('modus-wc-help-menu-stack-parent');
      }

      this.syncChevron(item);
      this.syncAria(item, onStack);
    });
  }

  private handleBack = (event: Event) => {
    event.stopPropagation();
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
          {this.stack.length > 0 && (
            <div class="modus-wc-help-menu-header">
              <modus-wc-menu
                class="modus-wc-help-menu-header-menu"
                size={this.surfaceMenuSize}
              >
                <modus-wc-menu-item
                  class="modus-wc-help-menu-back"
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
              </modus-wc-menu>
              <div
                aria-level="2"
                class="modus-wc-help-menu-title"
                role="heading"
              >
                {title}
              </div>
            </div>
          )}
          <div
            class={{
              'modus-wc-help-menu-track': true,
              'modus-wc-help-menu-forward': this.motion === 'forward',
              'modus-wc-help-menu-back-motion': this.motion === 'back',
            }}
          >
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
