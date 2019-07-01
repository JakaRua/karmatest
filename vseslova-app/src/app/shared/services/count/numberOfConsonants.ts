import { Injectable } from '@angular/core';

@Injectable()
export class NumberOfConsonants {

    constructor() {}

    count(str: string){
        if(str !== null){
            const m = str.match(/[qwrtpsdfghjklzxcvbnmцкнгшщзхъфвпрлджчсмтьб]/gi);
            return m === null ? 0 : m.length;
        } else {
            return 0;
        }

    }
}



