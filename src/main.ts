// Modules
import {
  enableProdMode
} from "@angular/core";

import {
  platformBrowserDynamic
} from "@angular/platform-browser-dynamic";

// Components
import {
  AppModule
} from "./app/app.module";

// Enviorements
import {
  environment
} from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

// Start App!
platformBrowserDynamic().bootstrapModule(AppModule);
