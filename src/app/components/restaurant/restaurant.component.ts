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
    this.getRestaurants();    
  }

  getRestaurants(): void {    
    this.restaurantService
      .getAll()
      .then(data => this.restaurants = data);
  }
}
