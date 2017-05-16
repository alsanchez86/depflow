// Basic imports
import { Component } from '@angular/core';

// Extra imports
import * as _ from 'underscore';

// Meta decorator
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})

// class
export class AppComponent { 
  constructor(){
    _.each({one: 1, two: 2, three: 3}, alert);
  }
}
