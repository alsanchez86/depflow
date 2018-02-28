// Basic imports
import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

// Extra imports
import * as _ from 'underscore';

// nexter
let next = 0;

@Component({
  selector: 'pagination-component',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent {
  @Input() length: number;
  @Input() pageSize: number;
  @Input() maxSize: number;
  @Input() initPage: number;
  @Output() output = new EventEmitter < number > ();

  public id: string;
  public page: number;

  constructor(
    private elem: ElementRef
  ) {
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" + next++;
  }

  ngOnInit() {
    this.page = this.initPage;
  }

  public change(event): void {
    this.output.emit(event);
  }
}
