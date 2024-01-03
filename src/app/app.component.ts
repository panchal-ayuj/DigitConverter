import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { DigitToTextPipe } from './digit-to-text.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  inputDigit!: number;
  convert: boolean = false;

  convertDigit() {
    this.convert = true;
  }

  onInputDigitChange() {
    this.convert = false;
  }
}
