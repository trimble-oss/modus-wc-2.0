import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '@trimble-cms/modus-wc/loader';
import { DIRECTIVES } from './stencil-generated';

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [],
  exports: [...DIRECTIVES],
  providers: [
    {
        provide: APP_INITIALIZER,
        useFactory: () => defineCustomElements,
        multi: true,
    }
  ]
})
export class ModusAngularComponentsModule {}