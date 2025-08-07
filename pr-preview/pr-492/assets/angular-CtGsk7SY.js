import{j as n,M as r}from"./index-C6wScBFi.js";import{useMDXComponents as s}from"./index-1YpNh6b2.js";import"./iframe-D78go5j8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function o(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Documentation/Frameworks/Angular"}),`
`,n.jsx(e.h1,{id:"angular-framework-integration",children:"Angular Framework Integration"}),`
`,n.jsx(e.p,{children:"This guide will help you get started with consuming the Modus Angular Web Component library in your Angular project."}),`
`,n.jsx(e.p,{children:`We highly recommend using the Modus Angular Components library for Angular based projects.
These components are automatically generated using the Stencil Angular Framework Integration.`}),`
`,n.jsx(e.p,{children:"Follow the steps outlined below to integrate and use Modus Angular Web Components effectively."}),`
`,n.jsxs(e.p,{children:["Please refer to the ",n.jsx(e.a,{href:"https://stenciljs.com/docs/angular#consumer-usage",rel:"nofollow",children:"official stencil documentation"})," for more information on how to integrate with your Angular project."]}),`
`,n.jsx(e.h2,{id:"angular-with-modules",children:"Angular with modules"}),`
`,n.jsx(e.p,{children:`Modus Angular Components have a peer dependency with Modus Web Components and require the
installation of both packages.`}),`
`,n.jsxs(e.h3,{id:"1-install-both-modus-wc-and-modus-wc-angular-dependencies",children:["1. Install both ",n.jsx(e.code,{children:"modus-wc"})," and ",n.jsx(e.code,{children:"modus-wc-angular"})," dependencies:"]}),`
`,n.jsxs(e.p,{children:["Ensure that you specify the target version of Angular for the ",n.jsx(e.code,{children:"modus-wc-angular"})," package (e.g., ",n.jsx(e.code,{children:"ng18"})," for Angular 18)."]}),`
`,n.jsx("b",{children:n.jsx(e.p,{children:`Lock the installed package versions to avoid unintended breakages on future
npm installs.`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @trimble-oss/moduswebcomponents @trimble-oss/moduswebcomponents-angular@<latest-version>-ng<target-version>
`})}),`
`,n.jsx(e.h3,{id:"2-set-up-the-styling",children:"2. Set up the styling:"}),`
`,n.jsx(e.p,{children:"You will need to import our styling in your main JavaScript or CSS file:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import '@trimble-oss/moduswebcomponents/modus-wc-styles.css';
`})}),`
`,n.jsx(e.h3,{id:"3-import-modus-angular-web-components-library-into-your-angular-apps-module",children:"3. Import Modus Angular Web Components library into your Angular app's module:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// app.module.ts
import { ModusAngularComponentsModule } from '@trimble-oss/moduswebcomponents-angular';

@NgModule({
  ...
  imports: [ComponentLibraryModule],
  ...
})
export class AppModule {}
`})}),`
`,n.jsx(e.h3,{id:"4-use-modus-angular-web-components-while-leveraging-angular-template-binding-syntax",children:"4. Use Modus Angular Web Components while leveraging Angular template binding syntax:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// app.component.html
<modus-wc-button label="Click Me" />
`})}),`
`,n.jsx(e.h2,{id:"angular-with-standalone-components",children:"Angular with standalone components"}),`
`,n.jsx(e.p,{children:`Modus Angular Components have a peer dependency with Modus Web Components and require the
installation of both packages.`}),`
`,n.jsxs(e.h3,{id:"1-install-both-modus-wc-and-modus-wc-angular-dependencies-1",children:["1. Install both ",n.jsx(e.code,{children:"modus-wc"})," and ",n.jsx(e.code,{children:"modus-wc-angular"})," dependencies:"]}),`
`,n.jsxs(e.p,{children:["Ensure that you specify the target version of Angular for the ",n.jsx(e.code,{children:"modus-wc-angular"})," package (e.g., ",n.jsx(e.code,{children:"ng18"})," for Angular 18)."]}),`
`,n.jsx("b",{children:n.jsx(e.p,{children:`Lock the installed package versions to avoid unintended breakages on future
npm installs.`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @trimble-oss/moduswebcomponents @trimble-oss/moduswebcomponents-angular@<latest-version>-ng<target-version>
`})}),`
`,n.jsx(e.h3,{id:"2-set-up-the-styling-1",children:"2. Set up the styling:"}),`
`,n.jsx(e.p,{children:"You will need to import our styling in your main JavaScript or CSS file:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import '@trimble-oss/moduswebcomponents/modus-wc-styles.css';
`})}),`
`,n.jsx(e.h3,{id:"3-import-your-component-library-into-your-component",children:"3. Import your component library into your component."}),`
`,n.jsxs(e.p,{children:["You must distribute your components through a primary ",n.jsx(e.code,{children:"NgModule"})," to use your components in a standalone component."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// app.component.ts
import { Component } from '@angular/core';
import { ModusAngularComponentsModule } from '@trimble-oss/moduswebcomponents-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ModusAngularComponentsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
`})}),`
`,n.jsx(e.h3,{id:"4-use-modus-angular-web-components-while-leveraging-angular-template-binding-syntax-1",children:"4. Use Modus Angular Web Components while leveraging Angular template binding syntax:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// app.component.html
<modus-wc-button label="Click Me" />
`})}),`
`,n.jsx(e.h3,{id:"custom-elements-schema",children:"Custom Elements Schema"}),`
`,n.jsxs(e.p,{children:["In the ",n.jsx(e.code,{children:"app.module.ts"}),` file, you need to tell angular that you are using custom element schemas
so that it does not throw errors when unknown element names are used in the markup.`]}),`
`,n.jsxs(e.p,{children:["Import ",n.jsx(e.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," and add it to your ",n.jsx(e.code,{children:"@NgModule"}),"'s schemas:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  ...
})
`})}),`
`,n.jsx(e.h3,{id:"wrapping-components",children:"Wrapping Components"}),`
`,n.jsx(e.p,{children:"When using Modus Web Components directly, it is recommended to wrap it in corresponding Angular components within your application. This will abstract away from the library dependency, allowing more flexibility for you and your application in the future. Each part of the component is able to be abstracted, leaving you with an Angular-native component."}),`
`,n.jsxs(e.p,{children:["Notice Angular allows ",n.jsx(e.code,{children:"[]"})," and ",n.jsx(e.code,{children:"()"})," markup syntax for the web component's inputs and outputs, respectively."]}),`
`,n.jsx(e.p,{children:"Wrapped Modus Button Example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-component',
  template: \`
    <modus-wc-button
      [buttonStyle]="buttonStyle"
      [color]="color"
      [disabled]="disabled"
      [size]="size"
      (buttonClick)="onButtonClick.emit()"
    >
      <ng-content></ng-content>
    </modus-wc-button>
  \`,
})
export class ButtonComponent {
  @Input() buttonStyle: 'borderless' | 'fill' | 'outline' = 'fill';
  @Input() color: 'danger' | 'default' | 'primary' | 'secondary' | 'warning' =
    'default';
  @Input() disabled: boolean;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Output() onButtonClick = new EventEmitter();
}
`})}),`
`,n.jsx(e.h3,{id:"reactive-forms",children:"Reactive Forms"}),`
`,n.jsx(e.p,{children:"Working with a web component's inputs/outputs works great but these components do not integrate with Angular's reactive forms quite as easily. Since web components do not know about Angular's form APIs, we must extend form-compatible components' behavior with simple directives. These directives are applied to the web component selectors, giving the components Angular form functionality."}),`
`,n.jsx(e.p,{children:"Let's take a look at a directive implementation for a Modus Select's form functionality."}),`
`,n.jsx(e.h4,{id:"wrapper",children:"Wrapper"}),`
`,n.jsxs(e.p,{children:["You'll notice the ",n.jsx(e.code,{children:"modus-select"})," in the markup is taking extra inputs, such as ",n.jsx(e.code,{children:"formControl"})," and ",n.jsx(e.code,{children:"optionsDisplayProp"}),", these inputs are provided by the directive below. Here is what our wrapper looks like:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'select-component',
  template: \`
    <modus-wc-select
      #select
      [disabled]="disabled"
      [errorText]="errorText"
      [formControl]="formControl"
      [helperText]="helperText"
      [label]="label"
      [options]="options"
      [optionsDisplayProp]="optionsDisplayProp"
      [required]="required"
      [selectValue]="value"
      [size]="size"
      [validText]="validText"
      (valueChange)="onSelectValueChange.emit(select.value)"
    >
    </modus-wc-select>
  \`,
})
export class SelectComponent {
  @Input() disabled: boolean;
  @Input() errorText: string;
  @Input() formControl: FormControl;
  @Input() helperText: string;
  @Input() label: string;
  @Input() options: unknown[] = [];
  @Input() optionsDisplayProp: string;
  @Input() required: boolean;
  @Input() size: 'medium' | 'large' = 'medium';
  @Input() validText: string;
  @Input() value: unknown;

  @Output() onSelectValueChange = new EventEmitter<unknown>();
}
`})}),`
`,n.jsx(e.h4,{id:"directive",children:"Directive"}),`
`,n.jsx(e.p,{children:"Moving onto the directive, there are a few things to keep in mind."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The directive's selector is set to the web component's tag, not the wrapper's."}),`
`,n.jsxs(e.li,{children:["Implementing the ",n.jsx(e.code,{children:"ControlValueAccessor"})," interface helps Angular understand when the form control has been updated or changed.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["When the value is set, ",n.jsx(e.code,{children:"onChange()"})," notifies that the control has been updated."]}),`
`,n.jsxs(e.li,{children:["Calling ",n.jsx(e.code,{children:"onTouched()"})," lets Angular know the component has been touched, which is needed for form validation."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["The ",n.jsx(e.code,{children:"get value()"}),", and ",n.jsx(e.code,{children:"set value()"})," are used by Angular's form control."]}),`
`,n.jsxs(e.li,{children:["Using the ",n.jsx(e.code,{children:"@HostListener"})," decorator lets you listen to events from the web component, and execute appropriate logic."]}),`
`]}),`
`,n.jsx(e.p,{children:"Here is what our directive looks like:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {
  Directive,
  forwardRef,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Directive({
  selector: 'modus-wc-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ModusSelectDirective),
      multi: true,
    },
  ],
})
export class ModusSelectDirective implements ControlValueAccessor, OnInit {
  @Input() disabled: boolean;
  @Input() errorText: string;
  @Input() formControl: FormControl;
  @Input() helperText: string;
  @Input() label: string;
  @Input() options: unknown[];
  @Input() optionsDisplayProp: string;
  @Input() required: boolean;
  @Input() selectValue: unknown;
  @Input() size: 'medium' | 'large';
  @Input() validText: string;

  @Output() valueChange = new EventEmitter<string>();

  onChange: any = () => {};
  onTouched: any = () => {};

  private _value: string;

  get value() {
    return this._value;
  }

  set value(value) {
    if (value !== this._value) {
      this._value = value;
      this.onChange(this._value);
      this.onTouched();
      this.elementRef.nativeElement.value = value;
    }
  }

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const modusSelect = this.elementRef.nativeElement as HTMLModusSelectElement;
    modusSelect.disabled = this.disabled;
    modusSelect.errorText = this.errorText;
    modusSelect.helperText = this.helperText;
    modusSelect.label = this.label;
    modusSelect.options = this.options;
    modusSelect.optionsDisplayProp = this.optionsDisplayProp;
    modusSelect.required = this.required;
    modusSelect.size = this.size;
    modusSelect.validText = this.validText;
    modusSelect.value = this.selectValue;

    if (!this.formControl) {
      this.formControl = new FormControl(null);
    }
  }

  @HostListener('valueChange', ['$event.detail'])
  listenForValueChange(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    if (value) {
      this.value = value;
    }
  }
}
`})}),`
`,n.jsx(e.p,{children:"Now adding the Modus Select as a form control is as easy as:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`<select-component
  [formControl]="$any(form).controls['select1']"
  [label]="'Select Form Demo'"
  [options]="options"
  [optionsDisplayProp]="'display'">
</select-component>
`})})]})}function p(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{p as default};
