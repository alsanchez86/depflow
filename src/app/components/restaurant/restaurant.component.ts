// Basics
import { Component, OnInit } from '@angular/core';

// Classes
import { Restaurant } from '../../classes';

// Services
import { RestaurantService } from '../../services';

// Extra imports
import * as _ from 'underscore';

@Component({
  selector: 'restaurant-component',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})

export class RestaurantComponent {
  // public selectedRestaurant: Restaurant; // object restaurant
  public restaurants: Restaurant[];  
  public filters: object[];
  public options: object[];  
  public order: any;

  constructor(
    private restaurantService: RestaurantService
  ){

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
      active: false
    },
    {          
      value: "ASC",
      active: true
    }];
    
    // order (active option)    
    this.order = _.chain(this.options)
                  .filter(function(option) { return option["active"]; })
                  .map(function(option){ return option["value"]; })                  
                  .value();   

    /*
      Parece ser que como las funciones de underscore tardan un poco en ejecutarse, se renderiza antes el ngFor de restaurantes en la vista y no toma bien el valor del filtro this.order
    */ 

    // get Restaurants from API
    this.getRestaurants();    
  }

  getRestaurants(): void {    
    this.restaurantService
      .getAll()
      .then(data => this.restaurants = data);
  }

  setOrder(event): any {        
    this.order = event.target.value;
  }
}
