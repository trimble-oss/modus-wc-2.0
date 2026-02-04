import { NgModule, provideAppInitializer } from '@angular/core';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';
import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';
import { DIRECTIVES } from './stencil-generated';

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [],
  exports: [...DIRECTIVES],
  providers: [
    provideAppInitializer(() => {
      // In Angular build, assets are copied to /assets/ folder
      setAssetPath('/assets/');
      defineCustomElements(window);
    })
  ]
})
export class ModusAngularComponentsModule {}
