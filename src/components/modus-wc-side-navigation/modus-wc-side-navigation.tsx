import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-side-navigation.tailwind';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable side navigation component for organizing primary navigation and content areas in an application.
 */
@Component({
  tag: 'modus-wc-side-navigation',
  styleUrl: 'modus-wc-side-navigation.scss',
  shadow: false,
})
export class ModusWcSideNavigation {
  private inheritedAttributes: Attributes = {};
  private minWidth = '4rem';
  private navRef?: HTMLElement;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Whether the side navigation should collapse when clicking outside of it. */
  @Prop() collapseOnClickOutside = true;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** Whether the side navigation is expanded. */
  @Prop({ mutable: true, reflect: true }) expanded = false;

  /** Maximum width of the side navigation panel in an expanded state. */
  @Prop() maxWidth = '256px';

  /** Mode to make side navigation either overlay or push the content for the selector specified in targetContent */
  @Prop() mode: 'overlay' | 'push' = 'overlay';

  /** (optional) Specify the selector for the page's content for which paddings and margins will be set by side navigation based on the mode. */
  @Prop() targetContent: string = '';

  /** Event emitted when the expanded state changes (expanded/collapsed). */
  @StencilEvent() expandedChange!: EventEmitter<boolean>;

  @Watch('expanded')
  handleExpandedChange() {
    this.setTargetContentMargin(this.expanded, this.mode, this.targetContent);
    this.expandedChange.emit(this.expanded);
  }

  @Watch('mode')
  handleModeChange(mode) {
    this.setTargetContentMargin(this.expanded, mode, this.targetContent);
  }

  @Watch('targetContent')
  handleTargetContentChange(target) {
    this.setTargetContentMargin(this.expanded, this.mode, target);
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  connectedCallback() {
    if (this.collapseOnClickOutside) {
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  private getClasses(): string {
    const classList = ['modus-wc-side-navigation'];

    const propClasses = convertPropsToClasses({
      expanded: this.expanded,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleClickOutside = (event: MouseEvent) => {
    if (!this.expanded || !this.collapseOnClickOutside || !this.navRef) return;

    const path = event.composedPath ? event.composedPath() : [event.target];
    if (!path.includes(this.navRef)) {
      this.expanded = false;
    }
  };

  private setTargetContentMargin(isExpanded, mode, target) {
    const content = document.querySelector(target);
    if (content && 'style' in content) {
      (content as HTMLElement).style.marginLeft =
        isExpanded && mode === 'push' ? this.maxWidth : this.minWidth;
    }
  }

  render() {
    return (
      <Host>
        <nav
          {...this.inheritedAttributes}
          class={this.getClasses()}
          ref={(el) => (this.navRef = el)}
          style={{ width: this.expanded ? this.maxWidth : this.minWidth }}
        >
          <div class="side-navigation-content">
            <slot />
          </div>
        </nav>
      </Host>
    );
  }
}
