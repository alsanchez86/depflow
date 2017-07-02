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

    console.log(this.activeOrder);    
  }

  private toggleActiveOrder(): void {
    this.activeOrder.value = !this.activeOrder.value;
  }

  private getActiveOrder(): object {
    return _.chain(this.fields)
            .filter(function(option) { return option["orderly"]; })
            .map(function(option){ return option; })
            .first()
            .value();
  }
}
