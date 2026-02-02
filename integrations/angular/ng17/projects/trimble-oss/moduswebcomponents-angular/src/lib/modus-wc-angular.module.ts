import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';
import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';
import { DIRECTIVES } from './stencil-generated';

// Initialize asset path for logo component
const initializeAssetPath = () => {
  // In Angular build, assets are copied to /assets/ folder
  setAssetPath('/assets/');
};

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        initializeAssetPath();
        return defineCustomElements;
      },
      multi: true,
    },
  ],
})
export class ModusAngularComponentsModule {}
