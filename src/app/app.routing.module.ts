// Basic imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

// Pages
import { 
  NotFoundPage, 
  HomePage 
} from "./pages";

// Routes constants
const routes: Routes = [
  {path: '',          pathMatch: 'full', redirectTo: 'home'},
  {path: 'not-found', component: NotFoundPage},
  {path: 'home',      component: HomePage},
  {path: '**',        redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

// Class
export class AppRoutingModule {}
