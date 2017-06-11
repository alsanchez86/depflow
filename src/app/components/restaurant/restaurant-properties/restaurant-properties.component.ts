// Basics
import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Classes
import { Restaurant } from '../../../classes';

// nexter
let next = 0;

@Component({
  selector: 'restaurant-properties',
  templateUrl: './restaurant-properties.component.html',
  styleUrls: ['./restaurant-properties.component.scss']
})

export class RestaurantPropertiesComponent {
  @Input() item;

  public id: string;
  public restaurant: Restaurant;

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;

    // restaurant
    // this.restaurant = item;
  }
}
