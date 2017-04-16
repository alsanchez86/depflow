import { Component } from '@angular/core';

@Component({
  selector: 'prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})

export class PruebaComponent {
  title: string;

  constructor() {
    this.title = "Título de la APP";
  }
}
