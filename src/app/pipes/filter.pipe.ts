/*
    Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
    Dada una lista, devuelve una nueva lista solamente con aquellos items que cumplan la condicion.
*/

// Basic imports
import {
  Pipe,
  PipeTransform
} from '@angular/core';

// Extra imports
import * as _ from 'underscore';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  private nodes: string[];

  transform(
    items: any[],
    field: string,
    value: string
  ): any[] {

    if (items && field && value != null) {
      this.nodes = field ? field.split(".") : [];
      items = _.filter(items, (item) => this.traverse(item) === value);
    }

    return items;
  }

  private traverse(item): any {
    for (var i = 0; i < this.nodes.length; i++) {
      item = item[this.nodes[i]];
    }

    return item;
  }
}
