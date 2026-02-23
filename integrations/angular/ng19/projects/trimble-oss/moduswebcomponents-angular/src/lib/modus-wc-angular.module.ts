import { NgModule, provideAppInitializer } from '@angular/core';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';
import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';
import { DIRECTIVES } from './stencil-generated';

@NgModule({
  imports: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    provideAppInitializer(() => {
      // Configure asset path for Angular applications
      // Assets should be copied to /assets/ via angular.json configuration
      setAssetPath('/assets/');
      defineCustomElements(window);
    })
  ]
})
export class ModusAngularComponentsModule {}
