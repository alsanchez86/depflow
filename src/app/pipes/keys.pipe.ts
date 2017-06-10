/*
    Recorre un array de objetos sobre sus propiedades y valores
*/

// Basic imports
import { Pipe, PipeTransform } from '@angular/core';

// Extra imports
import * as _ from 'underscore';

@Pipe({
    name: 'keys',
    pure: false
})

export class KeysPipe implements PipeTransform {
  private item: any[];
  private keys: any[];

  transform(
    item: any[]
  ): any {

    this.item = item;
    this.keys = [];

    _.each(this.item, (value, key, list) => {
      this.keys.push({value: value, key: key});
    });

    return this.keys;
  }
}
