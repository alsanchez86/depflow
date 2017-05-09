import { Component } from '@angular/core';

@Component({
  selector: 'prueba-2',
  styleUrls: ['./prueba-2.component.scss'],
  templateUrl: './prueba-2.component.html'  
})

export class PruebaComponentDos {
  title: string;

  constructor() {
    this.title = "Prueba 2";
  }
}
