import {
  Component,
  Element,
  EventEmitter,
  h,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';

@Component({
  tag: 'modus-wc-side-navigation-item',
  styleUrl: 'modus-wc-side-navigation-item.scss',
  shadow: true,
})
export class ModusWcSideNavigationItem {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** (optional) The selected state of the side navigation item. */
  @Prop({ mutable: true, reflect: true }) selected = false;

  /** (optional) Disables item selection. */
  @Prop({ mutable: true, reflect: true }) disableSelection = false;

  /** Whether the side navigation is expanded. */
  @Prop({ mutable: true, reflect: true }) expanded = false;

  /** (optional) The disabled state of side navigation panel item. */
  @Prop() disabled = false;

  /** An event that fires when mouse click or `Enter` key press on an item.  */
  @StencilEvent() sideNavItemClicked!: EventEmitter<{
    id: string;
    selected: boolean;
  }>;

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleClick();
    }
  }

  handleClick() {
    if (this.disabled) return;

    this.selected = this.disableSelection ? this.selected : !this.selected;
    this.sideNavItemClicked.emit({
      id: this.el.id,
      selected: this.selected,
    });
  }

  render() {
    const classes = {
      'side-nav-item': true,
      expanded: this.expanded,
      selected: this.selected,
    };

    return (
      <li
        class={classes}
        tabIndex={0}
        role="menuitem"
        onClick={() => this.handleClick()}
        onKeyDown={(e) => this.handleKeyDown(e)}
      >
        <div class="menu-icon">
          <slot name="menu-icon"></slot>
        </div>

        <div class="menu-label">
          <slot name="menu-label"></slot>
        </div>
      </li>
    );
  }
}
