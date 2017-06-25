// Basics
import { Component, ElementRef, Input } from '@angular/core';

// Extra imports
import * as _ from 'underscore';

// nexter
let next = 0;

@Component({
  selector: 'restaurant-properties-component',
  templateUrl: './restaurant-properties.component.html',
  styleUrls: ['./restaurant-properties.component.scss']
})

export class RestaurantPropertiesComponent {
  @Input() node;

  public id: string;

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }

  public isArrayObject (value: any): boolean {
    return _.isArray(value) || _.isObject(value);
  }
}
