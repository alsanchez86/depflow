// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

// Components
import { PruebaComponent } from "./prueba/prueba.component";

// Routes constants
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: PruebaComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

// Class
export class AppRoutingModule {}
