// Basic imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { AppRoutingModule } from './app.routing.module';

// Components
import { AppComponent } from './app.component';

// Layouts
import { HeaderComponent, SidebarComponent } from './layout';

// Pages
import { NotFoundComponent, HomeComponent } from './pages';

// Meta Decorator
@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    SidebarComponent,

    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
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
