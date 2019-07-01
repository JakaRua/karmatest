import { Component } from '@angular/core';
import { NumberOfVowels } from './shared/services/count/numberOfVowels';
import { NumberOfConsonants } from './shared/services/count/numberOfConsonants';
import { NumberOfSigns } from './shared/services/count/numberOfSigns';
import {} from ''

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vseslova-app';
  val: string = null;
  vowels: number = null;
  consonants: number = null;
  signs: number = null;
  length: number = null;
  constructor(
      private numberOfVowels: NumberOfVowels,
      private numberOfConsonants: NumberOfConsonants,
      private numberOfSigns: NumberOfSigns
  ){

  }

  onChange($event){
    this.val = $event.target.value;
    this.vowels = this.numberOfVowels.count(this.val);
    this.consonants = this.numberOfConsonants.count(this.val);
    this.signs = this.numberOfSigns.count(this.val);
    this.length = this.val.length;
  }
}
