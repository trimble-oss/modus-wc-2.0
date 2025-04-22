import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';
import { DIRECTIVES } from './stencil-generated';

@NgModule({
  imports: [...DIRECTIVES],
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
