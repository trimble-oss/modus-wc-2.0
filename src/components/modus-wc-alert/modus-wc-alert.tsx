import {
  Component,
  Element,
  Event,
  EventEmitter,
  FunctionalComponent,
  h,
  Host,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-alert.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes } from '../utils';

let alertBodyContentIdSequence = 0;

/**
 * A customizable alert component used to inform the user about important events.
 *
 * The component supports `<slot>` elements for injecting custom content and buttons.
 */
@Component({
  tag: 'modus-wc-alert',
  styleUrl: 'modus-wc-alert.scss',
  shadow: false,
})
export class ModusWcAlert {
  private inheritedAttributes: Attributes = {};
  private expandableContentRef?: HTMLElement;
  private contentResizeObserver?: ResizeObserver;
  private readonly bodyContentId = `modus-wc-alert-body-${++alertBodyContentIdSequence}`;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The description of the alert. */
  @Prop() alertDescription?: string;

  /** The title of the alert. */
  @Prop() alertTitle!: string;

  /** Controls body display: full text (default) or expandable two-line preview with Show more. */
  @Prop() contentDisplayMode?: 'default' | 'expandable' = 'default';

  /** Custom CSS class to apply to the outer div element. */
  @Prop() customClass?: string = '';

  /** Time taken to dismiss the alert in milliseconds */
  @Prop() delay?: number;

  /** Whether to disable the icon */
  @Prop() disableIcon?: boolean = false;

  /** Whether the alert has a dismiss button */
  @Prop() dismissible?: boolean = false;

  /** The Modus icon to render. */
  @Prop() icon?: string;

  /** The variant of the alert. */
  @Prop() variant?: 'error' | 'info' | 'neutral' | 'success' | 'warning' =
    'info';

  /** An event that fires when the alert is dismissed */
  @Event() dismissClick!: EventEmitter;

  /** Fires when expandable body content is expanded or collapsed. */
  @Event() contentExpandedChange!: EventEmitter<{ expanded: boolean }>;

  @State() private isContentExpanded = false;

