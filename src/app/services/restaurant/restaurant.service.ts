// Basic imports
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

// Promises
import 'rxjs/add/operator/toPromise';

// Classes
import { Restaurant } from '../../classes';

@Injectable()

export class RestaurantService {
  private headers         = new Headers ({'Content-Type': 'application/json'});
  private restaurantsUrl  = 'api/restaurants'; // URL to fake web api. restaurants is the name of the variable in RestaurantsData

  constructor(
    private http: Http
  ){

  }

  getAll(): Promise<Restaurant[]> {  
    return this.http
      .get(this.restaurantsUrl)
      .toPromise()
      .then(response => response.json().data as Restaurant[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
