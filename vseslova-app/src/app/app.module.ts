import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { NumberOfVowels } from './shared/services/count/numberOfVowels';
import { NumberOfConsonants } from './shared/services/count/numberOfConsonants';
import { NumberOfSigns } from './shared/services/count/numberOfSigns';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    NumberOfVowels,
    NumberOfConsonants,
    NumberOfSigns
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