  @State() private isContentOverflowing = false;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    if (!this.el.hasAttribute('role')) {
      this.el.setAttribute('role', 'status');
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private isExpandableMode(): boolean {
    return this.contentDisplayMode === 'expandable';
  }

  private getClasses(): string {
    const classList = ['modus-wc-alert'];
    const propClasses = convertPropsToClasses({
      variant: this.variant,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);
    if (this.isExpandableMode()) {
      classList.push('modus-wc-alert--expandable');
    }

    return classList.join(' ');
  }

  private getContentClasses(): string {
    const classList = ['modus-wc-alert-content'];

    if (this.isExpandableMode()) {
      classList.push('modus-wc-alert-content--expandable');
    }

    return classList.join(' ');
  }

  private getBodyTextClasses(baseClass: string): string {
    const classList = [baseClass];

    if (this.isExpandableMode() && !this.isContentExpanded) {
      classList.push('modus-wc-alert-body-text--collapsed');
    }

    return classList.join(' ');
  }

  private scheduleOverflowCheck(): void {
    if (!this.isExpandableMode()) {
      return;
    }

    requestAnimationFrame(() => this.updateOverflowState());
  }

  private updateOverflowState(): void {
    if (this.isContentExpanded) {
      return;
    }

    const element = this.expandableContentRef;
    const isOverflowing =
      !!element && element.scrollHeight > element.clientHeight;

    if (isOverflowing !== this.isContentOverflowing) {
      this.isContentOverflowing = isOverflowing;
    }
  }

  private disconnectContentResizeObserver(): void {
    this.contentResizeObserver?.disconnect();
    this.contentResizeObserver = undefined;
  }

  private syncContentResizeObserver(): void {
    this.disconnectContentResizeObserver();

    if (
      !this.isExpandableMode() ||
      !this.expandableContentRef ||
      typeof ResizeObserver === 'undefined'
    ) {
      return;
    }

    this.contentResizeObserver = new ResizeObserver(() => {
      this.updateOverflowState();
    });
    this.contentResizeObserver.observe(this.expandableContentRef);
  }

  private setExpandableContentRef = (el: HTMLElement | undefined) => {
    this.expandableContentRef = el;
    this.syncContentResizeObserver();
  };

  private toggleContentExpanded(): void {
    const expanded = !this.isContentExpanded;
    this.isContentExpanded = expanded;
    this.contentExpandedChange.emit({ expanded });

    if (!expanded) {
      this.scheduleOverflowCheck();
    }
  }

  private shouldShowExpandToggle(): boolean {
    return (
      this.isExpandableMode() &&
      (this.isContentOverflowing || this.isContentExpanded)
    );
  }

  private renderExpandToggle() {
    if (!this.shouldShowExpandToggle()) {
      return null;
    }

    const expanded = this.isContentExpanded;

    return (
      <modus-wc-button
        aria-controls={this.bodyContentId}
        aria-expanded={expanded ? 'true' : 'false'}
        color="tertiary"
        customClass="modus-wc-alert-expand-toggle"
        size="xs"
        variant="borderless"
        onButtonClick={() => this.toggleContentExpanded()}
      >
        <span class="modus-wc-alert-expand-toggle-label">
          {expanded ? 'Show less' : 'Show more'}
        </span>
        <modus-wc-icon
          custom-class="modus-wc-alert-expand-toggle-icon"
          decorative
          name={expanded ? 'expand_less' : 'expand_more'}
          size="xs"
          variant="outlined"
        />
      </modus-wc-button>
    );
  }

  private renderBodyContent(className: string, children: unknown) {
    if (!this.isExpandableMode()) {
      return className ? <div class={className}>{children}</div> : children;
    }

    const contentClass = className || 'modus-wc-alert-slot-content';

    return (
      <div class="modus-wc-alert-expandable-body">
        <div
          class={this.getBodyTextClasses(contentClass)}
          id={this.bodyContentId}
          ref={this.setExpandableContentRef}
        >
          {children}
        </div>
        {this.renderExpandToggle()}
      </div>
    );
  }

  private getLeadingIcon(): FunctionalComponent {
    if (this.icon) {
      return (
        <modus-wc-icon
          custom-class="modus-wc-alert-icon"
          name={this.icon}
          variant="outlined"
        />
      );
    }

    switch (this.variant) {
      case 'error':
        return (
          <modus-wc-icon
            custom-class="modus-wc-alert-icon"
            name="alert"
            variant="outlined"
          />
        );
      case 'success':
        return (
          <modus-wc-icon
            custom-class="modus-wc-alert-icon"
            name="check_circle"
          />
        );
      case 'warning':
        return (
          <modus-wc-icon
            custom-class="modus-wc-alert-icon"
            name="warning"
            variant="outlined"
          />
        );
      case 'info':
      default:
        return (
          <modus-wc-icon
            custom-class="modus-wc-alert-icon"
            name="info"
            variant="outlined"
          />
        );
    }
  }

  private timerId!: ReturnType<typeof setTimeout>;

  @Watch('delay')
  delayChanged(newDelay: number): void {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(() => {
      this.dismissElement();
    }, newDelay);
  }

  @Watch('contentDisplayMode')
  expandableConfigChanged(): void {
    this.isContentExpanded = false;
    this.isContentOverflowing = false;
    this.syncContentResizeObserver();
    this.scheduleOverflowCheck();
  }

  dismissElement() {
    this.dismissClick.emit();
    this.el.remove();
  }

  componentDidLoad(): void {
    if (this.delay && this.delay > 0) {
      this.timerId = setTimeout(() => {
        this.dismissElement();
      }, this.delay);
    }
  }

  componentDidRender(): void {
    this.scheduleOverflowCheck();
  }

  disconnectedCallback(): void {
    clearTimeout(this.timerId);
    this.disconnectContentResizeObserver();
  }

  @Listen('keyup')
  elementKeyupHandler(event: KeyboardEvent): void {
    if (event.code === 'Escape' && this.dismissible) {
      this.dismissElement();
    }
  }

  render() {
    const hasTitle = Boolean(this.alertTitle);
    const hasDescription = Boolean(this.alertDescription);
    const usesContentSlot = !hasTitle && !hasDescription;

    return (
      <Host>
        <div class={this.getClasses()} {...this.inheritedAttributes}>
          {!this.disableIcon && this.getLeadingIcon()}
          <div class={this.getContentClasses()}>
            {hasTitle && <div class="title">{this.alertTitle}</div>}
            {hasDescription &&
              this.renderBodyContent('description', this.alertDescription)}
            {usesContentSlot &&
              this.renderBodyContent('', <slot name="content" />)}
          </div>
          <slot name="button" />
          {this.dismissible && (
            <modus-wc-button
              aria-label="Dismiss alert"
              color="tertiary"
              size="sm"
              slot="button"
              variant="borderless"
              onButtonClick={() => this.dismissElement()}
            >
              <modus-wc-icon
                custom-class="modus-wc-alert-close-icon"
                name="close"
                variant="outlined"
              />
            </modus-wc-button>
          )}
        </div>
      </Host>
    );
  }
}
