// Basics
import { Component, ElementRef, OnInit } from '@angular/core';

// Classes
import { Observable } from 'rxjs/Observable';
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
  public restaurantsObservable: Observable<Restaurant[]>;
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
  public maxPages: number;
  public currentPage: number;
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
    this.maxPages     = 5;
    this.currentPage  = 1;

    this.toggleSwitch();
    this.getRestaurantsRsJX();     

    // debugger;  
    // this.restaurantsLimited = this.restaurants; // se tiene que hacer con un observable, ya que la llamada http se produce a posteriori. Luego, hay que llamar al pipe limited 
    // https://codekstudio.com/post-blog/conceptos-observables-rxjs-y-angular-2-javascript-reactivo-y-funcional/57d1e2840897131b5ec54b90
    // http://blog.rangle.io/observables-and-reactive-programming-in-angular-2/
    // https://stackoverflow.com/questions/39494058/angular-2-behavior-subject-vs-observable

    this.restaurantsObservable = new Observable(observer => {      
      observer.next(42);      
    });

    /*  
    this.restaurantsObservable.subscribe(
          value => this.values.push(value),
          error => this.anyErrors = true,
          () => this.finished = true
      );
    
    
    Rx.Observable
      .from(this.restaurants)
      .map(function(elementoArray) { 
        // aquí va el pipe limit
        // return elementoArray + 2;
      }); 
    */    
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

  /* page */
  public setPage(option): void {
    this.currentPage = option;
  }

  /* get Restaurants from API */
  private getRestaurants(): void {       
    this.restaurantService
      .getAll()
      .then(data => {      
        this.restaurants = data;
      });    
  }

  private getRestaurantsRsJX(): void {
    this.restaurantService
      .getAllRsJX()
      .subscribe(res => {            
        this.restaurants = res.json().data;
      });    
  }
}
