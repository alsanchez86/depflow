import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { PruebaComponentDos } from './prueba-2/prueba-2.component';
import { HeaderComponent, SidebarComponent } from './shared';

// Meta Decorator
@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    PruebaComponentDos,
    HeaderComponent,
    SidebarComponent
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
