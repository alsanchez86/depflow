// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

// Components
import { PruebaComponent } from "./prueba/prueba.component";
import { PruebaComponentDos } from "./prueba-2/prueba-2.component";

// Routes constants
const routes: Routes = [
  {path: '',          pathMatch: 'full', redirectTo: 'home'},
  {path: 'home',      component: PruebaComponent},
  {path: 'prueba-2',  component: PruebaComponentDos},
  {path: '**',        redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

// Class
export class AppRoutingModule {}
