import { Component } from '@angular/core';

@Component({
  selector: 'prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})

export class PruebaComponent {
  title: string;

  constructor() {
    this.title = "Título de la APP";
  }
}
