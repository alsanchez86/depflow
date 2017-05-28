// Basic imports
import { Component, Input } from '@angular/core';

// Extra imports
import * as _ from 'underscore';

@Component({
  selector: 'alert-component',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent {
  @Input() text: string;
  @Input() visible: boolean;
  @Input() type: string;

  constructor(){

  }

  ngOnInit(){
    if (! this.visible) this.visible = false;
    if (! this.type)    this.type = "info";

    // _.each({one: 1, two: 2, three: 3}, console.log);
  }

  public closeAlert (){
    this.visible = false;
  }
}
