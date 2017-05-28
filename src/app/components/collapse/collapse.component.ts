// Basic imports
import { Component, Input } from '@angular/core';

var next = 0;

@Component({
  selector: 'collapse-component',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})

export class CollapseComponent {
  @Input() collapsed: boolean;
  @Input() buttonText: string;
  @Input() cardText: string;

  public id = `collapse-component-${next++}`;

  constructor(){

  }

  ngOnInit(){
    if (! this.collapsed) this.collapsed = true;
  }

  public toggle () {
    this.collapsed = ! this.collapsed;
  }
}
