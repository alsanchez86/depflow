import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PruebaComponent } from "./components/prueba.component";

const appRoutes: Routes = [
  {
    path: "",
    component: PruebaComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
