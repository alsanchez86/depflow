// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// Routing
import { AppRoutingModule } from './app.routing.module';

// Components
import { AppComponent } from './app.component';
import {
  AlertComponent,
  AccordionComponent,
  ButtonsRadioComponent,
  CarouselComponent,
  CollapseComponent
} from './components';

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

// Meta Decorator
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
  providers: [],
  bootstrap: [AppComponent]
})

// Class
export class AppModule {
  constructor (){
    console.log("Bootstrapping App!");
  }
}
