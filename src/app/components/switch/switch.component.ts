// Basic imports
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';

// nexter
let next = 0;

@Component({
  selector: 'switch-component',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})

export class SwitchComponent {
  @Input() checked;
  @Output() action = new EventEmitter();  

  public id: string;  

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }

  toggle(): void {    
    this.checked = !this.checked;  
    this.action.emit(this.checked);
  }
}
