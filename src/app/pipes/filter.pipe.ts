/*
    Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
    Dada una lista, devuelve una nueva lista solamente con aquellos items que cumplan la condicion.
*/

// Basic imports
import { Pipe, PipeTransform } from '@angular/core';

// Extra imports
import * as _ from 'underscore';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    private items: any[];
    private field: string;
    private value: string;
    private nodes: string[];

    transform(
        items: any[],
        field: string,
        value: string
    ): any[] {

        this.items = items;
        this.field = field;
        this.value = value;

        if (this.items && this.field && this.value){
            this.nodes = this.field ? this.field.split(".") : [];
            this.items = _.filter(this.items, (item) => this.traverse(item) === this.value);
        }

        return this.items;
    }

    private traverse(item): any {
        for (var i = 0; i < this.nodes.length; i++) {
            item = item[this.nodes[i]];
        }

        return item;
    }
}
