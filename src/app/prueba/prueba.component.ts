import { Component } from '@angular/core';

@Component({
  selector: 'prueba',
  styleUrls: ['./prueba.component.scss'],
  templateUrl: './prueba.component.html'  
})

export class PruebaComponent {
  title: string;

  constructor() {
    this.title = "Título de la APP";
  }
}
