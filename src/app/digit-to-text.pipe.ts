import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitToText',
})
export class DigitToTextPipe implements PipeTransform {
  private units: string[] = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
  ];
  private teens: string[] = [
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];
  private tens: string[] = [
    '',
    'Ten',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];

  transform(value: number): string {
    if (value === 0) {
      return 'Zero';
    }

    return this.convertToText(value);
  }

  private convertToText(value: number): string {
    if (value <= 10) {
      return this.units[value];
    } else if (value < 20) {
      return this.teens[value - 11];
    } else if (value < 100) {
      return (
        this.tens[Math.floor(value / 10)] +
        (value % 10 !== 0 ? ' ' + this.units[value % 10] : '')
      );
    } else if (value < 1000) {
      return (
        this.units[Math.floor(value / 100)] +
        ' Hundred' +
        (value % 100 !== 0 ? ' ' + this.convertToText(value % 100) : '')
      );
    } else if (value < 10000) {
      return (
        this.units[Math.floor(value / 1000)] +
        ' Thousand' +
        (value % 1000 !== 0 ? ' ' + this.convertToText(value % 1000) : '')
      );
    } else if (value < 100000) {
      return (
        this.tens[Math.floor(value / 10000)] +
        ' Thousand' +
        (value % 1000 !== 0 ? ' ' + this.convertToText(value % 1000) : '')
      );
    } else if (value < 1000000) {
      return (
        this.units[Math.floor(value / 100000)] +
        ' Lakh' +
        (value % 100000 !== 0 ? ' ' + this.convertToText(value % 100000) : '')
      );
    } else {
      return 'Number is too large for conversion';
    }
  }
}
