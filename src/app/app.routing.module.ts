// Basic imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

// Components
import { NotFoundComponent } from "./pages/not-found/not-found.component";

// Routes constants
const routes: Routes = [
  {path: '',          pathMatch: 'full', redirectTo: 'home'},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'home',      component: NotFoundComponent},
  {path: '**',        redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

// Class
export class AppRoutingModule {}
