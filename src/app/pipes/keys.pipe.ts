/*
  Recorre un array de objetos sobre sus propiedades y valores.

  Echar un vistazo a esta forma:

    <div ng-repeat="user in users">
      <h1>Name: {{user.name}}</h1>
      <h1>Age: {{user.age}}</h1>
      <h1 ng-repeat="(key,val) in user.personalities">{{ key }}: {{ val }}</h1>
    </div>
*/

// Basic imports
import {
  Pipe,
  PipeTransform
} from '@angular/core';

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

    this.keys = [];
    this.item = item;

    _.each(this.item, (value, key, list) => {
      this.keys.push({
        value: value,
        key: key
      });
    });

    return this.keys;
  }
}
