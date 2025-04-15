import { Component, Element, h, Host, Prop } from '@stencil/core';
import { AppsSolidIcon } from '../../icons/apps-solid.icon';
import { HelpSolidIcon } from '../../icons/help-solid.icon';
import { MenuSolidIcon } from '../../icons/menu-solid.icon';
import { NotificationsSolidIcon } from '../../icons/notifications-solid.icon';
import { TrimbleLogoFullIcon } from '../../icons/trimble-logo-full.icon';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable navbar component used for top level navigation of all Trimble applications.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-navbar',
  styleUrl: 'modus-wc-navbar.scss',
  shadow: false,
})
export class ModusWcNavbar {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the host element. */
  @Prop() customClass?: string = '';

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = [''];

    // The order CSS classes are added matters to CSS specificity
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host class={this.getClasses()} {...this.inheritedAttributes}>
        <modus-wc-toolbar>
          <div slot="start">
            <modus-wc-button shape="square" size="xs" variant="borderless">
              <MenuSolidIcon />
            </modus-wc-button>
            <modus-wc-button customClass="logo" size="xs" variant="borderless">
              <TrimbleLogoFullIcon />
            </modus-wc-button>
            <slot name="start" />
          </div>

          <div slot="center">
            <slot name="center" />
          </div>

          <div slot="end">
            <slot name="end" />
            <modus-wc-button shape="square" size="xs" variant="borderless">
              <NotificationsSolidIcon />
            </modus-wc-button>
            <modus-wc-button shape="square" size="xs" variant="borderless">
              <HelpSolidIcon />
            </modus-wc-button>
            <modus-wc-button shape="square" size="xs" variant="borderless">
              <AppsSolidIcon />
            </modus-wc-button>
          </div>
        </modus-wc-toolbar>
      </Host>
    );
  }
}
