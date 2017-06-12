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
  public filter: string;
  public activeFilter: boolean;
  public options: object[];
  public order: any;
  public toggleFilter: Function;  

  constructor(
    private elem: ElementRef,
    private restaurantService: RestaurantService
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }

  ngOnInit(){
    // filters
    this.filters = [
    {
      value: null,
      text: "",
      render: false,
      active: true
    },
    {
      value: 0,
      text: "Llenos",
      render: true,
      active: false
    },
    {
      value: 1,
      text: "1 Mesa",
      render: true,
      active: false
    },
    {
      value: 2,
      text: "2 Mesas",
      render: true,
      active: false
    }];

    // options
    this.options = [
    {
      value: "DESC",
      text: "Descendente",
      active: false
    },
    {
      value: "ASC",
      text: "Ascendente",
      active: true
    }];

    // activeFilter
    this.activeFilter = false;        

    // filter
    this.filter = _.chain(this.filters)
                  .filter(function(option) { return option["active"]; })
                  .map(function(option){ return option["value"]; })
                  .first()
                  .value();

    // order (active option)
    this.order = _.chain(this.options)
                  .filter(function(option) { return option["active"]; })
                  .map(function(option){ return option["value"]; })
                  .first()
                  .value();

    // get Restaurants from API
    this.getRestaurants();

    // toggleFilter
    this.toggleFilter = this.toggleFilterCallback.bind(this);
  }

  public toggleFilterCallback(){    
    this.activeFilter = !this.activeFilter;

     if (! this.activeFilter){
       this.filter = null;
     }else{
       // coger el activo o en su defecto el último elemento
       this.filter = _.chain(this.filters)                      
                      .map(function(option){ return option["value"]; })
                      .last()
                      .value();
     }
  }

  private getRestaurants(): void {
    this.restaurantService
      .getAll()
      .then(data => this.restaurants = data);
  }
}
