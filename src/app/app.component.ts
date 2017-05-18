// Basic imports
import { Component, ElementRef } from '@angular/core';

// Extra imports
import * as _ from 'underscore';

declare var jQuery:any;

// Meta decorator
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})

// class
export class AppComponent {
  constructor(
    private el: ElementRef    
  ){
    _.each({one: 1, two: 2, three: 3}, console.log);
  }

  ngAfterViewInit() {
    // init local foundation
    // jQuery(this.el.nativeElement.localName).foundation();
    // jQuery("body").css({"background-color": "red"});
  }
}
