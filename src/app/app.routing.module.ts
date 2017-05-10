// Basic imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

// Components
import { NotFoundComponent, HomeComponent } from "./pages";

// Routes constants
const routes: Routes = [
  {path: '',          pathMatch: 'full', redirectTo: 'home'},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'home',      component: HomeComponent},
  {path: '**',        redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

// Class
export class AppRoutingModule {}
