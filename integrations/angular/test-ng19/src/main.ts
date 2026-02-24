import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';
//import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';

// Initialize Modus Web Components
//setAssetPath('/assets/');
defineCustomElements(window);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
