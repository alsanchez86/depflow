// Basic imports
import { Component, ElementRef } from '@angular/core';

// nexter
let next = 0;

@Component({
  selector: 'accordion-component',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent {
  public id: string;

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }
}
