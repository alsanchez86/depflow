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
  public options: object[];

  public switchOn: boolean; 
  public filter: object;
  public prueba: object;
  public order: object;  
  // public selectedRestaurant: Restaurant;

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
      active: true
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
    
    this.switchOn = false;    
    this.filter   = this.getDefaultFilter();
    this.prueba   = this.filter;   
    this.order    = this.getDefaultOrder();
    
    // get Restaurants from API
    this.getRestaurants(); 
  }

  public setOrder(option): void {
    this.order = option;
  }

  public setFilter(option): void {        
    this.filter = option;    
  }

  public setSwitch (event): void {   
    this.switchOn = event;

    if (this.switchOn){
      this.prueba = this.filter;    
    }else{
      this.prueba = _.chain(this.filters)            
                      .map(function(option){ return option; })
                      .first()
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
