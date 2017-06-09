/*
  Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee. iteratee may also be the string name of the property to sort by (eg. length).

  Ordena una lista dado el nombre de un campo.
  Puede ser ASC o DESC (default).
*/

// Basic imports
import { Pipe, PipeTransform } from '@angular/core';

// Extra imports
import * as _ from 'underscore';

@Pipe({
  name: 'order'
})

export class OrderPipe implements PipeTransform {
  private list: any[];

  transform(
    items: any[],
    field: string,
    direction: string
  ): any[] {        

    if (items){
      this.list = _.sortBy(items, field);      

      if (direction === 'ASC') {
        this.list.reverse();
      }
    }

    return this.list;
  }
}