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
  private truncatedContentRef?: HTMLElement;
  private truncationResizeObserver?: ResizeObserver;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The description of the alert. */
  @Prop() alertDescription?: string;

  /** The title of the alert. */
  @Prop() alertTitle!: string;

  /** Controls whether description or slot content wraps fully or truncates after 2 lines. */
  @Prop() contentDisplayMode?: 'full' | 'truncated' = 'full';

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

  @State() private isContentTruncated = false;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    // Set default role if none provided
    if (!this.el.hasAttribute('role')) {
      this.el.setAttribute('role', 'status');
    }

    // Then inherit all ARIA attributes normally
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-alert'];
    const propClasses = convertPropsToClasses({
      variant: this.variant,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getContentClasses(): string {
    const classList = ['modus-wc-alert-content'];

    if (this.contentDisplayMode === 'truncated') {
      classList.push('modus-wc-alert-content--truncated');
    }

    return classList.join(' ');
  }

  private isElement(node: Element | null): node is HTMLElement {
    return !!node && 'nodeType' in node && node.nodeType === 1;
  }

  private getSlotContentElement(): HTMLElement | undefined {
    const slotted = this.el.querySelector('[slot="content"]');
    if (this.isElement(slotted)) {
      return slotted;
    }

    const projected = this.el.querySelector(
      '.modus-wc-alert-slot-content [slot="content"], .modus-wc-alert-slot-content > *'
    );

    return this.isElement(projected) ? projected : undefined;
  }

  private getTooltipProps(): {
    content?: string;
    contentElement?: HTMLElement;
  } {
    if (this.alertDescription) {
      return { content: this.alertDescription };
    }

    const slotContent = this.getSlotContentElement();
    if (!slotContent) {
      return { content: '' };
    }

    return {
      content: slotContent.textContent ?? '',
      contentElement: slotContent,
    };
  }

  private scheduleTruncationCheck(): void {
    if (this.contentDisplayMode !== 'truncated') {
      return;
    }

    requestAnimationFrame(() => this.updateTruncationState());
  }

  private updateTruncationState(): void {
    const element = this.truncatedContentRef;
    const isTruncated =
      !!element && element.scrollHeight > element.clientHeight;

    if (isTruncated !== this.isContentTruncated) {
      this.isContentTruncated = isTruncated;
    }
  }

  private disconnectTruncationResizeObserver(): void {
    this.truncationResizeObserver?.disconnect();
    this.truncationResizeObserver = undefined;
  }

  private syncTruncationResizeObserver(): void {
    this.disconnectTruncationResizeObserver();

    if (
      this.contentDisplayMode !== 'truncated' ||
      !this.truncatedContentRef ||
      typeof ResizeObserver === 'undefined'
    ) {
      return;
    }

    this.truncationResizeObserver = new ResizeObserver(() => {
      this.updateTruncationState();
    });
    this.truncationResizeObserver.observe(this.truncatedContentRef);
  }

  private setTruncatedContentRef = (el: HTMLElement | undefined) => {
    this.truncatedContentRef = el;
    this.syncTruncationResizeObserver();
  };

  private renderTruncatableContent(
    className: string,
    children: unknown,
    tooltipProps: { content?: string; contentElement?: HTMLElement } = {}
  ) {
    const contentClass = className || 'modus-wc-alert-slot-content';

    if (this.contentDisplayMode !== 'truncated') {
      return className ? <div class={className}>{children}</div> : children;
    }

    return (
      <modus-wc-tooltip
        content={tooltipProps.content ?? ''}
        contentElement={tooltipProps.contentElement}
        customClass="modus-wc-alert-tooltip"
        disabled={!this.isContentTruncated}
        position="auto"
      >
        <div class={contentClass} ref={this.setTruncatedContentRef}>
          {children}
        </div>
      </modus-wc-tooltip>
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

  // Handle delay
  private timerId!: ReturnType<typeof setTimeout>;

  @Watch('delay')
  delayChanged(newDelay: number): void {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(() => {
      this.dismissElement();
    }, newDelay);
  }

  @Watch('contentDisplayMode')
  contentDisplayModeChanged(): void {
    this.syncTruncationResizeObserver();
    this.scheduleTruncationCheck();
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
    this.scheduleTruncationCheck();
  }

  disconnectedCallback(): void {
    clearTimeout(this.timerId);
    this.disconnectTruncationResizeObserver();
  }

  @Listen('keyup')
  elementKeyupHandler(event: KeyboardEvent): void {
    switch (event.code) {
      case 'Escape':
        if (!this.dismissible) {
          return;
        }

        this.dismissElement();
        break;
    }
  }

  render() {
    const tooltipProps = this.getTooltipProps();

    return (
      <Host>
        <div class={this.getClasses()} {...this.inheritedAttributes}>
          {!this.disableIcon && this.getLeadingIcon()}
          <div class={this.getContentClasses()}>
            <div class="title">{this.alertTitle}</div>
            {this.alertDescription &&
              this.renderTruncatableContent(
                'description',
                this.alertDescription,
                tooltipProps
              )}
            {!this.alertTitle &&
              !this.alertDescription &&
              this.renderTruncatableContent(
                '',
                <slot name="content" />,
                tooltipProps
              )}
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
