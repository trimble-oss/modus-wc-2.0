/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@trimble-cms/modus-wc';


@ProxyCmp({
  inputs: ['alt', 'ariaLabel', 'customClass', 'daisyClass', 'imgSrc']
})
@Component({
  selector: 'modus-wc-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'ariaLabel', 'customClass', 'daisyClass', 'imgSrc'],
})
export class ModusWcAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ModusWcAvatar extends Components.ModusWcAvatar {}


@ProxyCmp({
  inputs: ['ariaLabel', 'color', 'content', 'customClass', 'size', 'type']
})
@Component({
  selector: 'modus-wc-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'color', 'content', 'customClass', 'size', 'type'],
})
export class ModusWcBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ModusWcBadge extends Components.ModusWcBadge {}


@ProxyCmp({
  inputs: ['ariaLabel', 'color', 'customClass', 'disabled', 'fullWidth', 'label', 'pressed', 'size', 'type', 'variant']
})
@Component({
  selector: 'modus-wc-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'color', 'customClass', 'disabled', 'fullWidth', 'label', 'pressed', 'size', 'type', 'variant'],
})
export class ModusWcButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['click']);
  }
}


export declare interface ModusWcButton extends Components.ModusWcButton {
  /**
   * Event emitted when the button is clicked or activated via keyboard.
   */
  click: EventEmitter<CustomEvent<MouseEvent | KeyboardEvent>>;
}


@ProxyCmp({
  inputs: ['ariaLabel', 'content', 'customClass', 'daisyClass']
})
@Component({
  selector: 'modus-wc-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'content', 'customClass', 'daisyClass'],
})
export class ModusWcDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ModusWcDivider extends Components.ModusWcDivider {}


@ProxyCmp({
  inputs: ['ariaDescribedby', 'ariaInvalid', 'ariaLabel', 'autoCapitalize', 'autoComplete', 'autoFocus', 'customClass', 'dir', 'disabled', 'id', 'inputMode', 'maxLength', 'minLength', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'spellcheck', 'tabIndex', 'type', 'value']
})
@Component({
  selector: 'modus-wc-text-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaDescribedby', 'ariaInvalid', 'ariaLabel', 'autoCapitalize', 'autoComplete', 'autoFocus', 'customClass', 'dir', 'disabled', 'id', 'inputMode', 'maxLength', 'minLength', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'spellcheck', 'tabIndex', 'type', 'value'],
})
export class ModusWcTextInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['blur', 'change', 'focus']);
  }
}


import type { Event as IModusWcTextInputEvent } from '@trimble-cms/modus-wc';

export declare interface ModusWcTextInput extends Components.ModusWcTextInput {
  /**
   * Event emitted when the input loses focus.
   */
  blur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Event emitted when the input value changes.
   */
  change: EventEmitter<CustomEvent<IModusWcTextInputEvent>>;
  /**
   * Event emitted when the input gains focus.
   */
  focus: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  inputs: ['ariaDescribedby', 'ariaInvalid', 'ariaLabel', 'customClass', 'dir', 'disabled', 'id', 'maxLength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'tabIndex', 'value']
})
@Component({
  selector: 'modus-wc-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaDescribedby', 'ariaInvalid', 'ariaLabel', 'customClass', 'dir', 'disabled', 'id', 'maxLength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'tabIndex', 'value'],
})
export class ModusWcTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['blur', 'change', 'focus']);
  }
}


import type { Event as IModusWcTextareaEvent } from '@trimble-cms/modus-wc';

export declare interface ModusWcTextarea extends Components.ModusWcTextarea {
  /**
   * Emitted when the textarea loses focus.
   */
  blur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the textarea value changes.
   */
  change: EventEmitter<CustomEvent<IModusWcTextareaEvent>>;
  /**
   * Emitted when the textarea gains focus.
   */
  focus: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  inputs: ['ariaLabel', 'bodySize', 'customClass', 'textCase', 'variant', 'weight']
})
@Component({
  selector: 'modus-wc-typography',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'bodySize', 'customClass', 'textCase', 'variant', 'weight'],
})
export class ModusWcTypography {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ModusWcTypography extends Components.ModusWcTypography {}


@ProxyCmp({
  inputs: ['componentName']
})
@Component({
  selector: 'stencil-docs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['componentName'],
})
export class StencilDocs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StencilDocs extends Components.StencilDocs {}


