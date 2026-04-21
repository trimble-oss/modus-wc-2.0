import { NgModule, provideAppInitializer } from '@angular/core';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';
import { DIRECTIVES } from './stencil-generated';

@NgModule({
  imports: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    provideAppInitializer(() => defineCustomElements()),
  ],
})
export class ModusAngularComponentsModule { }
