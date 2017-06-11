// Basic imports
import { Component, ElementRef, Input } from '@angular/core';

// nexter
let next = 0;

@Component({
  selector: 'switch-component',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})

export class SwitchComponent {
  @Input() checked;
  @Input() action: Function;

  public id: string;

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }
}
