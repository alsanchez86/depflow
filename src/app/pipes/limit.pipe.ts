/*
  Dado un array, limita el número de elmentos a mostrar.
*/

// Basic imports
import { Pipe, PipeTransform } from '@angular/core';

// Extra imports
import * as _ from 'underscore';

@Pipe({
    name: 'limit',
    pure: false
})

export class LimitPipe implements PipeTransform {
  private limited: any[];

  transform(
    items: any[],
    limit: any
  ): any[] {
    this.limited = [];

    _.each (items, (value, key) => {     
      if (key < limit.value){       
        this.limited.push(value);
      }
    });

    return this.limited;        
  }
}
