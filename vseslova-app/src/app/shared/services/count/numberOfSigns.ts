import { Injectable } from '@angular/core';

@Injectable()
export class NumberOfSigns {

    constructor() {}

    count(str: string){
        const m = str.match(/[!@#$^&%*()+=-[\]\/{}|:<>?,. ]/gi);
        return m === null ? 0 : m.length;
    }
}



