import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NumberOfVowels} from "./shared/services/count/numberOfVowels";
import {NumberOfConsonants} from "./shared/services/count/numberOfConsonants";
import {NumberOfSigns} from "./shared/services/count/numberOfSigns";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material-module";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MaterialModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        NumberOfVowels,
        NumberOfConsonants,
        NumberOfSigns
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
