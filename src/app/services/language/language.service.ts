// Basic imports
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

// Promises and Observables
import { Observable } from 'rxjs/Observable';

// Observable operators
// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()

export class LanguageService {
  private endPoint  = 'api/en';
  private headers   = new Headers ({'Content-Type': 'application/json'});
  private options   = new RequestOptions({ headers: this.headers }); 

  constructor(
    private http: Http
  ){

  }
  
  public getText(text): Promise<string> {  
    return this.http
      .get(this.endPoint, this.options)
      .toPromise()
      .then(response => response.json().data as string)
      .catch(this.handleError);
  }  
  
  public getTextRsJX(text): Observable<string>{
    debugger;

    return this.http
      .get(this.endPoint, this.options)
      .map(response => response.json().data as string);
  }  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
