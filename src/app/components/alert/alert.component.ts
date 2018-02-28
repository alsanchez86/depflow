// Basic imports
import {
  Component,
  ElementRef,
  Input
} from '@angular/core';

// nexter
let next = 0;

@Component({
  selector: 'alert-component',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent {
  @Input() text: string;
  @Input() visible: boolean;
  @Input() type: string;

  public id: string;

  constructor(
    private elem: ElementRef
  ) {
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" + next++;
  }

  ngOnInit() {
    if (!this.visible) this.visible = false;
    if (!this.type) this.type = "info";
  }

  public closeAlert(): void {
    this.visible = false;
  }
}
