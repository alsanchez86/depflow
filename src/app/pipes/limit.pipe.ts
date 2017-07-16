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
    init: number = 0,
    limit: number = items.length - 1
  ): any[] {
    this.between  = [];        

    _.each (items, (value, key) => {      
      if (init !== null && limit !== null){
        if (key >= init && key <= limit){       
          this.between.push(value);
        }

      }else if (init !== null){
        if (key >= init){       
          this.between.push(value);
        }

      }else if (limit !== null){
        if (key <= limit){       
          this.between.push(value);
        }
      }      
    });

    return this.between;        
  }
}
