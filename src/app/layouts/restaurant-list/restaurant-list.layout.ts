// Basics
import {
  Component,
  ElementRef,
  OnInit
} from '@angular/core';

// Services
import {
  RestaurantService
} from '../../services';

// Classes
import {
  Restaurant
} from '../../classes';

// Pipes
import {
  LimitPipe
} from '../../pipes';
import {
  FilterPipe
} from '../../pipes';

// Extra imports
import * as _ from 'underscore';

// nexter
let next = 0;

@Component({
  selector: 'restaurant-list-layout',
  templateUrl: './restaurant-list.layout.html',
  styleUrls: ['./restaurant-list.layout.scss'],
  providers: [
    RestaurantService,
    LimitPipe,
    FilterPipe
  ]
})

export class RestaurantListLayout {
  public id: string;

  public restaurants: Restaurant[];
  public restaurantsPiped: Restaurant[];
  public restaurantsLength: number;

  private filters: object[];
  private orders: object[];
  private pageSizes: object[];
  private tableFields: object[];

  public activeFilter: object;
  private filter: any;
  public order: object;
  public pageSize: any;
  public switchOn: boolean;
  // public paginationLenght: number;
  public maxPages: number;
  public currentPage: number;
  // public selectedRestaurant: Restaurant;

  constructor(
    private elem: ElementRef,
    private restaurantService: RestaurantService,
    private limitPipe: LimitPipe,
    private filterPipe: FilterPipe
  ) {
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" + next++;
  }

  ngOnInit() {
    // filters
    this.filters = [{
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
    this.orders = [{
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
    this.pageSizes = [{
        value: 1,
        text: "Muestra 1",
        active: false
      },
      {
        value: 2,
        text: "Muestra 2",
        active: false
      },
      {
        value: 3,
        text: "Muestra 3",
        active: true
      },
      {
        value: 4,
        text: "Muestra 4",
        active: false
      }
    ];

    // fields
    this.tableFields = [{
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
    this.restaurants = [];
    this.restaurantsPiped = [];
    this.activeFilter = this.getActiveFilter();
    this.order = this.getActiveOrder();
    this.pageSize = this.getActiveLimit();
    this.switchOn = false;
    this.maxPages = 5;
    this.currentPage = 1;

    this.toggleSwitch();
    this.getRestaurantsRsJX();
  }

  /* filter */
  public setFilter(option): void {
    this.activeFilter = option;
    this.toggleSwitch();
    this.applyPipes();
  }

  private getActiveFilter(active = true): object {
    return _.chain(this.filters)
      .filter(function (option) {
        return active ? option["active"] : option["value"] === null;
      })
      .map(function (option) {
        return option;
      })
      .first()
      .value();
  }

  /* order */
  public setOrder(option): void {
    this.order = option;
  }

  private getActiveOrder(): object {
    return _.chain(this.orders)
      .filter(function (option) {
        return option["active"];
      })
      .map(function (option) {
        return option;
      })
      .first()
      .value();
  }

  /* limit */
  public setPageSize(option): void {
    this.pageSize = option;
    this.applyPipes();
  }

  private getActiveLimit(): object {
    return _.chain(this.pageSizes)
      .filter(function (option) {
        return option["active"];
      })
      .map(function (option) {
        return option;
      })
      .first()
      .value();
  }

  /* switch */
  public setSwitch(event): void {
    this.switchOn = event;
    this.toggleSwitch();
    this.applyPipes();
  }

  private toggleSwitch(): void {
    this.filter = this.switchOn ? this.activeFilter : this.getActiveFilter(false);
  }

  /* page */
  public setPage(option): void {
    this.currentPage = option;
    this.applyPipes();
  }

  /* Pipes */
  private applyPipes(): void {
    // 1.- filter
    this.restaurantsPiped = this.filterPipe.transform(this.restaurants, '_source.freeTables', this.filter.value);
    this.restaurantsLength = this.restaurantsPiped.length;

    // 2.- limit (pagination)
    this.restaurantsPiped = this.paginationPipe(this.restaurantsPiped);
  }

  private paginationPipe(restaurants: Restaurant[]): Restaurant[] {
    let init = (this.currentPage - 1) * this.pageSize.value;
    let limit = init + this.pageSize.value - 1;
    return this.limitPipe.transform(restaurants, init, limit);
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
      .subscribe(response => {
        this.restaurants = response;
        this.applyPipes();
      });
  }
}
