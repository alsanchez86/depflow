// Modules
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { PruebaComponent } from "../components/prueba/prueba.component";

// Routes constants
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: PruebaComponent}
];

// Class
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});
