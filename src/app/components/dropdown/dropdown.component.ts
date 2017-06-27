// Basic imports
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';

// nexter
let next = 0;

@Component({
  selector: 'dropdown-component',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent {
  @Input() active;
  @Input() options;
  @Output() action = new EventEmitter();

  public id: string;

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;   
  }

  click (option): void {    
    this.action.emit(option);
  }
}
