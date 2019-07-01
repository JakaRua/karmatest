import { Injectable } from '@angular/core';

@Injectable()
export class NumberOfVowels {

    constructor() {}

    count(str: string){
        const m = str.match(/[aeiouуеоаыяиюії]/gi);
        return m === null ? 0 : m.length;
    }
}



