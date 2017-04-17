// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from "./app.routing";

// App Components
import { AppComponent } from '../components/app/app.component';
import { PruebaComponent } from '../components/prueba/prueba.component';

// Bootstrap Components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Meta Decorator
@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    BsDropdownModule.forRoot()
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
