// Basic imports
import { Component } from '@angular/core';

// Extra imports
import * as _ from 'underscore';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class Alert {
  public visible: boolean;
  public text: string;

  constructor(){
    this.visible = true;
    this.text = "Mensaje de alerta por defecto";

    _.each({one: 1, two: 2, three: 3}, console.log);
  }

  public closeAlert (){
    this.visible = false;
  }
}
