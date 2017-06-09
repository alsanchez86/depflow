// Basics
import { Component, OnInit } from '@angular/core';

// Classes
import { Restaurant } from '../../classes';

// Services
import { RestaurantService } from '../../services';

@Component({
  selector: 'restaurant-component',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})

export class RestaurantComponent {
  public restaurants: Restaurant[]; // array of restaurants
  // public selectedRestaurant: Restaurant; // object restaurant
  public options: object[];

  constructor(
    private restaurantService: RestaurantService
  ){

  }

  ngOnInit(){
    this.getRestaurants();    
    this.options = [{
      value: "DESC",
      active: true
    },
    {          
      value: "ASC",
      active: false
    }];
  }

  getRestaurants(): void {    
    this.restaurantService
      .getAll()
      .then(data => this.restaurants = data);
  }
}
