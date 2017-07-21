// Basic imports
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';

// nexter
let next = 0;

@Component({
  selector: 'tab-component',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})

export class SwitchComponent {
  @Input() checked: boolean;
  @Output() action = new EventEmitter<boolean>();

  public id: string;

  constructor(
    private elem: ElementRef
  ){}

  ngOnInit(){
    // id
    this.id = this.elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }
}
