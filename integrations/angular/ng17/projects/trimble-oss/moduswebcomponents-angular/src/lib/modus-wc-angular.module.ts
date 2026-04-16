import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';
import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';
import { DIRECTIVES } from './stencil-generated';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {
        // Configure asset path for Angular applications
        // Assets should be copied to /assets/ via angular.json configuration
        setAssetPath('/assets/');
        defineCustomElements(window);
      },
      multi: true,
    }
  ]
})
export class ModusAngularComponentsModule {}
