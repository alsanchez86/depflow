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
  private between: any[];

  transform(
    items: any[],
    init: number,
    limit: number
  ): any[] {
    this.between = [];

    _.each (items, (value, key) => {
      if (init && limit){
        if (key >= init && key < limit){       
          this.between.push(value);
        }

      }else if (init){
        if (key >= init){       
          this.between.push(value);
        }

      }else if (limit){
        if (key < limit){       
          this.between.push(value);
        }
      }      
    });

    return this.between;        
  }
}
