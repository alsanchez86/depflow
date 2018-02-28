// Basic imports
import {
  Component,
  ElementRef
} from '@angular/core';

// declare var jQuery:any;

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
  ) {

  }

  ngAfterViewInit() {
    // init local foundation
    // jQuery(this.el.nativeElement.localName).foundation();
    // jQuery("body").css({"background-color": "red"});
  }
}
