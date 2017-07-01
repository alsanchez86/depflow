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
  private filters: object[]; 
  private orders: object[];
  
  public activeFilter: object;
  private filter: object;    
  public order: object;  
  public switchOn: boolean; 
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
        value: null,
        text: "",
        render: false,
        active: false
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
        active: true
      }
    ];

    // options
    this.orders = [
      {
        value: "DESC",
        text: "Descendente",
        active: false
      },
      {
        value: "ASC",
        text: "Ascendente",
        active: true
      }
    ];
    
    /* init */    
    this.activeFilter = this.getActiveFilter();    
    this.order        = this.getActiveOrder();   
    this.switchOn     = false;    
    this.toggleSwitch();
    this.getRestaurants(); 
  }
  
  /* filter */
  public setFilter(option): void {        
    this.activeFilter = option;    
    this.toggleSwitch();
  }

  private getActiveFilter(active = true): object {
    return _.chain(this.filters)
            .filter(function(option) { return active ? option["active"] : option["value"] === null; })
            .map(function(option){ return option; })
            .first()
            .value();
  }

  /* order */
  public setOrder(option): void {
    this.order = option;
  }

  private getActiveOrder(): object {
    return _.chain(this.orders)
            .filter(function(option) { return option["active"]; })
            .map(function(option){ return option; })
            .first()
            .value();
  }

  /* switch */
  public setSwitch (event): void {   
    this.switchOn = event;
    this.toggleSwitch();
  }

  private toggleSwitch(): void {
    if (this.switchOn){
      this.filter = this.activeFilter;
    }else{
      this.filter = this.getActiveFilter(false);
    }
  }

  /* get Restaurants from API */
  private getRestaurants(): void {
    this.restaurantService
      .getAll()
      .then(data => this.restaurants = data);
  }
}
