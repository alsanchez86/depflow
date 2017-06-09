// Basics
import { Component, ElementRef } from '@angular/core';

// nexter
let next = 0;

@Component({
  selector: 'buttons-radio-component',
  templateUrl: './buttons-radio.component.html',
  styleUrls: ['./buttons-radio.component.scss']
})

export class ButtonsRadioComponent {
  public id: string;

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }

  ngOnInit(){

  }
}
