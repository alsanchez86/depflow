// Basics
import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

// nexter
let next = 0;

@Component({
  selector: 'buttons-radio-component',
  templateUrl: './buttons-radio.component.html',
  styleUrls: ['./buttons-radio.component.scss']
})

export class ButtonsRadioComponent {
  @Input() active: object;
  @Input() options: object;
  @Output() action = new EventEmitter < object > ();

  public id: string;

  constructor(
    private elem: ElementRef
  ) {
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" + next++;
  }

  public click(option): void {
    this.action.emit(option);
  }
}
