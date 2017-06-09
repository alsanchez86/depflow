// Basic imports
import { Component, ElementRef } from '@angular/core';

// nexter
let next = 0;

@Component({
  moduleId: module.id,
  selector: 'carousel-component',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.scss']
})

export class CarouselComponent {
  public id: string;

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }
}
