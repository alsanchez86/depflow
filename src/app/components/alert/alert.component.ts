// Basic imports
import { Component, ElementRef, Input } from '@angular/core';

// Extra imports
import * as _ from 'underscore';

// nexter
let next = 0;

@Component({
  selector: 'alert-component',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent {
  @Input() text: string;
  @Input() visible: boolean;
  @Input() type: string;

  public id: string;

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }

  ngOnInit(){    
    if (! this.visible) this.visible = false;
    if (! this.type)    this.type = "info";

    // _.each({one: 1, two: 2, three: 3}, console.log);
  }

  public closeAlert (): void{
    this.visible = false;
  }
}
