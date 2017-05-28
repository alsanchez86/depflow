// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// Routing
import { AppRoutingModule } from './app.routing.module';

// In Memory
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// Root Component
import {
  AppComponent
} from './app.component';

// Components
import {
  AlertComponent,
  AccordionComponent,
  ButtonsRadioComponent,
  CarouselComponent,
  CollapseComponent
} from './components';

// App Components
import {
  RestaurantComponent
} from './app-components';

// Layouts
import {
  HeaderLayout,
  FooterLayout,
  SidebarLayout
} from './layouts';

// Pages
import {
  NotFoundPage,
  HomePage
} from './pages';

// Services
import {
  RestaurantService
} from './services/';

// Imports for loading & configuring the in-memory web api
import {
  RestaurantsData
} from './in-memory/';

// Meta Decorator
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(RestaurantsData),
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    // main
    AppComponent,

    // components
    AlertComponent,
    AccordionComponent,
    ButtonsRadioComponent,
    CarouselComponent,
    CollapseComponent,

    // layouts
    HeaderLayout,
    FooterLayout,
    SidebarLayout,

    // pages
    NotFoundPage,
    HomePage
  ],
  providers: [
    RestaurantService
  ],
  bootstrap: [AppComponent]
})

// Class
export class AppModule {
  constructor (){
    console.log("Bootstrapping App!");
  }
}
