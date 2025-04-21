import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    {
        provide: APP_INITIALIZER,
        useFactory: () => defineCustomElements,
        multi: true,
    }
  ]
})
export class ModusAngularComponentsModule {}
