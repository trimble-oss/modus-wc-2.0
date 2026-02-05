import { NgModule, provideAppInitializer } from '@angular/core';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';
import { DIRECTIVES } from './stencil-generated';

@NgModule({
  imports: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    provideAppInitializer(() => {
      // Point to the main package assets location
      // Assets are in @trimble-oss/moduswebcomponents/assets
      if (typeof window !== 'undefined') {
        // Try to find the main package script to get its location
        const scripts = Array.from(document.getElementsByTagName('script'));
        const mainScript = scripts.find(s => s.src && (s.src.includes('moduswebcomponents') || s.src.includes('modus-wc')));
        
        const resourcesUrl = mainScript 
          ? new URL('.', mainScript.src).href
          : window.location.origin + '/';
        
        console.log('[Angular] Setting resourcesUrl to:', resourcesUrl);
        defineCustomElements(window, { resourcesUrl });
      }
    })
  ]
})
export class ModusAngularComponentsModule {}
