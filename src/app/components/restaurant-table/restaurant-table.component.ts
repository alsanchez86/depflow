/*
    https://datatables.net/examples/basic_init/table_sorting.html
*/

// Basics
import { Component, ElementRef, OnInit, Input } from '@angular/core';

// Classes
import { Restaurant } from '../../classes';

// Extra imports
import * as _ from 'underscore';

// nexter
let next = 0;

@Component({
  selector: 'restaurant-table-component',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.scss']
})

export class RestaurantTableComponent {
  @Input() restaurants: Restaurant[];
  @Input() fields: object[];  
  @Input() filter: object;
  @Input() limit: object;

  public id: string;    
  public activeOrder: any;

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }

  ngOnInit(){
    this.activeOrder = this.getActiveOrder();
  }

  public order(event, field): void {    
    event.preventDefault();

    this.activeOrder = field;
    this.toggleActiveOrder();
  }

  private toggleActiveOrder(): void {
    this.activeOrder.order = !this.activeOrder.order;
  }

  /*
    Toma el primer field del array cuyo oderly es true
  */
  private getActiveOrder(): object {
    return _.chain(this.fields)
            .filter(function(option) { return option["orderly"]; })
            .map(function(option){ return option; })
            .first()
            .value();
  }

  /*
    Obtiene el valor de una propiedad de Restaurant dado un string en nomenclatura JSON. Ej: _source.Id
  */
  public getRestaurantFieldValue (restaurant:Restaurant, field): object {
    let parts     = field.split(".");
    let length    = parts.length;    
    let property  = restaurant || this;

    for (let i = 0; i < length; i++) {
      property = property[parts[i]];
    }

    return property;
  }
}
