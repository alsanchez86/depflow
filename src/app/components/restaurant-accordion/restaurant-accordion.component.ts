// Basics
import { Component, ElementRef, Input } from '@angular/core';

// Classes
import { Restaurant } from '../../classes';

// nexter
let next = 0;

@Component({
  selector: 'restaurant-accordion-component',
  templateUrl: './restaurant-accordion.component.html',
  styleUrls: ['./restaurant-accordion.component.scss']
})

export class RestaurantAccordionComponent {
  @Input() restaurants: Restaurant[];
  @Input() order: object;  

  public id: string;

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }
}
