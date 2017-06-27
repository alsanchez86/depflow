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
  selector: 'restaurant-list-layout',
  templateUrl: './restaurant-list.layout.html',
  styleUrls: ['./restaurant-list.layout.scss']
})

export class RestaurantListLayout {
  public id: string;
  public restaurants: Restaurant[];
  public filters: object[];
  public filter: object;
  private defaultFilter: object;
  public activeFilter: boolean;
  public options: object[];
  public order: object;
  private defaultOrder: object;
  // public selectedRestaurant: Restaurant; // object restaurant

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

    // filter
    this.activeFilter   = false;
    this.defaultFilter  = this.getDefaultFilter();
    this.filter         = this.defaultFilter;

    // order (active option)
    this.defaultOrder = this.getDefaultOrder();
    this.order        = this.defaultOrder;

    // get Restaurants from API
    this.getRestaurants();    
  }

  public setOrder(option): void {
    this.order = option;
  }

  public setFilter(option): void {    
    if (this.activeFilter){
      this.filter = option;
    }    
  }

  public switchFilter (event): void {   
    this.activeFilter = event;

    if (! this.activeFilter){
       this.filter = this.defaultFilter;
    }else{
      // coger el activo o en su defecto el último elemento
       this.filter = _.chain(this.filters)
                      .map(function(option){ return option; })
                      .last()
                      .value();
     }
  }

  private getDefaultFilter(): object {
    return _.chain(this.filters)
            .filter(function(option) { return option["active"]; })
            .map(function(option){ return option; })
            .first()
            .value();
  }

  private getDefaultOrder(): object {
    return _.chain(this.options)
            .filter(function(option) { return option["active"]; })
            .map(function(option){ return option; })
            .first()
            .value();
  }

  private getRestaurants(): void {
    this.restaurantService
      .getAll()
      .then(data => this.restaurants = data);
  }
}
