import { Component } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class Alert {
  public visible: boolean;
  public text: string;

  constructor(){
    this.visible = true;
    this.text = "Mensaje de alerta por defecto";
  }

  public closeAlert (){
    this.visible = false;
  }
}
