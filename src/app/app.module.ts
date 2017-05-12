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
  NgbdButtonsRadio 
} from './components';

// Layouts
import { 
  HeaderComponent, 
  SidebarComponent 
} from './layouts';

// Pages
import { 
  NotFoundComponent, 
  HomeComponent 
} from './pages';

// Meta Decorator
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    NgbdButtonsRadio,
    
    HeaderComponent,
    SidebarComponent,

    NotFoundComponent,
    HomeComponent
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
