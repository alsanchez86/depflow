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
  restaurants: Restaurant[]; // array of restaurants
  selectedRestaurant: Restaurant; // object restaurant

  constructor(
    private restaurantService: RestaurantService
  ){

  }

  ngOnInit(){
    this.restaurants = this.restaurantService.getRestaurants();
  }
}
