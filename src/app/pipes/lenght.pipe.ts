import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lenght'
})
export class LenghtPipe implements PipeTransform {

  transform(lenght?: string, ...args: unknown[]): any {

    if (!lenght) {
      return 'No Data';
    }

    let lenghtTemp: number = Number(lenght);

    if (lenghtTemp > 1000) {
      return 'large';
    }

    if (lenghtTemp <= 1000 && lenghtTemp >= 100) {
      return 'normal';
    }

    if (lenghtTemp < 100) {
      return 'small';
    }
  }

}
