// Basics
import { Component, ElementRef, Input } from '@angular/core';

// Classes
import { Restaurant } from '../../classes';

// nexter
let next = 0;

@Component({
  selector: 'restaurant-table-component',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.scss']
})

export class RestaurantTableComponent {
  @Input() restaurants: Restaurant[];
  @Input() fields: string[];
  @Input() order: object;
  @Input() filter: object;

  public id: string;  

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }
}
