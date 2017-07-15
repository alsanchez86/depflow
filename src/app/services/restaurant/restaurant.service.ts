// Basic imports
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

// Classes
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../../classes';

// Promises
import 'rxjs/add/operator/toPromise';

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
  
  public getAllRsJX(): Observable<Response>{
    return this.http
      .get(this.restaurantsUrl);
  }  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
