import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlepipe'
})
export class TitlepipePipe implements PipeTransform {

  transform(value: string): string {

    if (value.length > 15) {
      return value.substring(0,15).concat("...")
    }

    return value;
  }

}
