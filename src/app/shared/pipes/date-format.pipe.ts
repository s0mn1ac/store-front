import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  transform(element: any): any {
    return this.datePipe.transform(element, 'dd/MM/yyyy');
  }

}
