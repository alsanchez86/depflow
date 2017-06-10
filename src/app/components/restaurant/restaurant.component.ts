// Basics
import { Component, ElementRef, OnInit } from '@angular/core';

// Classes
import { Restaurant } from '../../classes';

// Services
import { RestaurantService } from '../../services';

// Extra imports
import * as _ from 'underscore';

// nexter
let next = 0;

@Component({
  selector: 'restaurant-component',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})

export class RestaurantComponent {
  // public selectedRestaurant: Restaurant; // object restaurant
  public id: string;
  public restaurants: Restaurant[];
  public filters: object[];
  public options: object[];
  public order: any;

  constructor(
    private elem: ElementRef,
    private restaurantService: RestaurantService
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }

  ngOnInit(){
    // filters
    this.filters = [{
      value: 1,
      text: "1 Mesa"
    },
    {
      value: 2,
      text: "2 Mesas"
    }];

    // options
    this.options = [{
      value: "DESC",
      text: "Descendente",
      active: false
    },
    {
      value: "ASC",
      text: "Ascendente",
      active: true
    }];

    // order (active option)
    this.order = _.chain(this.options)
                  .filter(function(option) { return option["active"]; })
                  .map(function(option){ return option["value"]; })
                  .first()
                  .value();

    // get Restaurants from API
    this.getRestaurants();
  }

  private getRestaurants(): void {
    this.restaurantService
      .getAll()
      .then(data => this.restaurants = data);
  }

  public setOrder(event): any {
    this.order = event.target.value;
  }

  public isObject(value: any): boolean {
    return _.isObject(value);
  }
}
