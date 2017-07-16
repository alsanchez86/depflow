// Basic imports
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

// Promises and Observables
import { Observable } from 'rxjs/Observable';

// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// Classes
import { Restaurant } from '../../classes';

@Injectable()

export class RestaurantService {
  private restaurantsUrl  = 'api/restaurants'; // URL to fake web api. restaurants is the name of the variable in RestaurantsData
  private headers         = new Headers ({'Content-Type': 'application/json'});
  private options         = new RequestOptions({ headers: this.headers }); 

  constructor(
    private http: Http
  ){

  }

  public getAll(): Promise<Restaurant[]> {  
    return this.http
      .get(this.restaurantsUrl, this.options)
      .toPromise()
      .then(response => response.json().data as Restaurant[])
      .catch(this.handleError);
  }
  
  public getAllRsJX(): Observable<Restaurant[]>{
    return this.http
      .get(this.restaurantsUrl, this.options)
      .map(response => response.json().data as Restaurant[]);
  }  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
