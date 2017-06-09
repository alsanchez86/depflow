// Basic imports
import { Component, ElementRef, Input } from '@angular/core';

// nexter
let next = 0;

@Component({
  selector: 'collapse-component',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})

export class CollapseComponent {
  @Input() collapsed: boolean;
  @Input() buttonText: string;
  @Input() cardText: string;

  public id: string;

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }

  ngOnInit(){
    if (! this.collapsed) this.collapsed = true;
  }

  public toggle () {
    this.collapsed = ! this.collapsed;
  }
}
