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
  private limits: object[];
  private tableFields: object[];
  
  public activeFilter: object;
  private filter: object;    
  public order: object;  
  public limit: object;  
  public switchOn: boolean; 
  public paginationLenght: number;
  public maxPageSize: number;
  public initPage: number;
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
        text: "Completos",
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
        value: 0,
        text: "Descendente",
        active: false
      },
      {
        value: 1,
        text: "Ascendente",
        active: true
      }
    ];

    // limits
    this.limits = [
      {
        value: 2,    
        text: "Muestra 2",
        active: true
      },
      {
        value: 5,        
        text: "Muestra 5",
        active: false
      },
      {
        value: 10,        
        text: "Muestra 10",
        active: false
      }
    ];

    // fields
    this.tableFields = [
      {
        name: "_source.Id",
        orderly: true,
        order: 1
      },
      {
        name: "_type",
        orderly: false,
        order: 0
      },
      {
        name: "_id",
        orderly: false,
        order: 0
      },
      {
        name: "_score",
        orderly: true,
        order: 1
      },      
      {
        name: "_source.freeTables",
        orderly: false,
        order: 0
      }
    ];    
    
    /* init */    
    this.restaurants  = [];
    this.activeFilter = this.getActiveFilter();    
    this.order        = this.getActiveOrder();   
    this.limit        = this.getActiveLimit();
    this.switchOn     = false;    
    this.maxPageSize  = 5;
    this.initPage     = 1;

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

  /* limit */
  public setLimit(option): void {
    this.limit = option;
  }

  private getActiveLimit(): object {
    return _.chain(this.limits)
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
