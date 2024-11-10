/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@trimble-cms/modus-wc';


@ProxyCmp({
  inputs: ['alt', 'ariaLabel', 'customClass', 'imgSrc', 'shape', 'size']
})
@Component({
  selector: 'modus-wc-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'ariaLabel', 'customClass', 'imgSrc', 'shape', 'size'],
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
  inputs: ['ariaLabel', 'color', 'content', 'customClass', 'size', 'variant']
})
@Component({
  selector: 'modus-wc-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'color', 'content', 'customClass', 'size', 'variant'],
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
    proxyOutputs(this, this.el, ['buttonClick']);
  }
}


export declare interface ModusWcButton extends Components.ModusWcButton {
  /**
   * Event emitted when the button is clicked or activated via keyboard.
   */
  buttonClick: EventEmitter<CustomEvent<MouseEvent | KeyboardEvent>>;
}


@ProxyCmp({
  inputs: ['ariaLabel', 'color', 'content', 'customClass', 'orientation', 'position', 'responsive']
})
@Component({
  selector: 'modus-wc-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'color', 'content', 'customClass', 'orientation', 'position', 'responsive'],
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
  inputs: ['ariaDescribedby', 'ariaLabel', 'autoCapitalize', 'autoComplete', 'autoFocus', 'bordered', 'customClass', 'disabled', 'inputAriaInvalid', 'inputDir', 'inputId', 'inputMode', 'inputSpellcheck', 'inputTabIndex', 'maxLength', 'minLength', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'size', 'type', 'value']
})
@Component({
  selector: 'modus-wc-text-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaDescribedby', 'ariaLabel', 'autoCapitalize', 'autoComplete', 'autoFocus', 'bordered', 'customClass', 'disabled', 'inputAriaInvalid', 'inputDir', 'inputId', 'inputMode', 'inputSpellcheck', 'inputTabIndex', 'maxLength', 'minLength', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'size', 'type', 'value'],
})
export class ModusWcTextInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputBlur', 'inputChange', 'inputFocus']);
  }
}


export declare interface ModusWcTextInput extends Components.ModusWcTextInput {
  /**
   * Event emitted when the input loses focus.
   */
  inputBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Event emitted when the input value changes.
   */
  inputChange: EventEmitter<CustomEvent<Event>>;
  /**
   * Event emitted when the input gains focus.
   */
  inputFocus: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  inputs: ['ariaDescribedby', 'ariaLabel', 'bordered', 'customClass', 'disabled', 'fullWidth', 'maxLength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'size', 'textareaAriaInvalid', 'textareaDir', 'textareaId', 'textareaSpellcheck', 'textareaTabIndex', 'value']
})
@Component({
  selector: 'modus-wc-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaDescribedby', 'ariaLabel', 'bordered', 'customClass', 'disabled', 'fullWidth', 'maxLength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'size', 'textareaAriaInvalid', 'textareaDir', 'textareaId', 'textareaSpellcheck', 'textareaTabIndex', 'value'],
})
export class ModusWcTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['textareaBlur', 'textareaChange', 'textareaFocus']);
  }
}


export declare interface ModusWcTextarea extends Components.ModusWcTextarea {
  /**
   * Emitted when the textarea loses focus.
   */
  textareaBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the textarea value changes.
   */
  textareaChange: EventEmitter<CustomEvent<Event>>;
  /**
   * Emitted when the textarea gains focus.
   */
  textareaFocus: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  inputs: ['initialTheme']
})
@Component({
  selector: 'modus-wc-theme-provider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['initialTheme'],
})
export class ModusWcThemeProvider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ModusWcThemeProvider extends Components.ModusWcThemeProvider {}


@ProxyCmp({
  inputs: ['ariaLabel', 'customClass']
})
@Component({
  selector: 'modus-wc-theme-switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'customClass'],
})
export class ModusWcThemeSwitcher {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['themeChange']);
  }
}


import type { IThemeConfig as IModusWcThemeSwitcherIThemeConfig } from '@trimble-cms/modus-wc';

export declare interface ModusWcThemeSwitcher extends Components.ModusWcThemeSwitcher {
  /**
   * An event that fires when the theme is changed.
   */
  themeChange: EventEmitter<CustomEvent<IModusWcThemeSwitcherIThemeConfig>>;
}


@ProxyCmp({
  inputs: ['ariaLabel', 'customClass', 'size', 'variant', 'weight']
})
@Component({
  selector: 'modus-wc-typography',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'customClass', 'size', 'variant', 'weight'],
})
export class ModusWcTypography {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ModusWcTypography extends Components.ModusWcTypography {}


