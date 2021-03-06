// Basic imports
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
  selector: 'dropdown-component',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent {
  @Input() active: object;
  @Input() options: object;
  @Input() length: number;
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
